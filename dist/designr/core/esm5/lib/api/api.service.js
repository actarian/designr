/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoreService } from '../config/core.service';
import { Logger } from '../logger/logger';
import * as i0 from "@angular/core";
var ApiRequestOptions = /** @class */ (function () {
    function ApiRequestOptions(options) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.params = options ? new HttpParams(options) : null;
    }
    return ApiRequestOptions;
}());
export { ApiRequestOptions };
if (false) {
    /** @type {?} */
    ApiRequestOptions.prototype.headers;
    /** @type {?} */
    ApiRequestOptions.prototype.params;
}
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
         */
        function () {
            return '/api';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "logger", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
            if (!this._http) {
                this._http = this.injector.get(HttpClient);
            }
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._state) {
                this._state = this.injector.get(TransferState);
            }
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "platformId", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._platformId) {
                this._platformId = this.injector.get(PLATFORM_ID);
            }
            return this._platformId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
        if (method === void 0) { method = ''; }
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
        return this.http.get(url, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.logger.request(url); })));
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
        return this.http.post(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.logger.request(url); })));
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
        var model = (/** @type {?} */ ((typeof first === 'object' ? first : second)));
        /** @type {?} */
        var params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        var url = this.getUrl(method);
        /** @type {?} */
        var options = new ApiRequestOptions(params);
        return this.http.put(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.logger.request(url); })));
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
        var model = (/** @type {?} */ ((typeof first === 'object' ? first : second)));
        /** @type {?} */
        var params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        var url = this.getUrl(method);
        /** @type {?} */
        var options = new ApiRequestOptions(params);
        return this.http.patch(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.logger.request(url); })));
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
        var identity = (/** @type {?} */ ((typeof first !== 'string' ? first : second)));
        /** @type {?} */
        var id = identity ? (typeof identity === 'number' ? identity : ((/** @type {?} */ (identity))).id) : null;
        /** @type {?} */
        var params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
        /** @type {?} */
        var options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.logger.request(url); })));
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
            return input.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (typeof value === 'object') {
                    value = _this.toCamelCase(value);
                }
                return value;
            }));
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
        var flatMap = (/**
         * @param {?} s
         * @param {?} x
         * @return {?}
         */
        function (s, x) {
            if (typeof x === 'number') {
                s += x.toString();
            }
            else if (typeof x === 'string') {
                s += x.substr(0, 10);
            }
            else if (x && typeof x === 'object') {
                s += '_' + Object.keys(x).map((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return k + '_' + flatMap('', x[k]); })).join('_');
            }
            return s;
        });
        url = flatMap(url, model);
        // console.log('ApiService.getStateKey.url', url);
        /** @type {?} */
        var key = url.replace(/(\W)/gm, '_');
        // this.logger.log('ApiService.getStateKey.key', key);
        return makeStateKey(key);
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
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            /** @type {?} */
            var cached = this.state.get(stateKey, null);
            this.state.remove(stateKey);
            return of(cached);
        }
        else {
            return this.http.get(url, options).pipe(tap((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (isPlatformServer(_this.platformId)) {
                    _this.state.onSerialize(stateKey, (/**
                     * @return {?}
                     */
                    function () { return x; }));
                }
            })));
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
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            /** @type {?} */
            var cached = this.state.get(stateKey, null);
            this.state.remove(stateKey);
            return of(cached);
        }
        else {
            return this.http.post(url, model, options).pipe(tap((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                if (isPlatformServer(_this.platformId)) {
                    _this.state.onSerialize(stateKey, (/**
                     * @return {?}
                     */
                    function () { return x; }));
                }
            })));
        }
    };
    ApiService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i0.INJECTOR)); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());
export { ApiService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._logger;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._state;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._platformId;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._config;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._origin;
    /**
     * @type {?}
     * @protected
     */
    ApiService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQVksYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFMUM7SUFHQywyQkFBWSxPQUFZO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJBLG9DQUFzQjs7SUFDdEIsbUNBQW9COzs7OztBQVNyQjtJQWtFQyxvQkFDVyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUEvREwsc0JBQUksa0NBQVU7Ozs7UUFBZDtZ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QUMsVUFBQSxDQUFDO2dCQUNKLElBQUksZ0JBQWdCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFROzs7b0JBQUUsY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUMsQ0FBQztpQkFDMUM7WUFDRixDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7SUFDRixDQUFDOztnQkF2TkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFyQm9CLFFBQVE7OztxQkFGN0I7Q0E4T0MsQUF6TkQsSUF5TkM7U0F0TlksVUFBVTs7Ozs7O0lBTXRCLDZCQUF3Qjs7Ozs7SUFReEIsMkJBQTBCOzs7OztJQVExQiw0QkFBOEI7Ozs7O0lBUTlCLGlDQUE0Qjs7Ozs7SUFRNUIsNkJBQTRCOzs7OztJQVE1Qiw2QkFBd0I7Ozs7O0lBa0J2Qiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0YXRlS2V5LCBTdGF0ZUtleSwgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29yZS5jb25maWcnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgQXBpUmVxdWVzdE9wdGlvbnMge1xuXHRoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG5cdHBhcmFtcz86IEh0dHBQYXJhbXM7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiB7fSkge1xuXHRcdHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSk7XG5cdFx0dGhpcy5wYXJhbXMgPSBvcHRpb25zID8gbmV3IEh0dHBQYXJhbXMob3B0aW9ucykgOiBudWxsO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpJztcblx0fVxuXG5cdHByaXZhdGUgX2xvZ2dlcjogTG9nZ2VyO1xuXHRnZXQgbG9nZ2VyKCk6IExvZ2dlciB7XG5cdFx0aWYgKCF0aGlzLl9sb2dnZXIpIHtcblx0XHRcdHRoaXMuX2xvZ2dlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9sb2dnZXI7XG5cdH1cblxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xuXHRnZXQgaHR0cCgpOiBIdHRwQ2xpZW50IHtcblx0XHRpZiAoIXRoaXMuX2h0dHApIHtcblx0XHRcdHRoaXMuX2h0dHAgPSB0aGlzLmluamVjdG9yLmdldChIdHRwQ2xpZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHA7XG5cdH1cblxuXHRwcml2YXRlIF9zdGF0ZTogVHJhbnNmZXJTdGF0ZTtcblx0Z2V0IHN0YXRlKCk6IFRyYW5zZmVyU3RhdGUge1xuXHRcdGlmICghdGhpcy5fc3RhdGUpIHtcblx0XHRcdHRoaXMuX3N0YXRlID0gdGhpcy5pbmplY3Rvci5nZXQoVHJhbnNmZXJTdGF0ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9zdGF0ZTtcblx0fVxuXG5cdHByaXZhdGUgX3BsYXRmb3JtSWQ6IHN0cmluZztcblx0Z2V0IHBsYXRmb3JtSWQoKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuX3BsYXRmb3JtSWQpIHtcblx0XHRcdHRoaXMuX3BsYXRmb3JtSWQgPSB0aGlzLmluamVjdG9yLmdldDxzdHJpbmc+KFBMQVRGT1JNX0lEKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXRmb3JtSWQ7XG5cdH1cblxuXHRwcml2YXRlIF9jb25maWc6IENvcmVDb25maWc7XG5cdGdldCBjb25maWcoKTogQ29yZUNvbmZpZyB7XG5cdFx0aWYgKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdHRoaXMuX2NvbmZpZyA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvcmVTZXJ2aWNlKS5vcHRpb25zO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmc7XG5cdGdldCBvcmlnaW4oKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuX29yaWdpbikge1xuXHRcdFx0dGhpcy5fb3JpZ2luID0gdGhpcy5jb25maWcub3JpZ2luO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fb3JpZ2luO1xuXHR9XG5cblx0Z2V0IHVybCgpOiBzdHJpbmcge1xuXHRcdGxldCBiYXNlOiBzdHJpbmcgPSB0aGlzLm9yaWdpbjtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKGNvbGxlY3Rpb24uaW5kZXhPZignaHR0cCcpID09PSAwKSB7XG5cdFx0XHRiYXNlID0gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtiYXNlfSR7Y29sbGVjdGlvbn1gO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHsgfVxuXG5cdGdldFVybChtZXRob2Q6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYCR7dGhpcy51cmx9JHttZXRob2R9YDtcblx0fVxuXG5cdGdldChmaXJzdD86IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFRbXT4odXJsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0cG9zdChmaXJzdDogc3RyaW5nIHwge30sIHNlY29uZD86IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0cHV0KGZpcnN0OiBzdHJpbmcgfCBULCBzZWNvbmQ/OiBUIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBtb2RlbDogVCA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQ7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxuXHRcdCk7XG5cdH1cblxuXHRwYXRjaChmaXJzdDogc3RyaW5nIHwgVCwgc2Vjb25kPzogVCB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IFQgPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBhdGNoPFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxuXHRcdCk7XG5cdH1cblxuXHRkZWxldGUoZmlyc3Q6IHN0cmluZyB8IFQgfCBudW1iZXIsIHNlY29uZD86IFQgfCBudW1iZXIgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IGlkZW50aXR5OiBUIHwgbnVtYmVyID0gKHR5cGVvZiBmaXJzdCAhPT0gJ3N0cmluZycgPyBmaXJzdCA6IHNlY29uZCkgYXMgVCB8IG51bWJlcjtcblx0XHRjb25zdCBpZCA9IGlkZW50aXR5ID8gKHR5cGVvZiBpZGVudGl0eSA9PT0gJ251bWJlcicgPyBpZGVudGl0eSA6IChpZGVudGl0eSBhcyBhbnkpLmlkKSA6IG51bGw7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IGlkICE9PSBudWxsID8gdGhpcy5nZXRVcmwoYCR7bWV0aG9kfS8ke2lkfWApIDogdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8VFtdPih1cmwsIG9wdGlvbnMpLnBpcGUoXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxuXHRcdCk7XG5cdH1cblxuXHR0b0NhbWVsQ2FzZShpbnB1dDogYW55KTogYW55IHtcblx0XHRsZXQgb3V0cHV0LCBrZXksIGtleUNhbWVsQ2FzZSwgdmFsdWU7XG5cdFx0aWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdHJldHVybiBpbnB1dC5tYXAoKHZhbHVlOiBhbnkpID0+IHtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMudG9DYW1lbENhc2UodmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvdXRwdXQgPSB7fTtcblx0XHRcdGZvciAoa2V5IGluIGlucHV0KSB7XG5cdFx0XHRcdGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0a2V5Q2FtZWxDYXNlID0gKGtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgxKSB8fCBrZXkpLnRvU3RyaW5nKCk7XG5cdFx0XHRcdFx0dmFsdWUgPSBpbnB1dFtrZXldO1xuXHRcdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8ICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSkge1xuXHRcdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRvQ2FtZWxDYXNlKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0b3V0cHV0W2tleUNhbWVsQ2FzZV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0Ly8gVFJBTlNGRVIgU1RBVEVcblxuXHRnZXRTdGF0ZUtleSh1cmw6IHN0cmluZywgbW9kZWw6IHt9KTogU3RhdGVLZXk8YW55PiB7XG5cdFx0Y29uc3QgZmxhdE1hcCA9IChzOiBzdHJpbmcsIHg6IGFueSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRzICs9IHgudG9TdHJpbmcoKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHMgKz0geC5zdWJzdHIoMCwgMTApO1xuXHRcdFx0fSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRzICs9ICdfJyArIE9iamVjdC5rZXlzKHgpLm1hcChrID0+IGsgKyAnXycgKyBmbGF0TWFwKCcnLCB4W2tdKSkuam9pbignXycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblx0XHR1cmwgPSBmbGF0TWFwKHVybCwgbW9kZWwpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LnVybCcsIHVybCk7XG5cdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSB1cmwucmVwbGFjZSgvKFxcVykvZ20sICdfJyk7XG5cdFx0Ly8gdGhpcy5sb2dnZXIubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LmtleScsIGtleSk7XG5cdFx0cmV0dXJuIG1ha2VTdGF0ZUtleShrZXkpO1xuXHR9XG5cblx0c3RhdGVHZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRjb25zdCBzdGF0ZUtleSA9IHRoaXMuZ2V0U3RhdGVLZXkodXJsLCBwYXJhbXMpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuc3RhdGUuaGFzS2V5KHN0YXRlS2V5KSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5zdGF0ZS5nZXQoc3RhdGVLZXksIG51bGwpO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xuXHRcdFx0cmV0dXJuIG9mKGNhY2hlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0XHR0YXAoeCA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGVQb3N0KGZpcnN0OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBtb2RlbDoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3RhdGVLZXkgPSB0aGlzLmdldFN0YXRlS2V5KHVybCwgbW9kZWwpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuc3RhdGUuaGFzS2V5KHN0YXRlS2V5KSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5zdGF0ZS5nZXQoc3RhdGVLZXksIG51bGwpO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xuXHRcdFx0cmV0dXJuIG9mKGNhY2hlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0XHR0YXAoeCA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19