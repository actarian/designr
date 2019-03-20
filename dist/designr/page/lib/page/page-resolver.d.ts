import { Type } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from './page';
import { PageComponent } from './page.component';
export declare class PageResolver {
    private configService;
    page: Page;
    component: Type<PageComponent>;
    constructor(configService: ConfigService, page: Page);
}
