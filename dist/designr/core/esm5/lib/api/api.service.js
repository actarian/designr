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
        this.params = params;
    }
    return ApiRequestOptions;
}());
export { ApiRequestOptions };
var ApiService = /** @class */ (function () {
    function ApiService(injector) {
        this.injector = injector;
    }
    Object.defineProperty(ApiService.prototype, "collection", {
        get: function () {
            return '/api';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "logger", {
        get: function () {
            if (!this._logger) {
                this._logger = this.injector.get(Logger);
            }
            return this._logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "http", {
        get: function () {
            if (!this._http) {
                this._http = this.injector.get(HttpClient);
            }
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "state", {
        get: function () {
            if (!this._state) {
                this._state = this.injector.get(TransferState);
            }
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "platformId", {
        get: function () {
            if (!this._platformId) {
                this._platformId = this.injector.get(PLATFORM_ID);
            }
            return this._platformId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "config", {
        get: function () {
            if (!this._config) {
                this._config = this.injector.get(CoreService).options;
            }
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "origin", {
        get: function () {
            if (!this._origin) {
                this._origin = this.config.origin;
            }
            return this._origin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "url", {
        get: function () {
            var base = this.origin;
            var collection = this.collection.toLowerCase();
            if (collection.indexOf('http') === 0) {
                base = '';
            }
            return "" + base + collection;
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.getUrl = function (method) {
        if (method === void 0) { method = ''; }
        return "" + this.url + method;
    };
    ApiService.prototype.get = function (first, second) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var params = (typeof first === 'object' ? first : second);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        return this.http.get(url, options).pipe(tap(function (x) { return _this.logger.request(url); }));
    };
    ApiService.prototype.post = function (first, second, third) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var model = (typeof first === 'object' ? first : second);
        var params = (typeof second === 'object' ? second : third);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        return this.http.post(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
    };
    ApiService.prototype.put = function (first, second, third) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var model = (typeof first === 'object' ? first : second);
        var params = (typeof second === 'object' ? second : third);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        return this.http.put(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
    };
    ApiService.prototype.patch = function (first, second, third) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var model = (typeof first === 'object' ? first : second);
        var params = (typeof second === 'object' ? second : third);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        return this.http.patch(url, model, options).pipe(tap(function (x) { return _this.logger.request(url); }));
    };
    ApiService.prototype.delete = function (first, second, third) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var identity = (typeof first !== 'string' ? first : second);
        var id = identity ? (typeof identity === 'number' ? identity : identity.id) : null;
        var params = (typeof second === 'object' ? second : third);
        var url = id !== null ? this.getUrl(method + "/" + id) : this.getUrl(method);
        var options = new ApiRequestOptions(params);
        return this.http.delete(url, options).pipe(tap(function (x) { return _this.logger.request(url); }));
    };
    ApiService.prototype.toCamelCase = function (input) {
        var _this = this;
        var output, key, keyCamelCase, value;
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
    ApiService.prototype.getStateKey = function (url, model) {
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
        var key = url.replace(/(\W)/gm, '_');
        // this.logger.log('ApiService.getStateKey.key', key);
        return makeStateKey(key);
    };
    ApiService.prototype.stateGet = function (first, second) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var params = (typeof first === 'object' ? first : second);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        var stateKey = this.getStateKey(url, params);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
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
    ApiService.prototype.statePost = function (first, second, third) {
        var _this = this;
        var method = (typeof first === 'string' ? first : '');
        var model = (typeof first === 'object' ? first : second);
        var params = (typeof second === 'object' ? second : third);
        var url = this.getUrl(method);
        var options = new ApiRequestOptions(params);
        var stateKey = this.getStateKey(url, model);
        if (isPlatformBrowser(this.platformId) && this.state.hasKey(stateKey)) {
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
    ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(i0.ɵɵinject(i0.Injector)); };
    ApiService.ɵprov = i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
    return ApiService;
}());
export { ApiService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2FwaS9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFZLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xGLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWxEO0lBR0MsMkJBQVksTUFBVztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFvQixDQUFDO0lBQ3BDLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVEO0lBa0VDLG9CQUNXLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDekIsQ0FBQztJQS9ETCxzQkFBSSxrQ0FBVTthQUFkO1lBQ0MsT0FBTyxNQUFNLENBQUM7UUFDZixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDhCQUFNO2FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFD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SSxDQUFDLElBQUksQ0FBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDakQsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDSixJQUFJLGdCQUFnQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO1lBQ0YsQ0FBQyxDQUFDLENBQ0YsQ0FBQztTQUNGO0lBQ0YsQ0FBQzt3RUFwTlcsVUFBVTtzREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVixNQUFNO3FCQXRCbkI7Q0E4T0MsQUF6TkQsSUF5TkM7U0F0TlksVUFBVTtrREFBVixVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3RhdGVLZXksIFN0YXRlS2V5LCBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLmNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEFwaVJlcXVlc3RPcHRpb25zIHtcblx0aGVhZGVycz86IEh0dHBIZWFkZXJzO1xuXHRwYXJhbXM/OiBIdHRwUGFyYW1zO1xuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiB7fSkge1xuXHRcdHRoaXMuaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSk7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXMgYXMgSHR0cFBhcmFtcztcblx0fVxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaSc7XG5cdH1cblxuXHRwcml2YXRlIF9sb2dnZXI6IExvZ2dlcjtcblx0Z2V0IGxvZ2dlcigpOiBMb2dnZXIge1xuXHRcdGlmICghdGhpcy5fbG9nZ2VyKSB7XG5cdFx0XHR0aGlzLl9sb2dnZXIgPSB0aGlzLmluamVjdG9yLmdldChMb2dnZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fbG9nZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudDtcblx0Z2V0IGh0dHAoKTogSHR0cENsaWVudCB7XG5cdFx0aWYgKCF0aGlzLl9odHRwKSB7XG5cdFx0XHR0aGlzLl9odHRwID0gdGhpcy5pbmplY3Rvci5nZXQoSHR0cENsaWVudCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9odHRwO1xuXHR9XG5cblx0cHJpdmF0ZSBfc3RhdGU6IFRyYW5zZmVyU3RhdGU7XG5cdGdldCBzdGF0ZSgpOiBUcmFuc2ZlclN0YXRlIHtcblx0XHRpZiAoIXRoaXMuX3N0YXRlKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFRyYW5zZmVyU3RhdGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fc3RhdGU7XG5cdH1cblxuXHRwcml2YXRlIF9wbGF0Zm9ybUlkOiBzdHJpbmc7XG5cdGdldCBwbGF0Zm9ybUlkKCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLl9wbGF0Zm9ybUlkKSB7XG5cdFx0XHR0aGlzLl9wbGF0Zm9ybUlkID0gdGhpcy5pbmplY3Rvci5nZXQ8c3RyaW5nPihQTEFURk9STV9JRCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9wbGF0Zm9ybUlkO1xuXHR9XG5cblx0cHJpdmF0ZSBfY29uZmlnOiBDb3JlQ29uZmlnO1xuXHRnZXQgY29uZmlnKCk6IENvcmVDb25maWcge1xuXHRcdGlmICghdGhpcy5fY29uZmlnKSB7XG5cdFx0XHR0aGlzLl9jb25maWcgPSB0aGlzLmluamVjdG9yLmdldChDb3JlU2VydmljZSkub3B0aW9ucztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxuXG5cdHByaXZhdGUgX29yaWdpbjogc3RyaW5nO1xuXHRnZXQgb3JpZ2luKCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLl9vcmlnaW4pIHtcblx0XHRcdHRoaXMuX29yaWdpbiA9IHRoaXMuY29uZmlnLm9yaWdpbjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX29yaWdpbjtcblx0fVxuXG5cdGdldCB1cmwoKTogc3RyaW5nIHtcblx0XHRsZXQgYmFzZTogc3RyaW5nID0gdGhpcy5vcmlnaW47XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmIChjb2xsZWN0aW9uLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCkge1xuXHRcdFx0YmFzZSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gYCR7YmFzZX0ke2NvbGxlY3Rpb259YDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7IH1cblxuXHRnZXRVcmwobWV0aG9kOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke3RoaXMudXJsfSR7bWV0aG9kfWA7XG5cdH1cblxuXHRnZXQoZmlyc3Q/OiBzdHJpbmcgfCB7fSwgc2Vjb25kPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxUW10+KHVybCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHBvc3QoZmlyc3Q6IHN0cmluZyB8IHt9LCBzZWNvbmQ/OiB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IG1vZGVsOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdHRhcCh4ID0+IHRoaXMubG9nZ2VyLnJlcXVlc3QodXJsKSksXG5cdFx0KTtcblx0fVxuXG5cdHB1dChmaXJzdDogc3RyaW5nIHwgVCwgc2Vjb25kPzogVCB8IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IFQgPSAodHlwZW9mIGZpcnN0ID09PSAnb2JqZWN0JyA/IGZpcnN0IDogc2Vjb25kKSBhcyBUO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVybChtZXRob2QpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgQXBpUmVxdWVzdE9wdGlvbnMocGFyYW1zKTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0cGF0Y2goZmlyc3Q6IHN0cmluZyB8IFQsIHNlY29uZD86IFQgfCB7fSwgdGhpcmQ/OiB7fSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgbWV0aG9kOiBzdHJpbmcgPSAodHlwZW9mIGZpcnN0ID09PSAnc3RyaW5nJyA/IGZpcnN0IDogJycpO1xuXHRcdGNvbnN0IG1vZGVsOiBUID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCkgYXMgVDtcblx0XHRjb25zdCBwYXJhbXM6IHt9ID0gKHR5cGVvZiBzZWNvbmQgPT09ICdvYmplY3QnID8gc2Vjb25kIDogdGhpcmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxUPih1cmwsIG1vZGVsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0ZGVsZXRlKGZpcnN0OiBzdHJpbmcgfCBUIHwgbnVtYmVyLCBzZWNvbmQ/OiBUIHwgbnVtYmVyIHwge30sIHRoaXJkPzoge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IG1ldGhvZDogc3RyaW5nID0gKHR5cGVvZiBmaXJzdCA9PT0gJ3N0cmluZycgPyBmaXJzdCA6ICcnKTtcblx0XHRjb25zdCBpZGVudGl0eTogVCB8IG51bWJlciA9ICh0eXBlb2YgZmlyc3QgIT09ICdzdHJpbmcnID8gZmlyc3QgOiBzZWNvbmQpIGFzIFQgfCBudW1iZXI7XG5cdFx0Y29uc3QgaWQgPSBpZGVudGl0eSA/ICh0eXBlb2YgaWRlbnRpdHkgPT09ICdudW1iZXInID8gaWRlbnRpdHkgOiAoaWRlbnRpdHkgYXMgYW55KS5pZCkgOiBudWxsO1xuXHRcdGNvbnN0IHBhcmFtczoge30gPSAodHlwZW9mIHNlY29uZCA9PT0gJ29iamVjdCcgPyBzZWNvbmQgOiB0aGlyZCk7XG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSBpZCAhPT0gbnVsbCA/IHRoaXMuZ2V0VXJsKGAke21ldGhvZH0vJHtpZH1gKSA6IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFRbXT4odXJsLCBvcHRpb25zKS5waXBlKFxuXHRcdFx0dGFwKHggPT4gdGhpcy5sb2dnZXIucmVxdWVzdCh1cmwpKSxcblx0XHQpO1xuXHR9XG5cblx0dG9DYW1lbENhc2UoaW5wdXQ6IGFueSk6IGFueSB7XG5cdFx0bGV0IG91dHB1dCwga2V5LCBrZXlDYW1lbENhc2UsIHZhbHVlO1xuXHRcdGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRyZXR1cm4gaW5wdXQubWFwKCh2YWx1ZTogYW55KSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB0aGlzLnRvQ2FtZWxDYXNlKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0ID0ge307XG5cdFx0XHRmb3IgKGtleSBpbiBpbnB1dCkge1xuXHRcdFx0XHRpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdGtleUNhbWVsQ2FzZSA9IChrZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSkgfHwga2V5KS50b1N0cmluZygpO1xuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXRba2V5XTtcblx0XHRcdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkpIHtcblx0XHRcdFx0XHRcdHZhbHVlID0gdGhpcy50b0NhbWVsQ2FzZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG91dHB1dFtrZXlDYW1lbENhc2VdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXG5cdC8vIFRSQU5TRkVSIFNUQVRFXG5cblx0Z2V0U3RhdGVLZXkodXJsOiBzdHJpbmcsIG1vZGVsOiB7fSk6IFN0YXRlS2V5PGFueT4ge1xuXHRcdGNvbnN0IGZsYXRNYXAgPSAoczogc3RyaW5nLCB4OiBhbnkpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cyArPSB4LnRvU3RyaW5nKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRzICs9IHguc3Vic3RyKDAsIDEwKTtcblx0XHRcdH0gZWxzZSBpZiAoeCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0cyArPSAnXycgKyBPYmplY3Qua2V5cyh4KS5tYXAoayA9PiBrICsgJ18nICsgZmxhdE1hcCgnJywgeFtrXSkpLmpvaW4oJ18nKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzO1xuXHRcdH07XG5cdFx0dXJsID0gZmxhdE1hcCh1cmwsIG1vZGVsKTtcblx0XHQvLyBjb25zb2xlLmxvZygnQXBpU2VydmljZS5nZXRTdGF0ZUtleS51cmwnLCB1cmwpO1xuXHRcdGNvbnN0IGtleTogc3RyaW5nID0gdXJsLnJlcGxhY2UoLyhcXFcpL2dtLCAnXycpO1xuXHRcdC8vIHRoaXMubG9nZ2VyLmxvZygnQXBpU2VydmljZS5nZXRTdGF0ZUtleS5rZXknLCBrZXkpO1xuXHRcdHJldHVybiBtYWtlU3RhdGVLZXkoa2V5KTtcblx0fVxuXG5cdHN0YXRlR2V0KGZpcnN0Pzogc3RyaW5nIHwge30sIHNlY29uZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2YgZmlyc3QgPT09ICdvYmplY3QnID8gZmlyc3QgOiBzZWNvbmQpO1xuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVcmwobWV0aG9kKTtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IEFwaVJlcXVlc3RPcHRpb25zKHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3RhdGVLZXkgPSB0aGlzLmdldFN0YXRlS2V5KHVybCwgcGFyYW1zKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLnN0YXRlLmhhc0tleShzdGF0ZUtleSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IHRoaXMuc3RhdGUuZ2V0KHN0YXRlS2V5LCBudWxsKTtcblx0XHRcdHRoaXMuc3RhdGUucmVtb3ZlKHN0YXRlS2V5KTtcblx0XHRcdHJldHVybiBvZihjYWNoZWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybCwgb3B0aW9ucykucGlwZShcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub25TZXJpYWxpemUoc3RhdGVLZXksICgpID0+IHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRlUG9zdChmaXJzdDogc3RyaW5nIHwge30sIHNlY29uZD86IHt9LCB0aGlyZD86IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRjb25zdCBtZXRob2Q6IHN0cmluZyA9ICh0eXBlb2YgZmlyc3QgPT09ICdzdHJpbmcnID8gZmlyc3QgOiAnJyk7XG5cdFx0Y29uc3QgbW9kZWw6IHt9ID0gKHR5cGVvZiBmaXJzdCA9PT0gJ29iamVjdCcgPyBmaXJzdCA6IHNlY29uZCk7XG5cdFx0Y29uc3QgcGFyYW1zOiB7fSA9ICh0eXBlb2Ygc2Vjb25kID09PSAnb2JqZWN0JyA/IHNlY29uZCA6IHRoaXJkKTtcblx0XHRjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXJsKG1ldGhvZCk7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBBcGlSZXF1ZXN0T3B0aW9ucyhwYXJhbXMpO1xuXHRcdGNvbnN0IHN0YXRlS2V5ID0gdGhpcy5nZXRTdGF0ZUtleSh1cmwsIG1vZGVsKTtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLnN0YXRlLmhhc0tleShzdGF0ZUtleSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlZCA9IHRoaXMuc3RhdGUuZ2V0KHN0YXRlS2V5LCBudWxsKTtcblx0XHRcdHRoaXMuc3RhdGUucmVtb3ZlKHN0YXRlS2V5KTtcblx0XHRcdHJldHVybiBvZihjYWNoZWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odXJsLCBtb2RlbCwgb3B0aW9ucykucGlwZShcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUub25TZXJpYWxpemUoc3RhdGVLZXksICgpID0+IHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==