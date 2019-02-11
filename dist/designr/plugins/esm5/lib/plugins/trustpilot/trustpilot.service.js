/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
var TrustPilotConfig = /** @class */ (function () {
    function TrustPilotConfig() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
    return TrustPilotConfig;
}());
export { TrustPilotConfig };
if (false) {
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitId;
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitName;
}
var TrustPilotService = /** @class */ (function () {
    function TrustPilotService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    TrustPilotService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    TrustPilotService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
                var src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.Trustpilot = window['Trustpilot'];
                    return _this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    };
    TrustPilotService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TrustPilotService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ TrustPilotService.ngInjectableDef = i0.defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.OnceService)); }, token: TrustPilotService, providedIn: "root" });
    return TrustPilotService;
}());
export { TrustPilotService };
if (false) {
    /** @type {?} */
    TrustPilotService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot$;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtRQUNDLG1CQUFjLEdBQVcsMEJBQTBCLENBQUM7UUFDcEQscUJBQWdCLEdBQVcsd0JBQXdCLENBQUM7SUFDckQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSwwQ0FBb0Q7O0lBQ3BELDRDQUFvRDs7QUFHckQ7SUFTQywyQkFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsV0FBd0I7UUFGSCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDOzs7OztJQUVPLGdDQUFJOzs7O0lBQVo7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7O29FQUVnRTs7Ozs7OztJQUVoRSxnQ0FBSTs7Ozs7O0lBQUo7UUFBQSxpQkFvQkM7UUFuQkEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7aUJBQU07O29CQUNBLEdBQUcsR0FBRyx1RUFBdUU7Z0JBQ25GLDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxVQUFBLENBQUM7b0JBQ0osS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOztnQkFoREQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs2Q0FRRSxNQUFNLFNBQUMsV0FBVztnQkFqQlosY0FBYztnQkFIZCxXQUFXOzs7NEJBSHBCO0NBK0RDLEFBbERELElBa0RDO1NBL0NZLGlCQUFpQjs7O0lBRTdCLG9DQUFpQzs7Ozs7SUFDakMsdUNBQXdCOzs7OztJQUN4Qix3Q0FBcUM7Ozs7O0lBR3BDLHVDQUErQzs7Ozs7SUFDL0MsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RDb25maWcge1xuXHRidXNpbmVzc3VuaXRJZDogc3RyaW5nID0gJzU4ZTI1M2FiMDAwMGZmMDAwNTlmYzBmZSc7XG5cdGJ1c2luZXNzdW5pdE5hbWU6IHN0cmluZyA9ICd3d3cuZXVyb3NwaW4tdmlhZ2dpLml0Jztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xuXHRwcml2YXRlIFRydXN0cGlsb3Q6IGFueTtcblx0cHJpdmF0ZSBUcnVzdHBpbG90JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ1c3RQaWxvdFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMudHJ1c3RQaWxvdCcpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBUcnVzdFBpbG90Q29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90KTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBUcnVzdFBpbG90Q29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLlRydXN0cGlsb3QpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuVHJ1c3RwaWxvdCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuVHJ1c3RwaWxvdCQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93aWRnZXQudHJ1c3RwaWxvdC5jb20vYm9vdHN0cmFwL3Y1L3RwLndpZGdldC5ib290c3RyYXAubWluLmpzYDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1RydXN0UGlsb3RDb25maWcub25jZScsIHNyYyk7XG5cdFx0XHRcdHRoaXMuVHJ1c3RwaWxvdCQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5UcnVzdHBpbG90ID0gd2luZG93WydUcnVzdHBpbG90J107XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3QkO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==