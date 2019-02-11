
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Logger } from '../logger/logger';
import { RouteService } from '../routes/route.service';
import { HttpStatusCodeService } from './http-status-code.service';

@Injectable({
	providedIn: 'root'
})
export class HttpResponseInterceptor implements HttpInterceptor {

	private _logger: Logger;
	get logger() {
		if (!this._logger) {
			this._logger = this.injector.get(Logger);
		}
		return this._logger;
	}

	private _router: Router;
	get router() {
		if (!this._router) {
			this._router = this.injector.get(Router);
		}
		return this._router;
	}

	private _routeService: RouteService;
	get routeService() {
		if (!this._routeService) {
			this._routeService = this.injector.get(RouteService);
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
				}
				return throwError(error);
			})
		);
	}

}
