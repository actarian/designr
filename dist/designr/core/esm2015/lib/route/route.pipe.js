import { Injectable, Pipe } from '@angular/core';
import { RouteService } from './route.service';
import * as i0 from "@angular/core";
import * as i1 from "./route.service";
export class RoutePipe {
    constructor(routeService) {
        this.routeService = routeService;
    }
    transform(data) {
        return this.routeService.toRoute(data);
    }
}
RoutePipe.ɵfac = function RoutePipe_Factory(t) { return new (t || RoutePipe)(i0.ɵɵdirectiveInject(i1.RouteService)); };
RoutePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "route", type: RoutePipe, pure: false });
RoutePipe.ɵprov = i0.ɵɵdefineInjectable({ token: RoutePipe, factory: RoutePipe.ɵfac, providedIn: 'root' });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcm91dGUvcm91dGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFVL0MsTUFBTSxPQUFPLFNBQVM7SUFFckIsWUFDUyxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUMvQixDQUFDO0lBRUwsU0FBUyxDQUFDLElBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7a0VBUlcsU0FBUzt5REFBVCxTQUFTO2lEQUFULFNBQVMsV0FBVCxTQUFTLG1CQUZULE1BQU07a0RBRU4sU0FBUztjQVJyQixJQUFJO2VBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLEtBQUs7YUFDWDs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuL3JvdXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdyb3V0ZScsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShkYXRhOiBhbnlbXSB8IHN0cmluZyk6IHN0cmluZ1tdIHtcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UudG9Sb3V0ZShkYXRhKTtcblx0fVxuXG59XG4iXX0=