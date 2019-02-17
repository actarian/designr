import { ModuleWithProviders } from '@angular/core';
import { SectionConfig } from './config/section.config';
export declare class SectionModule {
    constructor(parentModule: SectionModule);
    static forRoot(config?: SectionConfig): ModuleWithProviders;
}
