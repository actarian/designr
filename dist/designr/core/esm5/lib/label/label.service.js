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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hEO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1oseUJBQWU7O0lBQ2YsZ0NBQXNCOzs7OztBQUd2QjtJQUdtRCx3Q0FBYTtJQVkvRCxzQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQVByQixVQUFJLEdBQWlDLEVBQUUsQ0FBQztRQUN4QyxhQUFPLEdBQWdELElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLGNBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFRekQsQ0FBQztJQWRELHNCQUFJLG9DQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLFlBQVksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7OztJQWNELGdDQUFTOzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7O1lBQ25ELE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QzthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTtnQkFDOUMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Ozs7OztJQUVELGlDQUFVOzs7Ozs7SUFBVixVQUFXLEdBQVcsRUFBRSxZQUFxQixFQUFFLE1BQVk7UUFBM0QsaUJBZ0JDOztZQWZNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoRDthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTtnQkFDOUMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFwQyxDQUFvQyxFQUFDLENBQ25ELENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4QixZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQ2YsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsRUFBQyxFQUMvQixNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsRUFBQyxDQUN2QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUFBLGlCQStCQztRQTlCQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTs7Z0JBQzVCLE1BQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFaLENBQVksRUFBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFJLENBQUMsQ0FBQyxJQUFJLENBQy9CLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWtCO2dCQUN0QixPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7OztnQkFBQyxVQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztZQUNSLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7WUFBQyxVQUFDLE1BQWtDOztvQkFDaEMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztvQkFDYixNQUFNLEdBQUcsTUFBSSxDQUFDLE1BQU07Ozs7O2dCQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxNQUFNLENBQUM7Z0JBQ2YsQ0FBQyxHQUFFLEVBQUUsQ0FBQzs7b0JBQ0EsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDOUIsb0NBQW9DO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU0saUNBQVU7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxNQUFXO1FBQzNDLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTs7Z0JBQ2QsZUFBZSxHQUFXLGNBQWM7WUFDOUMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWU7Ozs7O1lBQUUsVUFBQyxJQUFZLEVBQUUsR0FBVzs7b0JBQ3pELFFBQVEsR0FBVyxtQkFBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVU7Z0JBQzlDLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxRCxDQUFDLEVBQUMsQ0FBQztTQUNIO2FBQU07WUFDTixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sK0JBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQWU7UUFDL0IsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxzQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBZTtRQUN0QyxJQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsS0FBSyxVQUFVLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7O2dCQXJIRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWRrQyxRQUFROzs7dUJBQTNDO0NBbUlDLEFBdkhELENBR21ELFVBQVUsR0FvSDVEO1NBcEhZLFlBQVk7Ozs7OztJQU14Qiw0QkFBZ0Q7Ozs7O0lBQ2hELCtCQUF1Rjs7Ozs7SUFDdkYsZ0NBQXlEOztJQUV6RCxzQ0FBaUM7Ozs7O0lBR2hDLGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgTGFiZWxLZXkge1xuXHRpZD86IHN0cmluZztcblx0dmFsdWU/OiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxTZXJ2aWNlPFQgZXh0ZW5kcyBMYWJlbD4gZXh0ZW5kcyBBcGlTZXJ2aWNlPFQ+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9sYWJlbCc7XG5cdH1cblxuXHRwcml2YXRlIGtleXM6IHsgW2tleTogc3RyaW5nXTogTGFiZWxLZXk7IH0gPSB7fTtcblx0cHJpdmF0ZSB2YWx1ZXMkOiBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHByaXZhdGUgZW1pdHRlciQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VMYWJlbCh2YWx1ZXNba2V5XSwgcGFyYW1zKTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0dmFsdWVzW2tleV0gPSBudWxsO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiB7IGlkOiBrZXksIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlIH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR0cmFuc2Zvcm0kKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5wYXJzZUxhYmVsKHZhbHVlc1trZXldLCBwYXJhbXMpKTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0dmFsdWVzW2tleV0gPSBudWxsO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMua2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiB7IGlkOiBrZXksIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlIH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlcyQucGlwZShcblx0XHRcdG1hcCh2YWx1ZXMgPT4gdGhpcy5wYXJzZUxhYmVsKHZhbHVlc1trZXldLCBwYXJhbXMpKVxuXHRcdCk7XG5cdH1cblxuXHRvYnNlcnZlJCgpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlciQucGlwZShcblx0XHRcdGRlYm91bmNlVGltZSgxKSxcblx0XHRcdHN3aXRjaE1hcCh4ID0+IHRoaXMuY29sbGVjdCQoKSksXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmtleXMpLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cykubWFwKHggPT4gdGhpcy5rZXlzW3hdKTtcblx0XHRcdHRoaXMua2V5cyA9IHt9O1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgobGFiZWxzOiBMYWJlbEtleVtdKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGxhYmVscy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzW3guaWRdID0gdGhpcy5nZXRMYWJlbCh4KTtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdFx0fSwge30pO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChsYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih2YWx1ZXMsIGxhYmVscyk7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZXMkLm5leHQodmFsdWVzKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSBrZXlzLnJlZHVjZSgodmFsdWVzLCB4KSA9PiB7XG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5pZF0gPSB0aGlzLmdldExhYmVsKHgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdFx0XHR9LCB7fSk7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih2YWx1ZXMsIGxhYmVscyk7XG5cdFx0XHRcdFx0Ly8gcmV0dXJuIHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgcGFyc2VMYWJlbCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0aWYgKHZhbHVlICYmIHBhcmFtcykge1xuXHRcdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7XG5cdFx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURV9SRUdFWFAsICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldExhYmVsKGxhYmVsOiBMYWJlbEtleSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0cmV0dXJuIGxhYmVsLnZhbHVlIHx8IGxhYmVsLmRlZmF1bHRWYWx1ZSB8fCB0aGlzLmdldE1pc3NpbmdMYWJlbChsYWJlbCk7XG5cdH1cblxuXHRwcml2YXRlIGdldE1pc3NpbmdMYWJlbChsYWJlbDogTGFiZWxLZXkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5taXNzaW5nSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRoaXMubWlzc2luZ0hhbmRsZXIobGFiZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWwuaWQ7XG5cdH1cblxufVxuIl19