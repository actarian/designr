import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PayPalConfig, PayPalService } from './paypal.service';
import * as i0 from "@angular/core";
import * as i1 from "./paypal.service";
var PayPalWidgetComponent = /** @class */ (function (_super) {
    __extends(PayPalWidgetComponent, _super);
    function PayPalWidgetComponent(platformId, paypalService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.paypalService = paypalService;
        return _this;
    }
    PayPalWidgetComponent.prototype.ngAfterViewInit = function () {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(function (paypal) {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    };
    PayPalWidgetComponent.ɵfac = function PayPalWidgetComponent_Factory(t) { return new (t || PayPalWidgetComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PayPalService)); };
    PayPalWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PayPalWidgetComponent, selectors: [["plugins-paypal-widget-component"]], inputs: { paypalOptions: "paypalOptions" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["id", "#paypal-widget-button"]], template: function PayPalWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return PayPalWidgetComponent;
}(DisposableComponent));
export { PayPalWidgetComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PayPalWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-paypal-widget-component',
                template: "<div id=\"#paypal-widget-button\"></div>",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PayPalService }]; }, { paypalOptions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUUvRDtJQUsyQyx5Q0FBbUI7SUFLN0QsK0JBQzhCLFVBQWtCLEVBQ3ZDLGFBQTRCO1FBRnJDLFlBSUMsaUJBQU8sU0FDUDtRQUo2QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFHckMsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFDQyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUMxRSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLHdEQUF3RDtZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs4RkFwQlcscUJBQXFCLHVCQU14QixXQUFXOzhEQU5SLHFCQUFxQjtZQUh0Qix5QkFBc0M7O2dDQVJsRDtDQWlDQyxBQTNCRCxDQUsyQyxtQkFBbUIsR0FzQjdEO1NBdEJZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxRQUFRLEVBQUUsMENBQXdDO2FBQ2xEOztzQkFRRSxNQUFNO3VCQUFDLFdBQVc7O2tCQUpuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGF5UGFsQ29uZmlnLCBQYXlQYWxTZXJ2aWNlIH0gZnJvbSAnLi9wYXlwYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BsdWdpbnMtcGF5cGFsLXdpZGdldC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCIjcGF5cGFsLXdpZGdldC1idXR0b25cIj48L2Rpdj5gLFxufSlcblxuZXhwb3J0IGNsYXNzIFBheVBhbFdpZGdldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXlwYWxPcHRpb25zOiBQYXlQYWxDb25maWc7XG5cdGxvYWRlZDogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBheXBhbFNlcnZpY2U6IFBheVBhbFNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucGF5cGFsU2VydmljZS5yZW5kZXIodGhpcy5wYXlwYWxPcHRpb25zLCAnI3BheXBhbC13aWRnZXQtYnV0dG9uJykucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZShwYXlwYWwgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsV2lkZ2V0Q29tcG9uZW50LnJlbmRlcmVkJywgcGF5cGFsKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==