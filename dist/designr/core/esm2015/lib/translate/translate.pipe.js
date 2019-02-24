/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
import * as i1 from "./translate.service";
export class TranslatePipe {
    /**
     * @param {?} ref
     * @param {?} translateService
     */
    constructor(ref, translateService) {
        this.ref = ref;
        this.translateService = translateService;
        this.translateService.events.subscribe(x => this.ref.markForCheck());
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    transform(key, text, params) {
        // console.log(key, params);
        /** @type {?} */
        const label = this.translateService.getTranslate(key, text, params);
        // console.log('label', label, this.translateService.cache);
        return label;
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate',
                pure: false,
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TranslateService }
];
/** @nocollapse */ TranslatePipe.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePipe_Factory() { return new TranslatePipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.TranslateService)); }, token: TranslatePipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.ref;
    /**
     * @type {?}
     * @protected
     */
    TranslatePipe.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFVdkQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBRXpCLFlBQ1MsR0FBc0IsRUFDcEIsZ0JBQTZDO1FBRC9DLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFFdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FDNUIsQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFFTSxTQUFTLENBQUMsR0FBVyxFQUFFLElBQWEsRUFBRSxNQUFZOzs7Y0FFbEQsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7UUFDbkUsNERBQTREO1FBQzVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBeEJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhRLGlCQUFpQjtZQUVqQixnQkFBZ0I7Ozs7Ozs7O0lBYXZCLDRCQUE4Qjs7Ozs7SUFDOUIseUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAndHJhbnNsYXRlJyxcblx0cHVyZTogZmFsc2UsXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByb3RlY3RlZCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlPFRyYW5zbGF0ZT5cblx0KSB7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoXG5cdFx0XHR4ID0+IHRoaXMucmVmLm1hcmtGb3JDaGVjaygpXG5cdFx0KTtcblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHRleHQ/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB7XG5cdFx0Ly8gY29uc29sZS5sb2coa2V5LCBwYXJhbXMpO1xuXHRcdGNvbnN0IGxhYmVsID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZShrZXksIHRleHQsIHBhcmFtcyk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVsJywgbGFiZWwsIHRoaXMudHJhbnNsYXRlU2VydmljZS5jYWNoZSk7XG5cdFx0cmV0dXJuIGxhYmVsO1xuXHR9XG5cbn1cbiJdfQ==