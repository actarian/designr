import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
export declare class LoggerError extends HttpErrorResponse {
    body?: any;
}
export declare class Logger {
    private configService;
    httpError: LoggerError;
    logs: string[];
    constructor(configService: ConfigService);
    request(...args: any[]): void;
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    http(error: HttpErrorResponse): void;
    clear(): void;
}
