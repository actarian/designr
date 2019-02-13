import { Component, Input } from '@angular/core';
import { DisposableComponent, Page } from '@designr/core';

@Component({
	selector: 'hero-component',
	templateUrl: 'hero.component.html',
})
export class HeroComponent extends DisposableComponent {

	@Input() page: Page;

}
