import { InjectionToken, Type } from '@angular/core';
import { Pages } from '../page/page';
import { PageComponent } from '../page/page.component';
export declare class PageConfig {
    defaultPage?: Type<PageComponent>;
    notFoundPage?: Type<PageComponent>;
    pages?: Pages;
    constructor(options?: PageConfig);
}
export declare const PAGE_CONFIG: InjectionToken<PageConfig>;
