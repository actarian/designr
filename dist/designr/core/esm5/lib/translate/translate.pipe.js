/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
import * as i1 from "./translate.service";
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(ref, translateService) {
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
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    function (key, params) {
        // const label = this.translateService.getLabel(key, text, params);
        return key;
    };
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
    TranslatePipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: TranslateService }
    ]; };
    /** @nocollapse */ TranslatePipe.ngInjectableDef = i0.defineInjectable({ factory: function TranslatePipe_Factory() { return new TranslatePipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.TranslateService)); }, token: TranslatePipe, providedIn: "root" });
    return TranslatePipe;
}());
export { TranslatePipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdkQ7SUFVQyx1QkFDUyxHQUFzQixFQUNwQixnQkFBa0M7UUFEcEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUU1QywwQ0FBMEM7UUFDMUMsZ0NBQWdDO1FBQ2hDLEtBQUs7SUFDTixDQUFDOzs7Ozs7SUFFTSxpQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsR0FBVyxFQUFFLE1BQXVCO1FBQ3BELG1FQUFtRTtRQUNuRSxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7O2dCQXRCRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVlEsaUJBQWlCO2dCQUNqQixnQkFBZ0I7Ozt3QkFEekI7Q0EyQkMsQUF4QkQsSUF3QkM7U0FoQlksYUFBYTs7Ozs7O0lBR3hCLDRCQUE4Qjs7Ozs7SUFDOUIseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAndHJhbnNsYXRlJyxcblx0cHVyZTogZmFsc2UsXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByb3RlY3RlZCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG5cdCkge1xuXHRcdC8vIHRoaXMudHJhbnNsYXRlU2VydmljZS5ldmVudHMuc3Vic2NyaWJlKFxuXHRcdC8vIFx0eCA9PiB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKVxuXHRcdC8vICk7XG5cdH1cblxuXHRwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBwYXJhbXM/OiB7IHZhbHVlOiBhbnkgfSk6IHN0cmluZyB7XG5cdFx0Ly8gY29uc3QgbGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0TGFiZWwoa2V5LCB0ZXh0LCBwYXJhbXMpO1xuXHRcdHJldHVybiBrZXk7XG5cdH1cblxufVxuIl19