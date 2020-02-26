import { ModuleWithProviders } from '@angular/core';
import { DataConfig } from './config/data.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-module.component";
import * as i2 from "@angular/common";
import * as i3 from "@angular/common/http";
import * as i4 from "./memory/memory.module";
import * as i5 from "@designr/core";
export declare class DataModule {
    constructor(parentModule: DataModule);
    static forRoot(config?: DataConfig): i0.ModuleWithProviders<DataModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<DataModule, [typeof i1.DataModuleComponent], [typeof i2.CommonModule, typeof i3.HttpClientModule, typeof i4.MemoryModule, typeof i5.CoreModule], [typeof i4.MemoryModule, typeof i5.CoreModule, typeof i1.DataModuleComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<DataModule>;
}
