/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { of } from 'rxjs';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';
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
            this.router.events.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof NavigationEnd; })), switchMap((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                /** @type {?} */
                var url = "" + _this.pluginsService.options.origin + e.urlAfterRedirects;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (_this.dataLayer && _this.iframeUrl) {
                    _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    return of(null);
                }
                else {
                    return _this.googleTagManager.once().pipe(tap((/**
                     * @param {?} dataLayer
                     * @return {?}
                     */
                    function (dataLayer) {
                        // console.log('GoogleTagManagerComponent.dataLayer', dataLayer);
                        _this.id = _this.googleTagManager.options.id;
                        _this.iframeUrl = "https://www.googletagmanager.com/ns.html?id=" + _this.id;
                        _this.dataLayer = dataLayer;
                        _this.pageView.emit({ dataLayer: _this.dataLayer, url: url });
                    })));
                }
            })), takeUntil(this.unsubscribe)).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFCLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkU7SUFVK0MscURBQW1CO0lBU2pFLG1DQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixNQUFjLEVBQ2QsZ0JBQXlDO1FBSmxELFlBTUMsaUJBQU8sU0FDUDtRQU42QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsZUFBUyxHQUFZLElBQUksQ0FBQztRQUtULGNBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQVMvQyxDQUFDOzs7O0lBRUQsbURBQWU7OztJQUFmO1FBQUEsaUJBeUJDO1FBeEJBLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdEIsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxZQUFZLGFBQWEsRUFBMUIsQ0FBMEIsRUFBQyxFQUN2QyxTQUFTOzs7O1lBQUMsVUFBQyxDQUFnQjs7b0JBQ3BCLEdBQUcsR0FBRyxLQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsaUJBQW1CO2dCQUN6RSxpR0FBaUc7Z0JBQ2pHLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hCO3FCQUFNO29CQUNOLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDdkMsR0FBRzs7OztvQkFBQyxVQUFBLFNBQVM7d0JBQ1osaUVBQWlFO3dCQUNqRSxLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUMzQyxLQUFJLENBQUMsU0FBUyxHQUFHLGlEQUErQyxLQUFJLENBQUMsRUFBSSxDQUFDO3dCQUMxRSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7b0JBQ3hELENBQUMsRUFBQyxDQUNGLENBQUM7aUJBQ0Y7WUFDRixDQUFDLEVBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2Q7SUFDRixDQUFDOztnQkFyREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxxUkFLaUM7aUJBQzNDOzs7OzZDQVlFLE1BQU0sU0FBQyxXQUFXO2dCQXZCWixjQUFjO2dCQUpDLE1BQU07Z0JBS3JCLHVCQUF1Qjs7OzJCQW1COUIsTUFBTTs7SUFzQ1IsZ0NBQUM7Q0FBQSxBQXZERCxDQVUrQyxtQkFBbUIsR0E2Q2pFO1NBN0NZLHlCQUF5Qjs7O0lBRXJDLDhDQUEwQjs7SUFDMUIsdUNBQVc7O0lBQ1gsOENBQWtCOztJQUNsQiw4Q0FBaUI7O0lBRWpCLDZDQUErQzs7Ozs7SUFHOUMsK0NBQStDOzs7OztJQUMvQyxtREFBc0M7Ozs7O0lBQ3RDLDJDQUFzQjs7Ozs7SUFDdEIscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPdXRwdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjb3JlLWdvb2dsZS10YWctbWFuYWdlcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxyXG5cdFx0PG5vc2NyaXB0ICpuZ0lmPVwidXNlSWZyYW1lICYmIGRhdGFMYXllclwiPlxyXG5cdFx0XHQ8aWZyYW1lIFtzcmNdPVwiaWZyYW1lVXJsIHwgc2FmZVVybFwiIGhlaWdodD1cIjBcIiB3aWR0aD1cIjBcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt2aXNpYmlsaXR5OmhpZGRlblwiPjwvaWZyYW1lPlxyXG5cdFx0PC9ub3NjcmlwdD5cclxuXHQ8IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5gLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5cdHVzZUlmcmFtZTogYm9vbGVhbiA9IHRydWU7XHJcblx0aWQ6IHN0cmluZztcclxuXHRpZnJhbWVVcmw6IHN0cmluZztcclxuXHRkYXRhTGF5ZXI6IGFueVtdO1xyXG5cclxuXHRAT3V0cHV0KCkgcHVibGljIHBhZ2VWaWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBnb29nbGVUYWdNYW5hZ2VyOiBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXHJcblx0XHRcdFx0c3dpdGNoTWFwKChlOiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB1cmwgPSBgJHt0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMub3JpZ2lufSR7ZS51cmxBZnRlclJlZGlyZWN0c31gO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQuTmF2aWdhdGlvbkVuZCcsIGUuaWQsIGUudXJsLCBlLnVybEFmdGVyUmVkaXJlY3RzLCB1cmwpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyICYmIHRoaXMuaWZyYW1lVXJsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZ29vZ2xlVGFnTWFuYWdlci5vbmNlKCkucGlwZShcclxuXHRcdFx0XHRcdFx0XHR0YXAoZGF0YUxheWVyID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50LmRhdGFMYXllcicsIGRhdGFMYXllcik7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmlkID0gdGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9wdGlvbnMuaWQ7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmlmcmFtZVVybCA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPSR7dGhpcy5pZH1gO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIgPSBkYXRhTGF5ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XHJcblx0XHRcdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxyXG5cdFx0XHQpLnN1YnNjcmliZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19