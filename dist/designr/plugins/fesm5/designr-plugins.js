import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, PLATFORM_ID, NgZone, ɵɵelement, ɵɵpipe, ɵɵnextContext, ɵɵproperty, ɵɵpipeBind1, ɵɵsanitizeResourceUrl, EventEmitter, ɵɵdirectiveInject, ɵɵInheritDefinitionFeature, ɵɵtemplate, Output, Input, ElementRef, KeyValueDiffers, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Optional, ChangeDetectorRef, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵprojection, ɵɵlistener, ɵɵclassProp, ɵɵattribute, ViewEncapsulation, ViewChild, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpropertyInterpolate1, ɵɵsanitizeUrl, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, SkipSelf } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { isPlatformBrowser, NgIf, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { LocalStorageService, OnceService, RouteService, Logger, SafeUrlPipe, DisposableComponent, CoreModule } from '@designr/core';
import { PageService } from '@designr/page';
import { of, from, Observable } from 'rxjs';
import { concatMap, filter, map, first, takeUntil, mergeMap } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import * as Swiper from 'swiper/dist/js/swiper.js';

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
var PLUGINS_CONFIG = new InjectionToken('plugin.config');

var PluginsService = /** @class */ (function () {
    function PluginsService(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
    PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(ɵɵinject(PLUGINS_CONFIG)); };
    PluginsService.ɵprov = ɵɵdefineInjectable({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
    return PluginsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: PluginsConfig, decorators: [{
                type: Inject,
                args: [PLUGINS_CONFIG]
            }] }]; }, null); })();

var PluginsModuleComponent = /** @class */ (function () {
    function PluginsModuleComponent() {
        this.version = '0.0.12';
    }
    PluginsModuleComponent.prototype.ngOnInit = function () {
    };
    PluginsModuleComponent.ɵfac = function PluginsModuleComponent_Factory(t) { return new (t || PluginsModuleComponent)(); };
    PluginsModuleComponent.ɵcmp = ɵɵdefineComponent({ type: PluginsModuleComponent, selectors: [["plugins-module"]], decls: 2, vars: 1, consts: [[1, "plugins-module"]], template: function PluginsModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("plugins ", ctx.version, "");
        } }, encapsulation: 2 });
    return PluginsModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsModuleComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-module',
                template: "<span class=\"plugins-module\">plugins {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

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
    FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(LocalStorageService), ɵɵinject(OnceService), ɵɵinject(RouteService), ɵɵinject(PageService)); };
    FacebookService.ɵprov = ɵɵdefineInjectable({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });
    return FacebookService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FacebookService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: LocalStorageService }, { type: OnceService }, { type: RouteService }, { type: PageService }]; }, null); })();

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
    GoogleTagManagerService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    GoogleTagManagerService.prototype.once = function () {
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
                var id = this.options.id;
                var src = "https://www.googletagmanager.com/gtm.js?id=" + id;
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
    GoogleTagManagerService.prototype.push = function (payload) {
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
    GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(NgZone), ɵɵinject(OnceService), ɵɵinject(Logger)); };
    GoogleTagManagerService.ɵprov = ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
    return GoogleTagManagerService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: NgZone }, { type: OnceService }, { type: Logger }]; }, null); })();

function GoogleTagManagerComponent_noscript_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "noscript");
    ɵɵelement(1, "iframe", 1);
    ɵɵpipe(2, "safeUrl");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("src", ɵɵpipeBind1(2, 1, ctx_r8.iframeUrl), ɵɵsanitizeResourceUrl);
} }
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
    GoogleTagManagerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) {
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
    GoogleTagManagerComponent.ɵfac = function GoogleTagManagerComponent_Factory(t) { return new (t || GoogleTagManagerComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PluginsService), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(GoogleTagManagerService)); };
    GoogleTagManagerComponent.ɵcmp = ɵɵdefineComponent({ type: GoogleTagManagerComponent, selectors: [["core-google-tag-manager"]], outputs: { pageView: "pageView" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["height", "0", "width", "0", 2, "display", "none", "visibility", "hidden", 3, "src"]], template: function GoogleTagManagerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, GoogleTagManagerComponent_noscript_0_Template, 3, 3, "noscript", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.useIframe && ctx.dataLayer);
        } }, directives: [NgIf], pipes: [SafeUrlPipe], encapsulation: 2 });
    return GoogleTagManagerComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerComponent, [{
        type: Component,
        args: [{
                selector: 'core-google-tag-manager',
                template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: Router }, { type: GoogleTagManagerService }]; }, { pageView: [{
            type: Output
        }] }); })();

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
    GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(LocalStorageService), ɵɵinject(OnceService)); };
    GoogleService.ɵprov = ɵɵdefineInjectable({ token: GoogleService, factory: GoogleService.ɵfac, providedIn: 'root' });
    return GoogleService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: LocalStorageService }, { type: OnceService }]; }, null); })();

/*
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { fromEvent, Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
*/
var MapboxConfig = /** @class */ (function () {
    function MapboxConfig() {
    }
    return MapboxConfig;
}());
var MapboxMapOptions = /** @class */ (function () {
    function MapboxMapOptions() {
    }
    return MapboxMapOptions;
}());
var MapboxService = /** @class */ (function () {
    function MapboxService() {
    }
    MapboxService.ɵfac = function MapboxService_Factory(t) { return new (t || MapboxService)(); };
    MapboxService.ɵprov = ɵɵdefineInjectable({ token: MapboxService, factory: MapboxService.ɵfac, providedIn: 'root' });
    return MapboxService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MapboxService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

var PayPalConfigStyle = /** @class */ (function () {
    function PayPalConfigStyle() {
    }
    return PayPalConfigStyle;
}());
var PayPalConfigClient = /** @class */ (function () {
    function PayPalConfigClient() {
    }
    return PayPalConfigClient;
}());
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
    PayPalService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    PayPalService.prototype.once = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
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
    PayPalService.prototype.render = function (options, selector) {
        var _this = this;
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(function (paypal) {
            paypal.Button.render(_this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    };
    PayPalService.prototype.getOptions = function (paypal, options) {
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
    PayPalService.ɵfac = function PayPalService_Factory(t) { return new (t || PayPalService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(OnceService)); };
    PayPalService.ɵprov = ɵɵdefineInjectable({ token: PayPalService, factory: PayPalService.ɵfac, providedIn: 'root' });
    return PayPalService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PayPalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: OnceService }]; }, null); })();

var PayPalWidgetComponent = /** @class */ (function (_super) {
    __extends(PayPalWidgetComponent, _super);
    function PayPalWidgetComponent(platformId, paypalService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.paypalService = paypalService;
        return _this;
    }
    PayPalWidgetComponent.prototype.ngAfterViewInit = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    };
    PayPalWidgetComponent.ɵfac = function PayPalWidgetComponent_Factory(t) { return new (t || PayPalWidgetComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PayPalService)); };
    PayPalWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: PayPalWidgetComponent, selectors: [["plugins-paypal-widget-component"]], inputs: { paypalOptions: "paypalOptions" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["id", "#paypal-widget-button"]], template: function PayPalWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return PayPalWidgetComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(PayPalWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-paypal-widget-component',
                template: "<div id=\"#paypal-widget-button\"></div>",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PayPalService }]; }, { paypalOptions: [{
            type: Input
        }] }); })();

var SWIPER_CONFIG = new InjectionToken('SWIPER_CONFIG');
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
    SwiperConfig.prototype.assign = function (config, target) {
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
        set: function (index) {
            if (index != null) {
                this.setIndex(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    SwiperDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
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
                var emitter = _this[swiperEvent];
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
    SwiperDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.destroy(true, _this.swiper_.initialized || false);
            });
            this.swiper_ = null;
        }
    };
    SwiperDirective.prototype.ngDoCheck = function () {
        if (this.config_) {
            var changes = this.config_.diff(this.config || {});
            if (changes) {
                this.index_ = this.getIndex(true);
                this.ngOnDestroy();
                this.ngAfterViewInit();
                this.update();
            }
        }
    };
    SwiperDirective.prototype.ngOnChanges = function (changes) {
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
    SwiperDirective.prototype.emit = function (emitter, value) {
        if (this.performance) {
            emitter.emit(value);
        }
        else {
            this.zone.run(function () { return emitter.emit(value); });
        }
    };
    SwiperDirective.prototype.swiper = function () {
        return this.swiper_;
    };
    SwiperDirective.prototype.initialize = function () {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.init();
            });
        }
    };
    SwiperDirective.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.swiper_) {
                _this.zone.runOutsideAngular(function () {
                    _this.swiper_.update();
                });
            }
        }, 0);
    };
    SwiperDirective.prototype.getIndex = function (real) {
        if (!this.swiper_) {
            return this.index_ || 0;
        }
        else {
            return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
        }
    };
    SwiperDirective.prototype.setIndex = function (index, speed, silent) {
        var _this = this;
        if (!this.swiper_) {
            this.index_ = index;
        }
        else {
            var realIndex_1 = index * this.swiper_.params.slidesPerGroup;
            if (this.swiper_.params.loop) {
                realIndex_1 += this.swiper_.loopedSlides;
            }
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slideTo(realIndex_1, speed, !silent);
            });
        }
    };
    SwiperDirective.prototype.prevSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slidePrev(speed, !silent);
            });
        }
    };
    SwiperDirective.prototype.nextSlide = function (speed, silent) {
        var _this = this;
        if (this.swiper_) {
            this.zone.runOutsideAngular(function () {
                _this.swiper_.slideNext(speed, !silent);
            });
        }
    };
    SwiperDirective.prototype.stopAutoplay = function (reset) {
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
    SwiperDirective.prototype.startAutoplay = function (reset) {
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
    SwiperDirective.ɵfac = function SwiperDirective_Factory(t) { return new (t || SwiperDirective)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
    SwiperDirective.ɵdir = ɵɵdefineDirective({ type: SwiperDirective, selectors: [["", "swiper", ""]], inputs: { index: "index", disabled: "disabled", performance: "performance", config: ["swiper", "config"] }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], features: [ɵɵNgOnChangesFeature()] });
    return SwiperDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwiperDirective, [{
        type: Directive,
        args: [{
                selector: '[swiper]',
                exportAs: 'ngxSwiper'
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }, { type: ElementRef }, { type: KeyValueDiffers }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input,
            args: ['swiper']
        }], autoplay: [{
            type: Output
        }], autoplayStart: [{
            type: Output
        }], autoplayStop: [{
            type: Output
        }], beforeDestroy: [{
            type: Output
        }], beforeResize: [{
            type: Output
        }], breakpoint: [{
            type: Output
        }], click: [{
            type: Output
        }], doubleTap: [{
            type: Output
        }], fromEdge: [{
            type: Output
        }], imagesReady: [{
            type: Output
        }], indexChange: [{
            type: Output
        }], init: [{
            type: Output
        }], keyPress: [{
            type: Output
        }], lazyImageLoad: [{
            type: Output
        }], lazyImageReady: [{
            type: Output
        }], progress: [{
            type: Output
        }], reachBeginning: [{
            type: Output
        }], reachEnd: [{
            type: Output
        }], resize: [{
            type: Output
        }], scroll: [{
            type: Output
        }], scrollDragEnd: [{
            type: Output
        }], scrollDragMove: [{
            type: Output
        }], scrollDragStart: [{
            type: Output
        }], setTransition: [{
            type: Output
        }], setTranslate: [{
            type: Output
        }], slideChange: [{
            type: Output
        }], slideChangeTransitionEnd: [{
            type: Output
        }], slideChangeTransitionStart: [{
            type: Output
        }], slideNextTransitionEnd: [{
            type: Output
        }], slideNextTransitionStart: [{
            type: Output
        }], slidePrevTransitionEnd: [{
            type: Output
        }], slidePrevTransitionStart: [{
            type: Output
        }], sliderMove: [{
            type: Output
        }], tap: [{
            type: Output
        }], touchEnd: [{
            type: Output
        }], touchMove: [{
            type: Output
        }], touchMoveOpposite: [{
            type: Output
        }], touchStart: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], transitionStart: [{
            type: Output
        }] }); })();

var _c0 = ["swiperSlides"];
var _c1 = ["*"];
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
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isEnd'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isAtFirst", {
        get: function () {
            return (!this.directiveRef || !this.directiveRef.swiper()) ?
                false : this.directiveRef.swiper()['isBeginning'];
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngAfterViewInit = function () {
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
                        var directiveOutput = eventName;
                        var componentOutput = eventName;
                        _this.directiveRef[directiveOutput] = _this[componentOutput];
                    }
                });
            }
        }, 0);
    };
    SwiperComponent.prototype.ngOnDestroy = function () {
        if (this.mo) {
            this.mo.disconnect();
        }
        if (this.config && this.paginationBackup) {
            this.config.pagination = this.paginationBackup;
        }
    };
    SwiperComponent.prototype.getConfig = function () {
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
                        var children = _this.swiperSlides ? _this.swiperSlides.nativeElement.children : [];
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
        return this.config;
    };
    SwiperComponent.prototype.updateClasses = function () {
        if (this.swiperSlides) {
            var updateNeeded = false;
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
    SwiperComponent.prototype.onPaginationClick = function (index) {
        if (this.config && this.directiveRef && (this.config.pagination === true ||
            (this.config.pagination && typeof this.config.pagination === 'object' &&
                (!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
                (this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
            this.directiveRef.setIndex(index);
        }
    };
    SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SWIPER_CONFIG, 8)); };
    SwiperComponent.ɵcmp = ɵɵdefineComponent({ type: SwiperComponent, selectors: [["swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
            ɵɵstaticViewQuery(SwiperDirective, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.swiperSlides = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directiveRef = _t.first);
        } }, inputs: { index: "index", disabled: "disabled", performance: "performance", config: "config", useSwiperClass: "useSwiperClass" }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], ngContentSelectors: _c1, decls: 9, vars: 14, consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0, 1);
            ɵɵelementStart(2, "div", 2, 3);
            ɵɵprojection(4);
            ɵɵelementEnd();
            ɵɵelement(5, "div", 4);
            ɵɵelement(6, "div", 5);
            ɵɵelement(7, "div", 6);
            ɵɵelementStart(8, "div", 7);
            ɵɵlistener("click", function SwiperComponent_Template_div_click_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
            ɵɵproperty("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
            ɵɵadvance(5);
            ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
            ɵɵadvance(1);
            ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
            ɵɵattribute("disabled", ctx.isAtFirst || null);
            ɵɵadvance(1);
            ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
            ɵɵattribute("disabled", ctx.isAtLast || null);
            ɵɵadvance(1);
            ɵɵproperty("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
        } }, directives: [SwiperDirective], encapsulation: 2 });
    return SwiperComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SwiperComponent, [{
        type: Component,
        args: [{
                selector: 'swiper',
                exportAs: 'ngxSwiper',
                templateUrl: 'swiper.component.html',
                // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: NgZone }, { type: ChangeDetectorRef }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SWIPER_CONFIG]
            }] }]; }, { swiperSlides: [{
            type: ViewChild,
            args: ['swiperSlides', { static: true }]
        }], directiveRef: [{
            type: ViewChild,
            args: [SwiperDirective, { static: true }]
        }], index: [{
            type: Input
        }], disabled: [{
            type: Input
        }], performance: [{
            type: Input
        }], config: [{
            type: Input
        }], useSwiperClass: [{
            type: Input
        }], autoplay: [{
            type: Output
        }], autoplayStart: [{
            type: Output
        }], autoplayStop: [{
            type: Output
        }], beforeDestroy: [{
            type: Output
        }], beforeResize: [{
            type: Output
        }], breakpoint: [{
            type: Output
        }], click: [{
            type: Output
        }], doubleTap: [{
            type: Output
        }], fromEdge: [{
            type: Output
        }], imagesReady: [{
            type: Output
        }], indexChange: [{
            type: Output
        }], init: [{
            type: Output
        }], keyPress: [{
            type: Output
        }], lazyImageLoad: [{
            type: Output
        }], lazyImageReady: [{
            type: Output
        }], progress: [{
            type: Output
        }], reachBeginning: [{
            type: Output
        }], reachEnd: [{
            type: Output
        }], resize: [{
            type: Output
        }], scroll: [{
            type: Output
        }], scrollDragEnd: [{
            type: Output
        }], scrollDragMove: [{
            type: Output
        }], scrollDragStart: [{
            type: Output
        }], setTransition: [{
            type: Output
        }], setTranslate: [{
            type: Output
        }], slideChange: [{
            type: Output
        }], slideChangeTransitionEnd: [{
            type: Output
        }], slideChangeTransitionStart: [{
            type: Output
        }], slideNextTransitionEnd: [{
            type: Output
        }], slideNextTransitionStart: [{
            type: Output
        }], slidePrevTransitionEnd: [{
            type: Output
        }], slidePrevTransitionStart: [{
            type: Output
        }], sliderMove: [{
            type: Output
        }], tap: [{
            type: Output
        }], touchEnd: [{
            type: Output
        }], touchMove: [{
            type: Output
        }], touchMoveOpposite: [{
            type: Output
        }], touchStart: [{
            type: Output
        }], transitionEnd: [{
            type: Output
        }], transitionStart: [{
            type: Output
        }] }); })();

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
    TrustPilotService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    TrustPilotService.prototype.once = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
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
    TrustPilotService.ɵfac = function TrustPilotService_Factory(t) { return new (t || TrustPilotService)(ɵɵinject(PLATFORM_ID), ɵɵinject(PluginsService), ɵɵinject(OnceService)); };
    TrustPilotService.ɵprov = ɵɵdefineInjectable({ token: TrustPilotService, factory: TrustPilotService.ɵfac, providedIn: 'root' });
    return TrustPilotService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrustPilotService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: OnceService }]; }, null); })();

function TrustPilotWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "a", 4);
    ɵɵtext(4, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r11 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("data-template-id", ctx_r11.options.templateId)("data-businessunit-id", ctx_r11.options.businessunitId)("data-locale", ctx_r11.options.locale)("data-style-height", ctx_r11.options.styleHeight)("data-style-width", ctx_r11.options.styleWidth)("data-theme", ctx_r11.options.theme)("data-sku", ctx_r11.sku);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r11.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r12 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r12.options.templateId)("data-businessunit-id", ctx_r12.options.businessunitId)("data-locale", ctx_r12.options.locale)("data-style-height", ctx_r12.options.styleHeight)("data-style-width", ctx_r12.options.styleWidth)("data-theme", ctx_r12.options.theme)("data-group", ctx_r12.options.group);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r12.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r13 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r13.options.templateId)("data-businessunit-id", ctx_r13.options.businessunitId)("data-locale", ctx_r13.options.locale)("data-style-height", ctx_r13.options.styleHeight)("data-style-width", ctx_r13.options.styleWidth)("data-theme", ctx_r13.options.theme);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r13.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r14 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r14.options.templateId)("data-businessunit-id", ctx_r14.options.businessunitId)("data-locale", ctx_r14.options.locale)("data-style-height", ctx_r14.options.styleHeight)("data-style-width", ctx_r14.options.styleWidth)("data-theme", ctx_r14.options.theme);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r14.options.businessunitName, "", ɵɵsanitizeUrl);
} }
function TrustPilotWidgetComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6);
    ɵɵelementStart(2, "a", 4);
    ɵɵtext(3, "Trustpilot");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("data-template-id", ctx_r15.options.templateId)("data-businessunit-id", ctx_r15.options.businessunitId)("data-locale", ctx_r15.options.locale)("data-style-height", ctx_r15.options.styleHeight)("data-style-width", ctx_r15.options.styleWidth)("data-theme", ctx_r15.options.theme)("data-stars", ctx_r15.options.stars);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("href", "https://it.trustpilot.com/review/", ctx_r15.options.businessunitName, "", ɵɵsanitizeUrl);
} }
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
    TrustPilotWidgetOptions.newFromConfig = function (options) {
        return new TrustPilotWidgetOptions(options);
    };
    TrustPilotWidgetOptions.prototype.set = function (options) {
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
    TrustPilotWidgetComponent.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.trustPilotOptions = this.pluginsService.options.trustPilot;
        this.options = new TrustPilotWidgetOptions(this.trustPilotOptions);
    };
    TrustPilotWidgetComponent.prototype.ngAfterViewInit = function () {
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
    TrustPilotWidgetComponent.ɵfac = function TrustPilotWidgetComponent_Factory(t) { return new (t || TrustPilotWidgetComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(PluginsService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TrustPilotService)); };
    TrustPilotWidgetComponent.ɵcmp = ɵɵdefineComponent({ type: TrustPilotWidgetComponent, selectors: [["plugins-trustpilot-widget-component"]], inputs: { options: "options", sku: "sku" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "trustpilot-comments"], [1, "trustpilot-widget", 2, "margin", "30px 0", "max-width", "750px"], ["target", "_blank", 3, "href"], [1, "trustpilot-widget", 2, "margin", "15px auto", "max-width", "750px"], [1, "trustpilot-widget", 2, "margin", "15px auto"]], template: function TrustPilotWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0);
            ɵɵelementContainerStart(1, 0);
            ɵɵtemplate(2, TrustPilotWidgetComponent_ng_container_2_Template, 5, 8, "ng-container", 1);
            ɵɵtemplate(3, TrustPilotWidgetComponent_ng_container_3_Template, 4, 8, "ng-container", 1);
            ɵɵtemplate(4, TrustPilotWidgetComponent_ng_container_4_Template, 4, 7, "ng-container", 1);
            ɵɵtemplate(5, TrustPilotWidgetComponent_ng_container_5_Template, 4, 7, "ng-container", 1);
            ɵɵtemplate(6, TrustPilotWidgetComponent_ng_container_6_Template, 4, 8, "ng-container", 1);
            ɵɵelementContainerEnd();
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngSwitch", ctx.options.templateId);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "544a426205dc0a09088833c6");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "530d0eaf748a510e2093cf9b");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "53aa8807dec7e10d38f59f32");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "5613c9cde69ddc09340c6beb");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "53aa8912dec7e10d38f59f36");
        } }, directives: [NgSwitch, NgSwitchCase], styles: ["[_nghost-%COMP%]{width:100%}.trustpilot-widget[_ngcontent-%COMP%]{margin:15px auto!important}@media print{.trustpilot-comments[_ngcontent-%COMP%]{display:none!important}}"] });
    return TrustPilotWidgetComponent;
}(DisposableComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrustPilotWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-trustpilot-widget-component',
                templateUrl: './trustpilot-widget.component.html',
                styleUrls: ['./trustpilot-widget.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: PluginsService }, { type: ElementRef }, { type: TrustPilotService }]; }, { options: [{
            type: Input
        }], sku: [{
            type: Input
        }] }); })();

var services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
var components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var PluginsModule = /** @class */ (function () {
    function PluginsModule(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    PluginsModule.forRoot = function (config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    };
    PluginsModule.ɵmod = ɵɵdefineNgModule({ type: PluginsModule });
    PluginsModule.ɵinj = ɵɵdefineInjector({ factory: function PluginsModule_Factory(t) { return new (t || PluginsModule)(ɵɵinject(PluginsModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return PluginsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PluginsModule, { declarations: [PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PluginsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components),
                exports: __spread([
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: PluginsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FacebookAuthResponse, FacebookConfig, FacebookPicture, FacebookPictureData, FacebookService, FacebookUser, GoogleAuthResponse, GoogleConfig, GoogleService, GoogleTagManagerComponent, GoogleTagManagerPageViewEvent, GoogleTagManagerService, GoogleUser, MapboxService, PLUGINS_CONFIG, PayPalService, PayPalWidgetComponent, PluginsConfig, PluginsModule, PluginsModuleComponent, PluginsService, SWIPER_CONFIG, SwiperComponent, SwiperConfig, SwiperDirective, SwiperEvents, TrustPilotService, TrustPilotWidgetComponent };
//# sourceMappingURL=designr-plugins.js.map
