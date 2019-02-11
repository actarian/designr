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
        // this.translateService.events.subscribe(
        // 	x => this.ref.markForCheck()
        // );
    }
    /**
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    transform(key, params) {
        // const label = this.translateService.getLabel(key, text, params);
        return key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFVdkQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBRXpCLFlBQ1MsR0FBc0IsRUFDcEIsZ0JBQWtDO1FBRHBDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFNUMsMENBQTBDO1FBQzFDLGdDQUFnQztRQUNoQyxLQUFLO0lBQ04sQ0FBQzs7Ozs7O0lBRU0sU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUF1QjtRQUNwRCxtRUFBbUU7UUFDbkUsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDOzs7WUF0QkQsSUFBSSxTQUFDO2dCQUNMLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVlEsaUJBQWlCO1lBQ2pCLGdCQUFnQjs7Ozs7Ozs7SUFhdkIsNEJBQThCOzs7OztJQUM5Qix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICd0cmFuc2xhdGUnLFxuXHRwdXJlOiBmYWxzZSxcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2Vcblx0KSB7XG5cdFx0Ly8gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoXG5cdFx0Ly8gXHR4ID0+IHRoaXMucmVmLm1hcmtGb3JDaGVjaygpXG5cdFx0Ly8gKTtcblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHBhcmFtcz86IHsgdmFsdWU6IGFueSB9KTogc3RyaW5nIHtcblx0XHQvLyBjb25zdCBsYWJlbCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRMYWJlbChrZXksIHRleHQsIHBhcmFtcyk7XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG59XG4iXX0=