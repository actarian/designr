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
var GoogleAuthResponse = /** @class */ (function () {
    function GoogleAuthResponse() {
    }
    return GoogleAuthResponse;
}());
export { GoogleAuthResponse };
var GoogleUser = /** @class */ (function () {
    function GoogleUser() {
    }
    return GoogleUser;
}());
export { GoogleUser };
var GoogleService = /** @class */ (function () {
    function GoogleService(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    GoogleService.prototype.init = function () {
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
    GoogleService.prototype.google = function () {
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
    GoogleService.prototype.getMe = function () {
        var _this = this;
        return this.login().pipe(concatMap(function (x) {
            var profile = _this.instance.currentUser.get().getBasicProfile();
            var user = {
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: _this.authResponse,
                googleToken: _this.authResponse.access_token,
            };
            return of(user);
        }));
    };
    GoogleService.prototype.login = function () {
        var _this = this;
        return this.auth2Instance().pipe(concatMap(function (x) {
            return _this.signin();
        }));
    };
    GoogleService.prototype.logout = function () {
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
    GoogleService.prototype.once = function () {
        var _this = this;
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(function (x) {
            _this.gapi = window['gapi'];
            return of(_this.gapi);
        }));
    };
    GoogleService.prototype.getAuth2 = function () {
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
    GoogleService.prototype.signin = function () {
        var _this = this;
        return from(new Promise(function (resolve, reject) {
            var readAccessToken = function () {
                // console.log('GoogleLogin.readAccessToken');
                try {
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
    GoogleService.prototype.auth2init = function () {
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
    GoogleService.prototype.auth2Instance = function () {
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
    GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.OnceService)); };
    GoogleService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleService, factory: GoogleService.ɵfac, providedIn: 'root' });
    return GoogleService;
}());
export { GoogleService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.LocalStorageService }, { type: i2.OnceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RDtJQUFBO1FBRVEsaUJBQVksR0FBWSxvQkFBb0IsQ0FBQztRQUM3QyxVQUFLLEdBQVksZUFBZSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFhLElBQUksQ0FBQztRQUNyQyxZQUFPLEdBQVksT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFORCxJQU1DOztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7QUFFRDtJQUFBO0lBU0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7O0FBRUQ7SUFZQyx1QkFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsY0FBbUMsRUFDbkMsV0FBd0I7UUFISCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBcUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMs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QUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztTQUNGO0lBQ0YsQ0FBQzs4RUFwTVcsYUFBYSxjQVVoQixXQUFXO3lEQVZSLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07d0JBNUNuQjtDQW9QQyxBQXpNRCxJQXlNQztTQXRNWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFXRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPbmNlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlQ29uZmlnIHtcblx0cHVibGljIGNsaWVudElkOiBzdHJpbmc7XG5cdHB1YmxpYyBjb29raWVwb2xpY3k/OiBzdHJpbmcgPSAnc2luZ2xlX2hvc3Rfb3JpZ2luJztcblx0cHVibGljIHNjb3BlPzogc3RyaW5nID0gJ3Byb2ZpbGUgZW1haWwnO1xuXHRwdWJsaWMgZmV0Y2hfYmFzaWNfcHJvZmlsZT86IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgdXhfbW9kZT86IHN0cmluZyA9ICdwb3B1cCc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVBdXRoUmVzcG9uc2Uge1xuXHR0b2tlbl90eXBlOiBzdHJpbmc7XG5cdGFjY2Vzc190b2tlbjogc3RyaW5nO1xuXHRzY29wZTogc3RyaW5nO1xuXHRsb2dpbl9oaW50OiBzdHJpbmc7XG5cdGV4cGlyZXNfaW46IG51bWJlcjtcblx0ZXhwaXJlc19hdDogbnVtYmVyO1xuXHRmaXJzdF9pc3N1ZWRfYXQ6IG51bWJlcjtcblx0aWRfdG9rZW46IHN0cmluZztcblx0aWRwSWQ6IHN0cmluZztcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZVVzZXIge1xuXHRlbWFpbDogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwaWN0dXJlOiBzdHJpbmc7XG5cdGF1dGhSZXNwb25zZT86IEdvb2dsZUF1dGhSZXNwb25zZTtcblx0Z29vZ2xlVG9rZW4/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEdvb2dsZUF1dGhSZXNwb25zZTtcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRwcml2YXRlIG9wdGlvbnM6IEdvb2dsZUNvbmZpZztcblx0cHJpdmF0ZSBnYXBpOiBhbnk7XG5cdHByaXZhdGUgYXV0aDI6IGFueTtcblx0cHJpdmF0ZSBpbnN0YW5jZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLmdvb2dsZScpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBHb29nbGVDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSk7XG5cdFx0dGhpcy5zdG9yYWdlID0gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHRoaXMuc3RvcmFnZS5nZXQoJ2dvb2dsZScpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEdvb2dsZVNlcnZpY2UuZ29vZ2xlIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRwcml2YXRlIGdvb2dsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKS5waXBlKHggPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5nYXBpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub25jZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdGdldE1lKCkge1xuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0Y29uc3QgcHJvZmlsZSA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSB7XG5cdFx0XHRcdFx0aWQ6IHByb2ZpbGUuZ2V0SWQoKSxcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmdldE5hbWUoKSxcblx0XHRcdFx0XHRmaXJzdE5hbWU6IHByb2ZpbGUuZ2V0R2l2ZW5OYW1lKCksXG5cdFx0XHRcdFx0bGFzdE5hbWU6IHByb2ZpbGUuZ2V0RmFtaWx5TmFtZSgpLFxuXHRcdFx0XHRcdHBpY3R1cmU6IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSxcblx0XHRcdFx0XHRlbWFpbDogcHJvZmlsZS5nZXRFbWFpbCgpLFxuXHRcdFx0XHRcdGF1dGhSZXNwb25zZTogdGhpcy5hdXRoUmVzcG9uc2UsXG5cdFx0XHRcdFx0Z29vZ2xlVG9rZW46IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc190b2tlbixcblx0XHRcdFx0fSBhcyBHb29nbGVVc2VyO1xuXHRcdFx0XHRyZXR1cm4gb2YodXNlcik7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dpbigpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2lnbmluKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRsb2dvdXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbk91dCgpLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCdodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9hcGk6Y2xpZW50LmpzP29ubG9hZD17e2NhbGxiYWNrfX0nLCB0cnVlKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkgPSB3aW5kb3dbJ2dhcGknXTtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2FwaSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGdldEF1dGgyKCkge1xuXHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRpZiAodGhpcy5hdXRoMikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5hdXRoMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5nb29nbGUoKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmdhcGkuYXV0aDIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShcblx0XHRcdFx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KS5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF1dGgyaW5pdCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc2lnbmluKCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRjb25zdCByZWFkQWNjZXNzVG9rZW4gPSAoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbicpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLnN1Y2Nlc3MnLCB1c2VyKTtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdXNlcjtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2dvb2dsZScsIHVzZXIpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0XHRcdGNvZGU6IHVzZXIuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xuXHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbkluKHtcblx0XHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cblx0XHRcdFx0XHR9KS50aGVuKChzaWduZWQpID0+IHtcblx0XHRcdFx0XHRcdHJlYWRBY2Nlc3NUb2tlbigpO1xuXG5cdFx0XHRcdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgYXV0aDJpbml0KCkge1xuXHRcdHJldHVybiBmcm9tKFxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdhcGkuYXV0aDIuaW5pdCh7XG5cdFx0XHRcdFx0Y2xpZW50X2lkOiB0aGlzLm9wdGlvbnMuY2xpZW50SWQsXG5cdFx0XHRcdFx0Y29va2llcG9saWN5OiAnc2luZ2xlX2hvc3Rfb3JpZ2luJyxcblx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxuXHRcdFx0XHRcdGZldGNoX2Jhc2ljX3Byb2ZpbGU6IHRydWUsXG5cdFx0XHRcdFx0dXhfbW9kZTogJ3BvcHVwJyxcblx0XHRcdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoMiA9IHRoaXMuZ2FwaS5hdXRoMjtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQXV0aDJJbml0LnN1Y2Nlc3MnLCB0aGlzLmF1dGgyKTtcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuYXV0aDIpO1xuXHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGF1dGgySW5zdGFuY2UoKSB7XG5cdFx0aWYgKHRoaXMuaW5zdGFuY2UpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXV0aDIoKS5waXBlKFxuXHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IHRoaXMuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCk7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19