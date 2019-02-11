import { Component, Injector } from '@angular/core';
import { PageComponent } from '@designr/core';

@Component({
	selector: 'default-component',
	templateUrl: './default.component.html',
})
export class DefaultComponent extends PageComponent {

	constructor(
		protected injector: Injector,
	) {
		super(injector);
	}

}
