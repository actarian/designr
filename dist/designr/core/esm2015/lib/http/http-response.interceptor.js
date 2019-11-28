/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CoreService } from '../config/core.service';
import { LoggerErrorStrategy } from '../logger/logger';
import { Logger } from '../logger/logger.service';
import { RouteService } from '../route/route.service';
import { HttpStatusCodeService } from './http-status-code.service';
import * as i0 from "@angular/core";
import * as i1 from "./http-status-code.service";
export class HttpResponseInterceptor {
    /**
     * @param {?} injector
     * @param {?} statusCodeService
     */
    constructor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
        this.loggerErrorStrategy_ = LoggerErrorStrategy.Server;
        this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || LoggerErrorStrategy.Server;
    }
    /**
     * @return {?}
     */
    get config() {
        if (!this.config_) {
            this.config_ = this.injector.get(CoreService).options;
        }
        return this.config_;
    }
    /**
     * @return {?}
     */
    get logger() {
        if (!this.logger_) {
            this.logger_ = this.injector.get(Logger);
        }
        return this.logger_;
    }
    /**
     * @return {?}
     */
    get router() {
        if (!this.router_) {
            this.router_ = this.injector.get(Router);
        }
        return this.router_;
    }
    /**
     * @return {?}
     */
    get routeService() {
        if (!this.routeService_) {
            this.routeService_ = this.injector.get(RouteService);
        }
        return this.routeService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // injecting request
        // parsing response
        return next.handle(request).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.logger.httpError = null;
            // this.logger.log(response);
            if (response instanceof HttpResponse) {
                // console.log('response instanceof HttpResponse');
                // do stuff with response if you want
                if (response.status >= this.loggerErrorStrategy_) {
                    this.logger.http(response);
                }
            }
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
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
        })));
    }
}
HttpResponseInterceptor.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpResponseInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: HttpStatusCodeService }
];
/** @nocollapse */ HttpResponseInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function HttpResponseInterceptor_Factory() { return new HttpResponseInterceptor(i0.inject(i0.INJECTOR), i0.inject(i1.HttpStatusCodeService)); }, token: HttpResponseInterceptor, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.loggerErrorStrategy_;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.config_;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.logger_;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.router_;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.routeService_;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype.statusCodeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELFlBQVksRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUMvSSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLbkUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFvQ25DLFlBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQXBDekMseUJBQW9CLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQXNDOUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzNGLENBQUM7Ozs7SUFwQ0QsSUFBSSxNQUFNO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDdEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUdELElBQUksTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUdELElBQUksTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUdELElBQUksWUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBU0QsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDckQsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHOzs7O1FBQUMsQ0FBQyxRQUF3QixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzdCLDZCQUE2QjtZQUM3QixJQUFJLFFBQVEsWUFBWSxZQUFZLEVBQUU7Z0JBQ3JDLG1EQUFtRDtnQkFDbkQscUNBQXFDO2dCQUNyQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0I7YUFDRDtRQUNGLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtZQUN6QyxxREFBcUQ7WUFDckQsSUFBSSxRQUFRLFlBQVksaUJBQWlCLEVBQUU7Z0JBQzFDLHlEQUF5RDtnQkFDekQsNEdBQTRHO2dCQUM1RyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBZ0JFO2FBQ0Y7WUFDRCxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7O1lBMUZELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWJvQixRQUFRO1lBU3BCLHFCQUFxQjs7Ozs7Ozs7SUFPN0IsdURBQStFOzs7OztJQUUvRSwwQ0FBNEI7Ozs7O0lBUTVCLDBDQUF3Qjs7Ozs7SUFReEIsMENBQXdCOzs7OztJQVF4QixnREFBb0M7Ozs7O0lBU25DLDJDQUEwQjs7Ozs7SUFDMUIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwUmVzcG9uc2VCYXNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJFcnJvclN0cmF0ZWd5IH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXHRwcml2YXRlIGxvZ2dlckVycm9yU3RyYXRlZ3lfOiBMb2dnZXJFcnJvclN0cmF0ZWd5ID0gTG9nZ2VyRXJyb3JTdHJhdGVneS5TZXJ2ZXI7XG5cblx0cHJpdmF0ZSBjb25maWdfOiBDb3JlQ29uZmlnO1xuXHRnZXQgY29uZmlnKCk6IENvcmVDb25maWcge1xuXHRcdGlmICghdGhpcy5jb25maWdfKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ18gPSB0aGlzLmluamVjdG9yLmdldChDb3JlU2VydmljZSkub3B0aW9ucztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnXztcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2VyXzogTG9nZ2VyO1xuXHRnZXQgbG9nZ2VyKCkge1xuXHRcdGlmICghdGhpcy5sb2dnZXJfKSB7XG5cdFx0XHR0aGlzLmxvZ2dlcl8gPSB0aGlzLmluamVjdG9yLmdldChMb2dnZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5sb2dnZXJfO1xuXHR9XG5cblx0cHJpdmF0ZSByb3V0ZXJfOiBSb3V0ZXI7XG5cdGdldCByb3V0ZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnJvdXRlcl8pIHtcblx0XHRcdHRoaXMucm91dGVyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvdXRlcl87XG5cdH1cblxuXHRwcml2YXRlIHJvdXRlU2VydmljZV86IFJvdXRlU2VydmljZTtcblx0Z2V0IHJvdXRlU2VydmljZSgpIHtcblx0XHRpZiAoIXRoaXMucm91dGVTZXJ2aWNlXykge1xuXHRcdFx0dGhpcy5yb3V0ZVNlcnZpY2VfID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVTZXJ2aWNlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmxvZ2dlckVycm9yU3RyYXRlZ3lfID0gdGhpcy5jb25maWcubG9nZ2VyRXJyb3JTdHJhdGVneSB8fCBMb2dnZXJFcnJvclN0cmF0ZWd5LlNlcnZlcjtcblx0fVxuXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHQvLyBpbmplY3RpbmcgcmVxdWVzdFxuXHRcdC8vIHBhcnNpbmcgcmVzcG9uc2Vcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcblx0XHRcdHRhcCgocmVzcG9uc2U6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHBFcnJvciA9IG51bGw7XG5cdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZScpO1xuXHRcdFx0XHRcdC8vIGRvIHN0dWZmIHdpdGggcmVzcG9uc2UgaWYgeW91IHdhbnRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IHRoaXMubG9nZ2VyRXJyb3JTdHJhdGVneV8pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRjYXRjaEVycm9yKChyZXNwb25zZTogSHR0cFJlc3BvbnNlQmFzZSkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ0h0dHBSZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0XHRcdC8vICEhISBhZGQgbG9nRXJyb3JTdHJhdGVneSAoMTAwIElORk9STUFUSU9OQUwsIDIwMCBTVUNDRVNTLCAzMDAgUkVESVJFQ1QsIDQwMCBDTElFTlQsIDUwMCBTRVJWRVIsIDk5OSBOT05FKVxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gdGhpcy5sb2dnZXJFcnJvclN0cmF0ZWd5Xykge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0c3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcblx0XHRcdFx0XHRcdGNhc2UgNDAxOlxuXHRcdFx0XHRcdFx0XHQvLyB1bmF1dGhvcml6ZWRcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDQwNDpcblx0XHRcdFx0XHRcdFx0Ly8gbm90IGZvdW5kXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDk6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MTA6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aHJvd0Vycm9yKHJlc3BvbnNlKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=