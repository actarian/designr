
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { from, Observable, of } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';

export class PayPalConfigStyle {
	label?: string; // label: string
	size?: string; // size: small | medium | large | responsive
	shape?: string;   // shape: pill | rect
	color?: string;   // color: gold | blue | silver | black
}

export class PayPalConfigClient {
	sandbox: string;
	production: string;
}

export class PayPalConfig {
	env: string;
	style?: PayPalConfigStyle;
	client: PayPalConfigClient;
	commit?: boolean; // Show the buyer a 'Pay Now' button in the checkout flow
	sandboxFacilitator?: string;
	//
	payment?: Function;
	onAuthorize?: Function;
}

@Injectable({
	providedIn: 'root'
})
export class PayPalService {

	public options: PayPalConfig;
	private paypal: any;
	private paypal$: Observable<any>;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private pluginsService: PluginsService,
		private onceService: OnceService,
	) {
		this.init();
	}

	private init(): void {
		if (!this.pluginsService.options && !this.pluginsService.options.paypal) {
			throw new Error('PayPalService.error missing config object in environment.plugins.paypal');
		}
		this.options = Object.assign(new PayPalConfig(), this.pluginsService.options.paypal);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*  call PayPalConfig.once() on app component OnInit *
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	once(): Observable<any> {
		if (isPlatformBrowser(this.platformId)) {
			if (this.paypal) {
				return of(this.paypal);
			} else if (this.paypal$) {
				return this.paypal$;
			} else {
				const src = `https://www.paypalobjects.com/api/checkout.js`;
				// console.log('PayPalConfig.once', src);
				this.paypal$ = this.onceService.script(src).pipe(
					map(x => {
						this.paypal = window['paypal'];
						return this.paypal;
					})
				);
				return this.paypal$;
			}
		} else {
			return of(null);
		}
	}

	render(options: any, selector?: string): Observable<any[]> {
		selector = selector || '#paypal-button';
		return this.once().pipe(
			mergeMap(paypal => {
				paypal.Button.render(this.getOptions(paypal, options), selector);
				return of(paypal);
			})
		);
	}

	private getOptions(paypal, options): PayPalConfig {
		const payload = Object.assign(this.options, options);
		payload.payment = (data, actions) => {
			return new paypal.Promise((resolve, reject) => {
				if (options.payment) {
					options.payment().pipe(
						first(),
						mergeMap(payload => {
							return from(actions.payment.create(payload));
						})
					).subscribe(
						success => resolve(success), // actions.payment.create(success)
						error => reject(error)
					);
				} else {
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
				return actions.payment.execute().then(
					payment => options.onAuthorize(payment, null),
					error => options.onAuthorize(null, error)
				);
			} else {
				console.log('PayPalService.onAuthorize callback not setted');
			}
		};
		return payload;
	}

}
