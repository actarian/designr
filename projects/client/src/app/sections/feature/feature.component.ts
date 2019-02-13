import { Component, Input } from '@angular/core';
import { DisposableComponent, Page } from '@designr/core';

@Component({
	selector: 'feature-component',
	templateUrl: 'feature.component.html',
})
export class FeatureComponent extends DisposableComponent {

	@Input() page: Page;

}
