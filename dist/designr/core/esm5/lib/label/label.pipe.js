/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelPipe = /** @class */ (function () {
    function LabelPipe(changeDetector, labelService) {
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
    LabelPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    function (key, text, params) {
        return this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    };
    /**
     * @return {?}
     */
    LabelPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.asyncPipe.dispose();
    };
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
    LabelPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: LabelService }
    ]; };
    /** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
    return LabelPipe;
}());
export { LabelPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUUvQztJQVlDLG1CQUNTLGNBQWlDLEVBQ2pDLFlBQWlDO1FBRGpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7OztJQUVELDZCQUFTOzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxJQUFhLEVBQUUsTUFBWTtRQUNqRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkF6QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBWlEsaUJBQWlCO2dCQUdqQixZQUFZOzs7b0JBSHJCO0NBZ0NDLEFBM0JELElBMkJDO1NBbkJZLFNBQVM7Ozs7OztJQUVyQiw4QkFBbUM7Ozs7O0lBR2xDLG1DQUF5Qzs7Ozs7SUFDekMsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2xhYmVsJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHJpdmF0ZSBhc3luY1BpcGU6IEN1c3RvbUFzeW5jUGlwZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcblx0KSB7XG5cdFx0dGhpcy5hc3luY1BpcGUgPSBuZXcgQ3VzdG9tQXN5bmNQaXBlKHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5sYWJlbFNlcnZpY2UuZ2V0S2V5KGtleSwgdGV4dCwgcGFyYW1zKSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzeW5jUGlwZS5kaXNwb3NlKCk7XG5cdH1cblxufVxuIl19