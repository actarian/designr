import { Injectable } from '@angular/core';
import { CoreService } from '../config/core.service';
import { LoggerError } from './logger';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
var Logger = /** @class */ (function () {
    function Logger(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    Logger.prototype.request = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            var s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            var s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            var s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            var s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    };
    Logger.prototype.http = function (response) {
        this.httpError = new LoggerError(response);
        if (!this.coreService.options.production) {
            this.logs.push(this.httpError.message);
        }
        console.warn('Logger.http.response', response.status, response.statusText, response.url);
    };
    Logger.prototype.clear = function () {
        this.httpError = null;
        this.logs = [];
    };
    Logger.ɵfac = function Logger_Factory(t) { return new (t || Logger)(i0.ɵɵinject(i1.CoreService)); };
    Logger.ɵprov = i0.ɵɵdefineInjectable({ token: Logger, factory: Logger.ɵfac, providedIn: 'root' });
    return Logger;
}());
export { Logger };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Logger, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFdkM7SUFRQyxnQkFDUyxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhqQyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBS25CLEVBQUU7SUFDSCxDQUFDO0lBRUQsd0JBQU8sR0FBUDtRQUFRLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQix1RkFBdUY7U0FDdkY7SUFDRixDQUFDO0lBRUQsb0JBQUcsR0FBSDtRQUFJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsNkZBQTZGLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5STtJQUNGLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFBTSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3pDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxRQUErQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Z0VBdERXLE1BQU07a0RBQU4sTUFBTSxXQUFOLE1BQU0sbUJBRk4sTUFBTTtpQkFObkI7Q0ErREMsQUExREQsSUEwREM7U0F2RFksTUFBTTtrREFBTixNQUFNO2NBSGxCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyRXJyb3IgfSBmcm9tICcuL2xvZ2dlcic7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG5cblx0aHR0cEVycm9yOiBMb2dnZXJFcnJvcjtcblx0bG9nczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcblx0KSB7XG5cdFx0Ly9cblx0fVxuXG5cdHJlcXVlc3QoLi4uYXJnczogYW55W10pIHtcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzID0gYXJncy5qb2luKCcsICcpO1xuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjICVzJywgJ2JhY2tncm91bmQ6ICNkZGRkZGQ7IGNvbG9yOiAjMTExJ10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHRsb2coLi4uYXJnczogYW55W10pIHtcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzID0gYXJncy5qb2luKCcsICcpO1xuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XG5cdFx0XHRjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjJXMnLCAnYmFja2dyb3VuZDogIzE5NzZkMjsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDNweDsgcGFkZGluZzogNHB4IDhweDsgbWFyZ2luLWJvdHRvbTogNHB4OyddLmNvbmNhdChhcmdzKSk7XG5cdFx0fVxuXHR9XG5cblx0d2FybiguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMlcycsICdiYWNrZ3JvdW5kOiAjZmY1NTAwOyBjb2xvcjogI2ZmZiddLmNvbmNhdChhcmdzKSk7XG5cdFx0fVxuXHR9XG5cblx0ZXJyb3IoLi4uYXJnczogYW55W10pIHtcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzID0gYXJncy5qb2luKCcsICcpO1xuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XG5cdFx0XHRjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuXHRcdH1cblx0fVxuXG5cdGh0dHAocmVzcG9uc2U6IEh0dHBFcnJvclJlc3BvbnNlIHwgSHR0cFJlc3BvbnNlPGFueT4pIHtcblx0XHR0aGlzLmh0dHBFcnJvciA9IG5ldyBMb2dnZXJFcnJvcihyZXNwb25zZSk7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0dGhpcy5sb2dzLnB1c2godGhpcy5odHRwRXJyb3IubWVzc2FnZSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUud2FybignTG9nZ2VyLmh0dHAucmVzcG9uc2UnLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQsIHJlc3BvbnNlLnVybCk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmh0dHBFcnJvciA9IG51bGw7XG5cdFx0dGhpcy5sb2dzID0gW107XG5cdH1cbn1cbiJdfQ==