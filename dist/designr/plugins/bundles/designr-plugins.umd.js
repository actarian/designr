(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@designr/page'), require('@angular/router'), require('@angular/common'), require('@angular/core'), require('@designr/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@designr/plugins', ['exports', '@designr/page', '@angular/router', '@angular/common', '@angular/core', '@designr/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.plugins = {}),global.i3,global.ng.router,global.ng.common,global.ng.core,global.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,i3,router,common,i0,i2,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginsConfig = /** @class */ (function () {
        function PluginsConfig(options) {
            this.origin = '';
            console.log('PluginsConfig', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return PluginsConfig;
    }());
    /** @type {?} */
    var PLUGINS_CONFIG = new i0.InjectionToken('plugin.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginsService = /** @class */ (function () {
        function PluginsService(options) {
            console.log('PluginsService', options);
            options = options || {};
            // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
            // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
            this.options = new PluginsConfig(options);
        }
        PluginsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PluginsService.ctorParameters = function () {
            return [
                { type: PluginsConfig, decorators: [{ type: i0.Inject, args: [PLUGINS_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ PluginsService.ngInjectableDef = i0.defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(i0.inject(PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });
        return PluginsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginsModuleComponent = /** @class */ (function () {
        function PluginsModuleComponent() {
            this.version = '0.0.2';
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
            { type: i0.Component, args: [{
                        selector: 'plugins-module',
                        template: "<span class=\"plugins-module\">plugins {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        PluginsModuleComponent.ctorParameters = function () { return []; };
        return PluginsModuleComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
                if (common.isPlatformBrowser(this.platformId) && window.location.protocol.indexOf('https') !== -1) {
                    if (this.FB) {
                        return rxjs.of(this.FB);
                    }
                    else {
                        return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(operators.concatMap(function (x) {
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
                            return rxjs.of(FB);
                        }));
                    }
                }
                else {
                    return rxjs.of(null);
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
                return this.facebook().pipe(operators.filter(function (f) { return f !== null; }), operators.concatMap(function (f) {
                    return rxjs.from(new Promise(function (resolve, reject) {
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
                return this.facebook().pipe(operators.filter(function (f) { return f !== null; }), operators.concatMap(function (f) {
                    return rxjs.from(new Promise(function (resolve, reject) {
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
                return this.facebook().pipe(operators.filter(function (f) { return f !== null; }), operators.concatMap(function (f) {
                    return rxjs.from(new Promise(function (resolve, reject) {
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
                return this.login().pipe(operators.concatMap(function (l) {
                    return rxjs.from(new Promise(function (resolve, reject) {
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
                                var user = ( /** @type {?} */(r));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FacebookService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i2.LocalStorageService },
                { type: i2.OnceService },
                { type: i2.RouteService },
                { type: i3.PageService }
            ];
        };
        /** @nocollapse */ FacebookService.ngInjectableDef = i0.defineInjectable({ factory: function FacebookService_Factory() { return new FacebookService(i0.inject(i0.PLATFORM_ID), i0.inject(PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService), i0.inject(i2.RouteService), i0.inject(i3.PageService)); }, token: FacebookService, providedIn: "root" });
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
                if (common.isPlatformBrowser(this.platformId)) {
                    if (this.dataLayer) {
                        return rxjs.of(this.dataLayer);
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
                        this.dataLayer$ = this.onceService.script(src).pipe(operators.map(function (x) {
                            // console.log('dataLayer', dataLayer, x);
                            _this.dataLayer = dataLayer_1;
                            return dataLayer_1;
                        }));
                        return this.dataLayer$;
                    }
                }
                else {
                    return rxjs.of(null);
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
                        _this.once().pipe(operators.first()).subscribe(function (dataLayer) {
                            if (_this.dataLayer) {
                                _this.dataLayer.push(payload);
                                _this.logger.log('GoogleTagManagerConfig.push', payload);
                            }
                        });
                    }
                });
            };
        GoogleTagManagerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleTagManagerService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i0.NgZone },
                { type: i2.OnceService },
                { type: i2.Logger }
            ];
        };
        /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(PluginsService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i2.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
        return GoogleTagManagerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleTagManagerComponent = /** @class */ (function (_super) {
        __extends(GoogleTagManagerComponent, _super);
        function GoogleTagManagerComponent(platformId, pluginsService, router$$1, googleTagManager) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.pluginsService = pluginsService;
            _this.router = router$$1;
            _this.googleTagManager = googleTagManager;
            _this.useIframe = true;
            _this.pageView = new i0.EventEmitter();
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
                if (common.isPlatformBrowser(this.platformId)) {
                    this.router.events.pipe(operators.takeUntil(this.unsubscribe), operators.filter(function (e) { return e instanceof router.NavigationEnd; })).subscribe(function (e) {
                        /** @type {?} */
                        var url = "" + _this.pluginsService.options.origin + e.urlAfterRedirects;
                        // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                        if (_this.dataLayer) {
                            _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                        }
                        else {
                            _this.googleTagManager.once().pipe(operators.takeUntil(_this.unsubscribe)).subscribe(function (dataLayer) {
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
            { type: i0.Component, args: [{
                        selector: 'core-google-tag-manager',
                        template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->"
                    }] }
        ];
        /** @nocollapse */
        GoogleTagManagerComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: router.Router },
                { type: GoogleTagManagerService }
            ];
        };
        GoogleTagManagerComponent.propDecorators = {
            pageView: [{ type: i0.Output }]
        };
        return GoogleTagManagerComponent;
    }(i2.DisposableComponent));

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
                if (common.isPlatformBrowser(this.platformId)) {
                    return new rxjs.Observable().pipe(function (x) {
                        if (_this.gapi) {
                            return rxjs.of(_this.gapi);
                        }
                        else {
                            return _this.once();
                        }
                    });
                }
                else {
                    return rxjs.of(null);
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
                return this.login().pipe(operators.concatMap(function (x) {
                    /** @type {?} */
                    var profile = _this.instance.currentUser.get().getBasicProfile();
                    /** @type {?} */
                    var user = ( /** @type {?} */({
                        id: profile.getId(),
                        name: profile.getName(),
                        firstName: profile.getGivenName(),
                        lastName: profile.getFamilyName(),
                        picture: profile.getImageUrl(),
                        email: profile.getEmail(),
                        authResponse: _this.authResponse,
                        googleToken: _this.authResponse.access_token,
                    }));
                    return rxjs.of(user);
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
                return this.auth2Instance().pipe(operators.concatMap(function (x) {
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
                return this.auth2Instance().pipe(operators.concatMap(function (x) {
                    return rxjs.from(new Promise(function (resolve, reject) {
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
                return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(operators.concatMap(function (x) {
                    _this.gapi = window['gapi'];
                    return rxjs.of(_this.gapi);
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
                return new rxjs.Observable().pipe(function (x) {
                    if (_this.auth2) {
                        return rxjs.of(_this.auth2);
                    }
                    else {
                        return _this.google().pipe(operators.concatMap(function (x) {
                            if (_this.gapi.auth2) {
                                return _this.auth2init();
                            }
                            else {
                                return rxjs.from(new Promise(function (resolve, reject) {
                                    _this.gapi.load('auth2', function () {
                                        setTimeout(function () {
                                            resolve();
                                        }, 200);
                                    }, reject);
                                })).pipe(operators.concatMap(function (x) {
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
                return rxjs.from(new Promise(function (resolve, reject) {
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
                return rxjs.from(new Promise(function (resolve, reject) {
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
                    return rxjs.of(this.instance);
                }
                else {
                    return this.getAuth2().pipe(operators.concatMap(function (x) {
                        _this.instance = _this.auth2.getAuthInstance();
                        return rxjs.of(_this.instance);
                    }));
                }
            };
        GoogleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i2.LocalStorageService },
                { type: i2.OnceService }
            ];
        };
        /** @nocollapse */ GoogleService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleService_Factory() { return new GoogleService(i0.inject(i0.PLATFORM_ID), i0.inject(PluginsService), i0.inject(i2.LocalStorageService), i0.inject(i2.OnceService)); }, token: GoogleService, providedIn: "root" });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ MapboxService.ngInjectableDef = i0.defineInjectable({ factory: function MapboxService_Factory() { return new MapboxService(); }, token: MapboxService, providedIn: "root" });
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
                if (common.isPlatformBrowser(this.platformId)) {
                    if (this.paypal) {
                        return rxjs.of(this.paypal);
                    }
                    else if (this.paypal$) {
                        return this.paypal$;
                    }
                    else {
                        /** @type {?} */
                        var src = "https://www.paypalobjects.com/api/checkout.js";
                        // console.log('PayPalConfig.once', src);
                        this.paypal$ = this.onceService.script(src).pipe(operators.map(function (x) {
                            _this.paypal = window['paypal'];
                            return _this.paypal;
                        }));
                        return this.paypal$;
                    }
                }
                else {
                    return rxjs.of(null);
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
                return this.once().pipe(operators.mergeMap(function (paypal) {
                    paypal.Button.render(_this.getOptions(paypal, options), selector);
                    return rxjs.of(paypal);
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
                            options.payment().pipe(operators.first(), operators.mergeMap(function (payload) {
                                return rxjs.from(actions.payment.create(payload));
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PayPalService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i2.OnceService }
            ];
        };
        /** @nocollapse */ PayPalService.ngInjectableDef = i0.defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(i0.inject(i0.PLATFORM_ID), i0.inject(PluginsService), i0.inject(i2.OnceService)); }, token: PayPalService, providedIn: "root" });
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
                if (common.isPlatformBrowser(this.platformId)) {
                    this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                        // console.log('PayPalWidgetComponent.rendered', paypal)
                    });
                }
            };
        PayPalWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'plugins-paypal-widget-component',
                        template: "<div id=\"#paypal-widget-button\"></div>"
                    }] }
        ];
        /** @nocollapse */
        PayPalWidgetComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PayPalService }
            ];
        };
        PayPalWidgetComponent.propDecorators = {
            paypalOptions: [{ type: i0.Input }]
        };
        return PayPalWidgetComponent;
    }(i2.DisposableComponent));

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
                if (common.isPlatformBrowser(this.platformId)) {
                    if (this.Trustpilot) {
                        return rxjs.of(this.Trustpilot);
                    }
                    else if (this.Trustpilot$) {
                        return this.Trustpilot$;
                    }
                    else {
                        /** @type {?} */
                        var src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
                        // console.log('TrustPilotConfig.once', src);
                        this.Trustpilot$ = this.onceService.script(src).pipe(operators.map(function (x) {
                            _this.Trustpilot = window['Trustpilot'];
                            return _this.Trustpilot;
                        }));
                        return this.Trustpilot$;
                    }
                }
                else {
                    return rxjs.of(null);
                }
            };
        TrustPilotService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TrustPilotService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i2.OnceService }
            ];
        };
        /** @nocollapse */ TrustPilotService.ngInjectableDef = i0.defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(i0.inject(i0.PLATFORM_ID), i0.inject(PluginsService), i0.inject(i2.OnceService)); }, token: TrustPilotService, providedIn: "root" });
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
                if (common.isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
                    if (!this.loaded) {
                        this.trustPilot.once().pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (Trustpilot) {
                            Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                            _this.loaded = true;
                        });
                    }
                }
            };
        TrustPilotWidgetComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'plugins-trustpilot-widget-component',
                        template: "<ng-container>\n\t<ng-container [ngSwitch]=\"options.templateId\">\n\t\t<ng-container *ngSwitchCase=\"'544a426205dc0a09088833c6'\">\n\t\t\t<!-- PRODUCT REVIEWS -->\n\t\t\t<div class=\"trustpilot-comments\">\n\t\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-sku]=\"sku\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'530d0eaf748a510e2093cf9b'\">\n\t\t\t<!-- EVALUATE -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-group]=\"options.group\" style=\"margin: 30px 0; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8807dec7e10d38f59f32'\">\n\t\t\t<!-- MINI -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'5613c9cde69ddc09340c6beb'\">\n\t\t\t<!-- STARTER -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" style=\"margin: 15px auto; max-width: 750px;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t\t<ng-container *ngSwitchCase=\"'53aa8912dec7e10d38f59f36'\">\n\t\t\t<!-- CAROUSEL -->\n\t\t\t<div class=\"trustpilot-widget\" [attr.data-template-id]=\"options.templateId\" [attr.data-businessunit-id]=\"options.businessunitId\" [attr.data-locale]=\"options.locale\" [attr.data-style-height]=\"options.styleHeight\" [attr.data-style-width]=\"options.styleWidth\" [attr.data-theme]=\"options.theme\" [attr.data-stars]=\"options.stars\" style=\"margin: 15px auto;\">\n\t\t\t\t<a href=\"https://it.trustpilot.com/review/{{options.businessunitName}}\" target=\"_blank\">Trustpilot</a>\n\t\t\t</div>\n\t\t</ng-container>\n\t</ng-container>\n</ng-container>\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [":host{width:100%}.trustpilot-widget{margin:15px auto!important}@media print{.trustpilot-comments{display:none!important}}"]
                    }] }
        ];
        /** @nocollapse */
        TrustPilotWidgetComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: PluginsService },
                { type: i0.ElementRef },
                { type: TrustPilotService }
            ];
        };
        TrustPilotWidgetComponent.propDecorators = {
            options: [{ type: i0.Input }],
            sku: [{ type: i0.Input }]
        };
        return TrustPilotWidgetComponent;
    }(i2.DisposableComponent));

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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i2.CoreModule,
                        ],
                        providers: __spread(services),
                        declarations: __spread(components),
                        exports: __spread([
                            i2.CoreModule
                        ], components),
                    },] }
        ];
        /** @nocollapse */
        PluginsModule.ctorParameters = function () {
            return [
                { type: PluginsModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
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

    exports.PluginsConfig = PluginsConfig;
    exports.PLUGINS_CONFIG = PLUGINS_CONFIG;
    exports.PluginsService = PluginsService;
    exports.PluginsModuleComponent = PluginsModuleComponent;
    exports.PluginsModule = PluginsModule;
    exports.FacebookService = FacebookService;
    exports.GoogleTagManagerComponent = GoogleTagManagerComponent;
    exports.GoogleTagManagerPageViewEvent = GoogleTagManagerPageViewEvent;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.GoogleService = GoogleService;
    exports.MapboxService = MapboxService;
    exports.PayPalWidgetComponent = PayPalWidgetComponent;
    exports.PayPalService = PayPalService;
    exports.TrustPilotWidgetComponent = TrustPilotWidgetComponent;
    exports.TrustPilotService = TrustPilotService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-plugins.umd.js.map