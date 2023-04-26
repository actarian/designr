/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService, OnceService } from '@designr/core';
import { from, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
var GoogleConfig = /** @class */ (function () {
    function GoogleConfig() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
    return GoogleConfig;
}());
export { GoogleConfig };
if (false) {
    /** @type {?} */
    GoogleConfig.prototype.clientId;
    /** @type {?} */
    GoogleConfig.prototype.cookiepolicy;
    /** @type {?} */
    GoogleConfig.prototype.scope;
    /** @type {?} */
    GoogleConfig.prototype.fetch_basic_profile;
    /** @type {?} */
    GoogleConfig.prototype.ux_mode;
}
var GoogleAuthResponse = /** @class */ (function () {
    function GoogleAuthResponse() {
    }
    return GoogleAuthResponse;
}());
export { GoogleAuthResponse };
if (false) {
    /** @type {?} */
    GoogleAuthResponse.prototype.token_type;
    /** @type {?} */
    GoogleAuthResponse.prototype.access_token;
    /** @type {?} */
    GoogleAuthResponse.prototype.scope;
    /** @type {?} */
    GoogleAuthResponse.prototype.login_hint;
    /** @type {?} */
    GoogleAuthResponse.prototype.expires_in;
    /** @type {?} */
    GoogleAuthResponse.prototype.expires_at;
    /** @type {?} */
    GoogleAuthResponse.prototype.first_issued_at;
    /** @type {?} */
    GoogleAuthResponse.prototype.id_token;
    /** @type {?} */
    GoogleAuthResponse.prototype.idpId;
    /** @type {?} */
    GoogleAuthResponse.prototype.signedRequest;
    /** @type {?} */
    GoogleAuthResponse.prototype.userID;
}
var GoogleUser = /** @class */ (function () {
    function GoogleUser() {
    }
    return GoogleUser;
}());
export { GoogleUser };
if (false) {
    /** @type {?} */
    GoogleUser.prototype.email;
    /** @type {?} */
    GoogleUser.prototype.firstName;
    /** @type {?} */
    GoogleUser.prototype.id;
    /** @type {?} */
    GoogleUser.prototype.lastName;
    /** @type {?} */
    GoogleUser.prototype.name;
    /** @type {?} */
    GoogleUser.prototype.picture;
    /** @type {?} */
    GoogleUser.prototype.authResponse;
    /** @type {?} */
    GoogleUser.prototype.googleToken;
}
var GoogleService = /** @class */ (function () {
    function GoogleService(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @return {?}
     */
    GoogleService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.google) {
            throw new Error('GoogleService.error missing config object in environment.plugins.google');
        }
        this.options = Object.assign(new GoogleConfig(), this.pluginsService.options.google);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('google');
        // console.log('GoogleService.authResponse', this.authResponse);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.google = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (_this.gapi) {
                    return of(_this.gapi);
                }
                else {
                    return _this.once();
                }
            }));
        }
        else {
            return of(null);
        }
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.getMe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.login().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            /** @type {?} */
            var profile = _this.instance.currentUser.get().getBasicProfile();
            /** @type {?} */
            var user = (/** @type {?} */ ({
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: _this.authResponse,
                googleToken: _this.authResponse.access_token,
            }));
            return of(user);
        })));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return _this.signin();
        })));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                    _this.instance.signOut().then((/**
                     * @param {?} signed
                     * @return {?}
                     */
                    function (signed) {
                        resolve();
                    }), reject);
                }
                else {
                    resolve();
                }
            })));
        })));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.once = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.gapi = window['gapi'];
            return of(_this.gapi);
        })));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.getAuth2 = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable().pipe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.auth2) {
                return of(_this.auth2);
            }
            else {
                return _this.google().pipe(concatMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    if (_this.gapi.auth2) {
                        return _this.auth2init();
                    }
                    else {
                        return from(new Promise((/**
                         * @param {?} resolve
                         * @param {?} reject
                         * @return {?}
                         */
                        function (resolve, reject) {
                            _this.gapi.load('auth2', (/**
                             * @return {?}
                             */
                            function () {
                                setTimeout((/**
                                 * @return {?}
                                 */
                                function () {
                                    resolve();
                                }), 200);
                            }), reject);
                        }))).pipe(concatMap((/**
                         * @param {?} x
                         * @return {?}
                         */
                        function (x) {
                            return _this.auth2init();
                        })));
                    }
                })));
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.signin = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var readAccessToken = (/**
             * @return {?}
             */
            function () {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    /** @type {?} */
                    var user = _this.instance.currentUser.get().getAuthResponse(true);
                    // console.log('GoogleLogin.readAccessToken.success', user);
                    _this.authResponse = user;
                    _this.storage.set('google', user);
                    resolve({
                        code: user.access_token,
                    });
                }
                catch (error) {
                    console.log('GoogleLogin.readAccessToken.error', error);
                    _this.storage.delete('google');
                    reject(error);
                }
            });
            if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                _this.instance.signIn({
                    scope: 'profile email',
                }).then((/**
                 * @param {?} signed
                 * @return {?}
                 */
                function (signed) {
                    readAccessToken();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    _this.storage.delete('google');
                    reject(error);
                }));
            }
        })));
    };
    /**
     * @private
     * @return {?}
     */
    GoogleService.prototype.auth2init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.gapi.auth2.init({
                client_id: _this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then((/**
             * @return {?}
             */
            function () {
                _this.auth2 = _this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(_this.auth2);
            }), reject);
        })));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.auth2Instance = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                _this.instance = _this.auth2.getAuthInstance();
                return of(_this.instance);
            })));
        }
    };
    GoogleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: LocalStorageService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ GoogleService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService)); }, token: GoogleService, providedIn: "root" });
    return GoogleService;
}());
export { GoogleService };
if (false) {
    /** @type {?} */
    GoogleService.prototype.authResponse;
    /** @type {?} */
    GoogleService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.gapi;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.auth2;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.instance;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    GoogleService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtRQUVRLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7UUFDN0MsVUFBSyxHQUFZLGVBQWUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFDckMsWUFBTyxHQUFZLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxBLGdDQUF3Qjs7SUFDeEIsb0NBQW9EOztJQUNwRCw2QkFBd0M7O0lBQ3hDLDJDQUE0Qzs7SUFDNUMsK0JBQWtDOztBQUduQztJQUFBO0lBWUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQSx3Q0FBbUI7O0lBQ25CLDBDQUFxQjs7SUFDckIsbUNBQWM7O0lBQ2Qsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLHdDQUFtQjs7SUFDbkIsNkNBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pCLG1DQUFjOztJQUNkLDJDQUFzQjs7SUFDdEIsb0NBQWU7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Ozs7OztJQUM5Qiw2QkFBa0I7Ozs7O0lBQ2xCLDhCQUFtQjs7Ozs7SUFDbkIsaUNBQXNCOzs7OztJQUdyQixtQ0FBK0M7Ozs7O0lBQy9DLHVDQUFzQzs7Ozs7SUFDdEMsdUNBQTJDOzs7OztJQUMzQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgT25jZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVDb25maWcge1xyXG5cdHB1YmxpYyBjbGllbnRJZDogc3RyaW5nO1xyXG5cdHB1YmxpYyBjb29raWVwb2xpY3k/OiBzdHJpbmcgPSAnc2luZ2xlX2hvc3Rfb3JpZ2luJztcclxuXHRwdWJsaWMgc2NvcGU/OiBzdHJpbmcgPSAncHJvZmlsZSBlbWFpbCc7XHJcblx0cHVibGljIGZldGNoX2Jhc2ljX3Byb2ZpbGU/OiBib29sZWFuID0gdHJ1ZTtcclxuXHRwdWJsaWMgdXhfbW9kZT86IHN0cmluZyA9ICdwb3B1cCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVBdXRoUmVzcG9uc2Uge1xyXG5cdHRva2VuX3R5cGU6IHN0cmluZztcclxuXHRhY2Nlc3NfdG9rZW46IHN0cmluZztcclxuXHRzY29wZTogc3RyaW5nO1xyXG5cdGxvZ2luX2hpbnQ6IHN0cmluZztcclxuXHRleHBpcmVzX2luOiBudW1iZXI7XHJcblx0ZXhwaXJlc19hdDogbnVtYmVyO1xyXG5cdGZpcnN0X2lzc3VlZF9hdDogbnVtYmVyO1xyXG5cdGlkX3Rva2VuOiBzdHJpbmc7XHJcblx0aWRwSWQ6IHN0cmluZztcclxuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XHJcblx0dXNlcklEOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVVc2VyIHtcclxuXHRlbWFpbDogc3RyaW5nO1xyXG5cdGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bGFzdE5hbWU6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0cGljdHVyZTogc3RyaW5nO1xyXG5cdGF1dGhSZXNwb25zZT86IEdvb2dsZUF1dGhSZXNwb25zZTtcclxuXHRnb29nbGVUb2tlbj86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEdvb2dsZUF1dGhSZXNwb25zZTtcclxuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XHJcblx0cHJpdmF0ZSBvcHRpb25zOiBHb29nbGVDb25maWc7XHJcblx0cHJpdmF0ZSBnYXBpOiBhbnk7XHJcblx0cHJpdmF0ZSBhdXRoMjogYW55O1xyXG5cdHByaXZhdGUgaW5zdGFuY2U6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZScpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgR29vZ2xlQ29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGUpO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcclxuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZ29vZ2xlJyk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlU2VydmljZS5hdXRoUmVzcG9uc2UnLCB0aGlzLmF1dGhSZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQqICBjYWxsIEdvb2dsZVNlcnZpY2UuZ29vZ2xlIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxyXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuXHRwcml2YXRlIGdvb2dsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5nYXBpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub25jZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRNZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcclxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHByb2ZpbGUgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEJhc2ljUHJvZmlsZSgpO1xyXG5cdFx0XHRcdGNvbnN0IHVzZXIgPSB7XHJcblx0XHRcdFx0XHRpZDogcHJvZmlsZS5nZXRJZCgpLFxyXG5cdFx0XHRcdFx0bmFtZTogcHJvZmlsZS5nZXROYW1lKCksXHJcblx0XHRcdFx0XHRmaXJzdE5hbWU6IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCksXHJcblx0XHRcdFx0XHRsYXN0TmFtZTogcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCksXHJcblx0XHRcdFx0XHRwaWN0dXJlOiBwcm9maWxlLmdldEltYWdlVXJsKCksXHJcblx0XHRcdFx0XHRlbWFpbDogcHJvZmlsZS5nZXRFbWFpbCgpLFxyXG5cdFx0XHRcdFx0YXV0aFJlc3BvbnNlOiB0aGlzLmF1dGhSZXNwb25zZSxcclxuXHRcdFx0XHRcdGdvb2dsZVRva2VuOiB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NfdG9rZW4sXHJcblx0XHRcdFx0fSBhcyBHb29nbGVVc2VyO1xyXG5cdFx0XHRcdHJldHVybiBvZih1c2VyKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRsb2dpbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxyXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2lnbmluKCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXHJcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gZnJvbShcclxuXHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmluc3RhbmNlLnNpZ25PdXQoKS50aGVuKChzaWduZWQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzP29ubG9hZD17e2NhbGxiYWNrfX0nLCB0cnVlKS5waXBlKFxyXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0dGhpcy5nYXBpID0gd2luZG93WydnYXBpJ107XHJcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRBdXRoMigpIHtcclxuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmF1dGgyKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuYXV0aDIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdvb2dsZSgpLnBpcGUoXHJcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdhcGkuYXV0aDIpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShcclxuXHRcdFx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdCkucGlwZShcclxuXHRcdFx0XHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNpZ25pbigpIHtcclxuXHRcdHJldHVybiBmcm9tKFxyXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVhZEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbicpO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdXNlciA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QXV0aFJlc3BvbnNlKHRydWUpO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLnN1Y2Nlc3MnLCB1c2VyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB1c2VyO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdnb29nbGUnLCB1c2VyKTtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XHJcblx0XHRcdFx0XHRcdFx0Y29kZTogdXNlci5hY2Nlc3NfdG9rZW4sXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5lcnJvcicsIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZ29vZ2xlJyk7XHJcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xyXG5cdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbkluKHtcclxuXHRcdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcclxuXHJcblx0XHRcdFx0XHR9KS50aGVuKChzaWduZWQpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XHJcblxyXG5cdFx0XHRcdFx0fSwgKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xyXG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXV0aDJpbml0KCkge1xyXG5cdFx0cmV0dXJuIGZyb20oXHJcblx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHR0aGlzLmdhcGkuYXV0aDIuaW5pdCh7XHJcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcclxuXHRcdFx0XHRcdGNvb2tpZXBvbGljeTogJ3NpbmdsZV9ob3N0X29yaWdpbicsXHJcblx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxyXG5cdFx0XHRcdFx0ZmV0Y2hfYmFzaWNfcHJvZmlsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHV4X21vZGU6ICdwb3B1cCcsXHJcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmF1dGgyID0gdGhpcy5nYXBpLmF1dGgyO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0F1dGgySW5pdC5zdWNjZXNzJywgdGhpcy5hdXRoMik7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuYXV0aDIpO1xyXG5cdFx0XHRcdH0sIHJlamVjdCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGF1dGgySW5zdGFuY2UoKSB7XHJcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xyXG5cdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdXRoMigpLnBpcGUoXHJcblx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==