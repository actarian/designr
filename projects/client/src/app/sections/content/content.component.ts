import { Component, Input } from '@angular/core';
import { DisposableComponent, Page } from '@designr/core';

@Component({
	selector: 'content-component',
	templateUrl: 'content.component.html',
})
export class ContentComponent extends DisposableComponent {

	@Input() page: Page;

}
