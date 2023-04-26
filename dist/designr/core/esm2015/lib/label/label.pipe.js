/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
export class LabelPipe {
    /**
     * @param {?} labelService
     */
    constructor(labelService) {
        this.labelService = labelService;
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    transform(key, defaultValue, params) {
        return this.labelService.transform(key, defaultValue, params);
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
    { type: LabelService }
];
/** @nocollapse */ LabelPipe.ngInjectableDef = i0.defineInjectable({ factory: function LabelPipe_Factory() { return new LabelPipe(i0.inject(i1.LabelService)); }, token: LabelPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBVS9DLE1BQU0sT0FBTyxTQUFTOzs7O0lBRXJCLFlBQ1MsWUFBaUM7UUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3RDLENBQUM7Ozs7Ozs7SUFFTCxTQUFTLENBQUMsR0FBVyxFQUFFLFlBQXFCLEVBQUUsTUFBWTtRQUN6RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBaEJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsWUFBWTs7Ozs7Ozs7SUFhbkIsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdsYWJlbCcsXHJcblx0cHVyZTogZmFsc2VcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbGFiZWxTZXJ2aWNlOiBMYWJlbFNlcnZpY2U8TGFiZWw+LFxyXG5cdCkgeyB9XHJcblxyXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG5cdFx0cmV0dXJuIHRoaXMubGFiZWxTZXJ2aWNlLnRyYW5zZm9ybShrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==