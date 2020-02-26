import { __extends } from "tslib";
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
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(2, 1, ctx_r8.iframeUrl), i0.ɵɵsanitizeResourceUrl);
} }
var GoogleTagManagerComponent = /** @class */ (function (_super) {
    __extends(GoogleTagManagerComponent, _super);
    function GoogleTagManagerComponent(platformId, pluginsService, router, googleTagManager) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pluginsService = pluginsService;
        _this.router = router;
        _this.googleTagManager = googleTagManager;
        _this.useIframe = true;
        _this.pageView = new EventEmitter();
        return _this;
    }
    GoogleTagManagerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) {
                var url = "" + _this.pluginsService.options.origin + e.urlAfterRedirects;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (_this.dataLayer) {
                    _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                }
                else {
                    _this.googleTagManager.once().pipe(takeUntil(_this.unsubscribe)).subscribe(function (dataLayer) {
                        // console.log('dataLayer', dataLayer);
                        _this.id = _this.googleTagManager.options.id;
                        _this.iframeUrl = "https://www.googletagmanager.com/ns.html?id=" + _this.id;
                        _this.dataLayer = dataLayer;
                        _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    });
                }
            });
        }
    };
    GoogleTagManagerComponent.ɵfac = function GoogleTagManagerComponent_Factory(t) { return new (t || GoogleTagManagerComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PluginsService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.GoogleTagManagerService)); };
    GoogleTagManagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GoogleTagManagerComponent, selectors: [["core-google-tag-manager"]], outputs: { pageView: "pageView" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["height", "0", "width", "0", 2, "display", "none", "visibility", "hidden", 3, "src"]], template: function GoogleTagManagerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GoogleTagManagerComponent_noscript_0_Template, 3, 3, "noscript", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.useIframe && ctx.dataLayer);
        } }, directives: [i4.NgIf], pipes: [i5.SafeUrlPipe], encapsulation: 2 });
    return GoogleTagManagerComponent;
}(DisposableComponent));
export { GoogleTagManagerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleTagManagerComponent, [{
        type: Component,
        args: [{
                selector: 'core-google-tag-manager',
                template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->",
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.Router }, { type: i3.GoogleTagManagerService }]; }, { pageView: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztJQU1yRSxnQ0FDQztJQUFBLDRCQUF5Rzs7SUFDMUcsaUJBQVc7OztJQURGLGVBQTJCO0lBQTNCLHNGQUEyQjs7QUFMdEM7SUFVK0MsNkNBQW1CO0lBU2pFLG1DQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixNQUFjLEVBQ2QsZ0JBQXlDO1FBSmxELFlBTUMsaUJBQU8sU0FDUDtRQU42QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsZUFBUyxHQUFZLElBQUksQ0FBQztRQUtULGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQVMvQyxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUFBLGlCQXVCQztRQXRCQSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsWUFBWSxhQUFhLEVBQTFCLENBQTBCLENBQUMsQ0FDdkMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFnQjtnQkFDNUIsSUFBTSxHQUFHLEdBQUcsS0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGlCQUFtQixDQUFDO2dCQUMxRSxpR0FBaUc7Z0JBQ2pHLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7aUJBQ3ZEO3FCQUFNO29CQUNOLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUzt3QkFDcEIsdUNBQXVDO3dCQUN2QyxLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUMzQyxLQUFJLENBQUMsU0FBUyxHQUFHLGlEQUErQyxLQUFJLENBQUMsRUFBSSxDQUFDO3dCQUMxRSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7b0JBQ3hELENBQUMsQ0FBQyxDQUFDO2lCQUNIO1lBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7c0dBekNXLHlCQUF5Qix1QkFVNUIsV0FBVztrRUFWUix5QkFBeUI7WUFOcEMsb0ZBQ0M7O1lBRFMscURBQThCOztvQ0FaMUM7Q0E2REMsQUFyREQsQ0FVK0MsbUJBQW1CLEdBMkNqRTtTQTNDWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQVZyQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHFSQUtpQzthQUMzQzs7c0JBWUUsTUFBTTt1QkFBQyxXQUFXOztrQkFIbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWdvb2dsZS10YWctbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cdDwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XG5cdFx0PG5vc2NyaXB0ICpuZ0lmPVwidXNlSWZyYW1lICYmIGRhdGFMYXllclwiPlxuXHRcdFx0PGlmcmFtZSBbc3JjXT1cImlmcmFtZVVybCB8IHNhZmVVcmxcIiBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT5cblx0XHQ8L25vc2NyaXB0PlxuXHQ8IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5gLFxufSlcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0dXNlSWZyYW1lOiBib29sZWFuID0gdHJ1ZTtcblx0aWQ6IHN0cmluZztcblx0aWZyYW1lVXJsOiBzdHJpbmc7XG5cdGRhdGFMYXllcjogYW55W107XG5cblx0QE91dHB1dCgpIHB1YmxpYyBwYWdlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgZ29vZ2xlVGFnTWFuYWdlcjogR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRcdGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcblx0XHRcdCkuc3Vic2NyaWJlKChlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3RoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5vcmlnaW59JHtlLnVybEFmdGVyUmVkaXJlY3RzfWA7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50Lk5hdmlnYXRpb25FbmQnLCBlLmlkLCBlLnVybCwgZS51cmxBZnRlclJlZGlyZWN0cywgdXJsKTtcblx0XHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vbmNlKCkucGlwZShcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0XHRcdCkuc3Vic2NyaWJlKGRhdGFMYXllciA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZGF0YUxheWVyJywgZGF0YUxheWVyKTtcblx0XHRcdFx0XHRcdHRoaXMuaWQgPSB0aGlzLmdvb2dsZVRhZ01hbmFnZXIub3B0aW9ucy5pZDtcblx0XHRcdFx0XHRcdHRoaXMuaWZyYW1lVXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9JHt0aGlzLmlkfWA7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcblx0XHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==