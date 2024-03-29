import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger.service';
import { HttpStatusCodeService } from './http-status-code.service';
export declare class HttpResponseInterceptor implements HttpInterceptor {
    private injector;
    private statusCodeService;
    private loggerErrorStrategy_;
    private config_;
    readonly config: CoreConfig;
    private logger_;
    readonly logger: Logger;
    private router_;
    readonly router: Router;
    private routeService_;
    readonly routeService: any;
    constructor(injector: Injector, statusCodeService: HttpStatusCodeService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
