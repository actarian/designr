import { Component, Input } from '@angular/core';
import { DisposableComponent, SessionStorageService } from '@designr/core';
import { Page } from '@designr/page';

@Component({
	selector: 'cookie-component',
	templateUrl: 'cookie.component.html',
	styleUrls: ['cookie.component.scss']
})
export class CookieComponent extends DisposableComponent {

	@Input() page: Page;

	public cookieAccepted: boolean;

	constructor(
		private storageService: SessionStorageService,
	) {
		super();
		const storage = this.storageService.tryGet();
		this.cookieAccepted = storage.get('cookieAccepted');
	}

	acceptCookie() {
		const storage = this.storageService.tryGet();
		this.cookieAccepted = true;
		storage.set('cookieAccepted', true);
	}

}
