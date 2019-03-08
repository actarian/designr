import { Component, DoCheck, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisposableComponent, Label, LabelService, SlugService } from '@designr/core';
import { GoogleTagManagerPageViewEvent } from '@designr/plugins';
// import { SwUpdate } from '@angular/service-worker';
import { takeUntil } from 'rxjs/operators';
import { pageTransitions } from './app.animations';
// import { GtmService } from '@designr/plugins';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		pageTransitions
		// animation triggers go here
	]
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
		this.slugService.observe$().pipe(
			takeUntil(this.unsubscribe),
		).subscribe((keys) => {
			console.log('AppComponent.slugService.collect', keys);
		});
		this.labelService.observe$().pipe(
			takeUntil(this.unsubscribe),
		).subscribe((keys) => {
			console.log('AppComponent.labelService.collect', keys);
		});
	}

	ngDoCheck() {
		// called whenever Angular runs change detection
		// console.log('AppComponent.ngDoCheck');
	}

	prepareRoute(outlet: RouterOutlet) {
		const snapshot = outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.snapshot;
		const data = snapshot && snapshot.data;
		const page = data && snapshot.data.pageResolver && snapshot.data.pageResolver.page;
		const component = page && page.component;
		return component; // outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}

	onPageView(e: GoogleTagManagerPageViewEvent) {
		console.log('AppComponent.onPageView', e);
	}

}
