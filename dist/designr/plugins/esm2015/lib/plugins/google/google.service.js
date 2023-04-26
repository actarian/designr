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
            return new Observable().pipe((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (this.gapi) {
                    return of(this.gapi);
                }
                else {
                    return this.once();
                }
            }));
        }
        else {
            return of(null);
        }
    }
    /**
     * @return {?}
     */
    getMe() {
        return this.login().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
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
        })));
    }
    /**
     * @return {?}
     */
    login() {
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return this.signin();
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        return this.auth2Instance().pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            return from(new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                    this.instance.signOut().then((/**
                     * @param {?} signed
                     * @return {?}
                     */
                    (signed) => {
                        resolve();
                    }), reject);
                }
                else {
                    resolve();
                }
            })));
        })));
    }
    /**
     * @private
     * @return {?}
     */
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        })));
    }
    /**
     * @private
     * @return {?}
     */
    getAuth2() {
        return new Observable().pipe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.auth2) {
                return of(this.auth2);
            }
            else {
                return this.google().pipe(concatMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    if (this.gapi.auth2) {
                        return this.auth2init();
                    }
                    else {
                        return from(new Promise((/**
                         * @param {?} resolve
                         * @param {?} reject
                         * @return {?}
                         */
                        (resolve, reject) => {
                            this.gapi.load('auth2', (/**
                             * @return {?}
                             */
                            () => {
                                setTimeout((/**
                                 * @return {?}
                                 */
                                () => {
                                    resolve();
                                }), 200);
                            }), reject);
                        }))).pipe(concatMap((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => {
                            return this.auth2init();
                        })));
                    }
                })));
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    signin() {
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const readAccessToken = (/**
             * @return {?}
             */
            () => {
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
            });
            if (this.instance.isSignedIn && this.instance.isSignedIn.get()) {
                readAccessToken();
            }
            else {
                this.instance.signIn({
                    scope: 'profile email',
                }).then((/**
                 * @param {?} signed
                 * @return {?}
                 */
                (signed) => {
                    readAccessToken();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    this.storage.delete('google');
                    reject(error);
                }));
            }
        })));
    }
    /**
     * @private
     * @return {?}
     */
    auth2init() {
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.gapi.auth2.init({
                client_id: this.options.clientId,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email',
                fetch_basic_profile: true,
                ux_mode: 'popup',
            }).then((/**
             * @return {?}
             */
            () => {
                this.auth2 = this.gapi.auth2;
                // console.log('Auth2Init.success', this.auth2);
                resolve(this.auth2);
            }), reject);
        })));
    }
    /**
     * @return {?}
     */
    auth2Instance() {
        if (this.instance) {
            return of(this.instance);
        }
        else {
            return this.getAuth2().pipe(concatMap((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this.instance = this.auth2.getAuthInstance();
                return of(this.instance);
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFFUSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO1FBQzdDLFVBQUssR0FBWSxlQUFlLENBQUM7UUFDakMsd0JBQW1CLEdBQWEsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBWSxPQUFPLENBQUM7SUFDbkMsQ0FBQztDQUFBOzs7SUFMQSxnQ0FBd0I7O0lBQ3hCLG9DQUFvRDs7SUFDcEQsNkJBQXdDOztJQUN4QywyQ0FBNEM7O0lBQzVDLCtCQUFrQzs7QUFHbkMsTUFBTSxPQUFPLGtCQUFrQjtDQVk5Qjs7O0lBWEEsd0NBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLG1DQUFjOztJQUNkLHdDQUFtQjs7SUFDbkIsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLDZDQUF3Qjs7SUFDeEIsc0NBQWlCOztJQUNqQixtQ0FBYzs7SUFDZCwyQ0FBc0I7O0lBQ3RCLG9DQUFlOztBQUdoQixNQUFNLE9BQU8sVUFBVTtDQVN0Qjs7O0lBUkEs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ZW50IjpbIlxyXG5cclxuXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPbmNlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY29uY2F0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZUNvbmZpZyB7XHJcblx0cHVibGljIGNsaWVudElkOiBzdHJpbmc7XHJcblx0cHVibGljIGNvb2tpZXBvbGljeT86IHN0cmluZyA9ICdzaW5nbGVfaG9zdF9vcmlnaW4nO1xyXG5cdHB1YmxpYyBzY29wZT86IHN0cmluZyA9ICdwcm9maWxlIGVtYWlsJztcclxuXHRwdWJsaWMgZmV0Y2hfYmFzaWNfcHJvZmlsZT86IGJvb2xlYW4gPSB0cnVlO1xyXG5cdHB1YmxpYyB1eF9tb2RlPzogc3RyaW5nID0gJ3BvcHVwJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhSZXNwb25zZSB7XHJcblx0dG9rZW5fdHlwZTogc3RyaW5nO1xyXG5cdGFjY2Vzc190b2tlbjogc3RyaW5nO1xyXG5cdHNjb3BlOiBzdHJpbmc7XHJcblx0bG9naW5faGludDogc3RyaW5nO1xyXG5cdGV4cGlyZXNfaW46IG51bWJlcjtcclxuXHRleHBpcmVzX2F0OiBudW1iZXI7XHJcblx0Zmlyc3RfaXNzdWVkX2F0OiBudW1iZXI7XHJcblx0aWRfdG9rZW46IHN0cmluZztcclxuXHRpZHBJZDogc3RyaW5nO1xyXG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcclxuXHR1c2VySUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZVVzZXIge1xyXG5cdGVtYWlsOiBzdHJpbmc7XHJcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XHJcblx0aWQ6IHN0cmluZztcclxuXHRsYXN0TmFtZTogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRwaWN0dXJlOiBzdHJpbmc7XHJcblx0YXV0aFJlc3BvbnNlPzogR29vZ2xlQXV0aFJlc3BvbnNlO1xyXG5cdGdvb2dsZVRva2VuPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIGF1dGhSZXNwb25zZTogR29vZ2xlQXV0aFJlc3BvbnNlO1xyXG5cdHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlU2VydmljZTtcclxuXHRwcml2YXRlIG9wdGlvbnM6IEdvb2dsZUNvbmZpZztcclxuXHRwcml2YXRlIGdhcGk6IGFueTtcclxuXHRwcml2YXRlIGF1dGgyOiBhbnk7XHJcblx0cHJpdmF0ZSBpbnN0YW5jZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBHb29nbGVDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZSk7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xyXG5cdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB0aGlzLnN0b3JhZ2UuZ2V0KCdnb29nbGUnKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCogIGNhbGwgR29vZ2xlU2VydmljZS5nb29nbGUgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXHJcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdHByaXZhdGUgZ29vZ2xlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IE9ic2VydmFibGUoKS5waXBlKHggPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmdhcGkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBvZih0aGlzLmdhcGkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldE1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxyXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcHJvZmlsZSA9IHRoaXMuaW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XHJcblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcclxuXHRcdFx0XHRcdGlkOiBwcm9maWxlLmdldElkKCksXHJcblx0XHRcdFx0XHRuYW1lOiBwcm9maWxlLmdldE5hbWUoKSxcclxuXHRcdFx0XHRcdGZpcnN0TmFtZTogcHJvZmlsZS5nZXRHaXZlbk5hbWUoKSxcclxuXHRcdFx0XHRcdGxhc3ROYW1lOiBwcm9maWxlLmdldEZhbWlseU5hbWUoKSxcclxuXHRcdFx0XHRcdHBpY3R1cmU6IHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSxcclxuXHRcdFx0XHRcdGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXHJcblx0XHRcdFx0XHRhdXRoUmVzcG9uc2U6IHRoaXMuYXV0aFJlc3BvbnNlLFxyXG5cdFx0XHRcdFx0Z29vZ2xlVG9rZW46IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc190b2tlbixcclxuXHRcdFx0XHR9IGFzIEdvb2dsZVVzZXI7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHVzZXIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXV0aDJJbnN0YW5jZSgpLnBpcGUoXHJcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaWduaW4oKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcclxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xyXG5cdFx0XHRcdHJldHVybiBmcm9tKFxyXG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluICYmIHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5zdGFuY2Uuc2lnbk91dCgpLnRoZW4oKHNpZ25lZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIHJlamVjdCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanM/b25sb2FkPXt7Y2FsbGJhY2t9fScsIHRydWUpLnBpcGUoXHJcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHR0aGlzLmdhcGkgPSB3aW5kb3dbJ2dhcGknXTtcclxuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEF1dGgyKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuYXV0aDIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5hdXRoMik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ29vZ2xlKCkucGlwZShcclxuXHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2FwaS5hdXRoMikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmF1dGgyaW5pdCgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKFxyXG5cdFx0XHRcdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmdhcGkubG9hZCgnYXV0aDInLCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMjAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0KS5waXBlKFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2lnbmluKCkge1xyXG5cdFx0cmV0dXJuIGZyb20oXHJcblx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHRjb25zdCByZWFkQWNjZXNzVG9rZW4gPSAoKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuJyk7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRBdXRoUmVzcG9uc2UodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uc3VjY2VzcycsIHVzZXIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHVzZXI7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2dvb2dsZScsIHVzZXIpO1xyXG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcclxuXHRcdFx0XHRcdFx0XHRjb2RlOiB1c2VyLmFjY2Vzc190b2tlbixcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuLmVycm9yJywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdnb29nbGUnKTtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XHJcblx0XHRcdFx0XHRyZWFkQWNjZXNzVG9rZW4oKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduSW4oe1xyXG5cdFx0XHRcdFx0XHRzY29wZTogJ3Byb2ZpbGUgZW1haWwnLFxyXG5cclxuXHRcdFx0XHRcdH0pLnRoZW4oKHNpZ25lZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZWFkQWNjZXNzVG9rZW4oKTtcclxuXHJcblx0XHRcdFx0XHR9LCAoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZ29vZ2xlJyk7XHJcblx0XHRcdFx0XHRcdHJlamVjdChlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhdXRoMmluaXQoKSB7XHJcblx0XHRyZXR1cm4gZnJvbShcclxuXHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZ2FwaS5hdXRoMi5pbml0KHtcclxuXHRcdFx0XHRcdGNsaWVudF9pZDogdGhpcy5vcHRpb25zLmNsaWVudElkLFxyXG5cdFx0XHRcdFx0Y29va2llcG9saWN5OiAnc2luZ2xlX2hvc3Rfb3JpZ2luJyxcclxuXHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXHJcblx0XHRcdFx0XHRmZXRjaF9iYXNpY19wcm9maWxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0dXhfbW9kZTogJ3BvcHVwJyxcclxuXHRcdFx0XHR9KS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYXV0aDIgPSB0aGlzLmdhcGkuYXV0aDI7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnQXV0aDJJbml0LnN1Y2Nlc3MnLCB0aGlzLmF1dGgyKTtcclxuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5hdXRoMik7XHJcblx0XHRcdFx0fSwgcmVqZWN0KTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXV0aDJJbnN0YW5jZSgpIHtcclxuXHRcdGlmICh0aGlzLmluc3RhbmNlKSB7XHJcblx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldEF1dGgyKCkucGlwZShcclxuXHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlID0gdGhpcy5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcclxuXHRcdFx0XHRcdHJldHVybiBvZih0aGlzLmluc3RhbmNlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19