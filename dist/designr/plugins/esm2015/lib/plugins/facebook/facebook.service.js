/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService, OnceService, RouteService } from '@designr/core';
import { PageService } from '@designr/page';
import { from, of } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
import * as i3 from "@designr/page";
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
     * @param {?} pageService
     */
    constructor(platformId, pluginsService, storageService, onceService, routeService, pageService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.pageService = pageService;
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
        if (this.options.appId) {
            this.pageService.addOrUpdateMeta({ property: 'fb:app_id', content: this.options.appId.toString() });
        }
        // console.log('FacebookService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    facebook() {
        //  && window.location.protocol.indexOf('https') !== -1
        if (isPlatformBrowser(this.platformId)) {
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
    { type: RouteService },
    { type: PageService }
];
/** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService), i0.inject(i2.RouteService), i0.inject(i3.PageService)); }, token: FacebookService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.pageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRTlELE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBRVEsV0FBTSxHQUFXLDhEQUE4RCxDQUFDO1FBQ2hGLFVBQUssR0FBVyx1QkFBdUIsQ0FBQyxDQUFDLGlCQUFpQjtRQUUxRCxZQUFPLEdBQVcsT0FBTyxDQUFDO0lBQ2xDLENBQUM7Q0FBQTs7O0lBTEEsK0JBQXFCOztJQUNyQixnQ0FBdUY7O0lBQ3ZGLCtCQUErQzs7SUFDL0MscUNBQTJCOztJQUMzQixpQ0FBaUM7O0FBR2xDLE1BQU0sT0FBTyxvQkFBb0I7Q0FLaEM7OztJQUpBLDJDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLHNDQUFlOztBQUdoQixNQUFNLE9BQU8sbUJBQW1CO0NBSy9COzs7SUFKQSxxQ0FBZTs7SUFDZiw0Q0FBdUI7O0lBQ3ZCLGtDQUFZOztJQUNaLG9DQUFjOztBQUdm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WUFBWSxDQUFDO3dCQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO3dCQUNuRCxzREFBc0Q7d0JBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZDtnQkFDRixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7O1lBdE1ELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FTRSxNQUFNLFNBQUMsV0FBVztZQWxEWixjQUFjO1lBSmQsbUJBQW1CO1lBQUUsV0FBVztZQUFFLFlBQVk7WUFDOUMsV0FBVzs7Ozs7SUErQ25CLHVDQUEwQzs7SUFDMUMsa0NBQStCOzs7OztJQUMvQixrQ0FBZ0M7Ozs7O0lBQ2hDLDZCQUFnQjs7Ozs7SUFHZixxQ0FBK0M7Ozs7O0lBQy9DLHlDQUFzQzs7Ozs7SUFDdEMseUNBQTJDOzs7OztJQUMzQyxzQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFrQzs7Ozs7SUFDbEMsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgT25jZVNlcnZpY2UsIFJvdXRlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tDb25maWcge1xuXHRwdWJsaWMgYXBwSWQ6IG51bWJlcjtcblx0cHVibGljIGZpZWxkczogc3RyaW5nID0gJ2lkLG5hbWUsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsZ2VuZGVyLHBpY3R1cmUsY292ZXIsbGluayc7XG5cdHB1YmxpYyBzY29wZTogc3RyaW5nID0gJ3B1YmxpY19wcm9maWxlLCBlbWFpbCc7IC8vIHB1Ymxpc2hfc3RyZWFtXG5cdHB1YmxpYyB0b2tlbkNsaWVudDogc3RyaW5nO1xuXHRwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gJ3YyLjEwJztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQXV0aFJlc3BvbnNlIHtcblx0YWNjZXNzVG9rZW46IHN0cmluZztcblx0ZXhwaXJlc0luOiBudW1iZXI7XG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmVEYXRhIHtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdGlzX3NpbGhvdWV0dGU6IGJvb2xlYW47XG5cdHVybDogc3RyaW5nO1xuXHR3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlIHtcblx0ZGF0YTogRmFjZWJvb2tQaWN0dXJlRGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0X25hbWU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bGFzdF9uYW1lOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0cGljdHVyZTogRmFjZWJvb2tQaWN0dXJlO1xuXHRhdXRoUmVzcG9uc2U/OiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0ZmFjZWJvb2tUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYXV0aFJlc3BvbnNlOiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRwcml2YXRlIG9wdGlvbnM6IEZhY2Vib29rQ29uZmlnO1xuXHRwcml2YXRlIEZCOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5mYWNlYm9vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGYWNlYm9va1NlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZmFjZWJvb2snKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgRmFjZWJvb2tDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZmFjZWJvb2snKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmFwcElkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogdGhpcy5vcHRpb25zLmFwcElkLnRvU3RyaW5nKCkgfSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgRmFjZWJvb2tTZXJ2aWNlLmZhY2Vib29rIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRmYWNlYm9vaygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vICAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTFcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuRkIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuRkIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCcvL2Nvbm5lY3QuZmFjZWJvb2submV0LycgKyB0aGlzLnJvdXRlU2VydmljZS5jdXJyZW50TGFuZyArICcvc2RrLmpzJywgJ2ZiQXN5bmNJbml0JykucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHRcdFx0XHRcdGNvbnN0IEZCID0gd2luZG93WydGQiddO1xuXHRcdFx0XHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0aGlzLm9wdGlvbnMuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdC8vIHN0YXR1czogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y29va2llOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR4ZmJtbDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcnNpb24sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuRkIgPSBGQjtcblx0XHRcdFx0XHRcdHJldHVybiBvZihGQik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYuZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHguZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Zi5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0bG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZicsIGYpO1xuXHRcdFx0XHRcdGYubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGdldE1lKGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8RmFjZWJvb2tVc2VyPiB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKGwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZTxGYWNlYm9va1VzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5vcHRpb25zLmZpZWxkcztcblx0XHRcdFx0XHR0aGlzLkZCLmFwaSgnL21lJywge1xuXHRcdFx0XHRcdFx0ZmllbGRzOiBmaWVsZHMsXG5cdFx0XHRcdFx0XHRhY2Nlc3NUb2tlbjogdGhpcy5vcHRpb25zLnRva2VuQ2xpZW50LFxuXHRcdFx0XHRcdH0sIChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXIgfHwgci5lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IHIgPyByLmVycm9yIDogJ2Vycm9yJztcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIuZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdXNlciA9IHIgYXMgRmFjZWJvb2tVc2VyO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmF1dGhSZXNwb25zZSA9IHRoaXMuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmZhY2Vib29rVG9rZW4gPSB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5zdWNjZXNzJywgdXNlcik7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodXNlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=