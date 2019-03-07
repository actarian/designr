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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFFUSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO1FBQzdDLFVBQUssR0FBWSxlQUFlLENBQUM7UUFDakMsd0JBQW1CLEdBQWEsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBWSxPQUFPLENBQUM7SUFDbkMsQ0FBQztDQUFBOzs7SUFMQSxnQ0FBd0I7O0lBQ3hCLG9DQUFvRDs7SUFDcEQsNkJBQXdDOztJQUN4QywyQ0FBNEM7O0lBQzVDLCtCQUFrQzs7QUFHbkMsTUFBTSxPQUFPLGtCQUFrQjtDQVk5Qjs7O0lBWEEsd0NBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLG1DQUFjOztJQUNkLHdDQUFtQjs7SUFDbkIsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBQ25CLDZDQUF3Qjs7SUFDeEIsc0NBQWlCOztJQUNqQixtQ0FBYzs7SUFDZCwyQ0FBc0I7O0lBQ3RCLG9DQUFlOztBQUdoQixNQUFNLE9BQU8sVUFBVTtDQVN0Qjs7O0lBUkEs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ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIE9uY2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVDb25maWcge1xuXHRwdWJsaWMgY2xpZW50SWQ6IHN0cmluZztcblx0cHVibGljIGNvb2tpZXBvbGljeT86IHN0cmluZyA9ICdzaW5nbGVfaG9zdF9vcmlnaW4nO1xuXHRwdWJsaWMgc2NvcGU/OiBzdHJpbmcgPSAncHJvZmlsZSBlbWFpbCc7XG5cdHB1YmxpYyBmZXRjaF9iYXNpY19wcm9maWxlPzogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyB1eF9tb2RlPzogc3RyaW5nID0gJ3BvcHVwJztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhSZXNwb25zZSB7XG5cdHRva2VuX3R5cGU6IHN0cmluZztcblx0YWNjZXNzX3Rva2VuOiBzdHJpbmc7XG5cdHNjb3BlOiBzdHJpbmc7XG5cdGxvZ2luX2hpbnQ6IHN0cmluZztcblx0ZXhwaXJlc19pbjogbnVtYmVyO1xuXHRleHBpcmVzX2F0OiBudW1iZXI7XG5cdGZpcnN0X2lzc3VlZF9hdDogbnVtYmVyO1xuXHRpZF90b2tlbjogc3RyaW5nO1xuXHRpZHBJZDogc3RyaW5nO1xuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBpY3R1cmU6IHN0cmluZztcblx0YXV0aFJlc3BvbnNlPzogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRnb29nbGVUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlU2VydmljZSB7XG5cblx0cHVibGljIGF1dGhSZXNwb25zZTogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogR29vZ2xlQ29uZmlnO1xuXHRwcml2YXRlIGdhcGk6IGFueTtcblx0cHJpdmF0ZSBhdXRoMjogYW55O1xuXHRwcml2YXRlIGluc3RhbmNlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZUNvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZ29vZ2xlJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVNlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgR29vZ2xlU2VydmljZS5nb29nbGUgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdHByaXZhdGUgZ29vZ2xlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmdhcGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRjb25zdCBwcm9maWxlID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRpZDogcHJvZmlsZS5nZXRJZCgpLFxuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpcnN0TmFtZTogcHJvZmlsZS5nZXRHaXZlbk5hbWUoKSxcblx0XHRcdFx0XHRsYXN0TmFtZTogcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCksXG5cdFx0XHRcdFx0cGljdHVyZTogcHJvZmlsZS5nZXRJbWFnZVVybCgpLFxuXHRcdFx0XHRcdGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXG5cdFx0XHRcdFx0YXV0aFJlc3BvbnNlOiB0aGlzLmF1dGhSZXNwb25zZSxcblx0XHRcdFx0XHRnb29nbGVUb2tlbjogdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHR9IGFzIEdvb2dsZVVzZXI7XG5cdFx0XHRcdHJldHVybiBvZih1c2VyKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaWduaW4oKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduT3V0KCkudGhlbigoc2lnbmVkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanM/b25sb2FkPXt7Y2FsbGJhY2t9fScsIHRydWUpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaSA9IHdpbmRvd1snZ2FwaSddO1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QXV0aDIoKSB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcblx0XHRcdGlmICh0aGlzLmF1dGgyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmF1dGgyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdvb2dsZSgpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2FwaS5hdXRoMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaWduaW4oKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlYWRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB1c2VyO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZ29vZ2xlJywgdXNlcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0Y29kZTogdXNlci5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduSW4oe1xuXHRcdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcblxuXHRcdFx0XHRcdH0pLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cblx0XHRcdFx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdXRoMmluaXQoKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcblx0XHRcdFx0XHRjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuXHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cdFx0XHRcdFx0ZmV0Y2hfYmFzaWNfcHJvZmlsZTogdHJ1ZSxcblx0XHRcdFx0XHR1eF9tb2RlOiAncG9wdXAnLFxuXHRcdFx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGgyID0gdGhpcy5nYXBpLmF1dGgyO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoMkluaXQuc3VjY2VzcycsIHRoaXMuYXV0aDIpO1xuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5hdXRoMik7XG5cdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXV0aDJJbnN0YW5jZSgpIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdXRoMigpLnBpcGUoXG5cdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlID0gdGhpcy5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=