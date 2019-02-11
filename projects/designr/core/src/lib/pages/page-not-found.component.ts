import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './page.component';

@Component({
	selector: 'page-not-found-component',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class PageNotFoundComponent extends PageComponent {

	public url: string;

	constructor(
		protected injector: Injector
	) {
		super(injector);
		this.url = this.router.url;
	}

}
