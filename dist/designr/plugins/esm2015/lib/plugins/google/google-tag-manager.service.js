/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Logger, OnceService } from '@designr/core';
import { of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
export class GoogleTagManagerPageViewEvent {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.url;
}
export class GoogleTagManagerConfig {
}
if (false) {
    /** @type {?} */
    GoogleTagManagerConfig.prototype.id;
}
export class GoogleTagManagerService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} zone
     * @param {?} onceService
     * @param {?} logger
     */
    constructor(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                const id = this.options.id;
                /** @type {?} */
                const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
                /** @type {?} */
                const dataLayer = window['dataLayer'];
                dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    // console.log('dataLayer', dataLayer, x);
                    this.dataLayer = dataLayer;
                    return dataLayer;
                })));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    push(payload) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.dataLayer) {
                this.dataLayer.push(payload);
                this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                this.once().pipe(first()).subscribe((/**
                 * @param {?} dataLayer
                 * @return {?}
                 */
                dataLayer => {
                    if (this.dataLayer) {
                        this.dataLayer.push(payload);
                        this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                }));
            }
        }));
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: NgZone },
    { type: OnceService },
    { type: Logger }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i2.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
if (false) {
    /** @type {?} */
    GoogleTagManagerService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.dataLayer$;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.onceService;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLDZCQUE2QjtDQUd6Qzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYixNQUFNLE9BQU8sc0JBQXNCO0NBRWxDOzs7SUFEQSxvQ0FBVzs7QUFNWixNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7OztJQU9uQyxZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9B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Q3RDLHVDQUFvQjs7Ozs7SUFDcEIsOENBQWdDOzs7OztJQUNoQyx5Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyLCBPbmNlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclBhZ2VWaWV3RXZlbnQge1xuXHRkYXRhTGF5ZXI6IGFueVtdO1xuXHR1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEdvb2dsZVRhZ01hbmFnZXJDb25maWcge1xuXHRpZDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IEdvb2dsZVRhZ01hbmFnZXJDb25maWc7XG5cblx0cHJpdmF0ZSBkYXRhTGF5ZXI6IGFueVtdO1xuXHRwcml2YXRlIGRhdGFMYXllciQ6IE9ic2VydmFibGU8YW55W10+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbG9nZ2VyOiBMb2dnZXIsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMuZ29vZ2xlVGFnTWFuYWdlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVUYWdNYW5hZ2VyU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5nb29nbGVUYWdNYW5hZ2VyJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IEdvb2dsZVRhZ01hbmFnZXJDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZVRhZ01hbmFnZXIpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIEdvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhTGF5ZXIpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZGF0YUxheWVyKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXRhTGF5ZXIkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGFMYXllciQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dbJ2RhdGFMYXllciddID0gd2luZG93WydkYXRhTGF5ZXInXSB8fCBbXTtcblx0XHRcdFx0Y29uc3QgaWQgPSB0aGlzLm9wdGlvbnMuaWQ7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JHtpZH1gO1xuXHRcdFx0XHRjb25zdCBkYXRhTGF5ZXIgPSB3aW5kb3dbJ2RhdGFMYXllciddO1xuXHRcdFx0XHRkYXRhTGF5ZXIucHVzaCh7ICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgZXZlbnQ6ICdndG0uanMnIH0pO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5vbmNlJywgc3JjLCBkYXRhTGF5ZXIpO1xuXHRcdFx0XHR0aGlzLmRhdGFMYXllciQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2RhdGFMYXllcicsIGRhdGFMYXllciwgeCk7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhTGF5ZXI7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YUxheWVyJDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHB1c2gocGF5bG9hZDogYW55KTogdm9pZCB7XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHR0aGlzLmRhdGFMYXllci5wdXNoKHBheWxvYWQpO1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5sb2coJ0dvb2dsZVRhZ01hbmFnZXJDb25maWcucHVzaCcsIHBheWxvYWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vbmNlKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZShkYXRhTGF5ZXIgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xuXHRcdFx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIucHVzaChwYXlsb2FkKTtcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5wdXNoJywgcGF5bG9hZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG4vKlxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgLS0+XG48c2NyaXB0PihmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0Jzpcbm5ldyBEYXRlKCkuZ2V0VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcbmo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPVxuJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5ZXInLCdHVE0tVFMySDZWRycpOzwvc2NyaXB0PlxuPCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPlxuKi9cblxuLypcbjwhLS0gYWZ0ZXIgPGJvZHk+IC0tPlxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cbjxub3NjcmlwdD48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9R1RNLVRTMkg2VkdcIlxuaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+PC9ub3NjcmlwdD5cbjwhLS0gRW5kIEdvb2dsZSBUYWcgTWFuYWdlciAobm9zY3JpcHQpIC0tPlxuKi9cblxuLypcbndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XG4gJ2V2ZW50JzogJ1BhZ2V2aWV3JyxcbiAndXJsJzogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3NvbWV0aGluZy9jb250YWN0LXVzJ1xuIH0pO1xuKi9cblxuXG4iXX0=