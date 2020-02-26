import { DataConfig } from '../config/data.config';
import { BackendService } from '../memory/backend.service';
import { MemoryDataService, MemoryRequest, MemoryResponse, ParsedRequestUrl } from '../memory/memory';
import * as i0 from "@angular/core";
export declare class DataService implements MemoryDataService {
    config: DataConfig;
    constructor(config: DataConfig);
    createDb(): import("./data.config").Datas;
    parseRequestUrl(url: string, service: any): ParsedRequestUrl;
    requestInterceptor(request: MemoryRequest, service: BackendService): MemoryResponse;
    static ɵfac: i0.ɵɵFactoryDef<DataService>;
    static ɵprov: i0.ɵɵInjectableDef<DataService>;
}
