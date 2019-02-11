/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { map } from 'rxjs/operators';
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
     * @return {?}
     */
    IdentityService.prototype.getList = /**
     * @return {?}
     */
    function () {
        return this.get();
    };
    /**
     * @template Data
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.getDetailByIdNo404 = /**
     * @template Data
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get({ id: id }).pipe(map(function (identities) { return identities[0]; }));
    };
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
    /**
     * @param {?} identity
     * @return {?}
     */
    IdentityService.prototype.add = /**
     * @param {?} identity
     * @return {?}
     */
    function (identity) {
        return this.post(identity);
    };
    /**
     * @param {?} identity
     * @return {?}
     */
    IdentityService.prototype.update = /**
     * @param {?} identity
     * @return {?}
     */
    function (identity) {
        return this.put(identity);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUdoRDtJQUd5RCwyQ0FBYTtJQUVyRSx5QkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7SUFHN0IsQ0FBQztJQUVELHNCQUFJLHVDQUFVOzs7O1FBQWQ7WUFDQyxPQUFPLGVBQWUsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELDRDQUFrQjs7Ozs7SUFBbEIsVUFBeUIsRUFBbUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0IsR0FBRyxDQUFDLFVBQUMsVUFBZSxJQUFLLE9BQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUN2QyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBYTs7OztJQUFiLFVBQWMsRUFBbUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsNkJBQUc7Ozs7SUFBSCxVQUFJLFFBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sUUFBVztRQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbkNELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUm9CLFFBQVE7OzswQkFBN0I7Q0EyQ0MsQUFyQ0QsQ0FHeUQsVUFBVSxHQWtDbEU7U0FsQ1ksZUFBZTs7Ozs7O0lBRzFCLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi9pZGVudGl0eSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElkZW50aXR5U2VydmljZTxUIGV4dGVuZHMgSWRlbnRpdHk+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS9pZGVudGl0eSc7XG5cdH1cblxuXHRnZXRMaXN0KCk6IE9ic2VydmFibGU8VFtdPiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KCk7XG5cdH1cblxuXHRnZXREZXRhaWxCeUlkTm80MDQ8RGF0YT4oaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmdldCh7IGlkIH0pLnBpcGUoXG5cdFx0XHRtYXAoKGlkZW50aXRpZXM6IFRbXSkgPT4gaWRlbnRpdGllc1swXSksXG5cdFx0KTtcblx0fVxuXG5cdGdldERldGFpbEJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuXHRcdHJldHVybiB0aGlzLmdldCh7IGlkIH0pO1xuXHR9XG5cblx0YWRkKGlkZW50aXR5OiBUKSB7XG5cdFx0cmV0dXJuIHRoaXMucG9zdChpZGVudGl0eSk7XG5cdH1cblxuXHR1cGRhdGUoaWRlbnRpdHk6IFQpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXQoaWRlbnRpdHkpO1xuXHR9XG5cbn1cbiJdfQ==