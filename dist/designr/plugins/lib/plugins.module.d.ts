import { ModuleWithProviders } from '@angular/core';
import { PluginsConfig } from './config/plugins.config';
export declare class PluginsModule {
    constructor(parentModule: PluginsModule);
    static forRoot(config?: PluginsConfig): ModuleWithProviders;
}
