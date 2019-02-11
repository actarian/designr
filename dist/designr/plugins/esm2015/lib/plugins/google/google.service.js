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
export class GoogleConfig {
    constructor() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
}
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
export class GoogleAuthResponse {
}
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
export class GoogleUser {
}
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
export class GoogleService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} storageService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.google) {
            throw new Error('GoogleService.error missing config object in environment.plugins.google');
        }
        this.options = Object.assign(new GoogleConfig(), this.pluginsService.options.google);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('google');
        // console.log('GoogleService.authResponse', this.authResponse);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleService.google on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @private
     * @return {?}
     */
    google() {
        if (isPlatformBrowser(this.platformId)) {
            return new Observable().pipe(x => {
                if (this.gapi) {
                    return of(this.gapi);
                }
                else {
                    return this.once();
                }
            });
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    getMe() {
        return this.login().pipe(concatMap(x => {
            /** @type {?} */
            const profile = this.instance.currentUser.get().getBasicProfile();
            /** @type {?} */
            const user = (/** @type {?} */ ({
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: this.authResponse,
                googleToken: this.authResponse.access_token,
            }));
            return of(user);
        }));
    }
    /**
     * @return {?}
     */
    login() {
        return this.auth2Instance().pipe(concatMap(x => {
            return this.signin();
        }));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.auth2Instance().pipe(concatMap(x => {
            return from(new Promise((resolve, reject) => {
                if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                    this.instance.signOut().then((signed) => {
                        resolve();
                    }, reject);
                }
                else {
                    resolve();
                }
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getAuth2() {
        return new Observable().pipe(x => {
            if (this.auth2) {
                return of(this.auth2);
            }
            else {
                return this.google().pipe(concatMap(x => {
                    if (this.gapi.auth2) {
                        return this.auth2init();
                    }
                    else {
                        return from(new Promise((resolve, reject) => {
                            this.gapi.load('auth2', () => {
                                setTimeout(() => {
                                    resolve();
                                }, 200);
                            }, reject);
                        })).pipe(concatMap(x => {
                            return this.auth2init();
                        }));
                    }
                }));
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    signin() {
        return from(new Promise((resolve, reject) => {
            /** @type {?} */
            const readAccessToken = () => {
                // console.log('GoogleLogin.readAccessToken');
                try {
                    /** @type {?} */
                    const user = this.instance.currentUser.get().getAuthResponse(true);
                    // console.log('GoogleLogin.readAccessToken.success', user);
                    this.authResponse = user;
                    this.storage.set('google', user);
                    resolve({
                        code: user.access_token,
                    });
                }
                catch (error) {
                    console.log('GoogleLogin.readAccessToken.error', error);
                    this.storage.delete('google');
                    reject(error);
                }
            };
            if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                this.instance.signIn({
                    scope: 'profile email',
                }).then((signed) => {
                    readAccessToken();
                }, (error) => {
                    this.storage.delete('google');
                    reject(error);
                });
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    auth2init() {
        return from(new Promise((resolve, reject) => {
            this.gapi.auth2.init({
                client_id: this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then(() => {
                this.auth2 = this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(this.auth2);
            }, reject);
        }));
    }
    /**
     * @return {?}
     */
    auth2Instance() {
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap(x => {
                this.instance = this.auth2.getAuthInstance();
                return of(this.instance);
            }));
        }
    }
}
GoogleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: LocalStorageService },
    { type: OnceService }
];
/** @nocollapse */ GoogleService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService)); }, token: GoogleService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFFUSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO1FBQzdDLFVBQUssR0FBWSxlQUFlLENBQUM7UUFDakMsd0JBQW1CLEdBQWEsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBWSxPQUFPLENBQUM7SUFDbkMsQ0FBQztDQUFBOzs7SUFMQSxnQ0FBd0I7O0lBQ3hCLG9DQUFvRDs7SUFDcEQsNkJBQXdDOztJQUN4QywyQ0FBNEM7O0lBQzVDLCtCQUFrQzs7QUFHbkMsTUFBTSxPQUFPLGtCQUFrQjtDQVk5Qjs7O0lBWEEsd0NBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLG1DQUFjOztJQUNkLHdDQUFtQjs7SUFDbkIsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLDZDQUF3Qjs7SUFDeEIsc0NBQWlCOztJQUNqQixtQ0FBYzs7SUFDZCwyQ0FBc0I7O0lBQ3RCLG9DQUFlOztBQUdoQixNQUFNLE9BQU8sVUFBVTtDQVN0Qjs7O0lBUkEs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QUFFLE9BQU87YUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsZ0RBQWdEO2dCQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7O0lBRU0sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FDRixDQUFDO1NBQ0Y7SUFDRixDQUFDOzs7WUF2TUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQVdFLE1BQU0sU0FBQyxXQUFXO1lBaERaLGNBQWM7WUFIZCxtQkFBbUI7WUFBRSxXQUFXOzs7OztJQTJDeEMscUNBQXdDOztJQUN4QyxnQ0FBK0I7Ozs7O0lBQy9CLGdDQUE4Qjs7Ozs7SUFDOUIsNkJBQWtCOzs7OztJQUNsQiw4QkFBbUI7Ozs7O0lBQ25CLGlDQUFzQjs7Ozs7SUFHckIsbUNBQStDOzs7OztJQUMvQyx1Q0FBc0M7Ozs7O0lBQ3RDLHVDQUEyQzs7Ozs7SUFDM0Msb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgT25jZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUNvbmZpZyB7XG5cdHB1YmxpYyBjbGllbnRJZDogc3RyaW5nO1xuXHRwdWJsaWMgY29va2llcG9saWN5Pzogc3RyaW5nID0gJ3NpbmdsZV9ob3N0X29yaWdpbic7XG5cdHB1YmxpYyBzY29wZT86IHN0cmluZyA9ICdwcm9maWxlIGVtYWlsJztcblx0cHVibGljIGZldGNoX2Jhc2ljX3Byb2ZpbGU/OiBib29sZWFuID0gdHJ1ZTtcblx0cHVibGljIHV4X21vZGU/OiBzdHJpbmcgPSAncG9wdXAnO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlQXV0aFJlc3BvbnNlIHtcblx0dG9rZW5fdHlwZTogc3RyaW5nO1xuXHRhY2Nlc3NfdG9rZW46IHN0cmluZztcblx0c2NvcGU6IHN0cmluZztcblx0bG9naW5faGludDogc3RyaW5nO1xuXHRleHBpcmVzX2luOiBudW1iZXI7XG5cdGV4cGlyZXNfYXQ6IG51bWJlcjtcblx0Zmlyc3RfaXNzdWVkX2F0OiBudW1iZXI7XG5cdGlkX3Rva2VuOiBzdHJpbmc7XG5cdGlkcElkOiBzdHJpbmc7XG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVVc2VyIHtcblx0ZW1haWw6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0cGljdHVyZTogc3RyaW5nO1xuXHRhdXRoUmVzcG9uc2U/OiBHb29nbGVBdXRoUmVzcG9uc2U7XG5cdGdvb2dsZVRva2VuPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYXV0aFJlc3BvbnNlOiBHb29nbGVBdXRoUmVzcG9uc2U7XG5cdHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlU2VydmljZTtcblx0cHJpdmF0ZSBvcHRpb25zOiBHb29nbGVDb25maWc7XG5cdHByaXZhdGUgZ2FwaTogYW55O1xuXHRwcml2YXRlIGF1dGgyOiBhbnk7XG5cdHByaXZhdGUgaW5zdGFuY2U6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignR29vZ2xlU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5nb29nbGUnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgR29vZ2xlQ29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGUpO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB0aGlzLnN0b3JhZ2UuZ2V0KCdnb29nbGUnKTtcblx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlU2VydmljZS5hdXRoUmVzcG9uc2UnLCB0aGlzLmF1dGhSZXNwb25zZSk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBHb29nbGVTZXJ2aWNlLmdvb2dsZSBvbiBjb21wb25lbnQgT25Jbml0IHRvIGF2b2lkIHBvcHVwIGJsb2NrZXJzIHZpYSBhc3luY3Jvbm91cyBsb2FkaW5nICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0cHJpdmF0ZSBnb29nbGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuZ2FwaSkge1xuXHRcdFx0XHRcdHJldHVybiBvZih0aGlzLmdhcGkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9uY2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRnZXRNZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5sb2dpbigpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdGNvbnN0IHByb2ZpbGUgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEJhc2ljUHJvZmlsZSgpO1xuXHRcdFx0XHRjb25zdCB1c2VyID0ge1xuXHRcdFx0XHRcdGlkOiBwcm9maWxlLmdldElkKCksXG5cdFx0XHRcdFx0bmFtZTogcHJvZmlsZS5nZXROYW1lKCksXG5cdFx0XHRcdFx0Zmlyc3ROYW1lOiBwcm9maWxlLmdldEdpdmVuTmFtZSgpLFxuXHRcdFx0XHRcdGxhc3ROYW1lOiBwcm9maWxlLmdldEZhbWlseU5hbWUoKSxcblx0XHRcdFx0XHRwaWN0dXJlOiBwcm9maWxlLmdldEltYWdlVXJsKCksXG5cdFx0XHRcdFx0ZW1haWw6IHByb2ZpbGUuZ2V0RW1haWwoKSxcblx0XHRcdFx0XHRhdXRoUmVzcG9uc2U6IHRoaXMuYXV0aFJlc3BvbnNlLFxuXHRcdFx0XHRcdGdvb2dsZVRva2VuOiB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdH0gYXMgR29vZ2xlVXNlcjtcblx0XHRcdFx0cmV0dXJuIG9mKHVzZXIpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0bG9naW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNpZ25pbigpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0bG9nb3V0KCkge1xuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShcblx0XHRcdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmluc3RhbmNlLnNpZ25PdXQoKS50aGVuKChzaWduZWQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgb25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdCgnaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvYXBpOmNsaWVudC5qcz9vbmxvYWQ9e3tjYWxsYmFja319JywgdHJ1ZSkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0dGhpcy5nYXBpID0gd2luZG93WydnYXBpJ107XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmdhcGkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRBdXRoMigpIHtcblx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKS5waXBlKHggPT4ge1xuXHRcdFx0aWYgKHRoaXMuYXV0aDIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuYXV0aDIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ29vZ2xlKCkucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5nYXBpLmF1dGgyKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF1dGgyaW5pdCgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRcdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nYXBpLmxvYWQoJ2F1dGgyJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCkucGlwZShcblx0XHRcdFx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHNpZ25pbigpIHtcblx0XHRyZXR1cm4gZnJvbShcblx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0Y29uc3QgcmVhZEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4nKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdXNlciA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QXV0aFJlc3BvbnNlKHRydWUpO1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5zdWNjZXNzJywgdXNlcik7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHVzZXI7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdnb29nbGUnLCB1c2VyKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdFx0XHRjb2RlOiB1c2VyLmFjY2Vzc190b2tlbixcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZ29vZ2xlJyk7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcblx0XHRcdFx0XHRyZWFkQWNjZXNzVG9rZW4oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlLnNpZ25Jbih7XG5cdFx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxuXG5cdFx0XHRcdFx0fSkudGhlbigoc2lnbmVkKSA9PiB7XG5cdFx0XHRcdFx0XHRyZWFkQWNjZXNzVG9rZW4oKTtcblxuXHRcdFx0XHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZ29vZ2xlJyk7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGF1dGgyaW5pdCgpIHtcblx0XHRyZXR1cm4gZnJvbShcblx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0dGhpcy5nYXBpLmF1dGgyLmluaXQoe1xuXHRcdFx0XHRcdGNsaWVudF9pZDogdGhpcy5vcHRpb25zLmNsaWVudElkLFxuXHRcdFx0XHRcdGNvb2tpZXBvbGljeTogJ3NpbmdsZV9ob3N0X29yaWdpbicsXG5cdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcblx0XHRcdFx0XHRmZXRjaF9iYXNpY19wcm9maWxlOiB0cnVlLFxuXHRcdFx0XHRcdHV4X21vZGU6ICdwb3B1cCcsXG5cdFx0XHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aDIgPSB0aGlzLmdhcGkuYXV0aDI7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0F1dGgySW5pdC5zdWNjZXNzJywgdGhpcy5hdXRoMik7XG5cdFx0XHRcdFx0cmVzb2x2ZSh0aGlzLmF1dGgyKTtcblx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyBhdXRoMkluc3RhbmNlKCkge1xuXHRcdGlmICh0aGlzLmluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEF1dGgyKCkucGlwZShcblx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xuXHRcdFx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==