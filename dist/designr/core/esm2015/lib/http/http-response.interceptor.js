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
    constructor(injector, statusCodeService) {
        this.injector = injector;
        this.statusCodeService = statusCodeService;
        this.loggerErrorStrategy_ = LoggerErrorStrategy.Server;
        this.loggerErrorStrategy_ = this.config.loggerErrorStrategy || LoggerErrorStrategy.Server;
    }
    get config() {
        if (!this.config_) {
            this.config_ = this.injector.get(CoreService).options;
        }
        return this.config_;
    }
    get logger() {
        if (!this.logger_) {
            this.logger_ = this.injector.get(Logger);
        }
        return this.logger_;
    }
    get router() {
        if (!this.router_) {
            this.router_ = this.injector.get(Router);
        }
        return this.router_;
    }
    get routeService() {
        if (!this.routeService_) {
            this.routeService_ = this.injector.get(RouteService);
        }
        return this.routeService;
    }
    intercept(request, next) {
        // injecting request
        // parsing response
        return next.handle(request).pipe(tap((response) => {
            this.logger.httpError = null;
            // this.logger.log(response);
            if (response instanceof HttpResponse) {
                // console.log('response instanceof HttpResponse');
                // do stuff with response if you want
                if (response.status >= this.loggerErrorStrategy_) {
                    this.logger.http(response);
                }
            }
        }), catchError((response) => {
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
        }));
    }
}
HttpResponseInterceptor.ɵfac = function HttpResponseInterceptor_Factory(t) { return new (t || HttpResponseInterceptor)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.HttpStatusCodeService)); };
HttpResponseInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: HttpResponseInterceptor, factory: HttpResponseInterceptor.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpResponseInterceptor, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }, { type: i1.HttpStatusCodeService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0QsWUFBWSxFQUFvQixNQUFNLHNCQUFzQixDQUFDO0FBQy9JLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUtuRSxNQUFNLE9BQU8sdUJBQXVCO0lBb0NuQyxZQUNTLFFBQWtCLEVBQ2xCLGlCQUF3QztRQUR4QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBdUI7UUFwQ3pDLHlCQUFvQixHQUF3QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7UUFzQzlFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixJQUFJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBcENELElBQUksTUFBTTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3REO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLE1BQU07UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLE1BQU07UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLFlBQVk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFTRCxTQUFTLENBQUMsT0FBeUIsRUFBRSxJQUFpQjtRQUNyRCxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQy9CLEdBQUcsQ0FBQyxDQUFDLFFBQXdCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDN0IsNkJBQTZCO1lBQzdCLElBQUksUUFBUSxZQUFZLFlBQVksRUFBRTtnQkFDckMsbURBQW1EO2dCQUNuRCxxQ0FBcUM7Z0JBQ3JDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMzQjthQUNEO1FBQ0YsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsUUFBMEIsRUFBRSxFQUFFO1lBQ3pDLHFEQUFxRDtZQUNyRCxJQUFJLFFBQVEsWUFBWSxpQkFBaUIsRUFBRTtnQkFDMUMseURBQXlEO2dCQUN6RCw0R0FBNEc7Z0JBQzVHLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRDs7Ozs7Ozs7Ozs7Ozs7OztrQkFnQkU7YUFDRjtZQUNELE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDOzs4RkF2RlcsdUJBQXVCOytEQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCLG1CQUZ2QixNQUFNO2tEQUVOLHVCQUF1QjtjQUhuQyxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29yZS5jb25maWcnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlckVycm9yU3RyYXRlZ3kgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZS9yb3V0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG5cdHByaXZhdGUgbG9nZ2VyRXJyb3JTdHJhdGVneV86IExvZ2dlckVycm9yU3RyYXRlZ3kgPSBMb2dnZXJFcnJvclN0cmF0ZWd5LlNlcnZlcjtcblxuXHRwcml2YXRlIGNvbmZpZ186IENvcmVDb25maWc7XG5cdGdldCBjb25maWcoKTogQ29yZUNvbmZpZyB7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ18pIHtcblx0XHRcdHRoaXMuY29uZmlnXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KENvcmVTZXJ2aWNlKS5vcHRpb25zO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5jb25maWdfO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2dnZXJfOiBMb2dnZXI7XG5cdGdldCBsb2dnZXIoKSB7XG5cdFx0aWYgKCF0aGlzLmxvZ2dlcl8pIHtcblx0XHRcdHRoaXMubG9nZ2VyXyA9IHRoaXMuaW5qZWN0b3IuZ2V0KExvZ2dlcik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmxvZ2dlcl87XG5cdH1cblxuXHRwcml2YXRlIHJvdXRlcl86IFJvdXRlcjtcblx0Z2V0IHJvdXRlcigpIHtcblx0XHRpZiAoIXRoaXMucm91dGVyXykge1xuXHRcdFx0dGhpcy5yb3V0ZXJfID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucm91dGVyXztcblx0fVxuXG5cdHByaXZhdGUgcm91dGVTZXJ2aWNlXzogUm91dGVTZXJ2aWNlO1xuXHRnZXQgcm91dGVTZXJ2aWNlKCkge1xuXHRcdGlmICghdGhpcy5yb3V0ZVNlcnZpY2VfKSB7XG5cdFx0XHR0aGlzLnJvdXRlU2VydmljZV8gPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZVNlcnZpY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2U7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRwcml2YXRlIHN0YXR1c0NvZGVTZXJ2aWNlOiBIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMubG9nZ2VyRXJyb3JTdHJhdGVneV8gPSB0aGlzLmNvbmZpZy5sb2dnZXJFcnJvclN0cmF0ZWd5IHx8IExvZ2dlckVycm9yU3RyYXRlZ3kuU2VydmVyO1xuXHR9XG5cblx0aW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXHRcdC8vIGluamVjdGluZyByZXF1ZXN0XG5cdFx0Ly8gcGFyc2luZyByZXNwb25zZVxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuXHRcdFx0dGFwKChyZXNwb25zZTogSHR0cEV2ZW50PGFueT4pID0+IHtcblx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cEVycm9yID0gbnVsbDtcblx0XHRcdFx0Ly8gdGhpcy5sb2dnZXIubG9nKHJlc3BvbnNlKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3Jlc3BvbnNlIGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlJyk7XG5cdFx0XHRcdFx0Ly8gZG8gc3R1ZmYgd2l0aCByZXNwb25zZSBpZiB5b3Ugd2FudFxuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gdGhpcy5sb2dnZXJFcnJvclN0cmF0ZWd5Xykge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2dnZXIuaHR0cChyZXNwb25zZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2VCYXNlKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUud2FybignSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3InLCByZXNwb25zZSk7XG5cdFx0XHRcdGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Ly8gdGhpcy5zdGF0dXNDb2RlU2VydmljZS5zZXRTdGF0dXNDb2RlKHJlc3BvbnNlLnN0YXR1cyk7XG5cdFx0XHRcdFx0Ly8gISEhIGFkZCBsb2dFcnJvclN0cmF0ZWd5ICgxMDAgSU5GT1JNQVRJT05BTCwgMjAwIFNVQ0NFU1MsIDMwMCBSRURJUkVDVCwgNDAwIENMSUVOVCwgNTAwIFNFUlZFUiwgOTk5IE5PTkUpXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSB0aGlzLmxvZ2dlckVycm9yU3RyYXRlZ3lfKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvZ2dlci5odHRwKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lypcblx0XHRcdFx0XHRzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuXHRcdFx0XHRcdFx0Y2FzZSA0MDE6XG5cdFx0XHRcdFx0XHRcdC8vIHVuYXV0aG9yaXplZFxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgNDA0OlxuXHRcdFx0XHRcdFx0XHQvLyBub3QgZm91bmRcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDQwOTpcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIDQxMDpcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHR0aGlzLmxvZ2dlci5odHRwKHJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCovXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRocm93RXJyb3IocmVzcG9uc2UpO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==