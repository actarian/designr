/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRS9DO0lBVUMsbUJBQ1MsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDL0IsQ0FBQzs7Ozs7SUFFTCw2QkFBUzs7OztJQUFULFVBQVUsSUFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFoQkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVFEsWUFBWTs7O29CQURyQjtDQXFCQyxBQWxCRCxJQWtCQztTQVZZLFNBQVM7Ozs7OztJQUdwQixpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJy4vcm91dGUuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3JvdXRlJyxcclxuXHRwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UudG9Sb3V0ZShkYXRhKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==