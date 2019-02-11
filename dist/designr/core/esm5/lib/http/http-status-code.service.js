/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var HttpStatusCodeService = /** @class */ (function () {
    function HttpStatusCodeService() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    /**
     * @param {?} statusCode
     * @param {?=} redirectUrl
     * @return {?}
     */
    HttpStatusCodeService.prototype.setStatusCode = /**
     * @param {?} statusCode
     * @param {?=} redirectUrl
     * @return {?}
     */
    function (statusCode, redirectUrl) {
        if (redirectUrl === void 0) { redirectUrl = null; }
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    };
    /**
     * @return {?}
     */
    HttpStatusCodeService.prototype.getStatusCode = /**
     * @return {?}
     */
    function () {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    };
    /**
     * @return {?}
     */
    HttpStatusCodeService.prototype.getRedirectUrl = /**
     * @return {?}
     */
    function () {
        return this.redirectUrl;
    };
    HttpStatusCodeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpStatusCodeService.ctorParameters = function () { return []; };
    return HttpStatusCodeService;
}());
export { HttpStatusCodeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpStatusCodeService.prototype.statusCode;
    /**
     * @type {?}
     * @private
     */
    HttpStatusCodeService.prototype.redirectUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQU1DO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU0sNkNBQWE7Ozs7O0lBQXBCLFVBQXFCLFVBQWtCLEVBQUUsV0FBMEI7UUFBMUIsNEJBQUEsRUFBQSxrQkFBMEI7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLDZDQUFhOzs7SUFBcEI7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFTSw4Q0FBYzs7O0lBQXJCO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7O2dCQXRCRCxVQUFVOzs7O0lBd0JYLDRCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F2QlkscUJBQXFCOzs7Ozs7SUFFakMsMkNBQTJCOzs7OztJQUMzQiw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwU3RhdHVzQ29kZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc3RhdHVzQ29kZTogbnVtYmVyO1xuXHRwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gMjAwO1xuXHRcdHRoaXMucmVkaXJlY3RVcmwgPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHNldFN0YXR1c0NvZGUoc3RhdHVzQ29kZTogbnVtYmVyLCByZWRpcmVjdFVybDogc3RyaW5nID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsO1xuXHR9XG5cblx0cHVibGljIGdldFN0YXR1c0NvZGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKHRoaXMuc3RhdHVzQ29kZSA9PT0gMzA5ID8gMzAxIDogdGhpcy5zdGF0dXNDb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJlZGlyZWN0VXJsO1xuXHR9XG5cbn1cbiJdfQ==