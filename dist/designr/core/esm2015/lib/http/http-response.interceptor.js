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
import { RouteService } from '../routes/route.service';
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
    }
    /**
     * @return {?}
     */
    get logger() {
        if (!this._logger) {
            this._logger = this.injector.get(Logger);
        }
        return this._logger;
    }
    /**
     * @return {?}
     */
    get router() {
        if (!this._router) {
            this._router = this.injector.get(Router);
        }
        return this._router;
    }
    /**
     * @return {?}
     */
    get routeService() {
        if (!this._routeService) {
            this._routeService = this.injector.get(RouteService);
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
        return next.handle(request).pipe(tap((event) => {
            // console.log('HttpResponseInterceptor', event);
            this.logger.httpError = null;
            // this.logger.log(event);
            /*
            if (event instanceof HttpResponse) {
                // console.log('event instanceof HttpResponse');
                // do stuff with response if you want
            }
            */
        }), catchError((error) => {
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
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQXdELE1BQU0sc0JBQXNCLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFLbkUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUEwQm5DLFlBQ1MsUUFBa0IsRUFDbEIsaUJBQXdDO1FBRHhDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF1QjtJQUM3QyxDQUFDOzs7O0lBMUJMLElBQUksTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUdELElBQUksTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUdELElBQUksWUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBT0QsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDckQsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDN0IsaURBQWlEO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUM3QiwwQkFBMEI7WUFDMUI7Ozs7O2NBS0U7UUFDSCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QixrREFBa0Q7WUFDbEQsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3ZDLHNEQUFzRDtnQkFDdEQsUUFBUSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNyQixLQUFLLEdBQUc7d0JBQ1AsZUFBZTt3QkFDZixNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFDUCxZQUFZO3dCQUNaLE1BQU07b0JBQ1AsS0FBSyxHQUFHO3dCQUNQLE1BQU07b0JBQ1AsS0FBSyxHQUFHO3dCQUNQLE1BQU07b0JBQ1A7d0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLE1BQU07aUJBQ1A7YUFDRDtZQUNELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs7WUF4RUQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVm9CLFFBQVE7WUFNcEIscUJBQXFCOzs7Ozs7OztJQU83QiwwQ0FBd0I7Ozs7O0lBUXhCLDBDQUF3Qjs7Ozs7SUFReEIsZ0RBQW9DOzs7OztJQVNuQywyQ0FBMEI7Ozs7O0lBQzFCLG9EQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGVzL3JvdXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cblx0cHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXI7XG5cdGdldCBsb2dnZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9sb2dnZXIpIHtcblx0XHRcdHRoaXMuX2xvZ2dlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9sb2dnZXI7XG5cdH1cblxuXHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcjtcblx0Z2V0IHJvdXRlcigpIHtcblx0XHRpZiAoIXRoaXMuX3JvdXRlcikge1xuXHRcdFx0dGhpcy5fcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX3JvdXRlcjtcblx0fVxuXG5cdHByaXZhdGUgX3JvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlO1xuXHRnZXQgcm91dGVTZXJ2aWNlKCkge1xuXHRcdGlmICghdGhpcy5fcm91dGVTZXJ2aWNlKSB7XG5cdFx0XHR0aGlzLl9yb3V0ZVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIHN0YXR1c0NvZGVTZXJ2aWNlOiBIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0aW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXHRcdC8vIGluamVjdGluZyByZXF1ZXN0XG5cdFx0Ly8gcGFyc2luZyByZXNwb25zZVxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuXHRcdFx0dGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0h0dHBSZXNwb25zZUludGVyY2VwdG9yJywgZXZlbnQpO1xuXHRcdFx0XHR0aGlzLmxvZ2dlci5odHRwRXJyb3IgPSBudWxsO1xuXHRcdFx0XHQvLyB0aGlzLmxvZ2dlci5sb2coZXZlbnQpO1xuXHRcdFx0XHQvKlxuXHRcdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UnKTtcblx0XHRcdFx0XHQvLyBkbyBzdHVmZiB3aXRoIHJlc3BvbnNlIGlmIHlvdSB3YW50XG5cdFx0XHRcdH1cblx0XHRcdFx0Ki9cblx0XHRcdH0pLFxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ0h0dHBSZXNwb25zZUludGVyY2VwdG9yJywgZXJyb3IpO1xuXHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIHRoaXMuc3RhdHVzQ29kZVNlcnZpY2Uuc2V0U3RhdHVzQ29kZShlcnJvci5zdGF0dXMpO1xuXHRcdFx0XHRcdHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG5cdFx0XHRcdFx0XHRjYXNlIDQwMTpcblx0XHRcdFx0XHRcdFx0Ly8gdW5hdXRob3JpemVkXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDQ6XG5cdFx0XHRcdFx0XHRcdC8vIG5vdCBmb3VuZFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNDA5OlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNDEwOlxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHRoaXMubG9nZ2VyLmh0dHAoZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==