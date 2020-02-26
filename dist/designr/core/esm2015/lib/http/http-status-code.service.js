import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class HttpStatusCodeService {
    constructor() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    setStatusCode(statusCode, redirectUrl = null) {
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    }
    getStatusCode() {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    }
    getRedirectUrl() {
        return this.redirectUrl;
    }
}
HttpStatusCodeService.ɵfac = function HttpStatusCodeService_Factory(t) { return new (t || HttpStatusCodeService)(); };
HttpStatusCodeService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpStatusCodeService, factory: HttpStatusCodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpStatusCodeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8scUJBQXFCO0lBS2pDO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxVQUFrQixFQUFFLGNBQXNCLElBQUk7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLGFBQWE7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sY0FBYztRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7MEZBckJXLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGckIsTUFBTTtrREFFTixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIdHRwU3RhdHVzQ29kZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgc3RhdHVzQ29kZTogbnVtYmVyO1xuXHRwcml2YXRlIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gMjAwO1xuXHRcdHRoaXMucmVkaXJlY3RVcmwgPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHNldFN0YXR1c0NvZGUoc3RhdHVzQ29kZTogbnVtYmVyLCByZWRpcmVjdFVybDogc3RyaW5nID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsO1xuXHR9XG5cblx0cHVibGljIGdldFN0YXR1c0NvZGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKHRoaXMuc3RhdHVzQ29kZSA9PT0gMzA5ID8gMzAxIDogdGhpcy5zdGF0dXNDb2RlKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRSZWRpcmVjdFVybCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJlZGlyZWN0VXJsO1xuXHR9XG5cbn1cbiJdfQ==