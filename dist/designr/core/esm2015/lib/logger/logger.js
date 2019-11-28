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
};
export { LoggerErrorStrategy };
LoggerErrorStrategy[LoggerErrorStrategy.Informational] = 'Informational';
LoggerErrorStrategy[LoggerErrorStrategy.Success] = 'Success';
LoggerErrorStrategy[LoggerErrorStrategy.Redirect] = 'Redirect';
LoggerErrorStrategy[LoggerErrorStrategy.Client] = 'Client';
LoggerErrorStrategy[LoggerErrorStrategy.Server] = 'Server';
export class LoggerError extends HttpErrorResponse {
}
if (false) {
    /** @type {?} */
    LoggerError.prototype.body;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0lBR3hELGtCQUFtQjtJQUNuQixZQUFhO0lBQ2IsYUFBYztJQUNkLFdBQVk7SUFDWixXQUFZOzs7Ozs7OztBQUdiLE1BQU0sT0FBTyxXQUFZLFNBQVEsaUJBQWlCO0NBRWpEOzs7SUFEQSwyQkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgZW51bSBMb2dnZXJFcnJvclN0cmF0ZWd5IHtcblx0SW5mb3JtYXRpb25hbCA9IDEwMCxcblx0U3VjY2VzcyA9IDIwMCxcblx0UmVkaXJlY3QgPSAzMDAsXG5cdENsaWVudCA9IDQwMCxcblx0U2VydmVyID0gNTAwXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXJFcnJvciBleHRlbmRzIEh0dHBFcnJvclJlc3BvbnNlIHtcblx0Ym9keT86IGFueTtcbn1cbiJdfQ==