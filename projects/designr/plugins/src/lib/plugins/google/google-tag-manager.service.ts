
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Logger, OnceService } from '@designr/core';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';

export class GoogleTagManagerPageViewEvent {
	dataLayer: any[];
	url: string;
}

export class GoogleTagManagerConfig {
	id: string;
}

@Injectable({
	providedIn: 'root'
})
export class GoogleTagManagerService {

	public options: GoogleTagManagerConfig;

	private dataLayer: any[];
	private dataLayer$: Observable<any[]>;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private pluginsService: PluginsService,
		private zone: NgZone,
		private onceService: OnceService,
		private logger: Logger,
	) {
		this.init();
	}

	private init(): void {
		if (!this.pluginsService.options && !this.pluginsService.options.googleTagManager) {
			throw new Error('GoogleTagManagerService.error missing config object in environment.plugins.googleTagManager');
		}
		this.options = Object.assign(new GoogleTagManagerConfig(), this.pluginsService.options.googleTagManager);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*  call GoogleTagManagerConfig.once() on app component OnInit *
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	once(): Observable<any[]> {
		if (isPlatformBrowser(this.platformId)) {
			if (this.dataLayer) {
				return of(this.dataLayer);
			} else if (this.dataLayer$) {
				return this.dataLayer$;
			} else {
				window['dataLayer'] = window['dataLayer'] || [];
				const id = this.options.id;
				const src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
				const dataLayer = window['dataLayer'];
				dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
				// console.log('GoogleTagManagerConfig.once', src, dataLayer);
				this.dataLayer$ = this.onceService.script(src).pipe(
					map(x => {
						// console.log('dataLayer', dataLayer, x);
						this.dataLayer = dataLayer;
						return dataLayer;
					})
				);
				return this.dataLayer$;
			}
		} else {
			return of(null);
		}
	}

	push(payload: any): void {
		this.zone.runOutsideAngular(() => {
			if (this.dataLayer) {
				this.dataLayer.push(payload);
				this.logger.log('GoogleTagManagerConfig.push', payload);
			} else {
				this.once().pipe(
					first(),
				).subscribe(dataLayer => {
					if (this.dataLayer) {
						this.dataLayer.push(payload);
						this.logger.log('GoogleTagManagerConfig.push', payload);
					}
				});
			}
		});
	}
}

/*
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TS2H6VG');</script>
<!-- End Google Tag Manager -->
*/

/*
<!-- after <body> -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TS2H6VG"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
*/

/*
window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
 'event': 'Pageview',
 'url': 'https://www.example.com/something/contact-us'
 });
*/


