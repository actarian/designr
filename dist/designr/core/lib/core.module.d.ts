import { ModuleWithProviders } from '@angular/core';
import { Bundles } from './bundle/bundle';
import { CoreConfig } from './config/core.config';
export declare class CoreModule {
    constructor(parentModule: CoreModule);
    static forRoot(bundles?: Bundles, config?: CoreConfig): ModuleWithProviders;
}
