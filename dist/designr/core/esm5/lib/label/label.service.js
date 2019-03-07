/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, delay, filter, first, map, tap } from 'rxjs/operators';
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
        // console.log('missingLabel', key, this.missingHandler);
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        // console.log('missingLabel', key);
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
        return value.replace(TEMPLATE_REGEXP, (/**
         * @param {?} text
         * @param {?} key
         * @return {?}
         */
        function (text, key) {
            /** @type {?} */
            var replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        }));
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
        tap((/**
         * @return {?}
         */
        function () {
            _this.collectKeys().pipe(first()).subscribe((/**
             * @param {?} keys
             * @return {?}
             */
            function (keys) {
                // console.log('LabelService.collected', keys);
            }));
        })));
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
        // console.log('LabelService.getKey', key);
        if (this.cache.hasOwnProperty(key)) {
            /** @type {?} */
            var label = this.cache[key];
            return of(label).pipe(delay(1));
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        this.parsers[key] = (/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return _this.parseLabel(label, key, defaultValue, params); });
        // !!! never reach this, return of(null) ?
        return this.labels$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return items[key] || null; })), filter((/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return label !== null; })), 
        // tap(label => console.log('getKey', key, label)),
        map((/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return _this.parseLabel(label, key, defaultValue, params); })), tap((/**
         * @param {?} label
         * @return {?}
         */
        function (label) { return _this.cache[key] = label; })));
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
        var keys = Object.keys(this.collectedKeys).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.collectedKeys[x]; }));
        // console.log('LabelService.collectKeys', keys);
        this.collectedKeys = {};
        if (keys.length) {
            return this.statePost(keys).pipe(map((/**
             * @param {?} keys
             * @return {?}
             */
            function (keys) {
                // console.log('LabelService.collectKeys', JSON.stringify(keys));
                /** @type {?} */
                var items = {};
                keys.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return items[x.id] = _this.parsers[x.id](x.value || x.defaultValue || x.id); }));
                return items;
            })), tap((/**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                Object.assign(_this.cache, items);
                _this.labels$.next(_this.cache);
                // console.log('collectKeys', this.cache);
            })), 
            // shareReplay(),
            catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                // console.log('LabelService.collectKeys.error', error);
                return of({});
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hEO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQUd2QjtJQUdtRCx3Q0FBYTtJQWlCL0Qsc0JBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7O1FBWHJCLG1CQUFhLEdBQWlDLEVBQUUsQ0FBQztRQUtsRCxXQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2YsYUFBTyxHQUFPLEVBQUUsQ0FBQztRQUNoQixhQUFPLEdBQXdDLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0QsYUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQU14RCxDQUFDO0lBbkJELHNCQUFJLG9DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFlBQVksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7Ozs7O0lBbUJPLGlDQUFVOzs7Ozs7OztJQUFsQixVQUFtQixLQUFvQixFQUFFLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7UUFDeEYsSUFBSSxLQUFL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QUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQW5FLENBQW1FLEVBQUMsQ0FBQztnQkFDdkYsT0FBTyxLQUFLLENBQUM7WUFDZCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1lBQUMsVUFBQyxLQUFpQztnQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLDBDQUEwQztZQUMzQyxDQUFDLEVBQUM7WUFDRixpQkFBaUI7WUFDakIsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZix3REFBd0Q7Z0JBQ3hELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFDLENBQ0YsQ0FBQztZQUNGOzs7Ozs7Ozs7Ozs7O2NBYUU7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtJQUNGLENBQUM7O2dCQTlJRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWRrQyxRQUFROzs7dUJBQTNDO0NBNEpDLEFBaEpELENBR21ELFVBQVUsR0E2STVEO1NBN0lZLFlBQVk7Ozs7OztJQU94QixxQ0FBeUQ7O0lBR3pELHNDQUFpQzs7SUFFakMsNkJBQXNCOztJQUN0QiwrQkFBd0I7Ozs7O0lBQ3hCLCtCQUFxRTs7Ozs7SUFDckUsK0JBQXdEOzs7OztJQUd2RCxnQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVsYXksIGZpbHRlciwgZmlyc3QsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgTGFiZWxLZXkge1xuXHRpZD86IHN0cmluZztcblx0dmFsdWU/OiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxTZXJ2aWNlPFQgZXh0ZW5kcyBMYWJlbD4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9sYWJlbCc7XG5cdH1cblxuXHQvLyAhISEgbmV3IGFzeW5jIHBpcGVcblx0cHJpdmF0ZSBjb2xsZWN0ZWRLZXlzOiB7IFtrZXk6IHN0cmluZ106IExhYmVsS2V5OyB9ID0ge307XG5cdC8vIHByaXZhdGUgY2FjaGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9ID0ge307XG5cblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cblx0cHVibGljIGNhY2hlOiB7fSA9IHt9O1xuXHRwdWJsaWMgcGFyc2Vyczoge30gPSB7fTtcblx0cHJpdmF0ZSBsYWJlbHMkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUxhYmVsKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdMYWJlbChrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nTGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdtaXNzaW5nTGFiZWwnLCBrZXksIHRoaXMubWlzc2luZ0hhbmRsZXIpO1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5KTtcblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xcQFxccz8oW157fVxcc10qKVxccz8vZztcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURV9SRUdFWFAsICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcgPyByZXBsYWNlciA6IHRleHQ7XG5cdFx0fSk7XG5cdH1cblxuXHRyZWdpc3RlcigpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdC8vIHRocm90dGxlVGltZSg1MDApLFxuXHRcdFx0dGFwKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2xsZWN0S2V5cygpLnBpcGUoXG5cdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0KS5zdWJzY3JpYmUoKGtleXMpID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RlZCcsIGtleXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QoKTogdm9pZCB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmVtaXR0ZXIuZW1pdCgpO1xuXHRcdH1cblx0fVxuXG5cdGdldEtleShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuZ2V0S2V5Jywga2V5KTtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRjb25zdCBsYWJlbCA9IHRoaXMuY2FjaGVba2V5XTtcblx0XHRcdHJldHVybiBvZihsYWJlbCkucGlwZShcblx0XHRcdFx0ZGVsYXkoMSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNvbGxlY3RlZEtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuY2FjaGVba2V5XSA9IG51bGw7XG5cdFx0fVxuXHRcdHRoaXMucGFyc2Vyc1trZXldID0gKGxhYmVsKSA9PiB0aGlzLnBhcnNlTGFiZWwobGFiZWwsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdC8vICEhISBuZXZlciByZWFjaCB0aGlzLCByZXR1cm4gb2YobnVsbCkgP1xuXHRcdHJldHVybiB0aGlzLmxhYmVscyQucGlwZShcblx0XHRcdG1hcChpdGVtcyA9PiBpdGVtc1trZXldIHx8IG51bGwpLFxuXHRcdFx0ZmlsdGVyKGxhYmVsID0+IGxhYmVsICE9PSBudWxsKSxcblx0XHRcdC8vIHRhcChsYWJlbCA9PiBjb25zb2xlLmxvZygnZ2V0S2V5Jywga2V5LCBsYWJlbCkpLFxuXHRcdFx0bWFwKGxhYmVsID0+IHRoaXMucGFyc2VMYWJlbChsYWJlbCwga2V5LCBkZWZhdWx0VmFsdWUsIHBhcmFtcykpLFxuXHRcdFx0dGFwKGxhYmVsID0+IHRoaXMuY2FjaGVba2V5XSA9IGxhYmVsKSxcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb2xsZWN0S2V5cygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubWFwKHggPT4gdGhpcy5jb2xsZWN0ZWRLZXlzW3hdKTtcblx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RLZXlzJywga2V5cyk7XG5cdFx0dGhpcy5jb2xsZWN0ZWRLZXlzID0ge307XG5cdFx0aWYgKGtleXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcblx0XHRcdFx0bWFwKChrZXlzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0S2V5cycsIEpTT04uc3RyaW5naWZ5KGtleXMpKTtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0gdGhpcy5wYXJzZXJzW3guaWRdKHgudmFsdWUgfHwgeC5kZWZhdWx0VmFsdWUgfHwgeC5pZCkpO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtcztcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgoaXRlbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBpdGVtcyk7XG5cdFx0XHRcdFx0dGhpcy5sYWJlbHMkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbGxlY3RLZXlzJywgdGhpcy5jYWNoZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyBzaGFyZVJlcGxheSgpLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxTZXJ2aWNlLmNvbGxlY3RLZXlzLmVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiBvZih7fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdC8qXG5cdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGAvYXBpL2kxOG4vbGFiZWxzYCwga2V5cykucGlwZShcblx0XHRcdFx0bWFwKChrZXlzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHgudmFsdWUgfHwgeC5kZWZhdWx0VmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtcztcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgoaXRlbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLmNhY2hlLCBpdGVtcyk7XG5cdFx0XHRcdFx0dGhpcy5sYWJlbHMkLm5leHQodGhpcy5jYWNoZSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2NvbGxlY3RLZXlzJywgdGhpcy5jYWNoZSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdCovXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZih7fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==