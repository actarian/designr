import { Component, Injector } from '@angular/core';
import { PageComponent } from '@designr/page';

@Component({
	selector: 'home-component',
	templateUrl: '../default/default.component.html',
})
export class HomeComponent extends PageComponent {

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

}
