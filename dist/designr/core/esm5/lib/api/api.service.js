/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoreService } from '../config/core.service';
import { Logger } from '../logger/logger.service';
import * as i0 from "@angular/core";
var ApiRequestOptions = /** @class */ (function () {
    function ApiRequestOptions(params) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.params = (/** @type {?} */ (params));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBWSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVsRDtJQUdDLDJCQUFZLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQUEsTUFBTSxFQUFjLENBQUM7SUFDcEMsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQSxvQ0FBc0I7O0lBQ3RCLG1DQUFvQjs7Ozs7QUFTckI7SUFrRUMsb0JBQ1csUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDO0lBL0RMLHNCQUFJLGtDQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksOEJBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksNEJBQUk7Ozs7UUFBUjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksNkJBQUs7Ozs7UUFBVDtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksa0NBQVU7Ozs7UUFBZDtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFTLFdBQVcsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksOEJBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDhCQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNsQztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFHOzs7O1FBQVA7O2dCQUNLLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTTs7Z0JBQ3hCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUNoRCxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ1Y7WUFDRCxPQUFPLEtBQUcsSUFBSSxHQUFHLFVBQVksQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7Ozs7SUFNRCwyQkFBTTs7OztJQUFOLFVBQU8sTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUN6QixPQUFPLEtBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFRLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRUQsd0JBQUc7Ozs7O0lBQUgsVUFBSSxLQUFtQixFQUFFLE1BQVc7UUFBcEMsaUJBUUM7O1lBUE0sTUFBTSxHQUFXLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDekQsTUFBTSxHQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDekQsR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztZQUNqQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsRUFBQyxDQUNsQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVELHlCQUFJOzs7Ozs7SUFBSixVQUFLLEtBQWtCLEVBQUUsTUFBVyxFQUFFLEtBQVU7UUFBaEQsaUJBU0M7O1lBUk0sTUFBTSxHQUFXLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDekQsS0FBSyxHQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDeEQsTUFBTSxHQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDMUQsR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztZQUNqQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FDbEMsQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFFRCx3QkFBRzs7Ozs7O0lBQUgsVUFBSSxLQUFpQixFQUFFLE1BQWUsRUFBRSxLQUFVO1FBQWxELGlCQVNDOztZQVJNLE1BQU0sR0FBVyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQ3pELEtBQUssR0FBTSxtQkFBQSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSzs7WUFDNUQsTUFBTSxHQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDMUQsR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztZQUNqQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FDbEMsQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFFRCwwQkFBSzs7Ozs7O0lBQUwsVUFBTSxLQUFpQixFQUFFLE1BQWUsRUFBRSxLQUFVO1FBQXBELGlCQVNDOztZQVJNLE1BQU0sR0FBVyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQ3pELEtBQUssR0FBTSxtQkFBQSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBSzs7WUFDNUQsTUFBTSxHQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDMUQsR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztZQUNqQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEQsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FDbEMsQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFFRCwyQkFBTTs7Ozs7O0lBQU4sVUFBTyxLQUEwQixFQUFFLE1BQXdCLEVBQUUsS0FBVTtRQUF2RSxpQkFVQzs7WUFUTSxNQUFNLEdBQVcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUN6RCxRQUFRLEdBQWUsbUJBQUEsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQWM7O1lBQ2pGLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsUUFBUSxFQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTs7WUFDdkYsTUFBTSxHQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDMUQsR0FBRyxHQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksTUFBTSxTQUFJLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7WUFDaEYsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU0sR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FDbEMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsZ0NBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFBdEIsaUJBdUJDOztZQXRCSSxNQUFNOztZQUFFLEdBQUc7O1lBQUUsWUFBWTs7WUFBRSxLQUFLO1FBQ3BDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQyxLQUFVO2dCQUMzQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDOUIsS0FBSyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDbEIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM5QixZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzlFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLElBQUksS0FBSyxZQUFZLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUMsRUFBRTt3QkFDL0UsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2hDO29CQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQzdCO2FBQ0Q7U0FDRDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjs7Ozs7OztJQUVqQixnQ0FBVzs7Ozs7OztJQUFYLFVBQVksR0FBVyxFQUFFLEtBQVM7O1lBQzNCLE9BQU87Ozs7O1FBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBTTtZQUNqQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDMUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNsQjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDakMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUU7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQTtRQUNELEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7WUFFcEIsR0FBRyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztRQUM5QyxzREFBc0Q7UUFDdEQsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRUQsNkJBQVE7Ozs7O0lBQVIsVUFBUyxLQUFtQixFQUFFLE1BQVc7UUFBekMsaUJBbUJDOztZQWxCTSxNQUFNLEdBQVcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUN6RCxNQUFNLEdBQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztZQUN6RCxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7O1lBQ2pDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQzs7WUFDdkMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztRQUM5QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTs7Z0JBQ2hFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzNDLEdBQUc7Ozs7WUFBQyxVQUFBLENBQUM7Z0JBQ0osSUFBSSxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RDLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVE7OztvQkFBRSxjQUFNLE9BQUEsQ0FBQyxFQUFELENBQUMsRUFBQyxDQUFDO2lCQUMxQztZQUNGLENBQUMsRUFBQyxDQUNGLENBQUM7U0FDRjtJQUNGLENBQUM7Ozs7Ozs7SUFFRCw4QkFBUzs7Ozs7O0lBQVQsVUFBVSxLQUFrQixFQUFFLE1BQVcsRUFBRSxLQUFVO1FBQXJELGlCQW9CQzs7WUFuQk0sTUFBTSxHQUFXLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7WUFDekQsS0FBSyxHQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDeEQsTUFBTSxHQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7WUFDMUQsR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOztZQUNqQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7O1lBQ3ZDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7UUFDN0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUNoRSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQztnQkFDSixJQUFJLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUTs7O29CQUFFLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7aUJBQzFDO1lBQ0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQztTQUNGO0lBQ0YsQ0FBQzs7Z0JBdk5ELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBckJvQixRQUFROzs7cUJBRjdCO0NBOE9DLEFBek5ELElBeU5DO1NBdE5ZLFVBQVU7Ozs7OztJQU10Qiw2QkFBd0I7Ozs7O0lBUXhCLDJCQUEwQjs7Ozs7SUFRMUIsNEJBQThCOzs7OztJQVE5QixpQ0FBNEI7Ozs7O0lBUTVCLDZCQUE0Qjs7Ozs7SUFRNUIsNkJBQXdCOzs7OztJQWtCdkIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1ha2VTdGF0ZUtleSwgU3RhdGVLZXksIFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlSZXF1ZXN0T3B0aW9ucyB7XHJcblx0aGVhZGVycz86IEh0dHBIZWFkZXJzO1xyXG5cdHBhcmFtcz86IEh0dHBQYXJhbXM7XHJcblx0Y29uc3RydWN0b3IocGFyYW1zPzoge30pIHtcclxuXHRcdHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXMgYXMgSHR0cFBhcmFtcztcclxuXHR9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2U8VD4ge1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpJztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2xvZ2dlcjogTG9nZ2VyO1xyXG5cdGdldCBsb2dnZXIoKTogTG9nZ2VyIHtcclxuXHRcdGlmICghdGhpcy5fbG9nZ2VyKSB7XHJcblx0XHRcdHRoaXMuX2xvZ2dlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fbG9nZ2VyO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudDtcclxuXHRnZXQgaHR0cCgpOiBIdHRwQ2xpZW50IHtcclxuXHRcdGlmICghdGhpcy5faHR0cCkge1xyXG5cdFx0XHR0aGlzLl9odHRwID0gdGhpcy5pbmplY3Rvci5nZXQoSHR0cENsaWVudCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5faHR0cDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3N0YXRlOiBUcmFuc2ZlclN0YXRlO1xyXG5cdGdldCBzdGF0ZSgpOiBUcmFuc2ZlclN0YXRlIHtcclxuXHRcdGlmICghdGhpcy5fc3RhdGUpIHtcclxuXHRcdFx0dGhpcy5fc3RhdGUgPSB0aGlzLmluamVjdG9yLmdldChUcmFuc2ZlclN0YXRlKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9zdGF0ZTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX3BsYXRmb3JtSWQ6IHN0cmluZztcclxuXHRnZXQgcGxhdGZvcm1JZCgpOiBzdHJpbmcge1xyXG5cdFx0aWYgKCF0aGlzLl9wbGF0Zm9ybUlkKSB7XHJcblx0XHRcdHRoaXMuX3BsYXRmb3JtSWQgPSB0aGlzLmluamVjdG9yLmdldDxzdHJpbmc+KFBMQVRGT1JNX0lEKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9wbGF0Zm9ybUlkO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb3JlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKTogQ29yZUNvbmZpZyB7XHJcblx0XHRpZiAoIXRoaXMuX2NvbmZpZykge1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSB0aGlzLmluamVjdG9yLmdldChDb3JlU2VydmljZSkub3B0aW9ucztcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9vcmlnaW46IHN0cmluZztcclxuXHRnZXQgb3JpZ2luKCk6IHN0cmluZyB7XHJcblx0XHRpZiAoIXRoaXMuX29yaWdpbikge1xyXG5cdFx0XHR0aGlzLl9vcmlnaW4gPSB0aGlzLmNvbmZpZy5vcmlnaW47XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fb3JpZ2luO1xyXG5cdH1cclxuXHJcblx0Z2V0IHVybCgpOiBzdHJpbmcge1xyXG5cdFx0bGV0IGJhc2U6IHN0cmluZyA9IHRoaXMub3JpZ2luO1xyXG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKGNvbGxlY3Rpb24uaW5kZXhPZignaHR0cCcpID09PSAwKSB7XHJcblx0XHRcdGJhc2UgPSAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiBgJHtiYXNlfSR7Y29sbGVjdGlvbn1gO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXHJcblx0KSB7IH1cclxuXHJcblx0Z2V0VXJsKG1ldGhvZDogc3RyaW5nID0gJycpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGAke3RoaXMudXJsfSR7bWV0aG9kfWA7XHJcblx0fVxyXG5cclxuXHRnZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8VFtdPih1cmwsIG9wdGlvbnMpLnBpcGUoXHJcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cG9zdChmaXJzdDogc3RyaW5nIHwge30sIHNlY29uZD86IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcclxuXHRcdGNvbnN0IG1vZGVsOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xyXG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcclxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1dChmaXJzdDogc3RyaW5nIHwgVCwgc2Vjb25kPzogVCB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcclxuXHRcdGNvbnN0IG1vZGVsOiBUID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCkgYXMgVDtcclxuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XHJcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHBhdGNoKGZpcnN0OiBzdHJpbmcgfCBULCBzZWNvbmQ/OiBUIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgbW9kZWw6IFQgPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUO1xyXG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcclxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcclxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRkZWxldGUoZmlyc3Q6IHN0cmluZyB8IFQgfCBudW1iZXIsIHNlY29uZD86IFQgfCBudW1iZXIgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XHJcblx0XHRjb25zdCBpZGVudGl0eTogVCB8IG51bWJlciA9ICh0eXBlb2YgZmlyc3QgIT09ICdzdHJpbmcnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQgfCBudW1iZXI7XHJcblx0XHRjb25zdCBpZCA9IGlkZW50aXR5ID8gKHR5cGVvZiBpZGVudGl0eSA9PT0gJ251bWJlcicgPyBpZGVudGl0eSA6IChpZGVudGl0eSBhcyBhbnkpLmlkKSA6IG51bGw7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBpZCAhPT0gbnVsbCA/IHRoaXMuZ2V0VXJsKGAke21ldGhvZH0vJHtpZH1gKSA6IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxUW10+KHVybCwgb3B0aW9ucykucGlwZShcclxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHR0b0NhbWVsQ2FzZShpbnB1dDogYW55KTogYW55IHtcclxuXHRcdGxldCBvdXRwdXQsIGtleSwga2V5Q2FtZWxDYXNlLCB2YWx1ZTtcclxuXHRcdGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdHJldHVybiBpbnB1dC5tYXAoKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRvQ2FtZWxDYXNlKHZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG91dHB1dCA9IHt9O1xyXG5cdFx0XHRmb3IgKGtleSBpbiBpbnB1dCkge1xyXG5cdFx0XHRcdGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRrZXlDYW1lbENhc2UgPSAoa2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpIHx8IGtleSkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXRba2V5XTtcclxuXHRcdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8ICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSkge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMudG9DYW1lbENhc2UodmFsdWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0b3V0cHV0W2tleUNhbWVsQ2FzZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblx0fVxyXG5cclxuXHQvLyBUUkFOU0ZFUiBTVEFURVxyXG5cclxuXHRnZXRTdGF0ZUtleSh1cmw6IHN0cmluZywgbW9kZWw6IHt9KTogU3RhdGVLZXk8YW55PiB7XHJcblx0XHRjb25zdCBmbGF0TWFwID0gKHM6IHN0cmluZywgeDogYW55KSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRzICs9IHgudG9TdHJpbmcoKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRzICs9IHguc3Vic3RyKDAsIDEwKTtcclxuXHRcdFx0fSBlbHNlIGlmICh4ICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdHMgKz0gJ18nICsgT2JqZWN0LmtleXMoeCkubWFwKGsgPT4gayArICdfJyArIGZsYXRNYXAoJycsIHhba10pKS5qb2luKCdfJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHM7XHJcblx0XHR9O1xyXG5cdFx0dXJsID0gZmxhdE1hcCh1cmwsIG1vZGVsKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LnVybCcsIHVybCk7XHJcblx0XHRjb25zdCBrZXk6IHN0cmluZyA9IHVybC5yZXBsYWNlKC8oXFxXKS9nbSwgJ18nKTtcclxuXHRcdC8vIHRoaXMubG9nZ2VyLmxvZygnQXBpU2VydmljZS5nZXRTdGF0ZUtleS5rZXknLCBrZXkpO1xyXG5cdFx0cmV0dXJuIG1ha2VTdGF0ZUtleShrZXkpO1xyXG5cdH1cclxuXHJcblx0c3RhdGVHZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xyXG5cdFx0Y29uc3Qgc3RhdGVLZXkgPSB0aGlzLmdldFN0YXRlS2V5KHVybCwgcGFyYW1zKTtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuc3RhdGUuaGFzS2V5KHN0YXRlS2V5KSkge1xyXG5cdFx0XHRjb25zdCBjYWNoZWQgPSB0aGlzLnN0YXRlLmdldChzdGF0ZUtleSwgbnVsbCk7XHJcblx0XHRcdHRoaXMuc3RhdGUucmVtb3ZlKHN0YXRlS2V5KTtcclxuXHRcdFx0cmV0dXJuIG9mKGNhY2hlZCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgb3B0aW9ucykucGlwZShcclxuXHRcdFx0XHR0YXAoeCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub25TZXJpYWxpemUoc3RhdGVLZXksICgpID0+IHgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGVQb3N0KGZpcnN0OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgbW9kZWw6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xyXG5cdFx0Y29uc3Qgc3RhdGVLZXkgPSB0aGlzLmdldFN0YXRlS2V5KHVybCwgbW9kZWwpO1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5zdGF0ZS5oYXNLZXkoc3RhdGVLZXkpKSB7XHJcblx0XHRcdGNvbnN0IGNhY2hlZCA9IHRoaXMuc3RhdGUuZ2V0KHN0YXRlS2V5LCBudWxsKTtcclxuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xyXG5cdFx0XHRyZXR1cm4gb2YoY2FjaGVkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHRcdHRhcCh4ID0+IHtcclxuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==