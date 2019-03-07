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
var PayPalConfigStyle = /** @class */ (function () {
    function PayPalConfigStyle() {
    }
    return PayPalConfigStyle;
}());
export { PayPalConfigStyle };
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
var PayPalConfigClient = /** @class */ (function () {
    function PayPalConfigClient() {
    }
    return PayPalConfigClient;
}());
export { PayPalConfigClient };
if (false) {
    /** @type {?} */
    PayPalConfigClient.prototype.sandbox;
    /** @type {?} */
    PayPalConfigClient.prototype.production;
}
var PayPalConfig = /** @class */ (function () {
    function PayPalConfig() {
    }
    return PayPalConfig;
}());
export { PayPalConfig };
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
var PayPalService = /** @class */ (function () {
    function PayPalService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    PayPalService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    PayPalService.prototype.once = /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call PayPalConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                /** @type {?} */
                var src = "https://www.paypalobjects.com/api/checkout.js";
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    _this.paypal = window['paypal'];
                    return _this.paypal;
                })));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    PayPalService.prototype.render = /**
     * @param {?} options
     * @param {?=} selector
     * @return {?}
     */
    function (options, selector) {
        var _this = this;
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap((/**
         * @param {?} paypal
         * @return {?}
         */
        function (paypal) {
            paypal.Button.render(_this.getOptions(paypal, options), selector);
            return of(paypal);
        })));
    };
    /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    PayPalService.prototype.getOptions = /**
     * @private
     * @param {?} paypal
     * @param {?} options
     * @return {?}
     */
    function (paypal, options) {
        /** @type {?} */
        var payload = Object.assign(this.options, options);
        payload.payment = (/**
         * @param {?} data
         * @param {?} actions
         * @return {?}
         */
        function (data, actions) {
            return new paypal.Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap((/**
                     * @param {?} payload
                     * @return {?}
                     */
                    function (payload) {
                        return from(actions.payment.create(payload));
                    }))).subscribe((/**
                     * @param {?} success
                     * @return {?}
                     */
                    function (success) { return resolve(success); }), (
                    // actions.payment.create(success)
                    /**
                     * @param {?} error
                     * @return {?}
                     */
                    function (// actions.payment.create(success)
                    error) { return reject(error); }));
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
        function (data, actions) {
            if (options.onAuthorize) {
                return actions.payment.execute().then((/**
                 * @param {?} payment
                 * @return {?}
                 */
                function (payment) { return options.onAuthorize(payment, null); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return options.onAuthorize(null, error); }));
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        });
        return payload;
    };
    PayPalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PayPalService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PluginsService },
        { type: OnceService }
    ]; };
    /** @nocollapse */ PayPalService.ngInjectableDef = i0.defineInjectable({ factory: function PayPalService_Factory() { return new PayPalService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.OnceService)); }, token: PayPalService, providedIn: "root" });
    return PayPalService;
}());
export { PayPalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtJQUtBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkEsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2Ysa0NBQWU7O0FBR2hCO0lBQUE7SUFHQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHFDQUFnQjs7SUFDaEIsd0NBQW1COztBQUdwQjtJQUFBO0lBU0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQSwyQkFBWTs7SUFDWiw2QkFBMEI7O0lBQzFCLDhCQUEyQjs7SUFDM0IsOEJBQWlCOztJQUNqQiwwQ0FBNEI7O0lBRTVCLCtCQUFtQjs7SUFDbkIsbUNBQXVCOztBQUd4QjtJQVNDLHVCQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FB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OztJQUNwQixnQ0FBaUM7Ozs7O0lBR2hDLG1DQUErQzs7Ozs7SUFDL0MsdUNBQXNDOzs7OztJQUN0QyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnU3R5bGUge1xuXHRsYWJlbD86IHN0cmluZzsgLy8gbGFiZWw6IHN0cmluZ1xuXHRzaXplPzogc3RyaW5nOyAvLyBzaXplOiBzbWFsbCB8IG1lZGl1bSB8IGxhcmdlIHwgcmVzcG9uc2l2ZVxuXHRzaGFwZT86IHN0cmluZzsgICAvLyBzaGFwZTogcGlsbCB8IHJlY3Rcblx0Y29sb3I/OiBzdHJpbmc7ICAgLy8gY29sb3I6IGdvbGQgfCBibHVlIHwgc2lsdmVyIHwgYmxhY2tcbn1cblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ0NsaWVudCB7XG5cdHNhbmRib3g6IHN0cmluZztcblx0cHJvZHVjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnIHtcblx0ZW52OiBzdHJpbmc7XG5cdHN0eWxlPzogUGF5UGFsQ29uZmlnU3R5bGU7XG5cdGNsaWVudDogUGF5UGFsQ29uZmlnQ2xpZW50O1xuXHRjb21taXQ/OiBib29sZWFuOyAvLyBTaG93IHRoZSBidXllciBhICdQYXkgTm93JyBidXR0b24gaW4gdGhlIGNoZWNrb3V0IGZsb3dcblx0c2FuZGJveEZhY2lsaXRhdG9yPzogc3RyaW5nO1xuXHQvL1xuXHRwYXltZW50PzogRnVuY3Rpb247XG5cdG9uQXV0aG9yaXplPzogRnVuY3Rpb247XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheVBhbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBQYXlQYWxDb25maWc7XG5cdHByaXZhdGUgcGF5cGFsOiBhbnk7XG5cdHByaXZhdGUgcGF5cGFsJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQYXlQYWxTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnBheXBhbCcpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBQYXlQYWxDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgUGF5UGFsQ29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLnBheXBhbCkge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5wYXlwYWwpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnBheXBhbCQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanNgO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsQ29uZmlnLm9uY2UnLCBzcmMpO1xuXHRcdFx0XHR0aGlzLnBheXBhbCQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wYXlwYWwgPSB3aW5kb3dbJ3BheXBhbCddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbCQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIob3B0aW9uczogYW55LCBzZWxlY3Rvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcjcGF5cGFsLWJ1dHRvbic7XG5cdFx0cmV0dXJuIHRoaXMub25jZSgpLnBpcGUoXG5cdFx0XHRtZXJnZU1hcChwYXlwYWwgPT4ge1xuXHRcdFx0XHRwYXlwYWwuQnV0dG9uLnJlbmRlcih0aGlzLmdldE9wdGlvbnMocGF5cGFsLCBvcHRpb25zKSwgc2VsZWN0b3IpO1xuXHRcdFx0XHRyZXR1cm4gb2YocGF5cGFsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpOiBQYXlQYWxDb25maWcge1xuXHRcdGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0cGF5bG9hZC5wYXltZW50ID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcblx0XHRcdHJldHVybiBuZXcgcGF5cGFsLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5wYXltZW50KSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5wYXltZW50KCkucGlwZShcblx0XHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdFx0XHRtZXJnZU1hcChwYXlsb2FkID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyb20oYWN0aW9ucy5wYXltZW50LmNyZWF0ZShwYXlsb2FkKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCkuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9PiByZXNvbHZlKHN1Y2Nlc3MpLCAvLyBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHN1Y2Nlc3MpXG5cdFx0XHRcdFx0XHRlcnJvciA9PiByZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5wYXltZW50IGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcblx0XHRcdFx0XHRyZWplY3QobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTWFrZSBhbiBhamF4IGNhbGwgdG8gZ2V0IHRoZSBQYXltZW50IElELiBUaGlzIHNob3VsZCBjYWxsIHlvdXIgYmFjay1lbmQsXG5cdFx0XHRcdC8vIHdoaWNoIHNob3VsZCBpbnZva2UgdGhlIFBheVBhbCBQYXltZW50IENyZWF0ZSBhcGkgdG8gcmV0cmlldmUgdGhlIFBheW1lbnQgSUQuXG5cdFx0XHRcdC8vIFdoZW4geW91IGhhdmUgYSBQYXltZW50IElELCB5b3UgbmVlZCB0byBjYWxsIHRoZSBgcmVzb2x2ZWAgbWV0aG9kLCBlLmcgYHJlc29sdmUoZGF0YS5wYXltZW50SUQpYFxuXHRcdFx0XHQvLyBPciwgaWYgeW91IGhhdmUgYW4gZXJyb3IgZnJvbSB5b3VyIHNlcnZlciBzaWRlLCB5b3UgbmVlZCB0byBjYWxsIGByZWplY3RgLCBlLmcuIGByZWplY3QoZXJyKWBcblx0XHRcdFx0Ly8galF1ZXJ5LnBvc3QoJy9teS1hcGkvY3JlYXRlLXBheW1lbnQnKVxuXHRcdFx0XHQvLyAuZG9uZShmdW5jdGlvbihkYXRhKSB7IHJlc29sdmUoZGF0YS5wYXltZW50SUQpOyB9KVxuXHRcdFx0XHQvLyAuZmFpbChmdW5jdGlvbihlcnIpICB7IHJlamVjdChlcnIpOyB9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0cGF5bG9hZC5vbkF1dGhvcml6ZSA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHRpZiAob3B0aW9ucy5vbkF1dGhvcml6ZSkge1xuXHRcdFx0XHRyZXR1cm4gYWN0aW9ucy5wYXltZW50LmV4ZWN1dGUoKS50aGVuKFxuXHRcdFx0XHRcdHBheW1lbnQgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShwYXltZW50LCBudWxsKSxcblx0XHRcdFx0XHRlcnJvciA9PiBvcHRpb25zLm9uQXV0aG9yaXplKG51bGwsIGVycm9yKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BheVBhbFNlcnZpY2Uub25BdXRob3JpemUgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHBheWxvYWQ7XG5cdH1cblxufVxuIl19