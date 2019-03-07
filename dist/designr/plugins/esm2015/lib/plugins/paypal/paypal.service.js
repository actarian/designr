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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLGlCQUFpQjtDQUs3Qjs7O0lBSkEsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2Ysa0NBQWU7O0FBR2hCLE1BQU0sT0FBTyxrQkFBa0I7Q0FHOUI7OztJQUZBLHFDQUFnQjs7SUFDaEIsd0NBQW1COztBQUdwQixNQUFNLE9BQU8sWUFBWTtDQVN4Qjs7O0lBUkEsMkJBQVk7O0lBQ1osNkJBQTBCOztJQUMxQiw4QkFBMkI7O0lBQzNCLDhCQUFpQjs7SUFDakIsMENBQTRCOztJQUU1QiwrQkFBbUI7O0lBQ25CLG1DQUF1Qjs7QUFNeEIsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQU16QixZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FB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QUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNiO2dCQUNELDJFQUEyRTtnQkFDM0UsZ0ZBQWdGO2dCQUNoRixtR0FBbUc7Z0JBQ25HLGdHQUFnRztnQkFDaEcsd0NBQXdDO2dCQUN4QyxxREFBcUQ7Z0JBQ3JELDBDQUEwQztZQUMzQyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQSxDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVc7Ozs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7OztnQkFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7Ozs7Z0JBQzdDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQ3pDLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7YUFDN0Q7UUFDRixDQUFDLENBQUEsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7OztZQWxHRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBUUUsTUFBTSxTQUFDLFdBQVc7WUFuQ1osY0FBYztZQUhkLFdBQVc7Ozs7O0lBaUNuQixnQ0FBNkI7Ozs7O0lBQzdCLCtCQUFvQjs7Ozs7SUFDcEIsZ0NBQWlDOzs7OztJQUdoQyxtQ0FBK0M7Ozs7O0lBQy9DLHVDQUFzQzs7Ozs7SUFDdEMsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ1N0eWxlIHtcblx0bGFiZWw/OiBzdHJpbmc7IC8vIGxhYmVsOiBzdHJpbmdcblx0c2l6ZT86IHN0cmluZzsgLy8gc2l6ZTogc21hbGwgfCBtZWRpdW0gfCBsYXJnZSB8IHJlc3BvbnNpdmVcblx0c2hhcGU/OiBzdHJpbmc7ICAgLy8gc2hhcGU6IHBpbGwgfCByZWN0XG5cdGNvbG9yPzogc3RyaW5nOyAgIC8vIGNvbG9yOiBnb2xkIHwgYmx1ZSB8IHNpbHZlciB8IGJsYWNrXG59XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdDbGllbnQge1xuXHRzYW5kYm94OiBzdHJpbmc7XG5cdHByb2R1Y3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZyB7XG5cdGVudjogc3RyaW5nO1xuXHRzdHlsZT86IFBheVBhbENvbmZpZ1N0eWxlO1xuXHRjbGllbnQ6IFBheVBhbENvbmZpZ0NsaWVudDtcblx0Y29tbWl0PzogYm9vbGVhbjsgLy8gU2hvdyB0aGUgYnV5ZXIgYSAnUGF5IE5vdycgYnV0dG9uIGluIHRoZSBjaGVja291dCBmbG93XG5cdHNhbmRib3hGYWNpbGl0YXRvcj86IHN0cmluZztcblx0Ly9cblx0cGF5bWVudD86IEZ1bmN0aW9uO1xuXHRvbkF1dGhvcml6ZT86IEZ1bmN0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYXlQYWxTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGF5UGFsQ29uZmlnO1xuXHRwcml2YXRlIHBheXBhbDogYW55O1xuXHRwcml2YXRlIHBheXBhbCQ6IE9ic2VydmFibGU8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5wYXlwYWwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGF5UGFsU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5wYXlwYWwnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgUGF5UGFsQ29uZmlnKCksIHRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy5wYXlwYWwpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIFBheVBhbENvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5wYXlwYWwpIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMucGF5cGFsKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wYXlwYWwkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbCQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93d3cucGF5cGFsb2JqZWN0cy5jb20vYXBpL2NoZWNrb3V0LmpzYDtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ1BheVBhbENvbmZpZy5vbmNlJywgc3JjKTtcblx0XHRcdFx0dGhpcy5wYXlwYWwkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucGF5cGFsID0gd2luZG93WydwYXlwYWwnXTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWwkO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKG9wdGlvbnM6IGFueSwgc2VsZWN0b3I/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG5cdFx0c2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnI3BheXBhbC1idXR0b24nO1xuXHRcdHJldHVybiB0aGlzLm9uY2UoKS5waXBlKFxuXHRcdFx0bWVyZ2VNYXAocGF5cGFsID0+IHtcblx0XHRcdFx0cGF5cGFsLkJ1dHRvbi5yZW5kZXIodGhpcy5nZXRPcHRpb25zKHBheXBhbCwgb3B0aW9ucyksIHNlbGVjdG9yKTtcblx0XHRcdFx0cmV0dXJuIG9mKHBheXBhbCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRwcml2YXRlIGdldE9wdGlvbnMocGF5cGFsLCBvcHRpb25zKTogUGF5UGFsQ29uZmlnIHtcblx0XHRjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdHBheWxvYWQucGF5bWVudCA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IHBheXBhbC5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbnMucGF5bWVudCkge1xuXHRcdFx0XHRcdG9wdGlvbnMucGF5bWVudCgpLnBpcGUoXG5cdFx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHRcdFx0bWVyZ2VNYXAocGF5bG9hZCA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmcm9tKGFjdGlvbnMucGF5bWVudC5jcmVhdGUocGF5bG9hZCkpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpLnN1YnNjcmliZShcblx0XHRcdFx0XHRcdHN1Y2Nlc3MgPT4gcmVzb2x2ZShzdWNjZXNzKSwgLy8gYWN0aW9ucy5wYXltZW50LmNyZWF0ZShzdWNjZXNzKVxuXHRcdFx0XHRcdFx0ZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1BheVBhbFNlcnZpY2UucGF5bWVudCBjYWxsYmFjayBub3Qgc2V0dGVkJyk7XG5cdFx0XHRcdFx0cmVqZWN0KG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIE1ha2UgYW4gYWpheCBjYWxsIHRvIGdldCB0aGUgUGF5bWVudCBJRC4gVGhpcyBzaG91bGQgY2FsbCB5b3VyIGJhY2stZW5kLFxuXHRcdFx0XHQvLyB3aGljaCBzaG91bGQgaW52b2tlIHRoZSBQYXlQYWwgUGF5bWVudCBDcmVhdGUgYXBpIHRvIHJldHJpZXZlIHRoZSBQYXltZW50IElELlxuXHRcdFx0XHQvLyBXaGVuIHlvdSBoYXZlIGEgUGF5bWVudCBJRCwgeW91IG5lZWQgdG8gY2FsbCB0aGUgYHJlc29sdmVgIG1ldGhvZCwgZS5nIGByZXNvbHZlKGRhdGEucGF5bWVudElEKWBcblx0XHRcdFx0Ly8gT3IsIGlmIHlvdSBoYXZlIGFuIGVycm9yIGZyb20geW91ciBzZXJ2ZXIgc2lkZSwgeW91IG5lZWQgdG8gY2FsbCBgcmVqZWN0YCwgZS5nLiBgcmVqZWN0KGVycilgXG5cdFx0XHRcdC8vIGpRdWVyeS5wb3N0KCcvbXktYXBpL2NyZWF0ZS1wYXltZW50Jylcblx0XHRcdFx0Ly8gLmRvbmUoZnVuY3Rpb24oZGF0YSkgeyByZXNvbHZlKGRhdGEucGF5bWVudElEKTsgfSlcblx0XHRcdFx0Ly8gLmZhaWwoZnVuY3Rpb24oZXJyKSAgeyByZWplY3QoZXJyKTsgfSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHBheWxvYWQub25BdXRob3JpemUgPSAoZGF0YSwgYWN0aW9ucykgPT4ge1xuXHRcdFx0aWYgKG9wdGlvbnMub25BdXRob3JpemUpIHtcblx0XHRcdFx0cmV0dXJuIGFjdGlvbnMucGF5bWVudC5leGVjdXRlKCkudGhlbihcblx0XHRcdFx0XHRwYXltZW50ID0+IG9wdGlvbnMub25BdXRob3JpemUocGF5bWVudCwgbnVsbCksXG5cdFx0XHRcdFx0ZXJyb3IgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShudWxsLCBlcnJvcilcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQYXlQYWxTZXJ2aWNlLm9uQXV0aG9yaXplIGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBwYXlsb2FkO1xuXHR9XG5cbn1cbiJdfQ==