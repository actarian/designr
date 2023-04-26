/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.Trustpilot$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    _this.Trustpilot = window['Trustpilot'];
                    return _this.Trustpilot;
                })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtRQUNDLG1CQUFjLEdBQVcsMEJBQTBCLENBQUM7UUFDcEQscUJBQWdCLEdBQVcsd0JBQXdCLENBQUM7SUFDckQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSwwQ0FBb0Q7O0lBQ3BELDRDQUFvRDs7QUFHckQ7SUFTQywyQkFDOEIsVUFBa0IsRUFDdkMsY0FBOEIsRUFDOUIsV0FBd0I7UUFGSCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUVoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDOzs7OztJQUVPLGdDQUFJOzs7O0lBQVo7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7O29FQUVnRTs7Ozs7OztJQUVoRSxnQ0FBSTs7Ozs7O0lBQUo7UUFBQSxpQkFvQkM7UUFuQkEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7aUJBQU07O29CQUNBLEdBQUcsR0FBRyx1RUFBdUU7Z0JBQ25GLDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUc7Ozs7Z0JBQUMsVUFBQSxDQUFDO29CQUNKLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLENBQUMsRUFBQyxDQUNGLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBaERELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBakJaLGNBQWM7Z0JBSGQsV0FBVzs7OzRCQUhwQjtDQStEQyxBQWxERCxJQWtEQztTQS9DWSxpQkFBaUI7OztJQUU3QixvQ0FBaUM7Ozs7O0lBQ2pDLHVDQUF3Qjs7Ozs7SUFDeEIsd0NBQXFDOzs7OztJQUdwQyx1Q0FBK0M7Ozs7O0lBQy9DLDJDQUFzQzs7Ozs7SUFDdEMsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdENvbmZpZyB7XHJcblx0YnVzaW5lc3N1bml0SWQ6IHN0cmluZyA9ICc1OGUyNTNhYjAwMDBmZjAwMDU5ZmMwZmUnO1xyXG5cdGJ1c2luZXNzdW5pdE5hbWU6IHN0cmluZyA9ICd3d3cuZXVyb3NwaW4tdmlhZ2dpLml0JztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdFNlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgb3B0aW9uczogVHJ1c3RQaWxvdENvbmZpZztcclxuXHRwcml2YXRlIFRydXN0cGlsb3Q6IGFueTtcclxuXHRwcml2YXRlIFRydXN0cGlsb3QkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcclxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBUcnVzdFBpbG90Q29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90KTtcclxuXHR9XHJcblxyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQqICBjYWxsIFRydXN0UGlsb3RDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcclxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLlRydXN0cGlsb3QpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5UcnVzdHBpbG90KTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLlRydXN0cGlsb3QkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd2lkZ2V0LnRydXN0cGlsb3QuY29tL2Jvb3RzdHJhcC92NS90cC53aWRnZXQuYm9vdHN0cmFwLm1pbi5qc2A7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1RydXN0UGlsb3RDb25maWcub25jZScsIHNyYyk7XHJcblx0XHRcdFx0dGhpcy5UcnVzdHBpbG90JCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcclxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5UcnVzdHBpbG90ID0gd2luZG93WydUcnVzdHBpbG90J107XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3Q7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==