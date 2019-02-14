import { Type } from '@angular/core';
import { Page } from './page';
import { PageComponent } from './page.component';
import { PageService } from './page.service';
export declare class PageResolver {
    private pageService;
    page: Page;
    component: Type<PageComponent>;
    constructor(pageService: PageService, page: Page);
}
