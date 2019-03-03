import { Component, Input } from '@angular/core';
import { Page } from '@designr/page';
import { SectionComponent } from '@designr/section';

@Component({
	selector: 'feature-component',
	templateUrl: 'feature.component.html',
	styleUrls: ['feature.component.scss'],
})
export class FeatureComponent extends SectionComponent {

	@Input() page: Page;

}
