/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
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
                })));
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
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                f.getLoginStatus((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
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
                }), { scope: this.options.scope });
            })));
        })));
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
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                f.login((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
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
                }), { scope: this.options.scope });
            })));
        })));
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
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        f => f !== null)), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                // console.log('f', f);
                f.logout((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => {
                    resolve(r);
                    this.storage.delete('facebook');
                }));
            })));
        })));
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
        return this.login().pipe(concatMap((/**
         * @param {?} l
         * @return {?}
         */
        l => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
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
                }));
            })));
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRTlELE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBRVEsV0FBTSxHQUFXLDhEQUE4RCxDQUFDO1FBQ2hGLFVBQUssR0FBVyx1QkFBdUIsQ0FBQyxDQUFDLGlCQUFpQjtRQUUxRCxZQUFPLEdBQVcsT0FBTyxDQUFDO0lBQ2xDLENBQUM7Q0FBQTs7O0lBTEEsK0JBQXFCOztJQUNyQixnQ0FBdUY7O0lBQ3ZGLCtCQUErQzs7SUFDL0MscUNBQTJCOztJQUMzQixpQ0FBaUM7O0FBR2xDLE1BQU0sT0FBTyxvQkFBb0I7Q0FLaEM7OztJQUpBLDJDQUFvQjs7SUFDcEIseUNBQWtCOztJQUNsQiw2Q0FBc0I7O0lBQ3RCLHNDQUFlOztBQUdoQixNQUFNLE9BQU8sbUJBQW1CO0NBSy9COzs7SUFKQSxxQ0FBZTs7SUFDZiw0Q0FBdUI7O0lBQ3ZCLGtDQUFZOztJQUNaLG9DQUFjOztBQUdm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QUcsbUJBQUEsQ0FBQyxFQUFnQjt3QkFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO3dCQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO3dCQUNuRCxzREFBc0Q7d0JBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZDtnQkFDRixDQUFDLEVBQUMsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7O1lBdE1ELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FTRSxNQUFNLFNBQUMsV0FBVztZQWxEWixjQUFjO1lBSmQsbUJBQW1CO1lBQUUsV0FBVztZQUFFLFlBQVk7WUFDOUMsV0FBVzs7Ozs7SUErQ25CLHVDQUEwQzs7SUFDMUMsa0NBQStCOzs7OztJQUMvQixrQ0FBZ0M7Ozs7O0lBQ2hDLDZCQUFnQjs7Ozs7SUFHZixxQ0FBK0M7Ozs7O0lBQy9DLHlDQUFzQzs7Ozs7SUFDdEMseUNBQTJDOzs7OztJQUMzQyxzQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFrQzs7Ozs7SUFDbEMsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIE9uY2VTZXJ2aWNlLCBSb3V0ZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQ29uZmlnIHtcclxuXHRwdWJsaWMgYXBwSWQ6IG51bWJlcjtcclxuXHRwdWJsaWMgZmllbGRzOiBzdHJpbmcgPSAnaWQsbmFtZSxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxnZW5kZXIscGljdHVyZSxjb3ZlcixsaW5rJztcclxuXHRwdWJsaWMgc2NvcGU6IHN0cmluZyA9ICdwdWJsaWNfcHJvZmlsZSwgZW1haWwnOyAvLyBwdWJsaXNoX3N0cmVhbVxyXG5cdHB1YmxpYyB0b2tlbkNsaWVudDogc3RyaW5nO1xyXG5cdHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmcgPSAndjIuMTAnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tBdXRoUmVzcG9uc2Uge1xyXG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcblx0ZXhwaXJlc0luOiBudW1iZXI7XHJcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xyXG5cdHVzZXJJRDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlRGF0YSB7XHJcblx0aGVpZ2h0OiBudW1iZXI7XHJcblx0aXNfc2lsaG91ZXR0ZTogYm9vbGVhbjtcclxuXHR1cmw6IHN0cmluZztcclxuXHR3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlIHtcclxuXHRkYXRhOiBGYWNlYm9va1BpY3R1cmVEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tVc2VyIHtcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGZpcnN0X25hbWU6IHN0cmluZztcclxuXHRpZDogc3RyaW5nO1xyXG5cdGxhc3RfbmFtZTogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRwaWN0dXJlOiBGYWNlYm9va1BpY3R1cmU7XHJcblx0YXV0aFJlc3BvbnNlPzogRmFjZWJvb2tBdXRoUmVzcG9uc2U7XHJcblx0ZmFjZWJvb2tUb2tlbj86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIGF1dGhSZXNwb25zZTogRmFjZWJvb2tBdXRoUmVzcG9uc2U7XHJcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xyXG5cdHByaXZhdGUgb3B0aW9uczogRmFjZWJvb2tDb25maWc7XHJcblx0cHJpdmF0ZSBGQjogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRmFjZWJvb2tTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmZhY2Vib29rJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBGYWNlYm9va0NvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZmFjZWJvb2spO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcclxuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZmFjZWJvb2snKTtcclxuXHRcdGlmICh0aGlzLm9wdGlvbnMuYXBwSWQpIHtcclxuXHRcdFx0dGhpcy5wYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGEoeyBwcm9wZXJ0eTogJ2ZiOmFwcF9pZCcsIGNvbnRlbnQ6IHRoaXMub3B0aW9ucy5hcHBJZC50b1N0cmluZygpIH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5hdXRoUmVzcG9uc2UnLCB0aGlzLmF1dGhSZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQqICBjYWxsIEZhY2Vib29rU2VydmljZS5mYWNlYm9vayBvbiBjb21wb25lbnQgT25Jbml0IHRvIGF2b2lkIHBvcHVwIGJsb2NrZXJzIHZpYSBhc3luY3Jvbm91cyBsb2FkaW5nICpcclxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cclxuXHJcblx0ZmFjZWJvb2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdC8vICAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTFcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLkZCKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuRkIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdCgnLy9jb25uZWN0LmZhY2Vib29rLm5ldC8nICsgdGhpcy5yb3V0ZVNlcnZpY2UuY3VycmVudExhbmcgKyAnL3Nkay5qcycsICdmYkFzeW5jSW5pdCcpLnBpcGUoXHJcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHgpO1xyXG5cdFx0XHRcdFx0XHRjb25zdCBGQiA9IHdpbmRvd1snRkInXTtcclxuXHRcdFx0XHRcdFx0RkIuaW5pdCh7XHJcblx0XHRcdFx0XHRcdFx0YXBwSWQ6IHRoaXMub3B0aW9ucy5hcHBJZCxcclxuXHRcdFx0XHRcdFx0XHQvLyBzdGF0dXM6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y29va2llOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHhmYm1sOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhpcy5GQiA9IEZCO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YoRkIpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0dXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXHJcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxyXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Zi5nZXRMb2dpblN0YXR1cygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0LypcclxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcclxuXHRcdFx0XHR4LmdldExvZ2luU3RhdHVzKChyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XHJcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xyXG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pKTtcclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcclxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXHJcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRmLmxvZ2luKChyKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvKlxyXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xyXG5cdFx0XHRcdHgubG9naW4oKHIpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcclxuXHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XHJcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSkpO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcclxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdmJywgZik7XHJcblx0XHRcdFx0XHRmLmxvZ291dChyID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvKlxyXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xyXG5cdFx0XHRcdHgubG9nb3V0KHIgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyKTtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSkpO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdGdldE1lKGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8RmFjZWJvb2tVc2VyPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5sb2dpbigpLnBpcGUoXHJcblx0XHRcdGNvbmNhdE1hcChsID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZTxGYWNlYm9va1VzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLm9wdGlvbnMuZmllbGRzO1xyXG5cdFx0XHRcdFx0dGhpcy5GQi5hcGkoJy9tZScsIHtcclxuXHRcdFx0XHRcdFx0ZmllbGRzOiBmaWVsZHMsXHJcblx0XHRcdFx0XHRcdGFjY2Vzc1Rva2VuOiB0aGlzLm9wdGlvbnMudG9rZW5DbGllbnQsXHJcblx0XHRcdFx0XHR9LCAocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXIgfHwgci5lcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gciA/IHIuZXJyb3IgOiAnZXJyb3InO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuZXJyb3InLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIuZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSByIGFzIEZhY2Vib29rVXNlcjtcclxuXHRcdFx0XHRcdFx0XHR1c2VyLmF1dGhSZXNwb25zZSA9IHRoaXMuYXV0aFJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0XHRcdHVzZXIuZmFjZWJvb2tUb2tlbiA9IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xyXG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuc3VjY2VzcycsIHVzZXIpO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodXNlcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=