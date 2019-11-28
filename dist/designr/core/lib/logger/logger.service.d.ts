import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CoreService } from '../config/core.service';
import { LoggerError } from './logger';
export declare class Logger {
    private coreService;
    httpError: LoggerError;
    logs: string[];
    constructor(coreService: CoreService);
    request(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    http(response: HttpErrorResponse | HttpResponse<any>): void;
    clear(): void;
}
