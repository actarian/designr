/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.translateService.events.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => this.ref.markForCheck()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFVdkQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBRXpCLFlBQ1MsR0FBc0IsRUFDcEIsZ0JBQTZDO1FBRC9DLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFFdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFDNUIsQ0FBQztJQUNILENBQUM7Ozs7Ozs7SUFFTSxTQUFTLENBQUMsR0FBVyxFQUFFLElBQWEsRUFBRSxNQUFZOzs7Y0FFbEQsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7UUFDbkUsNERBQTREO1FBQzVELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBeEJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhRLGlCQUFpQjtZQUVqQixnQkFBZ0I7Ozs7Ozs7O0lBYXZCLDRCQUE4Qjs7Ozs7SUFDOUIseUNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3RyYW5zbGF0ZScsXHJcblx0cHVyZTogZmFsc2UsXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U8VHJhbnNsYXRlPlxyXG5cdCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoXHJcblx0XHRcdHggPT4gdGhpcy5yZWYubWFya0ZvckNoZWNrKClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coa2V5LCBwYXJhbXMpO1xyXG5cdFx0Y29uc3QgbGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlKGtleSwgdGV4dCwgcGFyYW1zKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdsYWJlbCcsIGxhYmVsLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUpO1xyXG5cdFx0cmV0dXJuIGxhYmVsO1xyXG5cdH1cclxuXHJcbn1cclxuIl19