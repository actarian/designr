/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelPipe {
    /**
     * @param {?} changeDetector
     * @param {?} labelService
     */
    constructor(changeDetector, labelService) {
        this.changeDetector = changeDetector;
        this.labelService = labelService;
        this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.asyncPipe.dispose();
    }
}
LabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'label',
                pure: false
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
    LabelPipe.prototype.asyncPipe;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVUvQyxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFJckIsWUFDUyxjQUFpQyxFQUNqQyxZQUFpQztRQURqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLElBQWEsRUFBRSxNQUFZO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUF6QkQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxLQUFLO2FBQ1g7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFaUSxpQkFBaUI7WUFHakIsWUFBWTs7Ozs7Ozs7SUFZcEIsOEJBQW1DOzs7OztJQUdsQyxtQ0FBeUM7Ozs7O0lBQ3pDLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4uL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdsYWJlbCcsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbFBpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgYXN5bmNQaXBlOiBDdXN0b21Bc3luY1BpcGU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBsYWJlbFNlcnZpY2U6IExhYmVsU2VydmljZTxMYWJlbD4sXG5cdCkge1xuXHRcdHRoaXMuYXN5bmNQaXBlID0gbmV3IEN1c3RvbUFzeW5jUGlwZSh0aGlzLmNoYW5nZURldGVjdG9yKTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hc3luY1BpcGUudHJhbnNmb3JtKHRoaXMubGFiZWxTZXJ2aWNlLmdldEtleShrZXksIHRleHQsIHBhcmFtcykpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5hc3luY1BpcGUuZGlzcG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==