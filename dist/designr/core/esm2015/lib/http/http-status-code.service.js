/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class HttpStatusCodeService {
    constructor() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    /**
     * @param {?} statusCode
     * @param {?=} redirectUrl
     * @return {?}
     */
    setStatusCode(statusCode, redirectUrl = null) {
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    getStatusCode() {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    }
    /**
     * @return {?}
     */
    getRedirectUrl() {
        return this.redirectUrl;
    }
}
HttpStatusCodeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpStatusCodeService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNLE9BQU8scUJBQXFCO0lBS2pDO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRU0sYUFBYSxDQUFDLFVBQWtCLEVBQUUsY0FBc0IsSUFBSTtRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sYUFBYTtRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFTSxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7WUF0QkQsVUFBVTs7Ozs7Ozs7O0lBR1YsMkNBQTJCOzs7OztJQUMzQiw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwU3RhdHVzQ29kZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc3RhdHVzQ29kZTogbnVtYmVyO1xuXHRwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gMjAwO1xuXHRcdHRoaXMucmVkaXJlY3RVcmwgPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHNldFN0YXR1c0NvZGUoc3RhdHVzQ29kZTogbnVtYmVyLCByZWRpcmVjdFVybDogc3RyaW5nID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsO1xuXHR9XG5cblx0cHVibGljIGdldFN0YXR1c0NvZGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKHRoaXMuc3RhdHVzQ29kZSA9PT0gMzA5ID8gMzAxIDogdGhpcy5zdGF0dXNDb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJlZGlyZWN0VXJsO1xuXHR9XG5cbn1cbiJdfQ==