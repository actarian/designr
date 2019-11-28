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
var HttpResponseInterceptor = /** @class */ (function () {
    function HttpResponseInterceptor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
        this.loggerErrorStrategy_ = LoggerErrorStrategy.Server;
        this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || LoggerErrorStrategy.Server;
    }
    Object.defineProperty(HttpResponseInterceptor.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.config_) {
                this.config_ = this.injector.get(CoreService).options;
            }
            return this.config_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseInterceptor.prototype, "logger", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.logger_) {
                this.logger_ = this.injector.get(Logger);
            }
            return this.logger_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseInterceptor.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.router_) {
                this.router_ = this.injector.get(Router);
            }
            return this.router_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseInterceptor.prototype, "routeService", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.routeService_) {
                this.routeService_ = this.injector.get(RouteService);
            }
            return this.routeService;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    HttpResponseInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        // injecting request
        // parsing response
        return next.handle(request).pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.logger.httpError = null;
            // this.logger.log(response);
            if (response instanceof HttpResponse) {
                // console.log('response instanceof HttpResponse');
                // do stuff with response if you want
                if (response.status >= _this.loggerErrorStrategy_) {
                    _this.logger.http(response);
                }
            }
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            // console.warn('HttpResponseInterceptor', response);
            if (response instanceof HttpErrorResponse) {
                // this.statusCodeService.setStatusCode(response.status);
                // !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER, 999 NONE)
                if (response.status >= _this.loggerErrorStrategy_) {
                    _this.logger.http(response);
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
    };
    HttpResponseInterceptor.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpResponseInterceptor.ctorParameters = function () { return [
        { type: Injector },
        { type: HttpStatusCodeService }
    ]; };
    /** @nocollapse */ HttpResponseInterceptor.ngInjectableDef = i0.defineInjectable({ factory: function HttpResponseInterceptor_Factory() { return new HttpResponseInterceptor(i0.inject(i0.INJECTOR), i0.inject(i1.HttpStatusCodeService)); }, token: HttpResponseInterceptor, providedIn: "root" });
    return HttpResponseInterceptor;
}());
export { HttpResponseInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELFlBQVksRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUMvSSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbkU7SUF1Q0MsaUNBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQXBDekMseUJBQW9CLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQXNDOUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzNGLENBQUM7SUFwQ0Qsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGlEQUFZOzs7O1FBQWhCO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7OztJQVNELDJDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkE0Q0M7UUEzQ0Esb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHOzs7O1FBQUMsVUFBQyxRQUF3QjtZQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0IsNkJBQTZCO1lBQzdCLElBQUksUUFBUSxZQUFZLFlBQVksRUFBRTtnQkFDckMsbURBQW1EO2dCQUNuRCxxQ0FBcUM7Z0JBQ3JDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQ2pELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMzQjthQUNEO1FBQ0YsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsUUFBMEI7WUFDckMscURBQXFEO1lBQ3JELElBQUksUUFBUSxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyx5REFBeUQ7Z0JBQ3pELDRHQUE0RztnQkFDNUcsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzNCO2dCQUNEOzs7Ozs7Ozs7Ozs7Ozs7O2tCQWdCRTthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7O2dCQTFGRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWJvQixRQUFRO2dCQVNwQixxQkFBcUI7OztrQ0FYOUI7Q0F5R0MsQUE1RkQsSUE0RkM7U0F6RlksdUJBQXVCOzs7Ozs7SUFFbkMsdURBQStFOzs7OztJQUUvRSwwQ0FBNEI7Ozs7O0lBUTVCLDBDQUF3Qjs7Ozs7SUFReEIsMENBQXdCOzs7OztJQVF4QixnREFBb0M7Ozs7O0lBU25DLDJDQUEwQjs7Ozs7SUFDMUIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwUmVzcG9uc2VCYXNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJFcnJvclN0cmF0ZWd5IH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXHRwcml2YXRlIGxvZ2dlckVycm9yU3RyYXRlZ3lfOiBMb2dnZXJFcnJvclN0cmF0ZWd5ID0gTG9nZ2VyRXJyb3JTdHJhdGVneS5TZXJ2ZXI7XG5cblx0cHJpdmF0ZSBjb25maWdfOiBDb3JlQ29uZmlnO1xuXHRnZXQgY29uZmlnKCk6IENvcmVDb25maWcge1xuXHRcdGlmICghdGhpcy5jb25maWdfKSB7XG5cdFx0XHR0aGlzLmNvbmZpZ18gPSB0aGlzLmluamVjdG9yLmdldChDb3JlU2VydmljZSkub3B0aW9ucztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnXztcblx0fVxuXG5cdHByaXZhdGUgbG9nZ2VyXzogTG9nZ2VyO1xuXHRnZXQgbG9nZ2VyKCkge1xuXHRcdGlmICghdGhpcy5sb2dnZXJfKSB7XG5cdFx0XHR0aGlzLmxvZ2dlcl8gPSB0aGlzLmluamVjdG9yLmdldChMb2dnZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5sb2dnZXJfO1xuXHR9XG5cblx0cHJpdmF0ZSByb3V0ZXJfOiBSb3V0ZXI7XG5cdGdldCByb3V0ZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnJvdXRlcl8pIHtcblx0XHRcdHRoaXMucm91dGVyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvdXRlcl87XG5cdH1cblxuXHRwcml2YXRlIHJvdXRlU2VydmljZV86IFJvdXRlU2VydmljZTtcblx0Z2V0IHJvdXRlU2VydmljZSgpIHtcblx0XHRpZiAoIXRoaXMucm91dGVTZXJ2aWNlXykge1xuXHRcdFx0dGhpcy5yb3V0ZVNlcnZpY2VfID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVTZXJ2aWNlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxuXHQpIHtcblx0XHR0aGlzLmxvZ2dlckVycm9yU3RyYXRlZ3lfID0gdGhpcy5jb25maWcubG9nZ2VyRXJyb3JTdHJhdGVneSB8fCBMb2dnZXJFcnJvclN0cmF0ZWd5LlNlcnZlcjtcblx0fVxuXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHQvLyBpbmplY3RpbmcgcmVxdWVzdFxuXHRcdC8vIHBhcnNpbmcgcmVzcG9uc2Vcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcblx0XHRcdHRhcCgocmVzcG9uc2U6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHBFcnJvciA9IG51bGw7XG5cdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhyZXNwb25zZSk7XG5cdFx0XHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZScpO1xuXHRcdFx0XHRcdC8vIGRvIHN0dWZmIHdpdGggcmVzcG9uc2UgaWYgeW91IHdhbnRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IHRoaXMubG9nZ2VyRXJyb3JTdHJhdGVneV8pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRjYXRjaEVycm9yKChyZXNwb25zZTogSHR0cFJlc3BvbnNlQmFzZSkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ0h0dHBSZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShyZXNwb25zZS5zdGF0dXMpO1xuXHRcdFx0XHRcdC8vICEhISBhZGQgbG9nRXJyb3JTdHJhdGVneSAoMTAwIElORk9STUFUSU9OQUwsIDIwMCBTVUNDRVNTLCAzMDAgUkVESVJFQ1QsIDQwMCBDTElFTlQsIDUwMCBTRVJWRVIsIDk5OSBOT05FKVxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gdGhpcy5sb2dnZXJFcnJvclN0cmF0ZWd5Xykge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0c3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcblx0XHRcdFx0XHRcdGNhc2UgNDAxOlxuXHRcdFx0XHRcdFx0XHQvLyB1bmF1dGhvcml6ZWRcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDQwNDpcblx0XHRcdFx0XHRcdFx0Ly8gbm90IGZvdW5kXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDk6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MTA6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aHJvd0Vycm9yKHJlc3BvbnNlKTtcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=