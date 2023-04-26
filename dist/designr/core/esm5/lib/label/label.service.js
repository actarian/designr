/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
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
        _this.keys = {};
        _this.values$ = new BehaviorSubject({});
        _this.emitter$ = new EventEmitter();
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
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.transform = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        /** @type {?} */
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return this.parseLabel(values[key], params);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
            return null;
        }
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.transform$ = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        var _this = this;
        /** @type {?} */
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(this.parseLabel(values[key], params));
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map((/**
         * @param {?} values
         * @return {?}
         */
        function (values) { return _this.parseLabel(values[key], params); })));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.observe$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.emitter$.pipe(debounceTime(1), switchMap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.collect$(); })), filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== null; })));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.collect$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object.keys(this.keys).length) {
            /** @type {?} */
            var keys_1 = Object.keys(this.keys).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.keys[x]; }));
            this.keys = {};
            return this.statePost(keys_1).pipe(map((/**
             * @param {?} labels
             * @return {?}
             */
            function (labels) {
                return labels.reduce((/**
                 * @param {?} values
                 * @param {?} x
                 * @return {?}
                 */
                function (values, x) {
                    values[x.id] = _this.getLabel(x);
                    return values;
                }), {});
            })), tap((/**
             * @param {?} labels
             * @return {?}
             */
            function (labels) {
                /** @type {?} */
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                _this.values$.next(values);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.log(error);
                /** @type {?} */
                var labels = keys_1.reduce((/**
                 * @param {?} values
                 * @param {?} x
                 * @return {?}
                 */
                function (values, x) {
                    values[x.id] = _this.getLabel(x);
                    return values;
                }), {});
                /** @type {?} */
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                // return this.values$.next(values);
                return of(null);
            })));
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    LabelService.prototype.parseLabel = /**
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (value, params) {
        if (value && params) {
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
        }
        else {
            return value;
        }
    };
    /**
     * @private
     * @param {?} label
     * @return {?}
     */
    LabelService.prototype.getLabel = /**
     * @private
     * @param {?} label
     * @return {?}
     */
    function (label) {
        return label.value || label.defaultValue || this.getMissingLabel(label);
    };
    /**
     * @private
     * @param {?} label
     * @return {?}
     */
    LabelService.prototype.getMissingLabel = /**
     * @private
     * @param {?} label
     * @return {?}
     */
    function (label) {
        if (typeof this.missingHandler === 'function') {
            return this.missingHandler(label);
        }
        return label.id;
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
    LabelService.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.values$;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.emitter$;
    /** @type {?} */
    LabelService.prototype.missingHandler;
    /**
     * @type {?}
     * @protected
     */
    LabelService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hEO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQUd2QjtJQUdtRCx3Q0FBYTtJQVkvRCxzQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQVByQixVQUFJLEdBQWlDLEVBQUUsQ0FBQztRQUN4QyxhQUFPLEdBQWdELElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLGNBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFRekQsQ0FBQztJQWRELHNCQUFJLG9DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFlBQVksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7OztJQWNELGdDQUFTOzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7O1lBQ25ELE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMs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SW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWxLZXkge1xyXG5cdGlkPzogc3RyaW5nO1xyXG5cdHZhbHVlPzogc3RyaW5nO1xyXG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxTZXJ2aWNlPFQgZXh0ZW5kcyBMYWJlbD4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcclxuXHJcblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiAnL2FwaS9sYWJlbCc7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGtleXM6IHsgW2tleTogc3RyaW5nXTogTGFiZWxLZXk7IH0gPSB7fTtcclxuXHRwcml2YXRlIHZhbHVlcyQ6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxuXHRwcml2YXRlIGVtaXR0ZXIkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHR9XHJcblxyXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XHJcblx0XHRpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VMYWJlbCh2YWx1ZXNba2V5XSwgcGFyYW1zKTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdHZhbHVlc1trZXldID0gbnVsbDtcclxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XHJcblx0XHRcdFx0dmFsdWU6IHsgaWQ6IGtleSwgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUgfSxcclxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRyYW5zZm9ybSQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcclxuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdHJldHVybiBvZih0aGlzLnBhcnNlTGFiZWwodmFsdWVzW2tleV0sIHBhcmFtcykpO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0dmFsdWVzW2tleV0gPSBudWxsO1xyXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5rZXlzLCBrZXksIHtcclxuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxyXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMkLnBpcGUoXHJcblx0XHRcdG1hcCh2YWx1ZXMgPT4gdGhpcy5wYXJzZUxhYmVsKHZhbHVlc1trZXldLCBwYXJhbXMpKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG9ic2VydmUkKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcclxuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIkLnBpcGUoXHJcblx0XHRcdGRlYm91bmNlVGltZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKHggPT4gdGhpcy5jb2xsZWN0JCgpKSxcclxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Y29sbGVjdCQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMua2V5cykubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpLm1hcCh4ID0+IHRoaXMua2V5c1t4XSk7XHJcblx0XHRcdHRoaXMua2V5cyA9IHt9O1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcclxuXHRcdFx0XHRtYXAoKGxhYmVsczogTGFiZWxLZXlbXSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGxhYmVscy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5pZF0gPSB0aGlzLmdldExhYmVsKHgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdFx0XHRcdFx0fSwge30pO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHRhcCgobGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHZhbHVlcywgbGFiZWxzKTtcclxuXHRcdFx0XHRcdHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSBrZXlzLnJlZHVjZSgodmFsdWVzLCB4KSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhbHVlc1t4LmlkXSA9IHRoaXMuZ2V0TGFiZWwoeCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XHJcblx0XHRcdFx0XHR9LCB7fSk7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBsYWJlbHMpO1xyXG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XHJcblx0XHRpZiAodmFsdWUgJiYgcGFyYW1zKSB7XHJcblx0XHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0AoW157fVxcc10qKS9nO1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURV9SRUdFWFAsICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcclxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldExhYmVsKGxhYmVsOiBMYWJlbEtleSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcblx0XHRyZXR1cm4gbGFiZWwudmFsdWUgfHwgbGFiZWwuZGVmYXVsdFZhbHVlIHx8IHRoaXMuZ2V0TWlzc2luZ0xhYmVsKGxhYmVsKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0TWlzc2luZ0xhYmVsKGxhYmVsOiBMYWJlbEtleSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubWlzc2luZ0hhbmRsZXIobGFiZWwpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGxhYmVsLmlkO1xyXG5cdH1cclxuXHJcbn1cclxuIl19