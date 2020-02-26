(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/router'), require('json-formatter-js'), require('util')) :
    typeof define === 'function' && define.amd ? define('@designr/core', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/router', 'json-formatter-js', 'util'], factory) :
    (global = global || self, factory((global.designr = global.designr || {}, global.designr.core = {}), global.ng.common, global.ng.common.http, global.ng.core, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.router, global.JSONFormatter, global.util));
}(this, (function (exports, common, http, core, platformBrowser, rxjs, operators, forms, router, JSONFormatter, util) { 'use strict';

    JSONFormatter = JSONFormatter && JSONFormatter.hasOwnProperty('default') ? JSONFormatter['default'] : JSONFormatter;

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

    (function (AuthStrategy) {
        AuthStrategy[AuthStrategy["Bearer"] = 0] = "Bearer";
        AuthStrategy[AuthStrategy["Cookie"] = 1] = "Cookie";
    })(exports.AuthStrategy || (exports.AuthStrategy = {}));
    var AuthToken = /** @class */ (function () {
        function AuthToken(accessToken, expiresIn) {
            if (expiresIn === void 0) { expiresIn = 0; }
            this.accessToken = accessToken;
            this.expiresIn = expiresIn;
        }
        return AuthToken;
    }());


    (function (LoggerErrorStrategy) {
        LoggerErrorStrategy[LoggerErrorStrategy["Informational"] = 100] = "Informational";
        LoggerErrorStrategy[LoggerErrorStrategy["Success"] = 200] = "Success";
        LoggerErrorStrategy[LoggerErrorStrategy["Redirect"] = 300] = "Redirect";
        LoggerErrorStrategy[LoggerErrorStrategy["Client"] = 400] = "Client";
        LoggerErrorStrategy[LoggerErrorStrategy["Server"] = 500] = "Server";
        LoggerErrorStrategy[LoggerErrorStrategy["None"] = 999] = "None";
    })(exports.LoggerErrorStrategy || (exports.LoggerErrorStrategy = {}));
    var LoggerError = /** @class */ (function (_super) {
        __extends(LoggerError, _super);
        function LoggerError(response) {
            return _super.call(this, {
                error: response instanceof http.HttpErrorResponse ? response.error : response.statusText,
                headers: response.headers,
                status: response.status,
                statusText: response.statusText,
                url: response.url,
            }) || this;
        }
        Object.defineProperty(LoggerError.prototype, "statusType", {
            get: function () {
                var _this = this;
                return Object.keys(exports.LoggerErrorStrategy).reduce(function (type, key) {
                    if (_this.status >= exports.LoggerErrorStrategy[key]) {
                        type = key.toLowerCase();
                    }
                    return type;
                }, null);
            },
            enumerable: true,
            configurable: true
        });
        return LoggerError;
    }(http.HttpErrorResponse));

    var Language = /** @class */ (function () {
        function Language() {
        }
        return Language;
    }());
    var CoreTransitionConfig = /** @class */ (function () {
        function CoreTransitionConfig(options) {
            // console.log('CoreTransitionConfig', options);
            if (options) {
                Object.assign(this, options);
            }
        }
        return CoreTransitionConfig;
    }());
    var CoreConfig = /** @class */ (function () {
        function CoreConfig(options) {
            this.assets = '';
            this.authStrategy = exports.AuthStrategy.Cookie;
            this.defaultLanguage = 'it';
            this.defaultMarket = 'it';
            this.loggerErrorStrategy = exports.LoggerErrorStrategy.Server;
            this.languages = [{ id: 1, name: 'Italiano', lang: 'it' }];
            this.origin = '';
            this.production = false;
            this.public = '';
            this.urlStrategy = '';
            this.useLang = false;
            this.useMarket = false;
            // console.log('CoreConfig', options);
            if (options) {
                Object.assign(this, options);
                this.transition = new CoreTransitionConfig(options.transition);
            }
            else {
                this.transition = new CoreTransitionConfig();
            }
        }
        return CoreConfig;
    }());
    var CORE_CONFIG = new core.InjectionToken('core.config');

    var CoreService = /** @class */ (function () {
        function CoreService(options) {
            // console.log('CoreService', options);
            options = options || {};
            // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
            // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
            this.options = new CoreConfig(options);
        }
        CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(core["ɵɵinject"](CORE_CONFIG)); };
        CoreService.ɵprov = core["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
        return CoreService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: [CORE_CONFIG]
                }] }]; }, null); })();

    var Logger = /** @class */ (function () {
        function Logger(coreService) {
            this.coreService = coreService;
            this.logs = [];
            //
        }
        Logger.prototype.request = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.coreService.options.production) {
                var s = args.join(', ');
                this.logs.push(s);
                // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
            }
        };
        Logger.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.coreService.options.production) {
                var s = args.join(', ');
                this.logs.push(s);
                console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
            }
        };
        Logger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.coreService.options.production) {
                var s = args.join(', ');
                this.logs.push(s);
                console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
            }
        };
        Logger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.coreService.options.production) {
                var s = args.join(', ');
                this.logs.push(s);
                console.error.apply(console, args);
            }
        };
        Logger.prototype.http = function (response) {
            this.httpError = new LoggerError(response);
            if (!this.coreService.options.production) {
                this.logs.push(this.httpError.message);
            }
            console.warn('Logger.http.response', response.status, response.statusText, response.url);
        };
        Logger.prototype.clear = function () {
            this.httpError = null;
            this.logs = [];
        };
        Logger.ɵfac = function Logger_Factory(t) { return new (t || Logger)(core["ɵɵinject"](CoreService)); };
        Logger.ɵprov = core["ɵɵdefineInjectable"]({ token: Logger, factory: Logger.ɵfac, providedIn: 'root' });
        return Logger;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Logger, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: CoreService }]; }, null); })();

    var ApiRequestOptions = /** @class */ (function () {
        function ApiRequestOptions(params) {
            this.headers = new http.HttpHeaders({
                'Content-Type': 'application/json'
            });
            this.params = params;
        }
        return ApiRequestOptions;
    }());
    var ApiService = /** @class */ (function () {
        function ApiService(injector) {
            this.injector = injector;
        }
        Object.defineProperty(ApiService.prototype, "collection", {
            get: function () {
                return '/api';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "logger", {
            get: function () {
                if (!this._logger) {
                    this._logger = this.injector.get(Logger);
                }
                return this._logger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "http", {
            get: function () {
                if (!this._http) {
                    this._http = this.injector.get(http.HttpClient);
                }
                return this._http;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "state", {
            get: function () {
                if (!this._state) {
                    this._state = this.injector.get(platformBrowser.TransferState);
                }
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "platformId", {
            get: function () {
                if (!this._platformId) {
                    this._platformId = this.injector.get(core.PLATFORM_ID);
                }
                return this._platformId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "config", {
            get: function () {
                if (!this._config) {
                    this._config = this.injector.get(CoreService).options;
                }
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "origin", {
            get: function () {
                if (!this._origin) {
                    this._origin = this.config.origin;
                }
                return this._origin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "url", {
            get: function () {
                var base = this.origin;
                var collection = this.collection.toLowerCase();
                if (collection.indexOf('http') === 0) {
                    base = '';
                }
                return "" + base + collection;
            },
            enumerable: true,
            configurable: true
        });
        ApiService.prototype.getUrl = function (method) {
            if (method === void 0) { method = ''; }
            return "" + this.url + method;
        };
        ApiService.prototype.get = function (first, second) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var params = (typeof first === 'object' ? first : second);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            return this.http.get(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
        };
        ApiService.prototype.post = function (first, second, third) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var model = (typeof first === 'object' ? first : second);
            var params = (typeof second === 'object' ? second : third);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            return this.http.post(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
        };
        ApiService.prototype.put = function (first, second, third) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var model = (typeof first === 'object' ? first : second);
            var params = (typeof second === 'object' ? second : third);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            return this.http.put(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
        };
        ApiService.prototype.patch = function (first, second, third) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var model = (typeof first === 'object' ? first : second);
            var params = (typeof second === 'object' ? second : third);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            return this.http.patch(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
        };
        ApiService.prototype.delete = function (first, second, third) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var identity = (typeof first !== 'string' ? first : second);
            var id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
            var params = (typeof second === 'object' ? second : third);
            var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
            var options = new ApiRequestOptions(params);
            return this.http.delete(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
        };
        ApiService.prototype.toCamelCase = function (input) {
            var _this = this;
            var output, key, keyCamelCase, value;
            if (input instanceof Array) {
                return input.map(function (value) {
                    if (typeof value === 'object') {
                        value = _this.toCamelCase(value);
                    }
                    return value;
                });
            }
            else {
                output = {};
                for (key in input) {
                    if (input.hasOwnProperty(key)) {
                        keyCamelCase = (key.charAt(0).toLowerCase() + key.slice(1) || key).toString();
                        value = input[key];
                        if (value instanceof Array || (value !== null && value.constructor === Object)) {
                            value = this.toCamelCase(value);
                        }
                        output[keyCamelCase] = value;
                    }
                }
            }
            return output;
        };
        // TRANSFER STATE
        ApiService.prototype.getStateKey = function (url, model) {
            var flatMap = function (s, x) {
                if (typeof x === 'number') {
                    s += x.toString();
                }
                else if (typeof x === 'string') {
                    s += x.substr(0, 10);
                }
                else if (x && typeof x === 'object') {
                    s += '_' + Object.keys(x).map(function (k) { return k + '_' + flatMap('', x[k]); }).join('_');
                }
                return s;
            };
            url = flatMap(url, model);
            // console.log('ApiService.getStateKey.url', url);
            var key = url.replace(/(\W)/gm, '_');
            // this.logger.log('ApiService.getStateKey.key', key);
            return platformBrowser.makeStateKey(key);
        };
        ApiService.prototype.stateGet = function (first, second) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var params = (typeof first === 'object' ? first : second);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            var stateKey = this.getStateKey(url, params);
            if (common.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                var cached = this.state.get(stateKey, null);
                this.state.remove(stateKey);
                return rxjs.of(cached);
            }
            else {
                return this.http.get(url, options).pipe(operators.tap(function (x) {
                    if (common.isPlatformServer(_this.platformId)) {
                        _this.state.onSerialize(stateKey, function () { return x; });
                    }
                }));
            }
        };
        ApiService.prototype.statePost = function (first, second, third) {
            var _this = this;
            var method = (typeof first === 'string' ? first : '');
            var model = (typeof first === 'object' ? first : second);
            var params = (typeof second === 'object' ? second : third);
            var url = this.getUrl(method);
            var options = new ApiRequestOptions(params);
            var stateKey = this.getStateKey(url, model);
            if (common.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                var cached = this.state.get(stateKey, null);
                this.state.remove(stateKey);
                return rxjs.of(cached);
            }
            else {
                return this.http.post(url, model, options).pipe(operators.tap(function (x) {
                    if (common.isPlatformServer(_this.platformId)) {
                        _this.state.onSerialize(stateKey, function () { return x; });
                    }
                }));
            }
        };
        ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(core["ɵɵinject"](core.Injector)); };
        ApiService.ɵprov = core["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
        return ApiService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ApiService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var TIMEOUT = 5 * 60 * 1000; // five minutes
    /*
    export class StorageEvent extends Event {}

    export class CookieStorageEvent extends StorageEvent { }

    export class SessionStorageEvent extends StorageEvent { }

    export class LocalStorageEvent extends StorageEvent { }
    */
    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        StorageService.prototype.delete = function (name) { };
        StorageService.prototype.exist = function (name) { return false; };
        StorageService.prototype.get = function (name) { return null; };
        StorageService.prototype.set = function (name, value, days) { };
        StorageService.prototype.on = function () { return rxjs.of(null); };
        StorageService.prototype.tryGet = function () {
            // console.log('no StorageService available...');
            return this;
        };
        StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
        StorageService.ɵprov = core["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
        return StorageService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](StorageService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();
    var CookieStorageService = /** @class */ (function () {
        function CookieStorageService(platformId, storageService) {
            this.platformId = platformId;
            this.storageService = storageService;
        }
        CookieStorageService.prototype.tryGet = function () {
            if (this.isSupported()) {
                // console.log('CookieStorageService.supported');
                return this;
            }
            else {
                return this.storageService.tryGet();
            }
        };
        CookieStorageService.prototype.delete = function (name) {
            this.setter(name, '', -1);
        };
        CookieStorageService.prototype.exist = function (name) {
            return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
        };
        CookieStorageService.prototype.get = function (name) {
            var cookieName = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(cookieName) === 0) {
                    var value = c.substring(cookieName.length, c.length);
                    var model = null;
                    try {
                        model = JSON.parse(decodeURIComponent(atob(value)));
                    }
                    catch (e) {
                        console.log('Cookie.get.error parsing', name, e);
                    }
                    return model;
                }
            }
            return null;
        };
        CookieStorageService.prototype.set = function (name, value, days) {
            try {
                var cache_1 = [];
                var json = JSON.stringify(value, function (key, value) {
                    if (key === 'pool') {
                        return;
                    }
                    if (typeof value === 'object' && value !== null) {
                        if (cache_1.indexOf(value) !== -1) {
                            // throw (new Error('circular reference found, discard key'));
                            return;
                        }
                        cache_1.push(value);
                    }
                    return value;
                });
                cache_1 = null;
                this.setter(name, btoa(encodeURIComponent(json)), days);
            }
            catch (e) {
                console.log('CookieSet.error serializing', name, value, e);
            }
        };
        CookieStorageService.prototype.on = function () {
            // todo
            var interval = 1000, timeout = TIMEOUT;
            var i, elapsed = 0;
            function checkCookie() {
                if (elapsed > timeout) {
                    // promise.reject('timeout');
                }
                else {
                    var c = this.get(name);
                    if (c) {
                        // promise.resolve(c);
                    }
                    else {
                        elapsed += interval;
                        i = setTimeout(checkCookie, interval);
                    }
                }
            }
            checkCookie();
            return rxjs.of(null);
        };
        CookieStorageService.prototype.setter = function (name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }
            else {
                expires = '';
            }
            document.cookie = name + '=' + value + expires + '; path=/';
        };
        CookieStorageService.prototype.isSupported = function () {
            return common.isPlatformBrowser(this.platformId);
        };
        CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](StorageService)); };
        CookieStorageService.ɵprov = core["ɵɵdefineInjectable"]({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
        return CookieStorageService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CookieStorageService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: StorageService }]; }, null); })();
    var SessionStorageService = /** @class */ (function () {
        function SessionStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        SessionStorageService.prototype.tryGet = function () {
            if (this.isSupported()) {
                // console.log('SessionStorageService.supported');
                return this;
            }
            else {
                return this.cookieStorageService.tryGet();
            }
        };
        SessionStorageService.prototype.delete = function (name) {
            window.sessionStorage.removeItem(name);
        };
        SessionStorageService.prototype.exist = function (name) {
            return window.sessionStorage[name] !== undefined;
        };
        SessionStorageService.prototype.get = function (name) {
            var value = null;
            if (window.sessionStorage[name] !== undefined) {
                try {
                    value = JSON.parse(window.sessionStorage[name]);
                }
                catch (e) {
                    console.log('SessionStorage.get.error parsing', name, e);
                }
            }
            return value;
        };
        SessionStorageService.prototype.on = function () {
            /*
            return $promise(function (promise) {
                const timeout = TIMEOUT;
                let i;
                function storageEvent(e) {
                    if (i) {
                        clearTimeout(i);
                    }
                    if (e.originalEvent.key === name) {
                        try {
                            let value = JSON.parse(e.originalEvent.newValue);
                            promise.resolve(value);
                        } catch (error) {
                            console.log('SessionStorage.on.error parsing', name, error);
                            promise.reject('error parsing ' + name);
                        }
                    }
                }
                // return fromEvent(window, 'storage');
                angular.element(window).on('storage', storageEvent);
                i = setTimeout(function () {
                    promise.reject('timeout');
                }, timeout);
            });
            */
            return rxjs.of(null);
        };
        SessionStorageService.prototype.set = function (name, value, days) {
            try {
                var cache_2 = [];
                var json = JSON.stringify(value, function (key, value) {
                    if (key === 'pool') {
                        return;
                    }
                    if (typeof value === 'object' && value !== null) {
                        if (cache_2.indexOf(value) !== -1) {
                            // throw (new Error('circular reference found, discard key'));
                            return;
                        }
                        cache_2.push(value);
                    }
                    return value;
                });
                cache_2 = null;
                window.sessionStorage.setItem(name, json);
            }
            catch (e) {
                console.log('SessionStorage.set.error serializing', name, value, e);
            }
        };
        SessionStorageService.prototype.isSupported = function () {
            var supported = false;
            if (common.isPlatformBrowser(this.platformId)) {
                try {
                    supported = 'sessionStorage' in window && window.sessionStorage !== null;
                    if (supported) {
                        window.sessionStorage.setItem('test', '1');
                        window.sessionStorage.removeItem('test');
                    }
                    else {
                        supported = false;
                    }
                }
                catch (e) {
                    supported = false;
                }
            }
            return supported;
        };
        SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](CookieStorageService)); };
        SessionStorageService.ɵprov = core["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
        return SessionStorageService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SessionStorageService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: CookieStorageService }]; }, null); })();
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        LocalStorageService.prototype.tryGet = function () {
            if (this.isSupported()) {
                // console.log('LocalStorageService.supported');
                return this;
            }
            else {
                return this.cookieStorageService.tryGet();
            }
        };
        LocalStorageService.prototype.delete = function (name) {
            window.localStorage.removeItem(name);
        };
        LocalStorageService.prototype.exist = function (name) {
            return window.localStorage[name] !== undefined;
        };
        LocalStorageService.prototype.get = function (name) {
            var value = null;
            if (window.localStorage[name] !== undefined) {
                try {
                    value = JSON.parse(window.localStorage[name]);
                }
                catch (e) {
                    console.log('LocalStorage.get.error parsing', name, e);
                }
            }
            return value;
        };
        LocalStorageService.prototype.on = function () {
            /*
            return $promise(function (promise) {
                const timeout = TIMEOUT;
                let i;
                function storageEvent(e) {
                    if (i) {
                        clearTimeout(i);
                    }
                    if (e.originalEvent.key === name) {
                        try {
                            let value = JSON.parse(e.originalEvent.newValue);
                            promise.resolve(value);
                        } catch (error) {
                            console.log('LocalStorage.on.error parsing', name, error);
                            promise.reject('error parsing ' + name);
                        }
                    }
                }
                // return fromEvent(window, 'storage');
                angular.element(window).on('storage', storageEvent);
                i = setTimeout(function () {
                    promise.reject('timeout');
                }, timeout);
            });
            */
            return rxjs.of(null);
        };
        LocalStorageService.prototype.set = function (name, value, days) {
            try {
                var cache_3 = [];
                var json = JSON.stringify(value, function (key, value) {
                    if (key === 'pool') {
                        return;
                    }
                    if (typeof value === 'object' && value !== null) {
                        if (cache_3.indexOf(value) !== -1) {
                            // throw (new Error('circular reference found, discard key'));
                            return;
                        }
                        cache_3.push(value);
                    }
                    return value;
                });
                cache_3 = null;
                window.localStorage.setItem(name, json);
            }
            catch (e) {
                console.log('LocalStorage.set.error serializing', name, value, e);
            }
        };
        LocalStorageService.prototype.isSupported = function () {
            var supported = false;
            if (common.isPlatformBrowser(this.platformId)) {
                try {
                    supported = 'localStorage' in window && window.localStorage !== null;
                    if (supported) {
                        window.localStorage.setItem('test', '1');
                        window.localStorage.removeItem('test');
                    }
                    else {
                        supported = false;
                    }
                }
                catch (e) {
                    supported = false;
                }
            }
            return supported;
        };
        LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](CookieStorageService)); };
        LocalStorageService.ɵprov = core["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
        return LocalStorageService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LocalStorageService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: CookieStorageService }]; }, null); })();

    var AuthService = /** @class */ (function () {
        function AuthService(platformId, injector, localStorageService) {
            this.platformId = platformId;
            this.injector = injector;
            this.localStorageService = localStorageService;
            this.cachedRequests = [];
            this.paths = [];
        }
        AuthService.prototype.setToken = function (authToken) {
            this.localStorageService.set('authToken', authToken);
            this.retryFailedRequests();
        };
        AuthService.prototype.getToken = function () {
            return this.localStorageService.get('authToken');
        };
        AuthService.prototype.getFakeToken = function () {
            return new AuthToken('fakeToken');
        };
        AuthService.prototype.isValid = function (authToken) {
            // return a boolean reflecting whether or not the token is expired
            return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
        };
        AuthService.prototype.isAuthenticated = function () {
            var authToken = this.getToken();
            return this.isValid(authToken);
        };
        AuthService.prototype.collectFailedRequest = function (request) {
            this.cachedRequests.push(request);
        };
        AuthService.prototype.retryFailedRequests = function () {
            // this method can be called after the token is refreshed
            // console.log('AuthService.retryFailedRequests');
            // retry the requests.
        };
        AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.Injector), core["ɵɵinject"](LocalStorageService)); };
        AuthService.ɵprov = core["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
        return AuthService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AuthService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.Injector }, { type: LocalStorageService }]; }, null); })();

    var BUNDLES = new core.InjectionToken('core.bundles');

    var BundleDirective = /** @class */ (function () {
        function BundleDirective(bundles, injector, loader, container) {
            this.bundles = bundles;
            this.injector = injector;
            this.loader = loader;
            this.container = container;
        }
        BundleDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.loader.load(this.bundles[this.bundle]).then(function (moduleFactory) {
                var moduleRef = moduleFactory.create(_this.injector);
                _this.moduleRef_ = moduleRef;
                var rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
                // console.log(rootComponentType);
                var factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
                var componentRef = _this.container.createComponent(factory);
                var instance = componentRef.instance;
                // instance.data = this.data; // !!!
                _this.componentRef_ = componentRef;
            });
        };
        BundleDirective.prototype.ngOnDestroy = function () {
            if (this.componentRef_) {
                this.componentRef_.destroy();
            }
            if (this.moduleRef_) {
                this.moduleRef_.destroy();
            }
        };
        BundleDirective.ɵfac = function BundleDirective_Factory(t) { return new (t || BundleDirective)(core["ɵɵdirectiveInject"](BUNDLES), core["ɵɵdirectiveInject"](core.Injector), core["ɵɵdirectiveInject"](core.NgModuleFactoryLoader), core["ɵɵdirectiveInject"](core.ViewContainerRef)); };
        BundleDirective.ɵdir = core["ɵɵdefineDirective"]({ type: BundleDirective, selectors: [["", "bundle", ""]], inputs: { bundle: "bundle", data: "data" } });
        return BundleDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BundleDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[bundle]'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [BUNDLES]
                }] }, { type: core.Injector }, { type: core.NgModuleFactoryLoader }, { type: core.ViewContainerRef }]; }, { bundle: [{
                type: core.Input
            }], data: [{
                type: core.Input
            }] }); })();

    var DefaultContentDirective = /** @class */ (function () {
        function DefaultContentDirective(element, container, renderer) {
            this.container = container;
            this.renderer = renderer;
            this.hasContent = true;
            this.element = element.nativeElement;
        }
        DefaultContentDirective.prototype.ngAfterContentChecked = function () {
            var hasContent = false;
            console.log('DefaultContentDirective', this.element.childNodes);
            for (var i = this.element.childNodes.length - 1; i >= 0; --i) {
                var node = this.element.childNodes[i];
                if (node.nodeType === 1 || node.nodeType === 3) {
                    hasContent = true;
                    break;
                }
            }
            if (hasContent !== this.hasContent) {
                this.hasContent = hasContent;
                if (hasContent) {
                    // this.renderer.removeClass(this.element, 'is-empty');
                    this.container.clear();
                }
                else {
                    // this.renderer.addClass(this.element, 'is-empty');
                    this.container.createEmbeddedView(this.default);
                }
            }
        };
        DefaultContentDirective.ɵfac = function DefaultContentDirective_Factory(t) { return new (t || DefaultContentDirective)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ViewContainerRef), core["ɵɵdirectiveInject"](core.Renderer2)); };
        DefaultContentDirective.ɵdir = core["ɵɵdefineDirective"]({ type: DefaultContentDirective, selectors: [["", "default", ""]], inputs: { default: "default" } });
        return DefaultContentDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultContentDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[default]',
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.ViewContainerRef }, { type: core.Renderer2 }]; }, { default: [{
                type: core.Input
            }] }); })();

    var CoreModuleComponent = /** @class */ (function () {
        function CoreModuleComponent() {
            this.version = '0.0.12';
        }
        CoreModuleComponent.prototype.ngOnInit = function () {
        };
        CoreModuleComponent.ɵfac = function CoreModuleComponent_Factory(t) { return new (t || CoreModuleComponent)(); };
        CoreModuleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CoreModuleComponent, selectors: [["core-module"]], decls: 2, vars: 1, consts: [[1, "core-module"]], template: function CoreModuleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"]("core ", ctx.version, "");
            } }, encapsulation: 2 });
        return CoreModuleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreModuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-module',
                    template: "<span class=\"core-module\">core {{version}}</span>",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var DisposableComponent = /** @class */ (function () {
        function DisposableComponent() {
            this.unsubscribe = new rxjs.Subject();
        }
        DisposableComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe.next();
            this.unsubscribe.complete();
            // console.log('DisposableComponent.ngOnDestroy', this);
        };
        DisposableComponent.ɵfac = function DisposableComponent_Factory(t) { return new (t || DisposableComponent)(); };
        DisposableComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DisposableComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function DisposableComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DisposableComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DisposableComponent, [{
            type: core.Component,
            args: [{
                    template: ''
                }]
        }], null, null); })();

    var DisposableDirective = /** @class */ (function () {
        function DisposableDirective() {
            this.unsubscribe = new rxjs.Subject();
        }
        DisposableDirective.prototype.ngOnDestroy = function () {
            this.unsubscribe.next();
            this.unsubscribe.complete();
            // console.log('DisposableDirective.ngOnDestroy', this);
        };
        DisposableDirective.ɵfac = function DisposableDirective_Factory(t) { return new (t || DisposableDirective)(); };
        DisposableDirective.ɵdir = core["ɵɵdefineDirective"]({ type: DisposableDirective, selectors: [["", "disposable-directive", ""]] });
        return DisposableDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DisposableDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[disposable-directive]'
                }]
        }], null, null); })();

    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        HighlightPipe.prototype.transform = function (text, query) {
            if (!query) {
                return text;
            }
            text = this.encodeHTML(text);
            query = this.encodeHTML(query);
            var regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
            return text.replace(regExp, function (match) {
                return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
            });
        };
        HighlightPipe.prototype.escapeRegexChars = function (text) {
            return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        };
        HighlightPipe.prototype.safeToString = function (text) {
            return text === undefined || text === null ? '' : text.toString().trim();
        };
        HighlightPipe.prototype.encodeHTML = function (text) {
            return this.safeToString(text)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };
        HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
        HighlightPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "highlight", type: HighlightPipe, pure: true });
        HighlightPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: HighlightPipe, factory: HighlightPipe.ɵfac, providedIn: 'root' });
        return HighlightPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HighlightPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'highlight',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var SegmentPipe = /** @class */ (function () {
        function SegmentPipe(location) {
            this.location = location;
        }
        SegmentPipe.prototype.transform = function (segments) {
            segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
            var path = segments.join('/');
            path = this.location.normalize(path);
            if (path.indexOf('/') !== 0) {
                path = "/" + path;
            }
            segments = path.split('/');
            return segments;
        };
        SegmentPipe.ɵfac = function SegmentPipe_Factory(t) { return new (t || SegmentPipe)(core["ɵɵdirectiveInject"](common.Location)); };
        SegmentPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "segment", type: SegmentPipe, pure: true });
        SegmentPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: SegmentPipe, factory: SegmentPipe.ɵfac, providedIn: 'root' });
        return SegmentPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SegmentPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'segment',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: common.Location }]; }, null); })();

    var IdentityService = /** @class */ (function (_super) {
        __extends(IdentityService, _super);
        function IdentityService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(IdentityService.prototype, "collection", {
            get: function () {
                return '/api/identity';
            },
            enumerable: true,
            configurable: true
        });
        IdentityService.prototype.getDetailById = function (id) {
            return this.get({ id: id });
        };
        IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(core["ɵɵinject"](core.Injector)); };
        IdentityService.ɵprov = core["ɵɵdefineInjectable"]({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });
        return IdentityService;
    }(ApiService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](IdentityService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var TranslateService = /** @class */ (function (_super) {
        __extends(TranslateService, _super);
        function TranslateService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.events = new core.EventEmitter();
            _this.language_ = new rxjs.BehaviorSubject(undefined);
            _this.languages_ = new rxjs.BehaviorSubject([]);
            _this.languages_.next(_this.config.languages);
            return _this;
        }
        Object.defineProperty(TranslateService.prototype, "collection", {
            get: function () {
                return '/api/translate';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TranslateService.prototype, "lang", {
            get: function () {
                return TranslateService.lang_;
            },
            set: function (lang) {
                if (lang !== TranslateService.lang_) {
                    TranslateService.lang_ = lang;
                    var languages = this.languages_.getValue();
                    if (languages.length) {
                        var language = languages.find(function (x) { return x.lang === lang; });
                        this.language_.next(language);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TranslateService.prototype, "language", {
            get: function () {
                return this.language_.getValue();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TranslateService.prototype, "languages", {
            get: function () {
                return this.languages_.getValue();
            },
            enumerable: true,
            configurable: true
        });
        TranslateService.prototype.observe$ = function () {
            var _this = this;
            // console.log(new Error().stack);
            return this.language_.pipe(operators.filter(function (x) { return x !== undefined; }), operators.switchMap(function (language) { return _this.getTranslation(language.lang); }));
        };
        TranslateService.prototype.getTranslation = function (lang) {
            var _this = this;
            if (!lang || !lang.trim()) {
                return rxjs.of(null);
            }
            TranslateService.lang_ = lang;
            if (TranslateService.cache[lang]) {
                return rxjs.of(TranslateService.cache[lang]);
            }
            else {
                return this.get("?lang=" + lang, { lang: lang }).pipe(
                // take(1),
                operators.map(function (x) {
                    if (x.length && x[0]) {
                        var labels = x[0].labels;
                        TranslateService.cache[lang] = labels;
                        _this.events.emit(labels);
                        return labels;
                    }
                    else {
                        return rxjs.of(null);
                    }
                }));
            }
        };
        TranslateService.prototype.getTranslate = function (key, defaultValue, params) {
            // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
            if (key) {
                var value = null;
                var labels = TranslateService.cache[TranslateService.lang_];
                // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
                if (labels) {
                    var keys = key.split('.');
                    var k = keys.shift();
                    while (keys.length > 0 && labels[k]) {
                        labels = labels[k];
                        k = keys.shift();
                    }
                    value = labels[k]; // || `{${k}}`;
                    if (typeof value !== 'string') {
                        value = null;
                    }
                }
                return this.parseTranslate(value, key, defaultValue, params);
            }
        };
        TranslateService.prototype.transform = function (key, defaultValue, params) {
            var value = this.getTranslate(key, defaultValue, params);
            return value;
        };
        TranslateService.prototype.parseTranslate = function (value, key, defaultValue, params) {
            if (value == null) {
                return defaultValue || this.missingTranslate(key);
            }
            else if (params) {
                return this.parseParams(value, params);
            }
            return value;
        };
        TranslateService.prototype.missingTranslate = function (key) {
            if (this.missingHandler) {
                return typeof this.missingHandler === 'function' ?
                    this.missingHandler(key) :
                    this.missingHandler;
            }
            return key;
        };
        TranslateService.prototype.parseParams = function (value, params) {
            var TEMPLATEREGEXP_ = /@([^{}\s]*)/g; // /{{\s?([^{}\s]*)\s?}}/g;
            return value.replace(TEMPLATEREGEXP_, function (text, key) {
                var replacer = params[key];
                return typeof replacer !== 'undefined' ? replacer : text;
            });
        };
        TranslateService.prototype.use = function (lang) {
        };
        TranslateService.prototype.setDefaultLang = function (lang) {
        };
        TranslateService.prototype.addLangs = function (lang) {
        };
        TranslateService.prototype.getBrowserLang = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                var lang = this.getFirstBrowserLang() || this.config.defaultLanguage; // navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage'] || this.config.defaultLanguage);
                // console.log('getBrowserLang', lang, navigator.languages);
                return lang;
            }
            else {
                return this.config.defaultLanguage;
            }
        };
        TranslateService.prototype.getFirstBrowserLang = function () {
            var lang = this.getFirstBrowserLocale();
            if (lang) {
                return lang.split('-')[0];
            }
        };
        TranslateService.prototype.getFirstBrowserLocale = function () {
            var navigator = window.navigator;
            var properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
            var lang;
            if (Array.isArray(navigator.languages)) {
                lang = navigator.languages[0];
            }
            var i = 0;
            while (!lang && i < properties.length) {
                lang = navigator[properties[i]];
                i++;
            }
            return lang;
        };
        TranslateService.cache = {};
        TranslateService.lang_ = null;
        TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(core["ɵɵinject"](core.Injector)); };
        TranslateService.ɵprov = core["ɵɵdefineInjectable"]({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
        return TranslateService;
    }(IdentityService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TranslateService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    // @dynamic
    var RouteService = /** @class */ (function () {
        function RouteService(platformId, coreService, injector, translateService, location, route, router, segment) {
            this.platformId = platformId;
            this.coreService = coreService;
            this.injector = injector;
            this.translateService = translateService;
            this.location = location;
            this.route = route;
            this.router = router;
            this.segment = segment;
            this._language = new rxjs.BehaviorSubject({});
            this.language = this._language.asObservable();
            this._languages = new rxjs.BehaviorSubject([]);
            this.languages = this._languages.asObservable();
            this.pageParams$ = new rxjs.BehaviorSubject({});
            this.urlStrategy = this.coreService.options.urlStrategy;
            this._languages.next(this.coreService.options.languages);
            this.currentMarket = this.coreService.options.defaultMarket;
            this.setLanguages();
            if (this.coreService.options.useLang || this.coreService.options.useMarket) {
                this.subscribeToRouter();
            }
        }
        Object.defineProperty(RouteService.prototype, "lang", {
            get: function () {
                return this._lang;
            },
            set: function (lang) {
                if (lang !== this._lang) {
                    this._lang = lang;
                    var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
                    if (this.coreService.options.useLang) {
                        var _lang = this._lang;
                        var path = this.location.path();
                        if (path.indexOf("/" + _lang) === 0) {
                            path = path.replace("/" + _lang, "/" + lang);
                        }
                        else if (path.indexOf("/" + lang) !== 0) {
                            path = "/" + lang + path;
                        }
                        this.path = path;
                        // const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RouteService.prototype, "currentLang", {
            get: function () {
                return this._lang;
            },
            enumerable: true,
            configurable: true
        });
        RouteService.prototype.getPageParams = function () {
            var _this = this;
            // console.log('RouteService.getPageParams', this.router.url);
            return this.route.queryParams.pipe(operators.distinctUntilChanged(), operators.switchMap(function (params) {
                // console.log(params);
                var parsed = _this.parseParams(params);
                _this.pageParams$.next(parsed);
                return rxjs.of(parsed);
            }));
        };
        RouteService.prototype.parseParams = function (params) {
            var _this = this;
            var parsed = {};
            Object.keys(params).forEach(function (k) { return parsed[k] = _this.parse(params[k]); });
            /*
            for (const key in params) {
                if (typeof (params[key]) === 'string') {
                    parsed[key] = this.parse(params[key]);
                } else {
                    parsed[key] = params[key];
                }
            }
            */
            return parsed;
        };
        RouteService.prototype.serializeParams = function (params) {
            var _this = this;
            var serialized = {};
            Object.keys(params).forEach(function (k) { return serialized[k] = _this.serialize(params[k]); });
            return serialized;
        };
        RouteService.prototype.parse = function (base64) {
            try {
                if (common.isPlatformBrowser(this.platformId)) {
                    return JSON.parse(window.atob(base64));
                }
                else {
                    return JSON.parse(Buffer.from(base64, 'base64').toString('ascii'));
                }
            }
            catch (_a) {
                return null;
            }
        };
        RouteService.prototype.serialize = function (object) {
            if (common.isPlatformBrowser(this.platformId)) {
                return window.btoa(JSON.stringify(object));
            }
            else {
                return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
            }
        };
        RouteService.prototype.getId = function () {
            return +this.route.snapshot.paramMap.get('id');
        };
        RouteService.prototype.getSlug = function () {
            return this.route.snapshot.paramMap.get('slug');
        };
        RouteService.prototype.toRoute = function (data) {
            var segments = this.segment.transform(data);
            if (this.coreService.options.useMarket) {
                var market = this.currentMarket;
                var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                segments.splice(marketIndex, 0, market);
            }
            if (this.coreService.options.useLang) {
                var lang = this._lang;
                var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                segments.splice(langIndex, 0, lang);
            }
            // console.log('RouteService.toRoute', segments);
            return segments;
        };
        RouteService.prototype.toSlug = function (data) {
            var segments = this.segment.transform(data);
            var paths = segments.filter(function (x) {
                return typeof x === 'string';
            });
            var datas = segments.filter(function (x) {
                return typeof x !== 'string';
            });
            if (this.coreService.options.useMarket) {
                var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                if (paths.length > marketIndex) {
                    paths[marketIndex] = '*';
                }
            }
            if (this.coreService.options.useLang) {
                var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                if (paths.length > langIndex) {
                    paths[langIndex] = '*';
                }
            }
            paths = paths.join('/').replace(/\/\*/gi, '').split('/');
            // console.log('RouteService.toSlug', data, paths);
            return paths.concat(datas);
        };
        RouteService.prototype.toParams = function (data) {
            return {
                data: window.btoa(JSON.stringify(data))
            };
        };
        RouteService.prototype.toData = function (params) {
            if (params && params.data) {
                return JSON.parse(window.atob(params.data));
            }
        };
        /*
        public getParams(): Observable<ComponentFactory<PageComponent>> {
            return this.router.events.pipe(
                filter(event => event instanceof ActivationEnd),
                map(() => this.route),
                distinctUntilChanged(),
                map(route => route.firstChild),
                switchMap(route => route.params),
                concatMap(x => {
                    return of(this.toData(x));
                })
            );
        }
        */
        RouteService.prototype.setLanguage = function (lang, silent) {
            this.lang = lang;
            if (this.coreService.options.useLang && this.path) {
                // console.log('RouteService.setLanguage', this.path, this._lang, lang, silent);
                if (silent) {
                    this.location.replaceState(this.path);
                }
                else {
                    this.router.navigate([this.path]);
                }
            }
        };
        // PRIVATE METHODS
        RouteService.prototype.setLanguages = function () {
            this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }) : []);
            this.translateService.setDefaultLang(this.coreService.options.defaultLanguage);
            // this.setLanguage(this.detectLanguage(), true);
            this.setLanguage(this.coreService.options.defaultLanguage, true);
            /*
            this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
                // console.log('RouteService.onLangChange', e);
            });
            */
        };
        RouteService.prototype.subscribeToRouter = function () {
            var _this = this;
            this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationStart; })).subscribe(function (event) {
                var location = _this.location.normalize(event.url).split('/');
                if (_this.coreService.options.useMarket) {
                    var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                    var market = location[marketIndex];
                    if (market !== _this.currentMarket) {
                        _this.currentMarket = market;
                        // console.log('RouteService.setMarket', market, event.url);
                    }
                }
                if (_this.coreService.options.useLang) {
                    var langIndex = _this.urlStrategy.split('/').indexOf(':lang');
                    var lang_1 = location[langIndex];
                    if (lang_1 !== _this._lang) {
                        var language = _this._languages.getValue().find(function (x) { return x.lang === lang_1; });
                        _this._language.next(language);
                        _this.translateService.use(lang_1);
                        // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                    }
                }
            });
        };
        RouteService.prototype.detectLanguage = function () {
            var acceptLanguage = null;
            if (common.isPlatformServer(this.platformId)) {
                /*
                // server side express engine
                app.engine('html',  (_, options, callback) => {
                    let engine = ngExpressEngine({
                        bootstrap: ServerAppModule,
                        providers: [ { provide: 'request', useFactory: () => options.req } ]
                    });
                    engine(_, options, callback)
                })
                */
                var request = this.injector.get('request');
                if (request) {
                    acceptLanguage = request.headers['accept-language'];
                    var languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
                    if (languages.length > 0) {
                        acceptLanguage = languages[0].split('-')[0];
                    }
                    else {
                        acceptLanguage = null;
                    }
                    // console.log('request', request, 'acceptLanguage', acceptLanguage);
                }
                // console.log('RouteService.isPlatformServer', this.platformId, acceptLanguage);
            }
            else if (common.isPlatformBrowser(this.platformId)) {
                acceptLanguage = this.translateService.getBrowserLang();
                // console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
            }
            var detectedLanguage = this.coreService.options.defaultLanguage;
            var regexp = new RegExp("(" + (this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
            var match = (acceptLanguage || '').match(regexp);
            detectedLanguage = match ? match[0] : detectedLanguage;
            // console.log('RouteService.detectLanguage', detectedLanguage);
            return detectedLanguage;
        };
        RouteService.prototype.getTime = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                return (performance || Date).now();
            }
            else {
                var time = process.hrtime();
                return (time[0] * 1e9 + time[1]) / 1e6;
            }
        };
        RouteService.prototype.start = function () {
            RouteService.startTime = this.getTime();
        };
        RouteService.prototype.end = function () {
            RouteService.endTime = this.getTime();
            console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
        };
        RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](CoreService), core["ɵɵinject"](core.Injector), core["ɵɵinject"](TranslateService), core["ɵɵinject"](common.Location), core["ɵɵinject"](router.ActivatedRoute), core["ɵɵinject"](router.Router), core["ɵɵinject"](SegmentPipe)); };
        RouteService.ɵprov = core["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
        return RouteService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RouteService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: CoreService }, { type: core.Injector }, { type: TranslateService }, { type: common.Location }, { type: router.ActivatedRoute }, { type: router.Router }, { type: SegmentPipe }]; }, null); })();

    var HttpStatusCodeService = /** @class */ (function () {
        function HttpStatusCodeService() {
            this.statusCode = 200;
            this.redirectUrl = null;
        }
        HttpStatusCodeService.prototype.setStatusCode = function (statusCode, redirectUrl) {
            if (redirectUrl === void 0) { redirectUrl = null; }
            this.statusCode = statusCode;
            this.redirectUrl = redirectUrl;
        };
        HttpStatusCodeService.prototype.getStatusCode = function () {
            return (this.statusCode === 309 ? 301 : this.statusCode);
        };
        HttpStatusCodeService.prototype.getRedirectUrl = function () {
            return this.redirectUrl;
        };
        HttpStatusCodeService.ɵfac = function HttpStatusCodeService_Factory(t) { return new (t || HttpStatusCodeService)(); };
        HttpStatusCodeService.ɵprov = core["ɵɵdefineInjectable"]({ token: HttpStatusCodeService, factory: HttpStatusCodeService.ɵfac, providedIn: 'root' });
        return HttpStatusCodeService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HttpStatusCodeService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var HttpResponseInterceptor = /** @class */ (function () {
        function HttpResponseInterceptor(injector, statusCodeService) {
            this.injector = injector;
            this.statusCodeService = statusCodeService;
            this.loggerErrorStrategy_ = exports.LoggerErrorStrategy.Server;
            this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || exports.LoggerErrorStrategy.Server;
        }
        Object.defineProperty(HttpResponseInterceptor.prototype, "config", {
            get: function () {
                if (!this.config_) {
                    this.config_ = this.injector.get(CoreService).options;
                }
                return this.config_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "logger", {
            get: function () {
                if (!this.logger_) {
                    this.logger_ = this.injector.get(Logger);
                }
                return this.logger_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "router", {
            get: function () {
                if (!this.router_) {
                    this.router_ = this.injector.get(router.Router);
                }
                return this.router_;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "routeService", {
            get: function () {
                if (!this.routeService_) {
                    this.routeService_ = this.injector.get(RouteService);
                }
                return this.routeService;
            },
            enumerable: true,
            configurable: true
        });
        HttpResponseInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            // injecting request
            // parsing response
            return next.handle(request).pipe(operators.tap(function (response) {
                _this.logger.httpError = null;
                // this.logger.log(response);
                if (response instanceof http.HttpResponse) {
                    // console.log('response instanceof HttpResponse');
                    // do stuff with response if you want
                    if (response.status >= _this.loggerErrorStrategy_) {
                        _this.logger.http(response);
                    }
                }
            }), operators.catchError(function (response) {
                // console.warn('HttpResponseInterceptor', response);
                if (response instanceof http.HttpErrorResponse) {
                    // this.statusCodeService.setStatusCode(response.status);
                    // !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER, 999 NONE)
                    if (response.status >= _this.loggerErrorStrategy_) {
                        _this.logger.http(response);
                    }
                    /*
                    switch (response.status) {
                        case 401:
                            // unauthorized
                            break;
                        case 404:
                            // not found
                            break;
                        case 409:
                            break;
                        case 410:
                            break;
                        default:
                            this.logger.http(response);
                            break;
                    }
                    */
                }
                return rxjs.throwError(response);
            }));
        };
        HttpResponseInterceptor.ɵfac = function HttpResponseInterceptor_Factory(t) { return new (t || HttpResponseInterceptor)(core["ɵɵinject"](core.Injector), core["ɵɵinject"](HttpStatusCodeService)); };
        HttpResponseInterceptor.ɵprov = core["ɵɵdefineInjectable"]({ token: HttpResponseInterceptor, factory: HttpResponseInterceptor.ɵfac, providedIn: 'root' });
        return HttpResponseInterceptor;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HttpResponseInterceptor, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }, { type: HttpStatusCodeService }]; }, null); })();

    var _c0 = ["jsonFormatter"];
    var JsonFormatterComponent = /** @class */ (function () {
        function JsonFormatterComponent(platformId) {
            this.platformId = platformId;
        }
        JsonFormatterComponent.prototype.ngOnChanges = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                if (!util.isObject(this.json) && !util.isArray(this.json)) {
                    return;
                }
                // console.log('JsonFormatterComponent', this.json);
                if (this.elementRef) {
                    this.input.nativeElement.removeChild(this.elementRef.nativeElement);
                }
                // const JSONFormatter = require('json-formatter-js').default;
                var formatter = new JSONFormatter(this.json);
                var elementRef = formatter.render();
                this.input.nativeElement.appendChild(elementRef);
                this.elementRef = new core.ElementRef(elementRef);
            }
        };
        JsonFormatterComponent.ɵfac = function JsonFormatterComponent_Factory(t) { return new (t || JsonFormatterComponent)(core["ɵɵdirectiveInject"](core.PLATFORM_ID)); };
        JsonFormatterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: JsonFormatterComponent, selectors: [["json-formatter"]], viewQuery: function JsonFormatterComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.input = _t.first);
            } }, inputs: { json: "json" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 0, consts: [["jsonFormatter", ""]], template: function JsonFormatterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "div", null, 0);
            } }, styles: [""] });
        return JsonFormatterComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](JsonFormatterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'json-formatter',
                    template: "<div #jsonFormatter></div>",
                    styleUrls: ['./json-formatter.component.scss'],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }]; }, { input: [{
                type: core.ViewChild,
                args: ["jsonFormatter", { static: true }]
            }], json: [{
                type: core.Input
            }] }); })();

    var LabelKey = /** @class */ (function () {
        function LabelKey() {
        }
        return LabelKey;
    }());
    var LabelService = /** @class */ (function (_super) {
        __extends(LabelService, _super);
        function LabelService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.keys = {};
            _this.values$ = new rxjs.BehaviorSubject({});
            _this.emitter$ = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(LabelService.prototype, "collection", {
            get: function () {
                return '/api/label';
            },
            enumerable: true,
            configurable: true
        });
        LabelService.prototype.transform = function (key, defaultValue, params) {
            var values = this.values$.getValue();
            if (values.hasOwnProperty(key)) {
                return this.parseLabel(values[key], params);
            }
            else if (!this.keys.hasOwnProperty(key)) {
                values[key] = null;
                Object.defineProperty(this.keys, key, {
                    value: { id: key, defaultValue: defaultValue },
                    enumerable: true,
                    writable: false,
                });
                this.emitter$.emit();
                return null;
            }
        };
        LabelService.prototype.transform$ = function (key, defaultValue, params) {
            var _this = this;
            var values = this.values$.getValue();
            if (values.hasOwnProperty(key)) {
                return rxjs.of(this.parseLabel(values[key], params));
            }
            else if (!this.keys.hasOwnProperty(key)) {
                values[key] = null;
                Object.defineProperty(this.keys, key, {
                    value: { id: key, defaultValue: defaultValue },
                    enumerable: true,
                    writable: false,
                });
                this.emitter$.emit();
            }
            return this.values$.pipe(operators.map(function (values) { return _this.parseLabel(values[key], params); }));
        };
        LabelService.prototype.observe$ = function () {
            var _this = this;
            return this.emitter$.pipe(operators.debounceTime(1), operators.switchMap(function (x) { return _this.collect$(); }), operators.filter(function (x) { return x !== null; }));
        };
        LabelService.prototype.collect$ = function () {
            var _this = this;
            if (Object.keys(this.keys).length) {
                var keys_1 = Object.keys(this.keys).map(function (x) { return _this.keys[x]; });
                this.keys = {};
                return this.statePost(keys_1).pipe(operators.map(function (labels) {
                    return labels.reduce(function (values, x) {
                        values[x.id] = _this.getLabel(x);
                        return values;
                    }, {});
                }), operators.tap(function (labels) {
                    var values = _this.values$.getValue();
                    Object.assign(values, labels);
                    _this.values$.next(values);
                }), operators.catchError(function (error) {
                    console.log(error);
                    var labels = keys_1.reduce(function (values, x) {
                        values[x.id] = _this.getLabel(x);
                        return values;
                    }, {});
                    var values = _this.values$.getValue();
                    Object.assign(values, labels);
                    // return this.values$.next(values);
                    return rxjs.of(null);
                }));
            }
            else {
                return rxjs.of(null);
            }
        };
        LabelService.prototype.parseLabel = function (value, params) {
            if (value && params) {
                var TEMPLATE_REGEXP = /@([^{}\s]*)/g;
                return value.replace(TEMPLATE_REGEXP, function (text, key) {
                    var replacer = params[key];
                    return typeof replacer !== 'undefined' ? replacer : text;
                });
            }
            else {
                return value;
            }
        };
        LabelService.prototype.getLabel = function (label) {
            return label.value || label.defaultValue || this.getMissingLabel(label);
        };
        LabelService.prototype.getMissingLabel = function (label) {
            if (typeof this.missingHandler === 'function') {
                return this.missingHandler(label);
            }
            return label.id;
        };
        LabelService.ɵfac = function LabelService_Factory(t) { return new (t || LabelService)(core["ɵɵinject"](core.Injector)); };
        LabelService.ɵprov = core["ɵɵdefineInjectable"]({ token: LabelService, factory: LabelService.ɵfac, providedIn: 'root' });
        return LabelService;
    }(ApiService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LabelService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var LabelDirective = /** @class */ (function (_super) {
        __extends(LabelDirective, _super);
        function LabelDirective(element, labelService) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.labelService = labelService;
            return _this;
        }
        LabelDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (label) {
                _this.element.nativeElement.innerHTML = label;
            });
        };
        LabelDirective.ɵfac = function LabelDirective_Factory(t) { return new (t || LabelDirective)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](LabelService)); };
        LabelDirective.ɵdir = core["ɵɵdefineDirective"]({ type: LabelDirective, selectors: [["", "label", ""]], inputs: { label: "label", labelParams: "labelParams" }, features: [core["ɵɵInheritDefinitionFeature"]] });
        return LabelDirective;
    }(DisposableDirective));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LabelDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[label]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: LabelService }]; }, { label: [{
                type: core.Input
            }], labelParams: [{
                type: core.Input
            }] }); })();

    var LabelPipe = /** @class */ (function () {
        function LabelPipe(labelService) {
            this.labelService = labelService;
        }
        LabelPipe.prototype.transform = function (key, defaultValue, params) {
            return this.labelService.transform(key, defaultValue, params);
        };
        LabelPipe.ɵfac = function LabelPipe_Factory(t) { return new (t || LabelPipe)(core["ɵɵdirectiveInject"](LabelService)); };
        LabelPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "label", type: LabelPipe, pure: false });
        LabelPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: LabelPipe, factory: LabelPipe.ɵfac, providedIn: 'root' });
        return LabelPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LabelPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'label',
                    pure: false
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: LabelService }]; }, null); })();

    function LoggerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 1);
        core["ɵɵelementStart"](1, "span");
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵtext"](3, "\u00A0 ");
        core["ɵɵelementStart"](4, "span", 2);
        core["ɵɵtext"](5);
        core["ɵɵelementEnd"]();
        core["ɵɵtext"](6, "\u00A0 ");
        core["ɵɵelementStart"](7, "span", 3);
        core["ɵɵtext"](8);
        core["ɵɵelementEnd"]();
        core["ɵɵtext"](9, "\u00A0 ");
        core["ɵɵelementStart"](10, "span", 4);
        core["ɵɵtext"](11);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r5 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngClass", "http--" + ctx_r5.logger.httpError.statusType);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r5.logger.httpError.statusType);
        core["ɵɵadvance"](3);
        core["ɵɵtextInterpolate"](ctx_r5.logger.httpError.status);
        core["ɵɵadvance"](3);
        core["ɵɵtextInterpolate"](ctx_r5.logger.httpError.url);
        core["ɵɵadvance"](3);
        core["ɵɵtextInterpolate"](ctx_r5.logger.httpError.body == null ? null : ctx_r5.logger.httpError.body.error);
    } }
    var LoggerComponent = /** @class */ (function () {
        function LoggerComponent(logger) {
            this.logger = logger;
        }
        LoggerComponent.prototype.ngOnInit = function () {
        };
        LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(core["ɵɵdirectiveInject"](Logger)); };
        LoggerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: LoggerComponent, selectors: [["core-logger"]], decls: 1, vars: 1, consts: [["class", "error-http", 3, "ngClass", 4, "ngIf"], [1, "error-http", 3, "ngClass"], [1, "status"], [1, "url"], [1, "message"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, LoggerComponent_div_0_Template, 12, 5, "div", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.logger.httpError);
            } }, directives: [common.NgIf, common.NgClass], styles: [".error-http[_ngcontent-%COMP%]{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"] });
        return LoggerComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LoggerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'core-logger',
                    templateUrl: './logger.component.html',
                    styleUrls: ['./logger.component.scss'],
                    encapsulation: core.ViewEncapsulation.Emulated,
                }]
        }], function () { return [{ type: Logger }]; }, null); })();

    var OUTLETS = new core.InjectionToken('core.outlets');
    var Outlet = /** @class */ (function () {
        function Outlet() {
        }
        return Outlet;
    }());

    var OutletDefaultComponent = /** @class */ (function (_super) {
        __extends(OutletDefaultComponent, _super);
        function OutletDefaultComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OutletDefaultComponent.ɵfac = function OutletDefaultComponent_Factory(t) { return ɵOutletDefaultComponent_BaseFactory(t || OutletDefaultComponent); };
        OutletDefaultComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: OutletDefaultComponent, selectors: [["outlet-content-component"]], inputs: { outlet: "outlet" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[1, "outlet"]], template: function OutletDefaultComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtext"](1, "Outlet not found!");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return OutletDefaultComponent;
    }(DisposableComponent));
    var ɵOutletDefaultComponent_BaseFactory = core["ɵɵgetInheritedFactory"](OutletDefaultComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OutletDefaultComponent, [{
            type: core.Component,
            args: [{
                    selector: 'outlet-content-component',
                    template: "<div class=\"outlet\">Outlet not found!</div>",
                }]
        }], null, { outlet: [{
                type: core.Input
            }] }); })();

    var OutletResolverService = /** @class */ (function () {
        function OutletResolverService(outlets) {
            outlets = outlets || {};
        }
        OutletResolverService.prototype.resolve = function (outlet) {
            var component;
            if (outlet) {
                component = this.outlets[outlet.component] || OutletDefaultComponent;
            }
            else {
                component = OutletDefaultComponent;
            }
            return component;
        };
        OutletResolverService.ɵfac = function OutletResolverService_Factory(t) { return new (t || OutletResolverService)(core["ɵɵinject"](OUTLETS)); };
        OutletResolverService.ɵprov = core["ɵɵdefineInjectable"]({ token: OutletResolverService, factory: OutletResolverService.ɵfac, providedIn: 'root' });
        return OutletResolverService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OutletResolverService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [OUTLETS]
                }] }]; }, null); })();

    var _c0$1 = ["outlet"];
    var OutletComponent = /** @class */ (function (_super) {
        __extends(OutletComponent, _super);
        function OutletComponent(componentFactoryResolver, outletResolverService) {
            var _this = _super.call(this) || this;
            _this.componentFactoryResolver = componentFactoryResolver;
            _this.outletResolverService = outletResolverService;
            return _this;
        }
        OutletComponent.prototype.ngOnInit = function () {
            var component = this.outletResolverService.resolve(this.outlet);
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(factory);
            var instance = componentRef.instance;
            instance.outlet = this.outlet;
            if (typeof instance['OutletInit'] === 'function') {
                instance['OutletInit']();
            }
            this.componentRef = componentRef;
        };
        OutletComponent.prototype.ngOnDestroy = function () {
            this.componentRef.destroy();
        };
        OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver), core["ɵɵdirectiveInject"](OutletResolverService)); };
        OutletComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: OutletComponent, selectors: [["outlet-component"]], viewQuery: function OutletComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵviewQuery"](_c0$1, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
            } }, inputs: { outlet: "outlet" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function OutletComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return OutletComponent;
    }(DisposableComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OutletComponent, [{
            type: core.Component,
            args: [{
                    selector: 'outlet-component',
                    template: '',
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }, { type: OutletResolverService }]; }, { outlet: [{
                type: core.Input
            }], viewContainerRef: [{
                type: core.ViewChild,
                args: ['outlet', { read: core.ViewContainerRef, static: false }]
            }] }); })();

    function OutletRepeaterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "outlet-component", 1);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var outlet_r7 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("outlet", outlet_r7);
    } }
    var OutletRepeaterComponent = /** @class */ (function (_super) {
        __extends(OutletRepeaterComponent, _super);
        function OutletRepeaterComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OutletRepeaterComponent.ɵfac = function OutletRepeaterComponent_Factory(t) { return ɵOutletRepeaterComponent_BaseFactory(t || OutletRepeaterComponent); };
        OutletRepeaterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: OutletRepeaterComponent, selectors: [["outlet-repeater-component"]], inputs: { outlets: "outlets" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "outlet"]], template: function OutletRepeaterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, OutletRepeaterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.outlets);
            } }, directives: [common.NgForOf, OutletComponent], encapsulation: 2 });
        return OutletRepeaterComponent;
    }(DisposableComponent));
    var ɵOutletRepeaterComponent_BaseFactory = core["ɵɵgetInheritedFactory"](OutletRepeaterComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OutletRepeaterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'outlet-repeater-component',
                    template: "<ng-container *ngFor=\"let outlet of outlets\"><outlet-component [outlet]=\"outlet\"></outlet-component></ng-container>",
                }]
        }], null, { outlets: [{
                type: core.Input
            }] }); })();

    var AssetPipe = /** @class */ (function () {
        function AssetPipe(coreService, segment) {
            this.coreService = coreService;
            this.segment = segment;
        }
        AssetPipe.prototype.transform = function (data) {
            if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
                return data;
            }
            else {
                var segments = this.segment.transform(data);
                segments.unshift(this.coreService.options.assets);
                return segments.join('/');
            }
        };
        AssetPipe.ɵfac = function AssetPipe_Factory(t) { return new (t || AssetPipe)(core["ɵɵdirectiveInject"](CoreService), core["ɵɵdirectiveInject"](SegmentPipe)); };
        AssetPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "asset", type: AssetPipe, pure: true });
        AssetPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: AssetPipe, factory: AssetPipe.ɵfac, providedIn: 'root' });
        return AssetPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AssetPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'asset',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: CoreService }, { type: SegmentPipe }]; }, null); })();

    var CustomAsyncPipe = /** @class */ (function () {
        function CustomAsyncPipe(changeDetector) {
            this.changeDetector = changeDetector;
            this.subject = null;
            this.subscription = null;
            this.value = null;
            this.cachedValue = null;
        }
        CustomAsyncPipe.prototype.transform = function (subject) {
            return this.observableToValue(subject);
        };
        CustomAsyncPipe.prototype.observableToValue = function (subject) {
            var _this = this;
            if (subject !== this.subject) {
                if (this.subject) {
                    this.dispose();
                }
                if (subject) {
                    this.subject = subject;
                    this.subscription = this.subject.subscribe(function (value) {
                        // console.log('CustomAsyncPipe.A', value);
                        _this.value = value;
                        _this.changeDetector.markForCheck(); // mark pipe as dirty
                    });
                    this.cachedValue = this.value; // ???
                    return this.value;
                }
            }
            // console.log('CustomAsyncPipe.B', this.value);
            if (this.cachedValue !== this.value) {
                this.cachedValue = this.value;
                return core.WrappedValue.wrap(this.value); // notify that value has changed
            }
            return this.cachedValue; // return cachedValue
        };
        CustomAsyncPipe.prototype.dispose = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            this.value = null;
            this.cachedValue = null;
            this.subscription = null;
            this.subject = null;
        };
        CustomAsyncPipe.prototype.ngOnDestroy = function () {
            this.dispose();
        };
        CustomAsyncPipe.prototype._observableToValue = function (subject) {
            var _this = this;
            if (!this.subject) {
                if (subject) {
                    this.subject = subject;
                    this.subscription = this.subject.subscribe(function (value) {
                        _this.value = value;
                        _this.changeDetector.markForCheck(); // value has changed
                    });
                }
                this.cachedValue = this.value;
                return this.value;
            }
            if (subject !== this.subject) {
                this.dispose();
                return this.transform(subject);
            }
            if (this.value === this.cachedValue) {
                return this.cachedValue;
            }
            this.cachedValue = this.value;
            return core.WrappedValue.wrap(this.value); // value has changed
        };
        CustomAsyncPipe.ɵfac = function CustomAsyncPipe_Factory(t) { return new (t || CustomAsyncPipe)(core["ɵɵinjectPipeChangeDetectorRef"]()); };
        CustomAsyncPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "customAsync", type: CustomAsyncPipe, pure: false });
        return CustomAsyncPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CustomAsyncPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'customAsync',
                    pure: false
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, null); })();


    (function (ImageType) {
        ImageType[ImageType["Default"] = 1] = "Default";
        ImageType[ImageType["Gallery"] = 2] = "Gallery";
        ImageType[ImageType["Share"] = 3] = "Share";
    })(exports.ImageType || (exports.ImageType = {}));
    var Image = /** @class */ (function () {
        function Image() {
        }
        return Image;
    }());

    var ImageUrlPipe = /** @class */ (function () {
        function ImageUrlPipe() {
        }
        ImageUrlPipe.prototype.transform = function (images, type, queryString) {
            type = type || 'Default';
            queryString = queryString ? "?" + queryString : '';
            var imageType = exports.ImageType[type] || exports.ImageType.Default;
            var image = null;
            if (images && images.length) {
                image = images.find(function (i) { return i.type === imageType; }) || images[0];
            }
            return image ? (image.url + queryString).replace(/ /g, '%20') : null;
        };
        ImageUrlPipe.ɵfac = function ImageUrlPipe_Factory(t) { return new (t || ImageUrlPipe)(); };
        ImageUrlPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "imageUrl", type: ImageUrlPipe, pure: true });
        ImageUrlPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: ImageUrlPipe, factory: ImageUrlPipe.ɵfac, providedIn: 'root' });
        return ImageUrlPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ImageUrlPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'imageUrl',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var ImagePipe = /** @class */ (function () {
        function ImagePipe() {
        }
        ImagePipe.prototype.transform = function (images, type, queryString) {
            type = type || 'Default';
            var imageType = exports.ImageType[type] || exports.ImageType.Default;
            return (images && images.length) ? images.find(function (i) { return i.type === imageType; }) || null : null; // images[0]
        };
        // 21 marzo 2019
        ImagePipe.prototype.transform__ = function (images, type, queryString) {
            type = type || 'Default';
            queryString = queryString ? "?" + queryString : '';
            var imageType = exports.ImageType[type] || exports.ImageType.Default;
            var image = null;
            if (images && images.length) {
                image = images.find(function (i) { return i.type === imageType; }); // || images[0];
                if (!image && imageType !== exports.ImageType.Default) {
                    image = images.find(function (i) { return i.type === exports.ImageType.Default; });
                }
            }
            return image ? (image.url + queryString).replace(/ /g, '%20') : null;
        };
        ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
        ImagePipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "image", type: ImagePipe, pure: true });
        ImagePipe.ɵprov = core["ɵɵdefineInjectable"]({ token: ImagePipe, factory: ImagePipe.ɵfac, providedIn: 'root' });
        return ImagePipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ImagePipe, [{
            type: core.Pipe,
            args: [{
                    name: 'image',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var PublicPipe = /** @class */ (function () {
        function PublicPipe(coreService, segment) {
            this.coreService = coreService;
            this.segment = segment;
        }
        PublicPipe.prototype.transform = function (data) {
            var segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.public);
            return segments.join('/');
        };
        PublicPipe.ɵfac = function PublicPipe_Factory(t) { return new (t || PublicPipe)(core["ɵɵdirectiveInject"](CoreService), core["ɵɵdirectiveInject"](SegmentPipe)); };
        PublicPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "public", type: PublicPipe, pure: true });
        PublicPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: PublicPipe, factory: PublicPipe.ɵfac, providedIn: 'root' });
        return PublicPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PublicPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'public',
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: CoreService }, { type: SegmentPipe }]; }, null); })();

    var RoutePipe = /** @class */ (function () {
        function RoutePipe(routeService) {
            this.routeService = routeService;
        }
        RoutePipe.prototype.transform = function (data) {
            return this.routeService.toRoute(data);
        };
        RoutePipe.ɵfac = function RoutePipe_Factory(t) { return new (t || RoutePipe)(core["ɵɵdirectiveInject"](RouteService)); };
        RoutePipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "route", type: RoutePipe, pure: false });
        RoutePipe.ɵprov = core["ɵɵdefineInjectable"]({ token: RoutePipe, factory: RoutePipe.ɵfac, providedIn: 'root' });
        return RoutePipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RoutePipe, [{
            type: core.Pipe,
            args: [{
                    name: 'route',
                    pure: false
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: RouteService }]; }, null); })();

    var EntityService = /** @class */ (function (_super) {
        __extends(EntityService, _super);
        function EntityService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EntityService.prototype, "collection", {
            get: function () {
                return '/api/entity';
            },
            enumerable: true,
            configurable: true
        });
        EntityService.prototype.getDetailByName = function (name) {
            if (!name.trim()) {
                return rxjs.of([]);
            }
            return this.get({ name: name });
        };
        EntityService.ɵfac = function EntityService_Factory(t) { return ɵEntityService_BaseFactory(t || EntityService); };
        EntityService.ɵprov = core["ɵɵdefineInjectable"]({ token: EntityService, factory: EntityService.ɵfac, providedIn: 'root' });
        return EntityService;
    }(IdentityService));
    var ɵEntityService_BaseFactory = core["ɵɵgetInheritedFactory"](EntityService);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EntityService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var SlugKey = /** @class */ (function () {
        function SlugKey() {
        }
        return SlugKey;
    }());
    var SlugService = /** @class */ (function (_super) {
        __extends(SlugService, _super);
        function SlugService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            _this.keys = {};
            _this.values$ = new rxjs.BehaviorSubject({});
            _this.emitter$ = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(SlugService.prototype, "collection", {
            get: function () {
                return "/api/slug";
            },
            enumerable: true,
            configurable: true
        });
        SlugService.prototype.transform = function (key) {
            var values = this.values$.getValue();
            if (values.hasOwnProperty(key)) {
                return values[key];
            }
            else if (!this.keys.hasOwnProperty(key)) {
                values[key] = null;
                Object.defineProperty(this.keys, key, {
                    value: { mnemonic: key },
                    enumerable: true,
                    writable: false,
                });
                this.emitter$.emit();
                return null;
            }
        };
        SlugService.prototype.transform$ = function (key) {
            var values = this.values$.getValue();
            if (values.hasOwnProperty(key)) {
                return rxjs.of(values[key]);
            }
            else if (!this.keys.hasOwnProperty(key)) {
                Object.defineProperty(this.keys, key, {
                    value: { mnemonic: key },
                    enumerable: true,
                    writable: false,
                });
                this.emitter$.emit();
            }
            return this.values$.pipe(operators.map(function (values) { return values[key]; }));
        };
        SlugService.prototype.observe$ = function () {
            var _this = this;
            return this.emitter$.pipe(operators.debounceTime(1), operators.switchMap(function (x) { return _this.collect$(); }), operators.filter(function (x) { return x !== null; }), operators.first());
        };
        SlugService.prototype.collect$ = function () {
            var _this = this;
            if (Object.keys(this.keys).length) {
                var keys_1 = Object.keys(this.keys).map(function (x) { return _this.keys[x]; });
                this.keys = {};
                return this.statePost(keys_1).pipe(operators.map(function (items) {
                    return items.reduce(function (values, x) {
                        values[x.mnemonic] = [x.slug];
                        return values;
                    }, {});
                }), operators.tap(function (slugs) {
                    var values = _this.values$.getValue();
                    Object.assign(values, slugs);
                    _this.values$.next(values);
                }), operators.catchError(function (error) {
                    console.log(error);
                    var labels = keys_1.reduce(function (values, x) {
                        values[x.mnemonic] = null;
                        return values;
                    }, {});
                    var values = _this.values$.getValue();
                    Object.assign(values, labels);
                    return rxjs.of(null);
                }));
            }
            else {
                return rxjs.of(null);
            }
        };
        SlugService.ɵfac = function SlugService_Factory(t) { return new (t || SlugService)(core["ɵɵinject"](core.Injector)); };
        SlugService.ɵprov = core["ɵɵdefineInjectable"]({ token: SlugService, factory: SlugService.ɵfac, providedIn: 'root' });
        return SlugService;
    }(EntityService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SlugService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var SlugPipe = /** @class */ (function () {
        function SlugPipe(slugService, routePipe) {
            this.slugService = slugService;
            this.routePipe = routePipe;
        }
        SlugPipe.prototype.transform = function (key, segments) {
            var slug = this.slugService.transform(key);
            if (slug) {
                var slugs = this.routePipe.transform(slug);
                if (slugs && segments) {
                    slugs = slugs.concat(segments);
                }
                return slugs;
            }
            else {
                return [];
            }
        };
        SlugPipe.ɵfac = function SlugPipe_Factory(t) { return new (t || SlugPipe)(core["ɵɵdirectiveInject"](SlugService), core["ɵɵdirectiveInject"](RoutePipe)); };
        SlugPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "slug", type: SlugPipe, pure: false });
        SlugPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: SlugPipe, factory: SlugPipe.ɵfac, providedIn: 'root' });
        return SlugPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SlugPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'slug',
                    pure: false
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: SlugService }, { type: RoutePipe }]; }, null); })();

    var TranslateDirective = /** @class */ (function (_super) {
        __extends(TranslateDirective, _super);
        function TranslateDirective(element, translateService) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.translateService = translateService;
            return _this;
        }
        TranslateDirective.prototype.ngOnInit = function () {
            var _this = this;
            // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
            this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (translate) {
                _this.element.nativeElement.innerHTML = translate;
                // console.log('TranslateDirective.ngOnInit', translate);
            });
            // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
        };
        TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](TranslateService)); };
        TranslateDirective.ɵdir = core["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" }, features: [core["ɵɵInheritDefinitionFeature"]] });
        return TranslateDirective;
    }(DisposableDirective));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TranslateDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[translate]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: TranslateService }]; }, { translate: [{
                type: core.Input
            }], translateParams: [{
                type: core.Input
            }] }); })();

    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(ref, translateService) {
            var _this = this;
            this.ref = ref;
            this.translateService = translateService;
            this.translateService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
        }
        TranslatePipe.prototype.transform = function (key, text, params) {
            // console.log(key, params);
            var label = this.translateService.getTranslate(key, text, params);
            // console.log('label', label, this.translateService.cache);
            return label;
        };
        TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(core["ɵɵinjectPipeChangeDetectorRef"](), core["ɵɵdirectiveInject"](TranslateService)); };
        TranslatePipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: false });
        TranslatePipe.ɵprov = core["ɵɵdefineInjectable"]({ token: TranslatePipe, factory: TranslatePipe.ɵfac, providedIn: 'root' });
        return TranslatePipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TranslatePipe, [{
            type: core.Pipe,
            args: [{
                    name: 'translate',
                    pure: false,
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: TranslateService }]; }, null); })();

    var SafeStylePipe = /** @class */ (function () {
        function SafeStylePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeStylePipe.prototype.transform = function (style) {
            return this.sanitizer.bypassSecurityTrustStyle(style);
        };
        SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) { return new (t || SafeStylePipe)(core["ɵɵdirectiveInject"](platformBrowser.DomSanitizer)); };
        SafeStylePipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "safeStyle", type: SafeStylePipe, pure: true });
        SafeStylePipe.ɵprov = core["ɵɵdefineInjectable"]({ token: SafeStylePipe, factory: SafeStylePipe.ɵfac, providedIn: 'root' });
        return SafeStylePipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SafeStylePipe, [{
            type: core.Pipe,
            args: [{
                    name: 'safeStyle'
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: platformBrowser.DomSanitizer }]; }, null); })();

    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(core["ɵɵdirectiveInject"](platformBrowser.DomSanitizer)); };
        SafeUrlPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
        SafeUrlPipe.ɵprov = core["ɵɵdefineInjectable"]({ token: SafeUrlPipe, factory: SafeUrlPipe.ɵfac, providedIn: 'root' });
        return SafeUrlPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SafeUrlPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'safeUrl'
                }]
        }, {
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: platformBrowser.DomSanitizer }]; }, null); })();

    var TrustPipe = /** @class */ (function () {
        function TrustPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        TrustPipe.prototype.transform = function (text) {
            return this.sanitizer.bypassSecurityTrustHtml(text);
            // return this.sanitizer.bypassSecurityTrustStyle(text);
            // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
        };
        TrustPipe.ɵfac = function TrustPipe_Factory(t) { return new (t || TrustPipe)(core["ɵɵdirectiveInject"](platformBrowser.DomSanitizer)); };
        TrustPipe.ɵpipe = core["ɵɵdefinePipe"]({ name: "safeHtml", type: TrustPipe, pure: true });
        return TrustPipe;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TrustPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], function () { return [{ type: platformBrowser.DomSanitizer }]; }, null); })();

    var components = [
        CoreModuleComponent,
        DisposableComponent,
        DisposableDirective,
        JsonFormatterComponent,
        LoggerComponent,
        OutletComponent,
        OutletDefaultComponent,
        OutletRepeaterComponent,
    ];
    var directives = [
        BundleDirective,
        DefaultContentDirective,
        LabelDirective,
        TranslateDirective,
    ];
    var pipes = [
        AssetPipe,
        CustomAsyncPipe,
        HighlightPipe,
        ImagePipe,
        ImageUrlPipe,
        LabelPipe,
        PublicPipe,
        RoutePipe,
        SafeStylePipe,
        SafeUrlPipe,
        SegmentPipe,
        SlugPipe,
        TranslatePipe,
        TrustPipe,
    ];
    var validators = [];
    var guards = [];
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            /*
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
            */
        }
        CoreModule.forRoot = function (bundles, config) {
            return {
                ngModule: CoreModule,
                providers: [{
                        provide: CORE_CONFIG, useValue: config
                    }, {
                        provide: BUNDLES, useValue: bundles || {}
                    }]
            };
        };
        CoreModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CoreModule });
        CoreModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(core["ɵɵinject"](CoreModule, 12)); }, providers: __spread([
                { provide: http.HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                { provide: core.NgModuleFactoryLoader, useClass: core.SystemJsNgModuleLoader }
            ], validators), imports: [[
                    common.CommonModule,
                    http.HttpClientModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                ]] });
        return CoreModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CoreModule, { declarations: [CoreModuleComponent,
            DisposableComponent,
            DisposableDirective,
            JsonFormatterComponent,
            LoggerComponent,
            OutletComponent,
            OutletDefaultComponent,
            OutletRepeaterComponent,
            BundleDirective,
            DefaultContentDirective,
            LabelDirective,
            TranslateDirective,
            AssetPipe,
            CustomAsyncPipe,
            HighlightPipe,
            ImagePipe,
            ImageUrlPipe,
            LabelPipe,
            PublicPipe,
            RoutePipe,
            SafeStylePipe,
            SafeUrlPipe,
            SegmentPipe,
            SlugPipe,
            TranslatePipe,
            TrustPipe], imports: [common.CommonModule,
            http.HttpClientModule,
            forms.FormsModule,
            forms.ReactiveFormsModule], exports: [CoreModuleComponent,
            DisposableComponent,
            DisposableDirective,
            JsonFormatterComponent,
            LoggerComponent,
            OutletComponent,
            OutletDefaultComponent,
            OutletRepeaterComponent,
            BundleDirective,
            DefaultContentDirective,
            LabelDirective,
            TranslateDirective,
            AssetPipe,
            CustomAsyncPipe,
            HighlightPipe,
            ImagePipe,
            ImageUrlPipe,
            LabelPipe,
            PublicPipe,
            RoutePipe,
            SafeStylePipe,
            SafeUrlPipe,
            SegmentPipe,
            SlugPipe,
            TranslatePipe,
            TrustPipe] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        http.HttpClientModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                    ],
                    providers: __spread([
                        { provide: http.HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                        { provide: core.NgModuleFactoryLoader, useClass: core.SystemJsNgModuleLoader }
                    ], validators),
                    declarations: __spread(components, directives, pipes, validators),
                    entryComponents: __spread(components),
                    exports: __spread(components, directives, pipes, validators),
                }]
        }], function () { return [{ type: CoreModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    var Label = /** @class */ (function () {
        function Label() {
        }
        return Label;
    }());

    var Document = /** @class */ (function () {
        function Document() {
        }
        return Document;
    }());
    var DocumentIndex = /** @class */ (function () {
        function DocumentIndex() {
        }
        return DocumentIndex;
    }());

    var DocumentService = /** @class */ (function (_super) {
        __extends(DocumentService, _super);
        function DocumentService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DocumentService.prototype, "collection", {
            get: function () {
                return '/api/document';
            },
            enumerable: true,
            configurable: true
        });
        DocumentService.prototype.getDetailBySlug = function (slug) {
            if (!slug.trim()) {
                // if not search term, return empty identity array.
                return rxjs.of();
            }
            return this.get({ slug: slug }).pipe(
            // tap(x => this.logger.log(`found identities matching "${slug}"`)),
            operators.switchMap(function (x) { return rxjs.of(x[0]); }));
        };
        DocumentService.ɵfac = function DocumentService_Factory(t) { return ɵDocumentService_BaseFactory(t || DocumentService); };
        DocumentService.ɵprov = core["ɵɵdefineInjectable"]({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
        return DocumentService;
    }(EntityService));
    var ɵDocumentService_BaseFactory = core["ɵɵgetInheritedFactory"](DocumentService);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DocumentService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null); })();

    var Entity = /** @class */ (function () {
        function Entity() {
        }
        return Entity;
    }());

    var EventEntity = /** @class */ (function () {
        function EventEntity() {
        }
        return EventEntity;
    }());
    var EventDispatcherService = /** @class */ (function () {
        function EventDispatcherService() {
            this.emitter = new core.EventEmitter();
        }
        EventDispatcherService.prototype.emit = function (event) {
            return this.emitter.emit(event);
        };
        EventDispatcherService.prototype.observe = function () {
            return this.emitter.pipe(operators.tap(function (event) { return console.log('EventDispatcherService', event); }));
        };
        EventDispatcherService.ɵfac = function EventDispatcherService_Factory(t) { return new (t || EventDispatcherService)(); };
        EventDispatcherService.ɵprov = core["ɵɵdefineInjectable"]({ token: EventDispatcherService, factory: EventDispatcherService.ɵfac, providedIn: 'root' });
        return EventDispatcherService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EventDispatcherService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var Feature = /** @class */ (function () {
        function Feature() {
            this.readmore = false;
        }
        return Feature;
    }());

    var Identity = /** @class */ (function () {
        function Identity() {
        }
        return Identity;
    }());

    var MenuItem = /** @class */ (function () {
        function MenuItem(options) {
            if (options) {
                Object.assign(this, options);
                if (options.items) {
                    this.items = options.items.map(function (item) { return new MenuItem(item); });
                }
            }
        }
        return MenuItem;
    }());

    var MenuService = /** @class */ (function (_super) {
        __extends(MenuService, _super);
        function MenuService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(MenuService.prototype, "collection", {
            get: function () {
                return '/api/menu';
            },
            enumerable: true,
            configurable: true
        });
        MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(core["ɵɵinject"](core.Injector)); };
        MenuService.ɵprov = core["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
        return MenuService;
    }(EntityService));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](MenuService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: core.Injector }]; }, null); })();

    var Taxonomy = /** @class */ (function () {
        function Taxonomy() {
        }
        return Taxonomy;
    }());

    // export class OnceEvent extends Event { }
    var OnceService = /** @class */ (function () {
        function OnceService(platformId, zone) {
            this.platformId = platformId;
            this.zone = zone;
            this.uid = 0;
            this.paths = [];
        }
        OnceService.prototype.script = function (url, callback) {
            if (common.isPlatformBrowser(this.platformId)) {
                // !!! this.zone.runOutsideAngular(() => {
                if (this.paths.indexOf(url) === -1) {
                    this.paths.push(url);
                    var callbackName_1;
                    if (callback === true) {
                        callbackName_1 = 'OnceCallback' + (++this.uid);
                        url = url.split('{{callback}}').join(callbackName_1);
                    }
                    else {
                        callbackName_1 = callback;
                    }
                    var callback$ = void 0;
                    var element = document.createElement('script');
                    element.type = 'text/javascript';
                    if (callback) {
                        callback$ = rxjs.from(new Promise(function (resolve, reject) {
                            window[callbackName_1] = function (data) {
                                resolve(data);
                            };
                        }));
                    }
                    else {
                        element.async = true;
                        callback$ = rxjs.fromEvent(element, 'load').pipe(operators.map(function (x) { return x; }));
                    }
                    var scripts = document.getElementsByTagName('script');
                    if (scripts.length) {
                        var script = scripts[scripts.length - 1];
                        script.parentNode.insertBefore(element, script.nextSibling);
                    }
                    element.src = url;
                    return callback$;
                }
                else {
                    return rxjs.of(new Event('loaded!'));
                }
                // });
            }
            else {
                return rxjs.of(null);
            }
        };
        OnceService.ɵfac = function OnceService_Factory(t) { return new (t || OnceService)(core["ɵɵinject"](core.PLATFORM_ID), core["ɵɵinject"](core.NgZone)); };
        OnceService.ɵprov = core["ɵɵdefineInjectable"]({ token: OnceService, factory: OnceService.ɵfac, providedIn: 'root' });
        return OnceService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](OnceService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [core.PLATFORM_ID]
                }] }, { type: core.NgZone }]; }, null); })();

    var Translate = /** @class */ (function () {
        function Translate() {
        }
        return Translate;
    }());

    exports.ApiRequestOptions = ApiRequestOptions;
    exports.ApiService = ApiService;
    exports.AssetPipe = AssetPipe;
    exports.AuthService = AuthService;
    exports.AuthToken = AuthToken;
    exports.BUNDLES = BUNDLES;
    exports.BundleDirective = BundleDirective;
    exports.CORE_CONFIG = CORE_CONFIG;
    exports.CookieStorageService = CookieStorageService;
    exports.CoreConfig = CoreConfig;
    exports.CoreModule = CoreModule;
    exports.CoreModuleComponent = CoreModuleComponent;
    exports.CoreService = CoreService;
    exports.CustomAsyncPipe = CustomAsyncPipe;
    exports.DefaultContentDirective = DefaultContentDirective;
    exports.DisposableComponent = DisposableComponent;
    exports.DisposableDirective = DisposableDirective;
    exports.Document = Document;
    exports.DocumentIndex = DocumentIndex;
    exports.DocumentService = DocumentService;
    exports.Entity = Entity;
    exports.EntityService = EntityService;
    exports.EventDispatcherService = EventDispatcherService;
    exports.Feature = Feature;
    exports.HighlightPipe = HighlightPipe;
    exports.HttpResponseInterceptor = HttpResponseInterceptor;
    exports.HttpStatusCodeService = HttpStatusCodeService;
    exports.Identity = Identity;
    exports.IdentityService = IdentityService;
    exports.Image = Image;
    exports.ImagePipe = ImagePipe;
    exports.ImageUrlPipe = ImageUrlPipe;
    exports.JsonFormatterComponent = JsonFormatterComponent;
    exports.Label = Label;
    exports.LabelDirective = LabelDirective;
    exports.LabelPipe = LabelPipe;
    exports.LabelService = LabelService;
    exports.LocalStorageService = LocalStorageService;
    exports.Logger = Logger;
    exports.LoggerComponent = LoggerComponent;
    exports.MenuItem = MenuItem;
    exports.MenuService = MenuService;
    exports.OUTLETS = OUTLETS;
    exports.OnceService = OnceService;
    exports.Outlet = Outlet;
    exports.OutletComponent = OutletComponent;
    exports.OutletDefaultComponent = OutletDefaultComponent;
    exports.OutletRepeaterComponent = OutletRepeaterComponent;
    exports.PublicPipe = PublicPipe;
    exports.RoutePipe = RoutePipe;
    exports.RouteService = RouteService;
    exports.SafeStylePipe = SafeStylePipe;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.SegmentPipe = SegmentPipe;
    exports.SessionStorageService = SessionStorageService;
    exports.SlugPipe = SlugPipe;
    exports.SlugService = SlugService;
    exports.StorageService = StorageService;
    exports.Taxonomy = Taxonomy;
    exports.Translate = Translate;
    exports.TranslateDirective = TranslateDirective;
    exports.TranslatePipe = TranslatePipe;
    exports.TranslateService = TranslateService;
    exports.TrustPipe = TrustPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=designr-core.umd.js.map
