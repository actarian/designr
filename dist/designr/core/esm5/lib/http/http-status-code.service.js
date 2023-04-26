/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpStatusCodeService.ctorParameters = function () { return []; };
    /** @nocollapse */ HttpStatusCodeService.ngInjectableDef = i0.defineInjectable({ factory: function HttpStatusCodeService_Factory() { return new HttpStatusCodeService(); }, token: HttpStatusCodeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFRQztRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVNLDZDQUFhOzs7OztJQUFwQixVQUFxQixVQUFrQixFQUFFLFdBQTBCO1FBQTFCLDRCQUFBLEVBQUEsa0JBQTBCO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSw2Q0FBYTs7O0lBQXBCO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRU0sOENBQWM7OztJQUFyQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOztnQkF4QkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs7Z0NBSkQ7Q0E0QkMsQUExQkQsSUEwQkM7U0F2QlkscUJBQXFCOzs7Ozs7SUFFakMsMkNBQTJCOzs7OztJQUMzQiw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwU3RhdHVzQ29kZVNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIHN0YXR1c0NvZGU6IG51bWJlcjtcclxuXHRwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gMjAwO1xyXG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0U3RhdHVzQ29kZShzdGF0dXNDb2RlOiBudW1iZXIsIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBudWxsKSB7XHJcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xyXG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFN0YXR1c0NvZGUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiAodGhpcy5zdGF0dXNDb2RlID09PSAzMDkgPyAzMDEgOiB0aGlzLnN0YXR1c0NvZGUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFJlZGlyZWN0VXJsKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5yZWRpcmVjdFVybDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==