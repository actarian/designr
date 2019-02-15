import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page } from '@designr/page';

@Component({
	selector: 'content-component',
	templateUrl: 'content.component.html',
})
export class ContentComponent extends DisposableComponent {

	@Input() page: Page;

}
