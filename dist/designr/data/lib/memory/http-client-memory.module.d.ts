import { HttpBackend, XhrFactory } from '@angular/common/http';
import { ModuleWithProviders, Type } from '@angular/core';
import { MemoryBackendConfig, MemoryDataService } from './memory';
export declare function httpClientBackendServiceFactory(dataService: MemoryDataService, config: MemoryBackendConfig, factory: XhrFactory): HttpBackend;
export declare class HttpClientMemoryModule {
    static forRoot(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): ModuleWithProviders;
    static forFeature(dataService: Type<MemoryDataService>, config?: MemoryBackendConfig): ModuleWithProviders;
}
