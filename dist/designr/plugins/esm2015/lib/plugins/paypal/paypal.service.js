/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { from, of } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
export class PayPalConfigStyle {
}
if (false) {
    /** @type {?} */
    PayPalConfigStyle.prototype.label;
    /** @type {?} */
    PayPalConfigStyle.prototype.size;
    /** @type {?} */
    PayPalConfigStyle.prototype.shape;
    /** @type {?} */
    PayPalConfigStyle.prototype.color;
}
export class PayPalConfigClient {
}
if (false) {
    /** @type {?} */
    PayPalConfigClient.prototype.sandbox;
    /** @type {?} */
    PayPalConfigClient.prototype.production;
}
export class PayPalConfig {
}
if (false) {
    /** @type {?} */
    PayPalConfig.prototype.env;
    /** @type {?} */
    PayPalConfig.prototype.style;
    /** @type {?} */
    PayPalConfig.prototype.client;
    /** @type {?} */
    PayPalConfig.prototype.commit;
    /** @type {?} */
    PayPalConfig.prototype.sandboxFacilitator;
    /** @type {?} */
    PayPalConfig.prototype.payment;
    /** @type {?} */
    PayPalConfig.prototype.onAuthorize;
}
export class PayPalService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                const src = `https://www.paypalobjects.com/api/checkout.js`;
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    this.paypal = window['paypal'];
                    return this.paypal;
                })));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    render(options, selector) {
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap((/**
         * @param {?} paypal
         * @return {?}
         */
        paypal => {
            paypal.Button.render(this.getOptions(paypal, options), selector);
            return of(paypal);
        })));
    }
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    getOptions(paypal, options) {
        /** @type {?} */
        const payload = Object.assign(this.options, options);
        payload.payment = (/**
         * @param {?} data
         * @param {?} actions
         * @return {?}
         */
        (data, actions) => {
            return new paypal.Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap((/**
                     * @param {?} payload
                     * @return {?}
                     */
                    payload => {
                        return from(actions.payment.create(payload));
                    }))).subscribe((/**
                     * @param {?} success
                     * @return {?}
                     */
                    success => resolve(success)), (
                    // actions.payment.create(success)
                    /**
                     * @param {?} error
                     * @return {?}
                     */
                    // actions.payment.create(success)
                    error => reject(error)));
                }
                else {
                    console.log('PayPalService.payment callback not setted');
                    reject(null);
                }
                // Make an ajax call to get the Payment ID. This should call your back-end,
                // which should invoke the PayPal Payment Create api to retrieve the Payment ID.
                // When you have a Payment ID, you need to call the `resolve` method, e.g `resolve(data.paymentID)`
                // Or, if you have an error from your server side, you need to call `reject`, e.g. `reject(err)`
                // jQuery.post('/my-api/create-payment')
                // .done(function(data) { resolve(data.paymentID); })
                // .fail(function(err)  { reject(err); });
            }));
        });
        payload.onAuthorize = (/**
         * @param {?} data
         * @param {?} actions
         * @return {?}
         */
        (data, actions) => {
            if (options.onAuthorize) {
                return actions.payment.execute().then((/**
                 * @param {?} payment
                 * @return {?}
                 */
                payment => options.onAuthorize(payment, null)), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => options.onAuthorize(null, error)));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        });
        return payload;
    }
}
PayPalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PayPalService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: OnceService }
];
/** @nocollapse */ PayPalService.ngInjectableDef = i0.defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.OnceService)); }, token: PayPalService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PayPalService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.paypal;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.paypal$;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    PayPalService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLGlCQUFpQjtDQUs3Qjs7O0lBSkEsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2Ysa0NBQWU7O0FBR2hCLE1BQU0sT0FBTyxrQkFBa0I7Q0FHOUI7OztJQUZBLHFDQUFnQjs7SUFDaEIsd0NBQW1COztBQUdwQixNQUFNLE9BQU8sWUFBWTtDQVN4Qjs7O0lBUkEsMkJBQVk7O0lBQ1osNkJBQTBCOztJQUMxQiw4QkFBMkI7O0lBQzNCLDhCQUFpQjs7SUFDakIsMENBQTRCOztJQUU1QiwrQkFBbUI7O0lBQ25CLG1DQUF1Qjs7QUFNeEIsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQU16QixZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FB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QUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNiO2dCQUNELDJFQUEyRTtnQkFDM0UsZ0ZBQWdGO2dCQUNoRixtR0FBbUc7Z0JBQ25HLGdHQUFnRztnQkFDaEcsd0NBQXdDO2dCQUN4QyxxREFBcUQ7Z0JBQ3JELDBDQUEwQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVc7Ozs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztnQkFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Ozs7Z0JBQzdDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQ3pDLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7YUFDN0Q7UUFDRixDQUFDLENBQUEsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7OztZQWxHRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBUUUsTUFBTSxTQUFDLFdBQVc7WUFuQ1osY0FBYztZQUhkLFdBQVc7Ozs7O0lBaUNuQixnQ0FBNkI7Ozs7O0lBQzdCLCtCQUFvQjs7Ozs7SUFDcEIsZ0NBQWlDOzs7OztJQUdoQyxtQ0FBK0M7Ozs7O0lBQy9DLHVDQUFzQzs7Ozs7SUFDdEMsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdTdHlsZSB7XHJcblx0bGFiZWw/OiBzdHJpbmc7IC8vIGxhYmVsOiBzdHJpbmdcclxuXHRzaXplPzogc3RyaW5nOyAvLyBzaXplOiBzbWFsbCB8IG1lZGl1bSB8IGxhcmdlIHwgcmVzcG9uc2l2ZVxyXG5cdHNoYXBlPzogc3RyaW5nOyAgIC8vIHNoYXBlOiBwaWxsIHwgcmVjdFxyXG5cdGNvbG9yPzogc3RyaW5nOyAgIC8vIGNvbG9yOiBnb2xkIHwgYmx1ZSB8IHNpbHZlciB8IGJsYWNrXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdDbGllbnQge1xyXG5cdHNhbmRib3g6IHN0cmluZztcclxuXHRwcm9kdWN0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWcge1xyXG5cdGVudjogc3RyaW5nO1xyXG5cdHN0eWxlPzogUGF5UGFsQ29uZmlnU3R5bGU7XHJcblx0Y2xpZW50OiBQYXlQYWxDb25maWdDbGllbnQ7XHJcblx0Y29tbWl0PzogYm9vbGVhbjsgLy8gU2hvdyB0aGUgYnV5ZXIgYSAnUGF5IE5vdycgYnV0dG9uIGluIHRoZSBjaGVja291dCBmbG93XHJcblx0c2FuZGJveEZhY2lsaXRhdG9yPzogc3RyaW5nO1xyXG5cdC8vXHJcblx0cGF5bWVudD86IEZ1bmN0aW9uO1xyXG5cdG9uQXV0aG9yaXplPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBheVBhbFNlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgb3B0aW9uczogUGF5UGFsQ29uZmlnO1xyXG5cdHByaXZhdGUgcGF5cGFsOiBhbnk7XHJcblx0cHJpdmF0ZSBwYXlwYWwkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcclxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BheVBhbFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMucGF5cGFsJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBQYXlQYWxDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCk7XHJcblx0fVxyXG5cclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXHJcblx0KiAgY2FsbCBQYXlQYWxDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcclxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdGlmICh0aGlzLnBheXBhbCkge1xyXG5cdFx0XHRcdHJldHVybiBvZih0aGlzLnBheXBhbCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wYXlwYWwkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cucGF5cGFsb2JqZWN0cy5jb20vYXBpL2NoZWNrb3V0LmpzYDtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsQ29uZmlnLm9uY2UnLCBzcmMpO1xyXG5cdFx0XHRcdHRoaXMucGF5cGFsJCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcclxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXlwYWwgPSB3aW5kb3dbJ3BheXBhbCddO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWw7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKG9wdGlvbnM6IGFueSwgc2VsZWN0b3I/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcjcGF5cGFsLWJ1dHRvbic7XHJcblx0XHRyZXR1cm4gdGhpcy5vbmNlKCkucGlwZShcclxuXHRcdFx0bWVyZ2VNYXAocGF5cGFsID0+IHtcclxuXHRcdFx0XHRwYXlwYWwuQnV0dG9uLnJlbmRlcih0aGlzLmdldE9wdGlvbnMocGF5cGFsLCBvcHRpb25zKSwgc2VsZWN0b3IpO1xyXG5cdFx0XHRcdHJldHVybiBvZihwYXlwYWwpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpOiBQYXlQYWxDb25maWcge1xyXG5cdFx0Y29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcclxuXHRcdHBheWxvYWQucGF5bWVudCA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XHJcblx0XHRcdHJldHVybiBuZXcgcGF5cGFsLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChvcHRpb25zLnBheW1lbnQpIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMucGF5bWVudCgpLnBpcGUoXHJcblx0XHRcdFx0XHRcdGZpcnN0KCksXHJcblx0XHRcdFx0XHRcdG1lcmdlTWFwKHBheWxvYWQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKGFjdGlvbnMucGF5bWVudC5jcmVhdGUocGF5bG9hZCkpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MgPT4gcmVzb2x2ZShzdWNjZXNzKSwgLy8gYWN0aW9ucy5wYXltZW50LmNyZWF0ZShzdWNjZXNzKVxyXG5cdFx0XHRcdFx0XHRlcnJvciA9PiByZWplY3QoZXJyb3IpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5wYXltZW50IGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcclxuXHRcdFx0XHRcdHJlamVjdChudWxsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gTWFrZSBhbiBhamF4IGNhbGwgdG8gZ2V0IHRoZSBQYXltZW50IElELiBUaGlzIHNob3VsZCBjYWxsIHlvdXIgYmFjay1lbmQsXHJcblx0XHRcdFx0Ly8gd2hpY2ggc2hvdWxkIGludm9rZSB0aGUgUGF5UGFsIFBheW1lbnQgQ3JlYXRlIGFwaSB0byByZXRyaWV2ZSB0aGUgUGF5bWVudCBJRC5cclxuXHRcdFx0XHQvLyBXaGVuIHlvdSBoYXZlIGEgUGF5bWVudCBJRCwgeW91IG5lZWQgdG8gY2FsbCB0aGUgYHJlc29sdmVgIG1ldGhvZCwgZS5nIGByZXNvbHZlKGRhdGEucGF5bWVudElEKWBcclxuXHRcdFx0XHQvLyBPciwgaWYgeW91IGhhdmUgYW4gZXJyb3IgZnJvbSB5b3VyIHNlcnZlciBzaWRlLCB5b3UgbmVlZCB0byBjYWxsIGByZWplY3RgLCBlLmcuIGByZWplY3QoZXJyKWBcclxuXHRcdFx0XHQvLyBqUXVlcnkucG9zdCgnL215LWFwaS9jcmVhdGUtcGF5bWVudCcpXHJcblx0XHRcdFx0Ly8gLmRvbmUoZnVuY3Rpb24oZGF0YSkgeyByZXNvbHZlKGRhdGEucGF5bWVudElEKTsgfSlcclxuXHRcdFx0XHQvLyAuZmFpbChmdW5jdGlvbihlcnIpICB7IHJlamVjdChlcnIpOyB9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cdFx0cGF5bG9hZC5vbkF1dGhvcml6ZSA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XHJcblx0XHRcdGlmIChvcHRpb25zLm9uQXV0aG9yaXplKSB7XHJcblx0XHRcdFx0cmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKCkudGhlbihcclxuXHRcdFx0XHRcdHBheW1lbnQgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShwYXltZW50LCBudWxsKSxcclxuXHRcdFx0XHRcdGVycm9yID0+IG9wdGlvbnMub25BdXRob3JpemUobnVsbCwgZXJyb3IpXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5vbkF1dGhvcml6ZSBjYWxsYmFjayBub3Qgc2V0dGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gcGF5bG9hZDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==