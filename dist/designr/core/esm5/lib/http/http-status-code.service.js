import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var HttpStatusCodeService = /** @class */ (function () {
    function HttpStatusCodeService() {
        this.statusCode = 200;
        this.redirectUrl = null;
    }
    HttpStatusCodeService.prototype.setStatusCode = function (statusCode, redirectUrl) {
        if (redirectUrl === void 0) { redirectUrl = null; }
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    };
    HttpStatusCodeService.prototype.getStatusCode = function () {
        return (this.statusCode === 309 ? 301 : this.statusCode);
    };
    HttpStatusCodeService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    HttpStatusCodeService.ɵfac = function HttpStatusCodeService_Factory(t) { return new (t || HttpStatusCodeService)(); };
    HttpStatusCodeService.ɵprov = i0.ɵɵdefineInjectable({ token: HttpStatusCodeService, factory: HttpStatusCodeService.ɵfac, providedIn: 'root' });
    return HttpStatusCodeService;
}());
export { HttpStatusCodeService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpStatusCodeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQVFDO1FBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVNLDZDQUFhLEdBQXBCLFVBQXFCLFVBQWtCLEVBQUUsV0FBMEI7UUFBMUIsNEJBQUEsRUFBQSxrQkFBMEI7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVNLDZDQUFhLEdBQXBCO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sOENBQWMsR0FBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs4RkFyQlcscUJBQXFCO2lFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCLG1CQUZyQixNQUFNO2dDQUhuQjtDQTRCQyxBQTFCRCxJQTBCQztTQXZCWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEh0dHBTdGF0dXNDb2RlU2VydmljZSB7XG5cblx0cHJpdmF0ZSBzdGF0dXNDb2RlOiBudW1iZXI7XG5cdHByaXZhdGUgcmVkaXJlY3RVcmw6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSAyMDA7XG5cdFx0dGhpcy5yZWRpcmVjdFVybCA9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgc2V0U3RhdHVzQ29kZShzdGF0dXNDb2RlOiBudW1iZXIsIHJlZGlyZWN0VXJsOiBzdHJpbmcgPSBudWxsKSB7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLnJlZGlyZWN0VXJsID0gcmVkaXJlY3RVcmw7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RhdHVzQ29kZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiAodGhpcy5zdGF0dXNDb2RlID09PSAzMDkgPyAzMDEgOiB0aGlzLnN0YXR1c0NvZGUpO1xuXHR9XG5cblx0cHVibGljIGdldFJlZGlyZWN0VXJsKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucmVkaXJlY3RVcmw7XG5cdH1cblxufVxuIl19