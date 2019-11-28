/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpErrorResponse } from '@angular/common/http';
/** @enum {number} */
const LoggerErrorStrategy = {
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
export class LoggerError extends HttpErrorResponse {
    /**
     * @param {?=} response
     */
    constructor(response) {
        super({
            error: response instanceof HttpErrorResponse ? response.error : response.statusText,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        });
    }
    /**
     * @return {?}
     */
    get statusType() {
        return Object.keys(LoggerErrorStrategy).reduce((/**
         * @param {?} type
         * @param {?} key
         * @return {?}
         */
        (type, key) => {
            if (this.status >= LoggerErrorStrategy[key]) {
                type = key.toLowerCase();
            }
            return type;
        }), null);
    }
}
if (false) {
    /** @type {?} */
    LoggerError.prototype.body;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7OztJQUd0RSxrQkFBbUI7SUFDbkIsWUFBYTtJQUNiLGFBQWM7SUFDZCxXQUFZO0lBQ1osV0FBWTtJQUNaLFNBQVU7Ozs7Ozs7OztBQUdYLE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCOzs7O0lBR2pELFlBQVksUUFBZ0Q7UUFDM0QsS0FBSyxDQUFDO1lBQ0wsS0FBSyxFQUFFLFFBQVEsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDbkYsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDL0IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ2pCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQzVFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN6QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1YsQ0FBQztDQUVEOzs7SUFyQkEsMkJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgZW51bSBMb2dnZXJFcnJvclN0cmF0ZWd5IHtcblx0SW5mb3JtYXRpb25hbCA9IDEwMCxcblx0U3VjY2VzcyA9IDIwMCxcblx0UmVkaXJlY3QgPSAzMDAsXG5cdENsaWVudCA9IDQwMCxcblx0U2VydmVyID0gNTAwLFxuXHROb25lID0gOTk5LFxufVxuXG5leHBvcnQgY2xhc3MgTG9nZ2VyRXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3JSZXNwb25zZSB7XG5cdGJvZHk/OiBhbnk7XG5cblx0Y29uc3RydWN0b3IocmVzcG9uc2U/OiBIdHRwRXJyb3JSZXNwb25zZSB8IEh0dHBSZXNwb25zZTxhbnk+KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZXJyb3I6IHJlc3BvbnNlIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UgPyByZXNwb25zZS5lcnJvciA6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG5cdFx0XHRoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuXHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuXHRcdFx0dXJsOiByZXNwb25zZS51cmwsXG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgc3RhdHVzVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyhMb2dnZXJFcnJvclN0cmF0ZWd5KS5yZWR1Y2UoKHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICh0aGlzLnN0YXR1cyA+PSBMb2dnZXJFcnJvclN0cmF0ZWd5W2tleV0pIHtcblx0XHRcdFx0dHlwZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHR5cGU7XG5cdFx0fSwgbnVsbCk7XG5cdH1cblxufVxuIl19