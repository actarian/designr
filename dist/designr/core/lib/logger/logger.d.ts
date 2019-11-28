import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
export declare enum LoggerErrorStrategy {
    Informational = 100,
    Success = 200,
    Redirect = 300,
    Client = 400,
    Server = 500,
    None = 999
}
export declare class LoggerError extends HttpErrorResponse {
    body?: any;
    constructor(response?: HttpErrorResponse | HttpResponse<any>);
    readonly statusType: string;
}
