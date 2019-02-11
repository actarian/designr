/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.emitter.pipe(tap((event) => console.log('EventDispatcherService', event)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDLE1BQU0sT0FBTyxXQUFXO0NBR3ZCOzs7SUFGQSwyQkFBc0I7O0lBQ3RCLDJCQUFXOztBQU1aLE1BQU0sT0FBTyxzQkFBc0I7SUFJbEM7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBa0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDekUsQ0FBQztJQUNILENBQUM7OztZQW5CRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7Ozs7SUFHQSx5Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50RW50aXR5IHtcblx0dHlwZTogc3RyaW5nIHwgbnVtYmVyO1xuXHRkYXRhPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGNoZXJTZXJ2aWNlIHtcblxuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudEVudGl0eT47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEVudGl0eT4oKTtcblx0fVxuXG5cdGVtaXQoZXZlbnQ6IEV2ZW50RW50aXR5KTogdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50KTtcblx0fVxuXG5cdG9ic2VydmUoKTogT2JzZXJ2YWJsZTxFdmVudEVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIucGlwZShcblx0XHRcdHRhcCgoZXZlbnQ6IEV2ZW50RW50aXR5KSA9PiBjb25zb2xlLmxvZygnRXZlbnREaXNwYXRjaGVyU2VydmljZScsIGV2ZW50KSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==