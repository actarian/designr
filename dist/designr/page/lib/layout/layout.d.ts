import { TemplateRef, Type } from '@angular/core';
import { Page } from '../page/page';
export declare class ILayoutComponent {
    template: TemplateRef<any>;
    page?: Page;
}
export interface Layouts {
    [key: string]: Type<ILayoutComponent>;
}
