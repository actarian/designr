import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../config/core.service';
import { LoggerError } from './logger';

@Injectable({
	providedIn: 'root'
})
export class Logger {

	httpError: LoggerError;
	logs: string[] = [];

	constructor(
		private coreService: CoreService,
	) {
		//
	}

	request(...args: any[]) {
		if (!this.coreService.options.production) {
			const s = args.join(', ');
			this.logs.push(s);
			// console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
		}
	}

	log(...args: any[]) {
		if (!this.coreService.options.production) {
			const s = args.join(', ');
			this.logs.push(s);
			console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
		}
	}

	warn(...args: any[]) {
		if (!this.coreService.options.production) {
			const s = args.join(', ');
			this.logs.push(s);
			console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
		}
	}

	error(...args: any[]) {
		if (!this.coreService.options.production) {
			const s = args.join(', ');
			this.logs.push(s);
			console.error.apply(console, args);
		}
	}

	http(response: HttpErrorResponse | HttpResponse<any>) {
		this.httpError = new LoggerError(response);
		if (!this.coreService.options.production) {
			this.logs.push(this.httpError.message);
		}
		console.warn('Logger.http.response', response.status, response.statusText, response.url);
	}

	clear() {
		this.httpError = null;
		this.logs = [];
	}
}
