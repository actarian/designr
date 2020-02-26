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
var PayPalConfigClient = /** @class */ (function () {
    function PayPalConfigClient() {
    }
    return PayPalConfigClient;
}());
export { PayPalConfigClient };
var PayPalConfig = /** @class */ (function () {
    function PayPalConfig() {
    }
    return PayPalConfig;
}());
export { PayPalConfig };
var PayPalService = /** @class */ (function () {
    function PayPalService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    PayPalService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
            throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
        }
        this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call PayPalConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    PayPalService.prototype.once = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.paypal) {
                return of(this.paypal);
            }
            else if (this.paypal$) {
                return this.paypal$;
            }
            else {
                var src = "https://www.paypalobjects.com/api/checkout.js";
                // console.log('PayPalConfig.once', src);
                this.paypal$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.paypal = window['paypal'];
                    return _this.paypal;
                }));
                return this.paypal$;
            }
        }
        else {
            return of(null);
        }
    };
    PayPalService.prototype.render = function (options, selector) {
        var _this = this;
        selector = selector || '#paypal-button';
        return this.once().pipe(mergeMap(function (paypal) {
            paypal.Button.render(_this.getOptions(paypal, options), selector);
            return of(paypal);
        }));
    };
    PayPalService.prototype.getOptions = function (paypal, options) {
        var payload = Object.assign(this.options, options);
        payload.payment = function (data, actions) {
            return new paypal.Promise(function (resolve, reject) {
                if (options.payment) {
                    options.payment().pipe(first(), mergeMap(function (payload) {
                        return from(actions.payment.create(payload));
                    })).subscribe(function (success) { return resolve(success); }, // actions.payment.create(success)
                    function (// actions.payment.create(success)
                    error) { return reject(error); });
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
        payload.onAuthorize = function (data, actions) {
            if (options.onAuthorize) {
                return actions.payment.execute().then(function (payment) { return options.onAuthorize(payment, null); }, function (error) { return options.onAuthorize(null, error); });
            }
            else {
                console.log('PayPalService.onAuthorize callback not setted');
            }
        };
        return payload;
    };
    PayPalService.ɵfac = function PayPalService_Factory(t) { return new (t || PayPalService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.OnceService)); };
    PayPalService.ɵprov = i0.ɵɵdefineInjectable({ token: PayPalService, factory: PayPalService.ɵfac, providedIn: 'root' });
    return PayPalService;
}());
export { PayPalService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PayPalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.OnceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RDtJQUFBO0lBS0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7SUFBQTtJQUdBLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOztBQUVEO0lBQUE7SUFTQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7QUFFRDtJQVNDLHVCQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFTyw0QkFBSSxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3hFLE1BQU0s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O2dCQUNuRyxnR0FBZ0c7Z0JBQ2hHLHdDQUF3QztnQkFDeEMscURBQXFEO2dCQUNyRCwwQ0FBMEM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsV0FBVyxHQUFHLFVBQUMsSUFBSSxFQUFFLE9BQU87WUFDbkMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN4QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUNwQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFsQyxDQUFrQyxFQUM3QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFoQyxDQUFnQyxDQUN6QyxDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO2FBQzdEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs4RUEvRlcsYUFBYSxjQU9oQixXQUFXO3lEQVBSLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07d0JBaENuQjtDQW1JQyxBQXBHRCxJQW9HQztTQWpHWSxhQUFhO2tEQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFRRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnU3R5bGUge1xuXHRsYWJlbD86IHN0cmluZzsgLy8gbGFiZWw6IHN0cmluZ1xuXHRzaXplPzogc3RyaW5nOyAvLyBzaXplOiBzbWFsbCB8IG1lZGl1bSB8IGxhcmdlIHwgcmVzcG9uc2l2ZVxuXHRzaGFwZT86IHN0cmluZzsgICAvLyBzaGFwZTogcGlsbCB8IHJlY3Rcblx0Y29sb3I/OiBzdHJpbmc7ICAgLy8gY29sb3I6IGdvbGQgfCBibHVlIHwgc2lsdmVyIHwgYmxhY2tcbn1cblxuZXhwb3J0IGNsYXNzIFBheVBhbENvbmZpZ0NsaWVudCB7XG5cdHNhbmRib3g6IHN0cmluZztcblx0cHJvZHVjdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF5UGFsQ29uZmlnIHtcblx0ZW52OiBzdHJpbmc7XG5cdHN0eWxlPzogUGF5UGFsQ29uZmlnU3R5bGU7XG5cdGNsaWVudDogUGF5UGFsQ29uZmlnQ2xpZW50O1xuXHRjb21taXQ/OiBib29sZWFuOyAvLyBTaG93IHRoZSBidXllciBhICdQYXkgTm93JyBidXR0b24gaW4gdGhlIGNoZWNrb3V0IGZsb3dcblx0c2FuZGJveEZhY2lsaXRhdG9yPzogc3RyaW5nO1xuXHQvL1xuXHRwYXltZW50PzogRnVuY3Rpb247XG5cdG9uQXV0aG9yaXplPzogRnVuY3Rpb247XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheVBhbFNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBQYXlQYWxDb25maWc7XG5cdHByaXZhdGUgcGF5cGFsOiBhbnk7XG5cdHByaXZhdGUgcGF5cGFsJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgb25jZVNlcnZpY2U6IE9uY2VTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucyAmJiAhdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQYXlQYWxTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnBheXBhbCcpO1xuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKG5ldyBQYXlQYWxDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnBheXBhbCk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgUGF5UGFsQ29uZmlnLm9uY2UoKSBvbiBhcHAgY29tcG9uZW50IE9uSW5pdCAqXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuXHRvbmNlKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGlmICh0aGlzLnBheXBhbCkge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5wYXlwYWwpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnBheXBhbCQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsJDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9hcGkvY2hlY2tvdXQuanNgO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnUGF5UGFsQ29uZmlnLm9uY2UnLCBzcmMpO1xuXHRcdFx0XHR0aGlzLnBheXBhbCQgPSB0aGlzLm9uY2VTZXJ2aWNlLnNjcmlwdChzcmMpLnBpcGUoXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wYXlwYWwgPSB3aW5kb3dbJ3BheXBhbCddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucGF5cGFsO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLnBheXBhbCQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIob3B0aW9uczogYW55LCBzZWxlY3Rvcj86IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcjcGF5cGFsLWJ1dHRvbic7XG5cdFx0cmV0dXJuIHRoaXMub25jZSgpLnBpcGUoXG5cdFx0XHRtZXJnZU1hcChwYXlwYWwgPT4ge1xuXHRcdFx0XHRwYXlwYWwuQnV0dG9uLnJlbmRlcih0aGlzLmdldE9wdGlvbnMocGF5cGFsLCBvcHRpb25zKSwgc2VsZWN0b3IpO1xuXHRcdFx0XHRyZXR1cm4gb2YocGF5cGFsKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0T3B0aW9ucyhwYXlwYWwsIG9wdGlvbnMpOiBQYXlQYWxDb25maWcge1xuXHRcdGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0cGF5bG9hZC5wYXltZW50ID0gKGRhdGEsIGFjdGlvbnMpID0+IHtcblx0XHRcdHJldHVybiBuZXcgcGF5cGFsLlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5wYXltZW50KSB7XG5cdFx0XHRcdFx0b3B0aW9ucy5wYXltZW50KCkucGlwZShcblx0XHRcdFx0XHRcdGZpcnN0KCksXG5cdFx0XHRcdFx0XHRtZXJnZU1hcChwYXlsb2FkID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZyb20oYWN0aW9ucy5wYXltZW50LmNyZWF0ZShwYXlsb2FkKSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCkuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9PiByZXNvbHZlKHN1Y2Nlc3MpLCAvLyBhY3Rpb25zLnBheW1lbnQuY3JlYXRlKHN1Y2Nlc3MpXG5cdFx0XHRcdFx0XHRlcnJvciA9PiByZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUGF5UGFsU2VydmljZS5wYXltZW50IGNhbGxiYWNrIG5vdCBzZXR0ZWQnKTtcblx0XHRcdFx0XHRyZWplY3QobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTWFrZSBhbiBhamF4IGNhbGwgdG8gZ2V0IHRoZSBQYXltZW50IElELiBUaGlzIHNob3VsZCBjYWxsIHlvdXIgYmFjay1lbmQsXG5cdFx0XHRcdC8vIHdoaWNoIHNob3VsZCBpbnZva2UgdGhlIFBheVBhbCBQYXltZW50IENyZWF0ZSBhcGkgdG8gcmV0cmlldmUgdGhlIFBheW1lbnQgSUQuXG5cdFx0XHRcdC8vIFdoZW4geW91IGhhdmUgYSBQYXltZW50IElELCB5b3UgbmVlZCB0byBjYWxsIHRoZSBgcmVzb2x2ZWAgbWV0aG9kLCBlLmcgYHJlc29sdmUoZGF0YS5wYXltZW50SUQpYFxuXHRcdFx0XHQvLyBPciwgaWYgeW91IGhhdmUgYW4gZXJyb3IgZnJvbSB5b3VyIHNlcnZlciBzaWRlLCB5b3UgbmVlZCB0byBjYWxsIGByZWplY3RgLCBlLmcuIGByZWplY3QoZXJyKWBcblx0XHRcdFx0Ly8galF1ZXJ5LnBvc3QoJy9teS1hcGkvY3JlYXRlLXBheW1lbnQnKVxuXHRcdFx0XHQvLyAuZG9uZShmdW5jdGlvbihkYXRhKSB7IHJlc29sdmUoZGF0YS5wYXltZW50SUQpOyB9KVxuXHRcdFx0XHQvLyAuZmFpbChmdW5jdGlvbihlcnIpICB7IHJlamVjdChlcnIpOyB9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0cGF5bG9hZC5vbkF1dGhvcml6ZSA9IChkYXRhLCBhY3Rpb25zKSA9PiB7XG5cdFx0XHRpZiAob3B0aW9ucy5vbkF1dGhvcml6ZSkge1xuXHRcdFx0XHRyZXR1cm4gYWN0aW9ucy5wYXltZW50LmV4ZWN1dGUoKS50aGVuKFxuXHRcdFx0XHRcdHBheW1lbnQgPT4gb3B0aW9ucy5vbkF1dGhvcml6ZShwYXltZW50LCBudWxsKSxcblx0XHRcdFx0XHRlcnJvciA9PiBvcHRpb25zLm9uQXV0aG9yaXplKG51bGwsIGVycm9yKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BheVBhbFNlcnZpY2Uub25BdXRob3JpemUgY2FsbGJhY2sgbm90IHNldHRlZCcpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHBheWxvYWQ7XG5cdH1cblxufVxuIl19