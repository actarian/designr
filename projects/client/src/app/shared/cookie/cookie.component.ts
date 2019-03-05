import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DisposableComponent, SessionStorageService } from '@designr/core';

@Component({
	selector: 'cookie-component',
	templateUrl: 'cookie.component.html',
	styleUrls: ['cookie.component.scss']
})
export class CookieComponent extends DisposableComponent {

	public cookieAccepted: boolean = true;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private storageService: SessionStorageService,
	) {
		super();
		const storage = this.storageService.tryGet();
		if (isPlatformBrowser(this.platformId)) {
			this.cookieAccepted = storage.get('cookieAccepted');
		}
	}

	acceptCookie() {
		const storage = this.storageService.tryGet();
		this.cookieAccepted = true;
		storage.set('cookieAccepted', true);
	}

}
