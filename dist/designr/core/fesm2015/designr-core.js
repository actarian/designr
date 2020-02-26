import { isPlatformBrowser, isPlatformServer, Location, NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, PLATFORM_ID, Injector, ɵɵdirectiveInject, NgModuleFactoryLoader, ViewContainerRef, ɵɵdefineDirective, Directive, Input, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefinePipe, Pipe, EventEmitter, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ɵɵelement, ViewEncapsulation, ViewChild, ɵɵInheritDefinitionFeature, ɵɵnextContext, ɵɵproperty, ɵɵtextInterpolate, ɵɵtemplate, ɵɵgetInheritedFactory, ComponentFactoryResolver, ɵɵviewQuery, ɵɵelementContainerStart, ɵɵelementContainerEnd, WrappedValue, ɵɵinjectPipeChangeDetectorRef, ChangeDetectorRef, ɵɵdefineNgModule, ɵɵdefineInjector, SystemJsNgModuleLoader, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf, NgZone } from '@angular/core';
import { TransferState, makeStateKey, DomSanitizer } from '@angular/platform-browser';
import { of, Subject, BehaviorSubject, throwError, from, fromEvent } from 'rxjs';
import { tap, filter, switchMap, map, distinctUntilChanged, catchError, debounceTime, takeUntil, first } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationStart, ActivatedRoute, Router } from '@angular/router';
import JSONFormatter from 'json-formatter-js';
import { isObject, isArray } from 'util';

var AuthStrategy;
(function (AuthStrategy) {
    AuthStrategy[AuthStrategy["Bearer"] = 0] = "Bearer";
    AuthStrategy[AuthStrategy["Cookie"] = 1] = "Cookie";
})(AuthStrategy || (AuthStrategy = {}));
class AuthToken {
    constructor(accessToken, expiresIn = 0) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}

var LoggerErrorStrategy;
(function (LoggerErrorStrategy) {
    LoggerErrorStrategy[LoggerErrorStrategy["Informational"] = 100] = "Informational";
    LoggerErrorStrategy[LoggerErrorStrategy["Success"] = 200] = "Success";
    LoggerErrorStrategy[LoggerErrorStrategy["Redirect"] = 300] = "Redirect";
    LoggerErrorStrategy[LoggerErrorStrategy["Client"] = 400] = "Client";
    LoggerErrorStrategy[LoggerErrorStrategy["Server"] = 500] = "Server";
    LoggerErrorStrategy[LoggerErrorStrategy["None"] = 999] = "None";
})(LoggerErrorStrategy || (LoggerErrorStrategy = {}));
class LoggerError extends HttpErrorResponse {
    constructor(response) {
        super({
            error: response instanceof HttpErrorResponse ? response.error : response.statusText,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        });
    }
    get statusType() {
        return Object.keys(LoggerErrorStrategy).reduce((type, key) => {
            if (this.status >= LoggerErrorStrategy[key]) {
                type = key.toLowerCase();
            }
            return type;
        }, null);
    }
}

class Language {
}
class CoreTransitionConfig {
    constructor(options) {
        // console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
class CoreConfig {
    constructor(options) {
        this.assets = '';
        this.authStrategy = AuthStrategy.Cookie;
        this.defaultLanguage = 'it';
        this.defaultMarket = 'it';
        this.loggerErrorStrategy = LoggerErrorStrategy.Server;
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
}
const CORE_CONFIG = new InjectionToken('core.config');

class CoreService {
    constructor(options) {
        // console.log('CoreService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(ɵɵinject(CORE_CONFIG)); };
CoreService.ɵprov = ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: [CORE_CONFIG]
            }] }]; }, null); })();

class Logger {
    constructor(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    request(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    }
    log(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    }
    warn(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    }
    error(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    }
    http(response) {
        this.httpError = new LoggerError(response);
        if (!this.coreService.options.production) {
            this.logs.push(this.httpError.message);
        }
        console.warn('Logger.http.response', response.status, response.statusText, response.url);
    }
    clear() {
        this.httpError = null;
        this.logs = [];
    }
}
Logger.ɵfac = function Logger_Factory(t) { return new (t || Logger)(ɵɵinject(CoreService)); };
Logger.ɵprov = ɵɵdefineInjectable({ token: Logger, factory: Logger.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Logger, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CoreService }]; }, null); })();

class ApiRequestOptions {
    constructor(params) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.params = params;
    }
}
class ApiService {
    constructor(injector) {
        this.injector = injector;
    }
    get collection() {
        return '/api';
    }
    get logger() {
        if (!this._logger) {
            this._logger = this.injector.get(Logger);
        }
        return this._logger;
    }
    get http() {
        if (!this._http) {
            this._http = this.injector.get(HttpClient);
        }
        return this._http;
    }
    get state() {
        if (!this._state) {
            this._state = this.injector.get(TransferState);
        }
        return this._state;
    }
    get platformId() {
        if (!this._platformId) {
            this._platformId = this.injector.get(PLATFORM_ID);
        }
        return this._platformId;
    }
    get config() {
        if (!this._config) {
            this._config = this.injector.get(CoreService).options;
        }
        return this._config;
    }
    get origin() {
        if (!this._origin) {
            this._origin = this.config.origin;
        }
        return this._origin;
    }
    get url() {
        let base = this.origin;
        const collection = this.collection.toLowerCase();
        if (collection.indexOf('http') === 0) {
            base = '';
        }
        return `${base}${collection}`;
    }
    getUrl(method = '') {
        return `${this.url}${method}`;
    }
    get(first, second) {
        const method = (typeof first === 'string' ? first : '');
        const params = (typeof first === 'object' ? first : second);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        return this.http.get(url, options).pipe(tap(x => this.logger.request(url)));
    }
    post(first, second, third) {
        const method = (typeof first === 'string' ? first : '');
        const model = (typeof first === 'object' ? first : second);
        const params = (typeof second === 'object' ? second : third);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        return this.http.post(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    put(first, second, third) {
        const method = (typeof first === 'string' ? first : '');
        const model = (typeof first === 'object' ? first : second);
        const params = (typeof second === 'object' ? second : third);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        return this.http.put(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    patch(first, second, third) {
        const method = (typeof first === 'string' ? first : '');
        const model = (typeof first === 'object' ? first : second);
        const params = (typeof second === 'object' ? second : third);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        return this.http.patch(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    delete(first, second, third) {
        const method = (typeof first === 'string' ? first : '');
        const identity = (typeof first !== 'string' ? first : second);
        const id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
        const params = (typeof second === 'object' ? second : third);
        const url = id !== null ? this.getUrl(`${method}/${id}`) : this.getUrl(method);
        const options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap(x => this.logger.request(url)));
    }
    toCamelCase(input) {
        let output, key, keyCamelCase, value;
        if (input instanceof Array) {
            return input.map((value) => {
                if (typeof value === 'object') {
                    value = this.toCamelCase(value);
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
    }
    // TRANSFER STATE
    getStateKey(url, model) {
        const flatMap = (s, x) => {
            if (typeof x === 'number') {
                s += x.toString();
            }
            else if (typeof x === 'string') {
                s += x.substr(0, 10);
            }
            else if (x && typeof x === 'object') {
                s += '_' + Object.keys(x).map(k => k + '_' + flatMap('', x[k])).join('_');
            }
            return s;
        };
        url = flatMap(url, model);
        // console.log('ApiService.getStateKey.url', url);
        const key = url.replace(/(\W)/gm, '_');
        // this.logger.log('ApiService.getStateKey.key', key);
        return makeStateKey(key);
    }
    stateGet(first, second) {
        const method = (typeof first === 'string' ? first : '');
        const params = (typeof first === 'object' ? first : second);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        const stateKey = this.getStateKey(url, params);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            const cached = this.state.get(stateKey, null);
            this.state.remove(stateKey);
            return of(cached);
        }
        else {
            return this.http.get(url, options).pipe(tap(x => {
                if (isPlatformServer(this.platformId)) {
                    this.state.onSerialize(stateKey, () => x);
                }
            }));
        }
    }
    statePost(first, second, third) {
        const method = (typeof first === 'string' ? first : '');
        const model = (typeof first === 'object' ? first : second);
        const params = (typeof second === 'object' ? second : third);
        const url = this.getUrl(method);
        const options = new ApiRequestOptions(params);
        const stateKey = this.getStateKey(url, model);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            const cached = this.state.get(stateKey, null);
            this.state.remove(stateKey);
            return of(cached);
        }
        else {
            return this.http.post(url, model, options).pipe(tap(x => {
                if (isPlatformServer(this.platformId)) {
                    this.state.onSerialize(stateKey, () => x);
                }
            }));
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(ɵɵinject(Injector)); };
ApiService.ɵprov = ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

const TIMEOUT = 5 * 60 * 1000; // five minutes
/*
export class StorageEvent extends Event {}

export class CookieStorageEvent extends StorageEvent { }

export class SessionStorageEvent extends StorageEvent { }

export class LocalStorageEvent extends StorageEvent { }
*/
class StorageService {
    delete(name) { }
    exist(name) { return false; }
    get(name) { return null; }
    set(name, value, days) { }
    on() { return of(null); }
    tryGet() {
        // console.log('no StorageService available...');
        return this;
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class CookieStorageService {
    constructor(platformId, storageService) {
        this.platformId = platformId;
        this.storageService = storageService;
    }
    tryGet() {
        if (this.isSupported()) {
            // console.log('CookieStorageService.supported');
            return this;
        }
        else {
            return this.storageService.tryGet();
        }
    }
    delete(name) {
        this.setter(name, '', -1);
    }
    exist(name) {
        return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
    }
    get(name) {
        const cookieName = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(cookieName) === 0) {
                const value = c.substring(cookieName.length, c.length);
                let model = null;
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
    }
    set(name, value, days) {
        try {
            let cache = [];
            const json = JSON.stringify(value, function (key, value) {
                if (key === 'pool') {
                    return;
                }
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // throw (new Error('circular reference found, discard key'));
                        return;
                    }
                    cache.push(value);
                }
                return value;
            });
            cache = null;
            this.setter(name, btoa(encodeURIComponent(json)), days);
        }
        catch (e) {
            console.log('CookieSet.error serializing', name, value, e);
        }
    }
    on() {
        // todo
        const interval = 1000, timeout = TIMEOUT;
        let i, elapsed = 0;
        function checkCookie() {
            if (elapsed > timeout) {
                // promise.reject('timeout');
            }
            else {
                const c = this.get(name);
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
        return of(null);
    }
    setter(name, value, days) {
        let expires;
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        else {
            expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }
    isSupported() {
        return isPlatformBrowser(this.platformId);
    }
}
CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(ɵɵinject(PLATFORM_ID), ɵɵinject(StorageService)); };
CookieStorageService.ɵprov = ɵɵdefineInjectable({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CookieStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: StorageService }]; }, null); })();
class SessionStorageService {
    constructor(platformId, cookieStorageService) {
        this.platformId = platformId;
        this.cookieStorageService = cookieStorageService;
    }
    tryGet() {
        if (this.isSupported()) {
            // console.log('SessionStorageService.supported');
            return this;
        }
        else {
            return this.cookieStorageService.tryGet();
        }
    }
    delete(name) {
        window.sessionStorage.removeItem(name);
    }
    exist(name) {
        return window.sessionStorage[name] !== undefined;
    }
    get(name) {
        let value = null;
        if (window.sessionStorage[name] !== undefined) {
            try {
                value = JSON.parse(window.sessionStorage[name]);
            }
            catch (e) {
                console.log('SessionStorage.get.error parsing', name, e);
            }
        }
        return value;
    }
    on() {
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
        return of(null);
    }
    set(name, value, days) {
        try {
            let cache = [];
            const json = JSON.stringify(value, function (key, value) {
                if (key === 'pool') {
                    return;
                }
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // throw (new Error('circular reference found, discard key'));
                        return;
                    }
                    cache.push(value);
                }
                return value;
            });
            cache = null;
            window.sessionStorage.setItem(name, json);
        }
        catch (e) {
            console.log('SessionStorage.set.error serializing', name, value, e);
        }
    }
    isSupported() {
        let supported = false;
        if (isPlatformBrowser(this.platformId)) {
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
    }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(ɵɵinject(PLATFORM_ID), ɵɵinject(CookieStorageService)); };
SessionStorageService.ɵprov = ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SessionStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CookieStorageService }]; }, null); })();
class LocalStorageService {
    constructor(platformId, cookieStorageService) {
        this.platformId = platformId;
        this.cookieStorageService = cookieStorageService;
    }
    tryGet() {
        if (this.isSupported()) {
            // console.log('LocalStorageService.supported');
            return this;
        }
        else {
            return this.cookieStorageService.tryGet();
        }
    }
    delete(name) {
        window.localStorage.removeItem(name);
    }
    exist(name) {
        return window.localStorage[name] !== undefined;
    }
    get(name) {
        let value = null;
        if (window.localStorage[name] !== undefined) {
            try {
                value = JSON.parse(window.localStorage[name]);
            }
            catch (e) {
                console.log('LocalStorage.get.error parsing', name, e);
            }
        }
        return value;
    }
    on() {
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
        return of(null);
    }
    set(name, value, days) {
        try {
            let cache = [];
            const json = JSON.stringify(value, function (key, value) {
                if (key === 'pool') {
                    return;
                }
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // throw (new Error('circular reference found, discard key'));
                        return;
                    }
                    cache.push(value);
                }
                return value;
            });
            cache = null;
            window.localStorage.setItem(name, json);
        }
        catch (e) {
            console.log('LocalStorage.set.error serializing', name, value, e);
        }
    }
    isSupported() {
        let supported = false;
        if (isPlatformBrowser(this.platformId)) {
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
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(ɵɵinject(PLATFORM_ID), ɵɵinject(CookieStorageService)); };
LocalStorageService.ɵprov = ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CookieStorageService }]; }, null); })();

class AuthService {
    constructor(platformId, injector, localStorageService) {
        this.platformId = platformId;
        this.injector = injector;
        this.localStorageService = localStorageService;
        this.cachedRequests = [];
        this.paths = [];
    }
    setToken(authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    }
    getToken() {
        return this.localStorageService.get('authToken');
    }
    getFakeToken() {
        return new AuthToken('fakeToken');
    }
    isValid(authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    }
    isAuthenticated() {
        const authToken = this.getToken();
        return this.isValid(authToken);
    }
    collectFailedRequest(request) {
        this.cachedRequests.push(request);
    }
    retryFailedRequests() {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(ɵɵinject(PLATFORM_ID), ɵɵinject(Injector), ɵɵinject(LocalStorageService)); };
AuthService.ɵprov = ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: Injector }, { type: LocalStorageService }]; }, null); })();

const BUNDLES = new InjectionToken('core.bundles');

class BundleDirective {
    constructor(bundles, injector, loader, container) {
        this.bundles = bundles;
        this.injector = injector;
        this.loader = loader;
        this.container = container;
    }
    ngOnInit() {
        this.loader.load(this.bundles[this.bundle]).then((moduleFactory) => {
            const moduleRef = moduleFactory.create(this.injector);
            this.moduleRef_ = moduleRef;
            const rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
            // console.log(rootComponentType);
            const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
            const componentRef = this.container.createComponent(factory);
            const instance = componentRef.instance;
            // instance.data = this.data; // !!!
            this.componentRef_ = componentRef;
        });
    }
    ngOnDestroy() {
        if (this.componentRef_) {
            this.componentRef_.destroy();
        }
        if (this.moduleRef_) {
            this.moduleRef_.destroy();
        }
    }
}
BundleDirective.ɵfac = function BundleDirective_Factory(t) { return new (t || BundleDirective)(ɵɵdirectiveInject(BUNDLES), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgModuleFactoryLoader), ɵɵdirectiveInject(ViewContainerRef)); };
BundleDirective.ɵdir = ɵɵdefineDirective({ type: BundleDirective, selectors: [["", "bundle", ""]], inputs: { bundle: "bundle", data: "data" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BundleDirective, [{
        type: Directive,
        args: [{
                selector: '[bundle]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [BUNDLES]
            }] }, { type: Injector }, { type: NgModuleFactoryLoader }, { type: ViewContainerRef }]; }, { bundle: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();

class DefaultContentDirective {
    constructor(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    ngAfterContentChecked() {
        let hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (let i = this.element.childNodes.length - 1; i >= 0; --i) {
            const node = this.element.childNodes[i];
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
    }
}
DefaultContentDirective.ɵfac = function DefaultContentDirective_Factory(t) { return new (t || DefaultContentDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2)); };
DefaultContentDirective.ɵdir = ɵɵdefineDirective({ type: DefaultContentDirective, selectors: [["", "default", ""]], inputs: { default: "default" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultContentDirective, [{
        type: Directive,
        args: [{
                selector: '[default]',
            }]
    }], function () { return [{ type: ElementRef }, { type: ViewContainerRef }, { type: Renderer2 }]; }, { default: [{
            type: Input
        }] }); })();

class CoreModuleComponent {
    constructor() {
        this.version = '0.0.12';
    }
    ngOnInit() {
    }
}
CoreModuleComponent.ɵfac = function CoreModuleComponent_Factory(t) { return new (t || CoreModuleComponent)(); };
CoreModuleComponent.ɵcmp = ɵɵdefineComponent({ type: CoreModuleComponent, selectors: [["core-module"]], decls: 2, vars: 1, consts: [[1, "core-module"]], template: function CoreModuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("core ", ctx.version, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreModuleComponent, [{
        type: Component,
        args: [{
                selector: 'core-module',
                template: `<span class="core-module">core {{version}}</span>`,
                styles: []
            }]
    }], function () { return []; }, null); })();

class DisposableComponent {
    constructor() {
        this.unsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    }
}
DisposableComponent.ɵfac = function DisposableComponent_Factory(t) { return new (t || DisposableComponent)(); };
DisposableComponent.ɵcmp = ɵɵdefineComponent({ type: DisposableComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function DisposableComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DisposableComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();

class DisposableDirective {
    constructor() {
        this.unsubscribe = new Subject();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableDirective.ngOnDestroy', this);
    }
}
DisposableDirective.ɵfac = function DisposableDirective_Factory(t) { return new (t || DisposableDirective)(); };
DisposableDirective.ɵdir = ɵɵdefineDirective({ type: DisposableDirective, selectors: [["", "disposable-directive", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DisposableDirective, [{
        type: Directive,
        args: [{
                selector: '[disposable-directive]'
            }]
    }], null, null); })();

class HighlightPipe {
    transform(text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        const regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        });
    }
    escapeRegexChars(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    safeToString(text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    }
    encodeHTML(text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
}
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) { return new (t || HighlightPipe)(); };
HighlightPipe.ɵpipe = ɵɵdefinePipe({ name: "highlight", type: HighlightPipe, pure: true });
HighlightPipe.ɵprov = ɵɵdefineInjectable({ token: HighlightPipe, factory: HighlightPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HighlightPipe, [{
        type: Pipe,
        args: [{
                name: 'highlight',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class SegmentPipe {
    constructor(location) {
        this.location = location;
    }
    transform(segments) {
        segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
        let path = segments.join('/');
        path = this.location.normalize(path);
        if (path.indexOf('/') !== 0) {
            path = `/${path}`;
        }
        segments = path.split('/');
        return segments;
    }
}
SegmentPipe.ɵfac = function SegmentPipe_Factory(t) { return new (t || SegmentPipe)(ɵɵdirectiveInject(Location)); };
SegmentPipe.ɵpipe = ɵɵdefinePipe({ name: "segment", type: SegmentPipe, pure: true });
SegmentPipe.ɵprov = ɵɵdefineInjectable({ token: SegmentPipe, factory: SegmentPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SegmentPipe, [{
        type: Pipe,
        args: [{
                name: 'segment',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Location }]; }, null); })();

class IdentityService extends ApiService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get collection() {
        return '/api/identity';
    }
    getDetailById(id) {
        return this.get({ id });
    }
}
IdentityService.ɵfac = function IdentityService_Factory(t) { return new (t || IdentityService)(ɵɵinject(Injector)); };
IdentityService.ɵprov = ɵɵdefineInjectable({ token: IdentityService, factory: IdentityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

class TranslateService extends IdentityService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.events = new EventEmitter();
        this.language_ = new BehaviorSubject(undefined);
        this.languages_ = new BehaviorSubject([]);
        this.languages_.next(this.config.languages);
    }
    get collection() {
        return '/api/translate';
    }
    get lang() {
        return TranslateService.lang_;
    }
    set lang(lang) {
        if (lang !== TranslateService.lang_) {
            TranslateService.lang_ = lang;
            const languages = this.languages_.getValue();
            if (languages.length) {
                const language = languages.find(x => x.lang === lang);
                this.language_.next(language);
            }
        }
    }
    get language() {
        return this.language_.getValue();
    }
    get languages() {
        return this.languages_.getValue();
    }
    observe$() {
        // console.log(new Error().stack);
        return this.language_.pipe(filter(x => x !== undefined), switchMap((language) => this.getTranslation(language.lang)));
    }
    getTranslation(lang) {
        if (!lang || !lang.trim()) {
            return of(null);
        }
        TranslateService.lang_ = lang;
        if (TranslateService.cache[lang]) {
            return of(TranslateService.cache[lang]);
        }
        else {
            return this.get(`?lang=${lang}`, { lang }).pipe(
            // take(1),
            map((x) => {
                if (x.length && x[0]) {
                    const labels = x[0].labels;
                    TranslateService.cache[lang] = labels;
                    this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    }
    getTranslate(key, defaultValue, params) {
        // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
        if (key) {
            let value = null;
            let labels = TranslateService.cache[TranslateService.lang_];
            // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
            if (labels) {
                const keys = key.split('.');
                let k = keys.shift();
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
    }
    transform(key, defaultValue, params) {
        const value = this.getTranslate(key, defaultValue, params);
        return value;
    }
    parseTranslate(value, key, defaultValue, params) {
        if (value == null) {
            return defaultValue || this.missingTranslate(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    }
    missingTranslate(key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    }
    parseParams(value, params) {
        const TEMPLATEREGEXP_ = /@([^{}\s]*)/g; // /{{\s?([^{}\s]*)\s?}}/g;
        return value.replace(TEMPLATEREGEXP_, (text, key) => {
            const replacer = params[key];
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    }
    use(lang) {
    }
    setDefaultLang(lang) {
    }
    addLangs(lang) {
    }
    getBrowserLang() {
        if (isPlatformBrowser(this.platformId)) {
            const lang = this.getFirstBrowserLang() || this.config.defaultLanguage; // navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage'] || this.config.defaultLanguage);
            // console.log('getBrowserLang', lang, navigator.languages);
            return lang;
        }
        else {
            return this.config.defaultLanguage;
        }
    }
    getFirstBrowserLang() {
        const lang = this.getFirstBrowserLocale();
        if (lang) {
            return lang.split('-')[0];
        }
    }
    getFirstBrowserLocale() {
        const navigator = window.navigator;
        const properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        let lang;
        if (Array.isArray(navigator.languages)) {
            lang = navigator.languages[0];
        }
        let i = 0;
        while (!lang && i < properties.length) {
            lang = navigator[properties[i]];
            i++;
        }
        return lang;
    }
}
TranslateService.cache = {};
TranslateService.lang_ = null;
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(ɵɵinject(Injector)); };
TranslateService.ɵprov = ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

// @dynamic
class RouteService {
    constructor(platformId, coreService, injector, translateService, location, route, router, segment) {
        this.platformId = platformId;
        this.coreService = coreService;
        this.injector = injector;
        this.translateService = translateService;
        this.location = location;
        this.route = route;
        this.router = router;
        this.segment = segment;
        this._language = new BehaviorSubject({});
        this.language = this._language.asObservable();
        this._languages = new BehaviorSubject([]);
        this.languages = this._languages.asObservable();
        this.pageParams$ = new BehaviorSubject({});
        this.urlStrategy = this.coreService.options.urlStrategy;
        this._languages.next(this.coreService.options.languages);
        this.currentMarket = this.coreService.options.defaultMarket;
        this.setLanguages();
        if (this.coreService.options.useLang || this.coreService.options.useMarket) {
            this.subscribeToRouter();
        }
    }
    get lang() {
        return this._lang;
    }
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
            this.translateService.use(lang);
            // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
            if (this.coreService.options.useLang) {
                const _lang = this._lang;
                let path = this.location.path();
                if (path.indexOf(`/${_lang}`) === 0) {
                    path = path.replace(`/${_lang}`, `/${lang}`);
                }
                else if (path.indexOf(`/${lang}`) !== 0) {
                    path = `/${lang}` + path;
                }
                this.path = path;
                // const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            }
        }
    }
    get currentLang() {
        return this._lang;
    }
    getPageParams() {
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(params => {
            // console.log(params);
            const parsed = this.parseParams(params);
            this.pageParams$.next(parsed);
            return of(parsed);
        }));
    }
    parseParams(params) {
        const parsed = {};
        Object.keys(params).forEach(k => parsed[k] = this.parse(params[k]));
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
    }
    serializeParams(params) {
        const serialized = {};
        Object.keys(params).forEach(k => serialized[k] = this.serialize(params[k]));
        return serialized;
    }
    parse(base64) {
        try {
            if (isPlatformBrowser(this.platformId)) {
                return JSON.parse(window.atob(base64));
            }
            else {
                return JSON.parse(Buffer.from(base64, 'base64').toString('ascii'));
            }
        }
        catch (_a) {
            return null;
        }
    }
    serialize(object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    }
    getId() {
        return +this.route.snapshot.paramMap.get('id');
    }
    getSlug() {
        return this.route.snapshot.paramMap.get('slug');
    }
    toRoute(data) {
        const segments = this.segment.transform(data);
        if (this.coreService.options.useMarket) {
            const market = this.currentMarket;
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
            const lang = this._lang;
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    }
    toSlug(data) {
        const segments = this.segment.transform(data);
        let paths = segments.filter(x => {
            return typeof x === 'string';
        });
        const datas = segments.filter(x => {
            return typeof x !== 'string';
        });
        if (this.coreService.options.useMarket) {
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    }
    toParams(data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    }
    toData(params) {
        if (params && params.data) {
            return JSON.parse(window.atob(params.data));
        }
    }
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
    setLanguage(lang, silent) {
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
    }
    // PRIVATE METHODS
    setLanguages() {
        this.translateService.addLangs(this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang) : []);
        this.translateService.setDefaultLang(this.coreService.options.defaultLanguage);
        // this.setLanguage(this.detectLanguage(), true);
        this.setLanguage(this.coreService.options.defaultLanguage, true);
        /*
        this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
            // console.log('RouteService.onLangChange', e);
        });
        */
    }
    subscribeToRouter() {
        this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event) => {
            const location = this.location.normalize(event.url).split('/');
            if (this.coreService.options.useMarket) {
                const marketIndex = this.urlStrategy.split('/').indexOf(':market');
                const market = location[marketIndex];
                if (market !== this.currentMarket) {
                    this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (this.coreService.options.useLang) {
                const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                const lang = location[langIndex];
                if (lang !== this._lang) {
                    const language = this._languages.getValue().find(x => x.lang === lang);
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
    }
    detectLanguage() {
        let acceptLanguage = null;
        if (isPlatformServer(this.platformId)) {
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
            const request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
                const languages = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
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
        else if (isPlatformBrowser(this.platformId)) {
            acceptLanguage = this.translateService.getBrowserLang();
            // console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
        }
        let detectedLanguage = this.coreService.options.defaultLanguage;
        const regexp = new RegExp(`(${this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang).join('|') : ''})`, 'gi');
        const match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    }
    getTime() {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            const time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    }
    start() {
        RouteService.startTime = this.getTime();
    }
    end() {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(ɵɵinject(PLATFORM_ID), ɵɵinject(CoreService), ɵɵinject(Injector), ɵɵinject(TranslateService), ɵɵinject(Location), ɵɵinject(ActivatedRoute), ɵɵinject(Router), ɵɵinject(SegmentPipe)); };
RouteService.ɵprov = ɵɵdefineInjectable({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RouteService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CoreService }, { type: Injector }, { type: TranslateService }, { type: Location }, { type: ActivatedRoute }, { type: Router }, { type: SegmentPipe }]; }, null); })();

class HttpStatusCodeService {
    constructor() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    setStatusCode(statusCode, redirectUrl = null) {
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    }
    getStatusCode() {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    }
    getRedirectUrl() {
        return this.redirectUrl;
    }
}
HttpStatusCodeService.ɵfac = function HttpStatusCodeService_Factory(t) { return new (t || HttpStatusCodeService)(); };
HttpStatusCodeService.ɵprov = ɵɵdefineInjectable({ token: HttpStatusCodeService, factory: HttpStatusCodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HttpStatusCodeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class HttpResponseInterceptor {
    constructor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
        this.loggerErrorStrategy_ = LoggerErrorStrategy.Server;
        this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || LoggerErrorStrategy.Server;
    }
    get config() {
        if (!this.config_) {
            this.config_ = this.injector.get(CoreService).options;
        }
        return this.config_;
    }
    get logger() {
        if (!this.logger_) {
            this.logger_ = this.injector.get(Logger);
        }
        return this.logger_;
    }
    get router() {
        if (!this.router_) {
            this.router_ = this.injector.get(Router);
        }
        return this.router_;
    }
    get routeService() {
        if (!this.routeService_) {
            this.routeService_ = this.injector.get(RouteService);
        }
        return this.routeService;
    }
    intercept(request, next) {
        // injecting request
        // parsing response
        return next.handle(request).pipe(tap((response) => {
            this.logger.httpError = null;
            // this.logger.log(response);
            if (response instanceof HttpResponse) {
                // console.log('response instanceof HttpResponse');
                // do stuff with response if you want
                if (response.status >= this.loggerErrorStrategy_) {
                    this.logger.http(response);
                }
            }
        }), catchError((response) => {
            // console.warn('HttpResponseInterceptor', response);
            if (response instanceof HttpErrorResponse) {
                // this.statusCodeService.setStatusCode(response.status);
                // !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER, 999 NONE)
                if (response.status >= this.loggerErrorStrategy_) {
                    this.logger.http(response);
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
            return throwError(response);
        }));
    }
}
HttpResponseInterceptor.ɵfac = function HttpResponseInterceptor_Factory(t) { return new (t || HttpResponseInterceptor)(ɵɵinject(Injector), ɵɵinject(HttpStatusCodeService)); };
HttpResponseInterceptor.ɵprov = ɵɵdefineInjectable({ token: HttpResponseInterceptor, factory: HttpResponseInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HttpResponseInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }, { type: HttpStatusCodeService }]; }, null); })();

const _c0 = ["jsonFormatter"];
class JsonFormatterComponent {
    constructor(platformId) {
        this.platformId = platformId;
    }
    ngOnChanges() {
        if (isPlatformBrowser(this.platformId)) {
            if (!isObject(this.json) && !isArray(this.json)) {
                return;
            }
            // console.log('JsonFormatterComponent', this.json);
            if (this.elementRef) {
                this.input.nativeElement.removeChild(this.elementRef.nativeElement);
            }
            // const JSONFormatter = require('json-formatter-js').default;
            const formatter = new JSONFormatter(this.json);
            const elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    }
}
JsonFormatterComponent.ɵfac = function JsonFormatterComponent_Factory(t) { return new (t || JsonFormatterComponent)(ɵɵdirectiveInject(PLATFORM_ID)); };
JsonFormatterComponent.ɵcmp = ɵɵdefineComponent({ type: JsonFormatterComponent, selectors: [["json-formatter"]], viewQuery: function JsonFormatterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { json: "json" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["jsonFormatter", ""]], template: function JsonFormatterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(JsonFormatterComponent, [{
        type: Component,
        args: [{
                selector: 'json-formatter',
                template: `<div #jsonFormatter></div>`,
                styleUrls: ['./json-formatter.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { input: [{
            type: ViewChild,
            args: [`jsonFormatter`, { static: true }]
        }], json: [{
            type: Input
        }] }); })();

class LabelKey {
}
class LabelService extends ApiService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.keys = {};
        this.values$ = new BehaviorSubject({});
        this.emitter$ = new EventEmitter();
    }
    get collection() {
        return '/api/label';
    }
    transform(key, defaultValue, params) {
        const values = this.values$.getValue();
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
    }
    transform$(key, defaultValue, params) {
        const values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(this.parseLabel(values[key], params));
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
        return this.values$.pipe(map(values => this.parseLabel(values[key], params)));
    }
    observe$() {
        return this.emitter$.pipe(debounceTime(1), switchMap(x => this.collect$()), filter(x => x !== null));
    }
    collect$() {
        if (Object.keys(this.keys).length) {
            const keys = Object.keys(this.keys).map(x => this.keys[x]);
            this.keys = {};
            return this.statePost(keys).pipe(map((labels) => {
                return labels.reduce((values, x) => {
                    values[x.id] = this.getLabel(x);
                    return values;
                }, {});
            }), tap((labels) => {
                const values = this.values$.getValue();
                Object.assign(values, labels);
                this.values$.next(values);
            }), catchError(error => {
                console.log(error);
                const labels = keys.reduce((values, x) => {
                    values[x.id] = this.getLabel(x);
                    return values;
                }, {});
                const values = this.values$.getValue();
                Object.assign(values, labels);
                // return this.values$.next(values);
                return of(null);
            }));
        }
        else {
            return of(null);
        }
    }
    parseLabel(value, params) {
        if (value && params) {
            const TEMPLATE_REGEXP = /@([^{}\s]*)/g;
            return value.replace(TEMPLATE_REGEXP, (text, key) => {
                const replacer = params[key];
                return typeof replacer !== 'undefined' ? replacer : text;
            });
        }
        else {
            return value;
        }
    }
    getLabel(label) {
        return label.value || label.defaultValue || this.getMissingLabel(label);
    }
    getMissingLabel(label) {
        if (typeof this.missingHandler === 'function') {
            return this.missingHandler(label);
        }
        return label.id;
    }
}
LabelService.ɵfac = function LabelService_Factory(t) { return new (t || LabelService)(ɵɵinject(Injector)); };
LabelService.ɵprov = ɵɵdefineInjectable({ token: LabelService, factory: LabelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LabelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

class LabelDirective extends DisposableDirective {
    constructor(element, labelService) {
        super();
        this.element = element;
        this.labelService = labelService;
    }
    ngOnInit() {
        this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe(label => {
            this.element.nativeElement.innerHTML = label;
        });
    }
}
LabelDirective.ɵfac = function LabelDirective_Factory(t) { return new (t || LabelDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LabelService)); };
LabelDirective.ɵdir = ɵɵdefineDirective({ type: LabelDirective, selectors: [["", "label", ""]], inputs: { label: "label", labelParams: "labelParams" }, features: [ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LabelDirective, [{
        type: Directive,
        args: [{
                selector: '[label]'
            }]
    }], function () { return [{ type: ElementRef }, { type: LabelService }]; }, { label: [{
            type: Input
        }], labelParams: [{
            type: Input
        }] }); })();

class LabelPipe {
    constructor(labelService) {
        this.labelService = labelService;
    }
    transform(key, defaultValue, params) {
        return this.labelService.transform(key, defaultValue, params);
    }
}
LabelPipe.ɵfac = function LabelPipe_Factory(t) { return new (t || LabelPipe)(ɵɵdirectiveInject(LabelService)); };
LabelPipe.ɵpipe = ɵɵdefinePipe({ name: "label", type: LabelPipe, pure: false });
LabelPipe.ɵprov = ɵɵdefineInjectable({ token: LabelPipe, factory: LabelPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LabelPipe, [{
        type: Pipe,
        args: [{
                name: 'label',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: LabelService }]; }, null); })();

function LoggerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "\u00A0 ");
    ɵɵelementStart(4, "span", 2);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtext(6, "\u00A0 ");
    ɵɵelementStart(7, "span", 3);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵtext(9, "\u00A0 ");
    ɵɵelementStart(10, "span", 4);
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", "http--" + ctx_r1.logger.httpError.statusType);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.logger.httpError.statusType);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.logger.httpError.status);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.logger.httpError.url);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.logger.httpError.body == null ? null : ctx_r1.logger.httpError.body.error);
} }
class LoggerComponent {
    constructor(logger) {
        this.logger = logger;
    }
    ngOnInit() {
    }
}
LoggerComponent.ɵfac = function LoggerComponent_Factory(t) { return new (t || LoggerComponent)(ɵɵdirectiveInject(Logger)); };
LoggerComponent.ɵcmp = ɵɵdefineComponent({ type: LoggerComponent, selectors: [["core-logger"]], decls: 1, vars: 1, consts: [["class", "error-http", 3, "ngClass", 4, "ngIf"], [1, "error-http", 3, "ngClass"], [1, "status"], [1, "url"], [1, "message"]], template: function LoggerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, LoggerComponent_div_0_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.logger.httpError);
    } }, directives: [NgIf, NgClass], styles: [".error-http[_ngcontent-%COMP%]{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoggerComponent, [{
        type: Component,
        args: [{
                selector: 'core-logger',
                templateUrl: './logger.component.html',
                styleUrls: ['./logger.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: Logger }]; }, null); })();

const OUTLETS = new InjectionToken('core.outlets');
class Outlet {
}

class OutletDefaultComponent extends DisposableComponent {
}
OutletDefaultComponent.ɵfac = function OutletDefaultComponent_Factory(t) { return ɵOutletDefaultComponent_BaseFactory(t || OutletDefaultComponent); };
OutletDefaultComponent.ɵcmp = ɵɵdefineComponent({ type: OutletDefaultComponent, selectors: [["outlet-content-component"]], inputs: { outlet: "outlet" }, features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "outlet"]], template: function OutletDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, "Outlet not found!");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
const ɵOutletDefaultComponent_BaseFactory = ɵɵgetInheritedFactory(OutletDefaultComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(OutletDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-content-component',
                template: `<div class="outlet">Outlet not found!</div>`,
            }]
    }], null, { outlet: [{
            type: Input
        }] }); })();

class OutletResolverService {
    constructor(outlets) {
        outlets = outlets || {};
    }
    resolve(outlet) {
        let component;
        if (outlet) {
            component = this.outlets[outlet.component] || OutletDefaultComponent;
        }
        else {
            component = OutletDefaultComponent;
        }
        return component;
    }
}
OutletResolverService.ɵfac = function OutletResolverService_Factory(t) { return new (t || OutletResolverService)(ɵɵinject(OUTLETS)); };
OutletResolverService.ɵprov = ɵɵdefineInjectable({ token: OutletResolverService, factory: OutletResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OutletResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [OUTLETS]
            }] }]; }, null); })();

const _c0$1 = ["outlet"];
class OutletComponent extends DisposableComponent {
    constructor(componentFactoryResolver, outletResolverService) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
        this.outletResolverService = outletResolverService;
    }
    ngOnInit() {
        const component = this.outletResolverService.resolve(this.outlet);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(factory);
        const instance = componentRef.instance;
        instance.outlet = this.outlet;
        if (typeof instance['OutletInit'] === 'function') {
            instance['OutletInit']();
        }
        this.componentRef = componentRef;
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(OutletResolverService)); };
OutletComponent.ɵcmp = ɵɵdefineComponent({ type: OutletComponent, selectors: [["outlet-component"]], viewQuery: function OutletComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    } }, inputs: { outlet: "outlet" }, features: [ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function OutletComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OutletComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-component',
                template: '',
            }]
    }], function () { return [{ type: ComponentFactoryResolver }, { type: OutletResolverService }]; }, { outlet: [{
            type: Input
        }], viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: false }]
        }] }); })();

function OutletRepeaterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "outlet-component", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const outlet_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("outlet", outlet_r3);
} }
class OutletRepeaterComponent extends DisposableComponent {
}
OutletRepeaterComponent.ɵfac = function OutletRepeaterComponent_Factory(t) { return ɵOutletRepeaterComponent_BaseFactory(t || OutletRepeaterComponent); };
OutletRepeaterComponent.ɵcmp = ɵɵdefineComponent({ type: OutletRepeaterComponent, selectors: [["outlet-repeater-component"]], inputs: { outlets: "outlets" }, features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "outlet"]], template: function OutletRepeaterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, OutletRepeaterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.outlets);
    } }, directives: [NgForOf, OutletComponent], encapsulation: 2 });
const ɵOutletRepeaterComponent_BaseFactory = ɵɵgetInheritedFactory(OutletRepeaterComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(OutletRepeaterComponent, [{
        type: Component,
        args: [{
                selector: 'outlet-repeater-component',
                template: `<ng-container *ngFor="let outlet of outlets"><outlet-component [outlet]="outlet"></outlet-component></ng-container>`,
            }]
    }], null, { outlets: [{
            type: Input
        }] }); })();

class AssetPipe {
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    transform(data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            const segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    }
}
AssetPipe.ɵfac = function AssetPipe_Factory(t) { return new (t || AssetPipe)(ɵɵdirectiveInject(CoreService), ɵɵdirectiveInject(SegmentPipe)); };
AssetPipe.ɵpipe = ɵɵdefinePipe({ name: "asset", type: AssetPipe, pure: true });
AssetPipe.ɵprov = ɵɵdefineInjectable({ token: AssetPipe, factory: AssetPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AssetPipe, [{
        type: Pipe,
        args: [{
                name: 'asset',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CoreService }, { type: SegmentPipe }]; }, null); })();

class CustomAsyncPipe {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.subject = null;
        this.subscription = null;
        this.value = null;
        this.cachedValue = null;
    }
    transform(subject) {
        return this.observableToValue(subject);
    }
    observableToValue(subject) {
        if (subject !== this.subject) {
            if (this.subject) {
                this.dispose();
            }
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((value) => {
                    // console.log('CustomAsyncPipe.A', value);
                    this.value = value;
                    this.changeDetector.markForCheck(); // mark pipe as dirty
                });
                this.cachedValue = this.value; // ???
                return this.value;
            }
        }
        // console.log('CustomAsyncPipe.B', this.value);
        if (this.cachedValue !== this.value) {
            this.cachedValue = this.value;
            return WrappedValue.wrap(this.value); // notify that value has changed
        }
        return this.cachedValue; // return cachedValue
    }
    dispose() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    }
    ngOnDestroy() {
        this.dispose();
    }
    _observableToValue(subject) {
        if (!this.subject) {
            if (subject) {
                this.subject = subject;
                this.subscription = this.subject.subscribe((value) => {
                    this.value = value;
                    this.changeDetector.markForCheck(); // value has changed
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
        return WrappedValue.wrap(this.value); // value has changed
    }
}
CustomAsyncPipe.ɵfac = function CustomAsyncPipe_Factory(t) { return new (t || CustomAsyncPipe)(ɵɵinjectPipeChangeDetectorRef()); };
CustomAsyncPipe.ɵpipe = ɵɵdefinePipe({ name: "customAsync", type: CustomAsyncPipe, pure: false });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomAsyncPipe, [{
        type: Pipe,
        args: [{
                name: 'customAsync',
                pure: false
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, null); })();

var ImageType;
(function (ImageType) {
    ImageType[ImageType["Default"] = 1] = "Default";
    ImageType[ImageType["Gallery"] = 2] = "Gallery";
    ImageType[ImageType["Share"] = 3] = "Share";
})(ImageType || (ImageType = {}));
class Image {
}

class ImageUrlPipe {
    transform(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        const imageType = ImageType[type] || ImageType.Default;
        let image = null;
        if (images && images.length) {
            image = images.find(i => i.type === imageType) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImageUrlPipe.ɵfac = function ImageUrlPipe_Factory(t) { return new (t || ImageUrlPipe)(); };
ImageUrlPipe.ɵpipe = ɵɵdefinePipe({ name: "imageUrl", type: ImageUrlPipe, pure: true });
ImageUrlPipe.ɵprov = ɵɵdefineInjectable({ token: ImageUrlPipe, factory: ImageUrlPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ImageUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'imageUrl',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class ImagePipe {
    transform(images, type, queryString) {
        type = type || 'Default';
        const imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find(i => i.type === imageType) || null : null; // images[0]
    }
    // 21 marzo 2019
    transform__(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        const imageType = ImageType[type] || ImageType.Default;
        let image = null;
        if (images && images.length) {
            image = images.find(i => i.type === imageType); // || images[0];
            if (!image && imageType !== ImageType.Default) {
                image = images.find(i => i.type === ImageType.Default);
            }
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImagePipe.ɵfac = function ImagePipe_Factory(t) { return new (t || ImagePipe)(); };
ImagePipe.ɵpipe = ɵɵdefinePipe({ name: "image", type: ImagePipe, pure: true });
ImagePipe.ɵprov = ɵɵdefineInjectable({ token: ImagePipe, factory: ImagePipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ImagePipe, [{
        type: Pipe,
        args: [{
                name: 'image',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class PublicPipe {
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    transform(data) {
        const segments = this.segment.transform(data);
        segments.unshift(this.coreService.options.public);
        return segments.join('/');
    }
}
PublicPipe.ɵfac = function PublicPipe_Factory(t) { return new (t || PublicPipe)(ɵɵdirectiveInject(CoreService), ɵɵdirectiveInject(SegmentPipe)); };
PublicPipe.ɵpipe = ɵɵdefinePipe({ name: "public", type: PublicPipe, pure: true });
PublicPipe.ɵprov = ɵɵdefineInjectable({ token: PublicPipe, factory: PublicPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PublicPipe, [{
        type: Pipe,
        args: [{
                name: 'public',
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CoreService }, { type: SegmentPipe }]; }, null); })();

class RoutePipe {
    constructor(routeService) {
        this.routeService = routeService;
    }
    transform(data) {
        return this.routeService.toRoute(data);
    }
}
RoutePipe.ɵfac = function RoutePipe_Factory(t) { return new (t || RoutePipe)(ɵɵdirectiveInject(RouteService)); };
RoutePipe.ɵpipe = ɵɵdefinePipe({ name: "route", type: RoutePipe, pure: false });
RoutePipe.ɵprov = ɵɵdefineInjectable({ token: RoutePipe, factory: RoutePipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RoutePipe, [{
        type: Pipe,
        args: [{
                name: 'route',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: RouteService }]; }, null); })();

class EntityService extends IdentityService {
    get collection() {
        return '/api/entity';
    }
    getDetailByName(name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name });
    }
}
EntityService.ɵfac = function EntityService_Factory(t) { return ɵEntityService_BaseFactory(t || EntityService); };
EntityService.ɵprov = ɵɵdefineInjectable({ token: EntityService, factory: EntityService.ɵfac, providedIn: 'root' });
const ɵEntityService_BaseFactory = ɵɵgetInheritedFactory(EntityService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(EntityService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class SlugKey {
}
class SlugService extends EntityService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.keys = {};
        this.values$ = new BehaviorSubject({});
        this.emitter$ = new EventEmitter();
    }
    get collection() {
        return `/api/slug`;
    }
    transform(key) {
        const values = this.values$.getValue();
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
    }
    transform$(key) {
        const values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(values[key]);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map(values => values[key]));
    }
    observe$() {
        return this.emitter$.pipe(debounceTime(1), switchMap(x => this.collect$()), filter(x => x !== null), first());
    }
    collect$() {
        if (Object.keys(this.keys).length) {
            const keys = Object.keys(this.keys).map(x => this.keys[x]);
            this.keys = {};
            return this.statePost(keys).pipe(map((items) => {
                return items.reduce((values, x) => {
                    values[x.mnemonic] = [x.slug];
                    return values;
                }, {});
            }), tap((slugs) => {
                const values = this.values$.getValue();
                Object.assign(values, slugs);
                this.values$.next(values);
            }), catchError(error => {
                console.log(error);
                const labels = keys.reduce((values, x) => {
                    values[x.mnemonic] = null;
                    return values;
                }, {});
                const values = this.values$.getValue();
                Object.assign(values, labels);
                return of(null);
            }));
        }
        else {
            return of(null);
        }
    }
}
SlugService.ɵfac = function SlugService_Factory(t) { return new (t || SlugService)(ɵɵinject(Injector)); };
SlugService.ɵprov = ɵɵdefineInjectable({ token: SlugService, factory: SlugService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlugService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

class SlugPipe {
    constructor(slugService, routePipe) {
        this.slugService = slugService;
        this.routePipe = routePipe;
    }
    transform(key, segments) {
        const slug = this.slugService.transform(key);
        if (slug) {
            let slugs = this.routePipe.transform(slug);
            if (slugs && segments) {
                slugs = slugs.concat(segments);
            }
            return slugs;
        }
        else {
            return [];
        }
    }
}
SlugPipe.ɵfac = function SlugPipe_Factory(t) { return new (t || SlugPipe)(ɵɵdirectiveInject(SlugService), ɵɵdirectiveInject(RoutePipe)); };
SlugPipe.ɵpipe = ɵɵdefinePipe({ name: "slug", type: SlugPipe, pure: false });
SlugPipe.ɵprov = ɵɵdefineInjectable({ token: SlugPipe, factory: SlugPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlugPipe, [{
        type: Pipe,
        args: [{
                name: 'slug',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: SlugService }, { type: RoutePipe }]; }, null); })();

class TranslateDirective extends DisposableDirective {
    constructor(element, translateService) {
        super();
        this.element = element;
        this.translateService = translateService;
    }
    ngOnInit() {
        // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(takeUntil(this.unsubscribe)).subscribe(translate => {
            this.element.nativeElement.innerHTML = translate;
            // console.log('TranslateDirective.ngOnInit', translate);
        });
        // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(TranslateService)); };
TranslateDirective.ɵdir = ɵɵdefineDirective({ type: TranslateDirective, selectors: [["", "translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" }, features: [ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslateDirective, [{
        type: Directive,
        args: [{
                selector: '[translate]'
            }]
    }], function () { return [{ type: ElementRef }, { type: TranslateService }]; }, { translate: [{
            type: Input
        }], translateParams: [{
            type: Input
        }] }); })();

class TranslatePipe {
    constructor(ref, translateService) {
        this.ref = ref;
        this.translateService = translateService;
        this.translateService.events.subscribe(x => this.ref.markForCheck());
    }
    transform(key, text, params) {
        // console.log(key, params);
        const label = this.translateService.getTranslate(key, text, params);
        // console.log('label', label, this.translateService.cache);
        return label;
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(ɵɵinjectPipeChangeDetectorRef(), ɵɵdirectiveInject(TranslateService)); };
TranslatePipe.ɵpipe = ɵɵdefinePipe({ name: "translate", type: TranslatePipe, pure: false });
TranslatePipe.ɵprov = ɵɵdefineInjectable({ token: TranslatePipe, factory: TranslatePipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslatePipe, [{
        type: Pipe,
        args: [{
                name: 'translate',
                pure: false,
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: TranslateService }]; }, null); })();

class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}
SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) { return new (t || SafeStylePipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeStylePipe.ɵpipe = ɵɵdefinePipe({ name: "safeStyle", type: SafeStylePipe, pure: true });
SafeStylePipe.ɵprov = ɵɵdefineInjectable({ token: SafeStylePipe, factory: SafeStylePipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeStylePipe, [{
        type: Pipe,
        args: [{
                name: 'safeStyle'
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeUrlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeUrl", type: SafeUrlPipe, pure: true });
SafeUrlPipe.ɵprov = ɵɵdefineInjectable({ token: SafeUrlPipe, factory: SafeUrlPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeUrl'
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

class TrustPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
        // return this.sanitizer.bypassSecurityTrustStyle(text);
        // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
    }
}
TrustPipe.ɵfac = function TrustPipe_Factory(t) { return new (t || TrustPipe)(ɵɵdirectiveInject(DomSanitizer)); };
TrustPipe.ɵpipe = ɵɵdefinePipe({ name: "safeHtml", type: TrustPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TrustPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

const components = [
    CoreModuleComponent,
    DisposableComponent,
    DisposableDirective,
    JsonFormatterComponent,
    LoggerComponent,
    OutletComponent,
    OutletDefaultComponent,
    OutletRepeaterComponent,
];
const directives = [
    BundleDirective,
    DefaultContentDirective,
    LabelDirective,
    TranslateDirective,
];
const pipes = [
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
const validators = [];
const guards = [];
class CoreModule {
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    static forRoot(bundles, config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: BUNDLES, useValue: bundles || {}
                }]
        };
    }
}
CoreModule.ɵmod = ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(ɵɵinject(CoreModule, 12)); }, providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        ...validators,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CoreModule, { declarations: [CoreModuleComponent,
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
        TrustPipe], imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule], exports: [CoreModuleComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                entryComponents: [
                    ...components
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

class Label {
}

class Document {
}
class DocumentIndex {
}

class DocumentService extends EntityService {
    get collection() {
        return '/api/document';
    }
    getDetailBySlug(slug) {
        if (!slug.trim()) {
            // if not search term, return empty identity array.
            return of();
        }
        return this.get({ slug }).pipe(
        // tap(x => this.logger.log(`found identities matching "${slug}"`)),
        switchMap(x => of(x[0])));
    }
}
DocumentService.ɵfac = function DocumentService_Factory(t) { return ɵDocumentService_BaseFactory(t || DocumentService); };
DocumentService.ɵprov = ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
const ɵDocumentService_BaseFactory = ɵɵgetInheritedFactory(DocumentService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DocumentService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class Entity {
}

class EventEntity {
}
class EventDispatcherService {
    constructor() {
        this.emitter = new EventEmitter();
    }
    emit(event) {
        return this.emitter.emit(event);
    }
    observe() {
        return this.emitter.pipe(tap((event) => console.log('EventDispatcherService', event)));
    }
}
EventDispatcherService.ɵfac = function EventDispatcherService_Factory(t) { return new (t || EventDispatcherService)(); };
EventDispatcherService.ɵprov = ɵɵdefineInjectable({ token: EventDispatcherService, factory: EventDispatcherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EventDispatcherService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class Feature {
    constructor() {
        this.readmore = false;
    }
}

class Identity {
}

class MenuItem {
    constructor(options) {
        if (options) {
            Object.assign(this, options);
            if (options.items) {
                this.items = options.items.map(item => new MenuItem(item));
            }
        }
    }
}

class MenuService extends EntityService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    get collection() {
        return '/api/menu';
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(ɵɵinject(Injector)); };
MenuService.ɵprov = ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MenuService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Injector }]; }, null); })();

class Taxonomy {
}

// export class OnceEvent extends Event { }
class OnceService {
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.uid = 0;
        this.paths = [];
    }
    script(url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                let callbackName;
                if (callback === true) {
                    callbackName = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName);
                }
                else {
                    callbackName = callback;
                }
                let callback$;
                const element = document.createElement('script');
                element.type = 'text/javascript';
                if (callback) {
                    callback$ = from(new Promise((resolve, reject) => {
                        window[callbackName] = function (data) {
                            resolve(data);
                        };
                    }));
                }
                else {
                    element.async = true;
                    callback$ = fromEvent(element, 'load').pipe(map(x => x));
                }
                const scripts = document.getElementsByTagName('script');
                if (scripts.length) {
                    const script = scripts[scripts.length - 1];
                    script.parentNode.insertBefore(element, script.nextSibling);
                }
                element.src = url;
                return callback$;
            }
            else {
                return of(new Event('loaded!'));
            }
            // });
        }
        else {
            return of(null);
        }
    }
}
OnceService.ɵfac = function OnceService_Factory(t) { return new (t || OnceService)(ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); };
OnceService.ɵprov = ɵɵdefineInjectable({ token: OnceService, factory: OnceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OnceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: NgZone }]; }, null); })();

class Translate {
}

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiRequestOptions, ApiService, AssetPipe, AuthService, AuthStrategy, AuthToken, BUNDLES, BundleDirective, CORE_CONFIG, CookieStorageService, CoreConfig, CoreModule, CoreModuleComponent, CoreService, CustomAsyncPipe, DefaultContentDirective, DisposableComponent, DisposableDirective, Document, DocumentIndex, DocumentService, Entity, EntityService, EventDispatcherService, Feature, HighlightPipe, HttpResponseInterceptor, HttpStatusCodeService, Identity, IdentityService, Image, ImagePipe, ImageType, ImageUrlPipe, JsonFormatterComponent, Label, LabelDirective, LabelPipe, LabelService, LocalStorageService, Logger, LoggerComponent, LoggerErrorStrategy, MenuItem, MenuService, OUTLETS, OnceService, Outlet, OutletComponent, OutletDefaultComponent, OutletRepeaterComponent, PublicPipe, RoutePipe, RouteService, SafeStylePipe, SafeUrlPipe, SegmentPipe, SessionStorageService, SlugPipe, SlugService, StorageService, Taxonomy, Translate, TranslateDirective, TranslatePipe, TranslateService, TrustPipe };
//# sourceMappingURL=designr-core.js.map
