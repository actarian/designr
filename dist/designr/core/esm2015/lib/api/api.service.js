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
export class ApiRequestOptions {
    /**
     * @param {?=} params
     */
    constructor(params) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.params = (/** @type {?} */ (params));
    }
}
if (false) {
    /** @type {?} */
    ApiRequestOptions.prototype.headers;
    /** @type {?} */
    ApiRequestOptions.prototype.params;
}
/**
 * @template T
 */
export class ApiService {
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
    get(first, second) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const params = (typeof first === 'object' ? first : second);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.get(url, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.logger.request(url))));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    post(first, second, third) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const model = (typeof first === 'object' ? first : second);
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.post(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.logger.request(url))));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    put(first, second, third) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const model = (/** @type {?} */ ((typeof first === 'object' ? first : second)));
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.put(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.logger.request(url))));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    patch(first, second, third) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const model = (/** @type {?} */ ((typeof first === 'object' ? first : second)));
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.patch(url, model, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.logger.request(url))));
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    delete(first, second, third) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const identity = (/** @type {?} */ ((typeof first !== 'string' ? first : second)));
        /** @type {?} */
        const id = identity ? (typeof identity === 'number' ? identity : ((/** @type {?} */ (identity))).id) : null;
        /** @type {?} */
        const params = (typeof second === 'object' ? second : third);
        /** @type {?} */
        const url = id !== null ? this.getUrl(`${method}/${id}`) : this.getUrl(method);
        /** @type {?} */
        const options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.logger.request(url))));
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
            return input.map((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (typeof value === 'object') {
                    value = this.toCamelCase(value);
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
    }
    // TRANSFER STATE
    /**
     * @param {?} url
     * @param {?} model
     * @return {?}
     */
    getStateKey(url, model) {
        /** @type {?} */
        const flatMap = (/**
         * @param {?} s
         * @param {?} x
         * @return {?}
         */
        (s, x) => {
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
                k => k + '_' + flatMap('', x[k]))).join('_');
            }
            return s;
        });
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
    stateGet(first, second) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const params = (typeof first === 'object' ? first : second);
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
            return this.http.get(url, options).pipe(tap((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (isPlatformServer(this.platformId)) {
                    this.state.onSerialize(stateKey, (/**
                     * @return {?}
                     */
                    () => x));
                }
            })));
        }
    }
    /**
     * @param {?} first
     * @param {?=} second
     * @param {?=} third
     * @return {?}
     */
    statePost(first, second, third) {
        /** @type {?} */
        const method = (typeof first === 'string' ? first : '');
        /** @type {?} */
        const model = (typeof first === 'object' ? first : second);
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
            return this.http.post(url, model, options).pipe(tap((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (isPlatformServer(this.platformId)) {
                    this.state.onSerialize(stateKey, (/**
                     * @return {?}
                     */
                    () => x));
                }
            })));
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
/** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i0.INJECTOR)); }, token: ApiService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBWSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVsRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRzdCLFlBQVksTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxNQUFNLEVBQWMsQ0FBQztJQUNwQyxDQUFDO0NBQ0Q7OztJQVJBLG9DQUFzQjs7SUFDdEIsbUNBQW9COzs7OztBQVlyQixNQUFNLE9BQU8sVUFBVTs7OztJQStEdEIsWUFDVyxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7SUEvREwsSUFBSSxVQUFVO1FBQ2IsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7O0lBR0QsSUFBSSxNQUFNO1FBQ1QsSUFB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Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWFrZVN0YXRlS2V5LCBTdGF0ZUtleSwgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaVJlcXVlc3RPcHRpb25zIHtcclxuXHRoZWFkZXJzPzogSHR0cEhlYWRlcnM7XHJcblx0cGFyYW1zPzogSHR0cFBhcmFtcztcclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiB7fSkge1xyXG5cdFx0dGhpcy5oZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcyBhcyBIdHRwUGFyYW1zO1xyXG5cdH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZTxUPiB7XHJcblxyXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gJy9hcGknO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXI7XHJcblx0Z2V0IGxvZ2dlcigpOiBMb2dnZXIge1xyXG5cdFx0aWYgKCF0aGlzLl9sb2dnZXIpIHtcclxuXHRcdFx0dGhpcy5fbG9nZ2VyID0gdGhpcy5pbmplY3Rvci5nZXQoTG9nZ2VyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9sb2dnZXI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xyXG5cdGdldCBodHRwKCk6IEh0dHBDbGllbnQge1xyXG5cdFx0aWYgKCF0aGlzLl9odHRwKSB7XHJcblx0XHRcdHRoaXMuX2h0dHAgPSB0aGlzLmluamVjdG9yLmdldChIdHRwQ2xpZW50KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfc3RhdGU6IFRyYW5zZmVyU3RhdGU7XHJcblx0Z2V0IHN0YXRlKCk6IFRyYW5zZmVyU3RhdGUge1xyXG5cdFx0aWYgKCF0aGlzLl9zdGF0ZSkge1xyXG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRyYW5zZmVyU3RhdGUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfcGxhdGZvcm1JZDogc3RyaW5nO1xyXG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XHJcblx0XHRpZiAoIXRoaXMuX3BsYXRmb3JtSWQpIHtcclxuXHRcdFx0dGhpcy5fcGxhdGZvcm1JZCA9IHRoaXMuaW5qZWN0b3IuZ2V0PHN0cmluZz4oUExBVEZPUk1fSUQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX3BsYXRmb3JtSWQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9jb25maWc6IENvcmVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpOiBDb3JlQ29uZmlnIHtcclxuXHRcdGlmICghdGhpcy5fY29uZmlnKSB7XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvcmVTZXJ2aWNlKS5vcHRpb25zO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX29yaWdpbjogc3RyaW5nO1xyXG5cdGdldCBvcmlnaW4oKTogc3RyaW5nIHtcclxuXHRcdGlmICghdGhpcy5fb3JpZ2luKSB7XHJcblx0XHRcdHRoaXMuX29yaWdpbiA9IHRoaXMuY29uZmlnLm9yaWdpbjtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9vcmlnaW47XHJcblx0fVxyXG5cclxuXHRnZXQgdXJsKCk6IHN0cmluZyB7XHJcblx0XHRsZXQgYmFzZTogc3RyaW5nID0gdGhpcy5vcmlnaW47XHJcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoY29sbGVjdGlvbi5pbmRleE9mKCdodHRwJykgPT09IDApIHtcclxuXHRcdFx0YmFzZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGAke2Jhc2V9JHtjb2xsZWN0aW9ufWA7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHsgfVxyXG5cclxuXHRnZXRVcmwobWV0aG9kOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy51cmx9JHttZXRob2R9YDtcclxuXHR9XHJcblxyXG5cdGdldChmaXJzdD86IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XHJcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxUW10+KHVybCwgb3B0aW9ucykucGlwZShcclxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwb3N0KGZpcnN0OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgbW9kZWw6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXHJcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHV0KGZpcnN0OiBzdHJpbmcgfCBULCBzZWNvbmQ/OiBUIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xyXG5cdFx0Y29uc3QgbW9kZWw6IFQgPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUO1xyXG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcclxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXHJcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cGF0Y2goZmlyc3Q6IHN0cmluZyB8IFQsIHNlY29uZD86IFQgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XHJcblx0XHRjb25zdCBtb2RlbDogVCA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQ7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xyXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZShmaXJzdDogc3RyaW5nIHwgVCB8IG51bWJlciwgc2Vjb25kPzogVCB8IG51bWJlciB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcclxuXHRcdGNvbnN0IGlkZW50aXR5OiBUIHwgbnVtYmVyID0gKHR5cGVvZiBmaXJzdCAhPT0gJ3N0cmluZycgPyBmaXJzdCA6IHNlY29uZCkgYXMgVCB8IG51bWJlcjtcclxuXHRcdGNvbnN0IGlkID0gaWRlbnRpdHkgPyAodHlwZW9mIGlkZW50aXR5ID09PSAnbnVtYmVyJyA/IGlkZW50aXR5IDogKGlkZW50aXR5IGFzIGFueSkuaWQpIDogbnVsbDtcclxuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XHJcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IGlkICE9PSBudWxsID8gdGhpcy5nZXRVcmwoYCR7bWV0aG9kfS8ke2lkfWApIDogdGhpcy5nZXRVcmwobWV0aG9kKTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFRbXT4odXJsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHR0YXAoeCA9PiB0aGlzLmxvZ2dlci5yZXF1ZXN0KHVybCkpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHRvQ2FtZWxDYXNlKGlucHV0OiBhbnkpOiBhbnkge1xyXG5cdFx0bGV0IG91dHB1dCwga2V5LCBrZXlDYW1lbENhc2UsIHZhbHVlO1xyXG5cdFx0aWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0cmV0dXJuIGlucHV0Lm1hcCgodmFsdWU6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHRoaXMudG9DYW1lbENhc2UodmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3V0cHV0ID0ge307XHJcblx0XHRcdGZvciAoa2V5IGluIGlucHV0KSB7XHJcblx0XHRcdFx0aWYgKGlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0XHRcdGtleUNhbWVsQ2FzZSA9IChrZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSkgfHwga2V5KS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBpbnB1dFtrZXldO1xyXG5cdFx0XHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gdGhpcy50b0NhbWVsQ2FzZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRvdXRwdXRba2V5Q2FtZWxDYXNlXSA9IHZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9XHJcblxyXG5cdC8vIFRSQU5TRkVSIFNUQVRFXHJcblxyXG5cdGdldFN0YXRlS2V5KHVybDogc3RyaW5nLCBtb2RlbDoge30pOiBTdGF0ZUtleTxhbnk+IHtcclxuXHRcdGNvbnN0IGZsYXRNYXAgPSAoczogc3RyaW5nLCB4OiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdHMgKz0geC50b1N0cmluZygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdHMgKz0geC5zdWJzdHIoMCwgMTApO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0cyArPSAnXycgKyBPYmplY3Qua2V5cyh4KS5tYXAoayA9PiBrICsgJ18nICsgZmxhdE1hcCgnJywgeFtrXSkpLmpvaW4oJ18nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcztcclxuXHRcdH07XHJcblx0XHR1cmwgPSBmbGF0TWFwKHVybCwgbW9kZWwpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0FwaVNlcnZpY2UuZ2V0U3RhdGVLZXkudXJsJywgdXJsKTtcclxuXHRcdGNvbnN0IGtleTogc3RyaW5nID0gdXJsLnJlcGxhY2UoLyhcXFcpL2dtLCAnXycpO1xyXG5cdFx0Ly8gdGhpcy5sb2dnZXIubG9nKCdBcGlTZXJ2aWNlLmdldFN0YXRlS2V5LmtleScsIGtleSk7XHJcblx0XHRyZXR1cm4gbWFrZVN0YXRlS2V5KGtleSk7XHJcblx0fVxyXG5cclxuXHRzdGF0ZUdldChmaXJzdD86IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XHJcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XHJcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XHJcblx0XHRjb25zdCBzdGF0ZUtleSA9IHRoaXMuZ2V0U3RhdGVLZXkodXJsLCBwYXJhbXMpO1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5zdGF0ZS5oYXNLZXkoc3RhdGVLZXkpKSB7XHJcblx0XHRcdGNvbnN0IGNhY2hlZCA9IHRoaXMuc3RhdGUuZ2V0KHN0YXRlS2V5LCBudWxsKTtcclxuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xyXG5cdFx0XHRyZXR1cm4gb2YoY2FjaGVkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsLCBvcHRpb25zKS5waXBlKFxyXG5cdFx0XHRcdHRhcCh4ID0+IHtcclxuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0ZVBvc3QoZmlyc3Q6IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XHJcblx0XHRjb25zdCBtb2RlbDoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcclxuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XHJcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XHJcblx0XHRjb25zdCBzdGF0ZUtleSA9IHRoaXMuZ2V0U3RhdGVLZXkodXJsLCBtb2RlbCk7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLnN0YXRlLmhhc0tleShzdGF0ZUtleSkpIHtcclxuXHRcdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5zdGF0ZS5nZXQoc3RhdGVLZXksIG51bGwpO1xyXG5cdFx0XHR0aGlzLnN0YXRlLnJlbW92ZShzdGF0ZUtleSk7XHJcblx0XHRcdHJldHVybiBvZihjYWNoZWQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHVybCwgbW9kZWwsIG9wdGlvbnMpLnBpcGUoXHJcblx0XHRcdFx0dGFwKHggPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm9uU2VyaWFsaXplKHN0YXRlS2V5LCAoKSA9PiB4KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19