import { InjectionToken } from '@angular/core';
import { InMemoryBackendConfigArgs } from 'angular-in-memory-web-api';
import { Datas } from '../data/datas';
export declare const DATA_CONFIG: InjectionToken<DataConfig>;
export declare class DataConfig {
    datas?: Datas;
    memory?: InMemoryBackendConfigArgs;
    constructor(options?: DataConfig);
}
