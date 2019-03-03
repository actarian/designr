import { DataConfig } from '../config/data.config';
import { BackendService } from '../memory/backend.service';
import { MemoryDataService, MemoryRequest, MemoryResponse, ParsedRequestUrl } from '../memory/memory';
export declare class DataService implements MemoryDataService {
    config: DataConfig;
    constructor(config: DataConfig);
    createDb(): import("./data.config").Datas;
    parseRequestUrl(url: string, service: any): ParsedRequestUrl;
    requestInterceptor(request: MemoryRequest, service: BackendService): MemoryResponse;
}
