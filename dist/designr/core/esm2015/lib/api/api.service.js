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
import { CoreService } from '../config/core.service';
import { Logger } from '../logger/logger';
import * as i0 from "@angular/core";
export class ApiRequestOptions {
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
        return this.http.get(url, options).pipe(tap(x => this.logger.request(url)));
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
        return this.http.post(url, model, options).pipe(tap(x => this.logger.request(url)));
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
        return this.http.put(url, model, options).pipe(tap(x => this.logger.request(url)));
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
        return this.http.patch(url, model, options).pipe(tap(x => this.logger.request(url)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQVksYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHMUMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUc3QixZQUFZLE9BQVk7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ2xDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hELENBQUM7Q0FDRDs7O0lBUkEsb0NBQXNCOztJQUN0QixtQ0FBb0I7Ozs7O0FBWXJCLE1BQU0sT0FBTyxVQUFVOzs7O0lBK0R0QixZQUNXLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQzs7OztJQS9ETCxJQUFJLFVB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ZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1ha2VTdGF0ZUtleSwgU3RhdGVLZXksIFRyYW5zZmVyU3RhdGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIEFwaVJlcXVlc3RPcHRpb25zIHtcblx0aGVhZGVycz86IEh0dHBIZWFkZXJzO1xuXHRwYXJhbXM/OiBIdHRwUGFyYW1zO1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzoge30pIHtcblx0XHR0aGlzLmhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdH0pO1xuXHRcdHRoaXMucGFyYW1zID0gb3B0aW9ucyA/IG5ldyBIdHRwUGFyYW1zKG9wdGlvbnMpIDogbnVsbDtcblx0fVxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlPFQgZXh0ZW5kcyBJZGVudGl0eT4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpJztcblx0fVxuXG5cdHByaXZhdGUgX2xvZ2dlcjogTG9nZ2VyO1xuXHRnZXQgbG9nZ2VyKCk6IExvZ2dlciB7XG5cdFx0aWYgKCF0aGlzLl9sb2dnZXIpIHtcblx0XHRcdHRoaXMuX2xvZ2dlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9sb2dnZXI7XG5cdH1cblxuXHRwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50O1xuXHRnZXQgaHR0cCgpOiBIdHRwQ2xpZW50IHtcblx0XHRpZiAoIXRoaXMuX2h0dHApIHtcblx0XHRcdHRoaXMuX2h0dHAgPSB0aGlzLmluamVjdG9yLmdldChIdHRwQ2xpZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHA7XG5cdH1cblxuXHRwcml2YXRlIF9zdGF0ZTogVHJhbnNmZXJTdGF0ZTtcblx0Z2V0IHN0YXRlKCk6IFRyYW5zZmVyU3RhdGUge1xuXHRcdGlmICghdGhpcy5fc3RhdGUpIHtcblx0XHRcdHRoaXMuX3N0YXRlID0gdGhpcy5pbmplY3Rvci5nZXQoVHJhbnNmZXJTdGF0ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9zdGF0ZTtcblx0fVxuXG5cdHByaXZhdGUgX3BsYXRmb3JtSWQ6IHN0cmluZztcblx0Z2V0IHBsYXRmb3JtSWQoKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuX3BsYXRmb3JtSWQpIHtcblx0XHRcdHRoaXMuX3BsYXRmb3JtSWQgPSB0aGlzLmluamVjdG9yLmdldDxzdHJpbmc+KFBMQVRGT1JNX0lEKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3BsYXRmb3JtSWQ7XG5cdH1cblxuXHRwcml2YXRlIF9jb25maWc6IENvcmVDb25maWc7XG5cdGdldCBjb25maWcoKTogQ29yZUNvbmZpZyB7XG5cdFx0aWYgKCF0aGlzLl9jb25maWcpIHtcblx0XHRcdHRoaXMuX2NvbmZpZyA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvcmVTZXJ2aWNlKS5vcHRpb25zO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xuXHR9XG5cblx0cHJpdmF0ZSBfb3JpZ2luOiBzdHJpbmc7XG5cdGdldCBvcmlnaW4oKTogc3RyaW5nIHtcblx0XHRpZiAoIXRoaXMuX29yaWdpbikge1xuXHRcdFx0dGhpcy5fb3JpZ2luID0gdGhpcy5jb25maWcub3JpZ2luO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fb3JpZ2luO1xuXHR9XG5cblx0Z2V0IHVybCgpOiBzdHJpbmcge1xuXHRcdGxldCBiYXNlOiBzdHJpbmcgPSB0aGlzLm9yaWdpbjtcblx0XHRjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKGNvbGxlY3Rpb24uaW5kZXhPZignaHR0cCcpID09PSAwKSB7XG5cdFx0XHRiYXNlID0gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtiYXNlfSR7Y29sbGVjdGlvbn1gO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHsgfVxuXG5cdGdldFVybChtZXRob2Q6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYCR7dGhpcy51cmx9JHttZXRob2R9YDtcblx0fVxuXG5cdGdldChmaXJzdD86IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHVybCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHBvc3QoZmlyc3Q6IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IG1vZGVsOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHB1dChmaXJzdDogc3RyaW5nIHwgVCwgc2Vjb25kPzogVCB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IFQgPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0cGF0Y2goZmlyc3Q6IHN0cmluZyB8IFQsIHNlY29uZD86IFQgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IG1vZGVsOiBUID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCkgYXMgVDtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0ZGVsZXRlKGZpcnN0OiBzdHJpbmcgfCBUIHwgbnVtYmVyLCBzZWNvbmQ/OiBUIHwgbnVtYmVyIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBpZGVudGl0eTogVCB8IG51bWJlciA9ICh0eXBlb2YgZmlyc3QgIT09ICdzdHJpbmcnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQgfCBudW1iZXI7XG5cdFx0Y29uc3QgaWQgPSBpZGVudGl0eSA/ICh0eXBlb2YgaWRlbnRpdHkgPT09ICdudW1iZXInID8gaWRlbnRpdHkgOiBpZGVudGl0eS5pZCkgOiBudWxsO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBpZCAhPT0gbnVsbCA/IHRoaXMuZ2V0VXJsKGAke21ldGhvZH0vJHtpZH1gKSA6IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFRbXT4odXJsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0dG9DYW1lbENhc2UoaW5wdXQ6IGFueSk6IGFueSB7XG5cdFx0bGV0IG91dHB1dCwga2V5LCBrZXlDYW1lbENhc2UsIHZhbHVlO1xuXHRcdGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQubWFwKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRvQ2FtZWxDYXNlKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0ID0ge307XG5cdFx0XHRmb3IgKGtleSBpbiBpbnB1dCkge1xuXHRcdFx0XHRpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdGtleUNhbWVsQ2FzZSA9IChrZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSkgfHwga2V5KS50b1N0cmluZygpO1xuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXRba2V5XTtcblx0XHRcdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gdGhpcy50b0NhbWVsQ2FzZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG91dHB1dFtrZXlDYW1lbENhc2VdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXG5cdC8vIFRSQU5TRkVSIFNUQVRFXG5cblx0Z2V0U3RhdGVLZXkodXJsOiBzdHJpbmcsIG1vZGVsOiB7fSk6IFN0YXRlS2V5PFQ+IHtcblx0XHRjb25zdCBmbGF0TWFwID0gKHM6IHN0cmluZywgeDogYW55KSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHMgKz0geC50b1N0cmluZygpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0cyArPSB4LnN1YnN0cigwLCAxMCk7XG5cdFx0XHR9IGVsc2UgaWYgKHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHMgKz0gJ18nICsgT2JqZWN0LmtleXMoeCkubWFwKGsgPT4gayArICdfJyArIGZsYXRNYXAoJycsIHhba10pKS5qb2luKCdfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcztcblx0XHR9O1xuXHRcdHVybCA9IGZsYXRNYXAodXJsLCBtb2RlbCk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0FwaVNlcnZpY2UuZ2V0U3RhdGVLZXkudXJsJywgdXJsKTtcblx0XHRjb25zdCBrZXk6IHN0cmluZyA9IHVybC5yZXBsYWNlKC8oXFxXKS9nbSwgJ18nKTtcblx0XHQvLyB0aGlzLmxvZ2dlci5sb2coJ0FwaVNlcnZpY2UuZ2V0U3RhdGVLZXkua2V5Jywga2V5KTtcblx0XHRyZXR1cm4gbWFrZVN0YXRlS2V5KGtleSk7XG5cdH1cblxuXHRzdGF0ZUdldChmaXJzdD86IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdGNvbnN0IHN0YXRlS2V5ID0gdGhpcy5nZXRTdGF0ZUtleSh1cmwsIHBhcmFtcyk7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgJiYgdGhpcy5zdGF0ZS5oYXNLZXkoc3RhdGVLZXkpKSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSB0aGlzLnN0YXRlLmdldChzdGF0ZUtleSwgbnVsbCk7XG5cdFx0XHR0aGlzLnN0YXRlLnJlbW92ZShzdGF0ZUtleSk7XG5cdFx0XHRyZXR1cm4gb2YoY2FjaGVkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odXJsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0XHR0YXAoeCA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGVQb3N0KGZpcnN0OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBtb2RlbDoge30gPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3RhdGVLZXkgPSB0aGlzLmdldFN0YXRlS2V5KHVybCwgbW9kZWwpO1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIHRoaXMuc3RhdGUuaGFzS2V5KHN0YXRlS2V5KSkge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gdGhpcy5zdGF0ZS5nZXQoc3RhdGVLZXksIG51bGwpO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZW1vdmUoc3RhdGVLZXkpO1xuXHRcdFx0cmV0dXJuIG9mKGNhY2hlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0XHR0YXAoeCA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5vblNlcmlhbGl6ZShzdGF0ZUtleSwgKCkgPT4geCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxufVxuIl19