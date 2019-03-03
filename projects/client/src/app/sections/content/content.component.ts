import { Component, Input } from '@angular/core';
import { Page } from '@designr/page';
import { SectionComponent } from '@designr/section';

@Component({
	selector: 'content-component',
	templateUrl: 'content.component.html',
	styleUrls: ['content.component.scss'],
})
export class ContentComponent extends SectionComponent {

	@Input() page: Page;

}
