
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoreConfig } from '../config/core.config';
import { CoreService } from '../config/core.service';
import { LoggerErrorStrategy } from '../logger/logger';
import { Logger } from '../logger/logger.service';
import { RouteService } from '../route/route.service';
import { HttpStatusCodeService } from './http-status-code.service';

@Injectable({
	providedIn: 'root'
})
export class HttpResponseInterceptor implements HttpInterceptor {

	private loggerErrorStrategy_: LoggerErrorStrategy = LoggerErrorStrategy.Server;

	private config_: CoreConfig;
	get config(): CoreConfig {
		if (!this.config_) {
			this.config_ = this.injector.get(CoreService).options;
		}
		return this.config_;
	}

	private logger_: Logger;
	get logger() {
		if (!this.logger_) {
			this.logger_ = this.injector.get(Logger);
		}
		return this.logger_;
	}

	private router_: Router;
	get router() {
		if (!this.router_) {
			this.router_ = this.injector.get(Router);
		}
		return this.router_;
	}

	private routeService_: RouteService;
	get routeService() {
		if (!this.routeService_) {
			this.routeService_ = this.injector.get(RouteService);
		}
		return this.routeService;
	}

	constructor(
		private injector: Injector,
		private statusCodeService: HttpStatusCodeService,
	) {
		this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || LoggerErrorStrategy.Server;
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// injecting request
		// parsing response
		return next.handle(request).pipe(
			tap((response: HttpEvent<any>) => {
				this.logger.httpError = null;
				// this.logger.log(response);
				if (response instanceof HttpResponse) {
					// console.log('response instanceof HttpResponse');
					// do stuff with response if you want
					if (response.status >= this.loggerErrorStrategy_) {
						this.logger.http(response);
					}
				}
			}),
			catchError((response: HttpResponseBase) => {
				// console.warn('HttpResponseInterceptor', response);
				if (response instanceof HttpErrorResponse) {
					// this.statusCodeService.setStatusCode(response.status);
					// !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER, 999 NONE)
					if (response.status >= this.loggerErrorStrategy_) {
						this.logger.http(response);
					}
					/*
					switch (response.status) {
						case 401:
							// unauthorized
							break;
						case 404:
							// not found
							break;
						case 409:
							break;
						case 410:
							break;
						default:
							this.logger.http(response);
							break;
					}
					*/
				}
				return throwError(response);
			})
		);
	}

}
