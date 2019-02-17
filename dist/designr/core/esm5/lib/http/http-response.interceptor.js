/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Logger } from '../logger/logger';
import { RouteService } from '../route/route.service';
import { HttpStatusCodeService } from './http-status-code.service';
import * as i0 from "@angular/core";
import * as i1 from "./http-status-code.service";
var HttpResponseInterceptor = /** @class */ (function () {
    function HttpResponseInterceptor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
    }
    Object.defineProperty(HttpResponseInterceptor.prototype, "logger", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._logger) {
                this._logger = this.injector.get(Logger);
            }
            return this._logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseInterceptor.prototype, "router", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._router) {
                this._router = this.injector.get(Router);
            }
            return this._router;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpResponseInterceptor.prototype, "routeService", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._routeService) {
                this._routeService = this.injector.get(RouteService);
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
        return next.handle(request).pipe(tap(function (event) {
            // console.log('HttpResponseInterceptor', event);
            _this.logger.httpError = null;
            // this.logger.log(event);
            /*
            if (event instanceof HttpResponse) {
                // console.log('event instanceof HttpResponse');
                // do stuff with response if you want
            }
            */
        }), catchError(function (error) {
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
                        _this.logger.http(error);
                        break;
                }
            }
            return throwError(error);
        }));
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
    HttpResponseInterceptor.prototype._logger;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype._router;
    /**
     * @type {?}
     * @private
     */
    HttpResponseInterceptor.prototype._routeService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFFbkU7SUE2QkMsaUNBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtJQUM3QyxDQUFDO0lBMUJMLHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDJDQUFNOzs7O1FBQVY7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGlEQUFZOzs7O1FBQWhCO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7OztJQU9ELDJDQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFzQ0M7UUFyQ0Esb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHLENBQUMsVUFBQyxLQUFxQjtZQUN6QixpREFBaUQ7WUFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzdCLDBCQUEwQjtZQUMxQjs7Ozs7Y0FLRTtRQUNILENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLEtBQVU7WUFDckIsa0RBQWtEO1lBQ2xELElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUN2QyxzREFBc0Q7Z0JBQ3RELFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDckIsS0FBSyxHQUFHO3dCQUNQLGVBQWU7d0JBQ2YsTUFBTTtvQkFDUCxLQUFLLEdBQUc7d0JBQ1AsWUFBWTt3QkFDWixNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFDUCxNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFDUCxNQUFNO29CQUNQO3dCQUNDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4QixNQUFNO2lCQUNQO2FBQ0Q7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQzs7Z0JBeEVELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVm9CLFFBQVE7Z0JBTXBCLHFCQUFxQjs7O2tDQVI5QjtDQW9GQyxBQTFFRCxJQTBFQztTQXZFWSx1QkFBdUI7Ozs7OztJQUVuQywwQ0FBd0I7Ozs7O0lBUXhCLDBDQUF3Qjs7Ozs7SUFReEIsZ0RBQW9DOzs7OztJQVNuQywyQ0FBMEI7Ozs7O0lBQzFCLG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuXHRwcml2YXRlIF9sb2dnZXI6IExvZ2dlcjtcblx0Z2V0IGxvZ2dlcigpIHtcblx0XHRpZiAoIXRoaXMuX2xvZ2dlcikge1xuXHRcdFx0dGhpcy5fbG9nZ2VyID0gdGhpcy5pbmplY3Rvci5nZXQoTG9nZ2VyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2xvZ2dlcjtcblx0fVxuXG5cdHByaXZhdGUgX3JvdXRlcjogUm91dGVyO1xuXHRnZXQgcm91dGVyKCkge1xuXHRcdGlmICghdGhpcy5fcm91dGVyKSB7XG5cdFx0XHR0aGlzLl9yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fcm91dGVyO1xuXHR9XG5cblx0cHJpdmF0ZSBfcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2U7XG5cdGdldCByb3V0ZVNlcnZpY2UoKSB7XG5cdFx0aWYgKCF0aGlzLl9yb3V0ZVNlcnZpY2UpIHtcblx0XHRcdHRoaXMuX3JvdXRlU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlU2VydmljZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdHByaXZhdGUgc3RhdHVzQ29kZVNlcnZpY2U6IEh0dHBTdGF0dXNDb2RlU2VydmljZSxcblx0KSB7IH1cblxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cdFx0Ly8gaW5qZWN0aW5nIHJlcXVlc3Rcblx0XHQvLyBwYXJzaW5nIHJlc3BvbnNlXG5cdFx0cmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG5cdFx0XHR0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3InLCBldmVudCk7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHBFcnJvciA9IG51bGw7XG5cdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhldmVudCk7XG5cdFx0XHRcdC8qXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZScpO1xuXHRcdFx0XHRcdC8vIGRvIHN0dWZmIHdpdGggcmVzcG9uc2UgaWYgeW91IHdhbnRcblx0XHRcdFx0fVxuXHRcdFx0XHQqL1xuXHRcdFx0fSksXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUud2FybignSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3InLCBlcnJvcik7XG5cdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKGVycm9yLnN0YXR1cyk7XG5cdFx0XHRcdFx0c3dpdGNoIChlcnJvci5zdGF0dXMpIHtcblx0XHRcdFx0XHRcdGNhc2UgNDAxOlxuXHRcdFx0XHRcdFx0XHQvLyB1bmF1dGhvcml6ZWRcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDQwNDpcblx0XHRcdFx0XHRcdFx0Ly8gbm90IGZvdW5kXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDk6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MTA6XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChlcnJvcik7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxufVxuIl19