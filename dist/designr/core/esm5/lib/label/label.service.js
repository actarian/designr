/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, filter, first, map, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
var LabelKey = /** @class */ (function () {
    function LabelKey() {
    }
    return LabelKey;
}());
export { LabelKey };
if (false) {
    /** @type {?} */
    LabelKey.prototype.id;
    /** @type {?} */
    LabelKey.prototype.value;
    /** @type {?} */
    LabelKey.prototype.defaultValue;
}
/**
 * @template T
 */
var LabelService = /** @class */ (function (_super) {
    tslib_1.__extends(LabelService, _super);
    function LabelService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        // !!! new async pipe
        _this.collectedKeys = {};
        _this.cache = {};
        _this.parsers = {};
        _this.labels$ = new Subject();
        _this.emitter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(LabelService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/label';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.parseLabel = /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (value, key, defaultValue, params) {
        if (value == null) {
            value = defaultValue;
        }
        if (value == null) {
            return this.missingLabel(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    LabelService.prototype.missingLabel = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        console.log('missingLabel', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        console.log('missingLabel', key);
        return key;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    LabelService.prototype.parseParams = /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (value, params) {
        /** @type {?} */
        var TEMPLATE_REGEXP = /@([^{}\s]*)/g;
        return value.replace(TEMPLATE_REGEXP, function (text, key) {
            /** @type {?} */
            var replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.getKey = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        var _this = this;
        if (this.cache.hasOwnProperty(key)) {
            /** @type {?} */
            var label = this.cache[key];
            return of(label);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        this.parsers[key] = function (label) { return _this.parseLabel(label, key, defaultValue, params); };
        // !!! never reach this, return of(null) ?
        return this.labels$.pipe(map(function (items) { return items[key] || null; }), filter(function (label) { return label !== null; }), 
        // tap(label => console.log('getKey', key, label)),
        map(function (label) { return _this.parseLabel(label, key, defaultValue, params); }), tap(function (label) { return _this.cache[key] = label; }));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.register = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.emitter.pipe(
        // throttleTime(500),
        tap(function () {
            _this.collectKeys().pipe(first()).subscribe(function (keys) {
                // console.log('LabelService.collected', keys);
            });
        }));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.collect = /**
     * @return {?}
     */
    function () {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    };
    /**
     * @private
     * @return {?}
     */
    LabelService.prototype.collectKeys = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var keys = Object.keys(this.collectedKeys).map(function (x) { return _this.collectedKeys[x]; });
        this.collectedKeys = {};
        if (keys.length) {
            return this.statePost(keys).pipe(map(function (keys) {
                // console.log('LabelService.collectKeys', JSON.stringify(keys));
                /** @type {?} */
                var items = {};
                keys.forEach(function (x) { return items[x.id] = _this.parsers[x.id](x.value || x.defaultValue || x.id); });
                return items;
            }), tap(function (items) {
                Object.assign(_this.cache, items);
                _this.labels$.next(_this.cache);
                // console.log('collectKeys', this.cache);
            }), catchError(function (error) {
                // console.log('LabelService.collectKeys.error', error);
                return of({});
            }));
            /*
            return this.post(`/api/i18n/labels`, keys).pipe(
                map((keys: LabelKey[]) => {
                    const items = {};
                    keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                    return items;
                }),
                tap((items: { [key: string]: string; }) => {
                    Object.assign(this.cache, items);
                    this.labels$.next(this.cache);
                    // console.log('collectKeys', this.cache);
                }),
            );
            */
        }
        else {
            return of({});
        }
    };
    LabelService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LabelService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ LabelService.ngInjectableDef = i0.defineInjectable({ factory: function LabelService_Factory() { return new LabelService(i0.inject(i0.INJECTOR)); }, token: LabelService, providedIn: "root" });
    return LabelService;
}(ApiService));
export { LabelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.collectedKeys;
    /** @type {?} */
    LabelService.prototype.missingHandler;
    /** @type {?} */
    LabelService.prototype.cache;
    /** @type {?} */
    LabelService.prototype.parsers;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.labels$;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.emitter;
    /**
     * @type {?}
     * @protected
     */
    LabelService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQSxzQkFBWTs7SUFDWix5QkFBZTs7SUFDZixnQ0FBc0I7Ozs7O0FBR3ZCO0lBR21ELHdDQUFhO0lBaUIvRCxzQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7UUFYckIsbUJBQWEsR0FBaUMsRUFBRSxDQUFDO1FBS2xELFdBQUssR0FBTyxFQUFFLENBQUM7UUFDZixhQUFPLEdBQU8sRUFBRSxDQUFDO1FBQ2hCLGFBQU8sR0FBd0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3RCxhQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBTXhELENBQUM7SUFuQkQsc0JBQUksb0NBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sWUFBWSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7Ozs7Ozs7SUFtQk8saUNBQVU7Ozs7Ozs7O0lBQWxCLFVBQW1CLEtBQW9CLEVBQUUsR0FBVyxFQUFFLFlBQXFCLEVBQUUsTUFBWTtRQUN4RixJQUFJLEtBQUssSUFBSSxJQUFJ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RUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBbkUsQ0FBbUUsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLEtBQUssQ0FBQztZQUNkLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEtBQWlDO2dCQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsMENBQTBDO1lBQzNDLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2Ysd0RBQXdEO2dCQUN4RCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUNGLENBQUM7WUFDRjs7Ozs7Ozs7Ozs7OztjQWFFO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7SUFDRixDQUFDOztnQkF6SUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFka0MsUUFBUTs7O3VCQUEzQztDQXVKQyxBQTNJRCxDQUdtRCxVQUFVLEdBd0k1RDtTQXhJWSxZQUFZOzs7Ozs7SUFPeEIscUNBQXlEOztJQUd6RCxzQ0FBaUM7O0lBRWpDLDZCQUFzQjs7SUFDdEIsK0JBQXdCOzs7OztJQUN4QiwrQkFBcUU7Ozs7O0lBQ3JFLCtCQUF3RDs7Ozs7SUFHdkQsZ0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgZmlyc3QsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgTGFiZWxLZXkge1xuXHRpZD86IHN0cmluZztcblx0dmFsdWU/OiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxTZXJ2aWNlPFQgZXh0ZW5kcyBMYWJlbD4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9sYWJlbCc7XG5cdH1cblxuXHQvLyAhISEgbmV3IGFzeW5jIHBpcGVcblx0cHJpdmF0ZSBjb2xsZWN0ZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IExhYmVsS2V5OyB9ID0ge307XG5cdC8vIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cblx0cHVibGljIGNhY2hlOiB7fSA9IHt9O1xuXHRwdWJsaWMgcGFyc2Vyczoge30gPSB7fTtcblx0cHJpdmF0ZSBsYWJlbHMkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUxhYmVsKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdMYWJlbChrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nTGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnNvbGUubG9nKCdtaXNzaW5nTGFiZWwnLCBrZXksIHRoaXMubWlzc2luZ0hhbmRsZXIpO1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5KTtcblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xcQFxccz8oW157fVxcc10qKVxccz8vZztcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURV9SRUdFWFAsICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcgPyByZXBsYWNlciA6IHRleHQ7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRjb25zdCBsYWJlbCA9IHRoaXMuY2FjaGVba2V5XTtcblx0XHRcdHJldHVybiBvZihsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMucGFyc2Vyc1trZXldID0gKGxhYmVsKSA9PiB0aGlzLnBhcnNlTGFiZWwobGFiZWwsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdC8vICEhISBuZXZlciByZWFjaCB0aGlzLCByZXR1cm4gb2YobnVsbCkgP1xuXHRcdHJldHVybiB0aGlzLmxhYmVscyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldIHx8IG51bGwpLFxuXHRcdFx0ZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9PSBudWxsKSxcblx0XHRcdC8vIHRhcChsYWJlbCA9PiBjb25zb2xlLmxvZygnZ2V0S2V5Jywga2V5LCBsYWJlbCkpLFxuXHRcdFx0bWFwKGxhYmVsID0+IHRoaXMucGFyc2VMYWJlbChsYWJlbCwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcykpLFxuXHRcdFx0dGFwKGxhYmVsID0+IHRoaXMuY2FjaGVba2V5XSA9IGxhYmVsKSxcblx0XHQpO1xuXHR9XG5cblx0cmVnaXN0ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHQvLyB0aHJvdHRsZVRpbWUoNTAwKSxcblx0XHRcdHRhcCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdEtleXMoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKChrZXlzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0ZWQnLCBrZXlzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0KCk6IHZvaWQge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lbWl0dGVyLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbGxlY3RLZXlzKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5tYXAoeCA9PiB0aGlzLmNvbGxlY3RlZEtleXNbeF0pO1xuXHRcdHRoaXMuY29sbGVjdGVkS2V5cyA9IHt9O1xuXHRcdGlmIChrZXlzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzKSk7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHRoaXMucGFyc2Vyc1t4LmlkXSh4LnZhbHVlIHx8IHguZGVmYXVsdFZhbHVlIHx8IHguaWQpKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cy5lcnJvcicsIGVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQvKlxuXHRcdFx0cmV0dXJuIHRoaXMucG9zdChgL2FwaS9pMThuL2xhYmVsc2AsIGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW1zID0ge307XG5cdFx0XHRcdFx0a2V5cy5mb3JFYWNoKHggPT4gaXRlbXNbeC5pZF0gPSB4LnZhbHVlIHx8IHguZGVmYXVsdFZhbHVlKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXM7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odGhpcy5jYWNoZSwgaXRlbXMpO1xuXHRcdFx0XHRcdHRoaXMubGFiZWxzJC5uZXh0KHRoaXMuY2FjaGUpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdjb2xsZWN0S2V5cycsIHRoaXMuY2FjaGUpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHQqL1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2Yoe30pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=