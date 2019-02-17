import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './page.component';

@Component({
	selector: 'page-not-found-component',
	template: `<div class="page">Page <span>{{url}}</span> not found</div>`,
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
