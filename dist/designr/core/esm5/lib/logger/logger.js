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
};
export { LoggerErrorStrategy };
LoggerErrorStrategy[LoggerErrorStrategy.Informational] = 'Informational';
LoggerErrorStrategy[LoggerErrorStrategy.Success] = 'Success';
LoggerErrorStrategy[LoggerErrorStrategy.Redirect] = 'Redirect';
LoggerErrorStrategy[LoggerErrorStrategy.Client] = 'Client';
LoggerErrorStrategy[LoggerErrorStrategy.Server] = 'Server';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztJQUd4RCxrQkFBbUI7SUFDbkIsWUFBYTtJQUNiLGFBQWM7SUFDZCxXQUFZO0lBQ1osV0FBWTs7Ozs7Ozs7QUFHYjtJQUFpQyx1Q0FBaUI7SUFBbEQ7O0lBRUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQWlDLGlCQUFpQixHQUVqRDs7OztJQURBLDJCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBlbnVtIExvZ2dlckVycm9yU3RyYXRlZ3kge1xuXHRJbmZvcm1hdGlvbmFsID0gMTAwLFxuXHRTdWNjZXNzID0gMjAwLFxuXHRSZWRpcmVjdCA9IDMwMCxcblx0Q2xpZW50ID0gNDAwLFxuXHRTZXJ2ZXIgPSA1MDBcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlckVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xuXHRib2R5PzogYW55O1xufVxuIl19