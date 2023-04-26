/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { of } from 'rxjs';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';
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
            this.router.events.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof NavigationEnd)), switchMap((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                /** @type {?} */
                const url = `${this.pluginsService.options.origin}${e.urlAfterRedirects}`;
                // console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
                if (this.dataLayer && this.iframeUrl) {
                    this.pageView.emit({ dataLayer: this.dataLayer, url });
                    return of(null);
                }
                else {
                    return this.googleTagManager.once().pipe(tap((/**
                     * @param {?} dataLayer
                     * @return {?}
                     */
                    dataLayer => {
                        // console.log('GoogleTagManagerComponent.dataLayer', dataLayer);
                        this.id = this.googleTagManager.options.id;
                        this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
                        this.dataLayer = dataLayer;
                        this.pageView.emit({ dataLayer: this.dataLayer, url });
                    })));
                }
            })), takeUntil(this.unsubscribe)).subscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BsdWdpbnMvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVl2RSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsbUJBQW1COzs7Ozs7O0lBU2pFLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxnQkFBeUM7UUFFakQsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFYbEQsY0FBUyxHQUFZLElBQUksQ0FBQztRQUtULGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBUy9DLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksYUFBYSxFQUFDLEVBQ3ZDLFNBQVM7Ozs7WUFBQyxDQUFDLENBQWdCLEVBQUUsRUFBRTs7c0JBQ3hCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3pFLGlHQUFpRztnQkFDakcsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hCO3FCQUFNO29CQUNOLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDdkMsR0FBRzs7OztvQkFBQyxTQUFTLENBQUMsRUFBRTt3QkFDZixpRUFBaUU7d0JBQ2pFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7d0JBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsK0NBQStDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7d0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztvQkFDeEQsQ0FBQyxFQUFDLENBQ0YsQ0FBQztpQkFDRjtZQUNGLENBQUMsRUFBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDZDtJQUNGLENBQUM7OztZQXJERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs0Q0FLaUM7YUFDM0M7Ozs7eUNBWUUsTUFBTSxTQUFDLFdBQVc7WUF2QlosY0FBYztZQUpDLE1BQU07WUFLckIsdUJBQXVCOzs7dUJBbUI5QixNQUFNOzs7O0lBTFAsOENBQTBCOztJQUMxQix1Q0FBVzs7SUFDWCw4Q0FBa0I7O0lBQ2xCLDhDQUFpQjs7SUFFakIsNkNBQStDOzs7OztJQUc5QywrQ0FBK0M7Ozs7O0lBQy9DLG1EQUFzQzs7Ozs7SUFDdEMsMkNBQXNCOzs7OztJQUN0QixxREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NvcmUtZ29vZ2xlLXRhZy1tYW5hZ2VyJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XHJcblx0XHQ8bm9zY3JpcHQgKm5nSWY9XCJ1c2VJZnJhbWUgJiYgZGF0YUxheWVyXCI+XHJcblx0XHRcdDxpZnJhbWUgW3NyY109XCJpZnJhbWVVcmwgfCBzYWZlVXJsXCIgaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+XHJcblx0XHQ8L25vc2NyaXB0PlxyXG5cdDwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPmAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0dXNlSWZyYW1lOiBib29sZWFuID0gdHJ1ZTtcclxuXHRpZDogc3RyaW5nO1xyXG5cdGlmcmFtZVVybDogc3RyaW5nO1xyXG5cdGRhdGFMYXllcjogYW55W107XHJcblxyXG5cdEBPdXRwdXQoKSBwdWJsaWMgcGFnZVZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGdvb2dsZVRhZ01hbmFnZXI6IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoKGU6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHVybCA9IGAke3RoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5vcmlnaW59JHtlLnVybEFmdGVyUmVkaXJlY3RzfWA7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudC5OYXZpZ2F0aW9uRW5kJywgZS5pZCwgZS51cmwsIGUudXJsQWZ0ZXJSZWRpcmVjdHMsIHVybCk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIgJiYgdGhpcy5pZnJhbWVVcmwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWdlVmlldy5lbWl0KHsgZGF0YUxheWVyOiB0aGlzLmRhdGFMYXllciwgdXJsIH0pO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5nb29nbGVUYWdNYW5hZ2VyLm9uY2UoKS5waXBlKFxyXG5cdFx0XHRcdFx0XHRcdHRhcChkYXRhTGF5ZXIgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQuZGF0YUxheWVyJywgZGF0YUxheWVyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaWQgPSB0aGlzLmdvb2dsZVRhZ01hbmFnZXIub3B0aW9ucy5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaWZyYW1lVXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9JHt0aGlzLmlkfWA7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGFnZVZpZXcuZW1pdCh7IGRhdGFMYXllcjogdGhpcy5kYXRhTGF5ZXIsIHVybCB9KTtcclxuXHRcdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdCkuc3Vic2NyaWJlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=