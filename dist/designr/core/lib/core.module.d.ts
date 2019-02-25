import { ModuleWithProviders } from '@angular/core';
import { CoreConfig } from './config/core.config';
import { CoreModules } from './modules/core.modules';
export declare class CoreModule {
    constructor(parentModule: CoreModule);
    static forRoot(config?: CoreConfig, modules?: CoreModules): ModuleWithProviders;
}
