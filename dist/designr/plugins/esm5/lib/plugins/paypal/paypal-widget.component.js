/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PayPalConfig, PayPalService } from './paypal.service';
var PayPalWidgetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PayPalWidgetComponent, _super);
    function PayPalWidgetComponent(platformId, paypalService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.paypalService = paypalService;
        return _this;
    }
    /**
     * @return {?}
     */
    PayPalWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} paypal
             * @return {?}
             */
            function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            }));
        }
    };
    PayPalWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'plugins-paypal-widget-component',
                    template: "<div id=\"#paypal-widget-button\"></div>"
                }] }
    ];
    /** @nocollapse */
    PayPalWidgetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PayPalService }
    ]; };
    PayPalWidgetComponent.propDecorators = {
        paypalOptions: [{ type: Input }]
    };
    return PayPalWidgetComponent;
}(DisposableComponent));
export { PayPalWidgetComponent };
if (false) {
    /** @type {?} */
    PayPalWidgetComponent.prototype.paypalOptions;
    /** @type {?} */
    PayPalWidgetComponent.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    PayPalWidgetComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PayPalWidgetComponent.prototype.paypalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9EO0lBSzJDLGlEQUFtQjtJQUs3RCwrQkFDOEIsVUFBa0IsRUFDdkMsYUFBNEI7UUFGckMsWUFJQyxpQkFBTyxTQUNQO1FBSjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUdyQyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FDMUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxNQUFNO2dCQUNqQix3REFBd0Q7WUFDekQsQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLDBDQUF3QztpQkFDbEQ7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBYkUsYUFBYTs7O2dDQVNsQyxLQUFLOztJQW9CUCw0QkFBQztDQUFBLEFBM0JELENBSzJDLG1CQUFtQixHQXNCN0Q7U0F0QlkscUJBQXFCOzs7SUFFakMsOENBQXFDOztJQUNyQyx1Q0FBZ0I7Ozs7O0lBR2YsMkNBQStDOzs7OztJQUMvQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBheVBhbENvbmZpZywgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGF5cGFsLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwbHVnaW5zLXBheXBhbC13aWRnZXQtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCIjcGF5cGFsLXdpZGdldC1idXR0b25cIj48L2Rpdj5gLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheVBhbFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QElucHV0KCkgcGF5cGFsT3B0aW9uczogUGF5UGFsQ29uZmlnO1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGF5cGFsU2VydmljZTogUGF5UGFsU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHR0aGlzLnBheXBhbFNlcnZpY2UucmVuZGVyKHRoaXMucGF5cGFsT3B0aW9ucywgJyNwYXlwYWwtd2lkZ2V0LWJ1dHRvbicpLnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHRcdCkuc3Vic2NyaWJlKHBheXBhbCA9PiB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BheVBhbFdpZGdldENvbXBvbmVudC5yZW5kZXJlZCcsIHBheXBhbClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=