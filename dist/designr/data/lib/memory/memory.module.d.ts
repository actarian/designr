import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, Type } from '@angular/core';
import { MemoryBackendConfig, MemoryDataService } from './memory';
export declare function BackendServiceFactory(dataService: MemoryDataService, config: MemoryBackendConfig, factory: XhrFactory): HttpBackend;
export declare class MemoryModule {
    static forRoot(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): ModuleWithProviders;
    static forFeature(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): ModuleWithProviders;
}
