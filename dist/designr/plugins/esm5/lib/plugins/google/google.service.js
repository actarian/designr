/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            return new Observable().pipe(function (x) {
                if (_this.gapi) {
                    return of(_this.gapi);
                }
                else {
                    return _this.once();
                }
            });
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
        return this.login().pipe(concatMap(function (x) {
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
        }));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap(function (x) {
            return _this.signin();
        }));
    };
    /**
     * @return {?}
     */
    GoogleService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap(function (x) {
            return from(new Promise(function (resolve, reject) {
                if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                    _this.instance.signOut().then(function (signed) {
                        resolve();
                    }, reject);
                }
                else {
                    resolve();
                }
            }));
        }));
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
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(function (x) {
            _this.gapi = window['gapi'];
            return of(_this.gapi);
        }));
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
        return new Observable().pipe(function (x) {
            if (_this.auth2) {
                return of(_this.auth2);
            }
            else {
                return _this.google().pipe(concatMap(function (x) {
                    if (_this.gapi.auth2) {
                        return _this.auth2init();
                    }
                    else {
                        return from(new Promise(function (resolve, reject) {
                            _this.gapi.load('auth2', function () {
                                setTimeout(function () {
                                    resolve();
                                }, 200);
                            }, reject);
                        })).pipe(concatMap(function (x) {
                            return _this.auth2init();
                        }));
                    }
                }));
            }
        });
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
        return from(new Promise(function (resolve, reject) {
            /** @type {?} */
            var readAccessToken = function () {
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
            };
            if (_this.instance.isSignedIn && _this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                _this.instance.signIn({
                    scope: 'profile email',
                }).then(function (signed) {
                    readAccessToken();
                }, function (error) {
                    _this.storage.delete('google');
                    reject(error);
                });
            }
        }));
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
        return from(new Promise(function (resolve, reject) {
            _this.gapi.auth2.init({
                client_id: _this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then(function () {
                _this.auth2 = _this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(_this.auth2);
            }, reject);
        }));
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
            return this.getAuth2().pipe(concatMap(function (x) {
                _this.instance = _this.auth2.getAuthInstance();
                return of(_this.instance);
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtRQUVRLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7UUFDN0MsVUFBSyxHQUFZLGVBQWUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFDckMsWUFBTyxHQUFZLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxBLGdDQUF3Qjs7SUFDeEIsb0NBQW9EOztJQUNwRCw2QkFBd0M7O0lBQ3hDLDJDQUE0Qzs7SUFDNUMsK0JBQWtDOztBQUduQztJQUFBO0lBWUEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7Ozs7SUFYQSx3Q0FBbUI7O0lBQ25CLDBDQUFxQjs7SUFDckIsbUNBQWM7O0lBQ2Qsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLHdDQUFtQjs7SUFDbkIsNkNBQXdCOztJQUN4QixzQ0FBaUI7O0lBQ2pCLG1DQUFjOztJQUNkLDJDQUFzQjs7SUFDdEIsb0NBQWU7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SUFDL0MsdUNBQXNDOzs7OztJQUN0Qyx1Q0FBMkM7Ozs7O0lBQzNDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIE9uY2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVDb25maWcge1xuXHRwdWJsaWMgY2xpZW50SWQ6IHN0cmluZztcblx0cHVibGljIGNvb2tpZXBvbGljeT86IHN0cmluZyA9ICdzaW5nbGVfaG9zdF9vcmlnaW4nO1xuXHRwdWJsaWMgc2NvcGU/OiBzdHJpbmcgPSAncHJvZmlsZSBlbWFpbCc7XG5cdHB1YmxpYyBmZXRjaF9iYXNpY19wcm9maWxlPzogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyB1eF9tb2RlPzogc3RyaW5nID0gJ3BvcHVwJztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhSZXNwb25zZSB7XG5cdHRva2VuX3R5cGU6IHN0cmluZztcblx0YWNjZXNzX3Rva2VuOiBzdHJpbmc7XG5cdHNjb3BlOiBzdHJpbmc7XG5cdGxvZ2luX2hpbnQ6IHN0cmluZztcblx0ZXhwaXJlc19pbjogbnVtYmVyO1xuXHRleHBpcmVzX2F0OiBudW1iZXI7XG5cdGZpcnN0X2lzc3VlZF9hdDogbnVtYmVyO1xuXHRpZF90b2tlbjogc3RyaW5nO1xuXHRpZHBJZDogc3RyaW5nO1xuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBpY3R1cmU6IHN0cmluZztcblx0YXV0aFJlc3BvbnNlPzogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRnb29nbGVUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlU2VydmljZSB7XG5cblx0cHVibGljIGF1dGhSZXNwb25zZTogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogR29vZ2xlQ29uZmlnO1xuXHRwcml2YXRlIGdhcGk6IGFueTtcblx0cHJpdmF0ZSBhdXRoMjogYW55O1xuXHRwcml2YXRlIGluc3RhbmNlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZUNvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZ29vZ2xlJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVNlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgR29vZ2xlU2VydmljZS5nb29nbGUgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdHByaXZhdGUgZ29vZ2xlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmdhcGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRjb25zdCBwcm9maWxlID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRpZDogcHJvZmlsZS5nZXRJZCgpLFxuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpcnN0TmFtZTogcHJvZmlsZS5nZXRHaXZlbk5hbWUoKSxcblx0XHRcdFx0XHRsYXN0TmFtZTogcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCksXG5cdFx0XHRcdFx0cGljdHVyZTogcHJvZmlsZS5nZXRJbWFnZVVybCgpLFxuXHRcdFx0XHRcdGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXG5cdFx0XHRcdFx0YXV0aFJlc3BvbnNlOiB0aGlzLmF1dGhSZXNwb25zZSxcblx0XHRcdFx0XHRnb29nbGVUb2tlbjogdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHR9IGFzIEdvb2dsZVVzZXI7XG5cdFx0XHRcdHJldHVybiBvZih1c2VyKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaWduaW4oKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduT3V0KCkudGhlbigoc2lnbmVkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanM/b25sb2FkPXt7Y2FsbGJhY2t9fScsIHRydWUpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaSA9IHdpbmRvd1snZ2FwaSddO1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QXV0aDIoKSB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcblx0XHRcdGlmICh0aGlzLmF1dGgyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmF1dGgyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdvb2dsZSgpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2FwaS5hdXRoMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaWduaW4oKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlYWRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB1c2VyO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZ29vZ2xlJywgdXNlcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0Y29kZTogdXNlci5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduSW4oe1xuXHRcdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcblxuXHRcdFx0XHRcdH0pLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cblx0XHRcdFx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdXRoMmluaXQoKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcblx0XHRcdFx0XHRjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuXHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cdFx0XHRcdFx0ZmV0Y2hfYmFzaWNfcHJvZmlsZTogdHJ1ZSxcblx0XHRcdFx0XHR1eF9tb2RlOiAncG9wdXAnLFxuXHRcdFx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGgyID0gdGhpcy5nYXBpLmF1dGgyO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoMkluaXQuc3VjY2VzcycsIHRoaXMuYXV0aDIpO1xuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5hdXRoMik7XG5cdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXV0aDJJbnN0YW5jZSgpIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdXRoMigpLnBpcGUoXG5cdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlID0gdGhpcy5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=