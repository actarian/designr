import { FormGroup, NG_VALUE_ACCESSOR, FormControl, Validators, NG_ASYNC_VALIDATORS, NG_VALIDATORS, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { HttpErrorResponse, HttpClient, HttpHeaders, HttpParams, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { isArray, isObject } from 'util';
import { isPlatformBrowser, Location, isPlatformServer, CommonModule } from '@angular/common';
import { makeStateKey, TransferState, DomSanitizer } from '@angular/platform-browser';
import { Inject, Injectable, PLATFORM_ID, Injector, Component, ChangeDetectorRef, Pipe, InjectionToken, Directive, ElementRef, Input, Renderer2, ViewContainerRef, forwardRef, Attribute, EventEmitter, HostListener, Output, ViewEncapsulation, WrappedValue, defineInjectable, inject, INJECTOR, ViewChild, NgModule, Optional, SkipSelf, NgZone } from '@angular/core';
import { of, Subject, BehaviorSubject, throwError, from, fromEvent } from 'rxjs';
import { catchError, debounceTime, switchMap, take, tap, distinctUntilChanged, filter, first, map, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TIMEOUT = 5 * 60 * 1000;
// five minutes
/*
export class StorageEvent extends Event {}

export class CookieStorageEvent extends StorageEvent { }

export class SessionStorageEvent extends StorageEvent { }

export class LocalStorageEvent extends StorageEvent { }
*/
class StorageService {
    /**
     * @param {?} name
     * @return {?}
     */
    delete(name) { }
    /**
     * @param {?} name
     * @return {?}
     */
    exist(name) { return false; }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) { return null; }
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} days
     * @return {?}
     */
    set(name, value, days) { }
    /**
     * @return {?}
     */
    on() { return of(null); }
    /**
     * @return {?}
     */
    tryGet() {
        // console.log('no StorageService available...');
        return this;
    }
}
StorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
class CookieStorageService {
    /**
     * @param {?} platformId
     * @param {?} storageService
     */
    constructor(platformId, storageService) {
        this.platformId = platformId;
        this.storageService = storageService;
    }
    /**
     * @return {?}
     */
    tryGet() {
        if (this.isSupported()) {
            // console.log('CookieStorageService.supported');
            return this;
        }
        else {
            return this.storageService.tryGet();
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    delete(name) {
        this.setter(name, '', -1);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    exist(name) {
        return document.cookie.indexOf(';' + name + '=') !== -1 || document.cookie.indexOf(name + '=') === 0;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        /** @type {?} */
        const cookieName = name + '=';
        /** @type {?} */
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            /** @type {?} */
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(cookieName) === 0) {
                /** @type {?} */
                const value = c.substring(cookieName.length, c.length);
                /** @type {?} */
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
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} days
     * @return {?}
     */
    set(name, value, days) {
        try {
            /** @type {?} */
            let cache = [];
            /** @type {?} */
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
    /**
     * @return {?}
     */
    on() {
        // todo
        /** @type {?} */
        const interval = 1000;
        /** @type {?} */
        const timeout = TIMEOUT;
        /** @type {?} */
        let i;
        /** @type {?} */
        let elapsed = 0;
        /**
         * @return {?}
         */
        function checkCookie() {
            if (elapsed > timeout) ;
            else {
                /** @type {?} */
                const c = this.get(name);
                if (c) ;
                else {
                    elapsed += interval;
                    i = setTimeout(checkCookie, interval);
                }
            }
        }
        checkCookie();
        return of(null);
    }
    /**
     * @private
     * @param {?} name
     * @param {?} value
     * @param {?=} days
     * @return {?}
     */
    setter(name, value, days) {
        /** @type {?} */
        let expires;
        if (days) {
            /** @type {?} */
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        else {
            expires = '';
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }
    /**
     * @private
     * @return {?}
     */
    isSupported() {
        return isPlatformBrowser(this.platformId);
    }
}
CookieStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CookieStorageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: StorageService }
];
/** @nocollapse */ CookieStorageService.ngInjectableDef = defineInjectable({ factory: function CookieStorageService_Factory() { return new CookieStorageService(inject(PLATFORM_ID), inject(StorageService)); }, token: CookieStorageService, providedIn: "root" });
class SessionStorageService {
    /**
     * @param {?} platformId
     * @param {?} cookieStorageService
     */
    constructor(platformId, cookieStorageService) {
        this.platformId = platformId;
        this.cookieStorageService = cookieStorageService;
    }
    /**
     * @return {?}
     */
    tryGet() {
        if (this.isSupported()) {
            // console.log('SessionStorageService.supported');
            return this;
        }
        else {
            return this.cookieStorageService.tryGet();
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    delete(name) {
        window.sessionStorage.removeItem(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    exist(name) {
        return window.sessionStorage[name] !== undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
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
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} days
     * @return {?}
     */
    set(name, value, days) {
        try {
            /** @type {?} */
            let cache = [];
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    isSupported() {
        /** @type {?} */
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
SessionStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SessionStorageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CookieStorageService }
];
/** @nocollapse */ SessionStorageService.ngInjectableDef = defineInjectable({ factory: function SessionStorageService_Factory() { return new SessionStorageService(inject(PLATFORM_ID), inject(CookieStorageService)); }, token: SessionStorageService, providedIn: "root" });
class LocalStorageService {
    /**
     * @param {?} platformId
     * @param {?} cookieStorageService
     */
    constructor(platformId, cookieStorageService) {
        this.platformId = platformId;
        this.cookieStorageService = cookieStorageService;
    }
    /**
     * @return {?}
     */
    tryGet() {
        if (this.isSupported()) {
            // console.log('LocalStorageService.supported');
            return this;
        }
        else {
            return this.cookieStorageService.tryGet();
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    delete(name) {
        window.localStorage.removeItem(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    exist(name) {
        return window.localStorage[name] !== undefined;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
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
    /**
     * @param {?} name
     * @param {?} value
     * @param {?=} days
     * @return {?}
     */
    set(name, value, days) {
        try {
            /** @type {?} */
            let cache = [];
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    isSupported() {
        /** @type {?} */
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
LocalStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LocalStorageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CookieStorageService }
];
/** @nocollapse */ LocalStorageService.ngInjectableDef = defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(inject(PLATFORM_ID), inject(CookieStorageService)); }, token: LocalStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
class AuthToken {
    /**
     * @param {?} accessToken
     * @param {?=} expiresIn
     */
    constructor(accessToken, expiresIn = 0) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
    }
}
class AuthService {
    /**
     * @param {?} platformId
     * @param {?} injector
     * @param {?} localStorageService
     */
    constructor(platformId, injector, localStorageService) {
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
    setToken(authToken) {
        this.localStorageService.set('authToken', authToken);
        this.retryFailedRequests();
    }
    /**
     * @return {?}
     */
    getToken() {
        return (/** @type {?} */ (this.localStorageService.get('authToken')));
    }
    /**
     * @return {?}
     */
    getFakeToken() {
        return new AuthToken('fakeToken');
    }
    /**
     * @param {?} authToken
     * @return {?}
     */
    isValid(authToken) {
        // return a boolean reflecting whether or not the token is expired
        return authToken && (authToken.expiresIn > Date.now() || authToken.expiresIn === 0);
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        /** @type {?} */
        const authToken = this.getToken();
        return this.isValid(authToken);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    collectFailedRequest(request) {
        this.cachedRequests.push(request);
    }
    /**
     * @return {?}
     */
    retryFailedRequests() {
        // this method can be called after the token is refreshed
        // console.log('AuthService.retryFailedRequests');
        // retry the requests.
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Injector },
    { type: LocalStorageService }
];
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(PLATFORM_ID), inject(INJECTOR), inject(LocalStorageService)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreTransitionConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
class CorePrebootConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        console.log('CorePrebootConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
class CoreConfig {
    // ExtraOptions
    /**
     * @param {?=} options
     */
    constructor(options) {
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
        console.log('CoreConfig', options);
        if (options) {
            this.preboot = new CorePrebootConfig(options.preboot);
            this.transition = new CoreTransitionConfig(options.transition);
        }
        else {
            this.preboot = new CorePrebootConfig();
            this.transition = new CoreTransitionConfig();
        }
    }
}
/** @type {?} */
const CORE_CONFIG = new InjectionToken('core.config');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreService {
    /**
     * @param {?} options
     */
    constructor(options) {
        console.log('CoreService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
}
CoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CoreService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
];
/** @nocollapse */ CoreService.ngInjectableDef = defineInjectable({ factory: function CoreService_Factory() { return new CoreService(inject(CORE_CONFIG)); }, token: CoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultContentDirective {
    /**
     * @param {?} element
     * @param {?} container
     * @param {?} renderer
     */
    constructor(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        let hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (let i = this.element.childNodes.length - 1; i >= 0; --i) {
            /** @type {?} */
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
DefaultContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[default]',
            },] }
];
/** @nocollapse */
DefaultContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Renderer2 }
];
DefaultContentDirective.propDecorators = {
    default: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModuleComponent {
    constructor() {
        this.version = '0.0.2';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CoreModuleComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-module',
                template: `<span class="core-module">core {{version}}</span>`
            }] }
];
/** @nocollapse */
CoreModuleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DisposableComponent {
    constructor() {
        this.unsubscribe = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    }
}
DisposableComponent.decorators = [
    { type: Component, args: [{
                template: ''
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ControlBaseOptions {
}
/**
 * @template T
 */
class ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        this._originalValue = options.value;
        this.value = options.value;
        this.key = options.key;
        //
        /** @type {?} */
        const name = `${options.key || 'Control'} ${++ControlBase.uid}`;
        this.label = options.label || name;
        this.placeholder = options.placeholder || name;
        // order
        this.order = options.order === undefined ? 1 : options.order;
        this.schema = options.schema || 'text';
        this.type = options.type || this.schema;
        // validators
        this.min = options.min || null;
        this.max = options.max || null;
        this.required = !!options.required;
        this.requiredTrue = !!options.requiredTrue;
        this.email = !!options.email;
        this.minLength = options.minLength || null;
        this.maxLength = options.maxLength || null;
        this.pattern = options.pattern || null;
        this.match = options.match || null;
        // options
        this.reverse = !!options.reverse;
        this.options = options.options || [];
        // state
        this.disabled = !!options.disabled;
        // formatters
        this.step = options.step || null;
        this.format = options.format || null;
    }
}
// export class ControlBase<T> implements ControlValueAccessor {
ControlBase.uid = 0;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.reveal = { checked: false };
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    get controlRef() {
        // console.log('controlRef', this.control.key, this.form.controls);
        return this.form.controls[this.control.key];
    }
    /**
     * @return {?}
     */
    get isValid() { return this.controlRef.valid; }
    // ControlValueAccessor
    /**
     * @return {?}
     */
    getFormattedValue() {
        // console.log('ControlComponent.getFormattedValue', this.controlRef.value);
        return this.controlRef.value;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInput($event) {
        this.element = $event.target;
        this.onChange(this.element.value);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFocus($event) {
        this.blurred = false;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onFocus', this.controlRef);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onBlur($event) {
        this.blurred = true;
        this.element = $event.target;
        // this.element.value = this.controlRef.value;
        this.renderer.setProperty(this.element, 'value', this.controlRef.value);
        // console.log('ControlComponent.onBlur', this.controlRef);
        /*
        if (this.innervalue) {
            this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
        }
        */
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        // console.log('ControlComponent.formatValue', value);
        this.renderer.setProperty(this.element, 'value', value);
        // console.log('ControlEditableComponent.writeValue', value);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    parseValue(value) {
        // console.log('ControlComponent.parseValue', value);
        /** @type {?} */
        const parsed = this.innervalue;
        this.onChange(parsed);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.formatValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
        // console.log('ControlEditableComponent.registerOnChange');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
        // console.log('ControlEditableComponent.registerOnTouched');
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        // const node = this.textarea.nativeElement;
        /*
        if (isDisabled) {
            this.renderer.addClass(this.element, 'disabled');
        } else {
            this.renderer.removeClass(this.element, 'disabled');
        }
        // console.log('ControlEditableComponent.setDisabledState', isDisabled);
        */
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-control',
                template: "<ng-container [ngSwitch]=\"control.schema\">\r\n\t<ng-container *ngSwitchCase=\"'checkbox'\">\r\n\t\t<b>Checkbox</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'email'\">\r\n\t\t<b>Email</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'number'\">\r\n\t\t<b>Number</b><br>\r\n\t</ng-container>\r\n\t<ng-container *ngSwitchCase=\"'password'\">\r\n\t\t<b>Password</b><br>\r\n\t</ng-container>\r\n</ng-container>\r\n<div class=\"form-group\" [formGroup]=\"form\">\r\n\t<div [ngSwitch]=\"control.schema\">\r\n\t\t<div *ngSwitchCase=\"'checkbox'\" class=\"form-group\">\r\n\t\t\t<!-- CHECKBOX -->\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'email'\">\r\n\t\t\t<!-- EMAIL -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'number'\">\r\n\t\t\t<!-- NUMBER -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [type]=\"control.type\" [attr.step]=\"control.step\" (input)=\"onInput($event)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [value]=\"getFormattedValue()\">\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'password'\">\r\n\t\t\t<!-- PASSWORD -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<div class=\"input-group\">\r\n\t\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\" #password>\r\n\t\t\t\t<div class=\"input-group-append\" *ngIf=\"control.type === 'password'\">\r\n\t\t\t\t\t<div class=\"input-group-text\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" [attr.aria-label]=\"control.label | translate\" (input)=\"password.type = reveal.checked ? 'text' : control.type\" #password>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'radio'\" class=\"form-group\">\r\n\t\t\t<!-- RADIO -->\r\n\t\t\t<div class=\"radio\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<input type=\"radio\" class=\"form-radio-input\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t\t<span>{{ control.label | translate }}</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'select'\">\r\n\t\t\t<!-- SELECT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<select class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\">\r\n\t\t\t\t<option *ngFor=\"let opt of control.options\" [value]=\"opt.key\">{{opt.value}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'markdown'\">\r\n\t\t\t<!-- MARKDOWN -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<textarea placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" rows=\"4\"></textarea>\r\n\t\t</div>\r\n\t\t<div *ngSwitchCase=\"'text'\">\r\n\t\t\t<!-- TEXT -->\r\n\t\t\t<label [attr.for]=\"control.key\">{{ control.label | translate }}</label>\r\n\t\t\t<input placeholder=\"{{ control.placeholder | translate }}\" class=\"form-control\" [id]=\"control.key\" [formControlName]=\"control.key\" [type]=\"control.type\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"controlRef.invalid && (controlRef.dirty || controlRef.touched)\" class=\"alert alert-danger\">\r\n\t\t<div *ngIf=\"controlRef.errors.required\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.requiredTrue\">{{ 'errors.required' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.min\">{{ 'errors.min' | translate : { value: control.min } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.max\">{{ 'errors.max' | translate : { value: control.max } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.email\">{{ 'errors.email' | translate }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.minLength\">{{ 'errors.minLength' | translate : { value: control.minLength } }}</div>\r\n\t\t<div *ngIf=\"controlRef.errors.maxLength\">{{ 'errors.maxLength' | translate : { value: control.maxLength } }}</div>\r\n\t\t<!-- <div *ngIf=\"controlRef.errors.pattern\">{{ 'errors.pattern' | translate }}</div> -->\r\n\t\t<div *ngIf=\"controlRef.errors.match\">{{ 'errors.match' | translate }}</div>\r\n\t</div>\r\n</div>\r\n",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ControlComponent),
                        multi: true,
                    }]
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ControlComponent.propDecorators = {
    control: [{ type: Input }],
    form: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} otherKey
 * @param {?=} reverse
 * @param {?=} group
 * @return {?}
 */
function matchValidator(otherKey, reverse = false, group) {
    return (control) => {
        /** @type {?} */
        const otherControl = group.controls[otherKey];
        /** @type {?} */
        const value = control.value;
        // value not equal
        if (otherControl && value !== otherControl.value && !reverse) {
            return {
                match: true,
            };
        }
        // value equal and reverse
        if (otherControl && value === otherControl.value && reverse) {
            if (otherControl.errors) {
                delete otherControl.errors['match'];
                if (!Object.keys(otherControl.errors).length) {
                    otherControl.setErrors(null);
                }
            }
        }
        // value not equal and reverse
        if (otherControl && value !== otherControl.value && reverse) {
            otherControl.setErrors({
                match: true,
            });
        }
        return null;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlService {
    /**
     * @param {?} control
     * @param {?} group
     * @return {?}
     */
    getValidators(control, group) {
        /** @type {?} */
        const validators = [];
        if (control.min) {
            validators.push(Validators.min(control.min));
        }
        if (control.max) {
            validators.push(Validators.max(control.max));
        }
        if (control.required) {
            validators.push(Validators.required);
        }
        if (control.requiredTrue) {
            validators.push(Validators.requiredTrue);
        }
        if (control.email) {
            validators.push(Validators.email);
        }
        if (control.minLength) {
            validators.push(Validators.minLength(control.minLength));
        }
        if (control.maxLength) {
            validators.push(Validators.maxLength(control.maxLength));
        }
        if (control.pattern) {
            validators.push(Validators.pattern(control.pattern));
        }
        if (control.match) {
            validators.push(matchValidator(control.match, control.reverse, group));
        }
        // console.log(control.key, validators);
        return validators;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    toFormGroup(controls) {
        /** @type {?} */
        const options = {};
        controls.forEach(x => {
            // group[x.key] = new FormControl(x.value, this.getValidators(x, group));
            /** @type {?} */
            const formControl = new FormControl(x.value);
            if (x.disabled) {
                formControl.disable();
            }
            options[x.key] = formControl;
            // x.setControl(formControl); // !!!
        });
        /** @type {?} */
        const group = new FormGroup(options);
        // console.log(group);
        controls.forEach(x => {
            /** @type {?} */
            const validators = this.getValidators(x, group);
            // console.log(validators);
            group.controls[x.key].setValidators(validators);
        });
        return group;
    }
}
ControlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ControlService.ngInjectableDef = defineInjectable({ factory: function ControlService_Factory() { return new ControlService(); }, token: ControlService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEBOUNCE_TIME = 250;
class ExistsValidator {
    constructor() {
        this.values = new BehaviorSubject(null);
        this.debounced$ = this.values.pipe(debounceTime(DEBOUNCE_TIME), switchMap((value) => {
            // console.log('ExistsValidator.debounced$', value);
            return this.exists$(value);
        }), catchError((response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value && value.trim() !== '') {
            this.values.next(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            // console.log('ExistsValidator.exists$', value);
            return this.exists(value).pipe(switchMap(exists => {
                if (exists) {
                    return of({
                        exists: true,
                    });
                }
                else {
                    return of(null);
                }
            }));
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        this.value = control.value;
        return this.debounced$;
    }
}
ExistsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
                ]
            },] }
];
ExistsValidator.propDecorators = {
    exists: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlCheckbox extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'checkbox';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlEmail extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'email';
        this.type = options.type || this.type;
        this.email = true;
        this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlMarkdown extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'markdown';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlNumber extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'number';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlPassword extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'password';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlRadio extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'radio';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlSelect extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'select';
        this.options = [];
        this.options = options.options || [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlText extends ControlBase {
    /**
     * @param {?=} options
     */
    constructor(options = {}) {
        super(options);
        this.schema = 'text';
        this.type = options.type || this.type;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormService {
    /**
     * @param {?} controlService
     */
    constructor(controlService) {
        this.controlService = controlService;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getControlsFromOptions(options) {
        /** @type {?} */
        const controls = options.map(o => {
            switch (o.schema) {
                case 'checkbox':
                    return new ControlCheckbox(o);
                case 'email':
                    return new ControlEmail(o);
                case 'number':
                    return new ControlNumber(o);
                case 'password':
                    return new ControlPassword(o);
                case 'radio':
                    return new ControlRadio(o);
                case 'select':
                    return new ControlSelect(o);
                case 'markdown':
                    return new ControlMarkdown(o);
                case 'text':
                    return new ControlText(o);
                default:
                    return new ControlText(o);
            }
        });
        controls.sort((a, b) => a.order - b.order);
        return controls;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getGroupFromOptions(options) {
        /** @type {?} */
        const controls = this.getControlsFromOptions(options);
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    getGroupFromControls(controls) {
        /** @type {?} */
        const group = this.controlService.toFormGroup(controls);
        return group;
    }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [
    { type: ControlService }
];
/** @nocollapse */ FormService.ngInjectableDef = defineInjectable({ factory: function FormService_Factory() { return new FormService(inject(ControlService)); }, token: FormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatchValidator {
    /**
     * @param {?} match
     * @param {?} reverse
     */
    constructor(match, reverse) {
        this.match = match;
        this.reverse = reverse;
    }
    /**
     * @private
     * @return {?}
     */
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        // self value
        /** @type {?} */
        const value = control.value;
        // control value
        /** @type {?} */
        const input = control.root.get(this.match);
        // value not equal
        if (input && value !== input.value && !this.isReverse) {
            return {
                match: true,
            };
        }
        // value equal and reverse
        if (input && value === input.value && this.isReverse) {
            delete input.errors['match'];
            if (!Object.keys(input.errors).length) {
                input.setErrors(null);
            }
        }
        // value not equal and reverse
        if (input && value !== input.value && this.isReverse) {
            input.setErrors({
                match: true,
            });
        }
        return null;
    }
}
MatchValidator.decorators = [
    { type: Directive, args: [{
                selector: '[match][formControlName],[match][formControl],[match][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => MatchValidator), multi: true }
                ]
            },] }
];
/** @nocollapse */
MatchValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['match',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UppercaseDirective {
    constructor() {
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputChange($event) {
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    }
}
UppercaseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngModel][uppercase]'
            },] }
];
UppercaseDirective.propDecorators = {
    ngModelChange: [{ type: Output }],
    onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlightPipe {
    /**
     * @param {?} text
     * @param {?} query
     * @return {?}
     */
    transform(text, query) {
        if (!query) {
            return text;
        }
        text = this.encodeHTML(text);
        query = this.encodeHTML(query);
        /** @type {?} */
        const regExp = new RegExp('&[^;]+;|' + this.escapeRegexChars(query), 'gi');
        return text.replace(regExp, function (match) {
            return match.toLowerCase() === query.toLowerCase() ? '<strong>' + match + '</strong>' : match;
        });
    }
    /**
     * @param {?} text
     * @return {?}
     */
    escapeRegexChars(text) {
        return text.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * @param {?} text
     * @return {?}
     */
    safeToString(text) {
        return text === undefined || text === null ? '' : text.toString().trim();
    }
    /**
     * @param {?} text
     * @return {?}
     */
    encodeHTML(text) {
        return this.safeToString(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
}
HighlightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'highlight',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ HighlightPipe.ngInjectableDef = defineInjectable({ factory: function HighlightPipe_Factory() { return new HighlightPipe(); }, token: HighlightPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Logger {
    /**
     * @param {?} coreService
     */
    constructor(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    request(...args) {
        if (!this.coreService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (!this.coreService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.coreService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (!this.coreService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    http(error) {
        this.httpError = error;
        if (!this.coreService.options.production) {
            this.logs.push(error.message);
        }
        console.warn('Logger.http.error', error.status, error.statusText, error.url);
    }
    /**
     * @return {?}
     */
    clear() {
        this.httpError = null;
        this.logs = [];
    }
}
Logger.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Logger.ctorParameters = () => [
    { type: CoreService }
];
/** @nocollapse */ Logger.ngInjectableDef = defineInjectable({ factory: function Logger_Factory() { return new Logger(inject(CoreService)); }, token: Logger, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SegmentPipe {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @param {?} segments
     * @return {?}
     */
    transform(segments) {
        segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
        /** @type {?} */
        let path = segments.join('/');
        path = this.location.normalize(path);
        if (path.indexOf('/') !== 0) {
            path = `/${path}`;
        }
        segments = path.split('/');
        return segments;
    }
}
SegmentPipe.decorators = [
    { type: Pipe, args: [{
                name: 'segment',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SegmentPipe.ctorParameters = () => [
    { type: Location }
];
/** @nocollapse */ SegmentPipe.ngInjectableDef = defineInjectable({ factory: function SegmentPipe_Factory() { return new SegmentPipe(inject(Location)); }, token: SegmentPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiRequestOptions {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.params = options ? new HttpParams(options) : null;
    }
}
/**
 * @template T
 */
class ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api';
    }
    /**
     * @return {?}
     */
    get logger() {
        if (!this._logger) {
            this._logger = this.injector.get(Logger);
        }
        return this._logger;
    }
    /**
     * @return {?}
     */
    get http() {
        if (!this._http) {
            this._http = this.injector.get(HttpClient);
        }
        return this._http;
    }
    /**
     * @return {?}
     */
    get state() {
        if (!this._state) {
            this._state = this.injector.get(TransferState);
        }
        return this._state;
    }
    /**
     * @return {?}
     */
    get platformId() {
        if (!this._platformId) {
            this._platformId = this.injector.get(PLATFORM_ID);
        }
        return this._platformId;
    }
    /**
     * @return {?}
     */
    get config() {
        if (!this._config) {
            this._config = this.injector.get(CoreService).options;
        }
        return this._config;
    }
    /**
     * @return {?}
     */
    get origin() {
        if (!this._origin) {
            this._origin = this.config.origin;
        }
        return this._origin;
    }
    /**
     * @return {?}
     */
    get url() {
        /** @type {?} */
        let base = this.origin;
        /** @type {?} */
        const collection = this.collection.toLowerCase();
        if (collection.indexOf('http') === 0) {
            base = '';
        }
        return `${base}${collection}`;
    }
    /**
     * @param {?=} method
     * @return {?}
     */
    getUrl(method = '') {
        return `${this.url}${method}`;
    }
    /**
     * @param {?=} first
     * @param {?=} second
     * @return {?}
     */
    get(first$$1, second) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const params = (typeof first$$1 === 'object' ? first$$1 : second);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.get(url, options).pipe(tap(x => this.logger.request(url)));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    post(first$$1, second, third) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const model = (typeof first$$1 === 'object' ? first$$1 : second);
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.post(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    put(first$$1, second, third) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const model = (/** @type {?} */ ((typeof first$$1 === 'object' ? first$$1 : second)));
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.put(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    patch(first$$1, second, third) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const model = (/** @type {?} */ ((typeof first$$1 === 'object' ? first$$1 : second)));
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.patch(url, model, options).pipe(tap(x => this.logger.request(url)));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    delete(first$$1, second, third) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const identity = (/** @type {?} */ ((typeof first$$1 !== 'string' ? first$$1 : second)));
        /** @type {?} */
        const id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = id !== null ? this.getUrl(`${method}/${id}`) : this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap(x => this.logger.request(url)));
    }
    /**
     * @param {?} input
     * @return {?}
     */
    toCamelCase(input) {
        /** @type {?} */
        let output;
        /** @type {?} */
        let key;
        /** @type {?} */
        let keyCamelCase;
        /** @type {?} */
        let value;
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
    /**
     * @param {?} url
     * @param {?} model
     * @return {?}
     */
    getStateKey(url, model) {
        /** @type {?} */
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
        /** @type {?} */
        const key = url.replace(/(\W)/gm, '_');
        // this.logger.log('ApiService.getStateKey.key', key);
        return makeStateKey(key);
    }
    /**
     * @param {?=} first
     * @param {?=} second
     * @return {?}
     */
    stateGet(first$$1, second) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const params = (typeof first$$1 === 'object' ? first$$1 : second);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        /** @type {?} */
        const stateKey = this.getStateKey(url, params);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            /** @type {?} */
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
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    statePost(first$$1, second, third) {
        /** @type {?} */
        const method = (typeof first$$1 === 'string' ? first$$1 : '');
        /** @type {?} */
        const model = (typeof first$$1 === 'object' ? first$$1 : second);
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        /** @type {?} */
        const stateKey = this.getStateKey(url, model);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            /** @type {?} */
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
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ ApiService.ngInjectableDef = defineInjectable({ factory: function ApiService_Factory() { return new ApiService(inject(INJECTOR)); }, token: ApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslateService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/translate';
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    addLangs(lang) {
    }
    /**
     * @return {?}
     */
    getBrowserLang() {
        return 'it';
    }
}
TranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ TranslateService.ngInjectableDef = defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(inject(INJECTOR)); }, token: TranslateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class RouteService {
    /**
     * @param {?} platformId
     * @param {?} coreService
     * @param {?} injector
     * @param {?} translateService
     * @param {?} location
     * @param {?} route
     * @param {?} router
     * @param {?} segment
     */
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
    /**
     * @private
     * @return {?}
     */
    get lang() {
        return this._lang;
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            /** @type {?} */
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
            this.translateService.use(lang);
            // console.log('RouteService.set lang', lang, this.coreService.options.useLang);
            if (this.coreService.options.useLang) {
                /** @type {?} */
                const _lang = this._lang;
                /** @type {?} */
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
    /**
     * @return {?}
     */
    get currentLang() {
        return this._lang;
    }
    /**
     * @return {?}
     */
    getPageParams() {
        // console.log('RouteService.getPageParams', this.router.url);
        return this.route.queryParams.pipe(distinctUntilChanged(), switchMap(params => {
            // console.log(params);
            /** @type {?} */
            const parsed = this.parseParams(params);
            this.pageParams$.next(parsed);
            return of(parsed);
        }));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
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
    /**
     * @param {?} params
     * @return {?}
     */
    serializeParams(params) {
        /** @type {?} */
        const serialized = {};
        Object.keys(params).forEach(k => serialized[k] = this.serialize(params[k]));
        return serialized;
    }
    /**
     * @param {?} base64
     * @return {?}
     */
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
    /**
     * @param {?} object
     * @return {?}
     */
    serialize(object) {
        if (isPlatformBrowser(this.platformId)) {
            return window.btoa(JSON.stringify(object));
        }
        else {
            return Buffer.from(JSON.stringify(object), 'ascii').toString('base64');
        }
    }
    /**
     * @return {?}
     */
    getId() {
        return +this.route.snapshot.paramMap.get('id');
    }
    /**
     * @return {?}
     */
    getSlug() {
        return this.route.snapshot.paramMap.get('slug');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toRoute(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            const market = this.currentMarket;
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            segments.splice(marketIndex, 0, market);
        }
        if (this.coreService.options.useLang) {
            /** @type {?} */
            const lang = this._lang;
            /** @type {?} */
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            segments.splice(langIndex, 0, lang);
        }
        // console.log('RouteService.toRoute', segments);
        return segments;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toSlug(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        /** @type {?} */
        let paths = segments.filter(x => {
            return typeof x === 'string';
        });
        /** @type {?} */
        const datas = segments.filter(x => {
            return typeof x !== 'string';
        });
        if (this.coreService.options.useMarket) {
            /** @type {?} */
            const marketIndex = this.urlStrategy.split('/').indexOf(':market');
            if (paths.length > marketIndex) {
                paths[marketIndex] = '*';
            }
        }
        if (this.coreService.options.useLang) {
            /** @type {?} */
            const langIndex = this.urlStrategy.split('/').indexOf(':lang');
            if (paths.length > langIndex) {
                paths[langIndex] = '*';
            }
        }
        paths = paths.join('/').replace(/\/\*/gi, '').split('/');
        // console.log('RouteService.toSlug', data, paths);
        return paths.concat(datas);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    toParams(data) {
        return {
            data: window.btoa(JSON.stringify(data))
        };
    }
    /**
     * @param {?} params
     * @return {?}
     */
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
    /**
     * @param {?} lang
     * @param {?=} silent
     * @return {?}
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @private
     * @return {?}
     */
    subscribeToRouter() {
        this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((event) => {
            /** @type {?} */
            const location = this.location.normalize(event.url).split('/');
            if (this.coreService.options.useMarket) {
                /** @type {?} */
                const marketIndex = this.urlStrategy.split('/').indexOf(':market');
                /** @type {?} */
                const market = location[marketIndex];
                if (market !== this.currentMarket) {
                    this.currentMarket = market;
                    // console.log('RouteService.setMarket', market, event.url);
                }
            }
            if (this.coreService.options.useLang) {
                /** @type {?} */
                const langIndex = this.urlStrategy.split('/').indexOf(':lang');
                /** @type {?} */
                const lang = location[langIndex];
                if (lang !== this._lang) {
                    /** @type {?} */
                    const language = this._languages.getValue().find(x => x.lang === lang);
                    this._language.next(language);
                    this.translateService.use(lang);
                    // console.log('RouteService.setLang', lang, this._lang, langIndex, location, event.url);
                }
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    detectLanguage() {
        /** @type {?} */
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
            /** @type {?} */
            const request = this.injector.get('request');
            if (request) {
                acceptLanguage = request.headers['accept-language'];
                /** @type {?} */
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
        /** @type {?} */
        let detectedLanguage = this.coreService.options.defaultLanguage;
        /** @type {?} */
        const regexp = new RegExp(`(${this.coreService.options.languages ? this.coreService.options.languages.map(x => x.lang).join('|') : ''})`, 'gi');
        /** @type {?} */
        const match = (acceptLanguage || '').match(regexp);
        detectedLanguage = match ? match[0] : detectedLanguage;
        // console.log('RouteService.detectLanguage', detectedLanguage);
        return detectedLanguage;
    }
    /**
     * @return {?}
     */
    getTime() {
        if (isPlatformBrowser(this.platformId)) {
            return (performance || Date).now();
        }
        else {
            /** @type {?} */
            const time = process.hrtime();
            return (time[0] * 1e9 + time[1]) / 1e6;
        }
    }
    /**
     * @return {?}
     */
    start() {
        RouteService.startTime = this.getTime();
    }
    /**
     * @return {?}
     */
    end() {
        RouteService.endTime = this.getTime();
        console.log('RouteService.end', RouteService.endTime - RouteService.startTime);
    }
}
RouteService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RouteService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: CoreService },
    { type: Injector },
    { type: TranslateService },
    { type: Location },
    { type: ActivatedRoute },
    { type: Router },
    { type: SegmentPipe }
];
/** @nocollapse */ RouteService.ngInjectableDef = defineInjectable({ factory: function RouteService_Factory() { return new RouteService(inject(PLATFORM_ID), inject(CoreService), inject(INJECTOR), inject(TranslateService), inject(Location), inject(ActivatedRoute), inject(Router), inject(SegmentPipe)); }, token: RouteService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpStatusCodeService {
    constructor() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    /**
     * @param {?} statusCode
     * @param {?=} redirectUrl
     * @return {?}
     */
    setStatusCode(statusCode, redirectUrl = null) {
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    getStatusCode() {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    }
    /**
     * @return {?}
     */
    getRedirectUrl() {
        return this.redirectUrl;
    }
}
HttpStatusCodeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpStatusCodeService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpResponseInterceptor {
    /**
     * @param {?} injector
     * @param {?} statusCodeService
     */
    constructor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
    }
    /**
     * @return {?}
     */
    get logger() {
        if (!this._logger) {
            this._logger = this.injector.get(Logger);
        }
        return this._logger;
    }
    /**
     * @return {?}
     */
    get router() {
        if (!this._router) {
            this._router = this.injector.get(Router);
        }
        return this._router;
    }
    /**
     * @return {?}
     */
    get routeService() {
        if (!this._routeService) {
            this._routeService = this.injector.get(RouteService);
        }
        return this.routeService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // injecting request
        // parsing response
        return next.handle(request).pipe(tap((event) => {
            // console.log('HttpResponseInterceptor', event);
            this.logger.httpError = null;
            // this.logger.log(event);
            /*
            if (event instanceof HttpResponse) {
                // console.log('event instanceof HttpResponse');
                // do stuff with response if you want
            }
            */
        }), catchError((error) => {
            // console.warn('HttpResponseInterceptor', error);
            if (error instanceof HttpErrorResponse) {
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
                        this.logger.http(error);
                        break;
                }
            }
            return throwError(error);
        }));
    }
}
HttpResponseInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpResponseInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: HttpStatusCodeService }
];
/** @nocollapse */ HttpResponseInterceptor.ngInjectableDef = defineInjectable({ factory: function HttpResponseInterceptor_Factory() { return new HttpResponseInterceptor(inject(INJECTOR), inject(HttpStatusCodeService)); }, token: HttpResponseInterceptor, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import JSONFormatter from 'json-formatter-js';
class JsonFormatterComponent {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (isPlatformBrowser(this.platformId)) {
            if (!isObject(this.json) && !isArray(this.json)) {
                return;
            }
            // console.log('JsonFormatterComponent', this.json);
            if (this.elementRef) {
                this.input.nativeElement.removeChild(this.elementRef.nativeElement);
            }
            /** @type {?} */
            const JSONFormatter = require('json-formatter-js').default;
            /** @type {?} */
            const formatter = new JSONFormatter(this.json);
            /** @type {?} */
            const elementRef = formatter.render();
            this.input.nativeElement.appendChild(elementRef);
            this.elementRef = new ElementRef(elementRef);
        }
    }
}
JsonFormatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'json-formatter',
                template: `<div #jsonFormatter></div>`,
                encapsulation: ViewEncapsulation.Emulated,
                styles: [""]
            }] }
];
/** @nocollapse */
JsonFormatterComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
JsonFormatterComponent.propDecorators = {
    input: [{ type: ViewChild, args: [`jsonFormatter`,] }],
    json: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAsyncPipe {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
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
    transform(subject) {
        return this.observableToValue(subject);
    }
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    dispose() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.value = null;
        this.cachedValue = null;
        this.subscription = null;
        this.subject = null;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dispose();
    }
    /**
     * @private
     * @param {?} subject
     * @return {?}
     */
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
            return this.transform((/** @type {?} */ (subject)));
        }
        if (this.value === this.cachedValue) {
            return this.cachedValue;
        }
        this.cachedValue = this.value;
        return WrappedValue.wrap(this.value); // value has changed
    }
}
CustomAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'customAsync',
                pure: false
            },] }
];
/** @nocollapse */
CustomAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class LabelService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this._language = new BehaviorSubject({});
        this.language = this._language.asObservable();
        this._languages = new BehaviorSubject([]);
        this.languages = this._languages.asObservable();
        this.events = new EventEmitter();
        this.cache = {};
        // !!! new async pipe
        this.collectedKeys = {};
        // private cache: { [key: string]: string; } = {};
        this.labels$ = new Subject();
        this.emitter = new EventEmitter();
        this._languages.next(this.config.languages);
        this._lang = this.config.defaultLanguage;
        this.getTranslation(this.lang).subscribe(x => {
            // console.log(x);
        });
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/label';
    }
    /**
     * @return {?}
     */
    get lang() {
        return this._lang;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    set lang(lang) {
        if (lang !== this._lang) {
            this._lang = lang;
            /** @type {?} */
            const language = this._languages.getValue().find(x => x.lang === lang);
            this._language.next(language);
        }
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        if (!lang || !lang.trim()) {
            return of(null);
        }
        this.lang = lang;
        if (this.cache[lang]) {
            return of(this.cache[lang]);
        }
        else {
            return this.get({ lang }).pipe(take(1), map((x) => {
                if (x[0]) {
                    /** @type {?} */
                    const labels = x[0].labels;
                    this.cache[lang] = labels;
                    this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getLabel(key, defaultValue, params) {
        /** @type {?} */
        let value = null;
        /** @type {?} */
        let labels = this.cache[this.lang];
        if (labels) {
            /** @type {?} */
            const keys = key.split('.');
            /** @type {?} */
            let k = keys.shift();
            while (keys.length > 0 && labels[k]) {
                labels = labels[k];
                k = keys.shift();
            }
            value = labels[k] || `{${k}}`;
        }
        return this.parseLabel(value, key, defaultValue, params);
    }
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    parseLabel(value, key, defaultValue, params) {
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
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    missingLabel(key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    }
    /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    parseParams(value, params) {
        /** @type {?} */
        const TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
        return value.replace(TEMPLATE_REGEXP, (text, key) => {
            /** @type {?} */
            const replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    }
    //
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    getKey(key, defaultValue, params) {
        if (this.cache.hasOwnProperty(key)) {
            return of(this.cache[key]);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        return this.labels$.pipe(map(items => items[key] || null), filter(label => label !== null), 
        // tap(label => console.log('getKey', key, label)),
        map(label => this.parseLabel(label, key, defaultValue, params)));
    }
    /**
     * @return {?}
     */
    register() {
        return this.emitter.pipe(
        // throttleTime(500),
        tap(() => {
            this.collectKeys().pipe(first()).subscribe((keys) => {
                // console.log('LabelService.collected', keys);
            });
        }));
    }
    /**
     * @return {?}
     */
    collect() {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    }
    /**
     * @private
     * @return {?}
     */
    collectKeys() {
        /** @type {?} */
        const keys = Object.keys(this.collectedKeys).map(x => this.collectedKeys[x]);
        this.collectedKeys = {};
        if (keys.length) {
            // console.log('LabelService.collectKeys', JSON.stringify(keys));
            return this.statePost(`/api/i18n/labels`, keys).pipe(map((keys) => {
                /** @type {?} */
                const items = {};
                keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                return items;
            }), tap((items) => {
                Object.assign(this.cache, items);
                this.labels$.next(this.cache);
                // console.log('collectKeys', this.cache);
            }), catchError(error => {
                console.log('LabelService.collectKeys.error', error);
                return of({});
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
            return of({});
        }
    }
}
LabelService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ LabelService.ngInjectableDef = defineInjectable({ factory: function LabelService_Factory() { return new LabelService(inject(INJECTOR)); }, token: LabelService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelAsyncPipe {
    /**
     * @param {?} changeDetector
     * @param {?} labelService
     */
    constructor(changeDetector, labelService) {
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
    transform(key, text, params) {
        return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.asyncPipe.dispose();
    }
}
LabelAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'labelAsync',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: LabelService }
];
/** @nocollapse */ LabelAsyncPipe.ngInjectableDef = defineInjectable({ factory: function LabelAsyncPipe_Factory() { return new LabelAsyncPipe(inject(ChangeDetectorRef), inject(LabelService)); }, token: LabelAsyncPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelDirective extends DisposableComponent {
    /**
     * @param {?} element
     * @param {?} labelService
     */
    constructor(element, labelService) {
        super();
        this.element = element;
        this.labelService = labelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe(label => {
            this.element.nativeElement.innerHTML = label;
            // console.log('LabelDirective.ngOnInit', label);
        });
        // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
    }
}
LabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[label]'
            },] }
];
/** @nocollapse */
LabelDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LabelService }
];
LabelDirective.propDecorators = {
    label: [{ type: Input }],
    labelParams: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelPipe {
    /**
     * @param {?} ref
     * @param {?} labelService
     */
    constructor(ref, labelService) {
        this.ref = ref;
        this.labelService = labelService;
        this.labelService.events.subscribe(x => this.ref.markForCheck());
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        // console.log(key, params);
        // return WrappedValue.wrap(this.val);
        /** @type {?} */
        const label = this.labelService.getLabel(key, text, params);
        // console.log('label', label, this.labelService.cache);
        return label;
    }
}
LabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'label',
                pure: false,
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: LabelService }
];
/** @nocollapse */ LabelPipe.ngInjectableDef = defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(inject(ChangeDetectorRef), inject(LabelService)); }, token: LabelPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoggerComponent {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-logger',
                template: "<div class=\"error-http\" *ngIf=\"logger.httpError\">\n\t<span>error</span>&nbsp;\n\t<span class=\"status\">{{logger.httpError.status}}</span>&nbsp;\n\t<span class=\"url\">{{logger.httpError.url}}</span>&nbsp;\n\t<span class=\"message\">{{logger.httpError.body?.error}}</span>\n</div>\n<!--\n<div *ngIf=\"logger.logs.length\">\n\t<ul class=\"list-group \">\n\t\t<li class=\"list-group-item\">\n\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-sm float-right\" (click)=\"logger.clear()\" title=\"Clear Logs\">{{ 'app.clear' | translate }}</button>\n\t\t</li>\n\t\t<li class=\"list-group-item\" *ngFor='let log of logger.logs'>\n\t\t\t<span>{{log}}</span>\n\t\t</li>\n\t</ul>\n\t<br>\n</div>\n-->\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".error-http{padding:15px;max-width:1140px;margin:0 auto 10px;background:#faebd7;font-size:13px;font-family:monospace;color:#d2691e}"]
            }] }
];
/** @nocollapse */
LoggerComponent.ctorParameters = () => [
    { type: Logger }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventDispatcherService {
    constructor() {
        this.emitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emit(event) {
        return this.emitter.emit(event);
    }
    /**
     * @return {?}
     */
    observe() {
        return this.emitter.pipe(tap((event) => console.log('EventDispatcherService', event)));
    }
}
EventDispatcherService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventDispatcherService.ctorParameters = () => [];
/** @nocollapse */ EventDispatcherService.ngInjectableDef = defineInjectable({ factory: function EventDispatcherService_Factory() { return new EventDispatcherService(); }, token: EventDispatcherService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class IdentityService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/identity';
    }
    /**
     * @return {?}
     */
    getList() {
        return this.get();
    }
    /**
     * @template Data
     * @param {?} id
     * @return {?}
     */
    getDetailByIdNo404(id) {
        return this.get({ id }).pipe(map((identities) => identities[0]));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDetailById(id) {
        return this.get({ id });
    }
    /**
     * @param {?} identity
     * @return {?}
     */
    add(identity) {
        return this.post(identity);
    }
    /**
     * @param {?} identity
     * @return {?}
     */
    update(identity) {
        return this.put(identity);
    }
}
IdentityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IdentityService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ IdentityService.ngInjectableDef = defineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(inject(INJECTOR)); }, token: IdentityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class EntityService extends IdentityService {
    /**
     * @return {?}
     */
    get collection() {
        return '/api/entity';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getDetailByName(name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name });
    }
}
EntityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ EntityService.ngInjectableDef = defineInjectable({ factory: function EntityService_Factory() { return new EntityService(inject(INJECTOR)); }, token: EntityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuService extends EntityService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/menu';
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ MenuService.ngInjectableDef = defineInjectable({ factory: function MenuService_Factory() { return new MenuService(inject(INJECTOR)); }, token: MenuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// export class OnceEvent extends Event { }
class OnceService {
    /**
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(platformId, zone) {
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
    script(url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                /** @type {?} */
                let callbackName;
                if (callback === true) {
                    callbackName = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName);
                }
                else {
                    callbackName = (/** @type {?} */ (callback));
                }
                /** @type {?} */
                let callback$;
                /** @type {?} */
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
                    callback$ = fromEvent(element, 'load').pipe(map(x => (/** @type {?} */ (x))));
                }
                /** @type {?} */
                const scripts = document.getElementsByTagName('script');
                if (scripts.length) {
                    /** @type {?} */
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
OnceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OnceService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ OnceService.ngInjectableDef = defineInjectable({ factory: function OnceService_Factory() { return new OnceService(inject(PLATFORM_ID), inject(NgZone)); }, token: OnceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AssetPipe {
    /**
     * @param {?} coreService
     * @param {?} segment
     */
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            /** @type {?} */
            const segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    }
}
AssetPipe.decorators = [
    { type: Pipe, args: [{
                name: 'asset',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AssetPipe.ctorParameters = () => [
    { type: CoreService },
    { type: SegmentPipe }
];
/** @nocollapse */ AssetPipe.ngInjectableDef = defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(inject(CoreService), inject(SegmentPipe)); }, token: AssetPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ImageType = {
    Default: 1,
    Gallery: 2,
    Share: 3,
};
ImageType[ImageType.Default] = 'Default';
ImageType[ImageType.Gallery] = 'Gallery';
ImageType[ImageType.Share] = 'Share';
class Image {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImageUrlPipe {
    /**
     * @param {?} images
     * @param {?=} type
     * @param {?=} queryString
     * @return {?}
     */
    transform(images, type, queryString) {
        type = type || 'Default';
        queryString = queryString ? `?${queryString}` : '';
        /** @type {?} */
        const imageType = ImageType[type] || ImageType.Default;
        /** @type {?} */
        let image = null;
        if (images && images.length) {
            image = images.find(i => i.type === imageType) || images[0];
        }
        return image ? (image.url + queryString).replace(/ /g, '%20') : null;
    }
}
ImageUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'imageUrl',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ImageUrlPipe.ngInjectableDef = defineInjectable({ factory: function ImageUrlPipe_Factory() { return new ImageUrlPipe(); }, token: ImageUrlPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ImagePipe {
    /**
     * @param {?} images
     * @param {?=} type
     * @return {?}
     */
    transform(images, type) {
        type = type || 'Default';
        /** @type {?} */
        const imageType = ImageType[type] || ImageType.Default;
        return (images && images.length) ? images.find(i => i.type === imageType) || images[0] : null;
    }
}
ImagePipe.decorators = [
    { type: Pipe, args: [{
                name: 'image',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ImagePipe.ngInjectableDef = defineInjectable({ factory: function ImagePipe_Factory() { return new ImagePipe(); }, token: ImagePipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PublicPipe {
    /**
     * @param {?} coreService
     * @param {?} segment
     */
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        segments.unshift(this.coreService.options.public);
        return segments.join('/');
    }
}
PublicPipe.decorators = [
    { type: Pipe, args: [{
                name: 'public',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PublicPipe.ctorParameters = () => [
    { type: CoreService },
    { type: SegmentPipe }
];
/** @nocollapse */ PublicPipe.ngInjectableDef = defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(inject(CoreService), inject(SegmentPipe)); }, token: PublicPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoutePipe {
    /**
     * @param {?} routeService
     */
    constructor(routeService) {
        this.routeService = routeService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return this.routeService.toRoute(data);
    }
}
RoutePipe.decorators = [
    { type: Pipe, args: [{
                name: 'route',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RoutePipe.ctorParameters = () => [
    { type: RouteService }
];
/** @nocollapse */ RoutePipe.ngInjectableDef = defineInjectable({ factory: function RoutePipe_Factory() { return new RoutePipe(inject(RouteService)); }, token: RoutePipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlugService extends EntityService {
    constructor() {
        super(...arguments);
        this.collectedKeys = {};
        this.cache = {};
        this.slugs$ = new Subject();
        this.emitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get collection() {
        return `/api/slug`;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getKey(key) {
        if (this.cache.hasOwnProperty(key)) {
            return of(this.cache[key]);
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
        return this.slugs$.pipe(map(items => items[key]), filter(item => item !== null));
    }
    /**
     * @return {?}
     */
    register() {
        return this.emitter.pipe(
        // throttleTime(500),
        tap(() => {
            this.collectKeys().pipe(first()).subscribe((keys) => {
                // console.log('SlugService.collected', keys);
            });
        }));
    }
    /**
     * @return {?}
     */
    collect() {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    }
    /**
     * @private
     * @param {?} keys
     * @return {?}
     */
    getSlugs(keys) {
        keys = keys || [];
        return this.statePost(keys).pipe(
        // tap(items => console.log(items)),
        );
    }
    /**
     * @private
     * @return {?}
     */
    collectKeys() {
        this.slugs$.next(this.cache);
        /** @type {?} */
        const keys = Object.keys(this.collectedKeys);
        this.collectedKeys = {};
        return this.getSlugs(keys).pipe(map((items) => {
            /** @type {?} */
            const dictionary = {};
            items.forEach(x => dictionary[x.mnemonic] = [x.slug]);
            return dictionary;
        }), tap((dictionary) => {
            Object.assign(this.cache, dictionary);
            this.slugs$.next(this.cache);
        }));
    }
}
SlugService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ SlugService.ngInjectableDef = defineInjectable({ factory: function SlugService_Factory() { return new SlugService(inject(INJECTOR)); }, token: SlugService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlugAsyncPipe {
    /**
     * @param {?} changeDetector
     * @param {?} slugService
     * @param {?} routePipe
     */
    constructor(changeDetector, slugService, routePipe) {
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
    transform(key, segments) {
        /** @type {?} */
        let slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
        // console.log('SlugAsyncPipe.transform', key, slugs);
        if (slugs && segments) {
            slugs = slugs.concat(segments);
        }
        return slugs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.asyncPipe.dispose();
    }
}
SlugAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'slugAsync',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlugAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: SlugService },
    { type: RoutePipe }
];
/** @nocollapse */ SlugAsyncPipe.ngInjectableDef = defineInjectable({ factory: function SlugAsyncPipe_Factory() { return new SlugAsyncPipe(inject(ChangeDetectorRef), inject(SlugService), inject(RoutePipe)); }, token: SlugAsyncPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlugPipe {
    /**
     * @param {?} slugService
     */
    constructor(slugService) {
        this.slugService = slugService;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        return this.slugService.getKey(key);
        // return this.async.transform<any>(this.slugService.getKey(key));
        // return this.routeService.toSlug(key);
    }
}
SlugPipe.decorators = [
    { type: Pipe, args: [{
                name: 'slug',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlugPipe.ctorParameters = () => [
    { type: SlugService }
];
/** @nocollapse */ SlugPipe.ngInjectableDef = defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(inject(SlugService)); }, token: SlugPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} ref
     * @param {?} translateService
     */
    constructor(ref, translateService) {
        this.ref = ref;
        this.translateService = translateService;
        // this.translateService.events.subscribe(
        // 	x => this.ref.markForCheck()
        // );
    }
    /**
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    transform(key, params) {
        // const label = this.translateService.getLabel(key, text, params);
        return key;
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false,
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
/** @nocollapse */ TranslatePipe.ngInjectableDef = defineInjectable({ factory: function TranslatePipe_Factory() { return new TranslatePipe(inject(ChangeDetectorRef), inject(TranslateService)); }, token: TranslatePipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafeStylePipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}
SafeStylePipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeStyle'
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SafeStylePipe.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ SafeStylePipe.ngInjectableDef = defineInjectable({ factory: function SafeStylePipe_Factory() { return new SafeStylePipe(inject(DomSanitizer)); }, token: SafeStylePipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SafeUrlPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeUrl'
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ SafeUrlPipe.ngInjectableDef = defineInjectable({ factory: function SafeUrlPipe_Factory() { return new SafeUrlPipe(inject(DomSanitizer)); }, token: SafeUrlPipe, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrustPipe {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    transform(text) {
        return this.sanitizer.bypassSecurityTrustHtml(text);
        // return this.sanitizer.bypassSecurityTrustStyle(text);
        // return this.sanitizer.bypassSecurityTrustXxx(text); - see docs
    }
}
TrustPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeHtml'
            },] }
];
/** @nocollapse */
TrustPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const services = [
    AuthService,
    CoreService,
    ControlService,
    CookieStorageService,
    EventDispatcherService,
    FormService,
    HttpStatusCodeService,
    LabelService,
    LocalStorageService,
    Logger,
    MenuService,
    OnceService,
    SessionStorageService,
    StorageService,
];
/** @type {?} */
const components = [
    ControlComponent,
    CoreModuleComponent,
    DisposableComponent,
    JsonFormatterComponent,
    LoggerComponent,
];
/** @type {?} */
const directives = [
    DefaultContentDirective,
    LabelDirective,
    UppercaseDirective,
];
/** @type {?} */
const pipes = [
    AssetPipe,
    CustomAsyncPipe,
    HighlightPipe,
    ImagePipe,
    ImageUrlPipe,
    LabelAsyncPipe,
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
const validators = [
    ExistsValidator,
    MatchValidator,
];
class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    ...services,
                    ...pipes,
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Label {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Document {
}
class DocumentIndex {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DocumentService extends EntityService {
    /**
     * @return {?}
     */
    get collection() {
        return '/api/document';
    }
    /**
     * @param {?} slug
     * @return {?}
     */
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
DocumentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DocumentService.ngInjectableDef = defineInjectable({ factory: function DocumentService_Factory() { return new DocumentService(inject(INJECTOR)); }, token: DocumentService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Entity {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Feature {
    constructor() {
        this.readmore = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Identity {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuItem {
    /**
     * @param {?=} options
     */
    constructor(options) {
        if (options) {
            Object.assign(this, options);
            if (options.items) {
                this.items = options.items.map(item => new MenuItem(item));
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Taxonomy {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthService, AuthStrategy, CoreConfig, CORE_CONFIG, CoreService, DefaultContentDirective, CoreModuleComponent, CoreModule, DisposableComponent, ControlBase, ControlBaseOptions, ControlComponent, ControlService, ExistsValidator, FormService, MatchValidator, UppercaseDirective, HighlightPipe, HttpResponseInterceptor, HttpStatusCodeService, JsonFormatterComponent, Label, LabelAsyncPipe, LabelDirective, LabelPipe, LabelService, Logger, LoggerComponent, Document, DocumentIndex, DocumentService, Entity, EntityService, EventDispatcherService, Feature, Identity, IdentityService, Image, ImageType, MenuItem, MenuService, Taxonomy, OnceService, AssetPipe, CustomAsyncPipe, ImageUrlPipe, ImagePipe, PublicPipe, SegmentPipe, RoutePipe, RouteService, SlugAsyncPipe, SlugPipe, SlugService, CookieStorageService, LocalStorageService, SessionStorageService, StorageService, TranslatePipe, SafeStylePipe, SafeUrlPipe, TrustPipe, ApiService as ɵa, TranslateService as ɵb };

//# sourceMappingURL=designr-core.js.map