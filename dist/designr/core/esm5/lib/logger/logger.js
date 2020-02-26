import { __extends } from "tslib";
import { HttpErrorResponse } from '@angular/common/http';
export var LoggerErrorStrategy;
(function (LoggerErrorStrategy) {
    LoggerErrorStrategy[LoggerErrorStrategy["Informational"] = 100] = "Informational";
    LoggerErrorStrategy[LoggerErrorStrategy["Success"] = 200] = "Success";
    LoggerErrorStrategy[LoggerErrorStrategy["Redirect"] = 300] = "Redirect";
    LoggerErrorStrategy[LoggerErrorStrategy["Client"] = 400] = "Client";
    LoggerErrorStrategy[LoggerErrorStrategy["Server"] = 500] = "Server";
    LoggerErrorStrategy[LoggerErrorStrategy["None"] = 999] = "None";
})(LoggerErrorStrategy || (LoggerErrorStrategy = {}));
var LoggerError = /** @class */ (function (_super) {
    __extends(LoggerError, _super);
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
        get: function () {
            var _this = this;
            return Object.keys(LoggerErrorStrategy).reduce(function (type, key) {
                if (_this.status >= LoggerErrorStrategy[key]) {
                    type = key.toLowerCase();
                }
                return type;
            }, null);
        },
        enumerable: true,
        configurable: true
    });
    return LoggerError;
}(HttpErrorResponse));
export { LoggerError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFFdkUsTUFBTSxDQUFOLElBQVksbUJBT1g7QUFQRCxXQUFZLG1CQUFtQjtJQUM5QixpRkFBbUIsQ0FBQTtJQUNuQixxRUFBYSxDQUFBO0lBQ2IsdUVBQWMsQ0FBQTtJQUNkLG1FQUFZLENBQUE7SUFDWixtRUFBWSxDQUFBO0lBQ1osK0RBQVUsQ0FBQTtBQUNYLENBQUMsRUFQVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBTzlCO0FBRUQ7SUFBaUMsK0JBQWlCO0lBR2pELHFCQUFZLFFBQWdEO2VBQzNELGtCQUFNO1lBQ0wsS0FBSyxFQUFFLFFBQVEsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDbkYsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDL0IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsc0JBQUksbUNBQVU7YUFBZDtZQUFBLGlCQU9DO1lBTkEsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBWSxFQUFFLEdBQVc7Z0JBQ3hFLElBQUksS0FBSSxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDekI7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVixDQUFDOzs7T0FBQTtJQUVGLGtCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUFpQyxpQkFBaUIsR0FzQmpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGVudW0gTG9nZ2VyRXJyb3JTdHJhdGVneSB7XG5cdEluZm9ybWF0aW9uYWwgPSAxMDAsXG5cdFN1Y2Nlc3MgPSAyMDAsXG5cdFJlZGlyZWN0ID0gMzAwLFxuXHRDbGllbnQgPSA0MDAsXG5cdFNlcnZlciA9IDUwMCxcblx0Tm9uZSA9IDk5OSxcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlckVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xuXHRib2R5PzogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHJlc3BvbnNlPzogSHR0cEVycm9yUmVzcG9uc2UgfCBIdHRwUmVzcG9uc2U8YW55Pikge1xuXHRcdHN1cGVyKHtcblx0XHRcdGVycm9yOiByZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlID8gcmVzcG9uc2UuZXJyb3IgOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcblx0XHRcdHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcblx0XHRcdHVybDogcmVzcG9uc2UudXJsLFxuXHRcdH0pO1xuXHR9XG5cblx0Z2V0IHN0YXR1c1R5cGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoTG9nZ2VyRXJyb3JTdHJhdGVneSkucmVkdWNlKCh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRpZiAodGhpcy5zdGF0dXMgPj0gTG9nZ2VyRXJyb3JTdHJhdGVneVtrZXldKSB7XG5cdFx0XHRcdHR5cGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH0sIG51bGwpO1xuXHR9XG5cbn1cbiJdfQ==