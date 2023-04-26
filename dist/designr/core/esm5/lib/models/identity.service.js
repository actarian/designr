/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
/**
 * @template T
 */
var IdentityService = /** @class */ (function (_super) {
    tslib_1.__extends(IdentityService, _super);
    function IdentityService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(IdentityService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/identity';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.getDetailById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get({ id: id });
    };
    IdentityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IdentityService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ IdentityService.ngInjectableDef = i0.defineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.inject(i0.INJECTOR)); }, token: IdentityService, providedIn: "root" });
    return IdentityService;
}(ApiService));
export { IdentityService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    IdentityService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBR2hEO0lBR3lELDJDQUFhO0lBRXJFLHlCQUNXLFFBQWtCO1FBRDdCLFlBR0Msa0JBQU0sUUFBUSxDQUFDLFNBQ2Y7UUFIVSxjQUFRLEdBQVIsUUFBUSxDQUFVOztJQUc3QixDQUFDO0lBRUQsc0JBQUksdUNBQVU7Ozs7UUFBZDtZQUNDLE9BQU8sZUFBZSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQUVELHVDQUFhOzs7O0lBQWIsVUFBYyxFQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Z0JBakJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUG9CLFFBQVE7OzswQkFBN0I7Q0F3QkMsQUFuQkQsQ0FHeUQsVUFBVSxHQWdCbEU7U0FoQlksZUFBZTs7Ozs7O0lBRzFCLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVNlcnZpY2U8VCBleHRlbmRzIElkZW50aXR5PiBleHRlbmRzIEFwaVNlcnZpY2U8VD4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHR9XHJcblxyXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gJy9hcGkvaWRlbnRpdHknO1xyXG5cdH1cclxuXHJcblx0Z2V0RGV0YWlsQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXQoeyBpZCB9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==