import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, Type } from '@angular/core';
import { MemoryBackendConfig, MemoryDataService } from './memory';
import * as i0 from "@angular/core";
export declare function BackendServiceFactory(dataService: MemoryDataService, config: MemoryBackendConfig, factory: XhrFactory): HttpBackend;
export declare class MemoryModule {
    static forRoot(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): i0.ModuleWithProviders<MemoryModule>;
    static forFeature(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): i0.ModuleWithProviders<MemoryModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MemoryModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDef<MemoryModule>;
}
