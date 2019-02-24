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
        console.log('parseLabel', value, key, defaultValue, params);
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
        var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
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
            return of(this.cache[key]);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        return this.labels$.pipe(map(function (items) { return items[key] || null; }), filter(function (label) { return label !== null; }), 
        // tap(label => console.log('getKey', key, label)),
        map(function (label) { return _this.parseLabel(label, key, defaultValue, params); }));
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
                keys.forEach(function (x) { return items[x.id] = x.value || x.defaultValue || x.id; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQSxzQkFBWTs7SUFDWix5QkFBZTs7SUFDZixnQ0FBc0I7Ozs7O0FBR3ZCO0lBR21ELHdDQUFhO0lBZ0IvRCxzQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7UUFWckIsbUJBQWEsR0FBaUMsRUFBRSxDQUFDO1FBS2xELFdBQUssR0FBTyxFQUFFLENBQUM7UUFDZCxhQUFPLEdBQXdDLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0QsYUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQU14RCxDQUFDO0lBbEJELHNCQUFJLG9DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFlBQVksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7Ozs7O0lBa0JPLGlDQUFVOzs7Ozs7OztJQUFsQixVQUFtQixLQUFvQixFQUFFLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7UUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcs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QyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLDBDQUEwQztZQUMzQyxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQSxLQUFLO2dCQUNmLHdEQUF3RDtnQkFDeEQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FDRixDQUFDO1lBQ0Y7Ozs7Ozs7Ozs7Ozs7Y0FhRTtTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQzs7Z0JBcklELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBZGtDLFFBQVE7Ozt1QkFBM0M7Q0FtSkMsQUF2SUQsQ0FHbUQsVUFBVSxHQW9JNUQ7U0FwSVksWUFBWTs7Ozs7O0lBT3hCLHFDQUF5RDs7SUFHekQsc0NBQWlDOztJQUVqQyw2QkFBc0I7Ozs7O0lBQ3RCLCtCQUFxRTs7Ozs7SUFDckUsK0JBQXdEOzs7OztJQUd2RCxnQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBMYWJlbEtleSB7XG5cdGlkPzogc3RyaW5nO1xuXHR2YWx1ZT86IHN0cmluZztcblx0ZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbFNlcnZpY2U8VCBleHRlbmRzIExhYmVsPiBleHRlbmRzIEFwaVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL2xhYmVsJztcblx0fVxuXG5cdC8vICEhISBuZXcgYXN5bmMgcGlwZVxuXHRwcml2YXRlIGNvbGxlY3RlZEtleXM6IHsgW2tleTogc3RyaW5nXTogTGFiZWxLZXk7IH0gPSB7fTtcblx0Ly8gcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblxuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRwdWJsaWMgY2FjaGU6IHt9ID0ge307XG5cdHByaXZhdGUgbGFiZWxzJDogU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgU3ViamVjdCgpO1xuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCwga2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHRjb25zb2xlLmxvZygncGFyc2VMYWJlbCcsIHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHRpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5taXNzaW5nTGFiZWwoa2V5KTtcblx0XHR9IGVsc2UgaWYgKHBhcmFtcykge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VQYXJhbXModmFsdWUsIHBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgbWlzc2luZ0xhYmVsKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRjb25zb2xlLmxvZygnbWlzc2luZ0xhYmVsJywga2V5LCB0aGlzLm1pc3NpbmdIYW5kbGVyKTtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ21pc3NpbmdMYWJlbCcsIGtleSk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0BcXHM/KFtee31cXHNdKilcXHM/L2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFX1JFR0VYUCwgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdGdldEtleShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdGlmICh0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiBvZih0aGlzLmNhY2hlW2tleV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jb2xsZWN0ZWRLZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IHsgaWQ6IGtleSwgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUgfSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmNhY2hlW2tleV0gPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5sYWJlbHMkLnBpcGUoXG5cdFx0XHRtYXAoaXRlbXMgPT4gaXRlbXNba2V5XSB8fCBudWxsKSxcblx0XHRcdGZpbHRlcihsYWJlbCA9PiBsYWJlbCAhPT0gbnVsbCksXG5cdFx0XHQvLyB0YXAobGFiZWwgPT4gY29uc29sZS5sb2coJ2dldEtleScsIGtleSwgbGFiZWwpKSxcblx0XHRcdG1hcChsYWJlbCA9PiB0aGlzLnBhcnNlTGFiZWwobGFiZWwsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpKSxcblx0XHQpO1xuXHR9XG5cblx0cmVnaXN0ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHQvLyB0aHJvdHRsZVRpbWUoNTAwKSxcblx0XHRcdHRhcCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29sbGVjdEtleXMoKS5waXBlKFxuXHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdCkuc3Vic2NyaWJlKChrZXlzKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsU2VydmljZS5jb2xsZWN0ZWQnLCBrZXlzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0KCk6IHZvaWQge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmNvbGxlY3RlZEtleXMpLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5lbWl0dGVyLmVtaXQoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbGxlY3RLZXlzKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5tYXAoeCA9PiB0aGlzLmNvbGxlY3RlZEtleXNbeF0pO1xuXHRcdHRoaXMuY29sbGVjdGVkS2V5cyA9IHt9O1xuXHRcdGlmIChrZXlzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoa2V5czogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzKSk7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbXMgPSB7fTtcblx0XHRcdFx0XHRrZXlzLmZvckVhY2goeCA9PiBpdGVtc1t4LmlkXSA9IHgudmFsdWUgfHwgeC5kZWZhdWx0VmFsdWUgfHwgeC5pZCk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Lypcblx0XHRcdHJldHVybiB0aGlzLnBvc3QoYC9hcGkvaTE4bi9sYWJlbHNgLCBrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGtleXM6IExhYmVsS2V5W10pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0geC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Ki9cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHR9XG5cdH1cblxufVxuIl19