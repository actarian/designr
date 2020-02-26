import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
const TIMEOUT = 5 * 60 * 1000; // five minutes
/*
export class StorageEvent extends Event {}

export class CookieStorageEvent extends StorageEvent { }

export class SessionStorageEvent extends StorageEvent { }

export class LocalStorageEvent extends StorageEvent { }
*/
export class StorageService {
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
StorageService.ɵprov = i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
export class CookieStorageService {
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
CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(StorageService)); };
CookieStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CookieStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: StorageService }]; }, null); })();
export class SessionStorageService {
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
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(CookieStorageService)); };
SessionStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SessionStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CookieStorageService }]; }, null); })();
export class LocalStorageService {
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
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(CookieStorageService)); };
LocalStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CookieStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdEMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxlQUFlO0FBRTlDOzs7Ozs7OztFQVFFO0FBS0YsTUFBTSxPQUFPLGNBQWM7SUFDbkIsTUFBTSxDQUFDLElBQVksSUFBVSxDQUFDO0lBQzlCLEtBQUssQ0FBQyxJQUFZLElBQWEsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxJQUFZLElBQVMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBVSxFQUFFLElBQWEsSUFBVSxDQUFDO0lBQ3RELEVBQUUsS0FBc0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE1BQU07UUFDWixpREFBaUQ7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs0RUFUVyxjQUFjO3NEQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZkLE1BQU07a0RBRU4sY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O0FBZ0JELE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsWUFDOEIsVUFBa0IsRUFDdkMsY0FBOEI7UUFEVCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNuQyxDQUFD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Q2xCOztzQkFJRSxNQUFNO3VCQUFDLFdBQVc7MEJBQ1csb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVElNRU9VVCA9IDUgKiA2MCAqIDEwMDA7IC8vIGZpdmUgbWludXRlc1xuXG4vKlxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VFdmVudCBleHRlbmRzIEV2ZW50IHt9XG5cbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlRXZlbnQgZXh0ZW5kcyBTdG9yYWdlRXZlbnQgeyB9XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZUV2ZW50IGV4dGVuZHMgU3RvcmFnZUV2ZW50IHsgfVxuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlRXZlbnQgZXh0ZW5kcyBTdG9yYWdlRXZlbnQgeyB9XG4qL1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG5cdHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7IH1cblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkgeyByZXR1cm4gbnVsbDsgfVxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGF5cz86IG51bWJlcik6IHZvaWQgeyB9XG5cdHB1YmxpYyBvbigpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gb2YobnVsbCk7IH1cblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ25vIFN0b3JhZ2VTZXJ2aWNlIGF2YWlsYWJsZS4uLicpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHB1YmxpYyB0cnlHZXQoKTogU3RvcmFnZVNlcnZpY2Uge1xuXHRcdGlmICh0aGlzLmlzU3VwcG9ydGVkKCkpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdDb29raWVTdG9yYWdlU2VydmljZS5zdXBwb3J0ZWQnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS50cnlHZXQoKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZGVsZXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2V0dGVyKG5hbWUsICcnLCAtMSk7XG5cdH1cblxuXHRwdWJsaWMgZXhpc3QobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKCc7JyArIG5hbWUgKyAnPScpICE9PSAtMSB8fCBkb2N1bWVudC5jb29raWUuaW5kZXhPZihuYW1lICsgJz0nKSA9PT0gMDtcblx0fVxuXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRjb25zdCBjb29raWVOYW1lID0gbmFtZSArICc9Jztcblx0XHRjb25zdCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjID0gY2FbaV07XG5cdFx0XHR3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xuXHRcdFx0XHRjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PT0gMCkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG5cdFx0XHRcdGxldCBtb2RlbCA9IG51bGw7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0bW9kZWwgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChhdG9iKHZhbHVlKSkpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Nvb2tpZS5nZXQuZXJyb3IgcGFyc2luZycsIG5hbWUsIGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtb2RlbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGF5cz86IG51bWJlcikge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKGtleSA9PT0gJ3Bvb2wnKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0Ly8gdGhyb3cgKG5ldyBFcnJvcignY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleScpKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FjaGUucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHRjYWNoZSA9IG51bGw7XG5cdFx0XHR0aGlzLnNldHRlcihuYW1lLCBidG9hKGVuY29kZVVSSUNvbXBvbmVudChqc29uKSksIGRheXMpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdDb29raWVTZXQuZXJyb3Igc2VyaWFsaXppbmcnLCBuYW1lLCB2YWx1ZSwgZSk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Ly8gdG9kb1xuXHRcdGNvbnN0IGludGVydmFsOiBudW1iZXIgPSAxMDAwLCB0aW1lb3V0OiBudW1iZXIgPSBUSU1FT1VUO1xuXHRcdGxldCBpLCBlbGFwc2VkOiBudW1iZXIgPSAwO1xuXHRcdGZ1bmN0aW9uIGNoZWNrQ29va2llKCkge1xuXHRcdFx0aWYgKGVsYXBzZWQgPiB0aW1lb3V0KSB7XG5cdFx0XHRcdC8vIHByb21pc2UucmVqZWN0KCd0aW1lb3V0Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBjOiBhbnkgPSB0aGlzLmdldChuYW1lKTtcblx0XHRcdFx0aWYgKGMpIHtcblx0XHRcdFx0XHQvLyBwcm9taXNlLnJlc29sdmUoYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxhcHNlZCArPSBpbnRlcnZhbDtcblx0XHRcdFx0XHRpID0gc2V0VGltZW91dChjaGVja0Nvb2tpZSwgaW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNoZWNrQ29va2llKCk7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXR0ZXIobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKSB7XG5cdFx0bGV0IGV4cGlyZXM7XG5cdFx0aWYgKGRheXMpIHtcblx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdFx0XHRleHBpcmVzID0gJzsgZXhwaXJlcz0nICsgZGF0ZS50b1VUQ1N0cmluZygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBpcmVzID0gJyc7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArIGV4cGlyZXMgKyAnOyBwYXRoPS8nO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKTtcblx0fVxuXG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvb2tpZVN0b3JhZ2VTZXJ2aWNlOiBDb29raWVTdG9yYWdlU2VydmljZSxcblx0KSB7IH1cblxuXHRwdWJsaWMgdHJ5R2V0KCk6IFN0b3JhZ2VTZXJ2aWNlIHtcblx0XHRpZiAodGhpcy5pc1N1cHBvcnRlZCgpKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLnN1cHBvcnRlZCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvb2tpZVN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZXhpc3QobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZVtuYW1lXSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0aWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2Uod2luZG93LnNlc3Npb25TdG9yYWdlW25hbWVdKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlLmdldC5lcnJvciBwYXJzaW5nJywgbmFtZSwgZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHB1YmxpYyBvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdC8qXG5cdFx0cmV0dXJuICRwcm9taXNlKGZ1bmN0aW9uIChwcm9taXNlKSB7XG5cdFx0XHRjb25zdCB0aW1lb3V0ID0gVElNRU9VVDtcblx0XHRcdGxldCBpO1xuXHRcdFx0ZnVuY3Rpb24gc3RvcmFnZUV2ZW50KGUpIHtcblx0XHRcdFx0aWYgKGkpIHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoaSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGUub3JpZ2luYWxFdmVudC5rZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bGV0IHZhbHVlID0gSlNPTi5wYXJzZShlLm9yaWdpbmFsRXZlbnQubmV3VmFsdWUpO1xuXHRcdFx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlLm9uLmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlamVjdCgnZXJyb3IgcGFyc2luZyAnICsgbmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKTtcblx0XHRcdGFuZ3VsYXIuZWxlbWVudCh3aW5kb3cpLm9uKCdzdG9yYWdlJywgc3RvcmFnZUV2ZW50KTtcblx0XHRcdGkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQnKTtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXHRcdH0pO1xuXHRcdCovXG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGRheXM/OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGNhY2hlID0gW107XG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdC8vIHRocm93IChuZXcgRXJyb3IoJ2NpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXknKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhY2hlLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Y2FjaGUgPSBudWxsO1xuXHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0obmFtZSwganNvbik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1Nlc3Npb25TdG9yYWdlLnNldC5lcnJvciBzZXJpYWxpemluZycsIG5hbWUsIHZhbHVlLCBlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdGxldCBzdXBwb3J0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c3VwcG9ydGVkID0gJ3Nlc3Npb25TdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlICE9PSBudWxsO1xuXHRcdFx0XHRpZiAoc3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCAnMScpO1xuXHRcdFx0XHRcdHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0c3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdXBwb3J0ZWQ7XG5cdH1cblxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29va2llU3RvcmFnZVNlcnZpY2U6IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHB1YmxpYyB0cnlHZXQoKTogU3RvcmFnZVNlcnZpY2Uge1xuXHRcdGlmICh0aGlzLmlzU3VwcG9ydGVkKCkpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2VTZXJ2aWNlLnN1cHBvcnRlZCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvb2tpZVN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xuXHR9XG5cblx0cHVibGljIGV4aXN0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRpZiAod2luZG93LmxvY2FsU3RvcmFnZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZVtuYW1lXSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2UuZ2V0LmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Lypcblx0XHRyZXR1cm4gJHByb21pc2UoZnVuY3Rpb24gKHByb21pc2UpIHtcblx0XHRcdGNvbnN0IHRpbWVvdXQgPSBUSU1FT1VUO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmdW5jdGlvbiBzdG9yYWdlRXZlbnQoZSkge1xuXHRcdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZS5vcmlnaW5hbEV2ZW50LmtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGUub3JpZ2luYWxFdmVudC5uZXdWYWx1ZSk7XG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnTG9jYWxTdG9yYWdlLm9uLmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlcnJvcik7XG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlamVjdCgnZXJyb3IgcGFyc2luZyAnICsgbmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKTtcblx0XHRcdGFuZ3VsYXIuZWxlbWVudCh3aW5kb3cpLm9uKCdzdG9yYWdlJywgc3RvcmFnZUV2ZW50KTtcblx0XHRcdGkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQnKTtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXHRcdH0pO1xuXHRcdCovXG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG5cblx0cHVibGljIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGRheXM/OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGNhY2hlID0gW107XG5cdFx0XHRjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChrZXkgPT09ICdwb29sJykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRcdC8vIHRocm93IChuZXcgRXJyb3IoJ2NpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXknKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhY2hlLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Y2FjaGUgPSBudWxsO1xuXHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGpzb24pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2Uuc2V0LmVycm9yIHNlcmlhbGl6aW5nJywgbmFtZSwgdmFsdWUsIGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG5cdFx0bGV0IHN1cHBvcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzdXBwb3J0ZWQgPSAnbG9jYWxTdG9yYWdlJyBpbiB3aW5kb3cgJiYgd2luZG93LmxvY2FsU3RvcmFnZSAhPT0gbnVsbDtcblx0XHRcdFx0aWYgKHN1cHBvcnRlZCkge1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsICcxJyk7XG5cdFx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXN0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0c3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdXBwb3J0ZWQ7XG5cdH1cblxufVxuIl19