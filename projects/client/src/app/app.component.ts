import { Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
import { DisposableComponent, Label, LabelService, SlugService } from '@designr/core';
import { GoogleTagManagerPageViewEvent } from '@designr/plugins';
// import { SwUpdate } from '@angular/service-worker';
import { takeUntil } from 'rxjs/operators';
// import { GtmService } from '@designr/plugins';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent extends DisposableComponent implements DoCheck {

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private slugService: SlugService,
		private labelService: LabelService<Label>,
		// private gtm: GtmService,
		// private swUpdate: SwUpdate,
	) {
		super();
		// get slugs from bom
		this.slugService.register().pipe(
			takeUntil(this.unsubscribe)
		).subscribe();
		// get labels from bom
		this.labelService.register().pipe(
			takeUntil(this.unsubscribe)
		).subscribe();
	}

	ngDoCheck() {
		// called whenever Angular runs change detection
		// console.log('AppComponent.ngDoCheck');
		this.slugService.collect();
		this.labelService.collect();
	}

	onPageView(e: GoogleTagManagerPageViewEvent) {
		console.log('AppComponent.onPageView', e);
	}

}
