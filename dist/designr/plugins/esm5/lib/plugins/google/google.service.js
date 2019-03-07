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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtRQUVRLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7UUFDN0MsVUFBSyxHQUFZLGVBQWUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFDckMsWUFBTyxHQUFZLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxBLGdDQUF3Qjs7SUFDeEIsb0NBQW9EOztJQUNwRCw2QkFBd0M7O0lBQ3hDLDJDQUE0Qzs7SUFDNUMsK0JBQWtDOztBQUduQztJQUFBO0lBWUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQSx3Q0FBbUI7O0lBQ25CLDBDQUFxQjs7SUFDckIsbUNBQWM7O0lBQ2Qsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLHdDQUFtQjs7SUFDbkIsNkNBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pCLG1DQUFjOztJQUNkLDJDQUFzQjs7SUFDdEIsb0NBQWU7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Ozs7OztJQUM5Qiw2QkFBa0I7Ozs7O0lBQ2xCLDhCQUFtQjs7Ozs7SUFDbkIsaUNBQXNCOzs7OztJQUdyQixtQ0FBK0M7Ozs7O0lBQy9DLHVDQUFzQzs7Ozs7SUFDdEMsdUNBQTJDOzs7OztJQUMzQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPbmNlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlQ29uZmlnIHtcblx0cHVibGljIGNsaWVudElkOiBzdHJpbmc7XG5cdHB1YmxpYyBjb29raWVwb2xpY3k/OiBzdHJpbmcgPSAnc2luZ2xlX2hvc3Rfb3JpZ2luJztcblx0cHVibGljIHNjb3BlPzogc3RyaW5nID0gJ3Byb2ZpbGUgZW1haWwnO1xuXHRwdWJsaWMgZmV0Y2hfYmFzaWNfcHJvZmlsZT86IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgdXhfbW9kZT86IHN0cmluZyA9ICdwb3B1cCc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVBdXRoUmVzcG9uc2Uge1xuXHR0b2tlbl90eXBlOiBzdHJpbmc7XG5cdGFjY2Vzc190b2tlbjogc3RyaW5nO1xuXHRzY29wZTogc3RyaW5nO1xuXHRsb2dpbl9oaW50OiBzdHJpbmc7XG5cdGV4cGlyZXNfaW46IG51bWJlcjtcblx0ZXhwaXJlc19hdDogbnVtYmVyO1xuXHRmaXJzdF9pc3N1ZWRfYXQ6IG51bWJlcjtcblx0aWRfdG9rZW46IHN0cmluZztcblx0aWRwSWQ6IHN0cmluZztcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZVVzZXIge1xuXHRlbWFpbDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwaWN0dXJlOiBzdHJpbmc7XG5cdGF1dGhSZXNwb25zZT86IEdvb2dsZUF1dGhSZXNwb25zZTtcblx0Z29vZ2xlVG9rZW4/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEdvb2dsZUF1dGhSZXNwb25zZTtcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRwcml2YXRlIG9wdGlvbnM6IEdvb2dsZUNvbmZpZztcblx0cHJpdmF0ZSBnYXBpOiBhbnk7XG5cdHByaXZhdGUgYXV0aDI6IGFueTtcblx0cHJpdmF0ZSBpbnN0YW5jZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZScpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBHb29nbGVDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSk7XG5cdFx0dGhpcy5zdG9yYWdlID0gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHRoaXMuc3RvcmFnZS5nZXQoJ2dvb2dsZScpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEdvb2dsZVNlcnZpY2UuZ29vZ2xlIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRwcml2YXRlIGdvb2dsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKS5waXBlKHggPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5nYXBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub25jZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdGdldE1lKCkge1xuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvZmlsZSA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSB7XG5cdFx0XHRcdFx0aWQ6IHByb2ZpbGUuZ2V0SWQoKSxcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaXJzdE5hbWU6IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCksXG5cdFx0XHRcdFx0bGFzdE5hbWU6IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpLFxuXHRcdFx0XHRcdHBpY3R1cmU6IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSxcblx0XHRcdFx0XHRlbWFpbDogcHJvZmlsZS5nZXRFbWFpbCgpLFxuXHRcdFx0XHRcdGF1dGhSZXNwb25zZTogdGhpcy5hdXRoUmVzcG9uc2UsXG5cdFx0XHRcdFx0Z29vZ2xlVG9rZW46IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc190b2tlbixcblx0XHRcdFx0fSBhcyBHb29nbGVVc2VyO1xuXHRcdFx0XHRyZXR1cm4gb2YodXNlcik7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dpbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2lnbmluKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dvdXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbk91dCgpLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzP29ubG9hZD17e2NhbGxiYWNrfX0nLCB0cnVlKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkgPSB3aW5kb3dbJ2dhcGknXTtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEF1dGgyKCkge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRpZiAodGhpcy5hdXRoMikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5hdXRoMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nb29nbGUoKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdhcGkuYXV0aDIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShcblx0XHRcdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KS5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF1dGgyaW5pdCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2lnbmluKCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCByZWFkQWNjZXNzVG9rZW4gPSAoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbicpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLnN1Y2Nlc3MnLCB1c2VyKTtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdXNlcjtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2dvb2dsZScsIHVzZXIpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdGNvZGU6IHVzZXIuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xuXHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbkluKHtcblx0XHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cblx0XHRcdFx0XHR9KS50aGVuKChzaWduZWQpID0+IHtcblx0XHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXG5cdFx0XHRcdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgYXV0aDJpbml0KCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SWQsXG5cdFx0XHRcdFx0Y29va2llcG9saWN5OiAnc2luZ2xlX2hvc3Rfb3JpZ2luJyxcblx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxuXHRcdFx0XHRcdGZldGNoX2Jhc2ljX3Byb2ZpbGU6IHRydWUsXG5cdFx0XHRcdFx0dXhfbW9kZTogJ3BvcHVwJyxcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoMiA9IHRoaXMuZ2FwaS5hdXRoMjtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQXV0aDJJbml0LnN1Y2Nlc3MnLCB0aGlzLmF1dGgyKTtcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuYXV0aDIpO1xuXHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGF1dGgySW5zdGFuY2UoKSB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXV0aDIoKS5waXBlKFxuXHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19