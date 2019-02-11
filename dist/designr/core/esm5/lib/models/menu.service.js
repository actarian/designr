/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdqRDtJQUdpQyx1Q0FBdUI7SUFNdkQscUJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBRzdCLENBQUM7SUFSRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQVBELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBTm9CLFFBQVE7OztzQkFBN0I7Q0FtQkMsQUFmRCxDQUdpQyxhQUFhLEdBWTdDO1NBWlksV0FBVzs7Ozs7O0lBT3RCLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9lbnRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vbWVudS1pdGVtJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPE1lbnVJdGVtPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbWVudSc7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxufVxuIl19