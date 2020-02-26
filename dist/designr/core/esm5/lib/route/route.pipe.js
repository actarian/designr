import { Injectable, Pipe } from '@angular/core';
import { RouteService } from './route.service';
import * as i0 from "@angular/core";
import * as i1 from "./route.service";
var RoutePipe = /** @class */ (function () {
    function RoutePipe(routeService) {
        this.routeService = routeService;
    }
    RoutePipe.prototype.transform = function (data) {
        return this.routeService.toRoute(data);
    };
    RoutePipe.ɵfac = function RoutePipe_Factory(t) { return new (t || RoutePipe)(i0.ɵɵdirectiveInject(i1.RouteService)); };
    RoutePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "route", type: RoutePipe, pure: false });
    RoutePipe.ɵprov = i0.ɵɵdefineInjectable({ token: RoutePipe, factory: RoutePipe.ɵfac, providedIn: 'root' });
    return RoutePipe;
}());
export { RoutePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RoutePipe, [{
        type: Pipe,
        args: [{
                name: 'route',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.RouteService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFVQyxtQkFDUyxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMvQixDQUFDO0lBRUwsNkJBQVMsR0FBVCxVQUFVLElBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztzRUFSVyxTQUFTOzZEQUFULFNBQVM7cURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtvQkFUbkI7Q0FxQkMsQUFsQkQsSUFrQkM7U0FWWSxTQUFTO2tEQUFULFNBQVM7Y0FSckIsSUFBSTtlQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1g7O2NBRUEsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi9yb3V0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAncm91dGUnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm91dGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmdbXSB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLnRvUm91dGUoZGF0YSk7XG5cdH1cblxufVxuIl19