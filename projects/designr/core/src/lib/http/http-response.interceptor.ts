
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoggerErrorStrategy } from '../logger/logger';
import { Logger } from '../logger/logger.service';
import { RouteService } from '../route/route.service';
import { HttpStatusCodeService } from './http-status-code.service';

@Injectable({
	providedIn: 'root'
})
export class HttpResponseInterceptor implements HttpInterceptor {

	private httpErrorLogStrategy_: LoggerErrorStrategy = LoggerErrorStrategy.Server;

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
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// injecting request
		// parsing response
		return next.handle(request).pipe(
			tap((event: HttpEvent<any>) => {
				// console.log('HttpResponseInterceptor', event);
				this.logger.httpError = null;
				// this.logger.log(event);
				/*
				if (event instanceof HttpResponse) {
					// console.log('event instanceof HttpResponse');
					// do stuff with response if you want
				}
				*/
			}),
			catchError((error: any) => {
				// console.warn('HttpResponseInterceptor', error);
				if (error instanceof HttpErrorResponse) {
					// this.statusCodeService.setStatusCode(error.status);
					// !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER)
					if (error.status >= this.httpErrorLogStrategy_) {
						this.logger.http(error);
					}
					/*
					switch (error.status) {
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
							this.logger.http(error);
							break;
					}
					*/
				}
				return throwError(error);
			})
		);
	}

}
