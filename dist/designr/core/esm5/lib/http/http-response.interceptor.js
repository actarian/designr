/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
        this.httpErrorLogStrategy_ = LoggerErrorStrategy.Server;
    }
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
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // console.log('HttpResponseInterceptor', event);
            _this.logger.httpError = null;
            // this.logger.log(event);
            /*
            if (event instanceof HttpResponse) {
                // console.log('event instanceof HttpResponse');
                // do stuff with response if you want
            }
            */
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.warn('HttpResponseInterceptor', error);
            if (error instanceof HttpErrorResponse) {
                // this.statusCodeService.setStatusCode(error.status);
                // !!! add logErrorStrategy (100 INFORMATIONAL, 200 SUCCESS, 300 REDIRECT, 400 CLIENT, 500 SERVER)
                if (error.status >= _this.httpErrorLogStrategy_) {
                    _this.logger.http(error);
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
    HttpResponseInterceptor.prototype.httpErrorLogStrategy_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbkU7SUErQkMsaUNBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtRQTVCekMsMEJBQXFCLEdBQXdCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQTZCNUUsQ0FBQztJQTFCTCxzQkFBSSwyQ0FBTTs7OztRQUFWO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSwyQ0FBTTs7OztRQUFWO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxpREFBWTs7OztRQUFoQjtZQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7OztPQUFBOzs7Ozs7SUFPRCwyQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFBdEQsaUJBNENDO1FBM0NBLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDL0IsR0FBRzs7OztRQUFDLFVBQUMsS0FBcUI7WUFDekIsaURBQWlEO1lBQ2pELEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM3QiwwQkFBMEI7WUFDMUI7Ozs7O2NBS0U7UUFDSCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsVUFBQyxLQUFVO1lBQ3JCLGtEQUFrRDtZQUNsRCxJQUFJLEtBQUssWUFBWSxpQkFBaUIsRUFBRTtnQkFDdkMsc0RBQXNEO2dCQUN0RCxrR0FBa0c7Z0JBQ2xHLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQy9DLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRDs7Ozs7Ozs7Ozs7Ozs7OztrQkFnQkU7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSCxDQUFDOztnQkFoRkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFYb0IsUUFBUTtnQkFPcEIscUJBQXFCOzs7a0NBVDlCO0NBNkZDLEFBbEZELElBa0ZDO1NBL0VZLHVCQUF1Qjs7Ozs7O0lBRW5DLHdEQUFnRjs7Ozs7SUFFaEYsMENBQXdCOzs7OztJQVF4QiwwQ0FBd0I7Ozs7O0lBUXhCLGdEQUFvQzs7Ozs7SUFTbkMsMkNBQTBCOzs7OztJQUMxQixvREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMb2dnZXJFcnJvclN0cmF0ZWd5IH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXHRwcml2YXRlIGh0dHBFcnJvckxvZ1N0cmF0ZWd5XzogTG9nZ2VyRXJyb3JTdHJhdGVneSA9IExvZ2dlckVycm9yU3RyYXRlZ3kuU2VydmVyO1xuXG5cdHByaXZhdGUgbG9nZ2VyXzogTG9nZ2VyO1xuXHRnZXQgbG9nZ2VyKCkge1xuXHRcdGlmICghdGhpcy5sb2dnZXJfKSB7XG5cdFx0XHR0aGlzLmxvZ2dlcl8gPSB0aGlzLmluamVjdG9yLmdldChMb2dnZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5sb2dnZXJfO1xuXHR9XG5cblx0cHJpdmF0ZSByb3V0ZXJfOiBSb3V0ZXI7XG5cdGdldCByb3V0ZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnJvdXRlcl8pIHtcblx0XHRcdHRoaXMucm91dGVyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvdXRlcl87XG5cdH1cblxuXHRwcml2YXRlIHJvdXRlU2VydmljZV86IFJvdXRlU2VydmljZTtcblx0Z2V0IHJvdXRlU2VydmljZSgpIHtcblx0XHRpZiAoIXRoaXMucm91dGVTZXJ2aWNlXykge1xuXHRcdFx0dGhpcy5yb3V0ZVNlcnZpY2VfID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVTZXJ2aWNlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0cHJpdmF0ZSBzdGF0dXNDb2RlU2VydmljZTogSHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHQvLyBpbmplY3RpbmcgcmVxdWVzdFxuXHRcdC8vIHBhcnNpbmcgcmVzcG9uc2Vcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcblx0XHRcdHRhcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdIdHRwUmVzcG9uc2VJbnRlcmNlcHRvcicsIGV2ZW50KTtcblx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cEVycm9yID0gbnVsbDtcblx0XHRcdFx0Ly8gdGhpcy5sb2dnZXIubG9nKGV2ZW50KTtcblx0XHRcdFx0Lypcblx0XHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2V2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlJyk7XG5cdFx0XHRcdFx0Ly8gZG8gc3R1ZmYgd2l0aCByZXNwb25zZSBpZiB5b3Ugd2FudFxuXHRcdFx0XHR9XG5cdFx0XHRcdCovXG5cdFx0XHR9KSxcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS53YXJuKCdIdHRwUmVzcG9uc2VJbnRlcmNlcHRvcicsIGVycm9yKTtcblx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyB0aGlzLnN0YXR1c0NvZGVTZXJ2aWNlLnNldFN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzKTtcblx0XHRcdFx0XHQvLyAhISEgYWRkIGxvZ0Vycm9yU3RyYXRlZ3kgKDEwMCBJTkZPUk1BVElPTkFMLCAyMDAgU1VDQ0VTUywgMzAwIFJFRElSRUNULCA0MDAgQ0xJRU5ULCA1MDAgU0VSVkVSKVxuXHRcdFx0XHRcdGlmIChlcnJvci5zdGF0dXMgPj0gdGhpcy5odHRwRXJyb3JMb2dTdHJhdGVneV8pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG5cdFx0XHRcdFx0XHRjYXNlIDQwMTpcblx0XHRcdFx0XHRcdFx0Ly8gdW5hdXRob3JpemVkXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDQ6XG5cdFx0XHRcdFx0XHRcdC8vIG5vdCBmb3VuZFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNDA5OlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNDEwOlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAoZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ki9cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19