import { Injectable } from '@angular/core';
import { CoreService } from '../config/core.service';
import { LoggerError } from './logger';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
export class Logger {
    constructor(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    request(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    }
    log(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    }
    warn(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    }
    error(...args) {
        if (!this.coreService.options.production) {
            const s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    }
    http(response) {
        this.httpError = new LoggerError(response);
        if (!this.coreService.options.production) {
            this.logs.push(this.httpError.message);
        }
        console.warn('Logger.http.response', response.status, response.statusText, response.url);
    }
    clear() {
        this.httpError = null;
        this.logs = [];
    }
}
Logger.ɵfac = function Logger_Factory(t) { return new (t || Logger)(i0.ɵɵinject(i1.CoreService)); };
Logger.ɵprov = i0.ɵɵdefineInjectable({ token: Logger, factory: Logger.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Logger, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFLdkMsTUFBTSxPQUFPLE1BQU07SUFLbEIsWUFDUyxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhqQyxTQUFJLEdBQWEsRUFBRSxDQUFDO1FBS25CLEVBQUU7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUcsSUFBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsdUZBQXVGO1NBQ3ZGO0lBQ0YsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFHLElBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSw2RkFBNkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlJO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBK0M7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs0REF0RFcsTUFBTTs4Q0FBTixNQUFNLFdBQU4sTUFBTSxtQkFGTixNQUFNO2tEQUVOLE1BQU07Y0FIbEIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXJFcnJvciB9IGZyb20gJy4vbG9nZ2VyJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcblxuXHRodHRwRXJyb3I6IExvZ2dlckVycm9yO1xuXHRsb2dzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxuXHQpIHtcblx0XHQvL1xuXHR9XG5cblx0cmVxdWVzdCguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMgJXMnLCAnYmFja2dyb3VuZDogI2RkZGRkZDsgY29sb3I6ICMxMTEnXS5jb25jYXQoYXJncykpO1xuXHRcdH1cblx0fVxuXG5cdGxvZyguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMlcycsICdiYWNrZ3JvdW5kOiAjMTk3NmQyOyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogM3B4OyBwYWRkaW5nOiA0cHggOHB4OyBtYXJnaW4tYm90dG9tOiA0cHg7J10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHR3YXJuKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyVzJywgJ2JhY2tncm91bmQ6ICNmZjU1MDA7IGNvbG9yOiAjZmZmJ10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvciguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0aHR0cChyZXNwb25zZTogSHR0cEVycm9yUmVzcG9uc2UgfCBIdHRwUmVzcG9uc2U8YW55Pikge1xuXHRcdHRoaXMuaHR0cEVycm9yID0gbmV3IExvZ2dlckVycm9yKHJlc3BvbnNlKTtcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaCh0aGlzLmh0dHBFcnJvci5tZXNzYWdlKTtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKCdMb2dnZXIuaHR0cC5yZXNwb25zZScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UudXJsKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuaHR0cEVycm9yID0gbnVsbDtcblx0XHR0aGlzLmxvZ3MgPSBbXTtcblx0fVxufVxuIl19