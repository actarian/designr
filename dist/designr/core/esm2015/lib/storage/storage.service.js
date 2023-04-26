/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
/** @type {?} */
const TIMEOUT = 5 * 60 * 1000;
// five minutes
/*
export class StorageEvent extends Event {}

export class CookieStorageEvent extends StorageEvent { }

export class SessionStorageEvent extends StorageEvent { }

export class LocalStorageEvent extends StorageEvent { }
*/
export class StorageService {
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
/** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
export class CookieStorageService {
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
            const json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
            if (elapsed > timeout) {
                // promise.reject('timeout');
            }
            else {
                /** @type {?} */
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
/** @nocollapse */ CookieStorageService.ngInjectableDef = i0.defineInjectable({ factory: function CookieStorageService_Factory() { return new CookieStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(StorageService)); }, token: CookieStorageService, providedIn: "root" });
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
export class SessionStorageService {
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
            const json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
/** @nocollapse */ SessionStorageService.ngInjectableDef = i0.defineInjectable({ factory: function SessionStorageService_Factory() { return new SessionStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: SessionStorageService, providedIn: "root" });
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
export class LocalStorageService {
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
            const json = JSON.stringify(value, (/**
             * @param {?} key
             * @param {?} value
             * @return {?}
             */
            function (key, value) {
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
            }));
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
/** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(i0.inject(i0.PLATFORM_ID), i0.inject(CookieStorageService)); }, token: LocalStorageService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7OztNQUVoQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJOzs7Ozs7Ozs7OztBQWU3QixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDbkIsTUFBTSxDQUFDLElBQVksSUFBVSxDQUFDOzs7OztJQUM5QixLQUFLLENBQUMsSUFBWSxJQUFhLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDOUMsR0FBRyxDQUFDLElBQVksSUFBUyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFDdkMsR0FBRyxDQUFDLElBQVksRUFBRSxLQUFVLEVBQUUsSUFBYSxJQUFVLENBQUM7Ozs7SUFDdEQsRUFBRSxLQUFzQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7SUFDMUMsTUFBTTtRQUNaLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7OztZQVpELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7O0FBZ0JELE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBRWhDLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCO1FBRFQsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDbkMsQ0FBQzs7OztJQUVFLE1BQU07UUFDWixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFB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LENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxXQUFXOztZQUNkLFNBQVMsR0FBWSxLQUFLO1FBQzlCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUk7Z0JBQ0gsU0FBUyxHQUFHLGNBQWMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7Z0JBQ3JFLElBQUksU0FBUyxFQUFFO29CQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDekMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNOLFNBQVMsR0FBRyxLQUFLLENBQUM7aUJBQ2xCO2FBQ0Q7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1NBQ0Q7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDOzs7WUEzR0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQUlFLE1BQU0sU0FBQyxXQUFXO1lBQ1csb0JBQW9COzs7Ozs7OztJQURsRCx5Q0FBK0M7Ozs7O0lBQy9DLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5cclxuY29uc3QgVElNRU9VVCA9IDUgKiA2MCAqIDEwMDA7IC8vIGZpdmUgbWludXRlc1xyXG5cclxuLypcclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VFdmVudCBleHRlbmRzIEV2ZW50IHt9XHJcblxyXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZUV2ZW50IGV4dGVuZHMgU3RvcmFnZUV2ZW50IHsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlRXZlbnQgZXh0ZW5kcyBTdG9yYWdlRXZlbnQgeyB9XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlRXZlbnQgZXh0ZW5kcyBTdG9yYWdlRXZlbnQgeyB9XHJcbiovXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XHJcblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfVxyXG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7IH1cclxuXHRwdWJsaWMgb24oKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIG9mKG51bGwpOyB9XHJcblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnbm8gU3RvcmFnZVNlcnZpY2UgYXZhaWxhYmxlLi4uJyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXHJcblx0KSB7IH1cclxuXHJcblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XHJcblx0XHRpZiAodGhpcy5pc1N1cHBvcnRlZCgpKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdDb29raWVTdG9yYWdlU2VydmljZS5zdXBwb3J0ZWQnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLnNldHRlcihuYW1lLCAnJywgLTEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCc7JyArIG5hbWUgKyAnPScpICE9PSAtMSB8fCBkb2N1bWVudC5jb29raWUuaW5kZXhPZihuYW1lICsgJz0nKSA9PT0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcclxuXHRcdGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lICsgJz0nO1xyXG5cdFx0Y29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGMgPSBjYVtpXTtcclxuXHRcdFx0d2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcclxuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT09IDApIHtcclxuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcblx0XHRcdFx0bGV0IG1vZGVsID0gbnVsbDtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0bW9kZWwgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHZhbHVlKSkpO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDb29raWUuZ2V0LmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG1vZGVsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FjaGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnNldHRlcihuYW1lLCBidG9hKGVuY29kZVVSSUNvbXBvbmVudChqc29uKSksIGRheXMpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQ29va2llU2V0LmVycm9yIHNlcmlhbGl6aW5nJywgbmFtZSwgdmFsdWUsIGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHQvLyB0b2RvXHJcblx0XHRjb25zdCBpbnRlcnZhbDogbnVtYmVyID0gMTAwMCwgdGltZW91dDogbnVtYmVyID0gVElNRU9VVDtcclxuXHRcdGxldCBpLCBlbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tDb29raWUoKSB7XHJcblx0XHRcdGlmIChlbGFwc2VkID4gdGltZW91dCkge1xyXG5cdFx0XHRcdC8vIHByb21pc2UucmVqZWN0KCd0aW1lb3V0Jyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgYzogYW55ID0gdGhpcy5nZXQobmFtZSk7XHJcblx0XHRcdFx0aWYgKGMpIHtcclxuXHRcdFx0XHRcdC8vIHByb21pc2UucmVzb2x2ZShjKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZWxhcHNlZCArPSBpbnRlcnZhbDtcclxuXHRcdFx0XHRcdGkgPSBzZXRUaW1lb3V0KGNoZWNrQ29va2llLCBpbnRlcnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjaGVja0Nvb2tpZSgpO1xyXG5cdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzZXR0ZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKSB7XHJcblx0XHRsZXQgZXhwaXJlcztcclxuXHRcdGlmIChkYXlzKSB7XHJcblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuXHRcdFx0ZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGV4cGlyZXMgPSAnJztcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIFN0b3JhZ2VTZXJ2aWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgY29va2llU3RvcmFnZVNlcnZpY2U6IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdCkgeyB9XHJcblxyXG5cdHB1YmxpYyB0cnlHZXQoKTogU3RvcmFnZVNlcnZpY2Uge1xyXG5cdFx0aWYgKHRoaXMuaXNTdXBwb3J0ZWQoKSkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLnN1cHBvcnRlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNvb2tpZVN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZVtuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xyXG5cdFx0bGV0IHZhbHVlID0gbnVsbDtcclxuXHRcdGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2VbbmFtZV0pO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlLmdldC5lcnJvciBwYXJzaW5nJywgbmFtZSwgZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0LypcclxuXHRcdHJldHVybiAkcHJvbWlzZShmdW5jdGlvbiAocHJvbWlzZSkge1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0ID0gVElNRU9VVDtcclxuXHRcdFx0bGV0IGk7XHJcblx0XHRcdGZ1bmN0aW9uIHN0b3JhZ2VFdmVudChlKSB7XHJcblx0XHRcdFx0aWYgKGkpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGUub3JpZ2luYWxFdmVudC5rZXkgPT09IG5hbWUpIHtcclxuXHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZS5vcmlnaW5hbEV2ZW50Lm5ld1ZhbHVlKTtcclxuXHRcdFx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTZXNzaW9uU3RvcmFnZS5vbi5lcnJvciBwYXJzaW5nJywgbmFtZSwgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlamVjdCgnZXJyb3IgcGFyc2luZyAnICsgbmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpO1xyXG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQod2luZG93KS5vbignc3RvcmFnZScsIHN0b3JhZ2VFdmVudCk7XHJcblx0XHRcdGkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRwcm9taXNlLnJlamVjdCgndGltZW91dCcpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHRcdHJldHVybiBvZihudWxsKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FjaGUgPSBudWxsO1xyXG5cdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBqc29uKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlLnNldC5lcnJvciBzZXJpYWxpemluZycsIG5hbWUsIHZhbHVlLCBlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHN1cHBvcnRlZCA9ICdzZXNzaW9uU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZSAhPT0gbnVsbDtcclxuXHRcdFx0XHRpZiAoc3VwcG9ydGVkKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsICcxJyk7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1cHBvcnRlZDtcclxuXHR9XHJcblxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBjb29raWVTdG9yYWdlU2VydmljZTogQ29va2llU3RvcmFnZVNlcnZpY2UsXHJcblx0KSB7IH1cclxuXHJcblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XHJcblx0XHRpZiAodGhpcy5pc1N1cHBvcnRlZCgpKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2VTZXJ2aWNlLnN1cHBvcnRlZCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmNvb2tpZVN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XHJcblx0XHRsZXQgdmFsdWUgPSBudWxsO1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlW25hbWVdKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2UuZ2V0LmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHQvKlxyXG5cdFx0cmV0dXJuICRwcm9taXNlKGZ1bmN0aW9uIChwcm9taXNlKSB7XHJcblx0XHRcdGNvbnN0IHRpbWVvdXQgPSBUSU1FT1VUO1xyXG5cdFx0XHRsZXQgaTtcclxuXHRcdFx0ZnVuY3Rpb24gc3RvcmFnZUV2ZW50KGUpIHtcclxuXHRcdFx0XHRpZiAoaSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZS5vcmlnaW5hbEV2ZW50LmtleSA9PT0gbmFtZSkge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0bGV0IHZhbHVlID0gSlNPTi5wYXJzZShlLm9yaWdpbmFsRXZlbnQubmV3VmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlc29sdmUodmFsdWUpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0xvY2FsU3RvcmFnZS5vbi5lcnJvciBwYXJzaW5nJywgbmFtZSwgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlamVjdCgnZXJyb3IgcGFyc2luZyAnICsgbmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpO1xyXG5cdFx0XHRhbmd1bGFyLmVsZW1lbnQod2luZG93KS5vbignc3RvcmFnZScsIHN0b3JhZ2VFdmVudCk7XHJcblx0XHRcdGkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRwcm9taXNlLnJlamVjdCgndGltZW91dCcpO1xyXG5cdFx0XHR9LCB0aW1lb3V0KTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHRcdHJldHVybiBvZihudWxsKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcclxuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y2FjaGUgPSBudWxsO1xyXG5cdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwganNvbik7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2Uuc2V0LmVycm9yIHNlcmlhbGl6aW5nJywgbmFtZSwgdmFsdWUsIGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcclxuXHRcdGxldCBzdXBwb3J0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0c3VwcG9ydGVkID0gJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XHJcblx0XHRcdFx0aWYgKHN1cHBvcnRlZCkge1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgJzEnKTtcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVzdCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1cHBvcnRlZDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==