import { Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelPipe {
    constructor(labelService) {
        this.labelService = labelService;
    }
    transform(key, defaultValue, params) {
        return this.labelService.transform(key, defaultValue, params);
    }
}
LabelPipe.ɵfac = function LabelPipe_Factory(t) { return new (t || LabelPipe)(i0.ɵɵdirectiveInject(i1.LabelService)); };
LabelPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "label", type: LabelPipe, pure: false });
LabelPipe.ɵprov = i0.ɵɵdefineInjectable({ token: LabelPipe, factory: LabelPipe.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LabelPipe, [{
        type: Pipe,
        args: [{
                name: 'label',
                pure: false
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFVL0MsTUFBTSxPQUFPLFNBQVM7SUFFckIsWUFDUyxZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFDdEMsQ0FBQztJQUVMLFNBQVMsQ0FBQyxHQUFXLEVBQUUsWUFBcUIsRUFBRSxNQUFZO1FBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOztrRUFSVyxTQUFTO3lEQUFULFNBQVM7aURBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtrREFFTixTQUFTO2NBUnJCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNYOztjQUVBLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdsYWJlbCcsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gdGhpcy5sYWJlbFNlcnZpY2UudHJhbnNmb3JtKGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHR9XG5cbn1cbiJdfQ==