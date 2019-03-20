import { TemplateRef } from '@angular/core';
import { Page } from '../page/page';
import { ILayoutComponent } from './layout';
export declare class LayoutComponent implements ILayoutComponent {
    template: TemplateRef<any>;
    page?: Page;
}
