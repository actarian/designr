/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
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
                this._config = this.injector.get(ConfigService).options;
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
        return this.http.get(url, options).pipe(tap(function (x) { return _this.logger.request(url); }));
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
        return this.http.post(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
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
        return this.http.put(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
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
        return this.http.patch(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
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
        var id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
        /** @type {?} */
        var params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
        /** @type {?} */
        var options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap(function (x) { return _this.logger.request(url); }));
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
            return this.http.get(url, options).pipe(tap(function (x) {
                if (isPlatformServer(_this.platformId)) {
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
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
            /** @type {?} */
            var cached = this.state.get(stateKey, null);
            this.state.remove(stateKey);
            return of(cached);
        }
        else {
            return this.http.post(url, model, options).pipe(tap(function (x) {
                if (isPlatformServer(_this.platformId)) {
                    _this.state.onSerialize(stateKey, function () { return x; });
                }
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQVksYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHMUM7SUFHQywyQkFBWSxPQUFZO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RCxDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJBLG9DQUFzQjs7SUFDdEIsbUNBQW9COzs7OztBQVNyQjtJQWtFQyxvQkFDVyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUEvREwsc0JBQUksa0NBQVU7Ozs7UUFBZDtZ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b0JBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDO2lCQUMxQztZQUNGLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjtJQUNGLENBQUM7O2dCQXZORCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQXRCb0IsUUFBUTs7O3FCQUY3QjtDQStPQyxBQXpORCxJQXlOQztTQXROWSxVQUFVOzs7Ozs7SUFNdEIsNkJBQXdCOzs7OztJQVF4QiwyQkFBMEI7Ozs7O0lBUTFCLDRCQUE4Qjs7Ozs7SUFROUIsaUNBQTRCOzs7OztJQVE1Qiw2QkFBNEI7Ozs7O0lBUTVCLDZCQUF3Qjs7Ozs7SUFrQnZCLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3RhdGVLZXksIFN0YXRlS2V5LCBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgQXBpUmVxdWVzdE9wdGlvbnMge1xuXHRoZWFkZXJzPzogSHR0cEhlYWRlcnM7XG5cdHBhcmFtcz86IEh0dHBQYXJhbXM7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiB7fSkge1xuXHRcdHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSk7XG5cdFx0dGhpcy5wYXJhbXMgPSBvcHRpb25zID8gbmV3IEh0dHBQYXJhbXMob3B0aW9ucykgOiBudWxsO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2U8VCBleHRlbmRzIElkZW50aXR5PiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGknO1xuXHR9XG5cblx0cHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXI7XG5cdGdldCBsb2dnZXIoKTogTG9nZ2VyIHtcblx0XHRpZiAoIXRoaXMuX2xvZ2dlcikge1xuXHRcdFx0dGhpcy5fbG9nZ2VyID0gdGhpcy5pbmplY3Rvci5nZXQoTG9nZ2VyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2xvZ2dlcjtcblx0fVxuXG5cdHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQ7XG5cdGdldCBodHRwKCk6IEh0dHBDbGllbnQge1xuXHRcdGlmICghdGhpcy5faHR0cCkge1xuXHRcdFx0dGhpcy5faHR0cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEh0dHBDbGllbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5faHR0cDtcblx0fVxuXG5cdHByaXZhdGUgX3N0YXRlOiBUcmFuc2ZlclN0YXRlO1xuXHRnZXQgc3RhdGUoKTogVHJhbnNmZXJTdGF0ZSB7XG5cdFx0aWYgKCF0aGlzLl9zdGF0ZSkge1xuXHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLmluamVjdG9yLmdldChUcmFuc2ZlclN0YXRlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlO1xuXHR9XG5cblx0cHJpdmF0ZSBfcGxhdGZvcm1JZDogc3RyaW5nO1xuXHRnZXQgcGxhdGZvcm1JZCgpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy5fcGxhdGZvcm1JZCkge1xuXHRcdFx0dGhpcy5fcGxhdGZvcm1JZCA9IHRoaXMuaW5qZWN0b3IuZ2V0PHN0cmluZz4oUExBVEZPUk1fSUQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcGxhdGZvcm1JZDtcblx0fVxuXG5cdHByaXZhdGUgX2NvbmZpZzogQ29yZUNvbmZpZztcblx0Z2V0IGNvbmZpZygpOiBDb3JlQ29uZmlnIHtcblx0XHRpZiAoIXRoaXMuX2NvbmZpZykge1xuXHRcdFx0dGhpcy5fY29uZmlnID0gdGhpcy5pbmplY3Rvci5nZXQoQ29uZmlnU2VydmljZSkub3B0aW9ucztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgX29yaWdpbjogc3RyaW5nO1xuXHRnZXQgb3JpZ2luKCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLl9vcmlnaW4pIHtcblx0XHRcdHRoaXMuX29yaWdpbiA9IHRoaXMuY29uZmlnLm9yaWdpbjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX29yaWdpbjtcblx0fVxuXG5cdGdldCB1cmwoKTogc3RyaW5nIHtcblx0XHRsZXQgYmFzZTogc3RyaW5nID0gdGhpcy5vcmlnaW47XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmIChjb2xsZWN0aW9uLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCkge1xuXHRcdFx0YmFzZSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gYCR7YmFzZX0ke2NvbGxlY3Rpb259YDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7IH1cblxuXHRnZXRVcmwobWV0aG9kOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke3RoaXMudXJsfSR7bWV0aG9kfWA7XG5cdH1cblxuXHRnZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxUPih1cmwsIG9wdGlvbnMpLnBpcGUoXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxuXHRcdCk7XG5cdH1cblxuXHRwb3N0KGZpcnN0OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBtb2RlbDoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxuXHRcdCk7XG5cdH1cblxuXHRwdXQoZmlyc3Q6IHN0cmluZyB8IFQsIHNlY29uZD86IFQgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IG1vZGVsOiBUID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCkgYXMgVDtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHBhdGNoKGZpcnN0OiBzdHJpbmcgfCBULCBzZWNvbmQ/OiBUIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBtb2RlbDogVCA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQ7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdGRlbGV0ZShmaXJzdDogc3RyaW5nIHwgVCB8IG51bWJlciwgc2Vjb25kPzogVCB8IG51bWJlciB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgaWRlbnRpdHk6IFQgfCBudW1iZXIgPSAodHlwZW9mIGZpcnN0ICE9PSAnc3RyaW5nJyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUIHwgbnVtYmVyO1xuXHRcdGNvbnN0IGlkID0gaWRlbnRpdHkgPyAodHlwZW9mIGlkZW50aXR5ID09PSAnbnVtYmVyJyA/IGlkZW50aXR5IDogaWRlbnRpdHkuaWQpIDogbnVsbDtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gaWQgIT09IG51bGwgPyB0aGlzLmdldFVybChgJHttZXRob2R9LyR7aWR9YCkgOiB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxUW10+KHVybCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHRvQ2FtZWxDYXNlKGlucHV0OiBhbnkpOiBhbnkge1xuXHRcdGxldCBvdXRwdXQsIGtleSwga2V5Q2FtZWxDYXNlLCB2YWx1ZTtcblx0XHRpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0cmV0dXJuIGlucHV0Lm1hcCgodmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHZhbHVlID0gdGhpcy50b0NhbWVsQ2FzZSh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dCA9IHt9O1xuXHRcdFx0Zm9yIChrZXkgaW4gaW5wdXQpIHtcblx0XHRcdFx0aWYgKGlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRrZXlDYW1lbENhc2UgPSAoa2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpIHx8IGtleSkudG9TdHJpbmcoKTtcblx0XHRcdFx0XHR2YWx1ZSA9IGlucHV0W2tleV07XG5cdFx0XHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMudG9DYW1lbENhc2UodmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvdXRwdXRba2V5Q2FtZWxDYXNlXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvLyBUUkFOU0ZFUiBTVEFURVxuXG5cdGdldFN0YXRlS2V5KHVybDogc3RyaW5nLCBtb2RlbDoge30pOiBTdGF0ZUtleTxUPiB7XG5cdFx0Y29uc3QgZmxhdE1hcCA9IChzOiBzdHJpbmcsIHg6IGFueSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRzICs9IHgudG9TdHJpbmcoKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHMgKz0geC5zdWJzdHIoMCwgMTApO1xuXHRcdFx0fSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRzICs9ICdfJyArIE9iamVjdC5rZXlzKHgpLm1hcChrID0+IGsgKyAnXycgKyBmbGF0TWFwKCcnLCB4W2tdKSkuam9pbignXycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fTtcblx0XHR1cmwgPSBmbGF0TWFwKHVybCwgbW9kZWwpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LnVybCcsIHVybCk7XG5cdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSB1cmwucmVwbGFjZSgvKFxcVykvZ20sICdfJyk7XG5cdFx0Ly8gdGhpcy5sb2dnZXIubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LmtleScsIGtleSk7XG5cdFx0cmV0dXJuIG1ha2VTdGF0ZUtleShrZXkpO1xuXHR9XG5cblx0c3RhdGVHZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRjb25zdCBzdGF0ZUtleSA9IHRoaXMuZ2V0U3RhdGVLZXkodXJsLCBwYXJhbXMpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuc3RhdGUuaGFzS2V5KHN0YXRlS2V5KSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5zdGF0ZS5nZXQoc3RhdGVLZXksIG51bGwpO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xuXHRcdFx0cmV0dXJuIG9mKGNhY2hlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHVybCwgb3B0aW9ucykucGlwZShcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub25TZXJpYWxpemUoc3RhdGVLZXksICgpID0+IHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRlUG9zdChmaXJzdDogc3RyaW5nIHwge30sIHNlY29uZD86IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdGNvbnN0IHN0YXRlS2V5ID0gdGhpcy5nZXRTdGF0ZUtleSh1cmwsIG1vZGVsKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLnN0YXRlLmhhc0tleShzdGF0ZUtleSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IHRoaXMuc3RhdGUuZ2V0KHN0YXRlS2V5LCBudWxsKTtcblx0XHRcdHRoaXMuc3RhdGUucmVtb3ZlKHN0YXRlS2V5KTtcblx0XHRcdHJldHVybiBvZihjYWNoZWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub25TZXJpYWxpemUoc3RhdGVLZXksICgpID0+IHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==