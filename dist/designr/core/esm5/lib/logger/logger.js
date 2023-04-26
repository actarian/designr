/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpErrorResponse } from '@angular/common/http';
/** @enum {number} */
var LoggerErrorStrategy = {
    Informational: 100,
    Success: 200,
    Redirect: 300,
    Client: 400,
    Server: 500,
    None: 999,
};
export { LoggerErrorStrategy };
LoggerErrorStrategy[LoggerErrorStrategy.Informational] = 'Informational';
LoggerErrorStrategy[LoggerErrorStrategy.Success] = 'Success';
LoggerErrorStrategy[LoggerErrorStrategy.Redirect] = 'Redirect';
LoggerErrorStrategy[LoggerErrorStrategy.Client] = 'Client';
LoggerErrorStrategy[LoggerErrorStrategy.Server] = 'Server';
LoggerErrorStrategy[LoggerErrorStrategy.None] = 'None';
var LoggerError = /** @class */ (function (_super) {
    tslib_1.__extends(LoggerError, _super);
    function LoggerError(response) {
        return _super.call(this, {
            error: response instanceof HttpErrorResponse ? response.error : response.statusText,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        }) || this;
    }
    Object.defineProperty(LoggerError.prototype, "statusType", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Object.keys(LoggerErrorStrategy).reduce((/**
             * @param {?} type
             * @param {?} key
             * @return {?}
             */
            function (type, key) {
                if (_this.status >= LoggerErrorStrategy[key]) {
                    type = key.toLowerCase();
                }
                return type;
            }), null);
        },
        enumerable: true,
        configurable: true
    });
    return LoggerError;
}(HttpErrorResponse));
export { LoggerError };
if (false) {
    /** @type {?} */
    LoggerError.prototype.body;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFnQixNQUFNLHNCQUFzQixDQUFDOzs7SUFHdEUsa0JBQW1CO0lBQ25CLFlBQWE7SUFDYixhQUFjO0lBQ2QsV0FBWTtJQUNaLFdBQVk7SUFDWixTQUFVOzs7Ozs7Ozs7QUFHWDtJQUFpQyx1Q0FBaUI7SUFHakQscUJBQVksUUFBZ0Q7ZUFDM0Qsa0JBQU07WUFDTCxLQUFLLEVBQUUsUUFBUSxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUNuRixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3ZCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtZQUMvQixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNILENBQUM7SUFFRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQUEsaUJBT0M7WUFOQSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNOzs7OztZQUFDLFVBQUMsSUFBWSxFQUFFLEdBQVc7Z0JBQ3hFLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDekI7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDYixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDOzs7T0FBQTtJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFpQyxpQkFBaUIsR0FzQmpEOzs7O0lBckJBLDJCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCBlbnVtIExvZ2dlckVycm9yU3RyYXRlZ3kge1xyXG5cdEluZm9ybWF0aW9uYWwgPSAxMDAsXHJcblx0U3VjY2VzcyA9IDIwMCxcclxuXHRSZWRpcmVjdCA9IDMwMCxcclxuXHRDbGllbnQgPSA0MDAsXHJcblx0U2VydmVyID0gNTAwLFxyXG5cdE5vbmUgPSA5OTksXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXJFcnJvciBleHRlbmRzIEh0dHBFcnJvclJlc3BvbnNlIHtcclxuXHRib2R5PzogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyZXNwb25zZT86IEh0dHBFcnJvclJlc3BvbnNlIHwgSHR0cFJlc3BvbnNlPGFueT4pIHtcclxuXHRcdHN1cGVyKHtcclxuXHRcdFx0ZXJyb3I6IHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgPyByZXNwb25zZS5lcnJvciA6IHJlc3BvbnNlLnN0YXR1c1RleHQsXHJcblx0XHRcdGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMsXHJcblx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxyXG5cdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxyXG5cdFx0XHR1cmw6IHJlc3BvbnNlLnVybCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0IHN0YXR1c1R5cGUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhMb2dnZXJFcnJvclN0cmF0ZWd5KS5yZWR1Y2UoKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcclxuXHRcdFx0aWYgKHRoaXMuc3RhdHVzID49IExvZ2dlckVycm9yU3RyYXRlZ3lba2V5XSkge1xyXG5cdFx0XHRcdHR5cGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHlwZTtcclxuXHRcdH0sIG51bGwpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19