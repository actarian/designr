/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelPipe {
    /**
     * @param {?} ref
     * @param {?} labelService
     */
    constructor(ref, labelService) {
        this.ref = ref;
        this.labelService = labelService;
        this.labelService.events.subscribe(x => this.ref.markForCheck());
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        // console.log(key, params);
        // return WrappedValue.wrap(this.val);
        /** @type {?} */
        const label = this.labelService.getLabel(key, text, params);
        // console.log('label', label, this.labelService.cache);
        return label;
    }
}
LabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'label',
                pure: false,
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LabelPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: LabelService }
];
/** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.ref;
    /**
     * @type {?}
     * @protected
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVUvQyxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFFckIsWUFDUyxHQUFzQixFQUNwQixZQUFpQztRQURuQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQzVCLENBQUM7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sU0FBUyxDQUFDLEdBQVcsRUFBRSxJQUFhLEVBQUUsTUFBWTs7OztjQUdsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7UUFDM0Qsd0RBQXdEO1FBQ3hELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBekJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBWFEsaUJBQWlCO1lBRWpCLFlBQVk7Ozs7Ozs7O0lBYW5CLHdCQUE4Qjs7Ozs7SUFDOUIsaUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdsYWJlbCcsXG5cdHB1cmU6IGZhbHNlLFxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByb3RlY3RlZCBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD5cblx0KSB7XG5cdFx0dGhpcy5sYWJlbFNlcnZpY2UuZXZlbnRzLnN1YnNjcmliZShcblx0XHRcdHggPT4gdGhpcy5yZWYubWFya0ZvckNoZWNrKClcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcblx0XHQvLyBjb25zb2xlLmxvZyhrZXksIHBhcmFtcyk7XG5cdFx0Ly8gcmV0dXJuIFdyYXBwZWRWYWx1ZS53cmFwKHRoaXMudmFsKTtcblx0XHRjb25zdCBsYWJlbCA9IHRoaXMubGFiZWxTZXJ2aWNlLmdldExhYmVsKGtleSwgdGV4dCwgcGFyYW1zKTtcblx0XHQvLyBjb25zb2xlLmxvZygnbGFiZWwnLCBsYWJlbCwgdGhpcy5sYWJlbFNlcnZpY2UuY2FjaGUpO1xuXHRcdHJldHVybiBsYWJlbDtcblx0fVxuXG59XG4iXX0=