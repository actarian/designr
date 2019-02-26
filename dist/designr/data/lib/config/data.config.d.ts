import { InjectionToken } from '@angular/core';
import { MemoryBackendConfig } from '../memory/memory';
export declare const DATA_CONFIG: InjectionToken<DataConfig>;
export interface Datas {
    [key: string]: any[];
}
export declare class DataConfig {
    datas?: Datas;
    memory?: MemoryBackendConfig;
    constructor(options?: DataConfig);
}
