/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
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
    function () { return of(null); };
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());
export { StorageService };
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
            var json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
            if (elapsed > timeout) {
                // promise.reject('timeout');
            }
            else {
                /** @type {?} */
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
        return of(null);
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
        return isPlatformBrowser(this.platformId);
    };
    CookieStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CookieStorageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: StorageService }
    ]; };
    /** @nocollapse */ CookieStorageService.ngInjectableDef = i0.defineInjectable({ factory: function CookieStorageService_Factory() { return new CookieStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(StorageService)); }, token: CookieStorageService, providedIn: "root" });
    return CookieStorageService;
}());
export { CookieStorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CookieStorageService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    CookieStorageService.prototype.storageService;
}
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
        return of(null);
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
            var json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
    };
    SessionStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SessionStorageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CookieStorageService }
    ]; };
    /** @nocollapse */ SessionStorageService.ngInjectableDef = i0.defineInjectable({ factory: function SessionStorageService_Factory() { return new SessionStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: SessionStorageService, providedIn: "root" });
    return SessionStorageService;
}());
export { SessionStorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SessionStorageService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    SessionStorageService.prototype.cookieStorageService;
}
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
        return of(null);
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
            var json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
    };
    LocalStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LocalStorageService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: CookieStorageService }
    ]; };
    /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: LocalStorageService, providedIn: "root" });
    return LocalStorageService;
}());
export { LocalStorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStorageService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    LocalStorageService.prototype.cookieStorageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQUVoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJOzs7Ozs7Ozs7OztBQVk3QjtJQUFBO0tBYUM7Ozs7O0lBVE8sK0JBQU07Ozs7SUFBYixVQUFjLElBQVksSUFBVSxDQUFDOzs7OztJQUM5Qiw4QkFBSzs7OztJQUFaLFVBQWEsSUFBWSxJQUFhLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDOUMsNEJBQUc7Ozs7SUFBVixVQUFXLElBQVksSUFBUyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFDdkMsNEJBQUc7Ozs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLEtBQVUsRUFBRSxJQUFhLElBQVUsQ0FBQzs7OztJQUN0RCwyQkFBRTs7O0lBQVQsY0FBK0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0lBQzFDLCtCQUFNOzs7SUFBYjtRQUNDLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O2dCQVpELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozt5QkFsQkQ7Q0E2QkMsQUFiRCxJQWFDO1NBVlksY0FBYztBQVkzQjtJQUtDLDhCQUM4QixVQUFrQixFQUN2QyxjQUE4QjtRQURULGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENB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TTtpQkFDbEI7Ozs7NkNBSUUsTUFBTSxTQUFDLFdBQVc7Z0JBQ1csb0JBQW9COzs7OEJBcFFwRDtDQTBXQyxBQTdHRCxJQTZHQztTQTFHWSxtQkFBbUI7Ozs7OztJQUc5Qix5Q0FBK0M7Ozs7O0lBQy9DLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRJTUVPVVQgPSA1ICogNjAgKiAxMDAwOyAvLyBmaXZlIG1pbnV0ZXNcblxuLypcbmV4cG9ydCBjbGFzcyBTdG9yYWdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7fVxuXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZUV2ZW50IGV4dGVuZHMgU3RvcmFnZUV2ZW50IHsgfVxuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VFdmVudCBleHRlbmRzIFN0b3JhZ2VFdmVudCB7IH1cblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUV2ZW50IGV4dGVuZHMgU3RvcmFnZUV2ZW50IHsgfVxuKi9cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuXHRwdWJsaWMgZGVsZXRlKG5hbWU6IHN0cmluZyk6IHZvaWQgeyB9XG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogYW55IHsgcmV0dXJuIG51bGw7IH1cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGRheXM/OiBudW1iZXIpOiB2b2lkIHsgfVxuXHRwdWJsaWMgb24oKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIG9mKG51bGwpOyB9XG5cdHB1YmxpYyB0cnlHZXQoKTogU3RvcmFnZVNlcnZpY2Uge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdubyBTdG9yYWdlU2VydmljZSBhdmFpbGFibGUuLi4nKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcblx0KSB7IH1cblxuXHRwdWJsaWMgdHJ5R2V0KCk6IFN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRpZiAodGhpcy5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQ29va2llU3RvcmFnZVNlcnZpY2Uuc3VwcG9ydGVkJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNldHRlcihuYW1lLCAnJywgLTEpO1xuXHR9XG5cblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5jb29raWUuaW5kZXhPZignOycgKyBuYW1lICsgJz0nKSAhPT0gLTEgfHwgZG9jdW1lbnQuY29va2llLmluZGV4T2YobmFtZSArICc9JykgPT09IDA7XG5cdH1cblxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3QgY29va2llTmFtZSA9IG5hbWUgKyAnPSc7XG5cdFx0Y29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgYyA9IGNhW2ldO1xuXHRcdFx0d2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcblx0XHRcdFx0YyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcblx0XHRcdH1cblx0XHRcdGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuXHRcdFx0XHRsZXQgbW9kZWwgPSBudWxsO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG1vZGVsID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoYXRvYih2YWx1ZSkpKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDb29raWUuZ2V0LmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbW9kZWw7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGRheXM/OiBudW1iZXIpIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGNhY2hlID0gW107XG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdC8vIHRocm93IChuZXcgRXJyb3IoJ2NpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXknKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhY2hlLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Y2FjaGUgPSBudWxsO1xuXHRcdFx0dGhpcy5zZXR0ZXIobmFtZSwgYnRvYShlbmNvZGVVUklDb21wb25lbnQoanNvbikpLCBkYXlzKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQ29va2llU2V0LmVycm9yIHNlcmlhbGl6aW5nJywgbmFtZSwgdmFsdWUsIGUpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8vIHRvZG9cblx0XHRjb25zdCBpbnRlcnZhbDogbnVtYmVyID0gMTAwMCwgdGltZW91dDogbnVtYmVyID0gVElNRU9VVDtcblx0XHRsZXQgaSwgZWxhcHNlZDogbnVtYmVyID0gMDtcblx0XHRmdW5jdGlvbiBjaGVja0Nvb2tpZSgpIHtcblx0XHRcdGlmIChlbGFwc2VkID4gdGltZW91dCkge1xuXHRcdFx0XHQvLyBwcm9taXNlLnJlamVjdCgndGltZW91dCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgYzogYW55ID0gdGhpcy5nZXQobmFtZSk7XG5cdFx0XHRcdGlmIChjKSB7XG5cdFx0XHRcdFx0Ly8gcHJvbWlzZS5yZXNvbHZlKGMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsYXBzZWQgKz0gaW50ZXJ2YWw7XG5cdFx0XHRcdFx0aSA9IHNldFRpbWVvdXQoY2hlY2tDb29raWUsIGludGVydmFsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjaGVja0Nvb2tpZSgpO1xuXHRcdHJldHVybiBvZihudWxsKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0dGVyKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGF5cz86IG51bWJlcikge1xuXHRcdGxldCBleHBpcmVzO1xuXHRcdGlmIChkYXlzKSB7XG5cdFx0XHRjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRcdFx0ZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwaXJlcyA9ICcnO1xuXHRcdH1cblx0XHRkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyBleHBpcmVzICsgJzsgcGF0aD0vJztcblx0fVxuXG5cdHByaXZhdGUgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG5cdH1cblxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBTdG9yYWdlU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb29raWVTdG9yYWdlU2VydmljZTogQ29va2llU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XG5cdFx0aWYgKHRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlU2VydmljZS5zdXBwb3J0ZWQnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb29raWVTdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZGVsZXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHRcdGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKHdpbmRvdy5zZXNzaW9uU3RvcmFnZVtuYW1lXSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTZXNzaW9uU3RvcmFnZS5nZXQuZXJyb3IgcGFyc2luZycsIG5hbWUsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvKlxuXHRcdHJldHVybiAkcHJvbWlzZShmdW5jdGlvbiAocHJvbWlzZSkge1xuXHRcdFx0Y29uc3QgdGltZW91dCA9IFRJTUVPVVQ7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZ1bmN0aW9uIHN0b3JhZ2VFdmVudChlKSB7XG5cdFx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlLm9yaWdpbmFsRXZlbnQua2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZS5vcmlnaW5hbEV2ZW50Lm5ld1ZhbHVlKTtcblx0XHRcdFx0XHRcdHByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTZXNzaW9uU3RvcmFnZS5vbi5lcnJvciBwYXJzaW5nJywgbmFtZSwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cHJvbWlzZS5yZWplY3QoJ2Vycm9yIHBhcnNpbmcgJyArIG5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJyk7XG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQod2luZG93KS5vbignc3RvcmFnZScsIHN0b3JhZ2VFdmVudCk7XG5cdFx0XHRpID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHByb21pc2UucmVqZWN0KCd0aW1lb3V0Jyk7XG5cdFx0XHR9LCB0aW1lb3V0KTtcblx0XHR9KTtcblx0XHQqL1xuXHRcdHJldHVybiBvZihudWxsKTtcblx0fVxuXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjYWNoZSA9IFtdO1xuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncG9vbCcpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAoY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdGNhY2hlID0gbnVsbDtcblx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdTZXNzaW9uU3RvcmFnZS5zZXQuZXJyb3Igc2VyaWFsaXppbmcnLCBuYW1lLCB2YWx1ZSwgZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcblx0XHRsZXQgc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHN1cHBvcnRlZCA9ICdzZXNzaW9uU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZSAhPT0gbnVsbDtcblx0XHRcdFx0aWYgKHN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgJzEnKTtcblx0XHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3VwcG9ydGVkO1xuXHR9XG5cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvb2tpZVN0b3JhZ2VTZXJ2aWNlOiBDb29raWVTdG9yYWdlU2VydmljZSxcblx0KSB7IH1cblxuXHRwdWJsaWMgdHJ5R2V0KCk6IFN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRpZiAodGhpcy5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnTG9jYWxTdG9yYWdlU2VydmljZS5zdXBwb3J0ZWQnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb29raWVTdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZGVsZXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZVtuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0aWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFsdWUgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2VbbmFtZV0pO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnTG9jYWxTdG9yYWdlLmdldC5lcnJvciBwYXJzaW5nJywgbmFtZSwgZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8qXG5cdFx0cmV0dXJuICRwcm9taXNlKGZ1bmN0aW9uIChwcm9taXNlKSB7XG5cdFx0XHRjb25zdCB0aW1lb3V0ID0gVElNRU9VVDtcblx0XHRcdGxldCBpO1xuXHRcdFx0ZnVuY3Rpb24gc3RvcmFnZUV2ZW50KGUpIHtcblx0XHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoaSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGUub3JpZ2luYWxFdmVudC5rZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bGV0IHZhbHVlID0gSlNPTi5wYXJzZShlLm9yaWdpbmFsRXZlbnQubmV3VmFsdWUpO1xuXHRcdFx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0xvY2FsU3RvcmFnZS5vbi5lcnJvciBwYXJzaW5nJywgbmFtZSwgZXJyb3IpO1xuXHRcdFx0XHRcdFx0cHJvbWlzZS5yZWplY3QoJ2Vycm9yIHBhcnNpbmcgJyArIG5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJyk7XG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQod2luZG93KS5vbignc3RvcmFnZScsIHN0b3JhZ2VFdmVudCk7XG5cdFx0XHRpID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHByb21pc2UucmVqZWN0KCd0aW1lb3V0Jyk7XG5cdFx0XHR9LCB0aW1lb3V0KTtcblx0XHR9KTtcblx0XHQqL1xuXHRcdHJldHVybiBvZihudWxsKTtcblx0fVxuXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjYWNoZSA9IFtdO1xuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncG9vbCcpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAoY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdGNhY2hlID0gbnVsbDtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBqc29uKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTG9jYWxTdG9yYWdlLnNldC5lcnJvciBzZXJpYWxpemluZycsIG5hbWUsIHZhbHVlLCBlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdGxldCBzdXBwb3J0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c3VwcG9ydGVkID0gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG5cdFx0XHRcdGlmIChzdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAnMScpO1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3VwcG9ydGVkO1xuXHR9XG5cbn1cbiJdfQ==