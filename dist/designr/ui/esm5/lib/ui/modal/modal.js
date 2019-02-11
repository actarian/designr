/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @enum {number} */
var ModalEventType = {
    Complete: 0,
    Close: 1,
};
export { ModalEventType };
ModalEventType[ModalEventType.Complete] = 'Complete';
ModalEventType[ModalEventType.Close] = 'Close';
var ModalCompleteEvent = /** @class */ (function () {
    function ModalCompleteEvent(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return ModalCompleteEvent;
}());
export { ModalCompleteEvent };
if (false) {
    /** @type {?} */
    ModalCompleteEvent.prototype.modal;
    /** @type {?} */
    ModalCompleteEvent.prototype.data;
    /** @type {?} */
    ModalCompleteEvent.prototype.type;
}
var ModalCloseEvent = /** @class */ (function () {
    function ModalCloseEvent(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
    return ModalCloseEvent;
}());
export { ModalCloseEvent };
if (false) {
    /** @type {?} */
    ModalCloseEvent.prototype.modal;
    /** @type {?} */
    ModalCloseEvent.prototype.data;
    /** @type {?} */
    ModalCloseEvent.prototype.type;
}
var Modal = /** @class */ (function () {
    function Modal(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
    Modal.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Modal.ctorParameters = function () { return [
        { type: Modal }
    ]; };
    /** @nocollapse */ Modal.ngInjectableDef = i0.defineInjectable({ factory: function Modal_Factory() { return new Modal(i0.inject(Modal)); }, token: Modal, providedIn: "root" });
    return Modal;
}());
export { Modal };
if (false) {
    /** @type {?} */
    Modal.prototype.component;
    /** @type {?} */
    Modal.prototype.providers;
    /** @type {?} */
    Modal.prototype.data;
    /** @type {?} */
    Modal.prototype.emitter;
    /** @type {?} */
    Modal.prototype.className;
}
var ModalData = /** @class */ (function (_super) {
    tslib_1.__extends(ModalData, _super);
    function ModalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalData.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ModalData.ngInjectableDef = i0.defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
    return ModalData;
}(Object));
export { ModalData };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDOzs7O0lBR2xFLFdBQVk7SUFDWixRQUFTOzs7OztBQUdWO0lBS0MsNEJBQVksT0FBNEI7UUFGeEMsU0FBSSxHQUE2QixjQUFjLENBQUMsUUFBUSxDQUFDO1FBR3hELDhDQUE4QztRQUM5QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7Ozs7SUFWQSxtQ0FBYTs7SUFDYixrQ0FBVzs7SUFDWCxrQ0FBeUQ7O0FBVTFEO0lBS0MseUJBQVksT0FBeUI7UUFGckMsU0FBSSxHQUEwQixjQUFjLENBQUMsS0FBSyxDQUFDO1FBR2xELElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7OztJQVRBLGdDQUFhOztJQUNiLCtCQUFXOztJQUNYLCtCQUFtRDs7QUFXcEQ7SUFVQyxlQUFZLE9BQWU7UUFMM0IsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUUxQixZQUFPLEdBQXdELElBQUksWUFBWSxFQUFFLENBQUM7UUFJakYsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7O2dCQWRELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBUXNCLEtBQUs7OztnQkE1QzVCO0NBaURDLEFBZkQsSUFlQztTQVpZLEtBQUs7OztJQUNqQiwwQkFBZTs7SUFDZiwwQkFBMEI7O0lBQzFCLHFCQUFXOztJQUNYLHdCQUFrRjs7SUFDbEYsMEJBQW1COztBQVNwQjtJQUcrQixxQ0FBTTtJQUhyQzs7S0FHeUM7O2dCQUh4QyxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7b0JBckREO0NBc0R5QyxBQUh6QyxDQUcrQixNQUFNLEdBQUk7U0FBNUIsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsRXZlbnRUeXBlIHtcclxuXHRDb21wbGV0ZSA9IDAsXHJcblx0Q2xvc2UgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wbGV0ZUV2ZW50IHtcclxuXHRtb2RhbDogTW9kYWw7XHJcblx0ZGF0YT86IGFueTtcclxuXHR0eXBlPzogTW9kYWxFdmVudFR5cGUuQ29tcGxldGUgPSBNb2RhbEV2ZW50VHlwZS5Db21wbGV0ZTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IE1vZGFsQ29tcGxldGVFdmVudCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ01vZGFsQ29tcGxldGVFdmVudCcsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENsb3NlRXZlbnQge1xyXG5cdG1vZGFsOiBNb2RhbDtcclxuXHRkYXRhPzogYW55O1xyXG5cdHR5cGU/OiBNb2RhbEV2ZW50VHlwZS5DbG9zZSA9IE1vZGFsRXZlbnRUeXBlLkNsb3NlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWxDbG9zZUV2ZW50KSB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTW9kYWxFdmVudDxUPiA9IE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudDtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuXHRjb21wb25lbnQ6IGFueTtcclxuXHRwcm92aWRlcnM/OiBQcm92aWRlciA9IFtdO1xyXG5cdGRhdGE/OiBhbnk7XHJcblx0ZW1pdHRlcj86IEV2ZW50RW1pdHRlcjxNb2RhbENvbXBsZXRlRXZlbnQgfCBNb2RhbENsb3NlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IE1vZGFsKSB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxEYXRhIGV4dGVuZHMgT2JqZWN0IHsgfVxyXG4iXX0=