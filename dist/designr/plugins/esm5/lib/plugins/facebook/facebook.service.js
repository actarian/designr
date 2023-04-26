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
var FacebookConfig = /** @class */ (function () {
    function FacebookConfig() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
    return FacebookConfig;
}());
export { FacebookConfig };
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
var FacebookAuthResponse = /** @class */ (function () {
    function FacebookAuthResponse() {
    }
    return FacebookAuthResponse;
}());
export { FacebookAuthResponse };
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
var FacebookPictureData = /** @class */ (function () {
    function FacebookPictureData() {
    }
    return FacebookPictureData;
}());
export { FacebookPictureData };
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
var FacebookPicture = /** @class */ (function () {
    function FacebookPicture() {
    }
    return FacebookPicture;
}());
export { FacebookPicture };
if (false) {
    /** @type {?} */
    FacebookPicture.prototype.data;
}
var FacebookUser = /** @class */ (function () {
    function FacebookUser() {
    }
    return FacebookUser;
}());
export { FacebookUser };
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
var FacebookService = /** @class */ (function () {
    function FacebookService(platformId, pluginsService, storageService, onceService, routeService, pageService) {
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
    FacebookService.prototype.init = /**
     * @return {?}
     */
    function () {
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
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    FacebookService.prototype.facebook = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
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
                function (x) {
                    // console.log(x);
                    /** @type {?} */
                    var FB = window['FB'];
                    FB.init({
                        appId: _this.options.appId,
                        // status: true,
                        cookie: true,
                        xfbml: true,
                        version: _this.options.version,
                    });
                    _this.FB = FB;
                    return of(FB);
                })));
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.status = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f !== null; })), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                f.getLoginStatus((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    _this.authResponse = null;
                    if (r.status === 'connected') {
                        _this.authResponse = r.authResponse;
                        _this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        _this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }), { scope: _this.options.scope });
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
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f !== null; })), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                f.login((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    _this.authResponse = null;
                    if (r.status === 'connected') {
                        _this.authResponse = r.authResponse;
                        _this.storage.set('facebook', r.authResponse);
                        resolve(r);
                    }
                    else if (r.status === 'not_authorized') {
                        _this.storage.delete('facebook');
                        reject(r);
                    }
                    else {
                        reject(r);
                    }
                }), { scope: _this.options.scope });
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
    };
    /**
     * @return {?}
     */
    FacebookService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facebook().pipe(filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f !== null; })), concatMap((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                // console.log('f', f);
                f.logout((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    resolve(r);
                    _this.storage.delete('facebook');
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
    };
    /**
     * @param {?=} fields
     * @return {?}
     */
    FacebookService.prototype.getMe = /**
     * @param {?=} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return this.login().pipe(concatMap((/**
         * @param {?} l
         * @return {?}
         */
        function (l) {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                fields = fields || _this.options.fields;
                _this.FB.api('/me', {
                    fields: fields,
                    accessToken: _this.options.tokenClient,
                }, (/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    if (!r || r.error) {
                        /** @type {?} */
                        var error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        var user = (/** @type {?} */ (r));
                        user.authResponse = _this.authResponse;
                        user.facebookToken = _this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                }));
            })));
        })));
    };
    FacebookService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: LocalStorageService },
        { type: OnceService },
        { type: RouteService },
        { type: PageService }
    ]; };
    /** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService), i0.inject(i2.RouteService), i0.inject(i3.PageService)); }, token: FacebookService, providedIn: "root" });
    return FacebookService;
}());
export { FacebookService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRTlEO0lBQUE7UUFFUSxXQUFNLEdBQVcsOERBQThELENBQUM7UUFDaEYsVUFBSyxHQUFXLHVCQUF1QixDQUFDLENBQUMsaUJBQWlCO1FBRTFELFlBQU8sR0FBVyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQSwrQkFBcUI7O0lBQ3JCLGdDQUF1Rjs7SUFDdkYsK0JBQStDOztJQUMvQyxxQ0FBMkI7O0lBQzNCLGlDQUFpQzs7QUFHbEM7SUFBQTtJQUtBLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkEsMkNBQW9COztJQUNwQix5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsc0NBQWU7O0FBR2hCO0lBQUE7SUFLQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFL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LEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTzt3QkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDbEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDaEI7eUJBQU07OzRCQUNBLElBQUksR0FBRyxtQkFBQSxDQUFDLEVBQWdCO3dCQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7d0JBQ25ELHNEQUFzRDt3QkFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNkO2dCQUNGLENBQUMsRUFBQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOztnQkF0TUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs2Q0FTRSxNQUFNLFNBQUMsV0FBVztnQkFsRFosY0FBYztnQkFKZCxtQkFBbUI7Z0JBQUUsV0FBVztnQkFBRSxZQUFZO2dCQUM5QyxXQUFXOzs7MEJBTnBCO0NBd1BDLEFBeE1ELElBd01DO1NBck1ZLGVBQWU7OztJQUUzQix1Q0FBMEM7O0lBQzFDLGtDQUErQjs7Ozs7SUFDL0Isa0NBQWdDOzs7OztJQUNoQyw2QkFBZ0I7Ozs7O0lBR2YscUNBQStDOzs7OztJQUMvQyx5Q0FBc0M7Ozs7O0lBQ3RDLHlDQUEyQzs7Ozs7SUFDM0Msc0NBQWdDOzs7OztJQUNoQyx1Q0FBa0M7Ozs7O0lBQ2xDLHNDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPbmNlU2VydmljZSwgUm91dGVTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL3BhZ2UnO1xyXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNlYm9va0NvbmZpZyB7XHJcblx0cHVibGljIGFwcElkOiBudW1iZXI7XHJcblx0cHVibGljIGZpZWxkczogc3RyaW5nID0gJ2lkLG5hbWUsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsZ2VuZGVyLHBpY3R1cmUsY292ZXIsbGluayc7XHJcblx0cHVibGljIHNjb3BlOiBzdHJpbmcgPSAncHVibGljX3Byb2ZpbGUsIGVtYWlsJzsgLy8gcHVibGlzaF9zdHJlYW1cclxuXHRwdWJsaWMgdG9rZW5DbGllbnQ6IHN0cmluZztcclxuXHRwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gJ3YyLjEwJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQXV0aFJlc3BvbnNlIHtcclxuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG5cdGV4cGlyZXNJbjogbnVtYmVyO1xyXG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcclxuXHR1c2VySUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZURhdGEge1xyXG5cdGhlaWdodDogbnVtYmVyO1xyXG5cdGlzX3NpbGhvdWV0dGU6IGJvb2xlYW47XHJcblx0dXJsOiBzdHJpbmc7XHJcblx0d2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZSB7XHJcblx0ZGF0YTogRmFjZWJvb2tQaWN0dXJlRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rVXNlciB7XHJcblx0ZW1haWw6IHN0cmluZztcclxuXHRmaXJzdF9uYW1lOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRsYXN0X25hbWU6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0cGljdHVyZTogRmFjZWJvb2tQaWN0dXJlO1xyXG5cdGF1dGhSZXNwb25zZT86IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xyXG5cdGZhY2Vib29rVG9rZW4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2Vib29rU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xyXG5cdHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlU2VydmljZTtcclxuXHRwcml2YXRlIG9wdGlvbnM6IEZhY2Vib29rQ29uZmlnO1xyXG5cdHByaXZhdGUgRkI6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5mYWNlYm9vaykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZhY2Vib29rU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5mYWNlYm9vaycpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgRmFjZWJvb2tDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKTtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XHJcblx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHRoaXMuc3RvcmFnZS5nZXQoJ2ZhY2Vib29rJyk7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmFwcElkKSB7XHJcblx0XHRcdHRoaXMucGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdmYjphcHBfaWQnLCBjb250ZW50OiB0aGlzLm9wdGlvbnMuYXBwSWQudG9TdHJpbmcoKSB9KTtcclxuXHRcdH1cclxuXHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXHJcblx0KiAgY2FsbCBGYWNlYm9va1NlcnZpY2UuZmFjZWJvb2sgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXHJcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdGZhY2Vib29rKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHQvLyAgJiYgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHBzJykgIT09IC0xXHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRpZiAodGhpcy5GQikge1xyXG5cdFx0XHRcdHJldHVybiBvZih0aGlzLkZCKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJy8vY29ubmVjdC5mYWNlYm9vay5uZXQvJyArIHRoaXMucm91dGVTZXJ2aWNlLmN1cnJlbnRMYW5nICsgJy9zZGsuanMnLCAnZmJBc3luY0luaXQnKS5waXBlKFxyXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcclxuXHRcdFx0XHRcdFx0Y29uc3QgRkIgPSB3aW5kb3dbJ0ZCJ107XHJcblx0XHRcdFx0XHRcdEZCLmluaXQoe1xyXG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0aGlzLm9wdGlvbnMuYXBwSWQsXHJcblx0XHRcdFx0XHRcdFx0Ly8gc3RhdHVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGNvb2tpZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR4ZmJtbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuRkIgPSBGQjtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKEZCKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdHVzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcclxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdGYuZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8qXHJcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XHJcblx0XHRcdFx0eC5nZXRMb2dpblN0YXR1cygocikgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xyXG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KSk7XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0bG9naW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXHJcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxyXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0Zi5sb2dpbigocikgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0LypcclxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcclxuXHRcdFx0XHR4LmxvZ2luKChyKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XHJcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xyXG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pKTtcclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcclxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXHJcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZicsIGYpO1xyXG5cdFx0XHRcdFx0Zi5sb2dvdXQociA9PiB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0LypcclxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcclxuXHRcdFx0XHR4LmxvZ291dChyID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocik7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pKTtcclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRnZXRNZShmaWVsZHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZhY2Vib29rVXNlcj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxyXG5cdFx0XHRjb25jYXRNYXAobCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2U8RmFjZWJvb2tVc2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5vcHRpb25zLmZpZWxkcztcclxuXHRcdFx0XHRcdHRoaXMuRkIuYXBpKCcvbWUnLCB7XHJcblx0XHRcdFx0XHRcdGZpZWxkczogZmllbGRzLFxyXG5cdFx0XHRcdFx0XHRhY2Nlc3NUb2tlbjogdGhpcy5vcHRpb25zLnRva2VuQ2xpZW50LFxyXG5cdFx0XHRcdFx0fSwgKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCFyIHx8IHIuZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IHIgPyByLmVycm9yIDogJ2Vycm9yJztcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLmVycm9yJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRcdHJlamVjdChyLmVycm9yKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gciBhcyBGYWNlYm9va1VzZXI7XHJcblx0XHRcdFx0XHRcdFx0dXNlci5hdXRoUmVzcG9uc2UgPSB0aGlzLmF1dGhSZXNwb25zZTtcclxuXHRcdFx0XHRcdFx0XHR1c2VyLmZhY2Vib29rVG9rZW4gPSB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLnN1Y2Nlc3MnLCB1c2VyKTtcclxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHVzZXIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19