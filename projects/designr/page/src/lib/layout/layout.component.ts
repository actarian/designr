import { Component, Input, TemplateRef } from '@angular/core';
import { Page } from '../page/page';
import { ILayoutComponent } from './layout';

@Component({
	selector: 'layout-component',
	template: `<div [ngClass]="page?.component">
	<ng-container *ngTemplateOutlet="template"></ng-container>
</div>`
})
export class LayoutComponent implements ILayoutComponent {
	@Input() template: TemplateRef<any>;
	page?: Page;
}
