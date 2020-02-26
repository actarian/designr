import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreConfig } from '../config/core.config';
import { Logger } from '../logger/logger.service';
import { HttpStatusCodeService } from './http-status-code.service';
import * as i0 from "@angular/core";
export declare class HttpResponseInterceptor implements HttpInterceptor {
    private injector;
    private statusCodeService;
    private loggerErrorStrategy_;
    private config_;
    get config(): CoreConfig;
    private logger_;
    get logger(): Logger;
    private router_;
    get router(): Router;
    private routeService_;
    get routeService(): any;
    constructor(injector: Injector, statusCodeService: HttpStatusCodeService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<HttpResponseInterceptor>;
    static ɵprov: i0.ɵɵInjectableDef<HttpResponseInterceptor>;
}
