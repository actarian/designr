import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page } from '@designr/page';

@Component({
	selector: 'feature-component',
	templateUrl: 'feature.component.html',
})
export class FeatureComponent extends DisposableComponent {

	@Input() page: Page;

}
