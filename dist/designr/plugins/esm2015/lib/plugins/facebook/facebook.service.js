/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService, OnceService, RouteService } from '@designr/core';
import { from, of } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
export class FacebookConfig {
    constructor() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
}
if (false) {
    /** @type {?} */
    FacebookConfig.prototype.appId;
    /** @type {?} */
    FacebookConfig.prototype.fields;
    /** @type {?} */
    FacebookConfig.prototype.scope;
    /** @type {?} */
    FacebookConfig.prototype.tokenClient;
    /** @type {?} */
    FacebookConfig.prototype.version;
}
export class FacebookAuthResponse {
}
if (false) {
    /** @type {?} */
    FacebookAuthResponse.prototype.accessToken;
    /** @type {?} */
    FacebookAuthResponse.prototype.expiresIn;
    /** @type {?} */
    FacebookAuthResponse.prototype.signedRequest;
    /** @type {?} */
    FacebookAuthResponse.prototype.userID;
}
export class FacebookPictureData {
}
if (false) {
    /** @type {?} */
    FacebookPictureData.prototype.height;
    /** @type {?} */
    FacebookPictureData.prototype.is_silhouette;
    /** @type {?} */
    FacebookPictureData.prototype.url;
    /** @type {?} */
    FacebookPictureData.prototype.width;
}
export class FacebookPicture {
}
if (false) {
    /** @type {?} */
    FacebookPicture.prototype.data;
}
export class FacebookUser {
}
if (false) {
    /** @type {?} */
    FacebookUser.prototype.email;
    /** @type {?} */
    FacebookUser.prototype.first_name;
    /** @type {?} */
    FacebookUser.prototype.id;
    /** @type {?} */
    FacebookUser.prototype.last_name;
    /** @type {?} */
    FacebookUser.prototype.name;
    /** @type {?} */
    FacebookUser.prototype.picture;
    /** @type {?} */
    FacebookUser.prototype.authResponse;
    /** @type {?} */
    FacebookUser.prototype.facebookToken;
}
export class FacebookService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} storageService
     * @param {?} onceService
     * @param {?} routeService
     */
    constructor(platformId, pluginsService, storageService, onceService, routeService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.facebook) {
            throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
        }
        this.options = Object.assign(new FacebookConfig(), this.pluginsService.options.facebook);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('facebook');
        // console.log('FacebookService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    facebook() {
        if (isPlatformBrowser(this.platformId) && window.location.protocol.indexOf('https') !== -1) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(x => {
                    // console.log(x);
                    /** @type {?} */
                    const FB = window['FB'];
                    FB.init({
                        appId: this.options.appId,
                        // status: true,
                        cookie: true,
                        xfbml: true,
                        version: this.options.version,
                    });
                    this.FB = FB;
                    return of(FB);
                }));
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    status() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.getLoginStatus((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    /**
     * @return {?}
     */
    login() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.login((r) => {
                    this.authResponse = null;
                    if (r.status === 'connected') {
                        this.authResponse = r.authResponse;
                        this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    } else if (r.status === 'not_authorized') {
                        this.storage.delete('facebook');
                        reject(r);
                    } else {
                        reject(r);
                    }
                }, { scope: this.options.scope });
            });
        }));
        */
    }
    /**
     * @return {?}
     */
    logout() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                // console.log('f', f);
                f.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            }));
        }));
        /*
        return from(new Promise((resolve, reject) => {
            this.facebook().subscribe(x => {
                x.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            });
        }));
        */
    }
    /**
     * @param {?=} fields
     * @return {?}
     */
    getMe(fields) {
        return this.login().pipe(concatMap(l => {
            return from(new Promise((resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (r) => {
                    if (!r || r.error) {
                        /** @type {?} */
                        const error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        const user = (/** @type {?} */ (r));
                        user.authResponse = this.authResponse;
                        user.facebookToken = this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    }
}
FacebookService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FacebookService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: LocalStorageService },
    { type: OnceService },
    { type: RouteService }
];
/** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService), i0.inject(i2.RouteService)); }, token: FacebookService, providedIn: "root" });
if (false) {
    /** @type {?} */
    FacebookService.prototype.authResponse;
    /** @type {?} */
    FacebookService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.FB;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRTlELE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBRVEsV0FBTSxHQUFXLDhEQUE4RCxDQUFDO1FBQ2hGLFVBQUssR0FBVyx1QkFBdUIsQ0FBQyxDQUFDLGlCQUFpQjtRQUUxRCxZQUFPLEdBQVcsT0FBTyxDQUFDO0lBQ2xDLENBQUM7Q0FBQTs7O0lBTEEsK0JBQXFCOztJQUNyQixnQ0FBdUY7O0lBQ3ZGLCtCQUErQzs7SUFDL0MscUNBQTJCOztJQUMzQixpQ0FBaUM7O0FBR2xDLE1BQU0sT0FBTyxvQkFBb0I7Q0FLaEM7OztJQUpBLDJDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLHNDQUFlOztBQUdoQixNQUFNLE9BQU8sbUJBQW1CO0NBSy9COzs7SUFKQSxxQ0FBZTs7SUFDZiw0Q0FBdUI7O0lBQ3ZCLGtDQUFZOztJQUNaLG9DQUFjOztBQUdmLE1BQU0sT0FBTyxlQUFlO0NBRTNCOzs7SUFEQSwrQkFBMEI7O0FBRzNC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QUM7OztZQWpNRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBU0UsTUFBTSxTQUFDLFdBQVc7WUFsRFosY0FBYztZQUhkLG1CQUFtQjtZQUFFLFdBQVc7WUFBRSxZQUFZOzs7OztJQStDdEQsdUNBQTBDOztJQUMxQyxrQ0FBK0I7Ozs7O0lBQy9CLGtDQUFnQzs7Ozs7SUFDaEMsNkJBQWdCOzs7OztJQUdmLHFDQUErQzs7Ozs7SUFDL0MseUNBQXNDOzs7OztJQUN0Qyx5Q0FBMkM7Ozs7O0lBQzNDLHNDQUFnQzs7Ozs7SUFDaEMsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgT25jZVNlcnZpY2UsIFJvdXRlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va0NvbmZpZyB7XG5cdHB1YmxpYyBhcHBJZDogbnVtYmVyO1xuXHRwdWJsaWMgZmllbGRzOiBzdHJpbmcgPSAnaWQsbmFtZSxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxnZW5kZXIscGljdHVyZSxjb3ZlcixsaW5rJztcblx0cHVibGljIHNjb3BlOiBzdHJpbmcgPSAncHVibGljX3Byb2ZpbGUsIGVtYWlsJzsgLy8gcHVibGlzaF9zdHJlYW1cblx0cHVibGljIHRva2VuQ2xpZW50OiBzdHJpbmc7XG5cdHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmcgPSAndjIuMTAnO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tBdXRoUmVzcG9uc2Uge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRleHBpcmVzSW46IG51bWJlcjtcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZURhdGEge1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0aXNfc2lsaG91ZXR0ZTogYm9vbGVhbjtcblx0dXJsOiBzdHJpbmc7XG5cdHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmUge1xuXHRkYXRhOiBGYWNlYm9va1BpY3R1cmVEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tVc2VyIHtcblx0ZW1haWw6IHN0cmluZztcblx0Zmlyc3RfbmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0X25hbWU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwaWN0dXJlOiBGYWNlYm9va1BpY3R1cmU7XG5cdGF1dGhSZXNwb25zZT86IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRmYWNlYm9va1Rva2VuPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYWNlYm9va1NlcnZpY2Uge1xuXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogRmFjZWJvb2tDb25maWc7XG5cdHByaXZhdGUgRkI6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZhY2Vib29rU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5mYWNlYm9vaycpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBGYWNlYm9va0NvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZmFjZWJvb2spO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB0aGlzLnN0b3JhZ2UuZ2V0KCdmYWNlYm9vaycpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgRmFjZWJvb2tTZXJ2aWNlLmZhY2Vib29rIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRmYWNlYm9vaygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwcycpICE9PSAtMSkge1xuXHRcdFx0aWYgKHRoaXMuRkIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuRkIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCcvL2Nvbm5lY3QuZmFjZWJvb2submV0LycgKyB0aGlzLnJvdXRlU2VydmljZS5jdXJyZW50TGFuZyArICcvc2RrLmpzJywgJ2ZiQXN5bmNJbml0JykucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHRcdFx0XHRcdGNvbnN0IEZCID0gd2luZG93WydGQiddO1xuXHRcdFx0XHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0aGlzLm9wdGlvbnMuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdC8vIHN0YXR1czogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y29va2llOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR4ZmJtbDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcnNpb24sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuRkIgPSBGQjtcblx0XHRcdFx0XHRcdHJldHVybiBvZihGQik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYuZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHguZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Zi5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0bG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZicsIGYpO1xuXHRcdFx0XHRcdGYubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGdldE1lKGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8RmFjZWJvb2tVc2VyPiB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKGwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZTxGYWNlYm9va1VzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5vcHRpb25zLmZpZWxkcztcblx0XHRcdFx0XHR0aGlzLkZCLmFwaSgnL21lJywge1xuXHRcdFx0XHRcdFx0ZmllbGRzOiBmaWVsZHMsXG5cdFx0XHRcdFx0XHRhY2Nlc3NUb2tlbjogdGhpcy5vcHRpb25zLnRva2VuQ2xpZW50LFxuXHRcdFx0XHRcdH0sIChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXIgfHwgci5lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IHIgPyByLmVycm9yIDogJ2Vycm9yJztcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIuZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdXNlciA9IHIgYXMgRmFjZWJvb2tVc2VyO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmF1dGhSZXNwb25zZSA9IHRoaXMuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmZhY2Vib29rVG9rZW4gPSB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5zdWNjZXNzJywgdXNlcik7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodXNlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=