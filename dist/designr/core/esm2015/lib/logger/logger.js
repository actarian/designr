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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7OztJQUd0RSxrQkFBbUI7SUFDbkIsWUFBYTtJQUNiLGFBQWM7SUFDZCxXQUFZO0lBQ1osV0FBWTtJQUNaLFNBQVU7Ozs7Ozs7OztBQUdYLE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCOzs7O0lBR2pELFlBQVksUUFBZ0Q7UUFDM0QsS0FBSyxDQUFDO1lBQ0wsS0FBSyxFQUFFLFFBQVEsWUFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDbkYsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ3pCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtZQUN2QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDL0IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ2pCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsSUFBWSxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQzVFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN6QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1YsQ0FBQztDQUVEOzs7SUFyQkEsMkJBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGVudW0gTG9nZ2VyRXJyb3JTdHJhdGVneSB7XHJcblx0SW5mb3JtYXRpb25hbCA9IDEwMCxcclxuXHRTdWNjZXNzID0gMjAwLFxyXG5cdFJlZGlyZWN0ID0gMzAwLFxyXG5cdENsaWVudCA9IDQwMCxcclxuXHRTZXJ2ZXIgPSA1MDAsXHJcblx0Tm9uZSA9IDk5OSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlckVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xyXG5cdGJvZHk/OiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHJlc3BvbnNlPzogSHR0cEVycm9yUmVzcG9uc2UgfCBIdHRwUmVzcG9uc2U8YW55Pikge1xyXG5cdFx0c3VwZXIoe1xyXG5cdFx0XHRlcnJvcjogcmVzcG9uc2UgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSA/IHJlc3BvbnNlLmVycm9yIDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcclxuXHRcdFx0aGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcclxuXHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXHJcblx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXHJcblx0XHRcdHVybDogcmVzcG9uc2UudXJsLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgc3RhdHVzVHlwZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKExvZ2dlckVycm9yU3RyYXRlZ3kpLnJlZHVjZSgodHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5zdGF0dXMgPj0gTG9nZ2VyRXJyb3JTdHJhdGVneVtrZXldKSB7XHJcblx0XHRcdFx0dHlwZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0eXBlO1xyXG5cdFx0fSwgbnVsbCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=