
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';

@Component({
	selector: 'section-sections',
	template: `<ng-container *ngFor="let section of sections">
	<section-outlet [section]="section"></section-outlet>
</ng-container>`,
})
export class SectionsComponent extends DisposableComponent {

	@Input() sections: Section[];

}
