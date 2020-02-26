import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var ModalEventType;
(function (ModalEventType) {
    ModalEventType[ModalEventType["Complete"] = 0] = "Complete";
    ModalEventType[ModalEventType["Close"] = 1] = "Close";
})(ModalEventType || (ModalEventType = {}));
export class ModalCompleteEvent {
    constructor(options) {
        this.type = ModalEventType.Complete;
        // console.log('ModalCompleteEvent', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
export class ModalCloseEvent {
    constructor(options) {
        this.type = ModalEventType.Close;
        if (options) {
            Object.assign(this, options);
        }
    }
}
export class Modal {
    constructor(options) {
        this.providers = [];
        this.emitter = new EventEmitter();
        if (options) {
            Object.assign(this, options);
        }
    }
}
Modal.ɵfac = function Modal_Factory(t) { return new (t || Modal)(i0.ɵɵinject(Modal)); };
Modal.ɵprov = i0.ɵɵdefineInjectable({ token: Modal, factory: Modal.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Modal, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Modal }]; }, null); })();
export class ModalData extends Object {
}
ModalData.ɵfac = function ModalData_Factory(t) { return ɵModalData_BaseFactory(t || ModalData); };
ModalData.ɵprov = i0.ɵɵdefineInjectable({ token: ModalData, factory: ModalData.ɵfac, providedIn: 'root' });
const ɵModalData_BaseFactory = i0.ɵɵgetInheritedFactory(ModalData);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalData, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9tb2RhbC9tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7QUFFbkUsTUFBTSxDQUFOLElBQVksY0FHWDtBQUhELFdBQVksY0FBYztJQUN6QiwyREFBWSxDQUFBO0lBQ1oscURBQVMsQ0FBQTtBQUNWLENBQUMsRUFIVyxjQUFjLEtBQWQsY0FBYyxRQUd6QjtBQUVELE1BQU0sT0FBTyxrQkFBa0I7SUFLOUIsWUFBWSxPQUE0QjtRQUZ4QyxTQUFJLEdBQTZCLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFHeEQsOENBQThDO1FBQzlDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7QUFFRCxNQUFNLE9BQU8sZUFBZTtJQUszQixZQUFZLE9BQXlCO1FBRnJDLFNBQUksR0FBMEIsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUdsRCxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEO0FBT0QsTUFBTSxPQUFPLEtBQUs7SUFPakIsWUFBWSxPQUFlO1FBTDNCLGNBQVMsR0FBYyxFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUF3RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSWpGLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDOzswREFYVyxLQUFLLGNBT0ssS0FBSzs2Q0FQZixLQUFLLFdBQUwsS0FBSyxtQkFGTCxNQUFNO2tEQUVOLEtBQUs7Y0FIakIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCO3NDQVFzQixLQUFLO0FBVTVCLE1BQU0sT0FBTyxTQUFVLFNBQVEsTUFBTTs7b0ZBQXhCLFNBQVM7aURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTt3REFFTixTQUFTO2tEQUFULFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxFdmVudFR5cGUge1xyXG5cdENvbXBsZXRlID0gMCxcclxuXHRDbG9zZSA9IDEsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBsZXRlRXZlbnQge1xyXG5cdG1vZGFsOiBNb2RhbDtcclxuXHRkYXRhPzogYW55O1xyXG5cdHR5cGU/OiBNb2RhbEV2ZW50VHlwZS5Db21wbGV0ZSA9IE1vZGFsRXZlbnRUeXBlLkNvbXBsZXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWxDb21wbGV0ZUV2ZW50KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnTW9kYWxDb21wbGV0ZUV2ZW50Jywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ2xvc2VFdmVudCB7XHJcblx0bW9kYWw6IE1vZGFsO1xyXG5cdGRhdGE/OiBhbnk7XHJcblx0dHlwZT86IE1vZGFsRXZlbnRUeXBlLkNsb3NlID0gTW9kYWxFdmVudFR5cGUuQ2xvc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBNb2RhbENsb3NlRXZlbnQpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNb2RhbEV2ZW50PFQ+ID0gTW9kYWxDb21wbGV0ZUV2ZW50IHwgTW9kYWxDbG9zZUV2ZW50O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWwge1xyXG5cdGNvbXBvbmVudDogYW55O1xyXG5cdHByb3ZpZGVycz86IFByb3ZpZGVyID0gW107XHJcblx0ZGF0YT86IGFueTtcclxuXHRlbWl0dGVyPzogRXZlbnRFbWl0dGVyPE1vZGFsQ29tcGxldGVFdmVudCB8IE1vZGFsQ2xvc2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTW9kYWwpIHtcclxuXHRcdGlmIChvcHRpb25zKSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbERhdGEgZXh0ZW5kcyBPYmplY3QgeyB9XHJcbiJdfQ==