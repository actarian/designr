(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/router'), require('@angular/common/http'), require('util'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@designr/core', ['exports', '@angular/forms', '@angular/router', '@angular/common/http', 'util', '@angular/common', '@angular/platform-browser', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.designr = global.designr || {}, global.designr.core = {}),global.ng.forms,global.ng.router,global.ng.common.http,global.util,global.ng.common,global.ng.platformBrowser,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,forms,i4,http,util,i1,i1$1,i0,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TIMEOUT = 5 * 60 * 1000;
    // five minutes
    /*
    export class StorageEvent extends Event {}

    export class CookieStorageEvent extends StorageEvent { }

    export class SessionStorageEvent extends StorageEvent { }

    export class LocalStorageEvent extends StorageEvent { }
    */
    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { };
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { return false; };
        /**
         * @param {?} name
         * @return {?}
         */
        StorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) { return null; };
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        StorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) { };
        /**
         * @return {?}
         */
        StorageService.prototype.on = /**
         * @return {?}
         */
            function () { return rxjs.of(null); };
        /**
         * @return {?}
         */
        StorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                // console.log('no StorageService available...');
                return this;
            };
        StorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
        return StorageService;
    }());
    var CookieStorageService = /** @class */ (function () {
        function CookieStorageService(platformId, storageService) {
            this.platformId = platformId;
            this.storageService = storageService;
        }
        /**
         * @return {?}
         */
        CookieStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('CookieStorageService.supported');
                    return this;
                }
                else {
                    return this.storageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                this.setter(name, '', -1);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CookieStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
                var cookieName = name + '=';
                /** @type {?} */
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    /** @type {?} */
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1, c.length);
                    }
                    if (c.indexOf(cookieName) === 0) {
                        /** @type {?} */
                        var value = c.substring(cookieName.length, c.length);
                        /** @type {?} */
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
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        CookieStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_1 = [];
                    /** @type {?} */
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
        /**
         * @return {?}
         */
        CookieStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
                // todo
                /** @type {?} */
                var interval = 1000;
                /** @type {?} */
                var timeout = TIMEOUT;
                /** @type {?} */
                var i;
                /** @type {?} */
                var elapsed = 0;
                /**
                 * @return {?}
                 */
                function checkCookie() {
                    if (elapsed > timeout) ;
                    else {
                        /** @type {?} */
                        var c = this.get(name);
                        if (c) ;
                        else {
                            elapsed += interval;
                            i = setTimeout(checkCookie, interval);
                        }
                    }
                }
                checkCookie();
                return rxjs.of(null);
            };
        /**
         * @private
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        CookieStorageService.prototype.setter = /**
         * @private
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                /** @type {?} */
                var expires;
                if (days) {
                    /** @type {?} */
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toUTCString();
                }
                else {
                    expires = '';
                }
                document.cookie = name + '=' + value + expires + '; path=/';
            };
        /**
         * @private
         * @return {?}
         */
        CookieStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                return i1.isPlatformBrowser(this.platformId);
            };
        CookieStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CookieStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: StorageService }
            ];
        };
        /** @nocollapse */ CookieStorageService.ngInjectableDef = i0.defineInjectable({ factory: function CookieStorageService_Factory() { return new CookieStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(StorageService)); }, token: CookieStorageService, providedIn: "root" });
        return CookieStorageService;
    }());
    var SessionStorageService = /** @class */ (function () {
        function SessionStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        /**
         * @return {?}
         */
        SessionStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('SessionStorageService.supported');
                    return this;
                }
                else {
                    return this.cookieStorageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                window.sessionStorage.removeItem(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return window.sessionStorage[name] !== undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        SessionStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
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
        /**
         * @return {?}
         */
        SessionStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
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
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        SessionStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_2 = [];
                    /** @type {?} */
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
        /**
         * @private
         * @return {?}
         */
        SessionStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var supported = false;
                if (i1.isPlatformBrowser(this.platformId)) {
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
        SessionStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SessionStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: CookieStorageService }
            ];
        };
        /** @nocollapse */ SessionStorageService.ngInjectableDef = i0.defineInjectable({ factory: function SessionStorageService_Factory() { return new SessionStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: SessionStorageService, providedIn: "root" });
        return SessionStorageService;
    }());
    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService(platformId, cookieStorageService) {
            this.platformId = platformId;
            this.cookieStorageService = cookieStorageService;
        }
        /**
         * @return {?}
         */
        LocalStorageService.prototype.tryGet = /**
         * @return {?}
         */
            function () {
                if (this.isSupported()) {
                    // console.log('LocalStorageService.supported');
                    return this;
                }
                else {
                    return this.cookieStorageService.tryGet();
                }
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.delete = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                window.localStorage.removeItem(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.exist = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return window.localStorage[name] !== undefined;
            };
        /**
         * @param {?} name
         * @return {?}
         */
        LocalStorageService.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                /** @type {?} */
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
        /**
         * @return {?}
         */
        LocalStorageService.prototype.on = /**
         * @return {?}
         */
            function () {
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
        /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
        LocalStorageService.prototype.set = /**
         * @param {?} name
         * @param {?} value
         * @param {?=} days
         * @return {?}
         */
            function (name, value, days) {
                try {
                    /** @type {?} */
                    var cache_3 = [];
                    /** @type {?} */
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
        /**
         * @private
         * @return {?}
         */
        LocalStorageService.prototype.isSupported = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var supported = false;
                if (i1.isPlatformBrowser(this.platformId)) {
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
        LocalStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LocalStorageService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: CookieStorageService }
            ];
        };
        /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: LocalStorageService, providedIn: "root" });
        return LocalStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var AuthStrategy = {
        Bearer: 0,
        Cookie: 1,
    };
    AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
    AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
    var AuthToken = /** @class */ (function () {
        function AuthToken(accessToken, expiresIn) {
            if (expiresIn === void 0) {
                expiresIn = 0;
            }
            this.accessToken = accessToken;
            this.expiresIn = expiresIn;
        }
        return AuthToken;
    }());
    var AuthService = /** @class */ (function () {
        function AuthService(platformId, injector, localStorageService) {
            this.platformId = platformId;
            this.injector = injector;
            this.localStorageService = localStorageService;
            this.cachedRequests = [];
            this.paths = [];
        }
        /**
         * @param {?} authToken
         * @return {?}
         */
        AuthService.prototype.setToken = /**
         * @param {?} authToken
         * @return {?}
         */
            function (authToken) {
                this.localStorageService.set('authToken', authToken);
                this.retryFailedRequests();
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getToken = /**
         * @return {?}
         */
            function () {
                return ( /** @type {?} */(this.localStorageService.get('authToken')));
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getFakeToken = /**
         * @return {?}
         */
            function () {
                return new AuthToken('fakeToken');
            };
        /**
         * @param {?} authToken
         * @return {?}
         */
        AuthService.prototype.isValid = /**
         * @param {?} authToken
         * @return {?}
         */
            function (authToken) {
                // return a boolean reflecting whether or not the token is expired
                return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.isAuthenticated = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var authToken = this.getToken();
                return this.isValid(authToken);
            };
        /**
         * @param {?} request
         * @return {?}
         */
        AuthService.prototype.collectFailedRequest = /**
         * @param {?} request
         * @return {?}
         */
            function (request) {
                this.cachedRequests.push(request);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.retryFailedRequests = /**
         * @return {?}
         */
            function () {
                // this method can be called after the token is refreshed
                // console.log('AuthService.retryFailedRequests');
                // retry the requests.
            };
        AuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.Injector },
                { type: LocalStorageService }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.INJECTOR), i0.inject(LocalStorageService)); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.authStrategy = AuthStrategy.Cookie;
            this.defaultLanguage = 'it';
            this.defaultMarket = 'it';
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
    /** @type {?} */
    var CORE_CONFIG = new i0.InjectionToken('core.config');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreService = /** @class */ (function () {
        function CoreService(options) {
            // console.log('CoreService', options);
            options = options || {};
            // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
            // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
            this.options = new CoreConfig(options);
        }
        CoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CoreService.ctorParameters = function () {
            return [
                { type: CoreConfig, decorators: [{ type: i0.Inject, args: [CORE_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(i0.inject(CORE_CONFIG)); }, token: CoreService, providedIn: "root" });
        return CoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultContentDirective = /** @class */ (function () {
        function DefaultContentDirective(element, container, renderer) {
            this.container = container;
            this.renderer = renderer;
            this.hasContent = true;
            this.element = element.nativeElement;
        }
        /**
         * @return {?}
         */
        DefaultContentDirective.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var hasContent = false;
                console.log('DefaultContentDirective', this.element.childNodes);
                for (var i = this.element.childNodes.length - 1; i >= 0; --i) {
                    /** @type {?} */
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
        DefaultContentDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[default]',
                    },] }
        ];
        /** @nocollapse */
        DefaultContentDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.ViewContainerRef },
                { type: i0.Renderer2 }
            ];
        };
        DefaultContentDirective.propDecorators = {
            default: [{ type: i0.Input }]
        };
        return DefaultContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CoreModuleComponent = /** @class */ (function () {
        function CoreModuleComponent() {
            this.version = '0.0.3';
        }
        /**
         * @return {?}
         */
        CoreModuleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CoreModuleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-module',
                        template: "<span class=\"core-module\">core {{version}}</span>"
                    }] }
        ];
        /** @nocollapse */
        CoreModuleComponent.ctorParameters = function () { return []; };
        return CoreModuleComponent;
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
    var DisposableComponent = /** @class */ (function () {
        function DisposableComponent() {
            this.unsubscribe = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        DisposableComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
                // console.log('DisposableComponent.ngOnDestroy', this);
            };
        DisposableComponent.decorators = [
            { type: i0.Component, args: [{
                        template: ''
                    }] }
        ];
        return DisposableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighlightPipe = /** @class */ (function () {
        function HighlightPipe() {
        }
        /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
        HighlightPipe.prototype.transform = /**
         * @param {?} text
         * @param {?} query
         * @return {?}
         */
            function (text, query) {
                if (!query) {
                    return text;
                }
                text = this.encodeHTML(text);
                query = this.encodeHTML(query);
                /** @type {?} */
                var regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
                return text.replace(regExp, function (match) {
                    return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
                });
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.escapeRegexChars = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.safeToString = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return text === undefined || text === null ? '' : text.toString().trim();
            };
        /**
         * @param {?} text
         * @return {?}
         */
        HighlightPipe.prototype.encodeHTML = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return this.safeToString(text)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
            };
        HighlightPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'highlight',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ HighlightPipe.ngInjectableDef = i0.defineInjectable({ factory: function HighlightPipe_Factory() { return new HighlightPipe(); }, token: HighlightPipe, providedIn: "root" });
        return HighlightPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggerError = /** @class */ (function (_super) {
        __extends(LoggerError, _super);
        function LoggerError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LoggerError;
    }(http.HttpErrorResponse));
    var Logger = /** @class */ (function () {
        function Logger(coreService) {
            this.coreService = coreService;
            this.logs = [];
            //
        }
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.request = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.coreService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.log = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.coreService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.warn = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.coreService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
                }
            };
        /**
         * @param {...?} args
         * @return {?}
         */
        Logger.prototype.error = /**
         * @param {...?} args
         * @return {?}
         */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!this.coreService.options.production) {
                    /** @type {?} */
                    var s = args.join(', ');
                    this.logs.push(s);
                    console.error.apply(console, args);
                }
            };
        /**
         * @param {?} error
         * @return {?}
         */
        Logger.prototype.http = /**
         * @param {?} error
         * @return {?}
         */
            function (error) {
                this.httpError = error;
                if (!this.coreService.options.production) {
                    this.logs.push(error.message);
                }
                console.warn('Logger.http.error', error.status, error.statusText, error.url);
            };
        /**
         * @return {?}
         */
        Logger.prototype.clear = /**
         * @return {?}
         */
            function () {
                this.httpError = null;
                this.logs = [];
            };
        Logger.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        Logger.ctorParameters = function () {
            return [
                { type: CoreService }
            ];
        };
        /** @nocollapse */ Logger.ngInjectableDef = i0.defineInjectable({ factory: function Logger_Factory() { return new Logger(i0.inject(CoreService)); }, token: Logger, providedIn: "root" });
        return Logger;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SegmentPipe = /** @class */ (function () {
        function SegmentPipe(location) {
            this.location = location;
        }
        /**
         * @param {?} segments
         * @return {?}
         */
        SegmentPipe.prototype.transform = /**
         * @param {?} segments
         * @return {?}
         */
            function (segments) {
                segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
                /** @type {?} */
                var path = segments.join('/');
                path = this.location.normalize(path);
                if (path.indexOf('/') !== 0) {
                    path = "/" + path;
                }
                segments = path.split('/');
                return segments;
            };
        SegmentPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'segment',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SegmentPipe.ctorParameters = function () {
            return [
                { type: i1.Location }
            ];
        };
        /** @nocollapse */ SegmentPipe.ngInjectableDef = i0.defineInjectable({ factory: function SegmentPipe_Factory() { return new SegmentPipe(i0.inject(i1.Location)); }, token: SegmentPipe, providedIn: "root" });
        return SegmentPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiRequestOptions = /** @class */ (function () {
        function ApiRequestOptions(options) {
            this.headers = new http.HttpHeaders({
                'Content-Type': 'application/json'
            });
            this.params = options ? new http.HttpParams(options) : null;
        }
        return ApiRequestOptions;
    }());
    /**
     * @template T
     */
    var ApiService = /** @class */ (function () {
        function ApiService(injector) {
            this.injector = injector;
        }
        Object.defineProperty(ApiService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "logger", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._logger) {
                    this._logger = this.injector.get(Logger);
                }
                return this._logger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "http", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._http) {
                    this._http = this.injector.get(http.HttpClient);
                }
                return this._http;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._state) {
                    this._state = this.injector.get(i1$1.TransferState);
                }
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "platformId", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._platformId) {
                    this._platformId = this.injector.get(i0.PLATFORM_ID);
                }
                return this._platformId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._config) {
                    this._config = this.injector.get(CoreService).options;
                }
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "origin", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._origin) {
                    this._origin = this.config.origin;
                }
                return this._origin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApiService.prototype, "url", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var base = this.origin;
                /** @type {?} */
                var collection = this.collection.toLowerCase();
                if (collection.indexOf('http') === 0) {
                    base = '';
                }
                return "" + base + collection;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} method
         * @return {?}
         */
        ApiService.prototype.getUrl = /**
         * @param {?=} method
         * @return {?}
         */
            function (method) {
                if (method === void 0) {
                    method = '';
                }
                return "" + this.url + method;
            };
        /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
        ApiService.prototype.get = /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
            function (first, second) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var params = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.get(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.post = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.post(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.put = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = ( /** @type {?} */((typeof first === 'object' ? first : second)));
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.put(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.patch = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = ( /** @type {?} */((typeof first === 'object' ? first : second)));
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.patch(url, model, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.delete = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var identity = ( /** @type {?} */((typeof first !== 'string' ? first : second)));
                /** @type {?} */
                var id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                return this.http.delete(url, options).pipe(operators.tap(function (x) { return _this.logger.request(url); }));
            };
        /**
         * @param {?} input
         * @return {?}
         */
        ApiService.prototype.toCamelCase = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                var _this = this;
                /** @type {?} */
                var output;
                /** @type {?} */
                var key;
                /** @type {?} */
                var keyCamelCase;
                /** @type {?} */
                var value;
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
        // TRANSFER STATE
        /**
         * @param {?} url
         * @param {?} model
         * @return {?}
         */
        ApiService.prototype.getStateKey =
            // TRANSFER STATE
            /**
             * @param {?} url
             * @param {?} model
             * @return {?}
             */
            function (url, model) {
                /** @type {?} */
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
                /** @type {?} */
                var key = url.replace(/(\W)/gm, '_');
                // this.logger.log('ApiService.getStateKey.key', key);
                return i1$1.makeStateKey(key);
            };
        /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
        ApiService.prototype.stateGet = /**
         * @param {?=} first
         * @param {?=} second
         * @return {?}
         */
            function (first, second) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var params = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                /** @type {?} */
                var stateKey = this.getStateKey(url, params);
                if (i1.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                    /** @type {?} */
                    var cached = this.state.get(stateKey, null);
                    this.state.remove(stateKey);
                    return rxjs.of(cached);
                }
                else {
                    return this.http.get(url, options).pipe(operators.tap(function (x) {
                        if (i1.isPlatformServer(_this.platformId)) {
                            _this.state.onSerialize(stateKey, function () { return x; });
                        }
                    }));
                }
            };
        /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
        ApiService.prototype.statePost = /**
         * @param {?} first
         * @param {?=} second
         * @param {?=} third
         * @return {?}
         */
            function (first, second, third) {
                var _this = this;
                /** @type {?} */
                var method = (typeof first === 'string' ? first : '');
                /** @type {?} */
                var model = (typeof first === 'object' ? first : second);
                /** @type {?} */
                var params = (typeof second === 'object' ? second : third);
                /** @type {?} */
                var url = this.getUrl(method);
                /** @type {?} */
                var options = new ApiRequestOptions(params);
                /** @type {?} */
                var stateKey = this.getStateKey(url, model);
                if (i1.isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
                    /** @type {?} */
                    var cached = this.state.get(stateKey, null);
                    this.state.remove(stateKey);
                    return rxjs.of(cached);
                }
                else {
                    return this.http.post(url, model, options).pipe(operators.tap(function (x) {
                        if (i1.isPlatformServer(_this.platformId)) {
                            _this.state.onSerialize(stateKey, function () { return x; });
                        }
                    }));
                }
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i0.INJECTOR)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var TranslateService = /** @class */ (function (_super) {
        __extends(TranslateService, _super);
        function TranslateService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            // private cache: { [key: string]: string; } = {};
            _this.events = new i0.EventEmitter();
            _this.cache = {};
            _this._language = new rxjs.BehaviorSubject({});
            _this.language = _this._language.asObservable();
            _this._languages = new rxjs.BehaviorSubject([]);
            _this.languages = _this._languages.asObservable();
            _this._languages.next(_this.config.languages);
            _this._lang = _this.config.defaultLanguage;
            _this.getTranslation(_this.lang).subscribe(function (x) {
                // console.log(x);
            });
            return _this;
        }
        Object.defineProperty(TranslateService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/translate';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TranslateService.prototype, "lang", {
            get: /**
             * @return {?}
             */ function () {
                return this._lang;
            },
            set: /**
             * @param {?} lang
             * @return {?}
             */ function (lang) {
                if (lang !== this._lang) {
                    this._lang = lang;
                    /** @type {?} */
                    var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                    this._language.next(language);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.getTranslation = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                var _this = this;
                if (!lang || !lang.trim()) {
                    return rxjs.of(null);
                }
                this.lang = lang;
                if (this.cache[lang]) {
                    return rxjs.of(this.cache[lang]);
                }
                else {
                    return this.get({ lang: lang }).pipe(operators.take(1), operators.map(function (x) {
                        if (x[0]) {
                            /** @type {?} */
                            var labels = x[0].labels;
                            _this.cache[lang] = labels;
                            _this.events.emit(labels);
                            return labels;
                        }
                        else {
                            return rxjs.of(null);
                        }
                    }));
                }
            };
        /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        TranslateService.prototype.getTranslate = /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (key, defaultValue, params) {
                /** @type {?} */
                var value = null;
                /** @type {?} */
                var labels = this.cache[this.lang];
                if (labels) {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var k = keys.shift();
                    while (keys.length > 0 && labels[k]) {
                        labels = labels[k];
                        k = keys.shift();
                    }
                    value = labels[k] || "{" + k + "}";
                }
                return this.parseTranslate(value, key, defaultValue, params);
            };
        /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        TranslateService.prototype.parseTranslate = /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (value, key, defaultValue, params) {
                if (value == null) {
                    value = defaultValue;
                }
                if (value == null) {
                    return this.missingTranslate(key);
                }
                else if (params) {
                    return this.parseParams(value, params);
                }
                return value;
            };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        TranslateService.prototype.missingTranslate = /**
         * @private
         * @param {?} key
         * @return {?}
         */
            function (key) {
                console.log('missingTranslate', key, this.missingHandler);
                if (this.missingHandler) {
                    return typeof this.missingHandler === 'function' ?
                        this.missingHandler(key) :
                        this.missingHandler;
                }
                console.log('missingTranslate', key);
                return key;
            };
        /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
        TranslateService.prototype.parseParams = /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
            function (value, params) {
                /** @type {?} */
                var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
                return value.replace(TEMPLATE_REGEXP, function (text, key) {
                    /** @type {?} */
                    var replacer = ( /** @type {?} */(params[key]));
                    return typeof replacer !== 'undefined' ? replacer : text;
                });
            };
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.setDefaultLang = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @param {?} lang
         * @return {?}
         */
        TranslateService.prototype.addLangs = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
            };
        /**
         * @return {?}
         */
        TranslateService.prototype.getBrowserLang = /**
         * @return {?}
         */
            function () {
                return 'it';
            };
        TranslateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TranslateService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
        return TranslateService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            get: /**
             * @private
             * @return {?}
             */ function () {
                return this._lang;
            },
            set: /**
             * @private
             * @param {?} lang
             * @return {?}
             */ function (lang) {
                if (lang !== this._lang) {
                    this._lang = lang;
                    /** @type {?} */
                    var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
                    if (this.coreService.options.useLang) {
                        /** @type {?} */
                        var _lang = this._lang;
                        /** @type {?} */
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
            get: /**
             * @return {?}
             */ function () {
                return this._lang;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        RouteService.prototype.getPageParams = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('RouteService.getPageParams', this.router.url);
                return this.route.queryParams.pipe(operators.distinctUntilChanged(), operators.switchMap(function (params) {
                    // console.log(params);
                    /** @type {?} */
                    var parsed = _this.parseParams(params);
                    _this.pageParams$.next(parsed);
                    return rxjs.of(parsed);
                }));
            };
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.parseParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                /** @type {?} */
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
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.serializeParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                /** @type {?} */
                var serialized = {};
                Object.keys(params).forEach(function (k) { return serialized[k] = _this.serialize(params[k]); });
                return serialized;
            };
        /**
         * @param {?} base64
         * @return {?}
         */
        RouteService.prototype.parse = /**
         * @param {?} base64
         * @return {?}
         */
            function (base64) {
                try {
                    if (i1.isPlatformBrowser(this.platformId)) {
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
        /**
         * @param {?} object
         * @return {?}
         */
        RouteService.prototype.serialize = /**
         * @param {?} object
         * @return {?}
         */
            function (object) {
                if (i1.isPlatformBrowser(this.platformId)) {
                    return window.btoa(JSON.stringify(object));
                }
                else {
                    return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
                }
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getId = /**
         * @return {?}
         */
            function () {
                return +this.route.snapshot.paramMap.get('id');
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getSlug = /**
         * @return {?}
         */
            function () {
                return this.route.snapshot.paramMap.get('slug');
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toRoute = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                if (this.coreService.options.useMarket) {
                    /** @type {?} */
                    var market = this.currentMarket;
                    /** @type {?} */
                    var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                    segments.splice(marketIndex, 0, market);
                }
                if (this.coreService.options.useLang) {
                    /** @type {?} */
                    var lang = this._lang;
                    /** @type {?} */
                    var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    segments.splice(langIndex, 0, lang);
                }
                // console.log('RouteService.toRoute', segments);
                return segments;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toSlug = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                /** @type {?} */
                var paths = segments.filter(function (x) {
                    return typeof x === 'string';
                });
                /** @type {?} */
                var datas = segments.filter(function (x) {
                    return typeof x !== 'string';
                });
                if (this.coreService.options.useMarket) {
                    /** @type {?} */
                    var marketIndex = this.urlStrategy.split('/').indexOf(':market');
                    if (paths.length > marketIndex) {
                        paths[marketIndex] = '*';
                    }
                }
                if (this.coreService.options.useLang) {
                    /** @type {?} */
                    var langIndex = this.urlStrategy.split('/').indexOf(':lang');
                    if (paths.length > langIndex) {
                        paths[langIndex] = '*';
                    }
                }
                paths = paths.join('/').replace(/\/\*/gi, '').split('/');
                // console.log('RouteService.toSlug', data, paths);
                return paths.concat(datas);
            };
        /**
         * @param {?} data
         * @return {?}
         */
        RouteService.prototype.toParams = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return {
                    data: window.btoa(JSON.stringify(data))
                };
            };
        /**
         * @param {?} params
         * @return {?}
         */
        RouteService.prototype.toData = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
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
        /**
         * @param {?} lang
         * @param {?=} silent
         * @return {?}
         */
        RouteService.prototype.setLanguage = /*
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
            /**
             * @param {?} lang
             * @param {?=} silent
             * @return {?}
             */
            function (lang, silent) {
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
        // PRIVATE METHODS
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.setLanguages =
            // PRIVATE METHODS
            /**
             * @private
             * @return {?}
             */
            function () {
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
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.subscribeToRouter = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.router.events.pipe(operators.filter(function (event) { return event instanceof i4.NavigationStart; })).subscribe(function (event) {
                    /** @type {?} */
                    var location = _this.location.normalize(event.url).split('/');
                    if (_this.coreService.options.useMarket) {
                        /** @type {?} */
                        var marketIndex = _this.urlStrategy.split('/').indexOf(':market');
                        /** @type {?} */
                        var market = location[marketIndex];
                        if (market !== _this.currentMarket) {
                            _this.currentMarket = market;
                            // console.log('RouteService.setMarket', market, event.url);
                        }
                    }
                    if (_this.coreService.options.useLang) {
                        /** @type {?} */
                        var langIndex = _this.urlStrategy.split('/').indexOf(':lang');
                        /** @type {?} */
                        var lang_1 = location[langIndex];
                        if (lang_1 !== _this._lang) {
                            /** @type {?} */
                            var language = _this._languages.getValue().find(function (x) { return x.lang === lang_1; });
                            _this._language.next(language);
                            _this.translateService.use(lang_1);
                            // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                        }
                    }
                });
            };
        /**
         * @private
         * @return {?}
         */
        RouteService.prototype.detectLanguage = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var acceptLanguage = null;
                if (i1.isPlatformServer(this.platformId)) {
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
                    /** @type {?} */
                    var request = this.injector.get('request');
                    if (request) {
                        acceptLanguage = request.headers['accept-language'];
                        /** @type {?} */
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
                else if (i1.isPlatformBrowser(this.platformId)) {
                    acceptLanguage = this.translateService.getBrowserLang();
                    // console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
                }
                /** @type {?} */
                var detectedLanguage = this.coreService.options.defaultLanguage;
                /** @type {?} */
                var regexp = new RegExp("(" + (this.coreService.options.languages ? this.coreService.options.languages.map(function (x) { return x.lang; }).join('|') : '') + ")", 'gi');
                /** @type {?} */
                var match = (acceptLanguage || '').match(regexp);
                detectedLanguage = match ? match[0] : detectedLanguage;
                // console.log('RouteService.detectLanguage', detectedLanguage);
                return detectedLanguage;
            };
        /**
         * @return {?}
         */
        RouteService.prototype.getTime = /**
         * @return {?}
         */
            function () {
                if (i1.isPlatformBrowser(this.platformId)) {
                    return (performance || Date).now();
                }
                else {
                    /** @type {?} */
                    var time = process.hrtime();
                    return (time[0] * 1e9 + time[1]) / 1e6;
                }
            };
        /**
         * @return {?}
         */
        RouteService.prototype.start = /**
         * @return {?}
         */
            function () {
                RouteService.startTime = this.getTime();
            };
        /**
         * @return {?}
         */
        RouteService.prototype.end = /**
         * @return {?}
         */
            function () {
                RouteService.endTime = this.getTime();
                console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
            };
        RouteService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RouteService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: CoreService },
                { type: i0.Injector },
                { type: TranslateService },
                { type: i1.Location },
                { type: i4.ActivatedRoute },
                { type: i4.Router },
                { type: SegmentPipe }
            ];
        };
        /** @nocollapse */ RouteService.ngInjectableDef = i0.defineInjectable({ factory: function RouteService_Factory() { return new RouteService(i0.inject(i0.PLATFORM_ID), i0.inject(CoreService), i0.inject(i0.INJECTOR), i0.inject(TranslateService), i0.inject(i1.Location), i0.inject(i4.ActivatedRoute), i0.inject(i4.Router), i0.inject(SegmentPipe)); }, token: RouteService, providedIn: "root" });
        return RouteService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpStatusCodeService = /** @class */ (function () {
        function HttpStatusCodeService() {
            this.statusCode = 200;
            this.redirectUrl = null;
        }
        /**
         * @param {?} statusCode
         * @param {?=} redirectUrl
         * @return {?}
         */
        HttpStatusCodeService.prototype.setStatusCode = /**
         * @param {?} statusCode
         * @param {?=} redirectUrl
         * @return {?}
         */
            function (statusCode, redirectUrl) {
                if (redirectUrl === void 0) {
                    redirectUrl = null;
                }
                this.statusCode = statusCode;
                this.redirectUrl = redirectUrl;
            };
        /**
         * @return {?}
         */
        HttpStatusCodeService.prototype.getStatusCode = /**
         * @return {?}
         */
            function () {
                return (this.statusCode === 309 ? 301 : this.statusCode);
            };
        /**
         * @return {?}
         */
        HttpStatusCodeService.prototype.getRedirectUrl = /**
         * @return {?}
         */
            function () {
                return this.redirectUrl;
            };
        HttpStatusCodeService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        HttpStatusCodeService.ctorParameters = function () { return []; };
        return HttpStatusCodeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpResponseInterceptor = /** @class */ (function () {
        function HttpResponseInterceptor(injector, statusCodeService) {
            this.injector = injector;
            this.statusCodeService = statusCodeService;
        }
        Object.defineProperty(HttpResponseInterceptor.prototype, "logger", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._logger) {
                    this._logger = this.injector.get(Logger);
                }
                return this._logger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "router", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._router) {
                    this._router = this.injector.get(i4.Router);
                }
                return this._router;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpResponseInterceptor.prototype, "routeService", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._routeService) {
                    this._routeService = this.injector.get(RouteService);
                }
                return this.routeService;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        HttpResponseInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                // injecting request
                // parsing response
                return next.handle(request).pipe(operators.tap(function (event) {
                    // console.log('HttpResponseInterceptor', event);
                    _this.logger.httpError = null;
                    // this.logger.log(event);
                    /*
                    if (event instanceof HttpResponse) {
                        // console.log('event instanceof HttpResponse');
                        // do stuff with response if you want
                    }
                    */
                }), operators.catchError(function (error) {
                    // console.warn('HttpResponseInterceptor', error);
                    if (error instanceof http.HttpErrorResponse) {
                        // this.statusCodeService.setStatusCode(error.status);
                        switch (error.status) {
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
                                _this.logger.http(error);
                                break;
                        }
                    }
                    return rxjs.throwError(error);
                }));
            };
        HttpResponseInterceptor.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpResponseInterceptor.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: HttpStatusCodeService }
            ];
        };
        /** @nocollapse */ HttpResponseInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function HttpResponseInterceptor_Factory() { return new HttpResponseInterceptor(i0.inject(i0.INJECTOR), i0.inject(HttpStatusCodeService)); }, token: HttpResponseInterceptor, providedIn: "root" });
        return HttpResponseInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import JSONFormatter from 'json-formatter-js';
    var JsonFormatterComponent = /** @class */ (function () {
        function JsonFormatterComponent(platformId) {
            this.platformId = platformId;
        }
        /**
         * @return {?}
         */
        JsonFormatterComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (i1.isPlatformBrowser(this.platformId)) {
                    if (!util.isObject(this.json) && !util.isArray(this.json)) {
                        return;
                    }
                    // console.log('JsonFormatterComponent', this.json);
                    if (this.elementRef) {
                        this.input.nativeElement.removeChild(this.elementRef.nativeElement);
                    }
                    /** @type {?} */
                    var JSONFormatter = require('json-formatter-js').default;
                    /** @type {?} */
                    var formatter = new JSONFormatter(this.json);
                    /** @type {?} */
                    var elementRef = formatter.render();
                    this.input.nativeElement.appendChild(elementRef);
                    this.elementRef = new i0.ElementRef(elementRef);
                }
            };
        JsonFormatterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'json-formatter',
                        template: "<div #jsonFormatter></div>",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        JsonFormatterComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        JsonFormatterComponent.propDecorators = {
            input: [{ type: i0.ViewChild, args: ["jsonFormatter",] }],
            json: [{ type: i0.Input }]
        };
        return JsonFormatterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var LabelService = /** @class */ (function (_super) {
        __extends(LabelService, _super);
        function LabelService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            // !!! new async pipe
            _this.collectedKeys = {};
            _this.cache = {};
            _this.labels$ = new rxjs.Subject();
            _this.emitter = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(LabelService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/label';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        LabelService.prototype.parseLabel = /**
         * @private
         * @param {?} value
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (value, key, defaultValue, params) {
                console.log('parseLabel', value, key, defaultValue, params);
                if (value == null) {
                    value = defaultValue;
                }
                if (value == null) {
                    return this.missingLabel(key);
                }
                else if (params) {
                    return this.parseParams(value, params);
                }
                return value;
            };
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        LabelService.prototype.missingLabel = /**
         * @private
         * @param {?} key
         * @return {?}
         */
            function (key) {
                console.log('missingLabel', key, this.missingHandler);
                if (this.missingHandler) {
                    return typeof this.missingHandler === 'function' ?
                        this.missingHandler(key) :
                        this.missingHandler;
                }
                console.log('missingLabel', key);
                return key;
            };
        /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
        LabelService.prototype.parseParams = /**
         * @private
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
            function (value, params) {
                /** @type {?} */
                var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
                return value.replace(TEMPLATE_REGEXP, function (text, key) {
                    /** @type {?} */
                    var replacer = ( /** @type {?} */(params[key]));
                    return typeof replacer !== 'undefined' ? replacer : text;
                });
            };
        /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
        LabelService.prototype.getKey = /**
         * @param {?} key
         * @param {?=} defaultValue
         * @param {?=} params
         * @return {?}
         */
            function (key, defaultValue, params) {
                var _this = this;
                if (this.cache.hasOwnProperty(key)) {
                    return rxjs.of(this.cache[key]);
                }
                else {
                    Object.defineProperty(this.collectedKeys, key, {
                        value: { id: key, defaultValue: defaultValue },
                        enumerable: true,
                        writable: false,
                    });
                    this.cache[key] = null;
                }
                return this.labels$.pipe(operators.map(function (items) { return items[key] || null; }), operators.filter(function (label) { return label !== null; }), 
                // tap(label => console.log('getKey', key, label)),
                operators.map(function (label) { return _this.parseLabel(label, key, defaultValue, params); }));
            };
        /**
         * @return {?}
         */
        LabelService.prototype.register = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.emitter.pipe(
                // throttleTime(500),
                operators.tap(function () {
                    _this.collectKeys().pipe(operators.first()).subscribe(function (keys) {
                        // console.log('LabelService.collected', keys);
                    });
                }));
            };
        /**
         * @return {?}
         */
        LabelService.prototype.collect = /**
         * @return {?}
         */
            function () {
                if (Object.keys(this.collectedKeys).length) {
                    this.emitter.emit();
                }
            };
        /**
         * @private
         * @return {?}
         */
        LabelService.prototype.collectKeys = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var keys = Object.keys(this.collectedKeys).map(function (x) { return _this.collectedKeys[x]; });
                this.collectedKeys = {};
                if (keys.length) {
                    return this.statePost(keys).pipe(operators.map(function (keys) {
                        // console.log('LabelService.collectKeys', JSON.stringify(keys));
                        /** @type {?} */
                        var items = {};
                        keys.forEach(function (x) { return items[x.id] = x.value || x.defaultValue || x.id; });
                        return items;
                    }), operators.tap(function (items) {
                        Object.assign(_this.cache, items);
                        _this.labels$.next(_this.cache);
                        // console.log('collectKeys', this.cache);
                    }), operators.catchError(function (error) {
                        // console.log('LabelService.collectKeys.error', error);
                        return rxjs.of({});
                    }));
                    /*
                    return this.post(`/api/i18n/labels`, keys).pipe(
                        map((keys: LabelKey[]) => {
                            const items = {};
                            keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                            return items;
                        }),
                        tap((items: { [key: string]: string; }) => {
                            Object.assign(this.cache, items);
                            this.labels$.next(this.cache);
                            // console.log('collectKeys', this.cache);
                        }),
                    );
                    */
                }
                else {
                    return rxjs.of({});
                }
            };
        LabelService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LabelService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ LabelService.ngInjectableDef = i0.defineInjectable({ factory: function LabelService_Factory() { return new LabelService(i0.inject(i0.INJECTOR)); }, token: LabelService, providedIn: "root" });
        return LabelService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelDirective = /** @class */ (function (_super) {
        __extends(LabelDirective, _super);
        function LabelDirective(element, labelService) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.labelService = labelService;
            return _this;
        }
        /**
         * @return {?}
         */
        LabelDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
                this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (label) {
                    _this.element.nativeElement.innerHTML = label;
                    // console.log('LabelDirective.ngOnInit', label);
                });
                // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
            };
        LabelDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[label]'
                    },] }
        ];
        /** @nocollapse */
        LabelDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: LabelService }
            ];
        };
        LabelDirective.propDecorators = {
            label: [{ type: i0.Input }],
            labelParams: [{ type: i0.Input }]
        };
        return LabelDirective;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomAsyncPipe = /** @class */ (function () {
        function CustomAsyncPipe(changeDetector) {
            this.changeDetector = changeDetector;
            this.subject = null;
            this.subscription = null;
            this.value = null;
            this.cachedValue = null;
        }
        /**
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype.transform = /**
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
                return this.observableToValue(subject);
            };
        /**
         * @private
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype.observableToValue = /**
         * @private
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
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
                    return i0.WrappedValue.wrap(this.value); // notify that value has changed
                }
                return this.cachedValue; // return cachedValue
            };
        /**
         * @return {?}
         */
        CustomAsyncPipe.prototype.dispose = /**
         * @return {?}
         */
            function () {
                if (this.subscription) {
                    this.subscription.unsubscribe();
                }
                this.value = null;
                this.cachedValue = null;
                this.subscription = null;
                this.subject = null;
            };
        /**
         * @return {?}
         */
        CustomAsyncPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.dispose();
            };
        /**
         * @private
         * @param {?} subject
         * @return {?}
         */
        CustomAsyncPipe.prototype._observableToValue = /**
         * @private
         * @param {?} subject
         * @return {?}
         */
            function (subject) {
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
                    return this.transform(( /** @type {?} */(subject)));
                }
                if (this.value === this.cachedValue) {
                    return this.cachedValue;
                }
                this.cachedValue = this.value;
                return i0.WrappedValue.wrap(this.value); // value has changed
            };
        CustomAsyncPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'customAsync',
                        pure: false
                    },] }
        ];
        /** @nocollapse */
        CustomAsyncPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        return CustomAsyncPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelPipe = /** @class */ (function () {
        function LabelPipe(changeDetector, labelService) {
            this.changeDetector = changeDetector;
            this.labelService = labelService;
            this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
        }
        /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
        LabelPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
            function (key, text, params) {
                return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
            };
        /**
         * @return {?}
         */
        LabelPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.asyncPipe.dispose();
            };
        LabelPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'label',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LabelPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: LabelService }
            ];
        };
        /** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(LabelService)); }, token: LabelPipe, providedIn: "root" });
        return LabelPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoggerComponent = /** @class */ (function () {
        function LoggerComponent(logger) {
            this.logger = logger;
        }
        /**
         * @return {?}
         */
        LoggerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoggerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'core-logger',
                        template: "<div class=\"error-http\" *ngIf=\"logger.httpError\">\n\t<span>error</span>&nbsp;\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\n</div>\n<!--\n<div *ngIf=\"logger.logs.length\">\n\t<ul class=\"list-group \">\n\t\t<li class=\"list-group-item\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\n\t\t\t<span>{{log}}</span>\n\t\t</li>\n\t</ul>\n\t<br>\n</div>\n-->\n",
                        encapsulation: i0.ViewEncapsulation.Emulated,
                        styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
                    }] }
        ];
        /** @nocollapse */
        LoggerComponent.ctorParameters = function () {
            return [
                { type: Logger }
            ];
        };
        return LoggerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EventDispatcherService = /** @class */ (function () {
        function EventDispatcherService() {
            this.emitter = new i0.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        EventDispatcherService.prototype.emit = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this.emitter.emit(event);
            };
        /**
         * @return {?}
         */
        EventDispatcherService.prototype.observe = /**
         * @return {?}
         */
            function () {
                return this.emitter.pipe(operators.tap(function (event) { return console.log('EventDispatcherService', event); }));
            };
        EventDispatcherService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EventDispatcherService.ctorParameters = function () { return []; };
        /** @nocollapse */ EventDispatcherService.ngInjectableDef = i0.defineInjectable({ factory: function EventDispatcherService_Factory() { return new EventDispatcherService(); }, token: EventDispatcherService, providedIn: "root" });
        return EventDispatcherService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var IdentityService = /** @class */ (function (_super) {
        __extends(IdentityService, _super);
        function IdentityService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(IdentityService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/identity';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        IdentityService.prototype.getList = /**
         * @return {?}
         */
            function () {
                return this.get();
            };
        /**
         * @template Data
         * @param {?} id
         * @return {?}
         */
        IdentityService.prototype.getDetailByIdNo404 = /**
         * @template Data
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.get({ id: id }).pipe(operators.map(function (identities) { return identities[0]; }));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        IdentityService.prototype.getDetailById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.get({ id: id });
            };
        /**
         * @param {?} identity
         * @return {?}
         */
        IdentityService.prototype.add = /**
         * @param {?} identity
         * @return {?}
         */
            function (identity) {
                return this.post(identity);
            };
        /**
         * @param {?} identity
         * @return {?}
         */
        IdentityService.prototype.update = /**
         * @param {?} identity
         * @return {?}
         */
            function (identity) {
                return this.put(identity);
            };
        IdentityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        IdentityService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ IdentityService.ngInjectableDef = i0.defineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.inject(i0.INJECTOR)); }, token: IdentityService, providedIn: "root" });
        return IdentityService;
    }(ApiService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var EntityService = /** @class */ (function (_super) {
        __extends(EntityService, _super);
        function EntityService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(EntityService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/entity';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @return {?}
         */
        EntityService.prototype.getDetailByName = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (!name.trim()) {
                    return rxjs.of([]);
                }
                return this.get({ name: name });
            };
        EntityService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i0.INJECTOR)); }, token: EntityService, providedIn: "root" });
        return EntityService;
    }(IdentityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuService = /** @class */ (function (_super) {
        __extends(MenuService, _super);
        function MenuService(injector) {
            var _this = _super.call(this, injector) || this;
            _this.injector = injector;
            return _this;
        }
        Object.defineProperty(MenuService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/menu';
            },
            enumerable: true,
            configurable: true
        });
        MenuService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MenuService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i0.INJECTOR)); }, token: MenuService, providedIn: "root" });
        return MenuService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // export class OnceEvent extends Event { }
    var OnceService = /** @class */ (function () {
        function OnceService(platformId, zone) {
            this.platformId = platformId;
            this.zone = zone;
            this.uid = 0;
            this.paths = [];
        }
        /**
         * @param {?} url
         * @param {?=} callback
         * @return {?}
         */
        OnceService.prototype.script = /**
         * @param {?} url
         * @param {?=} callback
         * @return {?}
         */
            function (url, callback) {
                if (i1.isPlatformBrowser(this.platformId)) {
                    // !!! this.zone.runOutsideAngular(() => {
                    if (this.paths.indexOf(url) === -1) {
                        this.paths.push(url);
                        /** @type {?} */
                        var callbackName_1;
                        if (callback === true) {
                            callbackName_1 = 'OnceCallback' + (++this.uid);
                            url = url.split('{{callback}}').join(callbackName_1);
                        }
                        else {
                            callbackName_1 = ( /** @type {?} */(callback));
                        }
                        /** @type {?} */
                        var callback$ = void 0;
                        /** @type {?} */
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
                            callback$ = rxjs.fromEvent(element, 'load').pipe(operators.map(function (x) { return ( /** @type {?} */(x)); }));
                        }
                        /** @type {?} */
                        var scripts = document.getElementsByTagName('script');
                        if (scripts.length) {
                            /** @type {?} */
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
        OnceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OnceService.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ OnceService.ngInjectableDef = i0.defineInjectable({ factory: function OnceService_Factory() { return new OnceService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: OnceService, providedIn: "root" });
        return OnceService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AssetPipe = /** @class */ (function () {
        function AssetPipe(coreService, segment) {
            this.coreService = coreService;
            this.segment = segment;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        AssetPipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
                    return data;
                }
                else {
                    /** @type {?} */
                    var segments = this.segment.transform(data);
                    segments.unshift(this.coreService.options.assets);
                    return segments.join('/');
                }
            };
        AssetPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'asset',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AssetPipe.ctorParameters = function () {
            return [
                { type: CoreService },
                { type: SegmentPipe }
            ];
        };
        /** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(CoreService), i0.inject(SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
        return AssetPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ImageType = {
        Default: 1,
        Gallery: 2,
        Share: 3,
    };
    ImageType[ImageType.Default] = 'Default';
    ImageType[ImageType.Gallery] = 'Gallery';
    ImageType[ImageType.Share] = 'Share';
    var Image = /** @class */ (function () {
        function Image() {
        }
        return Image;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImageUrlPipe = /** @class */ (function () {
        function ImageUrlPipe() {
        }
        /**
         * @param {?} images
         * @param {?=} type
         * @param {?=} queryString
         * @return {?}
         */
        ImageUrlPipe.prototype.transform = /**
         * @param {?} images
         * @param {?=} type
         * @param {?=} queryString
         * @return {?}
         */
            function (images, type, queryString) {
                type = type || 'Default';
                queryString = queryString ? "?" + queryString : '';
                /** @type {?} */
                var imageType = ImageType[type] || ImageType.Default;
                /** @type {?} */
                var image = null;
                if (images && images.length) {
                    image = images.find(function (i) { return i.type === imageType; }) || images[0];
                }
                return image ? (image.url + queryString).replace(/ /g, '%20') : null;
            };
        ImageUrlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'imageUrl',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ImageUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function ImageUrlPipe_Factory() { return new ImageUrlPipe(); }, token: ImageUrlPipe, providedIn: "root" });
        return ImageUrlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ImagePipe = /** @class */ (function () {
        function ImagePipe() {
        }
        /**
         * @param {?} images
         * @param {?=} type
         * @return {?}
         */
        ImagePipe.prototype.transform = /**
         * @param {?} images
         * @param {?=} type
         * @return {?}
         */
            function (images, type) {
                type = type || 'Default';
                /** @type {?} */
                var imageType = ImageType[type] || ImageType.Default;
                return (images && images.length) ? images.find(function (i) { return i.type === imageType; }) || null : null; // images[0]
            };
        ImagePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'image',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ImagePipe.ngInjectableDef = i0.defineInjectable({ factory: function ImagePipe_Factory() { return new ImagePipe(); }, token: ImagePipe, providedIn: "root" });
        return ImagePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PublicPipe = /** @class */ (function () {
        function PublicPipe(coreService, segment) {
            this.coreService = coreService;
            this.segment = segment;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        PublicPipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var segments = this.segment.transform(data);
                segments.unshift(this.coreService.options.public);
                return segments.join('/');
            };
        PublicPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'public',
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PublicPipe.ctorParameters = function () {
            return [
                { type: CoreService },
                { type: SegmentPipe }
            ];
        };
        /** @nocollapse */ PublicPipe.ngInjectableDef = i0.defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(i0.inject(CoreService), i0.inject(SegmentPipe)); }, token: PublicPipe, providedIn: "root" });
        return PublicPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RoutePipe = /** @class */ (function () {
        function RoutePipe(routeService) {
            this.routeService = routeService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        RoutePipe.prototype.transform = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return this.routeService.toRoute(data);
            };
        RoutePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'route',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        RoutePipe.ctorParameters = function () {
            return [
                { type: RouteService }
            ];
        };
        /** @nocollapse */ RoutePipe.ngInjectableDef = i0.defineInjectable({ factory: function RoutePipe_Factory() { return new RoutePipe(i0.inject(RouteService)); }, token: RoutePipe, providedIn: "root" });
        return RoutePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugService = /** @class */ (function (_super) {
        __extends(SlugService, _super);
        function SlugService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.collectedKeys = {};
            _this.cache = {};
            _this.slugs$ = new rxjs.Subject();
            _this.emitter = new i0.EventEmitter();
            return _this;
        }
        Object.defineProperty(SlugService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return "/api/slug";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} key
         * @return {?}
         */
        SlugService.prototype.getKey = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (this.cache.hasOwnProperty(key)) {
                    return rxjs.of(this.cache[key]);
                }
                else {
                    // console.log('SlugService.getKey', key);
                    Object.defineProperty(this.collectedKeys, key, {
                        value: key,
                        enumerable: true,
                        writable: false,
                    });
                    this.cache[key] = null;
                }
                // return observable of key
                return this.slugs$.pipe(operators.map(function (items) { return items[key]; }), operators.filter(function (item) { return item !== null; }));
            };
        /**
         * @return {?}
         */
        SlugService.prototype.register = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.emitter.pipe(
                // throttleTime(500),
                operators.tap(function () {
                    _this.collectKeys().pipe(operators.first()).subscribe(function (keys) {
                        // console.log('SlugService.collected', keys);
                    });
                }));
            };
        /**
         * @return {?}
         */
        SlugService.prototype.collect = /**
         * @return {?}
         */
            function () {
                if (Object.keys(this.collectedKeys).length) {
                    this.emitter.emit();
                }
            };
        /**
         * @private
         * @param {?} keys
         * @return {?}
         */
        SlugService.prototype.getSlugs = /**
         * @private
         * @param {?} keys
         * @return {?}
         */
            function (keys) {
                keys = keys || [];
                return this.statePost(keys).pipe(
                // tap(items => console.log(items)),
                );
            };
        /**
         * @private
         * @return {?}
         */
        SlugService.prototype.collectKeys = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.slugs$.next(this.cache);
                /** @type {?} */
                var keys = Object.keys(this.collectedKeys);
                this.collectedKeys = {};
                return this.getSlugs(keys).pipe(operators.map(function (items) {
                    /** @type {?} */
                    var dictionary = {};
                    items.forEach(function (x) { return dictionary[x.mnemonic] = [x.slug]; });
                    return dictionary;
                }), operators.tap(function (dictionary) {
                    Object.assign(_this.cache, dictionary);
                    _this.slugs$.next(_this.cache);
                }));
            };
        SlugService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
        return SlugService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugAsyncPipe = /** @class */ (function () {
        function SlugAsyncPipe(changeDetector, slugService, routePipe) {
            this.changeDetector = changeDetector;
            this.slugService = slugService;
            this.routePipe = routePipe;
            this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
        }
        /**
         * @param {?} key
         * @param {?=} segments
         * @return {?}
         */
        SlugAsyncPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} segments
         * @return {?}
         */
            function (key, segments) {
                /** @type {?} */
                var slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
                // console.log('SlugAsyncPipe.transform', key, slugs);
                if (slugs && segments) {
                    slugs = slugs.concat(segments);
                }
                return slugs;
            };
        /**
         * @return {?}
         */
        SlugAsyncPipe.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.asyncPipe.dispose();
            };
        SlugAsyncPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'slugAsync',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SlugAsyncPipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: SlugService },
                { type: RoutePipe }
            ];
        };
        /** @nocollapse */ SlugAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugAsyncPipe_Factory() { return new SlugAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(SlugService), i0.inject(RoutePipe)); }, token: SlugAsyncPipe, providedIn: "root" });
        return SlugAsyncPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SlugPipe = /** @class */ (function () {
        function SlugPipe(slugService) {
            this.slugService = slugService;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SlugPipe.prototype.transform = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.slugService.getKey(key);
                // return this.async.transform<any>(this.slugService.getKey(key));
                // return this.routeService.toSlug(key);
            };
        SlugPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'slug',
                        pure: false
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SlugPipe.ctorParameters = function () {
            return [
                { type: SlugService }
            ];
        };
        /** @nocollapse */ SlugPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(i0.inject(SlugService)); }, token: SlugPipe, providedIn: "root" });
        return SlugPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslateDirective = /** @class */ (function (_super) {
        __extends(TranslateDirective, _super);
        function TranslateDirective(element, translateService) {
            var _this = _super.call(this) || this;
            _this.element = element;
            _this.translateService = translateService;
            return _this;
        }
        /**
         * @return {?}
         */
        TranslateDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
                this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (translate) {
                    _this.element.nativeElement.innerHTML = translate;
                    // console.log('TranslateDirective.ngOnInit', translate);
                });
                // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
            };
        TranslateDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[translate]'
                    },] }
        ];
        /** @nocollapse */
        TranslateDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: TranslateService }
            ];
        };
        TranslateDirective.propDecorators = {
            translate: [{ type: i0.Input }],
            translateParams: [{ type: i0.Input }]
        };
        return TranslateDirective;
    }(DisposableComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslatePipe = /** @class */ (function () {
        function TranslatePipe(ref, translateService) {
            var _this = this;
            this.ref = ref;
            this.translateService = translateService;
            this.translateService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
        }
        /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
        TranslatePipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} text
         * @param {?=} params
         * @return {?}
         */
            function (key, text, params) {
                // console.log(key, params);
                /** @type {?} */
                var label = this.translateService.getTranslate(key, text, params);
                // console.log('label', label, this.translateService.cache);
                return label;
            };
        TranslatePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'translate',
                        pure: false,
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TranslatePipe.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: TranslateService }
            ];
        };
        /** @nocollapse */ TranslatePipe.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePipe_Factory() { return new TranslatePipe(i0.inject(i0.ChangeDetectorRef), i0.inject(TranslateService)); }, token: TranslatePipe, providedIn: "root" });
        return TranslatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeStylePipe = /** @class */ (function () {
        function SafeStylePipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} style
         * @return {?}
         */
        SafeStylePipe.prototype.transform = /**
         * @param {?} style
         * @return {?}
         */
            function (style) {
                return this.sanitizer.bypassSecurityTrustStyle(style);
            };
        SafeStylePipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeStyle'
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SafeStylePipe.ctorParameters = function () {
            return [
                { type: i1$1.DomSanitizer }
            ];
        };
        /** @nocollapse */ SafeStylePipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeStylePipe_Factory() { return new SafeStylePipe(i0.inject(i1$1.DomSanitizer)); }, token: SafeStylePipe, providedIn: "root" });
        return SafeStylePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        SafeUrlPipe.prototype.transform = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            };
        SafeUrlPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeUrl'
                    },] },
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SafeUrlPipe.ctorParameters = function () {
            return [
                { type: i1$1.DomSanitizer }
            ];
        };
        /** @nocollapse */ SafeUrlPipe.ngInjectableDef = i0.defineInjectable({ factory: function SafeUrlPipe_Factory() { return new SafeUrlPipe(i0.inject(i1$1.DomSanitizer)); }, token: SafeUrlPipe, providedIn: "root" });
        return SafeUrlPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TrustPipe = /** @class */ (function () {
        function TrustPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        /**
         * @param {?} text
         * @return {?}
         */
        TrustPipe.prototype.transform = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                return this.sanitizer.bypassSecurityTrustHtml(text);
                // return this.sanitizer.bypassSecurityTrustStyle(text);
                // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
            };
        TrustPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'safeHtml'
                    },] }
        ];
        /** @nocollapse */
        TrustPipe.ctorParameters = function () {
            return [
                { type: i1$1.DomSanitizer }
            ];
        };
        return TrustPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var services = [
        AuthService,
        CoreService,
        CookieStorageService,
        EventDispatcherService,
        HttpStatusCodeService,
        LabelService,
        LocalStorageService,
        Logger,
        MenuService,
        OnceService,
        SessionStorageService,
        StorageService,
        TranslateService,
    ];
    /** @type {?} */
    var components = [
        CoreModuleComponent,
        DisposableComponent,
        JsonFormatterComponent,
        LoggerComponent,
    ];
    /** @type {?} */
    var directives = [
        DefaultContentDirective,
        LabelDirective,
        TranslateDirective,
    ];
    /** @type {?} */
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
        SlugAsyncPipe,
        SlugPipe,
        TranslatePipe,
        TrustPipe,
    ];
    /** @type {?} */
    var validators = [];
    var CoreModule = /** @class */ (function () {
        function CoreModule(parentModule) {
            if (parentModule) {
                throw new Error('CoreModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        CoreModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: CoreModule,
                    providers: [{
                            provide: CORE_CONFIG, useValue: config
                        }]
                };
            };
        CoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CommonModule,
                            http.HttpClientModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                        ],
                        providers: __spread([
                            { provide: http.HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true }
                        ], services, pipes, validators),
                        declarations: __spread(components, directives, pipes, validators),
                        exports: __spread(components, directives, pipes, validators),
                    },] }
        ];
        /** @nocollapse */
        CoreModule.ctorParameters = function () {
            return [
                { type: CoreModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf }] }
            ];
        };
        return CoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Label = /** @class */ (function () {
        function Label() {
        }
        return Label;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var DocumentService = /** @class */ (function (_super) {
        __extends(DocumentService, _super);
        function DocumentService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DocumentService.prototype, "collection", {
            get: /**
             * @return {?}
             */ function () {
                return '/api/document';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} slug
         * @return {?}
         */
        DocumentService.prototype.getDetailBySlug = /**
         * @param {?} slug
         * @return {?}
         */
            function (slug) {
                if (!slug.trim()) {
                    // if not search term, return empty identity array.
                    return rxjs.of();
                }
                return this.get({ slug: slug }).pipe(
                // tap(x => this.logger.log(`found identities matching "${slug}"`)),
                operators.switchMap(function (x) { return rxjs.of(x[0]); }));
            };
        DocumentService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ DocumentService.ngInjectableDef = i0.defineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(i0.inject(i0.INJECTOR)); }, token: DocumentService, providedIn: "root" });
        return DocumentService;
    }(EntityService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Entity = /** @class */ (function () {
        function Entity() {
        }
        return Entity;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Feature = /** @class */ (function () {
        function Feature() {
            this.readmore = false;
        }
        return Feature;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Identity = /** @class */ (function () {
        function Identity() {
        }
        return Identity;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Taxonomy = /** @class */ (function () {
        function Taxonomy() {
        }
        return Taxonomy;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Translate = /** @class */ (function () {
        function Translate() {
        }
        return Translate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AuthService = AuthService;
    exports.AuthStrategy = AuthStrategy;
    exports.AuthToken = AuthToken;
    exports.CoreConfig = CoreConfig;
    exports.CORE_CONFIG = CORE_CONFIG;
    exports.CoreService = CoreService;
    exports.DefaultContentDirective = DefaultContentDirective;
    exports.CoreModuleComponent = CoreModuleComponent;
    exports.CoreModule = CoreModule;
    exports.DisposableComponent = DisposableComponent;
    exports.HighlightPipe = HighlightPipe;
    exports.HttpResponseInterceptor = HttpResponseInterceptor;
    exports.HttpStatusCodeService = HttpStatusCodeService;
    exports.JsonFormatterComponent = JsonFormatterComponent;
    exports.Label = Label;
    exports.LabelDirective = LabelDirective;
    exports.LabelPipe = LabelPipe;
    exports.LabelService = LabelService;
    exports.Logger = Logger;
    exports.LoggerComponent = LoggerComponent;
    exports.Document = Document;
    exports.DocumentIndex = DocumentIndex;
    exports.DocumentService = DocumentService;
    exports.Entity = Entity;
    exports.EntityService = EntityService;
    exports.EventDispatcherService = EventDispatcherService;
    exports.Feature = Feature;
    exports.Identity = Identity;
    exports.IdentityService = IdentityService;
    exports.Image = Image;
    exports.ImageType = ImageType;
    exports.MenuItem = MenuItem;
    exports.MenuService = MenuService;
    exports.Taxonomy = Taxonomy;
    exports.OnceService = OnceService;
    exports.AssetPipe = AssetPipe;
    exports.CustomAsyncPipe = CustomAsyncPipe;
    exports.ImageUrlPipe = ImageUrlPipe;
    exports.ImagePipe = ImagePipe;
    exports.PublicPipe = PublicPipe;
    exports.SegmentPipe = SegmentPipe;
    exports.RoutePipe = RoutePipe;
    exports.RouteService = RouteService;
    exports.SlugAsyncPipe = SlugAsyncPipe;
    exports.SlugPipe = SlugPipe;
    exports.SlugService = SlugService;
    exports.CookieStorageService = CookieStorageService;
    exports.LocalStorageService = LocalStorageService;
    exports.SessionStorageService = SessionStorageService;
    exports.StorageService = StorageService;
    exports.Translate = Translate;
    exports.TranslateDirective = TranslateDirective;
    exports.TranslatePipe = TranslatePipe;
    exports.TranslateService = TranslateService;
    exports.SafeStylePipe = SafeStylePipe;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.TrustPipe = TrustPipe;
    exports.ɵa = ApiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=designr-core.umd.js.map