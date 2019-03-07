/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** @enum {number} */
const ModalEventType = {
    Complete: 0,
    Close: 1,
};
export { ModalEventType };
ModalEventType[ModalEventType.Complete] = 'Complete';
ModalEventType[ModalEventType.Close] = 'Close';
export class ModalCompleteEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    ModalCompleteEvent.prototype.modal;
    /** @type {?} */
    ModalCompleteEvent.prototype.data;
    /** @type {?} */
    ModalCompleteEvent.prototype.type;
}
export class ModalCloseEvent {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    ModalCloseEvent.prototype.modal;
    /** @type {?} */
    ModalCloseEvent.prototype.data;
    /** @type {?} */
    ModalCloseEvent.prototype.type;
}
export class Modal {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
}
Modal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: Modal }
];
/** @nocollapse */ Modal.ngInjectableDef = i0.defineInjectable({ factory: function Modal_Factory() { return new Modal(i0.inject(Modal)); }, token: Modal, providedIn: "root" });
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
export class ModalData extends Object {
}
ModalData.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ModalData.ngInjectableDef = i0.defineInjectable({ factory: function ModalData_Factory() { return new ModalData(); }, token: ModalData, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7SUFHbEUsV0FBWTtJQUNaLFFBQVM7Ozs7O0FBR1YsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUs5QixZQUFZLE9BQTRCO1FBRnhDLFNBQUksR0FBNkIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUd4RCw4Q0FBOEM7UUFDOUMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBVkEsbUNBQWE7O0lBQ2Isa0NBQVc7O0lBQ1gsa0NBQXlEOztBQVUxRCxNQUFNLE9BQU8sZUFBZTs7OztJQUszQixZQUFZLE9BQXlCO1FBRnJDLFNBQUksR0FBMEIsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUdsRCxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEOzs7SUFUQSxnQ0FBYTs7SUFDYiwrQkFBVzs7SUFDWCwrQkFBbUQ7O0FBY3BELE1BQU0sT0FBTyxLQUFLOzs7O0lBT2pCLFlBQVksT0FBZTtRQUwzQixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLFlBQU8sR0FBd0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqRixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7O1lBZEQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUXNCLEtBQUs7Ozs7O0lBTjNCLDBCQUFlOztJQUNmLDBCQUEwQjs7SUFDMUIscUJBQVc7O0lBQ1gsd0JBQWtGOztJQUNsRiwwQkFBbUI7O0FBWXBCLE1BQU0sT0FBTyxTQUFVLFNBQVEsTUFBTTs7O1lBSHBDLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsRXZlbnRUeXBlIHtcclxuXHRDb21wbGV0ZSA9IDAsXHJcblx0Q2xvc2UgPSAxLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wbGV0ZUV2ZW50IHtcclxuXHRtb2RhbDogTW9kYWw7XHJcblx0ZGF0YT86IGFueTtcclxuXHR0eXBlPzogTW9kYWxFdmVudFR5cGUuQ29tcGxldGUgPSBNb2RhbEV2ZW50VHlwZS5Db21wbGV0ZTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IE1vZGFsQ29tcGxldGVFdmVudCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ01vZGFsQ29tcGxldGVFdmVudCcsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENsb3NlRXZlbnQge1xyXG5cdG1vZGFsOiBNb2RhbDtcclxuXHRkYXRhPzogYW55O1xyXG5cdHR5cGU/OiBNb2RhbEV2ZW50VHlwZS5DbG9zZSA9IE1vZGFsRXZlbnRUeXBlLkNsb3NlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWxDbG9zZUV2ZW50KSB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTW9kYWxFdmVudDxUPiA9IE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudDtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuXHRjb21wb25lbnQ6IGFueTtcclxuXHRwcm92aWRlcnM/OiBQcm92aWRlciA9IFtdO1xyXG5cdGRhdGE/OiBhbnk7XHJcblx0ZW1pdHRlcj86IEV2ZW50RW1pdHRlcjxNb2RhbENvbXBsZXRlRXZlbnQgfCBNb2RhbENsb3NlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNsYXNzTmFtZT86IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IE1vZGFsKSB7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxEYXRhIGV4dGVuZHMgT2JqZWN0IHsgfVxyXG4iXX0=