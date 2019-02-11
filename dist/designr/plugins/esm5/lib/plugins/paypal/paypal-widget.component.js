/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9EO0lBSzJDLGlEQUFtQjtJQUs3RCwrQkFDOEIsVUFBa0IsRUFDdkMsYUFBNEI7UUFGckMsWUFJQyxpQkFBTyxTQUNQO1FBSjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUdyQyxDQUFDOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FDMUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNqQix3REFBd0Q7WUFDekQsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsUUFBUSxFQUFFLDBDQUF3QztpQkFDbEQ7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBYkUsYUFBYTs7O2dDQVNsQyxLQUFLOztJQW9CUCw0QkFBQztDQUFBLEFBM0JELENBSzJDLG1CQUFtQixHQXNCN0Q7U0F0QlkscUJBQXFCOzs7SUFFakMsOENBQXFDOztJQUNyQyx1Q0FBZ0I7Ozs7O0lBR2YsMkNBQStDOzs7OztJQUMvQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYXlQYWxDb25maWcsIFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BheXBhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGx1Z2lucy1wYXlwYWwtd2lkZ2V0LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cIiNwYXlwYWwtd2lkZ2V0LWJ1dHRvblwiPjwvZGl2PmAsXG59KVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIHBheXBhbE9wdGlvbnM6IFBheVBhbENvbmZpZztcblx0bG9hZGVkOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGF5cGFsU2VydmljZTogUGF5UGFsU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYXlwYWxTZXJ2aWNlLnJlbmRlcih0aGlzLnBheXBhbE9wdGlvbnMsICcjcGF5cGFsLXdpZGdldC1idXR0b24nKS5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdCkuc3Vic2NyaWJlKHBheXBhbCA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxXaWRnZXRDb21wb25lbnQucmVuZGVyZWQnLCBwYXlwYWwpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuIl19