import { Component, Input, TemplateRef } from '@angular/core';
import { ILayoutComponent, Page } from '@designr/page';
import { DisposableComponent } from 'projects/designr/core/src/public_api';

@Component({
	selector: 'main-layout-component',
	templateUrl: 'main-layout.component.html',
	styleUrls: ['main-layout.component.scss'],
})
export class MainLayoutComponent extends DisposableComponent implements ILayoutComponent {
	@Input() template: TemplateRef<any>;
	page?: Page;
}
