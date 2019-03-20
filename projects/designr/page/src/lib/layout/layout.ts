import { Input, TemplateRef, Type } from '@angular/core';
import { Page } from '../page/page';

export class ILayoutComponent {
	@Input() template: TemplateRef<any>;
	page?: Page;
}

export interface Layouts { [key: string]: Type<ILayoutComponent>; }
