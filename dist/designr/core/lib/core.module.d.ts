import { ModuleWithProviders } from '@angular/core';
import { CoreConfig } from './config/core.config';
export declare class CoreModule {
    constructor(parentModule: CoreModule);
    static forRoot(config?: CoreConfig): ModuleWithProviders;
}
