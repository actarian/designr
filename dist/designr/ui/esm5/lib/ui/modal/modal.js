import { __extends } from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var ModalEventType;
(function (ModalEventType) {
    ModalEventType[ModalEventType["Complete"] = 0] = "Complete";
    ModalEventType[ModalEventType["Close"] = 1] = "Close";
})(ModalEventType || (ModalEventType = {}));
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
var Modal = /** @class */ (function () {
    function Modal(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
    Modal.ɵfac = function Modal_Factory(t) { return new (t || Modal)(i0.ɵɵinject(Modal)); };
    Modal.ɵprov = i0.ɵɵdefineInjectable({ token: Modal, factory: Modal.ɵfac, providedIn: 'root' });
    return Modal;
}());
export { Modal };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Modal, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Modal }]; }, null); })();
var ModalData = /** @class */ (function (_super) {
    __extends(ModalData, _super);
    function ModalData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalData.ɵfac = function ModalData_Factory(t) { return ɵModalData_BaseFactory(t || ModalData); };
    ModalData.ɵprov = i0.ɵɵdefineInjectable({ token: ModalData, factory: ModalData.ɵfac, providedIn: 'root' });
    return ModalData;
}(Object));
export { ModalData };
var ɵModalData_BaseFactory = i0.ɵɵgetInheritedFactory(ModalData);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalData, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7O0FBRW5FLE1BQU0sQ0FBTixJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDekIsMkRBQVksQ0FBQTtJQUNaLHFEQUFTLENBQUE7QUFDVixDQUFDLEVBSFcsY0FBYyxLQUFkLGNBQWMsUUFHekI7QUFFRDtJQUtDLDRCQUFZLE9BQTRCO1FBRnhDLFNBQUksR0FBNkIsY0FBYyxDQUFDLFFBQVEsQ0FBQztRQUd4RCw4Q0FBOEM7UUFDOUMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEO0lBS0MseUJBQVksT0FBeUI7UUFGckMsU0FBSSxHQUEwQixjQUFjLENBQUMsS0FBSyxDQUFDO1FBR2xELElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7QUFJRDtJQVVDLGVBQVksT0FBZTtRQUwzQixjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLFlBQU8sR0FBd0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqRixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs4REFYVyxLQUFLLGNBT0ssS0FBSztpREFQZixLQUFLLFdBQUwsS0FBSyxtQkFGTCxNQUFNO2dCQW5DbkI7Q0FpREMsQUFmRCxJQWVDO1NBWlksS0FBSztrREFBTCxLQUFLO2NBSGpCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjtzQ0FRc0IsS0FBSztBQU81QjtJQUcrQiw2QkFBTTtJQUhyQzs7S0FHeUM7d0ZBQTVCLFNBQVM7cURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtvQkFwRG5CO0NBc0R5QyxBQUh6QyxDQUcrQixNQUFNLEdBQUk7U0FBNUIsU0FBUztzREFBVCxTQUFTO2tEQUFULFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxFdmVudFR5cGUge1xyXG5cdENvbXBsZXRlID0gMCxcclxuXHRDbG9zZSA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBsZXRlRXZlbnQge1xyXG5cdG1vZGFsOiBNb2RhbDtcclxuXHRkYXRhPzogYW55O1xyXG5cdHR5cGU/OiBNb2RhbEV2ZW50VHlwZS5Db21wbGV0ZSA9IE1vZGFsRXZlbnRUeXBlLkNvbXBsZXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWxDb21wbGV0ZUV2ZW50KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnTW9kYWxDb21wbGV0ZUV2ZW50Jywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ2xvc2VFdmVudCB7XHJcblx0bW9kYWw6IE1vZGFsO1xyXG5cdGRhdGE/OiBhbnk7XHJcblx0dHlwZT86IE1vZGFsRXZlbnRUeXBlLkNsb3NlID0gTW9kYWxFdmVudFR5cGUuQ2xvc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBNb2RhbENsb3NlRXZlbnQpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbEV2ZW50PFQ+ID0gTW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cdGNvbXBvbmVudDogYW55O1xyXG5cdHByb3ZpZGVycz86IFByb3ZpZGVyID0gW107XHJcblx0ZGF0YT86IGFueTtcclxuXHRlbWl0dGVyPzogRXZlbnRFbWl0dGVyPE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWwpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERhdGEgZXh0ZW5kcyBPYmplY3QgeyB9XHJcbiJdfQ==