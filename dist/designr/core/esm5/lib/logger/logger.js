/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../config/core.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
var LoggerError = /** @class */ (function (_super) {
    tslib_1.__extends(LoggerError, _super);
    function LoggerError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoggerError;
}(HttpErrorResponse));
export { LoggerError };
if (false) {
    /** @type {?} */
    LoggerError.prototype.body;
}
var Logger = /** @class */ (function () {
    function Logger(coreService) {
        this.coreService = coreService;
        this.logs = [];
        //
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    Logger.prototype.request = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            /** @type {?} */
            var s = args.join(', ');
            this.logs.push(s);
            // console.log.apply(this, ['%c %s', 'background: #dddddd; color: #111'].concat(args));
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    Logger.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            /** @type {?} */
            var s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #1976d2; color: #fff; border-radius: 3px; padding: 4px 8px; margin-bottom: 4px;'].concat(args));
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    Logger.prototype.warn = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            /** @type {?} */
            var s = args.join(', ');
            this.logs.push(s);
            console.log.apply(this, ['%c%s', 'background: #ff5500; color: #fff'].concat(args));
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    Logger.prototype.error = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.coreService.options.production) {
            /** @type {?} */
            var s = args.join(', ');
            this.logs.push(s);
            console.error.apply(console, args);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    Logger.prototype.http = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.httpError = error;
        if (!this.coreService.options.production) {
            this.logs.push(error.message);
        }
        console.warn('Logger.http.error', error.status, error.statusText, error.url);
    };
    /**
     * @return {?}
     */
    Logger.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.httpError = null;
        this.logs = [];
    };
    Logger.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    Logger.ctorParameters = function () { return [
        { type: CoreService }
    ]; };
    /** @nocollapse */ Logger.ngInjectableDef = i0.defineInjectable({ factory: function Logger_Factory() { return new Logger(i0.inject(i1.CoreService)); }, token: Logger, providedIn: "root" });
    return Logger;
}());
export { Logger };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDtJQUFpQyx1Q0FBaUI7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQWlDLGlCQUFpQixHQUVqRDs7OztJQURBLDJCQUFXOztBQUdaO0lBUUMsZ0JBQ1MsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIakMsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUtuQixFQUFFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3QkFBTzs7OztJQUFQO1FBQVEsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7Z0JBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQix1RkFBdUY7U0FDdkY7SUFDRixDQUFDOzs7OztJQUVELG9CQUFHOzs7O0lBQUg7UUFBSSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztnQkFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSw2RkFBNkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlJO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxxQkFBSTs7OztJQUFKO1FBQUssY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTs7Z0JBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRUQsc0JBQUs7Ozs7SUFBTDtRQUFNLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O2dCQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxxQkFBSTs7OztJQUFKLFVBQUssS0FBd0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELHNCQUFLOzs7SUFBTDtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7O2dCQXpERCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVJRLFdBQVc7OztpQkFGcEI7Q0FrRUMsQUExREQsSUEwREM7U0F2RFksTUFBTTs7O0lBRWxCLDJCQUF1Qjs7SUFDdkIsc0JBQW9COzs7OztJQUduQiw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJFcnJvciBleHRlbmRzIEh0dHBFcnJvclJlc3BvbnNlIHtcblx0Ym9keT86IGFueTtcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcblxuXHRodHRwRXJyb3I6IExvZ2dlckVycm9yO1xuXHRsb2dzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29yZVNlcnZpY2U6IENvcmVTZXJ2aWNlLFxuXHQpIHtcblx0XHQvL1xuXHR9XG5cblx0cmVxdWVzdCguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMgJXMnLCAnYmFja2dyb3VuZDogI2RkZGRkZDsgY29sb3I6ICMxMTEnXS5jb25jYXQoYXJncykpO1xuXHRcdH1cblx0fVxuXG5cdGxvZyguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIFsnJWMlcycsICdiYWNrZ3JvdW5kOiAjMTk3NmQyOyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogM3B4OyBwYWRkaW5nOiA0cHggOHB4OyBtYXJnaW4tYm90dG9tOiA0cHg7J10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHR3YXJuKC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHJvZHVjdGlvbikge1xuXHRcdFx0Y29uc3QgcyA9IGFyZ3Muam9pbignLCAnKTtcblx0XHRcdHRoaXMubG9ncy5wdXNoKHMpO1xuXHRcdFx0Y29uc29sZS5sb2cuYXBwbHkodGhpcywgWyclYyVzJywgJ2JhY2tncm91bmQ6ICNmZjU1MDA7IGNvbG9yOiAjZmZmJ10uY29uY2F0KGFyZ3MpKTtcblx0XHR9XG5cdH1cblxuXHRlcnJvciguLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdGNvbnN0IHMgPSBhcmdzLmpvaW4oJywgJyk7XG5cdFx0XHR0aGlzLmxvZ3MucHVzaChzKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cdFx0fVxuXHR9XG5cblx0aHR0cChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblx0XHR0aGlzLmh0dHBFcnJvciA9IGVycm9yO1xuXHRcdGlmICghdGhpcy5jb3JlU2VydmljZS5vcHRpb25zLnByb2R1Y3Rpb24pIHtcblx0XHRcdHRoaXMubG9ncy5wdXNoKGVycm9yLm1lc3NhZ2UpO1xuXHRcdH1cblx0XHRjb25zb2xlLndhcm4oJ0xvZ2dlci5odHRwLmVycm9yJywgZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0LCBlcnJvci51cmwpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5odHRwRXJyb3IgPSBudWxsO1xuXHRcdHRoaXMubG9ncyA9IFtdO1xuXHR9XG59XG4iXX0=