import { ModuleWithProviders } from '@angular/core';
import { ControlConfig } from './config/control.config';
export declare class ControlModule {
    constructor(parentModule: ControlModule);
    static forRoot(config?: ControlConfig): ModuleWithProviders;
}
