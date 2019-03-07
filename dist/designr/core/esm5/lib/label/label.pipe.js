/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, NgZone, Pipe } from '@angular/core';
import { first } from 'rxjs/operators';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelPipe = /** @class */ (function () {
    function LabelPipe(zone, changeDetector, labelService) {
        this.zone = zone;
        this.changeDetector = changeDetector;
        this.labelService = labelService;
        // this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
    }
    /**
     * @param {?} key
     * @param {?} text
     * @param {?} params
     * @return {?}
     */
    LabelPipe.prototype.getKey = /**
     * @param {?} key
     * @param {?} text
     * @param {?} params
     * @return {?}
     */
    function (key, text, params) {
        var _this = this;
        if (this.key$) {
            return;
        }
        this.key$ = this.labelService.getKey(key, text, params);
        this.key$.pipe(first()).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.value = value;
            // this.changeDetector.markForCheck();
        }));
    };
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
        if (this.value) {
            return this.value;
        }
        this.getKey(key, text, params); // this.asyncPipe.transform(this.labelService.getKey(key, text, params));
    };
    /**
     * @return {?}
     */
    LabelPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.asyncPipe.dispose();
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
        { type: NgZone },
        { type: ChangeDetectorRef },
        { type: LabelService }
    ]; };
    /** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i0.NgZone), i0.inject(i0.ChangeDetectorRef), i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
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
    LabelPipe.prototype.value;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.key$;
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.zone;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV0RyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFhQyxtQkFDUyxJQUFZLEVBQ1osY0FBaUMsRUFDakMsWUFBaUM7UUFGakMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFekMsNkRBQTZEO0lBQzlELENBQUM7Ozs7Ozs7SUFJRCwwQkFBTTs7Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsSUFBWSxFQUFFLE1BQVc7UUFBN0MsaUJBV0M7UUFWQSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2IsS0FBSyxFQUFFLENBQ1AsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLHNDQUFzQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCw2QkFBUzs7Ozs7O0lBQVQsVUFBVSxHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQVk7UUFDakQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMseUVBQXlFO0lBQzFHLENBQUM7Ozs7SUFFRCwrQkFBVzs7O0lBQVg7UUFDQyw0QkFBNEI7SUFDN0IsQ0FBQzs7Z0JBN0NELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWR1QyxNQUFNO2dCQUFyQyxpQkFBaUI7Z0JBS2pCLFlBQVk7OztvQkFMckI7Q0FzREMsQUEvQ0QsSUErQ0M7U0F2Q1ksU0FBUzs7Ozs7O0lBRXJCLDhCQUFtQzs7Ozs7SUFDbkMsMEJBQXNCOzs7OztJQVV0Qix5QkFBaUM7Ozs7O0lBUGhDLHlCQUFvQjs7Ozs7SUFDcEIsbUNBQXlDOzs7OztJQUN6QyxpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2xhYmVsJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHJpdmF0ZSBhc3luY1BpcGU6IEN1c3RvbUFzeW5jUGlwZTtcblx0cHJpdmF0ZSB2YWx1ZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgbGFiZWxTZXJ2aWNlOiBMYWJlbFNlcnZpY2U8TGFiZWw+LFxuXHQpIHtcblx0XHQvLyB0aGlzLmFzeW5jUGlwZSA9IG5ldyBDdXN0b21Bc3luY1BpcGUodGhpcy5jaGFuZ2VEZXRlY3Rvcik7XG5cdH1cblxuXHRwcml2YXRlIGtleSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcsIHRleHQ6IHN0cmluZywgcGFyYW1zOiBhbnkpIHtcblx0XHRpZiAodGhpcy5rZXkkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMua2V5JCA9IHRoaXMubGFiZWxTZXJ2aWNlLmdldEtleShrZXksIHRleHQsIHBhcmFtcyk7XG5cdFx0dGhpcy5rZXkkLnBpcGUoXG5cdFx0XHRmaXJzdCgpLFxuXHRcdCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHRcdC8vIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHRoaXMudmFsdWUpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdH1cblx0XHR0aGlzLmdldEtleShrZXksIHRleHQsIHBhcmFtcyk7IC8vIHRoaXMuYXN5bmNQaXBlLnRyYW5zZm9ybSh0aGlzLmxhYmVsU2VydmljZS5nZXRLZXkoa2V5LCB0ZXh0LCBwYXJhbXMpKTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdC8vIHRoaXMuYXN5bmNQaXBlLmRpc3Bvc2UoKTtcblx0fVxuXG59XG4iXX0=