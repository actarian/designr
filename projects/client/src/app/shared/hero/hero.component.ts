import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page } from '@designr/page';

@Component({
	selector: 'hero-component',
	templateUrl: 'hero.component.html',
	styleUrls: ['hero.component.scss'],
})
export class HeroComponent extends DisposableComponent {

	@Input() page: Page;

}
