/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, filter, first, map, switchMap, tap } from 'rxjs/operators';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
var SlugKey = /** @class */ (function () {
    function SlugKey() {
    }
    return SlugKey;
}());
export { SlugKey };
if (false) {
    /** @type {?} */
    SlugKey.prototype.id;
    /** @type {?} */
    SlugKey.prototype.mnemonic;
    /** @type {?} */
    SlugKey.prototype.slug;
}
var SlugService = /** @class */ (function (_super) {
    tslib_1.__extends(SlugService, _super);
    function SlugService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.keys = {};
        _this.values$ = new BehaviorSubject({});
        _this.emitter$ = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SlugService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return "/api/slug";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @return {?}
     */
    SlugService.prototype.transform = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return values[key];
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
            return null;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SlugService.prototype.transform$ = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(values[key]);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map((/**
         * @param {?} values
         * @return {?}
         */
        function (values) { return values[key]; })));
    };
    /**
     * @return {?}
     */
    SlugService.prototype.observe$ = /**
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
        function (x) { return x !== null; })), first());
    };
    /**
     * @return {?}
     */
    SlugService.prototype.collect$ = /**
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
             * @param {?} items
             * @return {?}
             */
            function (items) {
                return items.reduce((/**
                 * @param {?} values
                 * @param {?} x
                 * @return {?}
                 */
                function (values, x) {
                    values[x.mnemonic] = [x.slug];
                    return values;
                }), {});
            })), tap((/**
             * @param {?} slugs
             * @return {?}
             */
            function (slugs) {
                /** @type {?} */
                var values = _this.values$.getValue();
                Object.assign(values, slugs);
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
                    values[x.mnemonic] = null;
                    return values;
                }), {});
                /** @type {?} */
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                return of(null);
            })));
        }
        else {
            return of(null);
        }
    };
    SlugService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SlugService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
    return SlugService;
}(EntityService));
export { SlugService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.values$;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.emitter$;
    /** @type {?} */
    SlugService.prototype.missingHandler;
    /**
     * @type {?}
     * @protected
     */
    SlugService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RDtJQUFBO0lBSUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsdUJBQWM7O0FBR2Y7SUFHaUMsdUNBQTRCO0lBWTVELHFCQUNXLFFBQWtCO1FBRDdCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFIVSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBUHJCLFVBQUksR0FBZ0MsRUFBRSxDQUFDO1FBQ3ZDLGFBQU8sR0FBZ0QsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsY0FBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQVF6RCxDQUFDO0lBZEQsc0JBQUksbUNBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sV0FBVyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7OztJQWNELCtCQUFTOzs7O0lBQVQsVUFBVSxHQUFXOztZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0Is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QkFDL0IsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFDYixNQUFNLEdBQUcsTUFBSSxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQixPQUFPLE1BQU0sQ0FBQztnQkFDZixDQUFDLEdBQUUsRUFBRSxDQUFDOztvQkFDQSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBN0ZELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBZGtDLFFBQVE7OztzQkFBM0M7Q0EyR0MsQUEvRkQsQ0FHaUMsYUFBYSxHQTRGN0M7U0E1RlksV0FBVzs7Ozs7O0lBTXZCLDJCQUErQzs7Ozs7SUFDL0MsOEJBQXVGOzs7OztJQUN2RiwrQkFBeUQ7O0lBRXpELHFDQUFpQzs7Ozs7SUFHaEMsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIGZpcnN0LCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnRJbmRleCB9IGZyb20gJy4uL21vZGVscy9kb2N1bWVudCc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFNsdWdLZXkge1xuXHRpZD86IG51bWJlcjtcblx0bW5lbW9uaWM/OiBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxEb2N1bWVudEluZGV4PiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gYC9hcGkvc2x1Z2A7XG5cdH1cblxuXHRwcml2YXRlIGtleXM6IHsgW2tleTogc3RyaW5nXTogU2x1Z0tleTsgfSA9IHt9O1xuXHRwcml2YXRlIHZhbHVlcyQ6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHJpdmF0ZSBlbWl0dGVyJDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZXNba2V5XTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0dmFsdWVzW2tleV0gPSBudWxsO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiB7IG1uZW1vbmljOiBrZXkgfSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmVtaXR0ZXIkLmVtaXQoKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHRyYW5zZm9ybSQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHZhbHVlc1trZXldKTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiB7IG1uZW1vbmljOiBrZXkgfSxcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmVtaXR0ZXIkLmVtaXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzJC5waXBlKFxuXHRcdFx0bWFwKHZhbHVlcyA9PiB2YWx1ZXNba2V5XSlcblx0XHQpO1xuXHR9XG5cblx0b2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIkLnBpcGUoXG5cdFx0XHRkZWJvdW5jZVRpbWUoMSksXG5cdFx0XHRzd2l0Y2hNYXAoeCA9PiB0aGlzLmNvbGxlY3QkKCkpLFxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXG5cdFx0XHRmaXJzdCgpLCAvL1xuXHRcdCk7XG5cdH1cblxuXHRjb2xsZWN0JCgpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMua2V5cykubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5rZXlzKS5tYXAoeCA9PiB0aGlzLmtleXNbeF0pO1xuXHRcdFx0dGhpcy5rZXlzID0ge307XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcblx0XHRcdFx0bWFwKChpdGVtczogRG9jdW1lbnRJbmRleFtdKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zLnJlZHVjZSgodmFsdWVzLCB4KSA9PiB7XG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5tbmVtb25pY10gPSBbeC5zbHVnXTtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdFx0fSwge30pO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChzbHVnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHZhbHVlcywgc2x1Z3MpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0ga2V5cy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzW3gubW5lbW9uaWNdID0gbnVsbDtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdFx0fSwge30pO1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBsYWJlbHMpO1xuXHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==