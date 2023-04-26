/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CoreService } from '../config/core.service';
import { LoggerError } from './logger';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
export class Logger {
    /**
     * @param {?} coreService
     */
    constructor(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    request(...args) {
        if (!this.coreService.options.production) {
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
        if (!this.coreService.options.production) {
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
        if (!this.coreService.options.production) {
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
        if (!this.coreService.options.production) {
            /** @type {?} */
            const s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    }
    /**
     * @param {?} response
     * @return {?}
     */
    http(response) {
        this.httpError = new LoggerError(response);
        if (!this.coreService.options.production) {
            this.logs.push(this.httpError.message);
        }
        console.warn('Logger.http.response', response.status, response.statusText, response.url);
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
    { type: CoreService }
];
/** @nocollapse */ Logger.ngInjectableDef = i0.defineInjectable({ factory: function Logger_Factory() { return new Logger(i0.inject(i1.CoreService)); }, token: Logger, providedIn: "root" });
if (false) {
    /** @type {?} */
    Logger.prototype.httpError;
    /** @type {?} */
    Logger.prototype.logs;
    /**
     * @type {?}
     * @private
     */
    Logger.prototype.coreService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxNQUFNOzs7O0lBS2xCLFlBQ1MsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIakMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUtuQixFQUFFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2tCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsdUZBQXVGO1NBQ3ZGO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2tCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLDZGQUE2RixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDOUk7SUFDRixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7a0JBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztrQkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFFBQStDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7O1lBekRELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUxRLFdBQVc7Ozs7O0lBUW5CLDJCQUF1Qjs7SUFDdkIsc0JBQW9COzs7OztJQUduQiw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlckVycm9yIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuXHJcblx0aHR0cEVycm9yOiBMb2dnZXJFcnJvcjtcclxuXHRsb2dzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0Ly9cclxuXHR9XHJcblxyXG5cdHJlcXVlc3QoLi4uYXJnczogYW55W10pIHtcclxuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcclxuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcclxuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMgJXMnLCAnYmFja2dyb3VuZDogI2RkZGRkZDsgY29sb3I6ICMxMTEnXS5jb25jYXQoYXJncykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9nKC4uLmFyZ3M6IGFueVtdKSB7XHJcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XHJcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XHJcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjJXMnLCAnYmFja2dyb3VuZDogIzE5NzZkMjsgY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDNweDsgcGFkZGluZzogNHB4IDhweDsgbWFyZ2luLWJvdHRvbTogNHB4OyddLmNvbmNhdChhcmdzKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR3YXJuKC4uLmFyZ3M6IGFueVtdKSB7XHJcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XHJcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XHJcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjJXMnLCAnYmFja2dyb3VuZDogI2ZmNTUwMDsgY29sb3I6ICNmZmYnXS5jb25jYXQoYXJncykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXJyb3IoLi4uYXJnczogYW55W10pIHtcclxuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcclxuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcclxuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRodHRwKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSB8IEh0dHBSZXNwb25zZTxhbnk+KSB7XHJcblx0XHR0aGlzLmh0dHBFcnJvciA9IG5ldyBMb2dnZXJFcnJvcihyZXNwb25zZSk7XHJcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XHJcblx0XHRcdHRoaXMubG9ncy5wdXNoKHRoaXMuaHR0cEVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS53YXJuKCdMb2dnZXIuaHR0cC5yZXNwb25zZScsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UudXJsKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5odHRwRXJyb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5sb2dzID0gW107XHJcblx0fVxyXG59XHJcbiJdfQ==