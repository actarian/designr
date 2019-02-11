import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// export class OnceEvent extends Event { }

@Injectable({
	providedIn: 'root'
})
export class OnceService {

	private uid: number = 0;
	private paths: string[] = [];

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
	) { }

	script(url: string, callback?: string | boolean): Observable<Event> {
		if (isPlatformBrowser(this.platformId)) {
			// !!! this.zone.runOutsideAngular(() => {
			if (this.paths.indexOf(url) === -1) {
				this.paths.push(url);
				let callbackName: string;
				if (callback === true) {
					callbackName = 'OnceCallback' + (++this.uid);
					url = url.split('{{callback}}').join(callbackName);
				} else {
					callbackName = callback as string;
				}
				let callback$: Observable<any>;
				const element = document.createElement('script');
				element.type = 'text/javascript';
				if (callback) {
					callback$ = from(
						new Promise((resolve, reject) => {
							window[callbackName] = function (data) {
								resolve(data);
							};
						})
					);
				} else {
					element.async = true;
					callback$ = fromEvent(element, 'load').pipe(
						map(x => x as Event)
					);
				}
				const scripts = document.getElementsByTagName('script');
				if (scripts.length) {
					const script = scripts[scripts.length - 1];
					script.parentNode.insertBefore(element, script.nextSibling);
				}
				element.src = url;
				return callback$;
			} else {
				return of(new Event('loaded!'));
			}
			// });
		} else {
			return of(null);
		}
	}
}
