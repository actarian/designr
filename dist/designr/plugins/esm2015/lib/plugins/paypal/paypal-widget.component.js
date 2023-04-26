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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPL0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjs7Ozs7SUFLN0QsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEI7UUFFcEMsS0FBSyxFQUFFLENBQUM7UUFIcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUdyQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQzFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQix3REFBd0Q7WUFDekQsQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFLHdDQUF3QzthQUNsRDs7Ozt5Q0FRRSxNQUFNLFNBQUMsV0FBVztZQWJFLGFBQWE7Ozs0QkFTbEMsS0FBSzs7OztJQUFOLDhDQUFxQzs7SUFDckMsdUNBQWdCOzs7OztJQUdmLDJDQUErQzs7Ozs7SUFDL0MsOENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQYXlQYWxDb25maWcsIFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BheXBhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncGx1Z2lucy1wYXlwYWwtd2lkZ2V0LWNvbXBvbmVudCcsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiI3BheXBhbC13aWRnZXQtYnV0dG9uXCI+PC9kaXY+YCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5cdEBJbnB1dCgpIHBheXBhbE9wdGlvbnM6IFBheVBhbENvbmZpZztcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBheXBhbFNlcnZpY2U6IFBheVBhbFNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0dGhpcy5wYXlwYWxTZXJ2aWNlLnJlbmRlcih0aGlzLnBheXBhbE9wdGlvbnMsICcjcGF5cGFsLXdpZGdldC1idXR0b24nKS5waXBlKFxyXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0XHQpLnN1YnNjcmliZShwYXlwYWwgPT4ge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxXaWRnZXRDb21wb25lbnQucmVuZGVyZWQnLCBwYXlwYWwpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19