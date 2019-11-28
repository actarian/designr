import { HttpErrorResponse } from '@angular/common/http';

export enum LoggerErrorStrategy {
	Informational = 100,
	Success = 200,
	Redirect = 300,
	Client = 400,
	Server = 500
}

export class LoggerError extends HttpErrorResponse {
	body?: any;
}
