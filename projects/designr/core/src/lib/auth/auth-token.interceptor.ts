
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouteService } from '../routes/route.service';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthTokenInterceptor implements HttpInterceptor {

	constructor(
		private router: Router,
		private routeService: RouteService,
		private authService: AuthService,
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// injecting request
		const authToken = this.authService.getToken();
		if (this.authService.isValid(authToken)) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${authToken.accessToken}`
				}
			});
		}
		// parsing response
		return next.handle(request).pipe(
			/*
			tap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					// do stuff with response if you want
					// console.log('AuthTokenInterceptor.success', event.status);
				}
			}),
			*/
			catchError((error: any) => {
				if (error instanceof HttpErrorResponse) {
					if (error.status === 401) {
						console.log('AuthTokenInterceptor.unautorized', error.status, error.statusText);
						this.authService.collectFailedRequest(request);
						const segments = this.routeService.toRoute(['/login']);
						this.router.navigate(segments);
						// redirect to the login route
						// or show a modal
					}
				}
				return throwError(error);
			})
		);
	}

}
