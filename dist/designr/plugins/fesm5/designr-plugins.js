import { PageService } from '@designr/page';
import { NavigationEnd, Router } from '@angular/router';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { __spread, __extends } from 'tslib';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { InjectionToken, Inject, Injectable, Component, defineInjectable, inject, NgModule, Optional, SkipSelf, PLATFORM_ID, Input, EventEmitter, Output, NgZone, ViewEncapsulation, ElementRef, ChangeDetectorRef, ViewChild, Directive, KeyValueDiffers } from '@angular/core';
import { LocalStorageService, OnceService, RouteService, CoreModule, DisposableComponent, Logger } from '@designr/core';
import { from, of, Observable } from 'rxjs';
import { concatMap, filter, first, map, takeUntil, mergeMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PluginsConfig = /** @class */ (function () {
    function PluginsConfig(options) {
        this.origin = '';
        // console.log('PluginsConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return PluginsConfig;
}());
/** @type {?} */
var PLUGINS_CONFIG = new InjectionToken('plugin.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PluginsService = /** @class */ (function () {
    function PluginsService(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
    PluginsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PluginsService.ctorParameters = function () { return [
        { type: PluginsConfig, decorators: [{ type: Inject, args: [PLUGINS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ PluginsService.ngInjectableDef = defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(inject(PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });
    return PluginsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PluginsModuleComponent = /** @class */ (function () {
    function PluginsModuleComponent() {
        this.version = '0.0.3';
    }
    /**
     * @return {?}
     */
    PluginsModuleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PluginsModuleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plugins-module',
                    template: "<span class=\"plugins-module\">plugins {{version}}</span>"
                }] }
    ];
    /** @nocollapse */
    PluginsModuleComponent.ctorParameters = function () { return []; };
    return PluginsModuleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FacebookConfig = /** @class */ (function () {
    function FacebookConfig() {
        this.fields = 'id,name,first_name,last_name,email,gender,picture,cover,link';
        this.scope = 'public_profile, email'; // publish_stream
        this.version = 'v2.10';
    }
    return FacebookConfig;
}());
var FacebookAuthResponse = /** @class */ (function () {
    function FacebookAuthResponse() {
    }
    return FacebookAuthResponse;
}());
var FacebookPictureData = /** @class */ (function () {
    function FacebookPictureData() {
    }
    return FacebookPictureData;
}());
var FacebookPicture = /** @class */ (function () {
    function FacebookPicture() {
    }
    return FacebookPicture;
}());
var FacebookUser = /** @class */ (function () {
    function FacebookUser() {
    }
    return FacebookUser;
}());
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
        if (this.options.appId) {
            this.pageService.addOrUpdateMeta({ property: 'fb:app_id', content: this.options.appId.toString() });
        }
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
        { type: RouteService },
        { type: PageService }
    ]; };
    /** @nocollapse */ FacebookService.ngInjectableDef = defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(inject(PLATFORM_ID), inject(PluginsService), inject(LocalStorageService), inject(OnceService), inject(RouteService), inject(PageService)); }, token: FacebookService, providedIn: "root" });
    return FacebookService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleTagManagerPageViewEvent = /** @class */ (function () {
    function GoogleTagManagerPageViewEvent() {
    }
    return GoogleTagManagerPageViewEvent;
}());
var GoogleTagManagerConfig = /** @class */ (function () {
    function GoogleTagManagerConfig() {
    }
    return GoogleTagManagerConfig;
}());
var GoogleTagManagerService = /** @class */ (function () {
    function GoogleTagManagerService(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    GoogleTagManagerService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    GoogleTagManagerService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                var id = this.options.id;
                /** @type {?} */
                var src = "https://www.googletagmanager.com/gtm.js?id=" + id;
                /** @type {?} */
                var dataLayer_1 = window['dataLayer'];
                dataLayer_1.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map(function (x) {
                    // console.log('dataLayer', dataLayer, x);
                    _this.dataLayer = dataLayer_1;
                    return dataLayer_1;
                }));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    GoogleTagManagerService.prototype.push = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.dataLayer) {
                _this.dataLayer.push(payload);
                _this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                _this.once().pipe(first()).subscribe(function (dataLayer) {
                    if (_this.dataLayer) {
                        _this.dataLayer.push(payload);
                        _this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                });
            }
        });
    };
    GoogleTagManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleTagManagerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: NgZone },
        { type: OnceService },
        { type: Logger }
    ]; };
    /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(inject(PLATFORM_ID), inject(PluginsService), inject(NgZone), inject(OnceService), inject(Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
    return GoogleTagManagerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleTagManagerComponent = /** @class */ (function (_super) {
    __extends(GoogleTagManagerComponent, _super);
    function GoogleTagManagerComponent(platformId, pluginsService, router, googleTagManager) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pluginsService = pluginsService;
        _this.router = router;
        _this.googleTagManager = googleTagManager;
        _this.useIframe = true;
        _this.pageView = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    GoogleTagManagerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) {
                /** @type {?} */
                var url = "" + _this.pluginsService.options.origin + e.urlAfterRedirects;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (_this.dataLayer) {
                    _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                }
                else {
                    _this.googleTagManager.once().pipe(takeUntil(_this.unsubscribe)).subscribe(function (dataLayer) {
                        // console.log('dataLayer', dataLayer);
                        _this.id = _this.googleTagManager.options.id;
                        _this.iframeUrl = "https://www.googletagmanager.com/ns.html?id=" + _this.id;
                        _this.dataLayer = dataLayer;
                        _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    });
                }
            });
        }
    };
    GoogleTagManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-google-tag-manager',
                    template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->"
                }] }
    ];
    /** @nocollapse */
    GoogleTagManagerComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: Router },
        { type: GoogleTagManagerService }
    ]; };
    GoogleTagManagerComponent.propDecorators = {
        pageView: [{ type: Output }]
    };
    return GoogleTagManagerComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleConfig = /** @class */ (function () {
    function GoogleConfig() {
        this.cookiepolicy = 'single_host_origin';
        this.scope = 'profile email';
        this.fetch_basic_profile = true;
        this.ux_mode = 'popup';
    }
    return GoogleConfig;
}());
var GoogleAuthResponse = /** @class */ (function () {
    function GoogleAuthResponse() {
    }
    return GoogleAuthResponse;
}());
var GoogleUser = /** @class */ (function () {
    function GoogleUser() {
    }
    return GoogleUser;
}());
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
    /** @nocollapse */ GoogleService.ngInjectableDef = defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(inject(PLATFORM_ID), inject(PluginsService), inject(LocalStorageService), inject(OnceService)); }, token: GoogleService, providedIn: "root" });
    return GoogleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MapboxService = /** @class */ (function () {
    function MapboxService() {
    }
    MapboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ MapboxService.ngInjectableDef = defineInjectable({ factory: function MapboxService_Factory() { return new MapboxService(); }, token: MapboxService, providedIn: "root" });
    return MapboxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PayPalConfig = /** @class */ (function () {
    function PayPalConfig() {
    }
    return PayPalConfig;
}());
var PayPalService = /** @class */ (function () {
    function PayPalService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    PayPalService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    PayPalService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                var src = "https://www.paypalobjects.com/api/checkout.js";
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.paypal = window['paypal'];
                    return _this.paypal;
                }));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    PayPalService.prototype.render = /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    function (options, selector) {
        var _this = this;
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(function (paypal) {
            paypal.Button.render(_this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    };
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    PayPalService.prototype.getOptions = /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    function (paypal, options) {
        /** @type {?} */
        var payload = Object.assign(this.options, options);
        payload.payment = function (data, actions) {
            return new paypal.Promise(function (resolve, reject) {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(function (payload) {
                        return from(actions.payment.create(payload));
                    })).subscribe(function (success) { return resolve(success); }, // actions.payment.create(success)
                    function (// actions.payment.create(success)
                    error) { return reject(error); });
                }
                else {
                    console.log('PayPalService.payment callback not setted');
                    reject(null);
                }
                // Make an ajax call to get the Payment ID. This should call your back-end,
                // which should invoke the PayPal Payment Create api to retrieve the Payment ID.
                // When you have a Payment ID, you need to call the `resolve` method, e.g `resolve(data.paymentID)`
                // Or, if you have an error from your server side, you need to call `reject`, e.g. `reject(err)`
                // jQuery.post('/my-api/create-payment')
                // .done(function(data) { resolve(data.paymentID); })
                // .fail(function(err)  { reject(err); });
            });
        };
        payload.onAuthorize = function (data, actions) {
            if (options.onAuthorize) {
                return actions.payment.execute().then(function (payment) { return options.onAuthorize(payment, null); }, function (error) { return options.onAuthorize(null, error); });
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
        return payload;
    };
    PayPalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PayPalService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ PayPalService.ngInjectableDef = defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(inject(PLATFORM_ID), inject(PluginsService), inject(OnceService)); }, token: PayPalService, providedIn: "root" });
    return PayPalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PayPalWidgetComponent = /** @class */ (function (_super) {
    __extends(PayPalWidgetComponent, _super);
    function PayPalWidgetComponent(platformId, paypalService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.paypalService = paypalService;
        return _this;
    }
    /**
     * @return {?}
     */
    PayPalWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    };
    PayPalWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plugins-paypal-widget-component',
                    template: "<div id=\"#paypal-widget-button\"></div>"
                }] }
    ];
    /** @nocollapse */
    PayPalWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PayPalService }
    ]; };
    PayPalWidgetComponent.propDecorators = {
        paypalOptions: [{ type: Input }]
    };
    return PayPalWidgetComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
/** @type {?} */
var SwiperEvents = [
    'init',
    'beforeDestroy',
    'scroll',
    'progress',
    'keyPress',
    'beforeResize',
    'afterResize',
    'resize',
    'breakpoint',
    'beforeResize',
    'sliderMove',
    'slideChange',
    'setTranslate',
    'setTransition',
    'fromEdge',
    'reachEnd',
    'reachBeginning',
    'autoplay',
    'autoplayStop',
    'autoplayStart',
    'imagesReady',
    'lazyImageLoad',
    'lazyImageReady',
    'scrollDragEnd',
    'scrollDragMove',
    'scrollDragStart',
    'swiperTap',
    'swiperClick',
    'swiperDoubleTap',
    'swiperTouchEnd',
    'swiperTouchMove',
    'swiperTouchStart',
    'swiperTouchMoveOpposite',
    'swiperTransitionEnd',
    'swiperTransitionStart',
    'slideNextTransitionEnd',
    'slideNextTransitionStart',
    'slidePrevTransitionEnd',
    'slidePrevTransitionStart',
    'slideChangeTransitionEnd',
    'slideChangeTransitionStart'
];
var SwiperConfig = /** @class */ (function () {
    function SwiperConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    SwiperConfig.prototype.assign = /**
     * @param {?=} config
     * @param {?=} target
     * @return {?}
     */
    function (config, target) {
        if (config === void 0) { config = {}; }
        target = target || this;
        for (var key in config) {
            if (config[key] != null && !Array.isArray(config[key]) && typeof config[key] === 'object' &&
                (typeof HTMLElement === 'undefined' || !(config[key] instanceof HTMLElement))) {
                target[key] = {};
                this.assign(config[key], target[key]);
            }
            else {
                target[key] = config[key];
            }
        }
    };
    return SwiperConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwiperDirective = /** @class */ (function () {
    function SwiperDirective(platformId, zone, elementRef, differs, defaults) {
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.differs = differs;
        this.defaults = defaults;
        this.index_ = null;
        this.config_ = null;
        this.disabled = false;
        this.performance = false;
        this.autoplay = new EventEmitter();
        this.autoplayStart = new EventEmitter();
        this.autoplayStop = new EventEmitter();
        this.beforeDestroy = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.click = new EventEmitter();
        this.doubleTap = new EventEmitter();
        this.fromEdge = new EventEmitter();
        this.imagesReady = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.init = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.lazyImageLoad = new EventEmitter();
        this.lazyImageReady = new EventEmitter();
        this.progress = new EventEmitter();
        this.reachBeginning = new EventEmitter();
        this.reachEnd = new EventEmitter();
        this.resize = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollDragEnd = new EventEmitter();
        this.scrollDragMove = new EventEmitter();
        this.scrollDragStart = new EventEmitter();
        this.setTransition = new EventEmitter();
        this.setTranslate = new EventEmitter();
        this.slideChange = new EventEmitter();
        this.slideChangeTransitionEnd = new EventEmitter();
        this.slideChangeTransitionStart = new EventEmitter();
        this.slideNextTransitionEnd = new EventEmitter();
        this.slideNextTransitionStart = new EventEmitter();
        this.slidePrevTransitionEnd = new EventEmitter();
        this.slidePrevTransitionStart = new EventEmitter();
        this.sliderMove = new EventEmitter();
        this.tap = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchMoveOpposite = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.transitionEnd = new EventEmitter();
        this.transitionStart = new EventEmitter();
    }
    Object.defineProperty(SwiperDirective.prototype, "index", {
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        var params = new SwiperConfig(this.defaults);
        params.assign(this.config); // Custom configuration
        if (params.scrollbar === true) {
            params.scrollbar = {
                el: '.swiper-scrollbar'
            };
        }
        if (params.pagination === true) {
            params.pagination = {
                el: '.swiper-pagination'
            };
        }
        if (params.navigation === true) {
            params.navigation = {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            };
        }
        if (this.disabled) {
            params.allowSlidePrev = false;
            params.allowSlideNext = false;
        }
        if (this.index_ != null) {
            params.initialSlide = this.index_;
            this.index_ = null;
        }
        params.on = {
            slideChange: function () {
                if (_this.swiper_ && _this.indexChange.observers.length) {
                    _this.emit(_this.indexChange, _this.swiper_.realIndex);
                }
            }
        };
        this.zone.runOutsideAngular(function () {
            _this.swiper_ = new Swiper(_this.elementRef.nativeElement, params);
        });
        if (params.init !== false && this.init.observers.length) {
            this.emit(this.init, this.swiper_);
        }
        // Add native Swiper event handling
        SwiperEvents.forEach(function (eventName) {
            /** @type {?} */
            var swiperEvent = eventName.replace('swiper', '');
            swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
            _this.swiper_.on(swiperEvent, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length === 1) {
                    args = args[0];
                }
                /** @type {?} */
                var emitter = (/** @type {?} */ (_this[(/** @type {?} */ (swiperEvent))]));
                if (emitter.observers.length) {
                    _this.emit(emitter, args);
                }
            });
        });
        if (!this.config_) {
            this.config_ = this.differs.find(this.config || {}).create();
            this.config_.diff(this.config || {});
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.destroy(true, _this.swiper_.initialized || false);
            });
            this.swiper_ = null;
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.config_) {
            /** @type {?} */
            var changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SwiperDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.swiper_ && changes['disabled']) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                if (changes['disabled'].currentValue === true) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
                else if (changes['disabled'].currentValue === false) {
                    this.zone.runOutsideAngular(function () {
                        _this.ngOnDestroy();
                        _this.ngAfterViewInit();
                    });
                }
            }
        }
    };
    /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    SwiperDirective.prototype.emit = /**
     * @private
     * @param {?} emitter
     * @param {?} value
     * @return {?}
     */
    function (emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(function () { return emitter.emit(value); });
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.swiper = /**
     * @return {?}
     */
    function () {
        return this.swiper_;
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.initialize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.init();
            });
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.swiper_) {
                _this.zone.runOutsideAngular(function () {
                    _this.swiper_.update();
                });
            }
        }, 0);
    };
    /**
     * @param {?=} real
     * @return {?}
     */
    SwiperDirective.prototype.getIndex = /**
     * @param {?=} real
     * @return {?}
     */
    function (real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    };
    /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.setIndex = /**
     * @param {?} index
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (index, speed, silent) {
        var _this = this;
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            /** @type {?} */
            var realIndex_1 = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex_1 += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slideTo(realIndex_1, speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.prevSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slidePrev(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    SwiperDirective.prototype.nextSlide = /**
     * @param {?=} speed
     * @param {?=} silent
     * @return {?}
     */
    function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slideNext(speed, !silent);
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.stopAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.autoplay.stop();
            });
        }
    };
    /**
     * @param {?=} reset
     * @return {?}
     */
    SwiperDirective.prototype.startAutoplay = /**
     * @param {?=} reset
     * @return {?}
     */
    function (reset) {
        var _this = this;
        if (reset) {
            this.setIndex(0);
        }
        if (this.swiper_ && this.swiper_.autoplay) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.autoplay.start();
            });
        }
    };
    SwiperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[swiper]',
                    exportAs: 'ngxSwiper'
                },] }
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef },
        { type: KeyValueDiffers },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
    ]; };
    SwiperDirective.propDecorators = {
        index: [{ type: Input }],
        disabled: [{ type: Input }],
        performance: [{ type: Input }],
        config: [{ type: Input, args: ['swiper',] }],
        autoplay: [{ type: Output }],
        autoplayStart: [{ type: Output }],
        autoplayStop: [{ type: Output }],
        beforeDestroy: [{ type: Output }],
        beforeResize: [{ type: Output }],
        breakpoint: [{ type: Output }],
        click: [{ type: Output }],
        doubleTap: [{ type: Output }],
        fromEdge: [{ type: Output }],
        imagesReady: [{ type: Output }],
        indexChange: [{ type: Output }],
        init: [{ type: Output }],
        keyPress: [{ type: Output }],
        lazyImageLoad: [{ type: Output }],
        lazyImageReady: [{ type: Output }],
        progress: [{ type: Output }],
        reachBeginning: [{ type: Output }],
        reachEnd: [{ type: Output }],
        resize: [{ type: Output }],
        scroll: [{ type: Output }],
        scrollDragEnd: [{ type: Output }],
        scrollDragMove: [{ type: Output }],
        scrollDragStart: [{ type: Output }],
        setTransition: [{ type: Output }],
        setTranslate: [{ type: Output }],
        slideChange: [{ type: Output }],
        slideChangeTransitionEnd: [{ type: Output }],
        slideChangeTransitionStart: [{ type: Output }],
        slideNextTransitionEnd: [{ type: Output }],
        slideNextTransitionStart: [{ type: Output }],
        slidePrevTransitionEnd: [{ type: Output }],
        slidePrevTransitionStart: [{ type: Output }],
        sliderMove: [{ type: Output }],
        tap: [{ type: Output }],
        touchEnd: [{ type: Output }],
        touchMove: [{ type: Output }],
        touchMoveOpposite: [{ type: Output }],
        touchStart: [{ type: Output }],
        transitionEnd: [{ type: Output }],
        transitionStart: [{ type: Output }]
    };
    return SwiperDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwiperComponent = /** @class */ (function () {
    function SwiperComponent(zone, cdRef, platformId, defaults) {
        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.index = null;
        this.disabled = false;
        this.performance = false;
        this.useSwiperClass = true;
        this.autoplay = new EventEmitter();
        this.autoplayStart = new EventEmitter();
        this.autoplayStop = new EventEmitter();
        this.beforeDestroy = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.breakpoint = new EventEmitter();
        this.click = new EventEmitter();
        this.doubleTap = new EventEmitter();
        this.fromEdge = new EventEmitter();
        this.imagesReady = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.init = new EventEmitter();
        this.keyPress = new EventEmitter();
        this.lazyImageLoad = new EventEmitter();
        this.lazyImageReady = new EventEmitter();
        this.progress = new EventEmitter();
        this.reachBeginning = new EventEmitter();
        this.reachEnd = new EventEmitter();
        this.resize = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollDragEnd = new EventEmitter();
        this.scrollDragMove = new EventEmitter();
        this.scrollDragStart = new EventEmitter();
        this.setTransition = new EventEmitter();
        this.setTranslate = new EventEmitter();
        this.slideChange = new EventEmitter();
        this.slideChangeTransitionEnd = new EventEmitter();
        this.slideChangeTransitionStart = new EventEmitter();
        this.slideNextTransitionEnd = new EventEmitter();
        this.slideNextTransitionStart = new EventEmitter();
        this.slidePrevTransitionEnd = new EventEmitter();
        this.slidePrevTransitionStart = new EventEmitter();
        this.sliderMove = new EventEmitter();
        this.tap = new EventEmitter();
        this.touchEnd = new EventEmitter();
        this.touchMove = new EventEmitter();
        this.touchMoveOpposite = new EventEmitter();
        this.touchStart = new EventEmitter();
        this.transitionEnd = new EventEmitter();
        this.transitionStart = new EventEmitter();
        this.mo = null;
        this.swiperConfig = null;
        this.paginationBackup = null;
        this.paginationConfig = null;
    }
    Object.defineProperty(SwiperComponent.prototype, "isAtLast", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isEnd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isBeginning'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            _this.updateClasses();
            if (_this.swiperSlides && typeof MutationObserver !== 'undefined') {
                _this.mo = new MutationObserver(function () {
                    _this.updateClasses();
                });
                _this.mo.observe(_this.swiperSlides.nativeElement, { childList: true });
            }
        });
        window.setTimeout(function () {
            if (_this.directiveRef) {
                _this.init.emit();
                _this.directiveRef.indexChange = _this.indexChange;
                SwiperEvents.forEach(function (eventName) {
                    if (_this.directiveRef) {
                        /** @type {?} */
                        var directiveOutput = (/** @type {?} */ (eventName));
                        /** @type {?} */
                        var componentOutput = (/** @type {?} */ (eventName));
                        _this.directiveRef[directiveOutput] = (/** @type {?} */ (_this[componentOutput]));
                    }
                });
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    };
    /**
     * @return {?}
     */
    SwiperComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.swiperConfig = new SwiperConfig(this.defaults);
        this.swiperConfig.assign(this.config); // Custom configuration
        if (this.swiperConfig.pagination === true ||
            (this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
                (!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
                !this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
            this.config = this.config || {};
            if (!this.paginationConfig) {
                this.paginationBackup = this.config.pagination;
                this.paginationConfig = {
                    el: '.swiper-pagination',
                    renderBullet: function (index, className) {
                        /** @type {?} */
                        var children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
                        /** @type {?} */
                        var bullet = "<span class=\"" + className + " " + className + "-middle\" index=\"" + index + "\"></span>";
                        if (index === 0) {
                            bullet = "<span class=\"" + className + " " + className + "-first\" index=\"" + index + "\"></span>";
                        }
                        else if (index === (children.length - 1)) {
                            bullet = "<span class=\"" + className + " " + className + "-last\" index=\"" + index + "\"></span>";
                        }
                        return "<span class=\"swiper-pagination-handle\" index=\"" + index + "\">" + bullet + "</span>";
                    }
                };
            }
            if (this.swiperConfig.pagination === true) {
                this.config.pagination = this.paginationConfig;
            }
            else {
                this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
            }
        }
        return (/** @type {?} */ (this.config));
    };
    /**
     * @private
     * @return {?}
     */
    SwiperComponent.prototype.updateClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.swiperSlides) {
            /** @type {?} */
            var updateNeeded = false;
            /** @type {?} */
            var children = this.swiperSlides.nativeElement.children;
            for (var i = 0; i < children.length; i++) {
                if (!children[i].classList.contains('swiper-slide')) {
                    updateNeeded = true;
                    children[i].classList.add('swiper-slide');
                }
            }
            if (updateNeeded && this.directiveRef) {
                this.directiveRef.update();
            }
        }
        this.cdRef.detectChanges();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    SwiperComponent.prototype.onPaginationClick = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    };
    SwiperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'swiper',
                    exportAs: 'ngxSwiper',
                    template: "<div #swiper class=\"s-wrapper\" [class.swiper]=\"useSwiperClass\" [class.swiper-container]=\"useSwiperClass\" [swiper]=\"getConfig()\" [index]=\"index\" [disabled]=\"disabled\" [performance]=\"performance\">\n\t<div #swiperSlides class=\"swiper-wrapper\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"swiper-scrollbar\" [hidden]=\"!swiperConfig?.scrollbar || (swiperConfig?.scrollbar !== true && !!swiperConfig?.scrollbar?.el && swiperConfig?.scrollbar?.el !== '.swiper-scrollbar')\"></div>\n\t<div class=\"swiper-button-prev\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.prevEl && swiperConfig?.navigation?.prevEl !== '.swiper-button-prev')\" [attr.disabled]=\"isAtFirst ||\u00A0null\"></div>\n\t<div class=\"swiper-button-next\" [hidden]=\"!swiperConfig?.navigation || (swiperConfig?.navigation !== true && !!swiperConfig?.navigation?.nextEl && swiperConfig?.navigation?.nextEl !== '.swiper-button-next')\" [attr.disabled]=\"isAtLast || null\"></div>\n\t<div class=\"swiper-pagination\" [hidden]=\"!swiperConfig?.pagination || (swiperConfig?.pagination !== true && !!swiperConfig?.pagination?.el && swiperConfig?.pagination?.el !== '.swiper-pagination')\" (click)=\"onPaginationClick($event.target.getAttribute('index'))\" (keyup.enter)=\"onPaginationClick($event.target.getAttribute('index'))\"></div>\n</div>\n",
                    // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SwiperComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SWIPER_CONFIG,] }] }
    ]; };
    SwiperComponent.propDecorators = {
        swiperSlides: [{ type: ViewChild, args: ['swiperSlides',] }],
        directiveRef: [{ type: ViewChild, args: [SwiperDirective,] }],
        index: [{ type: Input }],
        disabled: [{ type: Input }],
        performance: [{ type: Input }],
        config: [{ type: Input }],
        useSwiperClass: [{ type: Input }],
        autoplay: [{ type: Output }],
        autoplayStart: [{ type: Output }],
        autoplayStop: [{ type: Output }],
        beforeDestroy: [{ type: Output }],
        beforeResize: [{ type: Output }],
        breakpoint: [{ type: Output }],
        click: [{ type: Output }],
        doubleTap: [{ type: Output }],
        fromEdge: [{ type: Output }],
        imagesReady: [{ type: Output }],
        indexChange: [{ type: Output }],
        init: [{ type: Output }],
        keyPress: [{ type: Output }],
        lazyImageLoad: [{ type: Output }],
        lazyImageReady: [{ type: Output }],
        progress: [{ type: Output }],
        reachBeginning: [{ type: Output }],
        reachEnd: [{ type: Output }],
        resize: [{ type: Output }],
        scroll: [{ type: Output }],
        scrollDragEnd: [{ type: Output }],
        scrollDragMove: [{ type: Output }],
        scrollDragStart: [{ type: Output }],
        setTransition: [{ type: Output }],
        setTranslate: [{ type: Output }],
        slideChange: [{ type: Output }],
        slideChangeTransitionEnd: [{ type: Output }],
        slideChangeTransitionStart: [{ type: Output }],
        slideNextTransitionEnd: [{ type: Output }],
        slideNextTransitionStart: [{ type: Output }],
        slidePrevTransitionEnd: [{ type: Output }],
        slidePrevTransitionStart: [{ type: Output }],
        sliderMove: [{ type: Output }],
        tap: [{ type: Output }],
        touchEnd: [{ type: Output }],
        touchMove: [{ type: Output }],
        touchMoveOpposite: [{ type: Output }],
        touchStart: [{ type: Output }],
        transitionEnd: [{ type: Output }],
        transitionStart: [{ type: Output }]
    };
    return SwiperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TrustPilotConfig = /** @class */ (function () {
    function TrustPilotConfig() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
    return TrustPilotConfig;
}());
var TrustPilotService = /** @class */ (function () {
    function TrustPilotService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    TrustPilotService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
                var src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.Trustpilot = window['Trustpilot'];
                    return _this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    };
    TrustPilotService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TrustPilotService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ TrustPilotService.ngInjectableDef = defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(inject(PLATFORM_ID), inject(PluginsService), inject(OnceService)); }, token: TrustPilotService, providedIn: "root" });
    return TrustPilotService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TrustPilotWidgetOptions = /** @class */ (function () {
    function TrustPilotWidgetOptions(options) {
        this.locale = 'it-IT';
        this.styleHeight = '350px';
        this.styleWidth = '100%';
        this.theme = 'light';
        this.group = 'on';
        this.stars = '1,2,3,4,5';
        if (options) {
            Object.assign(this, options);
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    TrustPilotWidgetOptions.newFromConfig = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return new TrustPilotWidgetOptions(options);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TrustPilotWidgetOptions.prototype.set = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options) {
            Object.assign(this, options);
        }
        return this;
    };
    return TrustPilotWidgetOptions;
}());
var TrustPilotWidgetComponent = /** @class */ (function (_super) {
    __extends(TrustPilotWidgetComponent, _super);
    function TrustPilotWidgetComponent(platformId, pluginsService, elementRef, trustPilot) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pluginsService = pluginsService;
        _this.elementRef = elementRef;
        _this.trustPilot = trustPilot;
        _this.init();
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    };
    /**
     * @return {?}
     */
    TrustPilotWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('TrustPilotWidgetComponent.ngOnInit', this.options, this.loaded);
        if (isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
            if (!this.loaded) {
                this.trustPilot.once().pipe(takeUntil(this.unsubscribe)).subscribe(function (Trustpilot) {
                    Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                    _this.loaded = true;
                });
            }
        }
    };
    TrustPilotWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plugins-trustpilot-widget-component',
                    template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
                }] }
    ];
    /** @nocollapse */
    TrustPilotWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: ElementRef },
        { type: TrustPilotService }
    ]; };
    TrustPilotWidgetComponent.propDecorators = {
        options: [{ type: Input }],
        sku: [{ type: Input }]
    };
    return TrustPilotWidgetComponent;
}(DisposableComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
/** @type {?} */
var components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
var PluginsModule = /** @class */ (function () {
    function PluginsModule(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PluginsModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    };
    PluginsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components),
                    exports: __spread([
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    PluginsModule.ctorParameters = function () { return [
        { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PluginsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PluginsConfig, PLUGINS_CONFIG, PluginsService, PluginsModuleComponent, PluginsModule, FacebookAuthResponse, FacebookConfig, FacebookPicture, FacebookPictureData, FacebookService, FacebookUser, GoogleTagManagerComponent, GoogleTagManagerPageViewEvent, GoogleTagManagerService, GoogleAuthResponse, GoogleConfig, GoogleService, GoogleUser, MapboxService, PayPalWidgetComponent, PayPalService, SwiperComponent, SwiperDirective, SwiperConfig, SwiperEvents, SWIPER_CONFIG, TrustPilotWidgetComponent, TrustPilotService };

//# sourceMappingURL=designr-plugins.js.map