import { HttpErrorResponse } from '@angular/common/http';
export declare enum LoggerErrorStrategy {
    Informational = 100,
    Success = 200,
    Redirect = 300,
    Client = 400,
    Server = 500
}
export declare class LoggerError extends HttpErrorResponse {
    body?: any;
}
