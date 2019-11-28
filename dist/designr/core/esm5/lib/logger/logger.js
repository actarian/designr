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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFnQixNQUFNLHNCQUFzQixDQUFDOzs7SUFHdEUsa0JBQW1CO0lBQ25CLFlBQWE7SUFDYixhQUFjO0lBQ2QsV0FBWTtJQUNaLFdBQVk7SUFDWixTQUFVOzs7Ozs7Ozs7QUFHWDtJQUFpQyx1Q0FBaUI7SUFHakQscUJBQVksUUFBZ0Q7ZUFDM0Qsa0JBQU07WUFDTCxLQUFLLEVBQUUsUUFBUSxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUNuRixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO1lBQ3ZCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtZQUMvQixHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUc7U0FDakIsQ0FBQztJQUNILENBQUM7SUFFRCxzQkFBSSxtQ0FBVTs7OztRQUFkO1lBQUEsaUJBT0M7WUFOQSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNOzs7OztZQUFDLFVBQUMsSUFBWSxFQUFFLEdBQVc7Z0JBQ3hFLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDekI7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDYixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDOzs7T0FBQTtJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFpQyxpQkFBaUIsR0FzQmpEOzs7O0lBckJBLDJCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGVudW0gTG9nZ2VyRXJyb3JTdHJhdGVneSB7XG5cdEluZm9ybWF0aW9uYWwgPSAxMDAsXG5cdFN1Y2Nlc3MgPSAyMDAsXG5cdFJlZGlyZWN0ID0gMzAwLFxuXHRDbGllbnQgPSA0MDAsXG5cdFNlcnZlciA9IDUwMCxcblx0Tm9uZSA9IDk5OSxcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlckVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xuXHRib2R5PzogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJlc3BvbnNlPzogSHR0cEVycm9yUmVzcG9uc2UgfCBIdHRwUmVzcG9uc2U8YW55Pikge1xuXHRcdHN1cGVyKHtcblx0XHRcdGVycm9yOiByZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gcmVzcG9uc2UuZXJyb3IgOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcblx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcblx0XHRcdHVybDogcmVzcG9uc2UudXJsLFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IHN0YXR1c1R5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoTG9nZ2VyRXJyb3JTdHJhdGVneSkucmVkdWNlKCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zdGF0dXMgPj0gTG9nZ2VyRXJyb3JTdHJhdGVneVtrZXldKSB7XG5cdFx0XHRcdHR5cGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH0sIG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==