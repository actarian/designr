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
export class FacebookAuthResponse {
}
export class FacebookPictureData {
}
export class FacebookPicture {
}
export class FacebookUser {
}
export class FacebookService {
    constructor(platformId, pluginsService, storageService, onceService, routeService, pageService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.pageService = pageService;
        this.init();
    }
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
    facebook() {
        //  && window.location.protocol.indexOf('https') !== -1
        if (isPlatformBrowser(this.platformId)) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(x => {
                    // console.log(x);
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
                }));
            }
        }
        else {
            return of(null);
        }
    }
    status() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.getLoginStatus((r) => {
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
                }, { scope: this.options.scope });
            }));
        }));
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
    login() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                f.login((r) => {
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
                }, { scope: this.options.scope });
            }));
        }));
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
    logout() {
        return this.facebook().pipe(filter(f => f !== null), concatMap(f => {
            return from(new Promise((resolve, reject) => {
                // console.log('f', f);
                f.logout(r => {
                    resolve(r);
                    this.storage.delete('facebook');
                });
            }));
        }));
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
    getMe(fields) {
        return this.login().pipe(concatMap(l => {
            return from(new Promise((resolve, reject) => {
                fields = fields || this.options.fields;
                this.FB.api('/me', {
                    fields: fields,
                    accessToken: this.options.tokenClient,
                }, (r) => {
                    if (!r || r.error) {
                        const error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        const user = r;
                        user.authResponse = this.authResponse;
                        user.facebookToken = this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    }
}
FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.OnceService), i0.ɵɵinject(i2.RouteService), i0.ɵɵinject(i3.PageService)); };
FacebookService.ɵprov = i0.ɵɵdefineInjectable({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FacebookService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.LocalStorageService }, { type: i2.OnceService }, { type: i2.RouteService }, { type: i3.PageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFOUQsTUFBTSxPQUFPLGNBQWM7SUFBM0I7UUFFUSxXQUFNLEdBQVcsOERBQThELENBQUM7UUFDaEYsVUFBSyxHQUFXLHVCQUF1QixDQUFDLENBQUMsaUJBQWlCO1FBRTFELFlBQU8sR0FBVyxPQUFPLENBQUM7SUFDbEMsQ0FBQztDQUFBO0FBRUQsTUFBTSxPQUFPLG9CQUFvQjtDQUtoQztBQUVELE1BQU0sT0FBTyxtQkFBbUI7Q0FLL0I7QUFFRCxNQUFNLE9BQU8sZUFBZTtDQUUzQjtBQUVELE1BQU0sT0FBTyxZQUFZO0NBU3hCO0FBS0QsTUFBTSxPQUFPLGVBQWU7SUFPM0IsWUFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsY0FBbUMsRUFDbkMsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsV0FBd0I7UUFMSCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdB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O2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFTRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBPbmNlU2VydmljZSwgUm91dGVTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9wYWdlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va0NvbmZpZyB7XG5cdHB1YmxpYyBhcHBJZDogbnVtYmVyO1xuXHRwdWJsaWMgZmllbGRzOiBzdHJpbmcgPSAnaWQsbmFtZSxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCxnZW5kZXIscGljdHVyZSxjb3ZlcixsaW5rJztcblx0cHVibGljIHNjb3BlOiBzdHJpbmcgPSAncHVibGljX3Byb2ZpbGUsIGVtYWlsJzsgLy8gcHVibGlzaF9zdHJlYW1cblx0cHVibGljIHRva2VuQ2xpZW50OiBzdHJpbmc7XG5cdHB1YmxpYyB2ZXJzaW9uOiBzdHJpbmcgPSAndjIuMTAnO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tBdXRoUmVzcG9uc2Uge1xuXHRhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXHRleHBpcmVzSW46IG51bWJlcjtcblx0c2lnbmVkUmVxdWVzdDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGljdHVyZURhdGEge1xuXHRoZWlnaHQ6IG51bWJlcjtcblx0aXNfc2lsaG91ZXR0ZTogYm9vbGVhbjtcblx0dXJsOiBzdHJpbmc7XG5cdHdpZHRoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmUge1xuXHRkYXRhOiBGYWNlYm9va1BpY3R1cmVEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tVc2VyIHtcblx0ZW1haWw6IHN0cmluZztcblx0Zmlyc3RfbmFtZTogc3RyaW5nO1xuXHRpZDogc3RyaW5nO1xuXHRsYXN0X25hbWU6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRwaWN0dXJlOiBGYWNlYm9va1BpY3R1cmU7XG5cdGF1dGhSZXNwb25zZT86IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRmYWNlYm9va1Rva2VuPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGYWNlYm9va1NlcnZpY2Uge1xuXG5cdHB1YmxpYyBhdXRoUmVzcG9uc2U6IEZhY2Vib29rQXV0aFJlc3BvbnNlO1xuXHRwdWJsaWMgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2U7XG5cdHByaXZhdGUgb3B0aW9uczogRmFjZWJvb2tDb25maWc7XG5cdHByaXZhdGUgRkI6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ZhY2Vib29rU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5mYWNlYm9vaycpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBGYWNlYm9va0NvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZmFjZWJvb2spO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSB0aGlzLnN0b3JhZ2UuZ2V0KCdmYWNlYm9vaycpO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMuYXBwSWQpIHtcblx0XHRcdHRoaXMucGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhKHsgcHJvcGVydHk6ICdmYjphcHBfaWQnLCBjb250ZW50OiB0aGlzLm9wdGlvbnMuYXBwSWQudG9TdHJpbmcoKSB9KTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5hdXRoUmVzcG9uc2UnLCB0aGlzLmF1dGhSZXNwb25zZSk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBGYWNlYm9va1NlcnZpY2UuZmFjZWJvb2sgb24gY29tcG9uZW50IE9uSW5pdCB0byBhdm9pZCBwb3B1cCBibG9ja2VycyB2aWEgYXN5bmNyb25vdXMgbG9hZGluZyAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdGZhY2Vib29rKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Ly8gICYmIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwcycpICE9PSAtMVxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5GQikge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5GQik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoJy8vY29ubmVjdC5mYWNlYm9vay5uZXQvJyArIHRoaXMucm91dGVTZXJ2aWNlLmN1cnJlbnRMYW5nICsgJy9zZGsuanMnLCAnZmJBc3luY0luaXQnKS5waXBlKFxuXHRcdFx0XHRcdGNvbmNhdE1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgRkIgPSB3aW5kb3dbJ0ZCJ107XG5cdFx0XHRcdFx0XHRGQi5pbml0KHtcblx0XHRcdFx0XHRcdFx0YXBwSWQ6IHRoaXMub3B0aW9ucy5hcHBJZCxcblx0XHRcdFx0XHRcdFx0Ly8gc3RhdHVzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRjb29raWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHhmYm1sOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dGhpcy5GQiA9IEZCO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKEZCKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Zi5nZXRMb2dpblN0YXR1cygocikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5nZXRMb2dpblN0YXR1cygocikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0bG9naW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmLmxvZ2luKChyKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Lypcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR4LmxvZ2luKChyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0fSk7XG5cdFx0fSkpO1xuXHRcdCovXG5cdH1cblxuXHRsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdmJywgZik7XG5cdFx0XHRcdFx0Zi5sb2dvdXQociA9PiB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5sb2dvdXQociA9PiB7XG5cdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0Z2V0TWUoZmllbGRzPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxGYWNlYm9va1VzZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5sb2dpbigpLnBpcGUoXG5cdFx0XHRjb25jYXRNYXAobCA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlPEZhY2Vib29rVXNlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGZpZWxkcyA9IGZpZWxkcyB8fCB0aGlzLm9wdGlvbnMuZmllbGRzO1xuXHRcdFx0XHRcdHRoaXMuRkIuYXBpKCcvbWUnLCB7XG5cdFx0XHRcdFx0XHRmaWVsZHM6IGZpZWxkcyxcblx0XHRcdFx0XHRcdGFjY2Vzc1Rva2VuOiB0aGlzLm9wdGlvbnMudG9rZW5DbGllbnQsXG5cdFx0XHRcdFx0fSwgKHIpID0+IHtcblx0XHRcdFx0XHRcdGlmICghciB8fCByLmVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVycm9yID0gciA/IHIuZXJyb3IgOiAnZXJyb3InO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qoci5lcnJvcik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1c2VyID0gciBhcyBGYWNlYm9va1VzZXI7XG5cdFx0XHRcdFx0XHRcdHVzZXIuYXV0aFJlc3BvbnNlID0gdGhpcy5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdHVzZXIuZmFjZWJvb2tUb2tlbiA9IHRoaXMuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuO1xuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmdldE1lLnN1Y2Nlc3MnLCB1c2VyKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh1c2VyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==