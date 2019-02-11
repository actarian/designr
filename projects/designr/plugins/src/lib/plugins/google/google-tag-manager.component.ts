import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { filter, takeUntil } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';

@Component({
	selector: 'core-google-tag-manager',
	template: `
	<!-- Google Tag Manager (noscript) -->
		<noscript *ngIf="useIframe && dataLayer">
			<iframe [src]="iframeUrl | safeUrl" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>
	<!-- End Google Tag Manager (noscript) -->`,
})

export class GoogleTagManagerComponent extends DisposableComponent implements AfterViewInit {

	useIframe: boolean = true;
	id: string;
	iframeUrl: string;
	dataLayer: any[];

	@Output() public pageView = new EventEmitter();

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private pluginsService: PluginsService,
		private router: Router,
		private googleTagManager: GoogleTagManagerService,
	) {
		super();
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.router.events.pipe(
				takeUntil(this.unsubscribe),
				filter(e => e instanceof NavigationEnd),
			).subscribe((e: NavigationEnd) => {
				const url = `${this.pluginsService.options.origin}${e.urlAfterRedirects}`;
				// console.log('GoogleTagManagerComponent.NavigationEnd', e.id, e.url, e.urlAfterRedirects, url);
				if (this.dataLayer) {
					this.pageView.emit({ dataLayer: this.dataLayer, url });
				} else {
					this.googleTagManager.once().pipe(
						takeUntil(this.unsubscribe)
					).subscribe(dataLayer => {
						// console.log('dataLayer', dataLayer);
						this.id = this.googleTagManager.options.id;
						this.iframeUrl = `https://www.googletagmanager.com/ns.html?id=${this.id}`;
						this.dataLayer = dataLayer;
						this.pageView.emit({ dataLayer: this.dataLayer, url });
					});
				}
			});
		}
	}

}
