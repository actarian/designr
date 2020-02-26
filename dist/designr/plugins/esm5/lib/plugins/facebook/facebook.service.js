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
var FacebookAuthResponse = /** @class */ (function () {
    function FacebookAuthResponse() {
    }
    return FacebookAuthResponse;
}());
export { FacebookAuthResponse };
var FacebookPictureData = /** @class */ (function () {
    function FacebookPictureData() {
    }
    return FacebookPictureData;
}());
export { FacebookPictureData };
var FacebookPicture = /** @class */ (function () {
    function FacebookPicture() {
    }
    return FacebookPicture;
}());
export { FacebookPicture };
var FacebookUser = /** @class */ (function () {
    function FacebookUser() {
    }
    return FacebookUser;
}());
export { FacebookUser };
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
    FacebookService.prototype.init = function () {
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
    FacebookService.prototype.facebook = function () {
        var _this = this;
        //  && window.location.protocol.indexOf('https') !== -1
        if (isPlatformBrowser(this.platformId)) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(function (x) {
                    // console.log(x);
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
                }));
            }
        }
        else {
            return of(null);
        }
    };
    FacebookService.prototype.status = function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                f.getLoginStatus(function (r) {
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
                }, { scope: _this.options.scope });
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
    };
    FacebookService.prototype.login = function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                f.login(function (r) {
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
                }, { scope: _this.options.scope });
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
    };
    FacebookService.prototype.logout = function () {
        var _this = this;
        return this.facebook().pipe(filter(function (f) { return f !== null; }), concatMap(function (f) {
            return from(new Promise(function (resolve, reject) {
                // console.log('f', f);
                f.logout(function (r) {
                    resolve(r);
                    _this.storage.delete('facebook');
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
    };
    FacebookService.prototype.getMe = function (fields) {
        var _this = this;
        return this.login().pipe(concatMap(function (l) {
            return from(new Promise(function (resolve, reject) {
                fields = fields || _this.options.fields;
                _this.FB.api('/me', {
                    fields: fields,
                    accessToken: _this.options.tokenClient,
                }, function (r) {
                    if (!r || r.error) {
                        var error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        var user = r;
                        user.authResponse = _this.authResponse;
                        user.facebookToken = _this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    };
    FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.OnceService), i0.ɵɵinject(i2.RouteService), i0.ɵɵinject(i3.PageService)); };
    FacebookService.ɵprov = i0.ɵɵdefineInjectable({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });
    return FacebookService;
}());
export { FacebookService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FacebookService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.LocalStorageService }, { type: i2.OnceService }, { type: i2.RouteService }, { type: i3.PageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFOUQ7SUFBQTtRQUVRLFdBQU0sR0FBVyw4REFBOEQsQ0FBQztRQUNoRixVQUFLLEdBQVcsdUJBQXVCLENBQUMsQ0FBQyxpQkFBaUI7UUFFMUQsWUFBTyxHQUFXLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7SUFBQTtJQUtBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVEO0lBQUE7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7QUFFRDtJQUFBO0lBU0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7O0FBRUQ7SUFVQyx5QkFDOEIsVUFBa0IsRUFD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Q0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7a0ZBbk1XLGVBQWUsY0FRbEIsV0FBVzsyREFSUixlQUFlLFdBQWYsZUFBZSxtQkFGZixNQUFNOzBCQWpEbkI7Q0F3UEMsQUF4TUQsSUF3TUM7U0FyTVksZUFBZTtrREFBZixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBU0UsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgT25jZVNlcnZpY2UsIFJvdXRlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tDb25maWcge1xuXHRwdWJsaWMgYXBwSWQ6IG51bWJlcjtcblx0cHVibGljIGZpZWxkczogc3RyaW5nID0gJ2lkLG5hbWUsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsZ2VuZGVyLHBpY3R1cmUsY292ZXIsbGluayc7XG5cdHB1YmxpYyBzY29wZTogc3RyaW5nID0gJ3B1YmxpY19wcm9maWxlLCBlbWFpbCc7IC8vIHB1Ymxpc2hfc3RyZWFtXG5cdHB1YmxpYyB0b2tlbkNsaWVudDogc3RyaW5nO1xuXHRwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gJ3YyLjEwJztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQXV0aFJlc3BvbnNlIHtcblx0YWNjZXNzVG9rZW46IHN0cmluZztcblx0ZXhwaXJlc0luOiBudW1iZXI7XG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmVEYXRhIHtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdGlzX3NpbGhvdWV0dGU6IGJvb2xlYW47XG5cdHVybDogc3RyaW5nO1xuXHR3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlIHtcblx0ZGF0YTogRmFjZWJvb2tQaWN0dXJlRGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0X25hbWU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bGFzdF9uYW1lOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0cGljdHVyZTogRmFjZWJvb2tQaWN0dXJlO1xuXHRhdXRoUmVzcG9uc2U/OiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0ZmFjZWJvb2tUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYXV0aFJlc3BvbnNlOiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRwcml2YXRlIG9wdGlvbnM6IEZhY2Vib29rQ29uZmlnO1xuXHRwcml2YXRlIEZCOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5mYWNlYm9vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGYWNlYm9va1NlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZmFjZWJvb2snKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgRmFjZWJvb2tDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZmFjZWJvb2snKTtcblx0XHRpZiAodGhpcy5vcHRpb25zLmFwcElkKSB7XG5cdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YSh7IHByb3BlcnR5OiAnZmI6YXBwX2lkJywgY29udGVudDogdGhpcy5vcHRpb25zLmFwcElkLnRvU3RyaW5nKCkgfSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuYXV0aFJlc3BvbnNlJywgdGhpcy5hdXRoUmVzcG9uc2UpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgRmFjZWJvb2tTZXJ2aWNlLmZhY2Vib29rIG9uIGNvbXBvbmVudCBPbkluaXQgdG8gYXZvaWQgcG9wdXAgYmxvY2tlcnMgdmlhIGFzeW5jcm9ub3VzIGxvYWRpbmcgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRmYWNlYm9vaygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vICAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTFcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuRkIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuRkIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KCcvL2Nvbm5lY3QuZmFjZWJvb2submV0LycgKyB0aGlzLnJvdXRlU2VydmljZS5jdXJyZW50TGFuZyArICcvc2RrLmpzJywgJ2ZiQXN5bmNJbml0JykucGlwZShcblx0XHRcdFx0XHRjb25jYXRNYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh4KTtcblx0XHRcdFx0XHRcdGNvbnN0IEZCID0gd2luZG93WydGQiddO1xuXHRcdFx0XHRcdFx0RkIuaW5pdCh7XG5cdFx0XHRcdFx0XHRcdGFwcElkOiB0aGlzLm9wdGlvbnMuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdC8vIHN0YXR1czogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y29va2llOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR4ZmJtbDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcnNpb24sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuRkIgPSBGQjtcblx0XHRcdFx0XHRcdHJldHVybiBvZihGQik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXR1cygpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYuZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHguZ2V0TG9naW5TdGF0dXMoKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ2luKCkge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Zi5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdC8qXG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5mYWNlYm9vaygpLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0eC5sb2dpbigocikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IHIuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoci5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHsgc2NvcGU6IHRoaXMub3B0aW9ucy5zY29wZSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pKTtcblx0XHQqL1xuXHR9XG5cblx0bG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZicsIGYpO1xuXHRcdFx0XHRcdGYubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9nb3V0KHIgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGdldE1lKGZpZWxkcz86IHN0cmluZyk6IE9ic2VydmFibGU8RmFjZWJvb2tVc2VyPiB7XG5cdFx0cmV0dXJuIHRoaXMubG9naW4oKS5waXBlKFxuXHRcdFx0Y29uY2F0TWFwKGwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZTxGYWNlYm9va1VzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmaWVsZHMgPSBmaWVsZHMgfHwgdGhpcy5vcHRpb25zLmZpZWxkcztcblx0XHRcdFx0XHR0aGlzLkZCLmFwaSgnL21lJywge1xuXHRcdFx0XHRcdFx0ZmllbGRzOiBmaWVsZHMsXG5cdFx0XHRcdFx0XHRhY2Nlc3NUb2tlbjogdGhpcy5vcHRpb25zLnRva2VuQ2xpZW50LFxuXHRcdFx0XHRcdH0sIChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIXIgfHwgci5lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvciA9IHIgPyByLmVycm9yIDogJ2Vycm9yJztcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KHIuZXJyb3IpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdXNlciA9IHIgYXMgRmFjZWJvb2tVc2VyO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmF1dGhSZXNwb25zZSA9IHRoaXMuYXV0aFJlc3BvbnNlO1xuXHRcdFx0XHRcdFx0XHR1c2VyLmZhY2Vib29rVG9rZW4gPSB0aGlzLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbjtcblx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0ZhY2Vib29rU2VydmljZS5nZXRNZS5zdWNjZXNzJywgdXNlcik7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodXNlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=