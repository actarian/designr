/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HttpStatusCodeService.ctorParameters = () => [];
/** @nocollapse */ HttpStatusCodeService.ngInjectableDef = i0.defineInjectable({ factory: function HttpStatusCodeService_Factory() { return new HttpStatusCodeService(); }, token: HttpStatusCodeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUtqQztRQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVNLGFBQWEsQ0FBQyxVQUFrQixFQUFFLGNBQXNCLElBQUk7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLGFBQWE7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRU0sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7O1lBeEJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozs7Ozs7OztJQUdBLDJDQUEyQjs7Ozs7SUFDM0IsNENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwU3RhdHVzQ29kZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc3RhdHVzQ29kZTogbnVtYmVyO1xuXHRwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gMjAwO1xuXHRcdHRoaXMucmVkaXJlY3RVcmwgPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHNldFN0YXR1c0NvZGUoc3RhdHVzQ29kZTogbnVtYmVyLCByZWRpcmVjdFVybDogc3RyaW5nID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsO1xuXHR9XG5cblx0cHVibGljIGdldFN0YXR1c0NvZGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKHRoaXMuc3RhdHVzQ29kZSA9PT0gMzA5ID8gMzAxIDogdGhpcy5zdGF0dXNDb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJlZGlyZWN0VXJsO1xuXHR9XG5cbn1cbiJdfQ==