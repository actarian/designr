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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2xvZ2dlci9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxNQUFNOzs7O0lBS2xCLFlBQ1MsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIakMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUtuQixFQUFFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBRyxJQUFXO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2tCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsdUZBQXVGO1NBQ3ZGO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2tCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLDZGQUE2RixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDOUk7SUFDRixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7a0JBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztrQkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFFBQStDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7O1lBekRELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUxRLFdBQVc7Ozs7O0lBUW5CLDJCQUF1Qjs7SUFDdkIsc0JBQW9COzs7OztJQUduQiw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlckVycm9yIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuXG5cdGh0dHBFcnJvcjogTG9nZ2VyRXJyb3I7XG5cdGxvZ3M6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXG5cdCkge1xuXHRcdC8vXG5cdH1cblxuXHRyZXF1ZXN0KC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyAlcycsICdiYWNrZ3JvdW5kOiAjZGRkZGRkOyBjb2xvcjogIzExMSddLmNvbmNhdChhcmdzKSk7XG5cdFx0fVxuXHR9XG5cblx0bG9nKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyVzJywgJ2JhY2tncm91bmQ6ICMxOTc2ZDI7IGNvbG9yOiAjZmZmOyBib3JkZXItcmFkaXVzOiAzcHg7IHBhZGRpbmc6IDRweCA4cHg7IG1hcmdpbi1ib3R0b206IDRweDsnXS5jb25jYXQoYXJncykpO1xuXHRcdH1cblx0fVxuXG5cdHdhcm4oLi4uYXJnczogYW55W10pIHtcblx0XHRpZiAoIXRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5wcm9kdWN0aW9uKSB7XG5cdFx0XHRjb25zdCBzID0gYXJncy5qb2luKCcsICcpO1xuXHRcdFx0dGhpcy5sb2dzLnB1c2gocyk7XG5cdFx0XHRjb25zb2xlLmxvZy5hcHBseSh0aGlzLCBbJyVjJXMnLCAnYmFja2dyb3VuZDogI2ZmNTUwMDsgY29sb3I6ICNmZmYnXS5jb25jYXQoYXJncykpO1xuXHRcdH1cblx0fVxuXG5cdGVycm9yKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKTtcblx0XHR9XG5cdH1cblxuXHRodHRwKHJlc3BvbnNlOiBIdHRwRXJyb3JSZXNwb25zZSB8IEh0dHBSZXNwb25zZTxhbnk+KSB7XG5cdFx0dGhpcy5odHRwRXJyb3IgPSBuZXcgTG9nZ2VyRXJyb3IocmVzcG9uc2UpO1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHRoaXMuaHR0cEVycm9yLm1lc3NhZ2UpO1xuXHRcdH1cblx0XHRjb25zb2xlLndhcm4oJ0xvZ2dlci5odHRwLnJlc3BvbnNlJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0LCByZXNwb25zZS51cmwpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5odHRwRXJyb3IgPSBudWxsO1xuXHRcdHRoaXMubG9ncyA9IFtdO1xuXHR9XG59XG4iXX0=