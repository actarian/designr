import { InjectionToken, Type } from '@angular/core';
import { Layouts } from '../layout/layout';
import { LayoutComponent } from '../layout/layout.component';
import { Pages } from '../page/page';
import { PageComponent } from '../page/page.component';
export declare class PageConfig {
    defaultPage?: Type<PageComponent>;
    notFoundPage?: Type<PageComponent>;
    defaultLayout?: Type<LayoutComponent>;
    pages?: Pages;
    layouts?: Layouts;
    constructor(options?: PageConfig);
}
export declare const PAGE_CONFIG: InjectionToken<PageConfig>;
