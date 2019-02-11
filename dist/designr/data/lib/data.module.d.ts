import { ModuleWithProviders } from '@angular/core';
import { DataConfig } from './config/data.config';
export declare class DataModule {
    constructor(parentModule: DataModule);
    static forRoot(config?: DataConfig): ModuleWithProviders;
}
