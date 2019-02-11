/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { filter, takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';
export class GoogleTagManagerComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} router
     * @param {?} googleTagManager
     */
    constructor(platformId, pluginsService, router, googleTagManager) {
        super();
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.router = router;
        this.googleTagManager = googleTagManager;
        this.useIframe = true;
        this.pageView = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.router.events.pipe(takeUntil(this.unsubscribe), filter(e => e instanceof NavigationEnd)).subscribe((e) => {
                /** @type {?} */
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
GoogleTagManagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'core-google-tag-manager',
                template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`
            }] }
];
/** @nocollapse */
GoogleTagManagerComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: Router },
    { type: GoogleTagManagerService }
];
GoogleTagManagerComponent.propDecorators = {
    pageView: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBWXZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7Ozs7Ozs7SUFTakUsWUFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLGdCQUF5QztRQUVqRCxLQUFLLEVBQUUsQ0FBQztRQUxxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQVhsRCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBS1QsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTL0MsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxhQUFhLENBQUMsQ0FDdkMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFFLEVBQUU7O3NCQUMxQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO2dCQUN6RSxpR0FBaUc7Z0JBQ2pHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUN2RDtxQkFBTTtvQkFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDdkIsdUNBQXVDO3dCQUN2QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLCtDQUErQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO3dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3hELENBQUMsQ0FBQyxDQUFDO2lCQUNIO1lBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs0Q0FLaUM7YUFDM0M7Ozs7eUNBWUUsTUFBTSxTQUFDLFdBQVc7WUF2QlosY0FBYztZQUhDLE1BQU07WUFJckIsdUJBQXVCOzs7dUJBbUI5QixNQUFNOzs7O0lBTFAsOENBQTBCOztJQUMxQix1Q0FBVzs7SUFDWCw4Q0FBa0I7O0lBQ2xCLDhDQUFpQjs7SUFFakIsNkNBQStDOzs7OztJQUc5QywrQ0FBK0M7Ozs7O0lBQy9DLG1EQUFzQzs7Ozs7SUFDdEMsMkNBQXNCOzs7OztJQUN0QixxREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPdXRwdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1nb29nbGUtdGFnLW1hbmFnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8IS0tIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxuXHRcdDxub3NjcmlwdCAqbmdJZj1cInVzZUlmcmFtZSAmJiBkYXRhTGF5ZXJcIj5cblx0XHRcdDxpZnJhbWUgW3NyY109XCJpZnJhbWVVcmwgfCBzYWZlVXJsXCIgaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+XG5cdFx0PC9ub3NjcmlwdD5cblx0PCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+YCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHVzZUlmcmFtZTogYm9vbGVhbiA9IHRydWU7XG5cdGlkOiBzdHJpbmc7XG5cdGlmcmFtZVVybDogc3RyaW5nO1xuXHRkYXRhTGF5ZXI6IGFueVtdO1xuXG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFnZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGdvb2dsZVRhZ01hbmFnZXI6IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnJvdXRlci5ldmVudHMucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0XHRmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG5cdFx0XHQpLnN1YnNjcmliZSgoZTogTmF2aWdhdGlvbkVuZCkgPT4ge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBgJHt0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMub3JpZ2lufSR7ZS51cmxBZnRlclJlZGlyZWN0c31gO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudC5OYXZpZ2F0aW9uRW5kJywgZS5pZCwgZS51cmwsIGUudXJsQWZ0ZXJSZWRpcmVjdHMsIHVybCk7XG5cdFx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmdvb2dsZVRhZ01hbmFnZXIub25jZSgpLnBpcGUoXG5cdFx0XHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdFx0XHQpLnN1YnNjcmliZShkYXRhTGF5ZXIgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGFMYXllcicsIGRhdGFMYXllcik7XG5cdFx0XHRcdFx0XHR0aGlzLmlkID0gdGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9wdGlvbnMuaWQ7XG5cdFx0XHRcdFx0XHR0aGlzLmlmcmFtZVVybCA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPSR7dGhpcy5pZH1gO1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIgPSBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VWaWV3LmVtaXQoeyBkYXRhTGF5ZXI6IHRoaXMuZGF0YUxheWVyLCB1cmwgfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=