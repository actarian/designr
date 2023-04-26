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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQ7SUFBQTtJQUtBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7O0lBSkEsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2Qsa0NBQWU7O0lBQ2Ysa0NBQWU7O0FBR2hCO0lBQUE7SUFHQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHFDQUFnQjs7SUFDaEIsd0NBQW1COztBQUdwQjtJQUFBO0lBU0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQSwyQkFBWTs7SUFDWiw2QkFBMEI7O0lBQzFCLDhCQUEyQjs7SUFDM0IsOEJBQWlCOztJQUNqQiwwQ0FBNEI7O0lBRTVCLCtCQUFtQjs7SUFDbkIsbUNBQXVCOztBQUd4QjtJQVNDLHVCQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FB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OztJQUNwQixnQ0FBaUM7Ozs7O0lBR2hDLG1DQUErQzs7Ozs7SUFDL0MsdUNBQXNDOzs7OztJQUN0QyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0LCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ1N0eWxlIHtcclxuXHRsYWJlbD86IHN0cmluZzsgLy8gbGFiZWw6IHN0cmluZ1xyXG5cdHNpemU/OiBzdHJpbmc7IC8vIHNpemU6IHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCByZXNwb25zaXZlXHJcblx0c2hhcGU/OiBzdHJpbmc7ICAgLy8gc2hhcGU6IHBpbGwgfCByZWN0XHJcblx0Y29sb3I/OiBzdHJpbmc7ICAgLy8gY29sb3I6IGdvbGQgfCBibHVlIHwgc2lsdmVyIHwgYmxhY2tcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ0NsaWVudCB7XHJcblx0c2FuZGJveDogc3RyaW5nO1xyXG5cdHByb2R1Y3Rpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZyB7XHJcblx0ZW52OiBzdHJpbmc7XHJcblx0c3R5bGU/OiBQYXlQYWxDb25maWdTdHlsZTtcclxuXHRjbGllbnQ6IFBheVBhbENvbmZpZ0NsaWVudDtcclxuXHRjb21taXQ/OiBib29sZWFuOyAvLyBTaG93IHRoZSBidXllciBhICdQYXkgTm93JyBidXR0b24gaW4gdGhlIGNoZWNrb3V0IGZsb3dcclxuXHRzYW5kYm94RmFjaWxpdGF0b3I/OiBzdHJpbmc7XHJcblx0Ly9cclxuXHRwYXltZW50PzogRnVuY3Rpb247XHJcblx0b25BdXRob3JpemU/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF5UGFsU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBQYXlQYWxDb25maWc7XHJcblx0cHJpdmF0ZSBwYXlwYWw6IGFueTtcclxuXHRwcml2YXRlIHBheXBhbCQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGF5cGFsKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGF5UGFsU2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy5wYXlwYWwnKTtcclxuXHRcdH1cclxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFBheVBhbENvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMucGF5cGFsKTtcclxuXHR9XHJcblxyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQqICBjYWxsIFBheVBhbENvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxyXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cclxuXHJcblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0aWYgKHRoaXMucGF5cGFsKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMucGF5cGFsKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnBheXBhbCQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWwkO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanNgO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYXlQYWxDb25maWcub25jZScsIHNyYyk7XHJcblx0XHRcdFx0dGhpcy5wYXlwYWwkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBheXBhbCA9IHdpbmRvd1sncGF5cGFsJ107XHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbDtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYXlwYWwkO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIob3B0aW9uczogYW55LCBzZWxlY3Rvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcclxuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJyNwYXlwYWwtYnV0dG9uJztcclxuXHRcdHJldHVybiB0aGlzLm9uY2UoKS5waXBlKFxyXG5cdFx0XHRtZXJnZU1hcChwYXlwYWwgPT4ge1xyXG5cdFx0XHRcdHBheXBhbC5CdXR0b24ucmVuZGVyKHRoaXMuZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpLCBzZWxlY3Rvcik7XHJcblx0XHRcdFx0cmV0dXJuIG9mKHBheXBhbCk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRPcHRpb25zKHBheXBhbCwgb3B0aW9ucyk6IFBheVBhbENvbmZpZyB7XHJcblx0XHRjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cdFx0cGF5bG9hZC5wYXltZW50ID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcclxuXHRcdFx0cmV0dXJuIG5ldyBwYXlwYWwuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0aWYgKG9wdGlvbnMucGF5bWVudCkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5wYXltZW50KCkucGlwZShcclxuXHRcdFx0XHRcdFx0Zmlyc3QoKSxcclxuXHRcdFx0XHRcdFx0bWVyZ2VNYXAocGF5bG9hZCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyb20oYWN0aW9ucy5wYXltZW50LmNyZWF0ZShwYXlsb2FkKSk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQpLnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9PiByZXNvbHZlKHN1Y2Nlc3MpLCAvLyBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHN1Y2Nlc3MpXHJcblx0XHRcdFx0XHRcdGVycm9yID0+IHJlamVjdChlcnJvcilcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdQYXlQYWxTZXJ2aWNlLnBheW1lbnQgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xyXG5cdFx0XHRcdFx0cmVqZWN0KG51bGwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBNYWtlIGFuIGFqYXggY2FsbCB0byBnZXQgdGhlIFBheW1lbnQgSUQuIFRoaXMgc2hvdWxkIGNhbGwgeW91ciBiYWNrLWVuZCxcclxuXHRcdFx0XHQvLyB3aGljaCBzaG91bGQgaW52b2tlIHRoZSBQYXlQYWwgUGF5bWVudCBDcmVhdGUgYXBpIHRvIHJldHJpZXZlIHRoZSBQYXltZW50IElELlxyXG5cdFx0XHRcdC8vIFdoZW4geW91IGhhdmUgYSBQYXltZW50IElELCB5b3UgbmVlZCB0byBjYWxsIHRoZSBgcmVzb2x2ZWAgbWV0aG9kLCBlLmcgYHJlc29sdmUoZGF0YS5wYXltZW50SUQpYFxyXG5cdFx0XHRcdC8vIE9yLCBpZiB5b3UgaGF2ZSBhbiBlcnJvciBmcm9tIHlvdXIgc2VydmVyIHNpZGUsIHlvdSBuZWVkIHRvIGNhbGwgYHJlamVjdGAsIGUuZy4gYHJlamVjdChlcnIpYFxyXG5cdFx0XHRcdC8vIGpRdWVyeS5wb3N0KCcvbXktYXBpL2NyZWF0ZS1wYXltZW50JylcclxuXHRcdFx0XHQvLyAuZG9uZShmdW5jdGlvbihkYXRhKSB7IHJlc29sdmUoZGF0YS5wYXltZW50SUQpOyB9KVxyXG5cdFx0XHRcdC8vIC5mYWlsKGZ1bmN0aW9uKGVycikgIHsgcmVqZWN0KGVycik7IH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0XHRwYXlsb2FkLm9uQXV0aG9yaXplID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcclxuXHRcdFx0aWYgKG9wdGlvbnMub25BdXRob3JpemUpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9ucy5wYXltZW50LmV4ZWN1dGUoKS50aGVuKFxyXG5cdFx0XHRcdFx0cGF5bWVudCA9PiBvcHRpb25zLm9uQXV0aG9yaXplKHBheW1lbnQsIG51bGwpLFxyXG5cdFx0XHRcdFx0ZXJyb3IgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShudWxsLCBlcnJvcilcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQYXlQYWxTZXJ2aWNlLm9uQXV0aG9yaXplIGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBwYXlsb2FkO1xyXG5cdH1cclxuXHJcbn1cclxuIl19