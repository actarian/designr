import { DataConfig } from '../config/data.config';
import { MemoryDataService, ParsedRequestUrl } from '../memory/memory';
export declare class DataService implements MemoryDataService {
    config: DataConfig;
    constructor(config: DataConfig);
    createDb(): import("./data.config").Datas;
    parseRequestUrl(url: string, service: any): ParsedRequestUrl;
}
