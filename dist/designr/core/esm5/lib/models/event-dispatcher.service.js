/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
var EventEntity = /** @class */ (function () {
    function EventEntity() {
    }
    return EventEntity;
}());
export { EventEntity };
if (false) {
    /** @type {?} */
    EventEntity.prototype.type;
    /** @type {?} */
    EventEntity.prototype.data;
}
var EventDispatcherService = /** @class */ (function () {
    function EventDispatcherService() {
        this.emitter = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    EventDispatcherService.prototype.emit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.emitter.emit(event);
    };
    /**
     * @return {?}
     */
    EventDispatcherService.prototype.observe = /**
     * @return {?}
     */
    function () {
        return this.emitter.pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return console.log('EventDispatcherService', event); })));
    };
    EventDispatcherService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventDispatcherService.ctorParameters = function () { return []; };
    /** @nocollapse */ EventDispatcherService.ngInjectableDef = i0.defineInjectable({ factory: function EventDispatcherService_Factory() { return new EventDispatcherService(); }, token: EventDispatcherService, providedIn: "root" });
    return EventDispatcherService;
}());
export { EventDispatcherService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventDispatcherService.prototype.emitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDO0lBQUE7SUFHQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLDJCQUFzQjs7SUFDdEIsMkJBQVc7O0FBR1o7SUFPQztRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELHFDQUFJOzs7O0lBQUosVUFBSyxLQUFrQjtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCx3Q0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1FBQUMsVUFBQyxLQUFrQixJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsRUFBNUMsQ0FBNEMsRUFBQyxDQUN6RSxDQUFDO0lBQ0gsQ0FBQzs7Z0JBbkJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7O2lDQVhEO0NBOEJDLEFBckJELElBcUJDO1NBbEJZLHNCQUFzQjs7Ozs7O0lBRWxDLHlDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEVudGl0eSB7XHJcblx0dHlwZTogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlclNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxFdmVudEVudGl0eT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudEVudGl0eT4oKTtcclxuXHR9XHJcblxyXG5cdGVtaXQoZXZlbnQ6IEV2ZW50RW50aXR5KTogdm9pZCB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoZXZlbnQpO1xyXG5cdH1cclxuXHJcblx0b2JzZXJ2ZSgpOiBPYnNlcnZhYmxlPEV2ZW50RW50aXR5PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLnBpcGUoXHJcblx0XHRcdHRhcCgoZXZlbnQ6IEV2ZW50RW50aXR5KSA9PiBjb25zb2xlLmxvZygnRXZlbnREaXNwYXRjaGVyU2VydmljZScsIGV2ZW50KSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=