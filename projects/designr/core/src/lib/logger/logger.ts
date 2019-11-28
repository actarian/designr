import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export enum LoggerErrorStrategy {
	Informational = 100,
	Success = 200,
	Redirect = 300,
	Client = 400,
	Server = 500,
	None = 999,
}

export class LoggerError extends HttpErrorResponse {
	body?: any;

	constructor(response?: HttpErrorResponse | HttpResponse<any>) {
		super({
			error: response instanceof HttpErrorResponse ? response.error : response.statusText,
			headers: response.headers,
			status: response.status,
			statusText: response.statusText,
			url: response.url,
		});
	}

	get statusType(): string {
		return Object.keys(LoggerErrorStrategy).reduce((type: string, key: string) => {
			if (this.status >= LoggerErrorStrategy[key]) {
				type = key.toLowerCase();
			}
			return type;
		}, null);
	}

}
