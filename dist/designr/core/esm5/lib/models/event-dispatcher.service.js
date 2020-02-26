import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
var EventEntity = /** @class */ (function () {
    function EventEntity() {
    }
    return EventEntity;
}());
export { EventEntity };
var EventDispatcherService = /** @class */ (function () {
    function EventDispatcherService() {
        this.emitter = new EventEmitter();
    }
    EventDispatcherService.prototype.emit = function (event) {
        return this.emitter.emit(event);
    };
    EventDispatcherService.prototype.observe = function () {
        return this.emitter.pipe(tap(function (event) { return console.log('EventDispatcherService', event); }));
    };
    EventDispatcherService.ɵfac = function EventDispatcherService_Factory(t) { return new (t || EventDispatcherService)(); };
    EventDispatcherService.ɵprov = i0.ɵɵdefineInjectable({ token: EventDispatcherService, factory: EventDispatcherService.ɵfac, providedIn: 'root' });
    return EventDispatcherService;
}());
export { EventDispatcherService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EventDispatcherService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckM7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBT0M7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFDaEQsQ0FBQztJQUVELHFDQUFJLEdBQUosVUFBSyxLQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx3Q0FBTyxHQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdkIsR0FBRyxDQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FDekUsQ0FBQztJQUNILENBQUM7Z0dBaEJXLHNCQUFzQjtrRUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGdEIsTUFBTTtpQ0FWbkI7Q0E4QkMsQUFyQkQsSUFxQkM7U0FsQlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEVudGl0eSB7XG5cdHR5cGU6IHN0cmluZyB8IG51bWJlcjtcblx0ZGF0YT86IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwYXRjaGVyU2VydmljZSB7XG5cblx0cHJpdmF0ZSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRFbnRpdHk+O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRFbnRpdHk+KCk7XG5cdH1cblxuXHRlbWl0KGV2ZW50OiBFdmVudEVudGl0eSk6IHZvaWQge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChldmVudCk7XG5cdH1cblxuXHRvYnNlcnZlKCk6IE9ic2VydmFibGU8RXZlbnRFbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXG5cdFx0XHR0YXAoKGV2ZW50OiBFdmVudEVudGl0eSkgPT4gY29uc29sZS5sb2coJ0V2ZW50RGlzcGF0Y2hlclNlcnZpY2UnLCBldmVudCkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=