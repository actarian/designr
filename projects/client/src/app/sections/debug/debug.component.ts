import { Component, Input } from '@angular/core';
import { DisposableComponent, Page } from '@designr/core';

@Component({
	selector: 'debug-component',
	templateUrl: 'debug.component.html',
})
export class DebugComponent extends DisposableComponent {

	@Input() page: Page;

}
