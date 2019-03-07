/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PayPalConfig, PayPalService } from './paypal.service';
export class PayPalWidgetComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} paypalService
     */
    constructor(platformId, paypalService) {
        super();
        this.platformId = platformId;
        this.paypalService = paypalService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} paypal
             * @return {?}
             */
            paypal => {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            }));
        }
    }
}
PayPalWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'plugins-paypal-widget-component',
                template: `<div id="#paypal-widget-button"></div>`
            }] }
];
/** @nocollapse */
PayPalWidgetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PayPalService }
];
PayPalWidgetComponent.propDecorators = {
    paypalOptions: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPL0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7Ozs7SUFLN0QsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEI7UUFFcEMsS0FBSyxFQUFFLENBQUM7UUFIcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUdyQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQzFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQix3REFBd0Q7WUFDekQsQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFLHdDQUF3QzthQUNsRDs7Ozt5Q0FRRSxNQUFNLFNBQUMsV0FBVztZQWJFLGFBQWE7Ozs0QkFTbEMsS0FBSzs7OztJQUFOLDhDQUFxQzs7SUFDckMsdUNBQWdCOzs7OztJQUdmLDJDQUErQzs7Ozs7SUFDL0MsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGF5UGFsQ29uZmlnLCBQYXlQYWxTZXJ2aWNlIH0gZnJvbSAnLi9wYXlwYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BsdWdpbnMtcGF5cGFsLXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCIjcGF5cGFsLXdpZGdldC1idXR0b25cIj48L2Rpdj5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFBheVBhbFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXlwYWxPcHRpb25zOiBQYXlQYWxDb25maWc7XG5cdGxvYWRlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBheXBhbFNlcnZpY2U6IFBheVBhbFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucGF5cGFsU2VydmljZS5yZW5kZXIodGhpcy5wYXlwYWxPcHRpb25zLCAnI3BheXBhbC13aWRnZXQtYnV0dG9uJykucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZShwYXlwYWwgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsV2lkZ2V0Q29tcG9uZW50LnJlbmRlcmVkJywgcGF5cGFsKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==