/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { RouteService } from './route.service';
import * as i0 from "@angular/core";
import * as i1 from "./route.service";
export class RoutePipe {
    /**
     * @param {?} routeService
     */
    constructor(routeService) {
        this.routeService = routeService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return this.routeService.toRoute(data);
    }
}
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
RoutePipe.ctorParameters = () => [
    { type: RouteService }
];
/** @nocollapse */ RoutePipe.ngInjectableDef = i0.defineInjectable({ factory: function RoutePipe_Factory() { return new RoutePipe(i0.inject(i1.RouteService)); }, token: RoutePipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutePipe.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGVzL3JvdXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVUvQyxNQUFNLE9BQU8sU0FBUzs7OztJQUVyQixZQUNTLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQy9CLENBQUM7Ozs7O0lBRUwsU0FBUyxDQUFDLElBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBaEJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsWUFBWTs7Ozs7Ozs7SUFhbkIsaUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAncm91dGUnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLnRvUm91dGUoZGF0YSk7XG5cdH1cblxufVxuIl19