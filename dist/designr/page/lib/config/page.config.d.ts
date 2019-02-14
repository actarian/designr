import { InjectionToken, Type } from '@angular/core';
import { PageComponent } from '../pages/page.component';
import { Pages } from '../pages/pages';
export declare class PageConfig {
    defaultPage?: Type<PageComponent>;
    notFoundPage?: Type<PageComponent>;
    pages?: Pages;
    constructor(options?: PageConfig);
}
export declare const PAGE_CONFIG: InjectionToken<PageConfig>;
