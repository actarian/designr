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
var GoogleTagManagerPageViewEvent = /** @class */ (function () {
    function GoogleTagManagerPageViewEvent() {
    }
    return GoogleTagManagerPageViewEvent;
}());
export { GoogleTagManagerPageViewEvent };
if (false) {
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.dataLayer;
    /** @type {?} */
    GoogleTagManagerPageViewEvent.prototype.url;
}
var GoogleTagManagerConfig = /** @class */ (function () {
    function GoogleTagManagerConfig() {
    }
    return GoogleTagManagerConfig;
}());
export { GoogleTagManagerConfig };
if (false) {
    /** @type {?} */
    GoogleTagManagerConfig.prototype.id;
}
var GoogleTagManagerService = /** @class */ (function () {
    function GoogleTagManagerService(platformId, pluginsService, zone, onceService, logger) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.zone = zone;
        this.onceService = onceService;
        this.logger = logger;
        this.initialized = false;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    GoogleTagManagerService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
            throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
        }
        this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call GoogleTagManagerConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    GoogleTagManagerService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call GoogleTagManagerConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.dataLayer && this.initialized) {
                return of(this.dataLayer);
            }
            else if (this.dataLayer$) {
                return this.dataLayer$;
            }
            else {
                window['dataLayer'] = window['dataLayer'] || [];
                /** @type {?} */
                var id = this.options.id;
                /** @type {?} */
                var src = "https://www.googletagmanager.com/gtm.js?id=" + id;
                /** @type {?} */
                var dataLayer_1 = window['dataLayer'];
                dataLayer_1.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                // console.log('GoogleTagManagerConfig.once', src, dataLayer);
                this.dataLayer$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    // console.log('GoogleTagManagerConfig.dataLayer', dataLayer, x);
                    _this.dataLayer = dataLayer_1;
                    _this.initialized = true;
                    return dataLayer_1;
                })));
                return this.dataLayer$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    GoogleTagManagerService.prototype.push = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (_this.dataLayer) {
                _this.dataLayer.push(payload);
                _this.logger.log('GoogleTagManagerConfig.push', payload);
            }
            else {
                _this.once().pipe(first()).subscribe((/**
                 * @param {?} dataLayer
                 * @return {?}
                 */
                function (dataLayer) {
                    if (_this.dataLayer) {
                        _this.dataLayer.push(payload);
                        _this.logger.log('GoogleTagManagerConfig.push', payload);
                    }
                }));
            }
        }));
    };
    GoogleTagManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleTagManagerService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: NgZone },
        { type: OnceService },
        { type: Logger }
    ]; };
    /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i0.NgZone), i0.inject(i2.OnceService), i0.inject(i2.Logger)); }, token: GoogleTagManagerService, providedIn: "root" });
    return GoogleTagManagerService;
}());
export { GoogleTagManagerService };
if (false) {
    /** @type {?} */
    GoogleTagManagerService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    GoogleTagManagerService.prototype.initialized;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxvQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0RBQWlCOztJQUNqQiw0Q0FBWTs7QUFHYjtJQUFBO0lBRUEsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxvQ0FBVzs7QUFHWjtJQVdDLGlDQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixJQUFZLEVBQ1osV0FBd0IsRUFDeEIsTUFBYztRQUpPLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVGYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFXcEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7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RSxNQUFNLFNBQUMsV0FBVztnQkF2QlosY0FBYztnQkFKTSxNQUFNO2dCQUNsQixXQUFXO2dCQUFuQixNQUFNOzs7a0NBSGY7Q0E4RkMsQUE3RUQsSUE2RUM7U0ExRVksdUJBQXVCOzs7SUFFbkMsMENBQXVDOzs7OztJQUV2Qyw4Q0FBcUM7Ozs7O0lBQ3JDLDRDQUF5Qjs7Ozs7SUFDekIsNkNBQXNDOzs7OztJQUdyQyw2Q0FBK0M7Ozs7O0lBQy9DLGlEQUFzQzs7Ozs7SUFDdEMsdUNBQW9COzs7OztJQUNwQiw4Q0FBZ0M7Ozs7O0lBQ2hDLHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dnZXIsIE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclBhZ2VWaWV3RXZlbnQge1xyXG5cdGRhdGFMYXllcjogYW55W107XHJcblx0dXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnIHtcclxuXHRpZDogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnO1xyXG5cclxuXHRwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBkYXRhTGF5ZXI6IGFueVtdO1xyXG5cdHByaXZhdGUgZGF0YUxheWVyJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcclxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxyXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGxvZ2dlcjogTG9nZ2VyLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLmdvb2dsZVRhZ01hbmFnZXIpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdHb29nbGVUYWdNYW5hZ2VyU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5nb29nbGVUYWdNYW5hZ2VyJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5nb29nbGVUYWdNYW5hZ2VyKTtcclxuXHR9XHJcblxyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQqICBjYWxsIEdvb2dsZVRhZ01hbmFnZXJDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcclxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyICYmIHRoaXMuaW5pdGlhbGl6ZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5kYXRhTGF5ZXIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF0YUxheWVyJCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmRhdGFMYXllciQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0d2luZG93WydkYXRhTGF5ZXInXSA9IHdpbmRvd1snZGF0YUxheWVyJ10gfHwgW107XHJcblx0XHRcdFx0Y29uc3QgaWQgPSB0aGlzLm9wdGlvbnMuaWQ7XHJcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0ke2lkfWA7XHJcblx0XHRcdFx0Y29uc3QgZGF0YUxheWVyID0gd2luZG93WydkYXRhTGF5ZXInXTtcclxuXHRcdFx0XHRkYXRhTGF5ZXIucHVzaCh7ICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgZXZlbnQ6ICdndG0uanMnIH0pO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLm9uY2UnLCBzcmMsIGRhdGFMYXllcik7XHJcblx0XHRcdFx0dGhpcy5kYXRhTGF5ZXIkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5kYXRhTGF5ZXInLCBkYXRhTGF5ZXIsIHgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFMYXllciA9IGRhdGFMYXllcjtcclxuXHRcdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhTGF5ZXI7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YUxheWVyJDtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVzaChwYXlsb2FkOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGFMYXllcikge1xyXG5cdFx0XHRcdHRoaXMuZGF0YUxheWVyLnB1c2gocGF5bG9hZCk7XHJcblx0XHRcdFx0dGhpcy5sb2dnZXIubG9nKCdHb29nbGVUYWdNYW5hZ2VyQ29uZmlnLnB1c2gnLCBwYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm9uY2UoKS5waXBlKFxyXG5cdFx0XHRcdFx0Zmlyc3QoKSxcclxuXHRcdFx0XHQpLnN1YnNjcmliZShkYXRhTGF5ZXIgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YUxheWVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YUxheWVyLnB1c2gocGF5bG9hZCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmxvZygnR29vZ2xlVGFnTWFuYWdlckNvbmZpZy5wdXNoJywgcGF5bG9hZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLypcclxuPCEtLSBHb29nbGUgVGFnIE1hbmFnZXIgLS0+XHJcbjxzY3JpcHQ+KGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxyXG5uZXcgRGF0ZSgpLmdldFRpbWUoKSxldmVudDonZ3RtLmpzJ30pO3ZhciBmPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF0sXHJcbmo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPVxyXG4naHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XHJcbn0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnZGF0YUxheWVyJywnR1RNLVRTMkg2VkcnKTs8L3NjcmlwdD5cclxuPCEtLSBFbmQgR29vZ2xlIFRhZyBNYW5hZ2VyIC0tPlxyXG4qL1xyXG5cclxuLypcclxuPCEtLSBhZnRlciA8Ym9keT4gLS0+XHJcbjwhLS0gR29vZ2xlIFRhZyBNYW5hZ2VyIChub3NjcmlwdCkgLS0+XHJcbjxub3NjcmlwdD48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9R1RNLVRTMkg2VkdcIlxyXG5oZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT48L25vc2NyaXB0PlxyXG48IS0tIEVuZCBHb29nbGUgVGFnIE1hbmFnZXIgKG5vc2NyaXB0KSAtLT5cclxuKi9cclxuXHJcbi8qXHJcbndpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICdldmVudCc6ICdQYWdldmlldycsXHJcbiAndXJsJzogJ2h0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3NvbWV0aGluZy9jb250YWN0LXVzJ1xyXG4gfSk7XHJcbiovXHJcblxyXG5cclxuIl19