/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class EventEntity {
}
if (false) {
    /** @type {?} */
    EventEntity.prototype.type;
    /** @type {?} */
    EventEntity.prototype.data;
}
export class EventDispatcherService {
    constructor() {
        this.emitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emit(event) {
        return this.emitter.emit(event);
    }
    /**
     * @return {?}
     */
    observe() {
        return this.emitter.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => console.log('EventDispatcherService', event))));
    }
}
EventDispatcherService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventDispatcherService.ctorParameters = () => [];
/** @nocollapse */ EventDispatcherService.ngInjectableDef = i0.defineInjectable({ factory: function EventDispatcherService_Factory() { return new EventDispatcherService(); }, token: EventDispatcherService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventDispatcherService.prototype.emitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDLE1BQU0sT0FBTyxXQUFXO0NBR3ZCOzs7SUFGQSwyQkFBc0I7O0lBQ3RCLDJCQUFXOztBQU1aLE1BQU0sT0FBTyxzQkFBc0I7SUFJbEM7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FDekUsQ0FBQztJQUNILENBQUM7OztZQW5CRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7Ozs7SUFHQSx5Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRFbnRpdHkge1xyXG5cdHR5cGU6IHN0cmluZyB8IG51bWJlcjtcclxuXHRkYXRhPzogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGNoZXJTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8RXZlbnRFbnRpdHk+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnRFbnRpdHk+KCk7XHJcblx0fVxyXG5cclxuXHRlbWl0KGV2ZW50OiBFdmVudEVudGl0eSk6IHZvaWQge1xyXG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdG9ic2VydmUoKTogT2JzZXJ2YWJsZTxFdmVudEVudGl0eT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxyXG5cdFx0XHR0YXAoKGV2ZW50OiBFdmVudEVudGl0eSkgPT4gY29uc29sZS5sb2coJ0V2ZW50RGlzcGF0Y2hlclNlcnZpY2UnLCBldmVudCkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19