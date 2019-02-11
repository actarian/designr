/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.paypal$ = this.onceService.script(src).pipe(map(x => {
                    this.paypal = window['paypal'];
                    return this.paypal;
                }));
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
        return this.once().pipe(mergeMap(paypal => {
            paypal.Button.render(this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
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
        payload.payment = (data, actions) => {
            return new paypal.Promise((resolve, reject) => {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(payload => {
                        return from(actions.payment.create(payload));
                    })).subscribe(success => resolve(success), // actions.payment.create(success)
                    // actions.payment.create(success)
                    error => reject(error));
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
            });
        };
        payload.onAuthorize = (data, actions) => {
            if (options.onAuthorize) {
                return actions.payment.execute().then(payment => options.onAuthorize(payment, null), error => options.onAuthorize(null, error));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLGlCQUFpQjtDQUs3Qjs7O0lBSkEsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2Ysa0NBQWU7O0FBR2hCLE1BQU0sT0FBTyxrQkFBa0I7Q0FHOUI7OztJQUZBLHFDQUFnQjs7SUFDaEIsd0NBQW1COztBQUdwQixNQUFNLE9BQU8sWUFBWTtDQVN4Qjs7O0lBUkEsMkJBQVk7O0lBQ1osNkJBQTBCOztJQUMxQiw4QkFBMkI7O0lBQzNCLDhCQUFpQjs7SUFDakIsMENBQTRCOztJQUU1QiwrQkFBbUI7O0lBQ25CLG1DQUF1Qjs7QUFNeEIsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQU16QixZQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FB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Q0FBQyxDQUFDO29CQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0QsMkVBQTJFO2dCQUMzRSxnRkFBZ0Y7Z0JBQ2hGLG1HQUFtRztnQkFDbkcsZ0dBQWdHO2dCQUNoRyx3Q0FBd0M7Z0JBQ3hDLHFEQUFxRDtnQkFDckQsMENBQTBDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN2QyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQzdDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3pDLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7YUFDN0Q7UUFDRixDQUFDLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDOzs7WUFsR0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQVFFLE1BQU0sU0FBQyxXQUFXO1lBbkNaLGNBQWM7WUFIZCxXQUFXOzs7OztJQWlDbkIsZ0NBQTZCOzs7OztJQUM3QiwrQkFBb0I7Ozs7O0lBQ3BCLGdDQUFpQzs7Ozs7SUFHaEMsbUNBQStDOzs7OztJQUMvQyx1Q0FBc0M7Ozs7O0lBQ3RDLG9DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWdTdHlsZSB7XG5cdGxhYmVsPzogc3RyaW5nOyAvLyBsYWJlbDogc3RyaW5nXG5cdHNpemU/OiBzdHJpbmc7IC8vIHNpemU6IHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCByZXNwb25zaXZlXG5cdHNoYXBlPzogc3RyaW5nOyAgIC8vIHNoYXBlOiBwaWxsIHwgcmVjdFxuXHRjb2xvcj86IHN0cmluZzsgICAvLyBjb2xvcjogZ29sZCB8IGJsdWUgfCBzaWx2ZXIgfCBibGFja1xufVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnQ2xpZW50IHtcblx0c2FuZGJveDogc3RyaW5nO1xuXHRwcm9kdWN0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXlQYWxDb25maWcge1xuXHRlbnY6IHN0cmluZztcblx0c3R5bGU/OiBQYXlQYWxDb25maWdTdHlsZTtcblx0Y2xpZW50OiBQYXlQYWxDb25maWdDbGllbnQ7XG5cdGNvbW1pdD86IGJvb2xlYW47IC8vIFNob3cgdGhlIGJ1eWVyIGEgJ1BheSBOb3cnIGJ1dHRvbiBpbiB0aGUgY2hlY2tvdXQgZmxvd1xuXHRzYW5kYm94RmFjaWxpdGF0b3I/OiBzdHJpbmc7XG5cdC8vXG5cdHBheW1lbnQ/OiBGdW5jdGlvbjtcblx0b25BdXRob3JpemU/OiBGdW5jdGlvbjtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGF5UGFsU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFBheVBhbENvbmZpZztcblx0cHJpdmF0ZSBwYXlwYWw6IGFueTtcblx0cHJpdmF0ZSBwYXlwYWwkOiBPYnNlcnZhYmxlPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGF5cGFsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BheVBhbFNlcnZpY2UuZXJyb3IgbWlzc2luZyBjb25maWcgb2JqZWN0IGluIGVudmlyb25tZW50LnBsdWdpbnMucGF5cGFsJyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFBheVBhbENvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGF5cGFsKTtcblx0fVxuXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcblx0KiAgY2FsbCBQYXlQYWxDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMucGF5cGFsKSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLnBheXBhbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGF5cGFsJCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWwkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd3d3LnBheXBhbG9iamVjdHMuY29tL2FwaS9jaGVja291dC5qc2A7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxDb25maWcub25jZScsIHNyYyk7XG5cdFx0XHRcdHRoaXMucGF5cGFsJCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcblx0XHRcdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBheXBhbCA9IHdpbmRvd1sncGF5cGFsJ107XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWw7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcihvcHRpb25zOiBhbnksIHNlbGVjdG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJyNwYXlwYWwtYnV0dG9uJztcblx0XHRyZXR1cm4gdGhpcy5vbmNlKCkucGlwZShcblx0XHRcdG1lcmdlTWFwKHBheXBhbCA9PiB7XG5cdFx0XHRcdHBheXBhbC5CdXR0b24ucmVuZGVyKHRoaXMuZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpLCBzZWxlY3Rvcik7XG5cdFx0XHRcdHJldHVybiBvZihwYXlwYWwpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRPcHRpb25zKHBheXBhbCwgb3B0aW9ucyk6IFBheVBhbENvbmZpZyB7XG5cdFx0Y29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRwYXlsb2FkLnBheW1lbnQgPSAoZGF0YSwgYWN0aW9ucykgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBwYXlwYWwuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLnBheW1lbnQpIHtcblx0XHRcdFx0XHRvcHRpb25zLnBheW1lbnQoKS5waXBlKFxuXHRcdFx0XHRcdFx0Zmlyc3QoKSxcblx0XHRcdFx0XHRcdG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZnJvbShhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHBheWxvYWQpKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KS5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0XHRzdWNjZXNzID0+IHJlc29sdmUoc3VjY2VzcyksIC8vIGFjdGlvbnMucGF5bWVudC5jcmVhdGUoc3VjY2Vzcylcblx0XHRcdFx0XHRcdGVycm9yID0+IHJlamVjdChlcnJvcilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQYXlQYWxTZXJ2aWNlLnBheW1lbnQgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xuXHRcdFx0XHRcdHJlamVjdChudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBNYWtlIGFuIGFqYXggY2FsbCB0byBnZXQgdGhlIFBheW1lbnQgSUQuIFRoaXMgc2hvdWxkIGNhbGwgeW91ciBiYWNrLWVuZCxcblx0XHRcdFx0Ly8gd2hpY2ggc2hvdWxkIGludm9rZSB0aGUgUGF5UGFsIFBheW1lbnQgQ3JlYXRlIGFwaSB0byByZXRyaWV2ZSB0aGUgUGF5bWVudCBJRC5cblx0XHRcdFx0Ly8gV2hlbiB5b3UgaGF2ZSBhIFBheW1lbnQgSUQsIHlvdSBuZWVkIHRvIGNhbGwgdGhlIGByZXNvbHZlYCBtZXRob2QsIGUuZyBgcmVzb2x2ZShkYXRhLnBheW1lbnRJRClgXG5cdFx0XHRcdC8vIE9yLCBpZiB5b3UgaGF2ZSBhbiBlcnJvciBmcm9tIHlvdXIgc2VydmVyIHNpZGUsIHlvdSBuZWVkIHRvIGNhbGwgYHJlamVjdGAsIGUuZy4gYHJlamVjdChlcnIpYFxuXHRcdFx0XHQvLyBqUXVlcnkucG9zdCgnL215LWFwaS9jcmVhdGUtcGF5bWVudCcpXG5cdFx0XHRcdC8vIC5kb25lKGZ1bmN0aW9uKGRhdGEpIHsgcmVzb2x2ZShkYXRhLnBheW1lbnRJRCk7IH0pXG5cdFx0XHRcdC8vIC5mYWlsKGZ1bmN0aW9uKGVycikgIHsgcmVqZWN0KGVycik7IH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRwYXlsb2FkLm9uQXV0aG9yaXplID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcblx0XHRcdGlmIChvcHRpb25zLm9uQXV0aG9yaXplKSB7XG5cdFx0XHRcdHJldHVybiBhY3Rpb25zLnBheW1lbnQuZXhlY3V0ZSgpLnRoZW4oXG5cdFx0XHRcdFx0cGF5bWVudCA9PiBvcHRpb25zLm9uQXV0aG9yaXplKHBheW1lbnQsIG51bGwpLFxuXHRcdFx0XHRcdGVycm9yID0+IG9wdGlvbnMub25BdXRob3JpemUobnVsbCwgZXJyb3IpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5vbkF1dGhvcml6ZSBjYWxsYmFjayBub3Qgc2V0dGVkJyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gcGF5bG9hZDtcblx0fVxuXG59XG4iXX0=