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
export class GoogleAuthResponse {
}
export class GoogleUser {
}
export class GoogleService {
    constructor(platformId, pluginsService, storageService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.init();
    }
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
    getMe() {
        return this.login().pipe(concatMap(x => {
            const profile = this.instance.currentUser.get().getBasicProfile();
            const user = {
                id: profile.getId(),
                name: profile.getName(),
                firstName: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                picture: profile.getImageUrl(),
                email: profile.getEmail(),
                authResponse: this.authResponse,
                googleToken: this.authResponse.access_token,
            };
            return of(user);
        }));
    }
    login() {
        return this.auth2Instance().pipe(concatMap(x => {
            return this.signin();
        }));
    }
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
    once() {
        return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(concatMap(x => {
            this.gapi = window['gapi'];
            return of(this.gapi);
        }));
    }
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
    signin() {
        return from(new Promise((resolve, reject) => {
            const readAccessToken = () => {
                // console.log('GoogleLogin.readAccessToken');
                try {
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
GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.OnceService)); };
GoogleService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleService, factory: GoogleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.LocalStorageService }, { type: i2.OnceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RCxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUVRLGlCQUFZLEdBQVksb0JBQW9CLENBQUM7UUFDN0MsVUFBSyxHQUFZLGVBQWUsQ0FBQztRQUNqQyx3QkFBbUIsR0FBYSxJQUFJLENBQUM7UUFDckMsWUFBTyxHQUFZLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0NBQUE7QUFFRCxNQUFNLE9BQU8sa0JBQWtCO0NBWTlCO0FBRUQsTUFBTSxPQUFPLFVBQVU7Q0FTdEI7QUFLRCxNQUFNLE9BQU8sYUFBYTtJQVN6QixZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixjQUFtQyxFQUNuQyxXQUF3QjtRQUhILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsSUFBSTtR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QyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FDRixDQUFDO1NBQ0Y7SUFDRixDQUFDOzswRUFwTVcsYUFBYSxjQVVoQixXQUFXO3FEQVZSLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07a0RBRU4sYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQVdFLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIE9uY2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVDb25maWcge1xuXHRwdWJsaWMgY2xpZW50SWQ6IHN0cmluZztcblx0cHVibGljIGNvb2tpZXBvbGljeT86IHN0cmluZyA9ICdzaW5nbGVfaG9zdF9vcmlnaW4nO1xuXHRwdWJsaWMgc2NvcGU/OiBzdHJpbmcgPSAncHJvZmlsZSBlbWFpbCc7XG5cdHB1YmxpYyBmZXRjaF9iYXNpY19wcm9maWxlPzogYm9vbGVhbiA9IHRydWU7XG5cdHB1YmxpYyB1eF9tb2RlPzogc3RyaW5nID0gJ3BvcHVwJztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZUF1dGhSZXNwb25zZSB7XG5cdHRva2VuX3R5cGU6IHN0cmluZztcblx0YWNjZXNzX3Rva2VuOiBzdHJpbmc7XG5cdHNjb3BlOiBzdHJpbmc7XG5cdGxvZ2luX2hpbnQ6IHN0cmluZztcblx0ZXhwaXJlc19pbjogbnVtYmVyO1xuXHRleHBpcmVzX2F0OiBudW1iZXI7XG5cdGZpcnN0X2lzc3VlZF9hdDogbnVtYmVyO1xuXHRpZF90b2tlbjogc3RyaW5nO1xuXHRpZHBJZDogc3RyaW5nO1xuXHRzaWduZWRSZXF1ZXN0OiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBpY3R1cmU6IHN0cmluZztcblx0YXV0aFJlc3BvbnNlPzogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRnb29nbGVUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlU2VydmljZSB7XG5cblx0cHVibGljIGF1dGhSZXNwb25zZTogR29vZ2xlQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogR29vZ2xlQ29uZmlnO1xuXHRwcml2YXRlIGdhcGk6IGFueTtcblx0cHJpdmF0ZSBhdXRoMjogYW55O1xuXHRwcml2YXRlIGluc3RhbmNlOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZVNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZ29vZ2xlJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZUNvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZ29vZ2xlJyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVNlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgR29vZ2xlU2VydmljZS5nb29nbGUgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdHByaXZhdGUgZ29vZ2xlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybiBuZXcgT2JzZXJ2YWJsZSgpLnBpcGUoeCA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLmdhcGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRjb25zdCBwcm9maWxlID0gdGhpcy5pbnN0YW5jZS5jdXJyZW50VXNlci5nZXQoKS5nZXRCYXNpY1Byb2ZpbGUoKTtcblx0XHRcdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdFx0XHRpZDogcHJvZmlsZS5nZXRJZCgpLFxuXHRcdFx0XHRcdG5hbWU6IHByb2ZpbGUuZ2V0TmFtZSgpLFxuXHRcdFx0XHRcdGZpcnN0TmFtZTogcHJvZmlsZS5nZXRHaXZlbk5hbWUoKSxcblx0XHRcdFx0XHRsYXN0TmFtZTogcHJvZmlsZS5nZXRGYW1pbHlOYW1lKCksXG5cdFx0XHRcdFx0cGljdHVyZTogcHJvZmlsZS5nZXRJbWFnZVVybCgpLFxuXHRcdFx0XHRcdGVtYWlsOiBwcm9maWxlLmdldEVtYWlsKCksXG5cdFx0XHRcdFx0YXV0aFJlc3BvbnNlOiB0aGlzLmF1dGhSZXNwb25zZSxcblx0XHRcdFx0XHRnb29nbGVUb2tlbjogdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzX3Rva2VuLFxuXHRcdFx0XHR9IGFzIEdvb2dsZVVzZXI7XG5cdFx0XHRcdHJldHVybiBvZih1c2VyKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmF1dGgySW5zdGFuY2UoKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaWduaW4oKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGxvZ291dCgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdXRoMkluc3RhbmNlKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFuY2UuaXNTaWduZWRJbiAmJiB0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4uZ2V0KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduT3V0KCkudGhlbigoc2lnbmVkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJ2h0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaTpjbGllbnQuanM/b25sb2FkPXt7Y2FsbGJhY2t9fScsIHRydWUpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaSA9IHdpbmRvd1snZ2FwaSddO1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nYXBpKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0QXV0aDIoKSB7XG5cdFx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKCkucGlwZSh4ID0+IHtcblx0XHRcdGlmICh0aGlzLmF1dGgyKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmF1dGgyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdvb2dsZSgpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2FwaS5hdXRoMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRoMmluaXQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKFxuXHRcdFx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2FwaS5sb2FkKCdhdXRoMicsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXV0aDJpbml0KCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzaWduaW4oKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlYWRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlTG9naW4ucmVhZEFjY2Vzc1Rva2VuJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSB0aGlzLmluc3RhbmNlLmN1cnJlbnRVc2VyLmdldCgpLmdldEF1dGhSZXNwb25zZSh0cnVlKTtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVMb2dpbi5yZWFkQWNjZXNzVG9rZW4uc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB1c2VyO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZ29vZ2xlJywgdXNlcik7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRcdFx0Y29kZTogdXNlci5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0dvb2dsZUxvZ2luLnJlYWRBY2Nlc3NUb2tlbi5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLmluc3RhbmNlLmlzU2lnbmVkSW4gJiYgdGhpcy5pbnN0YW5jZS5pc1NpZ25lZEluLmdldCgpKSB7XG5cdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbnN0YW5jZS5zaWduSW4oe1xuXHRcdFx0XHRcdFx0c2NvcGU6ICdwcm9maWxlIGVtYWlsJyxcblxuXHRcdFx0XHRcdH0pLnRoZW4oKHNpZ25lZCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVhZEFjY2Vzc1Rva2VuKCk7XG5cblx0XHRcdFx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2dvb2dsZScpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBhdXRoMmluaXQoKSB7XG5cdFx0cmV0dXJuIGZyb20oXG5cdFx0XHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2FwaS5hdXRoMi5pbml0KHtcblx0XHRcdFx0XHRjbGllbnRfaWQ6IHRoaXMub3B0aW9ucy5jbGllbnRJZCxcblx0XHRcdFx0XHRjb29raWVwb2xpY3k6ICdzaW5nbGVfaG9zdF9vcmlnaW4nLFxuXHRcdFx0XHRcdHNjb3BlOiAncHJvZmlsZSBlbWFpbCcsXG5cdFx0XHRcdFx0ZmV0Y2hfYmFzaWNfcHJvZmlsZTogdHJ1ZSxcblx0XHRcdFx0XHR1eF9tb2RlOiAncG9wdXAnLFxuXHRcdFx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGgyID0gdGhpcy5nYXBpLmF1dGgyO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdBdXRoMkluaXQuc3VjY2VzcycsIHRoaXMuYXV0aDIpO1xuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5hdXRoMik7XG5cdFx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYXV0aDJJbnN0YW5jZSgpIHtcblx0XHRpZiAodGhpcy5pbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuaW5zdGFuY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdXRoMigpLnBpcGUoXG5cdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlID0gdGhpcy5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKTtcblx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5pbnN0YW5jZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=