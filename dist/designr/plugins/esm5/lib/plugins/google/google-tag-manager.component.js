/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.router.events.pipe(takeUntil(this.unsubscribe), filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; }))).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                /** @type {?} */
                var url = "" + _this.pluginsService.options.origin + e.urlAfterRedirects;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (_this.dataLayer) {
                    _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                }
                else {
                    _this.googleTagManager.once().pipe(takeUntil(_this.unsubscribe)).subscribe((/**
                     * @param {?} dataLayer
                     * @return {?}
                     */
                    function (dataLayer) {
                        // console.log('dataLayer', dataLayer);
                        _this.id = _this.googleTagManager.options.id;
                        _this.iframeUrl = "https://www.googletagmanager.com/ns.html?id=" + _this.id;
                        _this.dataLayer = dataLayer;
                        _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    }));
                }
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQVUrQyxxREFBbUI7SUFTakUsbUNBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxnQkFBeUM7UUFKbEQsWUFNQyxpQkFBTyxTQUNQO1FBTjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQVhsRCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBS1QsY0FBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0lBUy9DLENBQUM7Ozs7SUFFRCxtREFBZTs7O0lBQWY7UUFBQSxpQkF1QkM7UUF0QkEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMzQixNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFlBQVksYUFBYSxFQUExQixDQUEwQixFQUFDLENBQ3ZDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsQ0FBZ0I7O29CQUN0QixHQUFHLEdBQUcsS0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGlCQUFtQjtnQkFDekUsaUdBQWlHO2dCQUNqRyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO2lCQUN2RDtxQkFBTTtvQkFDTixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNoQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7b0JBQUMsVUFBQSxTQUFTO3dCQUNwQix1Q0FBdUM7d0JBQ3ZDLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsaURBQStDLEtBQUksQ0FBQyxFQUFJLENBQUM7d0JBQzFFLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO3dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztvQkFDeEQsQ0FBQyxFQUFDLENBQUM7aUJBQ0g7WUFDRixDQUFDLEVBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7Z0JBbkRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUscVJBS2lDO2lCQUMzQzs7Ozs2Q0FZRSxNQUFNLFNBQUMsV0FBVztnQkF2QlosY0FBYztnQkFIQyxNQUFNO2dCQUlyQix1QkFBdUI7OzsyQkFtQjlCLE1BQU07O0lBb0NSLGdDQUFDO0NBQUEsQUFyREQsQ0FVK0MsbUJBQW1CLEdBMkNqRTtTQTNDWSx5QkFBeUI7OztJQUVyQyw4Q0FBMEI7O0lBQzFCLHVDQUFXOztJQUNYLDhDQUFrQjs7SUFDbEIsOENBQWlCOztJQUVqQiw2Q0FBK0M7Ozs7O0lBRzlDLCtDQUErQzs7Ozs7SUFDL0MsbURBQXNDOzs7OztJQUN0QywyQ0FBc0I7Ozs7O0lBQ3RCLHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWdvb2dsZS10YWctbWFuYWdlcicsXG5cdHRlbXBsYXRlOiBgXG5cdDwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XG5cdFx0PG5vc2NyaXB0ICpuZ0lmPVwidXNlSWZyYW1lICYmIGRhdGFMYXllclwiPlxuXHRcdFx0PGlmcmFtZSBbc3JjXT1cImlmcmFtZVVybCB8IHNhZmVVcmxcIiBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT5cblx0XHQ8L25vc2NyaXB0PlxuXHQ8IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5gLFxufSlcblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0dXNlSWZyYW1lOiBib29sZWFuID0gdHJ1ZTtcblx0aWQ6IHN0cmluZztcblx0aWZyYW1lVXJsOiBzdHJpbmc7XG5cdGRhdGFMYXllcjogYW55W107XG5cblx0QE91dHB1dCgpIHB1YmxpYyBwYWdlVmlldyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgZ29vZ2xlVGFnTWFuYWdlcjogR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRcdGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcblx0XHRcdCkuc3Vic2NyaWJlKChlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3RoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5vcmlnaW59JHtlLnVybEFmdGVyUmVkaXJlY3RzfWA7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50Lk5hdmlnYXRpb25FbmQnLCBlLmlkLCBlLnVybCwgZS51cmxBZnRlclJlZGlyZWN0cywgdXJsKTtcblx0XHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vbmNlKCkucGlwZShcblx0XHRcdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0XHRcdCkuc3Vic2NyaWJlKGRhdGFMYXllciA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZGF0YUxheWVyJywgZGF0YUxheWVyKTtcblx0XHRcdFx0XHRcdHRoaXMuaWQgPSB0aGlzLmdvb2dsZVRhZ01hbmFnZXIub3B0aW9ucy5pZDtcblx0XHRcdFx0XHRcdHRoaXMuaWZyYW1lVXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9JHt0aGlzLmlkfWA7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcblx0XHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==