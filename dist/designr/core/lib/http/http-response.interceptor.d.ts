import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Logger } from '../logger/logger';
import { HttpStatusCodeService } from './http-status-code.service';
export declare class HttpResponseInterceptor implements HttpInterceptor {
    private injector;
    private statusCodeService;
    private _logger;
    readonly logger: Logger;
    private _router;
    readonly router: Router;
    private _routeService;
    readonly routeService: any;
    constructor(injector: Injector, statusCodeService: HttpStatusCodeService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
