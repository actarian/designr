/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { EntityService } from './entity.service';
import * as i0 from "@angular/core";
var MenuService = /** @class */ (function (_super) {
    tslib_1.__extends(MenuService, _super);
    function MenuService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(MenuService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/menu';
        },
        enumerable: true,
        configurable: true
    });
    MenuService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(i0.INJECTOR)); }, token: MenuService, providedIn: "root" });
    return MenuService;
}(EntityService));
export { MenuService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MenuService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdqRDtJQUdpQyx1Q0FBdUI7SUFNdkQscUJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBRzdCLENBQUM7SUFSRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQVBELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBTm9CLFFBQVE7OztzQkFBN0I7Q0FtQkMsQUFmRCxDQUdpQyxhQUFhLEdBWTdDO1NBWlksV0FBVzs7Ozs7O0lBT3RCLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuL2VudGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL21lbnUtaXRlbSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8TWVudUl0ZW0+IHtcclxuXHJcblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiAnL2FwaS9tZW51JztcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==