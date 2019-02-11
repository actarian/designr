/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService, OnceService, RouteService } from '@designr/core';
import { from, of } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
var FacebookConfig = /** @class */ (function () {
    function FacebookConfig() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
    return FacebookConfig;
}());
export { FacebookConfig };
if (false) {
    /** @type {?} */
    FacebookConfig.prototype.appId;
    /** @type {?} */
    FacebookConfig.prototype.fields;
    /** @type {?} */
    FacebookConfig.prototype.scope;
    /** @type {?} */
    FacebookConfig.prototype.tokenClient;
    /** @type {?} */
    FacebookConfig.prototype.version;
}
var FacebookAuthResponse = /** @class */ (function () {
    function FacebookAuthResponse() {
    }
    return FacebookAuthResponse;
}());
export { FacebookAuthResponse };
if (false) {
    /** @type {?} */
    FacebookAuthResponse.prototype.accessToken;
    /** @type {?} */
    FacebookAuthResponse.prototype.expiresIn;
    /** @type {?} */
    FacebookAuthResponse.prototype.signedRequest;
    /** @type {?} */
    FacebookAuthResponse.prototype.userID;
}
var FacebookPictureData = /** @class */ (function () {
    function FacebookPictureData() {
    }
    return FacebookPictureData;
}());
export { FacebookPictureData };
if (false) {
    /** @type {?} */
    FacebookPictureData.prototype.height;
    /** @type {?} */
    FacebookPictureData.prototype.is_silhouette;
    /** @type {?} */
    FacebookPictureData.prototype.url;
    /** @type {?} */
    FacebookPictureData.prototype.width;
}
var FacebookPicture = /** @class */ (function () {
    function FacebookPicture() {
    }
    return FacebookPicture;
}());
export { FacebookPicture };
if (false) {
    /** @type {?} */
    FacebookPicture.prototype.data;
}
var FacebookUser = /** @class */ (function () {
    function FacebookUser() {
    }
    return FacebookUser;
}());
export { FacebookUser };
if (false) {
    /** @type {?} */
    FacebookUser.prototype.email;
    /** @type {?} */
    FacebookUser.prototype.first_name;
    /** @type {?} */
    FacebookUser.prototype.id;
    /** @type {?} */
    FacebookUser.prototype.last_name;
    /** @type {?} */
    FacebookUser.prototype.name;
    /** @type {?} */
    FacebookUser.prototype.picture;
    /** @type {?} */
    FacebookUser.prototype.authResponse;
    /** @type {?} */
    FacebookUser.prototype.facebookToken;
}
var FacebookService = /** @class */ (function () {
    function FacebookService(platformId, pluginsService, storageService, onceService, routeService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.storageService = storageService;
        this.onceService = onceService;
        this.routeService = routeService;
        this.init();
    }
    /**
     * @return {?}
     */
    FacebookService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.facebook) {
            throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
        }
        this.options = Object.assign(new FacebookConfig(), this.pluginsService.options.facebook);
        this.storage = this.storageService.tryGet();
        this.authResponse = this.storage.get('facebook');
        // console.log('FacebookService.authResponse', this.authResponse);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    FacebookService.prototype.facebook = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId) && window.location.protocol.indexOf('https') !== -1) {
            if (this.FB) {
                return of(this.FB);
            }
            else {
                return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(concatMap(function (x) {
                    // console.log(x);
                    /** @type {?} */
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
    /**
     * @return {?}
     */
    FacebookService.prototype.status = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    FacebookService.prototype.login = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    FacebookService.prototype.logout = /**
     * @return {?}
     */
    function () {
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
    /**
     * @param {?=} fields
     * @return {?}
     */
    FacebookService.prototype.getMe = /**
     * @param {?=} fields
     * @return {?}
     */
    function (fields) {
        var _this = this;
        return this.login().pipe(concatMap(function (l) {
            return from(new Promise(function (resolve, reject) {
                fields = fields || _this.options.fields;
                _this.FB.api('/me', {
                    fields: fields,
                    accessToken: _this.options.tokenClient,
                }, function (r) {
                    if (!r || r.error) {
                        /** @type {?} */
                        var error = r ? r.error : 'error';
                        console.log('FacebookService.getMe.error', error);
                        reject(r.error);
                    }
                    else {
                        /** @type {?} */
                        var user = (/** @type {?} */ (r));
                        user.authResponse = _this.authResponse;
                        user.facebookToken = _this.authResponse.accessToken;
                        // console.log('FacebookService.getMe.success', user);
                        resolve(user);
                    }
                });
            }));
        }));
    };
    FacebookService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FacebookService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: LocalStorageService },
        { type: OnceService },
        { type: RouteService }
    ]; };
    /** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService), i0.inject(i2.RouteService)); }, token: FacebookService, providedIn: "root" });
    return FacebookService;
}());
export { FacebookService };
if (false) {
    /** @type {?} */
    FacebookService.prototype.authResponse;
    /** @type {?} */
    FacebookService.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.FB;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    FacebookService.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQWtCLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRTlEO0lBQUE7UUFFUSxXQUFNLEdBQVcsOERBQThELENBQUM7UUFDaEYsVUFBSyxHQUFXLHVCQUF1QixDQUFDLENBQUMsaUJBQWlCO1FBRTFELFlBQU8sR0FBVyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQSwrQkFBcUI7O0lBQ3JCLGdDQUF1Rjs7SUFDdkYsK0JBQStDOztJQUMvQyxxQ0FBMkI7O0lBQzNCLGlDQUFpQzs7QUFHbEM7SUFBQTtJQUtBLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkEsMkNBQW9COztJQUNwQix5Q0FBa0I7O0lBQ2xCLDZDQUFzQjs7SUFDdEIsc0NBQWU7O0FBR2hCO0lBQUE7SUFLQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpBLHFDQUFlOztJQUNmLDRDQUF1Qjs7SUFDdkIsa0NBQVk7O0lBQ1osb0NBQWM7O0FBR2Y7SUFBQTtJQUVBLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEsK0JBQTBCOztBQUczQjtJQUFBO0lBU0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQSw2QkFBYzs7SUFDZCxrQ0FBbUI7O0lBQ25CLDBCQUFXOztJQUNYLGlDQUFrQjs7SUFDbEIsNEJBQWE7O0lBQ2IsK0JBQXlCOztJQUN6QixvQ0FBb0M7O0lBQ3BDLHFDQUF1Qjs7QUFHeEI7SUFVQyx5QkFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsY0FBbUMsRUFDbkMsV0FBd0IsRUFDeEIsWUFBMEI7UUFKTCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBcUI7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFbEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMxRSxNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7U0FDL0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxrRUFBa0U7SUFDbkUsQ0FBQztJQUVEOzswR0FFc0c7Ozs7Ozs7SUFFdEcsa0NBQVE7Ozs7OztJQUFSO1FBQUEsaUJBd0JDO1FBdkJBLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzRixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEgsU0FBUyxDQUFDLFVBQUEsQ0FBQzs7O3dCQUVKLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN2QixFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUNQLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7O3dCQUV6QixNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ2IsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQ0YsQ0FBQzthQUNGO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUFBLGlCQXdDQztRQXZDQSxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLEVBQ3ZCLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN2QyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQUMsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7d0JBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDN0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNYO3lCQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsRUFBRTt3QkFDekMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDVjt5QkFBTTt3QkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ1Y7Z0JBQ0YsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztRQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFrQkU7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQUEsaUJBd0NDO1FBdkNBLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDMUIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksRUFBVixDQUFVLENBQUMsRUFDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3ZDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO29CQUNULEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO3dCQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7d0JBQ25DLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDWDt5QkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssZ0JBQWdCLEVBQUU7d0JBQ3pDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ1Y7eUJBQU07d0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNWO2dCQUNGLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBa0JFO0lBQ0gsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUFBLGlCQXVCQztRQXRCQSxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzFCLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLEVBQ3ZCLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN2Qyx1QkFBdUI7Z0JBQ3ZCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO29CQUNULE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztRQUNGOzs7Ozs7Ozs7VUFTRTtJQUNILENBQUM7Ozs7O0lBRUQsK0JBQUs7Ozs7SUFBTCxVQUFNLE1BQWU7UUFBckIsaUJBd0JDO1FBdkJBLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FDdkIsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3JELE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtvQkFDbEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsV0FBVyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztpQkFDckMsRUFBRSxVQUFDLENBQUM7b0JBQ0osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFOzs0QkFDWixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPO3dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNsRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNoQjt5QkFBTTs7NEJBQ0EsSUFBSSxHQUFHLG1CQUFBLENBQUMsRUFBZ0I7d0JBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQzt3QkFDbkQsc0RBQXNEO3dCQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Q7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7O2dCQWpNRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7OzZDQVNFLE1BQU0sU0FBQyxXQUFXO2dCQWxEWixjQUFjO2dCQUhkLG1CQUFtQjtnQkFBRSxXQUFXO2dCQUFFLFlBQVk7OzswQkFMdkQ7Q0FrUEMsQUFuTUQsSUFtTUM7U0FoTVksZUFBZTs7O0lBRTNCLHVDQUEwQzs7SUFDMUMsa0NBQStCOzs7OztJQUMvQixrQ0FBZ0M7Ozs7O0lBQ2hDLDZCQUFnQjs7Ozs7SUFHZixxQ0FBK0M7Ozs7O0lBQy9DLHlDQUFzQzs7Ozs7SUFDdEMseUNBQTJDOzs7OztJQUMzQyxzQ0FBZ0M7Ozs7O0lBQ2hDLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UsIE9uY2VTZXJ2aWNlLCBSb3V0ZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY29uY2F0TWFwLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tDb25maWcge1xuXHRwdWJsaWMgYXBwSWQ6IG51bWJlcjtcblx0cHVibGljIGZpZWxkczogc3RyaW5nID0gJ2lkLG5hbWUsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsZ2VuZGVyLHBpY3R1cmUsY292ZXIsbGluayc7XG5cdHB1YmxpYyBzY29wZTogc3RyaW5nID0gJ3B1YmxpY19wcm9maWxlLCBlbWFpbCc7IC8vIHB1Ymxpc2hfc3RyZWFtXG5cdHB1YmxpYyB0b2tlbkNsaWVudDogc3RyaW5nO1xuXHRwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gJ3YyLjEwJztcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rQXV0aFJlc3BvbnNlIHtcblx0YWNjZXNzVG9rZW46IHN0cmluZztcblx0ZXhwaXJlc0luOiBudW1iZXI7XG5cdHNpZ25lZFJlcXVlc3Q6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlYm9va1BpY3R1cmVEYXRhIHtcblx0aGVpZ2h0OiBudW1iZXI7XG5cdGlzX3NpbGhvdWV0dGU6IGJvb2xlYW47XG5cdHVybDogc3RyaW5nO1xuXHR3aWR0aDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tQaWN0dXJlIHtcblx0ZGF0YTogRmFjZWJvb2tQaWN0dXJlRGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIEZhY2Vib29rVXNlciB7XG5cdGVtYWlsOiBzdHJpbmc7XG5cdGZpcnN0X25hbWU6IHN0cmluZztcblx0aWQ6IHN0cmluZztcblx0bGFzdF9uYW1lOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0cGljdHVyZTogRmFjZWJvb2tQaWN0dXJlO1xuXHRhdXRoUmVzcG9uc2U/OiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0ZmFjZWJvb2tUb2tlbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTZXJ2aWNlIHtcblxuXHRwdWJsaWMgYXV0aFJlc3BvbnNlOiBGYWNlYm9va0F1dGhSZXNwb25zZTtcblx0cHVibGljIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXHRwcml2YXRlIG9wdGlvbnM6IEZhY2Vib29rQ29uZmlnO1xuXHRwcml2YXRlIEZCOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5mYWNlYm9vaykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdGYWNlYm9va1NlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMuZmFjZWJvb2snKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgRmFjZWJvb2tDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmZhY2Vib29rKTtcblx0XHR0aGlzLnN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gdGhpcy5zdG9yYWdlLmdldCgnZmFjZWJvb2snKTtcblx0XHQvLyBjb25zb2xlLmxvZygnRmFjZWJvb2tTZXJ2aWNlLmF1dGhSZXNwb25zZScsIHRoaXMuYXV0aFJlc3BvbnNlKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEZhY2Vib29rU2VydmljZS5mYWNlYm9vayBvbiBjb21wb25lbnQgT25Jbml0IHRvIGF2b2lkIHBvcHVwIGJsb2NrZXJzIHZpYSBhc3luY3Jvbm91cyBsb2FkaW5nICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0ZmFjZWJvb2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTEpIHtcblx0XHRcdGlmICh0aGlzLkZCKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLkZCKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdCgnLy9jb25uZWN0LmZhY2Vib29rLm5ldC8nICsgdGhpcy5yb3V0ZVNlcnZpY2UuY3VycmVudExhbmcgKyAnL3Nkay5qcycsICdmYkFzeW5jSW5pdCcpLnBpcGUoXG5cdFx0XHRcdFx0Y29uY2F0TWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coeCk7XG5cdFx0XHRcdFx0XHRjb25zdCBGQiA9IHdpbmRvd1snRkInXTtcblx0XHRcdFx0XHRcdEZCLmluaXQoe1xuXHRcdFx0XHRcdFx0XHRhcHBJZDogdGhpcy5vcHRpb25zLmFwcElkLFxuXHRcdFx0XHRcdFx0XHQvLyBzdGF0dXM6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNvb2tpZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0eGZibWw6IHRydWUsXG5cdFx0XHRcdFx0XHRcdHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR0aGlzLkZCID0gRkI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YoRkIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZmFjZWJvb2soKS5waXBlKFxuXHRcdFx0ZmlsdGVyKGYgPT4gZiAhPT0gbnVsbCksXG5cdFx0XHRjb25jYXRNYXAoZiA9PiB7XG5cdFx0XHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRmLmdldExvZ2luU3RhdHVzKChyKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoci5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Lypcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR4LmdldExvZ2luU3RhdHVzKChyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSBudWxsO1xuXHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gci5hdXRoUmVzcG9uc2U7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2Uuc2V0KCdmYWNlYm9vaycsIHIuYXV0aFJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLmRlbGV0ZSgnZmFjZWJvb2snKTtcblx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgeyBzY29wZTogdGhpcy5vcHRpb25zLnNjb3BlIH0pO1xuXHRcdFx0fSk7XG5cdFx0fSkpO1xuXHRcdCovXG5cdH1cblxuXHRsb2dpbigpIHtcblx0XHRyZXR1cm4gdGhpcy5mYWNlYm9vaygpLnBpcGUoXG5cdFx0XHRmaWx0ZXIoZiA9PiBmICE9PSBudWxsKSxcblx0XHRcdGNvbmNhdE1hcChmID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdGYubG9naW4oKHIpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuYXV0aFJlc3BvbnNlID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChyLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdG9yYWdlLnNldCgnZmFjZWJvb2snLCByLmF1dGhSZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHQvKlxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHRoaXMuZmFjZWJvb2soKS5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHgubG9naW4oKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLmF1dGhSZXNwb25zZSA9IG51bGw7XG5cdFx0XHRcdFx0aWYgKHIuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuXHRcdFx0XHRcdFx0dGhpcy5hdXRoUmVzcG9uc2UgPSByLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5zZXQoJ2ZhY2Vib29rJywgci5hdXRoUmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHIuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdFx0cmVqZWN0KHIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZWplY3Qocik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCB7IHNjb3BlOiB0aGlzLm9wdGlvbnMuc2NvcGUgfSk7XG5cdFx0XHR9KTtcblx0XHR9KSk7XG5cdFx0Ki9cblx0fVxuXG5cdGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmZhY2Vib29rKCkucGlwZShcblx0XHRcdGZpbHRlcihmID0+IGYgIT09IG51bGwpLFxuXHRcdFx0Y29uY2F0TWFwKGYgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2YnLCBmKTtcblx0XHRcdFx0XHRmLmxvZ291dChyID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUocik7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JhZ2UuZGVsZXRlKCdmYWNlYm9vaycpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Lypcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLmZhY2Vib29rKCkuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR4LmxvZ291dChyID0+IHtcblx0XHRcdFx0XHRyZXNvbHZlKHIpO1xuXHRcdFx0XHRcdHRoaXMuc3RvcmFnZS5kZWxldGUoJ2ZhY2Vib29rJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSkpO1xuXHRcdCovXG5cdH1cblxuXHRnZXRNZShmaWVsZHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZhY2Vib29rVXNlcj4ge1xuXHRcdHJldHVybiB0aGlzLmxvZ2luKCkucGlwZShcblx0XHRcdGNvbmNhdE1hcChsID0+IHtcblx0XHRcdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2U8RmFjZWJvb2tVc2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0ZmllbGRzID0gZmllbGRzIHx8IHRoaXMub3B0aW9ucy5maWVsZHM7XG5cdFx0XHRcdFx0dGhpcy5GQi5hcGkoJy9tZScsIHtcblx0XHRcdFx0XHRcdGZpZWxkczogZmllbGRzLFxuXHRcdFx0XHRcdFx0YWNjZXNzVG9rZW46IHRoaXMub3B0aW9ucy50b2tlbkNsaWVudCxcblx0XHRcdFx0XHR9LCAocikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCFyIHx8IHIuZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZXJyb3IgPSByID8gci5lcnJvciA6ICdlcnJvcic7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChyLmVycm9yKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVzZXIgPSByIGFzIEZhY2Vib29rVXNlcjtcblx0XHRcdFx0XHRcdFx0dXNlci5hdXRoUmVzcG9uc2UgPSB0aGlzLmF1dGhSZXNwb25zZTtcblx0XHRcdFx0XHRcdFx0dXNlci5mYWNlYm9va1Rva2VuID0gdGhpcy5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW47XG5cdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdGYWNlYm9va1NlcnZpY2UuZ2V0TWUuc3VjY2VzcycsIHVzZXIpO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHVzZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19