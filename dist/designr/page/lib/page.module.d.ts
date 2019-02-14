import { ModuleWithProviders } from '@angular/core';
import { PageConfig } from './config/page.config';
export declare class PageModule {
    constructor(parentModule: PageModule);
    static forRoot(config?: PageConfig): ModuleWithProviders;
}
