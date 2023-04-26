/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBVS9DLE1BQU0sT0FBTyxTQUFTOzs7O0lBRXJCLFlBQ1MsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDL0IsQ0FBQzs7Ozs7SUFFTCxTQUFTLENBQUMsSUFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFoQkQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1g7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFUUSxZQUFZOzs7Ozs7OztJQWFuQixpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJy4vcm91dGUuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3JvdXRlJyxcclxuXHRwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UudG9Sb3V0ZShkYXRhKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==