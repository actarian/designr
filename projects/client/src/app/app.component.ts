import { AfterViewChecked, AfterViewInit, Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
import { DisposableComponent, Label, LabelService, LocalStorageService, RouteService, SlugService } from '@designr/core';
import { GoogleTagManagerPageViewEvent } from '@designr/plugins';
// import { SwUpdate } from '@angular/service-worker';
import { takeUntil } from 'rxjs/operators';
// import { GtmService } from './models';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent extends DisposableComponent implements DoCheck, AfterViewInit, AfterViewChecked {

	public cookieAccepted: boolean;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private storageService: LocalStorageService,
		private slugService: SlugService,
		private labelService: LabelService<Label>,
		private routeService: RouteService,
		// private gtm: GtmService,
		// private swUpdate: SwUpdate,
	) {
		super();
		RouteService.startTime = this.routeService.getTime();

		const storage = this.storageService.tryGet();
		this.cookieAccepted = storage.get('cookieAccepted');

		// get slugs from bom
		this.slugService.register().pipe(
			takeUntil(this.unsubscribe)
		).subscribe();

		// get labels from bom
		this.labelService.register().pipe(
			takeUntil(this.unsubscribe)
		).subscribe();
	}

	ngAfterViewInit() {
		// observe gtm service
		/*
		this.gtm.observe().pipe(
			takeUntil(this.unsubscribe)
		).subscribe(event => {
			console.log('AppComponent.gtm.observe', event);
		});
		*/
		/*
		if (isPlatformBrowser(this.platformId)) {
			if (this.swUpdate.isEnabled) {
				this.swUpdate.available.subscribe(() => {
					if (confirm('Esiste una nuova versione, vuoi aggiornare?')) {
						window.location.reload();
					}
				});
			}
		}
		*/
	}

	ngAfterViewChecked() {
		RouteService.endTime = this.routeService.getTime();
		// console.log('rendered', RouteService.endTime - RouteService.startTime);
		// console.log(document.getElementsByTagName('body')[0].innerHTML);
	}

	ngDoCheck() {
		// called whenever Angular runs change detection
		// console.log('ngDoCheck');
		this.slugService.collect();
		this.labelService.collect();
	}

	onPageView(e: GoogleTagManagerPageViewEvent) {
		// this.gtm.onVirtualPage();
		/*
		const event = {
			event: 'virtualPage',
			// url: url,
		}; // Paolo Zupin <zupin@performancebased.com> (email 03/12/2018)
		e.dataLayer.push(event);
		*/
		/*
		_bcd.Set("wsDebug", 1);
		_bcd.Set("wsPage", doc.CO_ID);
		_bcd.Set("wsCategory", doc.CA_ID);
		_bcd.Set("wsDocType", doc.DocType);
		_bcd.Set("wsTemplate", doc.Data["te_id"]);
		*/
	}

	acceptCookie() {
		const storage = this.storageService.tryGet();
		this.cookieAccepted = true;
		storage.set('cookieAccepted', true);
	}

}
