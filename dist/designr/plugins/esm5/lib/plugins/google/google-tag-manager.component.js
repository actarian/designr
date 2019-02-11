/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { filter, takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';
var GoogleTagManagerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GoogleTagManagerComponent, _super);
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
    /**
     * @return {?}
     */
    GoogleTagManagerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(function (e) { return e instanceof NavigationEnd; })).subscribe(function (e) {
                /** @type {?} */
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
    GoogleTagManagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-google-tag-manager',
                    template: "\n\t<!-- Google Tag Manager (noscript) -->\n\t\t<noscript *ngIf=\"useIframe && dataLayer\">\n\t\t\t<iframe [src]=\"iframeUrl | safeUrl\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>\n\t\t</noscript>\n\t<!-- End Google Tag Manager (noscript) -->"
                }] }
    ];
    /** @nocollapse */
    GoogleTagManagerComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: Router },
        { type: GoogleTagManagerService }
    ]; };
    GoogleTagManagerComponent.propDecorators = {
        pageView: [{ type: Output }]
    };
    return GoogleTagManagerComponent;
}(DisposableComponent));
export { GoogleTagManagerComponent };
if (false) {
    /** @type {?} */
    GoogleTagManagerComponent.prototype.useIframe;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.id;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.iframeUrl;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerComponent.prototype.pageView;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerComponent.prototype.googleTagManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQVUrQyxxREFBbUI7SUFTakUsbUNBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxnQkFBeUM7UUFKbEQsWUFNQyxpQkFBTyxTQUNQO1FBTjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQVhsRCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBS1QsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0lBUy9DLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkF1QkM7UUF0QkEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksYUFBYSxFQUExQixDQUEwQixDQUFDLENBQ3ZDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBZ0I7O29CQUN0QixHQUFHLEdBQUcsS0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGlCQUFtQjtnQkFDekUsaUdBQWlHO2dCQUNqRyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO2lCQUN2RDtxQkFBTTtvQkFDTixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNoQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7d0JBQ3BCLHVDQUF1Qzt3QkFDdkMsS0FBSSxDQUFDLEVBQUUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxpREFBK0MsS0FBSSxDQUFDLEVBQUksQ0FBQzt3QkFDMUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxDQUFDLENBQUMsQ0FBQztpQkFDSDtZQUNGLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOztnQkFuREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxxUkFLaUM7aUJBQzNDOzs7OzZDQVlFLE1BQU0sU0FBQyxXQUFXO2dCQXZCWixjQUFjO2dCQUhDLE1BQU07Z0JBSXJCLHVCQUF1Qjs7OzJCQW1COUIsTUFBTTs7SUFvQ1IsZ0NBQUM7Q0FBQSxBQXJERCxDQVUrQyxtQkFBbUIsR0EyQ2pFO1NBM0NZLHlCQUF5Qjs7O0lBRXJDLDhDQUEwQjs7SUFDMUIsdUNBQVc7O0lBQ1gsOENBQWtCOztJQUNsQiw4Q0FBaUI7O0lBRWpCLDZDQUErQzs7Ozs7SUFHOUMsK0NBQStDOzs7OztJQUMvQyxtREFBc0M7Ozs7O0lBQ3RDLDJDQUFzQjs7Ozs7SUFDdEIscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtZ29vZ2xlLXRhZy1tYW5hZ2VyJyxcblx0dGVtcGxhdGU6IGBcblx0PCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cblx0XHQ8bm9zY3JpcHQgKm5nSWY9XCJ1c2VJZnJhbWUgJiYgZGF0YUxheWVyXCI+XG5cdFx0XHQ8aWZyYW1lIFtzcmNdPVwiaWZyYW1lVXJsIHwgc2FmZVVybFwiIGhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPlxuXHRcdDwvbm9zY3JpcHQ+XG5cdDwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPmAsXG59KVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHR1c2VJZnJhbWU6IGJvb2xlYW4gPSB0cnVlO1xuXHRpZDogc3RyaW5nO1xuXHRpZnJhbWVVcmw6IHN0cmluZztcblx0ZGF0YUxheWVyOiBhbnlbXTtcblxuXHRAT3V0cHV0KCkgcHVibGljIHBhZ2VWaWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBnb29nbGVUYWdNYW5hZ2VyOiBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdFx0ZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuXHRcdFx0KS5zdWJzY3JpYmUoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gYCR7dGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLm9yaWdpbn0ke2UudXJsQWZ0ZXJSZWRpcmVjdHN9YDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQuTmF2aWdhdGlvbkVuZCcsIGUuaWQsIGUudXJsLCBlLnVybEFmdGVyUmVkaXJlY3RzLCB1cmwpO1xuXHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9uY2UoKS5waXBlKFxuXHRcdFx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoZGF0YUxheWVyID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdkYXRhTGF5ZXInLCBkYXRhTGF5ZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5pZCA9IHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vcHRpb25zLmlkO1xuXHRcdFx0XHRcdFx0dGhpcy5pZnJhbWVVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vbnMuaHRtbD9pZD0ke3RoaXMuaWR9YDtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyID0gZGF0YUxheWVyO1xuXHRcdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxufVxuIl19