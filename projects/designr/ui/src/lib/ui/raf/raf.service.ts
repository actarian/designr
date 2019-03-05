import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { Observable, of, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RafService {

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
	) { }

	raf$(): Observable<number> {
		return this.zone.runOutsideAngular(() => {
			if (isPlatformBrowser(this.platformId)) {
				return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(
					shareReplay(),
				);
			} else {
				return of(null);
			}
		});
	}

}
