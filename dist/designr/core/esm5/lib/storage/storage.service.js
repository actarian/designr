import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
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
    StorageService.prototype.on = function () { return of(null); };
    StorageService.prototype.tryGet = function () {
        // console.log('no StorageService available...');
        return this;
    };
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
}());
export { StorageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
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
        return of(null);
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
        return isPlatformBrowser(this.platformId);
    };
    CookieStorageService.ɵfac = function CookieStorageService_Factory(t) { return new (t || CookieStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(StorageService)); };
    CookieStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: CookieStorageService, factory: CookieStorageService.ɵfac, providedIn: 'root' });
    return CookieStorageService;
}());
export { CookieStorageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CookieStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
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
        return of(null);
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
    SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(CookieStorageService)); };
    SessionStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
    return SessionStorageService;
}());
export { SessionStorageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SessionStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
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
        return of(null);
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
    LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(CookieStorageService)); };
    LocalStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
    return LocalStorageService;
}());
export { LocalStorageService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: CookieStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFdEMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxlQUFlO0FBRTlDOzs7Ozs7OztFQVFFO0FBRUY7SUFBQTtLQWFDO0lBVE8sK0JBQU0sR0FBYixVQUFjLElBQVksSUFBVSxDQUFDO0lBQzlCLDhCQUFLLEdBQVosVUFBYSxJQUFZLElBQWEsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlDLDRCQUFHLEdBQVYsVUFBVyxJQUFZLElBQVMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLDRCQUFHLEdBQVYsVUFBVyxJQUFZLEVBQUUsS0FBVSxFQUFFLElBQWEsSUFBVSxDQUFDO0lBQ3RELDJCQUFFLEdBQVQsY0FBK0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLCtCQUFNLEdBQWI7UUFDQyxpREFBaUQ7UUFDakQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO2dGQVRXLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmQsTUFBTTt5QkFqQm5CO0NBNkJDLEFBYkQsSUFhQztTQVZZLGNBQWM7a0RBQWQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O0FBYUQ7SUFLQyw4QkFDOEIsVUFBa0IsRUFDdkMsY0FBOEI7UUFEVCxlQUFVLEdBQVYsVUFB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QUNEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNsQjtTQUNEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQzswRkF4R1csbUJBQW1CLGNBR3RCLFdBQVcsZUFDVyxvQkFBb0I7K0RBSnZDLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRm5CLE1BQU07OEJBOVBuQjtDQTBXQyxBQTdHRCxJQTZHQztTQTFHWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQUlFLE1BQU07dUJBQUMsV0FBVzswQkFDVyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBUSU1FT1VUID0gNSAqIDYwICogMTAwMDsgLy8gZml2ZSBtaW51dGVzXG5cbi8qXG5leHBvcnQgY2xhc3MgU3RvcmFnZUV2ZW50IGV4dGVuZHMgRXZlbnQge31cblxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VFdmVudCBleHRlbmRzIFN0b3JhZ2VFdmVudCB7IH1cblxuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlRXZlbnQgZXh0ZW5kcyBTdG9yYWdlRXZlbnQgeyB9XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VFdmVudCBleHRlbmRzIFN0b3JhZ2VFdmVudCB7IH1cbiovXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHsgfVxuXHRwdWJsaWMgZXhpc3QobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7IHJldHVybiBudWxsOyB9XG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKTogdm9pZCB7IH1cblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiBvZihudWxsKTsgfVxuXHRwdWJsaWMgdHJ5R2V0KCk6IFN0b3JhZ2VTZXJ2aWNlIHtcblx0XHQvLyBjb25zb2xlLmxvZygnbm8gU3RvcmFnZVNlcnZpY2UgYXZhaWxhYmxlLi4uJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBTdG9yYWdlU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XG5cdFx0aWYgKHRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0Nvb2tpZVN0b3JhZ2VTZXJ2aWNlLnN1cHBvcnRlZCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnRyeUdldCgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkZWxldGUobmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZXR0ZXIobmFtZSwgJycsIC0xKTtcblx0fVxuXG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuY29va2llLmluZGV4T2YoJzsnICsgbmFtZSArICc9JykgIT09IC0xIHx8IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKG5hbWUgKyAnPScpID09PSAwO1xuXHR9XG5cblx0cHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBhbnkge1xuXHRcdGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lICsgJz0nO1xuXHRcdGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGMgPSBjYVtpXTtcblx0XHRcdHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG5cdFx0XHRcdGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcblx0XHRcdFx0bGV0IG1vZGVsID0gbnVsbDtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRtb2RlbCA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IodmFsdWUpKSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29va2llLmdldC5lcnJvciBwYXJzaW5nJywgbmFtZSwgZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1vZGVsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXlzPzogbnVtYmVyKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGxldCBjYWNoZSA9IFtdO1xuXHRcdFx0Y29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoa2V5ID09PSAncG9vbCcpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAoY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0XHQvLyB0aHJvdyAobmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5JykpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWNoZS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdGNhY2hlID0gbnVsbDtcblx0XHRcdHRoaXMuc2V0dGVyKG5hbWUsIGJ0b2EoZW5jb2RlVVJJQ29tcG9uZW50KGpzb24pKSwgZGF5cyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Nvb2tpZVNldC5lcnJvciBzZXJpYWxpemluZycsIG5hbWUsIHZhbHVlLCBlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvLyB0b2RvXG5cdFx0Y29uc3QgaW50ZXJ2YWw6IG51bWJlciA9IDEwMDAsIHRpbWVvdXQ6IG51bWJlciA9IFRJTUVPVVQ7XG5cdFx0bGV0IGksIGVsYXBzZWQ6IG51bWJlciA9IDA7XG5cdFx0ZnVuY3Rpb24gY2hlY2tDb29raWUoKSB7XG5cdFx0XHRpZiAoZWxhcHNlZCA+IHRpbWVvdXQpIHtcblx0XHRcdFx0Ly8gcHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGM6IGFueSA9IHRoaXMuZ2V0KG5hbWUpO1xuXHRcdFx0XHRpZiAoYykge1xuXHRcdFx0XHRcdC8vIHByb21pc2UucmVzb2x2ZShjKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGFwc2VkICs9IGludGVydmFsO1xuXHRcdFx0XHRcdGkgPSBzZXRUaW1lb3V0KGNoZWNrQ29va2llLCBpbnRlcnZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hlY2tDb29raWUoKTtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRwcml2YXRlIHNldHRlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIGRheXM/OiBudW1iZXIpIHtcblx0XHRsZXQgZXhwaXJlcztcblx0XHRpZiAoZGF5cykge1xuXHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0XHRcdGV4cGlyZXMgPSAnOyBleHBpcmVzPScgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cGlyZXMgPSAnJztcblx0XHR9XG5cdFx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgZXhwaXJlcyArICc7IHBhdGg9Lyc7XG5cdH1cblxuXHRwcml2YXRlIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xuXHR9XG5cbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU3RvcmFnZVNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29va2llU3RvcmFnZVNlcnZpY2U6IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHB1YmxpYyB0cnlHZXQoKTogU3RvcmFnZVNlcnZpY2Uge1xuXHRcdGlmICh0aGlzLmlzU3VwcG9ydGVkKCkpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdTZXNzaW9uU3RvcmFnZVNlcnZpY2Uuc3VwcG9ydGVkJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29va2llU3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcblx0fVxuXG5cdHB1YmxpYyBleGlzdChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gd2luZG93LnNlc3Npb25TdG9yYWdlW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRwdWJsaWMgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gbnVsbDtcblx0XHRpZiAod2luZG93LnNlc3Npb25TdG9yYWdlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2VbbmFtZV0pO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU2Vzc2lvblN0b3JhZ2UuZ2V0LmVycm9yIHBhcnNpbmcnLCBuYW1lLCBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHVibGljIG9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Lypcblx0XHRyZXR1cm4gJHByb21pc2UoZnVuY3Rpb24gKHByb21pc2UpIHtcblx0XHRcdGNvbnN0IHRpbWVvdXQgPSBUSU1FT1VUO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmdW5jdGlvbiBzdG9yYWdlRXZlbnQoZSkge1xuXHRcdFx0XHRpZiAoaSkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZS5vcmlnaW5hbEV2ZW50LmtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGUub3JpZ2luYWxFdmVudC5uZXdWYWx1ZSk7XG5cdFx0XHRcdFx0XHRwcm9taXNlLnJlc29sdmUodmFsdWUpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnU2Vzc2lvblN0b3JhZ2Uub24uZXJyb3IgcGFyc2luZycsIG5hbWUsIGVycm9yKTtcblx0XHRcdFx0XHRcdHByb21pc2UucmVqZWN0KCdlcnJvciBwYXJzaW5nICcgKyBuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpO1xuXHRcdFx0YW5ndWxhci5lbGVtZW50KHdpbmRvdykub24oJ3N0b3JhZ2UnLCBzdG9yYWdlRXZlbnQpO1xuXHRcdFx0aSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRwcm9taXNlLnJlamVjdCgndGltZW91dCcpO1xuXHRcdFx0fSwgdGltZW91dCk7XG5cdFx0fSk7XG5cdFx0Ki9cblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGF5cz86IG51bWJlcik6IHZvaWQge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKGtleSA9PT0gJ3Bvb2wnKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0Ly8gdGhyb3cgKG5ldyBFcnJvcignY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleScpKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FjaGUucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHRjYWNoZSA9IG51bGw7XG5cdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBqc29uKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnU2Vzc2lvblN0b3JhZ2Uuc2V0LmVycm9yIHNlcmlhbGl6aW5nJywgbmFtZSwgdmFsdWUsIGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG5cdFx0bGV0IHN1cHBvcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzdXBwb3J0ZWQgPSAnc2Vzc2lvblN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgIT09IG51bGw7XG5cdFx0XHRcdGlmIChzdXBwb3J0ZWQpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsICcxJyk7XG5cdFx0XHRcdFx0d2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN1cHBvcnRlZDtcblx0fVxuXG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBTdG9yYWdlU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb29raWVTdG9yYWdlU2VydmljZTogQ29va2llU3RvcmFnZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cHVibGljIHRyeUdldCgpOiBTdG9yYWdlU2VydmljZSB7XG5cdFx0aWYgKHRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0xvY2FsU3RvcmFnZVNlcnZpY2Uuc3VwcG9ydGVkJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29va2llU3RvcmFnZVNlcnZpY2UudHJ5R2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRlbGV0ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XG5cdH1cblxuXHRwdWJsaWMgZXhpc3QobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2VbbmFtZV0gIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcblx0XHRsZXQgdmFsdWUgPSBudWxsO1xuXHRcdGlmICh3aW5kb3cubG9jYWxTdG9yYWdlW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlW25hbWVdKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0xvY2FsU3RvcmFnZS5nZXQuZXJyb3IgcGFyc2luZycsIG5hbWUsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwdWJsaWMgb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHQvKlxuXHRcdHJldHVybiAkcHJvbWlzZShmdW5jdGlvbiAocHJvbWlzZSkge1xuXHRcdFx0Y29uc3QgdGltZW91dCA9IFRJTUVPVVQ7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZ1bmN0aW9uIHN0b3JhZ2VFdmVudChlKSB7XG5cdFx0XHRcdGlmIChpKSB7XG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlLm9yaWdpbmFsRXZlbnQua2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxldCB2YWx1ZSA9IEpTT04ucGFyc2UoZS5vcmlnaW5hbEV2ZW50Lm5ld1ZhbHVlKTtcblx0XHRcdFx0XHRcdHByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdMb2NhbFN0b3JhZ2Uub24uZXJyb3IgcGFyc2luZycsIG5hbWUsIGVycm9yKTtcblx0XHRcdFx0XHRcdHByb21pc2UucmVqZWN0KCdlcnJvciBwYXJzaW5nICcgKyBuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpO1xuXHRcdFx0YW5ndWxhci5lbGVtZW50KHdpbmRvdykub24oJ3N0b3JhZ2UnLCBzdG9yYWdlRXZlbnQpO1xuXHRcdFx0aSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRwcm9taXNlLnJlamVjdCgndGltZW91dCcpO1xuXHRcdFx0fSwgdGltZW91dCk7XG5cdFx0fSk7XG5cdFx0Ki9cblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSwgZGF5cz86IG51bWJlcik6IHZvaWQge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgY2FjaGUgPSBbXTtcblx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKGtleSA9PT0gJ3Bvb2wnKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0Ly8gdGhyb3cgKG5ldyBFcnJvcignY2lyY3VsYXIgcmVmZXJlbmNlIGZvdW5kLCBkaXNjYXJkIGtleScpKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FjaGUucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0XHRjYWNoZSA9IG51bGw7XG5cdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwganNvbik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0xvY2FsU3RvcmFnZS5zZXQuZXJyb3Igc2VyaWFsaXppbmcnLCBuYW1lLCB2YWx1ZSwgZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBpc1N1cHBvcnRlZCgpOiBib29sZWFuIHtcblx0XHRsZXQgc3VwcG9ydGVkOiBib29sZWFuID0gZmFsc2U7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHN1cHBvcnRlZCA9ICdsb2NhbFN0b3JhZ2UnIGluIHdpbmRvdyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlICE9PSBudWxsO1xuXHRcdFx0XHRpZiAoc3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgJzEnKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rlc3QnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRzdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN1cHBvcnRlZDtcblx0fVxuXG59XG4iXX0=