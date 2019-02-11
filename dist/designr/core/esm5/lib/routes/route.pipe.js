/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { RouteService } from './route.service';
import * as i0 from "@angular/core";
import * as i1 from "./route.service";
var RoutePipe = /** @class */ (function () {
    function RoutePipe(routeService) {
        this.routeService = routeService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    RoutePipe.prototype.transform = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.routeService.toRoute(data);
    };
    RoutePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'route',
                    pure: false
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RoutePipe.ctorParameters = function () { return [
        { type: RouteService }
    ]; };
    /** @nocollapse */ RoutePipe.ngInjectableDef = i0.defineInjectable({ factory: function RoutePipe_Factory() { return new RoutePipe(i0.inject(i1.RouteService)); }, token: RoutePipe, providedIn: "root" });
    return RoutePipe;
}());
export { RoutePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutePipe.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGVzL3JvdXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUUvQztJQVVDLG1CQUNTLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQy9CLENBQUM7Ozs7O0lBRUwsNkJBQVM7Ozs7SUFBVCxVQUFVLElBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBaEJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVRRLFlBQVk7OztvQkFEckI7Q0FxQkMsQUFsQkQsSUFrQkM7U0FWWSxTQUFTOzs7Ozs7SUFHcEIsaUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAncm91dGUnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLnRvUm91dGUoZGF0YSk7XG5cdH1cblxufVxuIl19