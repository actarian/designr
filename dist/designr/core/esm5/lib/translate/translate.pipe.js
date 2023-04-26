/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.translateService.events.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.ref.markForCheck(); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdkQ7SUFVQyx1QkFDUyxHQUFzQixFQUNwQixnQkFBNkM7UUFGeEQsaUJBT0M7UUFOUSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBRXZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUNyQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQXZCLENBQXVCLEVBQzVCLENBQUM7SUFDSCxDQUFDOzs7Ozs7O0lBRU0saUNBQVM7Ozs7OztJQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQVk7OztZQUVsRCxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztRQUNuRSw0REFBNEQ7UUFDNUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOztnQkF4QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhRLGlCQUFpQjtnQkFFakIsZ0JBQWdCOzs7d0JBRnpCO0NBOEJDLEFBMUJELElBMEJDO1NBbEJZLGFBQWE7Ozs7OztJQUd4Qiw0QkFBOEI7Ozs7O0lBQzlCLHlDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICd0cmFuc2xhdGUnLFxyXG5cdHB1cmU6IGZhbHNlLFxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHRcdHByb3RlY3RlZCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlPFRyYW5zbGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5ldmVudHMuc3Vic2NyaWJlKFxyXG5cdFx0XHR4ID0+IHRoaXMucmVmLm1hcmtGb3JDaGVjaygpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGtleSwgcGFyYW1zKTtcclxuXHRcdGNvbnN0IGxhYmVsID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZShrZXksIHRleHQsIHBhcmFtcyk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnbGFiZWwnLCBsYWJlbCwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmNhY2hlKTtcclxuXHRcdHJldHVybiBsYWJlbDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==