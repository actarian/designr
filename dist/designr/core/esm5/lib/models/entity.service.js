/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IdentityService } from './identity.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
var EntityService = /** @class */ (function (_super) {
    tslib_1.__extends(EntityService, _super);
    function EntityService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EntityService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/entity';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    EntityService.prototype.getDetailByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!name.trim()) {
            return of([]);
        }
        return this.get({ name: name });
    };
    EntityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ EntityService.ngInjectableDef = i0.defineInjectable({ factory: function EntityService_Factory() { return new EntityService(i0.inject(i0.INJECTOR)); }, token: EntityService, providedIn: "root" });
    return EntityService;
}(IdentityService));
export { EntityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRXJEO0lBR3FELHlDQUFrQjtJQUh2RTs7S0FnQkM7SUFYQSxzQkFBSSxxQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxhQUFhLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsdUNBQWU7Ozs7SUFBZixVQUFnQixJQUFZO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkFkRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7d0JBUEQ7Q0FxQkMsQUFoQkQsQ0FHcUQsZUFBZSxHQWFuRTtTQWJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4vZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9pZGVudGl0eS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2U8VCBleHRlbmRzIEVudGl0eT4gZXh0ZW5kcyBJZGVudGl0eVNlcnZpY2U8VD4ge1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICcvYXBpL2VudGl0eSc7XHJcblx0fVxyXG5cclxuXHRnZXREZXRhaWxCeU5hbWUobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmICghbmFtZS50cmltKCkpIHtcclxuXHRcdFx0cmV0dXJuIG9mKFtdKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLmdldCh7IG5hbWUgfSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=