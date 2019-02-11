/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelAsyncPipe = /** @class */ (function () {
    function LabelAsyncPipe(changeDetector, labelService) {
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
    LabelAsyncPipe.prototype.transform = /**
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
    LabelAsyncPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.asyncPipe.dispose();
    };
    LabelAsyncPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'labelAsync',
                    pure: false
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LabelAsyncPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: LabelService }
    ]; };
    /** @nocollapse */ LabelAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelAsyncPipe_Factory() { return new LabelAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelAsyncPipe, providedIn: "root" });
    return LabelAsyncPipe;
}());
export { LabelAsyncPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.asyncPipe;
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    LabelAsyncPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwtYXN5bmMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLWFzeW5jLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFZQyx3QkFDUyxjQUFpQyxFQUNqQyxZQUFpQztRQURqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7SUFFRCxrQ0FBUzs7Ozs7O0lBQVQsVUFBVSxHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQVk7UUFDakQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBekJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1g7Z0JBRUEsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFaUSxpQkFBaUI7Z0JBR2pCLFlBQVk7Ozt5QkFIckI7Q0FnQ0MsQUEzQkQsSUEyQkM7U0FuQlksY0FBYzs7Ozs7O0lBRTFCLG1DQUFtQzs7Ozs7SUFHbEMsd0NBQXlDOzs7OztJQUN6QyxzQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbGFiZWxBc3luYycsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbEFzeW5jUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHJpdmF0ZSBhc3luY1BpcGU6IEN1c3RvbUFzeW5jUGlwZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcblx0KSB7XG5cdFx0dGhpcy5hc3luY1BpcGUgPSBuZXcgQ3VzdG9tQXN5bmNQaXBlKHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5sYWJlbFNlcnZpY2UuZ2V0S2V5KGtleSwgdGV4dCwgcGFyYW1zKSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzeW5jUGlwZS5kaXNwb3NlKCk7XG5cdH1cblxufVxuIl19