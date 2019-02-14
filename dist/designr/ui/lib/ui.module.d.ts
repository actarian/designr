import { ModuleWithProviders } from '@angular/core';
import { UIConfig } from './config/ui.config';
export declare class UIModule {
    constructor(parentModule: UIModule);
    static forRoot(config?: UIConfig): ModuleWithProviders;
}
