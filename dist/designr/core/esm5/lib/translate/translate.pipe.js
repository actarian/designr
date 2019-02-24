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
        var _this = this;
        this.ref = ref;
        this.translateService = translateService;
        this.translateService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
    }
    /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} text
     * @param {?=} params
     * @return {?}
     */
    function (key, text, params) {
        // console.log(key, params);
        /** @type {?} */
        var label = this.translateService.getTranslate(key, text, params);
        // console.log('label', label, this.translateService.cache);
        return label;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdkQ7SUFVQyx1QkFDUyxHQUFzQixFQUNwQixnQkFBNkM7UUFGeEQsaUJBT0M7UUFOUSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBRXZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQXZCLENBQXVCLENBQzVCLENBQUM7SUFDSCxDQUFDOzs7Ozs7O0lBRU0saUNBQVM7Ozs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQVk7OztZQUVsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUNuRSw0REFBNEQ7UUFDNUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOztnQkF4QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGlCQUFpQjtnQkFFakIsZ0JBQWdCOzs7d0JBRnpCO0NBOEJDLEFBMUJELElBMEJDO1NBbEJZLGFBQWE7Ozs7OztJQUd4Qiw0QkFBOEI7Ozs7O0lBQzlCLHlDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3RyYW5zbGF0ZScsXG5cdHB1cmU6IGZhbHNlLFxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcm90ZWN0ZWQgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTxUcmFuc2xhdGU+XG5cdCkge1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5ldmVudHMuc3Vic2NyaWJlKFxuXHRcdFx0eCA9PiB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuXHRcdC8vIGNvbnNvbGUubG9nKGtleSwgcGFyYW1zKTtcblx0XHRjb25zdCBsYWJlbCA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGUoa2V5LCB0ZXh0LCBwYXJhbXMpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdsYWJlbCcsIGxhYmVsLCB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUpO1xuXHRcdHJldHVybiBsYWJlbDtcblx0fVxuXG59XG4iXX0=