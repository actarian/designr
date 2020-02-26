import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';
import { PayPalConfig, PayPalService } from './paypal.service';
import * as i0 from "@angular/core";
import * as i1 from "./paypal.service";
export class PayPalWidgetComponent extends DisposableComponent {
    constructor(platformId, paypalService) {
        super();
        this.platformId = platformId;
        this.paypalService = paypalService;
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.paypalService.render(this.paypalOptions, '#paypal-widget-button').pipe(takeUntil(this.unsubscribe)).subscribe(paypal => {
                // console.log('PayPalWidgetComponent.rendered', paypal)
            });
        }
    }
}
PayPalWidgetComponent.ɵfac = function PayPalWidgetComponent_Factory(t) { return new (t || PayPalWidgetComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PayPalService)); };
PayPalWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PayPalWidgetComponent, selectors: [["plugins-paypal-widget-component"]], inputs: { paypalOptions: "paypalOptions" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [["id", "#paypal-widget-button"]], template: function PayPalWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PayPalWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'plugins-paypal-widget-component',
                template: `<div id="#paypal-widget-button"></div>`,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PayPalService }]; }, { paypalOptions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBTy9ELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxtQkFBbUI7SUFLN0QsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEI7UUFFcEMsS0FBSyxFQUFFLENBQUM7UUFIcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUdyQyxDQUFDO0lBRUQsZUFBZTtRQUNkLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQzFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQix3REFBd0Q7WUFDekQsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OzBGQXBCVyxxQkFBcUIsdUJBTXhCLFdBQVc7MERBTlIscUJBQXFCO1FBSHRCLHlCQUFzQzs7a0RBR3JDLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsUUFBUSxFQUFFLHdDQUF3QzthQUNsRDs7c0JBUUUsTUFBTTt1QkFBQyxXQUFXOztrQkFKbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBheVBhbENvbmZpZywgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGF5cGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwbHVnaW5zLXBheXBhbC13aWRnZXQtY29tcG9uZW50Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiI3BheXBhbC13aWRnZXQtYnV0dG9uXCI+PC9kaXY+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcGF5cGFsT3B0aW9uczogUGF5UGFsQ29uZmlnO1xuXHRsb2FkZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwYXlwYWxTZXJ2aWNlOiBQYXlQYWxTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnBheXBhbFNlcnZpY2UucmVuZGVyKHRoaXMucGF5cGFsT3B0aW9ucywgJyNwYXlwYWwtd2lkZ2V0LWJ1dHRvbicpLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0KS5zdWJzY3JpYmUocGF5cGFsID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BheVBhbFdpZGdldENvbXBvbmVudC5yZW5kZXJlZCcsIHBheXBhbClcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=