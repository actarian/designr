import { Component, Injector } from '@angular/core';
import { PageComponent } from '@designr/page';

@Component({
	selector: 'not-found-component',
	templateUrl: './not-found.component.html',
})
export class NotFoundComponent extends PageComponent {

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

}
