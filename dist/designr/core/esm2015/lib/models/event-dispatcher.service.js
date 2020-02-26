import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class EventEntity {
}
export class EventDispatcherService {
    constructor() {
        this.emitter = new EventEmitter();
    }
    emit(event) {
        return this.emitter.emit(event);
    }
    observe() {
        return this.emitter.pipe(tap((event) => console.log('EventDispatcherService', event)));
    }
}
EventDispatcherService.ɵfac = function EventDispatcherService_Factory(t) { return new (t || EventDispatcherService)(); };
EventDispatcherService.ɵprov = i0.ɵɵdefineInjectable({ token: EventDispatcherService, factory: EventDispatcherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EventDispatcherService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckMsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7QUFLRCxNQUFNLE9BQU8sc0JBQXNCO0lBSWxDO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFJLENBQUMsS0FBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDekUsQ0FBQztJQUNILENBQUM7OzRGQWhCVyxzQkFBc0I7OERBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRnRCLE1BQU07a0RBRU4sc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRFbnRpdHkge1xuXHR0eXBlOiBzdHJpbmcgfCBudW1iZXI7XG5cdGRhdGE/OiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlclNlcnZpY2Uge1xuXG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPEV2ZW50RW50aXR5PjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50RW50aXR5PigpO1xuXHR9XG5cblx0ZW1pdChldmVudDogRXZlbnRFbnRpdHkpOiB2b2lkIHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoZXZlbnQpO1xuXHR9XG5cblx0b2JzZXJ2ZSgpOiBPYnNlcnZhYmxlPEV2ZW50RW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxuXHRcdFx0dGFwKChldmVudDogRXZlbnRFbnRpdHkpID0+IGNvbnNvbGUubG9nKCdFdmVudERpc3BhdGNoZXJTZXJ2aWNlJywgZXZlbnQpKVxuXHRcdCk7XG5cdH1cblxufVxuIl19