/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelPipe = /** @class */ (function () {
    function LabelPipe(ref, labelService) {
        var _this = this;
        this.ref = ref;
        this.labelService = labelService;
        this.labelService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
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
        // console.log(key, params);
        // return WrappedValue.wrap(this.val);
        /** @type {?} */
        var label = this.labelService.getLabel(key, text, params);
        // console.log('label', label, this.labelService.cache);
        return label;
    };
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
    LabelPipe.prototype.ref;
    /**
     * @type {?}
     * @protected
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUUvQztJQVVDLG1CQUNTLEdBQXNCLEVBQ3BCLFlBQWlDO1FBRjVDLGlCQU9DO1FBTlEsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRTNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDakMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUF2QixDQUF1QixDQUM1QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVNLDZCQUFTOzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLElBQWEsRUFBRSxNQUFZOzs7O1lBR2xELEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUMzRCx3REFBd0Q7UUFDeEQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOztnQkF6QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBWFEsaUJBQWlCO2dCQUVqQixZQUFZOzs7b0JBRnJCO0NBK0JDLEFBM0JELElBMkJDO1NBbkJZLFNBQVM7Ozs7OztJQUdwQix3QkFBOEI7Ozs7O0lBQzlCLGlDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbGFiZWwnLFxuXHRwdXJlOiBmYWxzZSxcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcm90ZWN0ZWQgbGFiZWxTZXJ2aWNlOiBMYWJlbFNlcnZpY2U8TGFiZWw+XG5cdCkge1xuXHRcdHRoaXMubGFiZWxTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoXG5cdFx0XHR4ID0+IHRoaXMucmVmLm1hcmtGb3JDaGVjaygpXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XG5cdFx0Ly8gY29uc29sZS5sb2coa2V5LCBwYXJhbXMpO1xuXHRcdC8vIHJldHVybiBXcmFwcGVkVmFsdWUud3JhcCh0aGlzLnZhbCk7XG5cdFx0Y29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsU2VydmljZS5nZXRMYWJlbChrZXksIHRleHQsIHBhcmFtcyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVsJywgbGFiZWwsIHRoaXMubGFiZWxTZXJ2aWNlLmNhY2hlKTtcblx0XHRyZXR1cm4gbGFiZWw7XG5cdH1cblxufVxuIl19