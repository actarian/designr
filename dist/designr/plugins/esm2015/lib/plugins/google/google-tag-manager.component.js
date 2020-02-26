import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { filter, takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@angular/router";
import * as i3 from "./google-tag-manager.service";
import * as i4 from "@angular/common";
import * as i5 from "@designr/core";
function GoogleTagManagerComponent_noscript_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "noscript");
    i0.ɵɵelement(1, "iframe", 1);
    i0.ɵɵpipe(2, "safeUrl");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(2, 1, ctx_r0.iframeUrl), i0.ɵɵsanitizeResourceUrl);
} }
export class GoogleTagManagerComponent extends DisposableComponent {
    constructor(platformId, pluginsService, router, googleTagManager) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.router = router;
        this.googleTagManager = googleTagManager;
        this.useIframe = true;
        this.pageView = new EventEmitter();
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(e => e instanceof NavigationEnd)).subscribe((e) => {
                const url = `${this.pluginsService.options.origin}${e.urlAfterRedirects}`;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (this.dataLayer) {
                    this.pageView.emit({ dataLayer: this.dataLayer, url });
                }
                else {
                    this.googleTagManager.once().pipe(takeUntil(this.unsubscribe)).subscribe(dataLayer => {
                        // console.log('dataLayer', dataLayer);
                        this.id = this.googleTagManager.options.id;
                        this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
                        this.dataLayer = dataLayer;
                        this.pageView.emit({ dataLayer: this.dataLayer, url });
                    });
                }
            });
        }
    }
}
GoogleTagManagerComponent.ɵfac = function GoogleTagManagerComponent_Factory(t) { return new (t || GoogleTagManagerComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PluginsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.GoogleTagManagerService)); };
GoogleTagManagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GoogleTagManagerComponent, selectors: [["core-google-tag-manager"]], outputs: { pageView: "pageView" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["height", "0", "width", "0", 2, "display", "none", "visibility", "hidden", 3, "src"]], template: function GoogleTagManagerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, GoogleTagManagerComponent_noscript_0_Template, 3, 3, "noscript", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.useIframe && ctx.dataLayer);
    } }, directives: [i4.NgIf], pipes: [i5.SafeUrlPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleTagManagerComponent, [{
        type: Component,
        args: [{
                selector: 'core-google-tag-manager',
                template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.Router }, { type: i3.GoogleTagManagerService }]; }, { pageView: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0lBTXJFLGdDQUNDO0lBQUEsNEJBQXlHOztJQUMxRyxpQkFBVzs7O0lBREYsZUFBMkI7SUFBM0Isc0ZBQTJCOztBQUt0QyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1CO0lBU2pFLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxnQkFBeUM7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsY0FBUyxHQUFZLElBQUksQ0FBQztRQUtULGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUy9DLENBQUM7SUFFRCxlQUFlO1FBQ2QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLENBQ3ZDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO2dCQUNoQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDMUUsaUdBQWlHO2dCQUNqRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3ZCLHVDQUF1Qzt3QkFDdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRywrQ0FBK0MsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxDQUFDLENBQUMsQ0FBQztpQkFDSDtZQUNGLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOztrR0F6Q1cseUJBQXlCLHVCQVU1QixXQUFXOzhEQVZSLHlCQUF5QjtRQU5wQyxvRkFDQzs7UUFEUyxxREFBOEI7O2tEQU03Qix5QkFBeUI7Y0FWckMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7NENBS2lDO2FBQzNDOztzQkFZRSxNQUFNO3VCQUFDLFdBQVc7O2tCQUhuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtZ29vZ2xlLXRhZy1tYW5hZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0PCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cblx0XHQ8bm9zY3JpcHQgKm5nSWY9XCJ1c2VJZnJhbWUgJiYgZGF0YUxheWVyXCI+XG5cdFx0XHQ8aWZyYW1lIFtzcmNdPVwiaWZyYW1lVXJsIHwgc2FmZVVybFwiIGhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPlxuXHRcdDwvbm9zY3JpcHQ+XG5cdDwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHR1c2VJZnJhbWU6IGJvb2xlYW4gPSB0cnVlO1xuXHRpZDogc3RyaW5nO1xuXHRpZnJhbWVVcmw6IHN0cmluZztcblx0ZGF0YUxheWVyOiBhbnlbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBhZ2VWaWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBnb29nbGVUYWdNYW5hZ2VyOiBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdFx0ZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0KS5zdWJzY3JpYmUoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gYCR7dGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLm9yaWdpbn0ke2UudXJsQWZ0ZXJSZWRpcmVjdHN9YDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQuTmF2aWdhdGlvbkVuZCcsIGUuaWQsIGUudXJsLCBlLnVybEFmdGVyUmVkaXJlY3RzLCB1cmwpO1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoZGF0YUxheWVyID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhTGF5ZXInLCBkYXRhTGF5ZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5pZCA9IHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vcHRpb25zLmlkO1xuXHRcdFx0XHRcdFx0dGhpcy5pZnJhbWVVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD0ke3RoaXMuaWR9YDtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyID0gZGF0YUxheWVyO1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuIl19