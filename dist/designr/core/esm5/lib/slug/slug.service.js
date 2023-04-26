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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RDtJQUFBO0lBSUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsdUJBQWM7O0FBR2Y7SUFHaUMsdUNBQTRCO0lBWTVELHFCQUNXLFFBQWtCO1FBRDdCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFIVSxjQUFRLEdBQVIsUUFBUSxDQUFVO1FBUHJCLFVBQUksR0FBZ0MsRUFBRSxDQUFDO1FBQ3ZDLGFBQU8sR0FBZ0QsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsY0FBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOztJQVF6RCxDQUFDO0lBZEQsc0JBQUksbUNBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sV0FBVyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7OztJQWNELCtCQUFTOzs7O0lBQVQsVUFBVSxHQUFXOztZQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUNyQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUN4QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxHQUFXOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDckMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLEVBQUMsQ0FDMUIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5BLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hCLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUFDLEVBQy9CLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxFQUFDLEVBQ3ZCLEtBQUssRUFBRSxDQUNQLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQUEsaUJBOEJDO1FBN0JBLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFOztnQkFDNUIsTUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVosQ0FBWSxFQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQUksQ0FBQyxDQUFDLElBQUksQ0FDL0IsR0FBRzs7OztZQUFDLFVBQUMsS0FBc0I7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztZQUNSLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWlDOztvQkFDL0IsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFDYixNQUFNLEdBQUcsTUFBSSxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQixPQUFPLE1BQU0sQ0FBQztnQkFDZixDQUFDLEdBQUUsRUFBRSxDQUFDOztvQkFDQSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBN0ZELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBZGtDLFFBQVE7OztzQkFBM0M7Q0EyR0MsQUEvRkQsQ0FHaUMsYUFBYSxHQTRGN0M7U0E1RlksV0FBVzs7Ozs7O0lBTXZCLDJCQUErQzs7Ozs7SUFDL0MsOEJBQXVGOzs7OztJQUN2RiwrQkFBeUQ7O0lBRXpELHFDQUFpQzs7Ozs7SUFHaEMsK0JBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZmlsdGVyLCBmaXJzdCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRG9jdW1lbnRJbmRleCB9IGZyb20gJy4uL21vZGVscy9kb2N1bWVudCc7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsdWdLZXkge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdG1uZW1vbmljPzogc3RyaW5nO1xyXG5cdHNsdWc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsdWdTZXJ2aWNlIGV4dGVuZHMgRW50aXR5U2VydmljZTxEb2N1bWVudEluZGV4PiB7XHJcblxyXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gYC9hcGkvc2x1Z2A7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGtleXM6IHsgW2tleTogc3RyaW5nXTogU2x1Z0tleTsgfSA9IHt9O1xyXG5cdHByaXZhdGUgdmFsdWVzJDogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xyXG5cdHByaXZhdGUgZW1pdHRlciQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0dHJhbnNmb3JtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdHJldHVybiB2YWx1ZXNba2V5XTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdHZhbHVlc1trZXldID0gbnVsbDtcclxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XHJcblx0XHRcdFx0dmFsdWU6IHsgbW5lbW9uaWM6IGtleSB9LFxyXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dHJhbnNmb3JtJChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gb2YodmFsdWVzW2tleV0pO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XHJcblx0XHRcdFx0dmFsdWU6IHsgbW5lbW9uaWM6IGtleSB9LFxyXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMkLnBpcGUoXHJcblx0XHRcdG1hcCh2YWx1ZXMgPT4gdmFsdWVzW2tleV0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlciQucGlwZShcclxuXHRcdFx0ZGVib3VuY2VUaW1lKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoeCA9PiB0aGlzLmNvbGxlY3QkKCkpLFxyXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcclxuXHRcdFx0Zmlyc3QoKSwgLy9cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjb2xsZWN0JCgpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5rZXlzKS5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cykubWFwKHggPT4gdGhpcy5rZXlzW3hdKTtcclxuXHRcdFx0dGhpcy5rZXlzID0ge307XHJcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxyXG5cdFx0XHRcdG1hcCgoaXRlbXM6IERvY3VtZW50SW5kZXhbXSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zLnJlZHVjZSgodmFsdWVzLCB4KSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhbHVlc1t4Lm1uZW1vbmljXSA9IFt4LnNsdWddO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdFx0XHRcdFx0fSwge30pO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdHRhcCgoc2x1Z3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBzbHVncyk7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlcyQubmV4dCh2YWx1ZXMpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0ga2V5cy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5tbmVtb25pY10gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdFx0XHRcdFx0fSwge30pO1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHZhbHVlcywgbGFiZWxzKTtcclxuXHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==