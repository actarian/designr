import { InMemoryDbService, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { DataConfig } from '../config/data.config';
export declare class MemoryService implements InMemoryDbService {
    private config;
    constructor(config: DataConfig);
    createDb(): import("../data/datas").Datas;
    parseRequestUrl(url: string, service: any): ParsedRequestUrl;
}
