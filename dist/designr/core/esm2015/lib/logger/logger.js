/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
export class LoggerError extends HttpErrorResponse {
}
if (false) {
    /** @type {?} */
    LoggerError.prototype.body;
}
export class Logger {
    /**
     * @param {?} configService
     */
    constructor(configService) {
        this.configService = configService;
        this.logs = [];
        //
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    request(...args) {
        if (!this.configService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (!this.configService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.configService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (!this.configService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    http(error) {
        this.httpError = error;
        if (!this.configService.options.production) {
            this.logs.push(error.message);
        }
        console.warn('Logger.http.error', error.status, error.statusText, error.url);
    }
    /**
     * @return {?}
     */
    clear() {
        this.httpError = null;
        this.logs = [];
    }
}
Logger.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
Logger.ctorParameters = () => [
    { type: ConfigService }
];
/** @nocollapse */ Logger.ngInjectableDef = i0.defineInjectable({ factory: function Logger_Factory() { return new Logger(i0.inject(i1.ConfigService)); }, token: Logger, providedIn: "root" });
if (false) {
    /** @type {?} */
    Logger.prototype.httpError;
    /** @type {?} */
    Logger.prototype.logs;
    /**
     * @type {?}
     * @private
     */
    Logger.prototype.configService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpELE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCO0NBRWpEOzs7SUFEQSwyQkFBVzs7QUFNWixNQUFNLE9BQU8sTUFBTTs7OztJQUtsQixZQUNTLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSHJDLFNBQUksR0FBYSxFQUFFLENBQUM7UUFLbkIsRUFBRTtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQUcsSUFBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztrQkFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLHVGQUF1RjtTQUN2RjtJQUNGLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztrQkFDckMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSw2RkFBNkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlJO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2tCQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLGtDQUFrQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7a0JBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUF3QjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsS0FBSztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQXpERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFSUSxhQUFhOzs7OztJQVdyQiwyQkFBdUI7O0lBQ3ZCLHNCQUFvQjs7Ozs7SUFHbkIsK0JBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlckVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xuXHRib2R5PzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuXG5cdGh0dHBFcnJvcjogTG9nZ2VyRXJyb3I7XG5cdGxvZ3M6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHQpIHtcblx0XHQvL1xuXHR9XG5cblx0cmVxdWVzdCguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyAlcycsICdiYWNrZ3JvdW5kOiAjZGRkZGRkOyBjb2xvcjogIzExMSddLmNvbmNhdChhcmdzKSk7XG5cdFx0fVxuXHR9XG5cblx0bG9nKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzID0gYXJncy5qb2luKCcsICcpO1xuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XG5cdFx0XHRjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjJXMnLCAnYmFja2dyb3VuZDogIzE5NzZkMjsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDNweDsgcGFkZGluZzogNHB4IDhweDsgbWFyZ2luLWJvdHRvbTogNHB4OyddLmNvbmNhdChhcmdzKSk7XG5cdFx0fVxuXHR9XG5cblx0d2FybiguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyVzJywgJ2JhY2tncm91bmQ6ICNmZjU1MDA7IGNvbG9yOiAjZmZmJ10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvciguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcblx0XHR9XG5cdH1cblxuXHRodHRwKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXHRcdHRoaXMuaHR0cEVycm9yID0gZXJyb3I7XG5cdFx0aWYgKCF0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChlcnJvci5tZXNzYWdlKTtcblx0XHR9XG5cdFx0Y29uc29sZS53YXJuKCdMb2dnZXIuaHR0cC5lcnJvcicsIGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCwgZXJyb3IudXJsKTtcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuaHR0cEVycm9yID0gbnVsbDtcblx0XHR0aGlzLmxvZ3MgPSBbXTtcblx0fVxufVxuIl19