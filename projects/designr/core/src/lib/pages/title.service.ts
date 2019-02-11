
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Logger } from '../logger/logger';

@Injectable({
	providedIn: 'root'
})
export class TitleService {

	constructor(
		private logger: Logger,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private title: Title,
	) { }

	getRouterEvents(): Observable<ActivatedRouteSnapshot> {
		return this.router.events.pipe(
			filter(e => e instanceof NavigationEnd),
			map((): ActivatedRouteSnapshot => {
				let child = this.activatedRoute.firstChild;
				while (child.firstChild) {
					child = child.firstChild;
				}
				if (child.snapshot.data && child.snapshot.data['title']) {
					return child.snapshot;
				} else {
					return null;
				}
			}
			));
	}

	setTitle(): any {
		return this.getRouterEvents().subscribe((snapshot: ActivatedRouteSnapshot) => {
			if (snapshot) {
				this.title.setTitle(snapshot.data.title);
				// this.logger.log(`TitleService.setTitle ${snapshot.data.title} of route ${snapshot}`);
			}
		});
	}

}
