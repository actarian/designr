(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@designr/core'), require('@designr/page'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('swiper/dist/js/swiper.js')) :
    typeof define === 'function' && define.amd ? define('@designr/plugins', ['exports', '@angular/core', '@angular/common', '@designr/core', '@designr/page', 'rxjs', 'rxjs/operators', '@angular/router', 'swiper/dist/js/swiper.js'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.plugins = {}), global.ng.core, global.ng.common, global.core, global.page, global.rxjs, global.rxjs.operators, global.ng.router, global.Swiper));
}(this, (function (exports, core, common, core$1, page, rxjs, operators, router, Swiper) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
    var PLUGINS_CONFIG = new core.InjectionToken('plugin.config');

    var PluginsService = /** @class */ (function () {
        function PluginsService(options) {
            // console.log('PluginsService', options);
            options = options || {};
            // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
            // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
            this.options = new PluginsConfig(options);
        }
        PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(core["ɵɵinject"](PLUGINS_CONFIG)); };
        PluginsService.ɵprov = core["ɵɵdefineInjectable"]({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
        return PluginsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PluginsService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: PluginsConfig, decorators: [{
                    type: core.Inject,
                    args: [PLUGINS_CONFIG]
                }] }]; }, null); })();

    var PluginsModuleComponent = /** @class */ (function () {
        function PluginsModuleComponent() {
            this.version = '0.0.12';
        }
        PluginsModuleComponent.prototype.ngOnInit = function () {
        };
        PluginsModuleComponent.ɵfac = function PluginsModuleComponent_Factory(t) { return new (t || PluginsModuleComponent)(); };
        PluginsModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PluginsModuleComponent, selectors: [["plugins-module"]], decls: 2, vars: 1, consts: [[1, "plugins-module"]], template: function PluginsModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("plugins ", ctx.version, "");
            } }, encapsulation: 2 });
        return PluginsModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PluginsModuleComponent, [{
            type: core.Component,
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
            if (common.isPlatformBrowser(this.platformId)) {
                if (this.FB) {
                    return rxjs.of(this.FB);
                }
                else {
                    return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').pipe(operators.concatMap(function (x) {
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
                        return rxjs.of(FB);
                    }));
                }
            }
            else {
                return rxjs.of(null);
            }
        };
        FacebookService.prototype.status = function () {
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
        FacebookService.prototype.login = function () {
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
        FacebookService.prototype.logout = function () {
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
        FacebookService.prototype.getMe = function (fields) {
            var _this = this;
            return this.login().pipe(operators.concatMap(function (l) {
                return rxjs.from(new Promise(function (resolve, reject) {
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
        FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](PluginsService), core["ɵɵinject"](core$1.LocalStorageService), core["ɵɵinject"](core$1.OnceService), core["ɵɵinject"](core$1.RouteService), core["ɵɵinject"](page.PageService)); };
        FacebookService.ɵprov = core["ɵɵdefineInjectable"]({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });
        return FacebookService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FacebookService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core$1.LocalStorageService }, { type: core$1.OnceService }, { type: core$1.RouteService }, { type: page.PageService }]; }, null); })();

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
            if (common.isPlatformBrowser(this.platformId)) {
                if (this.dataLayer) {
                    return rxjs.of(this.dataLayer);
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
        GoogleTagManagerService.prototype.push = function (payload) {
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
        GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](PluginsService), core["ɵɵinject"](core.NgZone), core["ɵɵinject"](core$1.OnceService), core["ɵɵinject"](core$1.Logger)); };
        GoogleTagManagerService.ɵprov = core["ɵɵdefineInjectable"]({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
        return GoogleTagManagerService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GoogleTagManagerService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core.NgZone }, { type: core$1.OnceService }, { type: core$1.Logger }]; }, null); })();

    function GoogleTagManagerComponent_noscript_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "noscript");
        core["ɵɵelement"](1, "iframe", 1);
        core["ɵɵpipe"](2, "safeUrl");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r8 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("src", core["ɵɵpipeBind1"](2, 1, ctx_r8.iframeUrl), core["ɵɵsanitizeResourceUrl"]);
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
            _this.pageView = new core.EventEmitter();
            return _this;
        }
        GoogleTagManagerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.router.events.pipe(operators.takeUntil(this.unsubscribe), operators.filter(function (e) { return e instanceof router.NavigationEnd; })).subscribe(function (e) {
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
        GoogleTagManagerComponent.ɵfac = function GoogleTagManagerComponent_Factory(t) { return new (t || GoogleTagManagerComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](PluginsService), core["ɵɵdirectiveInject"](router.Router), core["ɵɵdirectiveInject"](GoogleTagManagerService)); };
        GoogleTagManagerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: GoogleTagManagerComponent, selectors: [["core-google-tag-manager"]], outputs: { pageView: "pageView" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["height", "0", "width", "0", 2, "display", "none", "visibility", "hidden", 3, "src"]], template: function GoogleTagManagerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, GoogleTagManagerComponent_noscript_0_Template, 3, 3, "noscript", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.useIframe && ctx.dataLayer);
            } }, directives: [common.NgIf], pipes: [core$1.SafeUrlPipe], encapsulation: 2 });
        return GoogleTagManagerComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GoogleTagManagerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-google-tag-manager',
                    template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->",
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: router.Router }, { type: GoogleTagManagerService }]; }, { pageView: [{
                type: core.Output
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
        GoogleService.prototype.getMe = function () {
            var _this = this;
            return this.login().pipe(operators.concatMap(function (x) {
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
                return rxjs.of(user);
            }));
        };
        GoogleService.prototype.login = function () {
            var _this = this;
            return this.auth2Instance().pipe(operators.concatMap(function (x) {
                return _this.signin();
            }));
        };
        GoogleService.prototype.logout = function () {
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
        GoogleService.prototype.once = function () {
            var _this = this;
            return this.onceService.script('https://apis.google.com/js/api:client.js?onload={{callback}}', true).pipe(operators.concatMap(function (x) {
                _this.gapi = window['gapi'];
                return rxjs.of(_this.gapi);
            }));
        };
        GoogleService.prototype.getAuth2 = function () {
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
        GoogleService.prototype.signin = function () {
            var _this = this;
            return rxjs.from(new Promise(function (resolve, reject) {
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
        GoogleService.prototype.auth2Instance = function () {
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
        GoogleService.ɵfac = function GoogleService_Factory(t) { return new (t || GoogleService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](PluginsService), core["ɵɵinject"](core$1.LocalStorageService), core["ɵɵinject"](core$1.OnceService)); };
        GoogleService.ɵprov = core["ɵɵdefineInjectable"]({ token: GoogleService, factory: GoogleService.ɵfac, providedIn: 'root' });
        return GoogleService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GoogleService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core$1.LocalStorageService }, { type: core$1.OnceService }]; }, null); })();

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
        MapboxService.ɵprov = core["ɵɵdefineInjectable"]({ token: MapboxService, factory: MapboxService.ɵfac, providedIn: 'root' });
        return MapboxService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MapboxService, [{
            type: core.Injectable,
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
            if (common.isPlatformBrowser(this.platformId)) {
                if (this.paypal) {
                    return rxjs.of(this.paypal);
                }
                else if (this.paypal$) {
                    return this.paypal$;
                }
                else {
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
        PayPalService.prototype.render = function (options, selector) {
            var _this = this;
            selector = selector || '#paypal-button';
            return this.once().pipe(operators.mergeMap(function (paypal) {
                paypal.Button.render(_this.getOptions(paypal, options), selector);
                return rxjs.of(paypal);
            }));
        };
        PayPalService.prototype.getOptions = function (paypal, options) {
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
        PayPalService.ɵfac = function PayPalService_Factory(t) { return new (t || PayPalService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](PluginsService), core["ɵɵinject"](core$1.OnceService)); };
        PayPalService.ɵprov = core["ɵɵdefineInjectable"]({ token: PayPalService, factory: PayPalService.ɵfac, providedIn: 'root' });
        return PayPalService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PayPalService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core$1.OnceService }]; }, null); })();

    var PayPalWidgetComponent = /** @class */ (function (_super) {
        __extends(PayPalWidgetComponent, _super);
        function PayPalWidgetComponent(platformId, paypalService) {
            var _this = _super.call(this) || this;
            _this.platformId = platformId;
            _this.paypalService = paypalService;
            return _this;
        }
        PayPalWidgetComponent.prototype.ngAfterViewInit = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                    // console.log('PayPalWidgetComponent.rendered', paypal)
                });
            }
        };
        PayPalWidgetComponent.ɵfac = function PayPalWidgetComponent_Factory(t) { return new (t || PayPalWidgetComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](PayPalService)); };
        PayPalWidgetComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PayPalWidgetComponent, selectors: [["plugins-paypal-widget-component"]], inputs: { paypalOptions: "paypalOptions" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "#paypal-widget-button"]], template: function PayPalWidgetComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "div", 0);
            } }, encapsulation: 2 });
        return PayPalWidgetComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PayPalWidgetComponent, [{
            type: core.Component,
            args: [{
                    selector: 'plugins-paypal-widget-component',
                    template: "<div id=\"#paypal-widget-button\"></div>",
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PayPalService }]; }, { paypalOptions: [{
                type: core.Input
            }] }); })();

    var SWIPER_CONFIG = new core.InjectionToken('SWIPER_CONFIG');
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
            this.autoplay = new core.EventEmitter();
            this.autoplayStart = new core.EventEmitter();
            this.autoplayStop = new core.EventEmitter();
            this.beforeDestroy = new core.EventEmitter();
            this.beforeResize = new core.EventEmitter();
            this.breakpoint = new core.EventEmitter();
            this.click = new core.EventEmitter();
            this.doubleTap = new core.EventEmitter();
            this.fromEdge = new core.EventEmitter();
            this.imagesReady = new core.EventEmitter();
            this.indexChange = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this.keyPress = new core.EventEmitter();
            this.lazyImageLoad = new core.EventEmitter();
            this.lazyImageReady = new core.EventEmitter();
            this.progress = new core.EventEmitter();
            this.reachBeginning = new core.EventEmitter();
            this.reachEnd = new core.EventEmitter();
            this.resize = new core.EventEmitter();
            this.scroll = new core.EventEmitter();
            this.scrollDragEnd = new core.EventEmitter();
            this.scrollDragMove = new core.EventEmitter();
            this.scrollDragStart = new core.EventEmitter();
            this.setTransition = new core.EventEmitter();
            this.setTranslate = new core.EventEmitter();
            this.slideChange = new core.EventEmitter();
            this.slideChangeTransitionEnd = new core.EventEmitter();
            this.slideChangeTransitionStart = new core.EventEmitter();
            this.slideNextTransitionEnd = new core.EventEmitter();
            this.slideNextTransitionStart = new core.EventEmitter();
            this.slidePrevTransitionEnd = new core.EventEmitter();
            this.slidePrevTransitionStart = new core.EventEmitter();
            this.sliderMove = new core.EventEmitter();
            this.tap = new core.EventEmitter();
            this.touchEnd = new core.EventEmitter();
            this.touchMove = new core.EventEmitter();
            this.touchMoveOpposite = new core.EventEmitter();
            this.touchStart = new core.EventEmitter();
            this.transitionEnd = new core.EventEmitter();
            this.transitionStart = new core.EventEmitter();
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
            if (!common.isPlatformBrowser(this.platformId)) {
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
        SwiperDirective.ɵfac = function SwiperDirective_Factory(t) { return new (t || SwiperDirective)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.KeyValueDiffers), core["ɵɵdirectiveInject"](SWIPER_CONFIG, 8)); };
        SwiperDirective.ɵdir = core["ɵɵdefineDirective"]({ type: SwiperDirective, selectors: [["", "swiper", ""]], inputs: { index: "index", disabled: "disabled", performance: "performance", config: ["swiper", "config"] }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], features: [core["ɵɵNgOnChangesFeature"]()] });
        return SwiperDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SwiperDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[swiper]',
                    exportAs: 'ngxSwiper'
                }]
        }], function () { return [{ type: Object, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.NgZone }, { type: core.ElementRef }, { type: core.KeyValueDiffers }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [SWIPER_CONFIG]
                }] }]; }, { index: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], performance: [{
                type: core.Input
            }], config: [{
                type: core.Input,
                args: ['swiper']
            }], autoplay: [{
                type: core.Output
            }], autoplayStart: [{
                type: core.Output
            }], autoplayStop: [{
                type: core.Output
            }], beforeDestroy: [{
                type: core.Output
            }], beforeResize: [{
                type: core.Output
            }], breakpoint: [{
                type: core.Output
            }], click: [{
                type: core.Output
            }], doubleTap: [{
                type: core.Output
            }], fromEdge: [{
                type: core.Output
            }], imagesReady: [{
                type: core.Output
            }], indexChange: [{
                type: core.Output
            }], init: [{
                type: core.Output
            }], keyPress: [{
                type: core.Output
            }], lazyImageLoad: [{
                type: core.Output
            }], lazyImageReady: [{
                type: core.Output
            }], progress: [{
                type: core.Output
            }], reachBeginning: [{
                type: core.Output
            }], reachEnd: [{
                type: core.Output
            }], resize: [{
                type: core.Output
            }], scroll: [{
                type: core.Output
            }], scrollDragEnd: [{
                type: core.Output
            }], scrollDragMove: [{
                type: core.Output
            }], scrollDragStart: [{
                type: core.Output
            }], setTransition: [{
                type: core.Output
            }], setTranslate: [{
                type: core.Output
            }], slideChange: [{
                type: core.Output
            }], slideChangeTransitionEnd: [{
                type: core.Output
            }], slideChangeTransitionStart: [{
                type: core.Output
            }], slideNextTransitionEnd: [{
                type: core.Output
            }], slideNextTransitionStart: [{
                type: core.Output
            }], slidePrevTransitionEnd: [{
                type: core.Output
            }], slidePrevTransitionStart: [{
                type: core.Output
            }], sliderMove: [{
                type: core.Output
            }], tap: [{
                type: core.Output
            }], touchEnd: [{
                type: core.Output
            }], touchMove: [{
                type: core.Output
            }], touchMoveOpposite: [{
                type: core.Output
            }], touchStart: [{
                type: core.Output
            }], transitionEnd: [{
                type: core.Output
            }], transitionStart: [{
                type: core.Output
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
            this.autoplay = new core.EventEmitter();
            this.autoplayStart = new core.EventEmitter();
            this.autoplayStop = new core.EventEmitter();
            this.beforeDestroy = new core.EventEmitter();
            this.beforeResize = new core.EventEmitter();
            this.breakpoint = new core.EventEmitter();
            this.click = new core.EventEmitter();
            this.doubleTap = new core.EventEmitter();
            this.fromEdge = new core.EventEmitter();
            this.imagesReady = new core.EventEmitter();
            this.indexChange = new core.EventEmitter();
            this.init = new core.EventEmitter();
            this.keyPress = new core.EventEmitter();
            this.lazyImageLoad = new core.EventEmitter();
            this.lazyImageReady = new core.EventEmitter();
            this.progress = new core.EventEmitter();
            this.reachBeginning = new core.EventEmitter();
            this.reachEnd = new core.EventEmitter();
            this.resize = new core.EventEmitter();
            this.scroll = new core.EventEmitter();
            this.scrollDragEnd = new core.EventEmitter();
            this.scrollDragMove = new core.EventEmitter();
            this.scrollDragStart = new core.EventEmitter();
            this.setTransition = new core.EventEmitter();
            this.setTranslate = new core.EventEmitter();
            this.slideChange = new core.EventEmitter();
            this.slideChangeTransitionEnd = new core.EventEmitter();
            this.slideChangeTransitionStart = new core.EventEmitter();
            this.slideNextTransitionEnd = new core.EventEmitter();
            this.slideNextTransitionStart = new core.EventEmitter();
            this.slidePrevTransitionEnd = new core.EventEmitter();
            this.slidePrevTransitionStart = new core.EventEmitter();
            this.sliderMove = new core.EventEmitter();
            this.tap = new core.EventEmitter();
            this.touchEnd = new core.EventEmitter();
            this.touchMove = new core.EventEmitter();
            this.touchMoveOpposite = new core.EventEmitter();
            this.touchStart = new core.EventEmitter();
            this.transitionEnd = new core.EventEmitter();
            this.transitionStart = new core.EventEmitter();
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
            if (!common.isPlatformBrowser(this.platformId)) {
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
        SwiperComponent.ɵfac = function SwiperComponent_Factory(t) { return new (t || SwiperComponent)(core["ɵɵdirectiveInject"](core.NgZone), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](SWIPER_CONFIG, 8)); };
        SwiperComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SwiperComponent, selectors: [["swiper"]], viewQuery: function SwiperComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true);
                core["ɵɵstaticViewQuery"](SwiperDirective, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.swiperSlides = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
            } }, inputs: { index: "index", disabled: "disabled", performance: "performance", config: "config", useSwiperClass: "useSwiperClass" }, outputs: { autoplay: "autoplay", autoplayStart: "autoplayStart", autoplayStop: "autoplayStop", beforeDestroy: "beforeDestroy", beforeResize: "beforeResize", breakpoint: "breakpoint", click: "click", doubleTap: "doubleTap", fromEdge: "fromEdge", imagesReady: "imagesReady", indexChange: "indexChange", init: "init", keyPress: "keyPress", lazyImageLoad: "lazyImageLoad", lazyImageReady: "lazyImageReady", progress: "progress", reachBeginning: "reachBeginning", reachEnd: "reachEnd", resize: "resize", scroll: "scroll", scrollDragEnd: "scrollDragEnd", scrollDragMove: "scrollDragMove", scrollDragStart: "scrollDragStart", setTransition: "setTransition", setTranslate: "setTranslate", slideChange: "slideChange", slideChangeTransitionEnd: "slideChangeTransitionEnd", slideChangeTransitionStart: "slideChangeTransitionStart", slideNextTransitionEnd: "slideNextTransitionEnd", slideNextTransitionStart: "slideNextTransitionStart", slidePrevTransitionEnd: "slidePrevTransitionEnd", slidePrevTransitionStart: "slidePrevTransitionStart", sliderMove: "sliderMove", tap: "tap", touchEnd: "touchEnd", touchMove: "touchMove", touchMoveOpposite: "touchMoveOpposite", touchStart: "touchStart", transitionEnd: "transitionEnd", transitionStart: "transitionStart" }, exportAs: ["ngxSwiper"], ngContentSelectors: _c1, decls: 9, vars: 14, consts: [[1, "s-wrapper", 3, "swiper", "index", "disabled", "performance"], ["swiper", ""], [1, "swiper-wrapper"], ["swiperSlides", ""], [1, "swiper-scrollbar", 3, "hidden"], [1, "swiper-button-prev", 3, "hidden"], [1, "swiper-button-next", 3, "hidden"], [1, "swiper-pagination", 3, "hidden", "click", "keyup.enter"]], template: function SwiperComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "div", 0, 1);
                core["ɵɵelementStart"](2, "div", 2, 3);
                core["ɵɵprojection"](4);
                core["ɵɵelementEnd"]();
                core["ɵɵelement"](5, "div", 4);
                core["ɵɵelement"](6, "div", 5);
                core["ɵɵelement"](7, "div", 6);
                core["ɵɵelementStart"](8, "div", 7);
                core["ɵɵlistener"]("click", function SwiperComponent_Template_div_click_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); })("keyup.enter", function SwiperComponent_Template_div_keyup_enter_8_listener($event) { return ctx.onPaginationClick($event.target.getAttribute("index")); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵclassProp"]("swiper", ctx.useSwiperClass)("swiper-container", ctx.useSwiperClass);
                core["ɵɵproperty"]("swiper", ctx.getConfig())("index", ctx.index)("disabled", ctx.disabled)("performance", ctx.performance);
                core["ɵɵadvance"](5);
                core["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.scrollbar == null ? null : ctx.swiperConfig.scrollbar.el) !== ".swiper-scrollbar");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.prevEl) !== ".swiper-button-prev");
                core["ɵɵattribute"]("disabled", ctx.isAtFirst || null);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.navigation == null ? null : ctx.swiperConfig.navigation.nextEl) !== ".swiper-button-next");
                core["ɵɵattribute"]("disabled", ctx.isAtLast || null);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hidden", !(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) || (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination) !== true && !!(ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) && (ctx.swiperConfig == null ? null : ctx.swiperConfig.pagination == null ? null : ctx.swiperConfig.pagination.el) !== ".swiper-pagination");
            } }, directives: [SwiperDirective], encapsulation: 2 });
        return SwiperComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SwiperComponent, [{
            type: core.Component,
            args: [{
                    selector: 'swiper',
                    exportAs: 'ngxSwiper',
                    templateUrl: 'swiper.component.html',
                    // styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
                    encapsulation: core.ViewEncapsulation.None
                }]
        }], function () { return [{ type: core.NgZone }, { type: core.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [SWIPER_CONFIG]
                }] }]; }, { swiperSlides: [{
                type: core.ViewChild,
                args: ['swiperSlides', { static: true }]
            }], directiveRef: [{
                type: core.ViewChild,
                args: [SwiperDirective, { static: true }]
            }], index: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], performance: [{
                type: core.Input
            }], config: [{
                type: core.Input
            }], useSwiperClass: [{
                type: core.Input
            }], autoplay: [{
                type: core.Output
            }], autoplayStart: [{
                type: core.Output
            }], autoplayStop: [{
                type: core.Output
            }], beforeDestroy: [{
                type: core.Output
            }], beforeResize: [{
                type: core.Output
            }], breakpoint: [{
                type: core.Output
            }], click: [{
                type: core.Output
            }], doubleTap: [{
                type: core.Output
            }], fromEdge: [{
                type: core.Output
            }], imagesReady: [{
                type: core.Output
            }], indexChange: [{
                type: core.Output
            }], init: [{
                type: core.Output
            }], keyPress: [{
                type: core.Output
            }], lazyImageLoad: [{
                type: core.Output
            }], lazyImageReady: [{
                type: core.Output
            }], progress: [{
                type: core.Output
            }], reachBeginning: [{
                type: core.Output
            }], reachEnd: [{
                type: core.Output
            }], resize: [{
                type: core.Output
            }], scroll: [{
                type: core.Output
            }], scrollDragEnd: [{
                type: core.Output
            }], scrollDragMove: [{
                type: core.Output
            }], scrollDragStart: [{
                type: core.Output
            }], setTransition: [{
                type: core.Output
            }], setTranslate: [{
                type: core.Output
            }], slideChange: [{
                type: core.Output
            }], slideChangeTransitionEnd: [{
                type: core.Output
            }], slideChangeTransitionStart: [{
                type: core.Output
            }], slideNextTransitionEnd: [{
                type: core.Output
            }], slideNextTransitionStart: [{
                type: core.Output
            }], slidePrevTransitionEnd: [{
                type: core.Output
            }], slidePrevTransitionStart: [{
                type: core.Output
            }], sliderMove: [{
                type: core.Output
            }], tap: [{
                type: core.Output
            }], touchEnd: [{
                type: core.Output
            }], touchMove: [{
                type: core.Output
            }], touchMoveOpposite: [{
                type: core.Output
            }], touchStart: [{
                type: core.Output
            }], transitionEnd: [{
                type: core.Output
            }], transitionStart: [{
                type: core.Output
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
            if (common.isPlatformBrowser(this.platformId)) {
                if (this.Trustpilot) {
                    return rxjs.of(this.Trustpilot);
                }
                else if (this.Trustpilot$) {
                    return this.Trustpilot$;
                }
                else {
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
        TrustPilotService.ɵfac = function TrustPilotService_Factory(t) { return new (t || TrustPilotService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](PluginsService), core["ɵɵinject"](core$1.OnceService)); };
        TrustPilotService.ɵprov = core["ɵɵdefineInjectable"]({ token: TrustPilotService, factory: TrustPilotService.ɵfac, providedIn: 'root' });
        return TrustPilotService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TrustPilotService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core$1.OnceService }]; }, null); })();

    function TrustPilotWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 2);
        core["ɵɵelementStart"](2, "div", 3);
        core["ɵɵelementStart"](3, "a", 4);
        core["ɵɵtext"](4, "Trustpilot");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r11 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵattribute"]("data-template-id", ctx_r11.options.templateId)("data-businessunit-id", ctx_r11.options.businessunitId)("data-locale", ctx_r11.options.locale)("data-style-height", ctx_r11.options.styleHeight)("data-style-width", ctx_r11.options.styleWidth)("data-theme", ctx_r11.options.theme)("data-sku", ctx_r11.sku);
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate1"]("href", "https://it.trustpilot.com/review/", ctx_r11.options.businessunitName, "", core["ɵɵsanitizeUrl"]);
    } }
    function TrustPilotWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 3);
        core["ɵɵelementStart"](2, "a", 4);
        core["ɵɵtext"](3, "Trustpilot");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r12 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("data-template-id", ctx_r12.options.templateId)("data-businessunit-id", ctx_r12.options.businessunitId)("data-locale", ctx_r12.options.locale)("data-style-height", ctx_r12.options.styleHeight)("data-style-width", ctx_r12.options.styleWidth)("data-theme", ctx_r12.options.theme)("data-group", ctx_r12.options.group);
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate1"]("href", "https://it.trustpilot.com/review/", ctx_r12.options.businessunitName, "", core["ɵɵsanitizeUrl"]);
    } }
    function TrustPilotWidgetComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 5);
        core["ɵɵelementStart"](2, "a", 4);
        core["ɵɵtext"](3, "Trustpilot");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r13 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("data-template-id", ctx_r13.options.templateId)("data-businessunit-id", ctx_r13.options.businessunitId)("data-locale", ctx_r13.options.locale)("data-style-height", ctx_r13.options.styleHeight)("data-style-width", ctx_r13.options.styleWidth)("data-theme", ctx_r13.options.theme);
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate1"]("href", "https://it.trustpilot.com/review/", ctx_r13.options.businessunitName, "", core["ɵɵsanitizeUrl"]);
    } }
    function TrustPilotWidgetComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 5);
        core["ɵɵelementStart"](2, "a", 4);
        core["ɵɵtext"](3, "Trustpilot");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r14 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("data-template-id", ctx_r14.options.templateId)("data-businessunit-id", ctx_r14.options.businessunitId)("data-locale", ctx_r14.options.locale)("data-style-height", ctx_r14.options.styleHeight)("data-style-width", ctx_r14.options.styleWidth)("data-theme", ctx_r14.options.theme);
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate1"]("href", "https://it.trustpilot.com/review/", ctx_r14.options.businessunitName, "", core["ɵɵsanitizeUrl"]);
    } }
    function TrustPilotWidgetComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelementStart"](1, "div", 6);
        core["ɵɵelementStart"](2, "a", 4);
        core["ɵɵtext"](3, "Trustpilot");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r15 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("data-template-id", ctx_r15.options.templateId)("data-businessunit-id", ctx_r15.options.businessunitId)("data-locale", ctx_r15.options.locale)("data-style-height", ctx_r15.options.styleHeight)("data-style-width", ctx_r15.options.styleWidth)("data-theme", ctx_r15.options.theme)("data-stars", ctx_r15.options.stars);
        core["ɵɵadvance"](1);
        core["ɵɵpropertyInterpolate1"]("href", "https://it.trustpilot.com/review/", ctx_r15.options.businessunitName, "", core["ɵɵsanitizeUrl"]);
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
            if (common.isPlatformBrowser(this.platformId) && this.elementRef.nativeElement.children.length) { // && environment.production
                if (!this.loaded) {
                    this.trustPilot.once().pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (Trustpilot) {
                        Trustpilot.loadFromElement(_this.elementRef.nativeElement.firstElementChild);
                        _this.loaded = true;
                    });
                }
            }
        };
        TrustPilotWidgetComponent.ɵfac = function TrustPilotWidgetComponent_Factory(t) { return new (t || TrustPilotWidgetComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID), core["ɵɵdirectiveInject"](PluginsService), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](TrustPilotService)); };
        TrustPilotWidgetComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TrustPilotWidgetComponent, selectors: [["plugins-trustpilot-widget-component"]], inputs: { options: "options", sku: "sku" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "trustpilot-comments"], [1, "trustpilot-widget", 2, "margin", "30px 0", "max-width", "750px"], ["target", "_blank", 3, "href"], [1, "trustpilot-widget", 2, "margin", "15px auto", "max-width", "750px"], [1, "trustpilot-widget", 2, "margin", "15px auto"]], template: function TrustPilotWidgetComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0);
                core["ɵɵelementContainerStart"](1, 0);
                core["ɵɵtemplate"](2, TrustPilotWidgetComponent_ng_container_2_Template, 5, 8, "ng-container", 1);
                core["ɵɵtemplate"](3, TrustPilotWidgetComponent_ng_container_3_Template, 4, 8, "ng-container", 1);
                core["ɵɵtemplate"](4, TrustPilotWidgetComponent_ng_container_4_Template, 4, 7, "ng-container", 1);
                core["ɵɵtemplate"](5, TrustPilotWidgetComponent_ng_container_5_Template, 4, 7, "ng-container", 1);
                core["ɵɵtemplate"](6, TrustPilotWidgetComponent_ng_container_6_Template, 4, 8, "ng-container", 1);
                core["ɵɵelementContainerEnd"]();
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitch", ctx.options.templateId);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "544a426205dc0a09088833c6");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "530d0eaf748a510e2093cf9b");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "53aa8807dec7e10d38f59f32");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "5613c9cde69ddc09340c6beb");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "53aa8912dec7e10d38f59f36");
            } }, directives: [common.NgSwitch, common.NgSwitchCase], styles: ["[_nghost-%COMP%]{width:100%}.trustpilot-widget[_ngcontent-%COMP%]{margin:15px auto!important}@media print{.trustpilot-comments[_ngcontent-%COMP%]{display:none!important}}"] });
        return TrustPilotWidgetComponent;
    }(core$1.DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TrustPilotWidgetComponent, [{
            type: core.Component,
            args: [{
                    selector: 'plugins-trustpilot-widget-component',
                    templateUrl: './trustpilot-widget.component.html',
                    styleUrls: ['./trustpilot-widget.component.scss'],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: PluginsService }, { type: core.ElementRef }, { type: TrustPilotService }]; }, { options: [{
                type: core.Input
            }], sku: [{
                type: core.Input
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
        PluginsModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PluginsModule });
        PluginsModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PluginsModule_Factory(t) { return new (t || PluginsModule)(core["ɵɵinject"](PluginsModule, 12)); }, providers: __spread(services), imports: [[
                    common.CommonModule,
                    core$1.CoreModule,
                ],
                core$1.CoreModule] });
        return PluginsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PluginsModule, { declarations: [PluginsModuleComponent,
            GoogleTagManagerComponent,
            PayPalWidgetComponent,
            TrustPilotWidgetComponent,
            SwiperComponent,
            SwiperDirective], imports: [common.CommonModule,
            core$1.CoreModule], exports: [core$1.CoreModule,
            PluginsModuleComponent,
            GoogleTagManagerComponent,
            PayPalWidgetComponent,
            TrustPilotWidgetComponent,
            SwiperComponent,
            SwiperDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PluginsModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        core$1.CoreModule,
                    ],
                    providers: __spread(services),
                    declarations: __spread(components),
                    exports: __spread([
                        core$1.CoreModule
                    ], components),
                }]
        }], function () { return [{ type: PluginsModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.FacebookAuthResponse = FacebookAuthResponse;
    exports.FacebookConfig = FacebookConfig;
    exports.FacebookPicture = FacebookPicture;
    exports.FacebookPictureData = FacebookPictureData;
    exports.FacebookService = FacebookService;
    exports.FacebookUser = FacebookUser;
    exports.GoogleAuthResponse = GoogleAuthResponse;
    exports.GoogleConfig = GoogleConfig;
    exports.GoogleService = GoogleService;
    exports.GoogleTagManagerComponent = GoogleTagManagerComponent;
    exports.GoogleTagManagerPageViewEvent = GoogleTagManagerPageViewEvent;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.GoogleUser = GoogleUser;
    exports.MapboxService = MapboxService;
    exports.PLUGINS_CONFIG = PLUGINS_CONFIG;
    exports.PayPalService = PayPalService;
    exports.PayPalWidgetComponent = PayPalWidgetComponent;
    exports.PluginsConfig = PluginsConfig;
    exports.PluginsModule = PluginsModule;
    exports.PluginsModuleComponent = PluginsModuleComponent;
    exports.PluginsService = PluginsService;
    exports.SWIPER_CONFIG = SWIPER_CONFIG;
    exports.SwiperComponent = SwiperComponent;
    exports.SwiperConfig = SwiperConfig;
    exports.SwiperDirective = SwiperDirective;
    exports.SwiperEvents = SwiperEvents;
    exports.TrustPilotService = TrustPilotService;
    exports.TrustPilotWidgetComponent = TrustPilotWidgetComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-plugins.umd.js.map
