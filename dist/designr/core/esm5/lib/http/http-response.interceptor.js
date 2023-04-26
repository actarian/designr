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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELFlBQVksRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUMvSSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbkU7SUF1Q0MsaUNBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQXBDekMseUJBQW9CLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQXNDOUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBQzNGLENBQUM7SUFwQ0Qsc0JBQUksMkNBQU07Ozs7UUFBVjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUN0RDtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGlEQUFZOzs7O1FBQWhCO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7OztJQVNELDJDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkE0Q0M7UUEzQ0Esb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHOzs7O1FBQUMsVUFBQyxRQUF3QjtZQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0IsNkJBQTZCO1lBQzdCLElBQUksUUFBUSxZQUFZLFlBQVksRUFBRTtnQkFDckMsbURBQW1EO2dCQUNuRCxxQ0FBcUM7Z0JBQ3JDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQ2pELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMzQjthQUNEO1FBQ0YsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsUUFBMEI7WUFDckMscURBQXFEO1lBQ3JELElBQUksUUFBUSxZQUFZLGlCQUFpQixFQUFFO2dCQUMxQyx5REFBeUQ7Z0JBQ3pELDRHQUE0RztnQkFDNUcsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzNCO2dCQUNEOzs7Ozs7Ozs7Ozs7Ozs7O2tCQWdCRTthQUNGO1lBQ0QsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7O2dCQTFGRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQWJvQixRQUFRO2dCQVNwQixxQkFBcUI7OztrQ0FYOUI7Q0F5R0MsQUE1RkQsSUE0RkM7U0F6RlksdUJBQXVCOzs7Ozs7SUFFbkMsdURBQStFOzs7OztJQUUvRSwwQ0FBNEI7Ozs7O0lBUTVCLDBDQUF3Qjs7Ozs7SUFReEIsMENBQXdCOzs7OztJQVF4QixnREFBb0M7Ozs7O0lBU25DLDJDQUEwQjs7Ozs7SUFDMUIsb0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyRXJyb3JTdHJhdGVneSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZS9yb3V0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuXHRwcml2YXRlIGxvZ2dlckVycm9yU3RyYXRlZ3lfOiBMb2dnZXJFcnJvclN0cmF0ZWd5ID0gTG9nZ2VyRXJyb3JTdHJhdGVneS5TZXJ2ZXI7XHJcblxyXG5cdHByaXZhdGUgY29uZmlnXzogQ29yZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCk6IENvcmVDb25maWcge1xyXG5cdFx0aWYgKCF0aGlzLmNvbmZpZ18pIHtcclxuXHRcdFx0dGhpcy5jb25maWdfID0gdGhpcy5pbmplY3Rvci5nZXQoQ29yZVNlcnZpY2UpLm9wdGlvbnM7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWdfO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsb2dnZXJfOiBMb2dnZXI7XHJcblx0Z2V0IGxvZ2dlcigpIHtcclxuXHRcdGlmICghdGhpcy5sb2dnZXJfKSB7XHJcblx0XHRcdHRoaXMubG9nZ2VyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5sb2dnZXJfO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByb3V0ZXJfOiBSb3V0ZXI7XHJcblx0Z2V0IHJvdXRlcigpIHtcclxuXHRcdGlmICghdGhpcy5yb3V0ZXJfKSB7XHJcblx0XHRcdHRoaXMucm91dGVyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZXJfO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByb3V0ZVNlcnZpY2VfOiBSb3V0ZVNlcnZpY2U7XHJcblx0Z2V0IHJvdXRlU2VydmljZSgpIHtcclxuXHRcdGlmICghdGhpcy5yb3V0ZVNlcnZpY2VfKSB7XHJcblx0XHRcdHRoaXMucm91dGVTZXJ2aWNlXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2U7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0dGhpcy5sb2dnZXJFcnJvclN0cmF0ZWd5XyA9IHRoaXMuY29uZmlnLmxvZ2dlckVycm9yU3RyYXRlZ3kgfHwgTG9nZ2VyRXJyb3JTdHJhdGVneS5TZXJ2ZXI7XHJcblx0fVxyXG5cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHQvLyBpbmplY3RpbmcgcmVxdWVzdFxyXG5cdFx0Ly8gcGFyc2luZyByZXNwb25zZVxyXG5cdFx0cmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXHJcblx0XHRcdHRhcCgocmVzcG9uc2U6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cEVycm9yID0gbnVsbDtcclxuXHRcdFx0XHQvLyB0aGlzLmxvZ2dlci5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlJyk7XHJcblx0XHRcdFx0XHQvLyBkbyBzdHVmZiB3aXRoIHJlc3BvbnNlIGlmIHlvdSB3YW50XHJcblx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IHRoaXMubG9nZ2VyRXJyb3JTdHJhdGVneV8pIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigocmVzcG9uc2U6IEh0dHBSZXNwb25zZUJhc2UpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ0h0dHBSZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUocmVzcG9uc2Uuc3RhdHVzKTtcclxuXHRcdFx0XHRcdC8vICEhISBhZGQgbG9nRXJyb3JTdHJhdGVneSAoMTAwIElORk9STUFUSU9OQUwsIDIwMCBTVUNDRVNTLCAzMDAgUkVESVJFQ1QsIDQwMCBDTElFTlQsIDUwMCBTRVJWRVIsIDk5OSBOT05FKVxyXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSB0aGlzLmxvZ2dlckVycm9yU3RyYXRlZ3lfKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgNDAxOlxyXG5cdFx0XHRcdFx0XHRcdC8vIHVuYXV0aG9yaXplZFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIDQwNDpcclxuXHRcdFx0XHRcdFx0XHQvLyBub3QgZm91bmRcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSA0MDk6XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgNDEwOlxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRocm93RXJyb3IocmVzcG9uc2UpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==