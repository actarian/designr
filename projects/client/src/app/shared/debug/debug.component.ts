import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page } from '@designr/page';

@Component({
	selector: 'debug-component',
	templateUrl: 'debug.component.html',
})
export class DebugComponent extends DisposableComponent {

	@Input() page: Page;

}
