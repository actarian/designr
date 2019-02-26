/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpHeaders, HttpParams, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from './backend.service';
import { STATUS_CODE } from './http-status-codes';
import { MemoryBackendConfig, MemoryDataService } from './memory';
var HttpClientBackendService = /** @class */ (function (_super) {
    tslib_1.__extends(HttpClientBackendService, _super);
    function HttpClientBackendService(dataService, config, factory) {
        var _this = _super.call(this, dataService, config) || this;
        _this.factory = factory;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    HttpClientBackendService.prototype.handle = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            /** @type {?} */
            var resOptions_1 = this.createErrorResponseOptions(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "" + (error.message || error));
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    HttpClientBackendService.prototype.getJsonBody = /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return request.body;
    };
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    HttpClientBackendService.prototype.getRequestMethod = /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return (request.method || 'get').toLowerCase();
    };
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    HttpClientBackendService.prototype.createHeaders = /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    function (headers) {
        return new HttpHeaders(headers);
    };
    /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    HttpClientBackendService.prototype.createQueryMap = /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    function (search) {
        /** @type {?} */
        var map = new Map();
        if (search) {
            /** @type {?} */
            var params_1 = new HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    /**
     * @protected
     * @param {?} resOptions$
     * @return {?}
     */
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = /**
     * @protected
     * @param {?} resOptions$
     * @return {?}
     */
    function (resOptions$) {
        return resOptions$.pipe(map(function (options) { return new HttpResponse(options); }));
    };
    /**
     * @protected
     * @return {?}
     */
    HttpClientBackendService.prototype.createPassThruBackend = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            return new HttpXhrBackend(this.factory);
        }
        catch (error) {
            error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
            throw error;
        }
    };
    HttpClientBackendService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HttpClientBackendService.ctorParameters = function () { return [
        { type: MemoryDataService },
        { type: MemoryBackendConfig, decorators: [{ type: Inject, args: [MemoryBackendConfig,] }, { type: Optional }] },
        { type: XhrFactory }
    ]; };
    return HttpClientBackendService;
}(BackendService));
export { HttpClientBackendService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpClientBackendService.prototype.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUEwQixXQUFXLEVBQUUsVUFBVSxFQUFlLFlBQVksRUFBb0IsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hLLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQW1CLE1BQU0sVUFBVSxDQUFDO0FBRW5GO0lBQzhDLG9EQUFjO0lBRTNELGtDQUNDLFdBQThCLEVBQ1csTUFBMkIsRUFDNUQsT0FBbUI7UUFINUIsWUFLQyxrQkFBTSxXQUFXLEVBQUUsTUFBTSxDQUFDLFNBQzFCO1FBSFEsYUFBTyxHQUFQLE9BQU8sQ0FBWTs7SUFHNUIsQ0FBQzs7Ozs7SUFFRCx5Q0FBTTs7OztJQUFOLFVBQU8sT0FBeUI7UUFDL0IsSUFBSTtZQUNILE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztRQUFDLE9BQU8sS0FBSyxFQUFFOztnQkFDVCxZQUFVLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixFQUFFLE1BQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUUsQ0FBQztZQUMvSCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBTSxPQUFBLFlBQVUsRUFBVixDQUFVLENBQUMsQ0FBQztTQUM5QztJQUNGLENBQUM7Ozs7OztJQUVTLDhDQUFXOzs7OztJQUFyQixVQUFzQixPQUF5QjtRQUM5QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRVMsbURBQWdCOzs7OztJQUExQixVQUEyQixPQUF5QjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFUyxnREFBYTs7Ozs7SUFBdkIsVUFBd0IsT0FBcUM7UUFDNUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFUyxpREFBYzs7Ozs7SUFBeEIsVUFBeUIsTUFBYzs7WUFDaEMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUN2QyxJQUFJLE1BQU0sRUFBRTs7Z0JBQ0wsUUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3JELFFBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRVMsc0VBQW1DOzs7OztJQUE3QyxVQUE4QyxXQUF3QztRQUNyRixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxVQUFDLE9BQXlCLElBQUssT0FBQSxJQUFJLFlBQVksQ0FBTSxPQUFPLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUNsRSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFUyx3REFBcUI7Ozs7SUFBL0I7UUFDQyxJQUFJO1lBQ0gsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNmLEtBQUssQ0FBQyxPQUFPLEdBQUcscUNBQXFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sS0FBSyxDQUFDO1NBQ1o7SUFDRixDQUFDOztnQkF0REQsVUFBVTs7OztnQkFGbUIsaUJBQWlCO2dCQUF0QyxtQkFBbUIsdUJBT3pCLE1BQU0sU0FBQyxtQkFBbUIsY0FBRyxRQUFRO2dCQWIrRSxVQUFVOztJQStEakksK0JBQUM7Q0FBQSxBQXZERCxDQUM4QyxjQUFjLEdBc0QzRDtTQXREWSx3QkFBd0I7Ozs7OztJQUtuQywyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cEV2ZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cFJlc3BvbnNlQmFzZSwgSHR0cFhockJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNUQVRVU19DT0RFIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSwgUmVzcG9uc2VPcHRpb25zIH0gZnJvbSAnLi9tZW1vcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIGV4dGVuZHMgQmFja2VuZFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdEBJbmplY3QoTWVtb3J5QmFja2VuZENvbmZpZykgQE9wdGlvbmFsKCkgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRcdHByaXZhdGUgZmFjdG9yeTogWGhyRmFjdG9yeSxcblx0KSB7XG5cdFx0c3VwZXIoZGF0YVNlcnZpY2UsIGNvbmZpZyk7XG5cdH1cblxuXHRoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0SnNvbkJvZHkocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGFueSB7XG5cdFx0cmV0dXJuIHJlcXVlc3QuYm9keTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRSZXF1ZXN0TWV0aG9kKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBzdHJpbmcge1xuXHRcdHJldHVybiAocmVxdWVzdC5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlSGVhZGVycyhoZWFkZXJzOiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nOyB9KTogSHR0cEhlYWRlcnMge1xuXHRcdHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUXVlcnlNYXAoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblx0XHRpZiAoc2VhcmNoKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcblx0XHRcdHBhcmFtcy5rZXlzKCkuZm9yRWFjaChwID0+IG1hcC5zZXQocCwgcGFyYW1zLmdldEFsbChwKSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnMkOiBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG5cdFx0cmV0dXJuIHJlc09wdGlvbnMkLnBpcGUoXG5cdFx0XHRtYXAoKG9wdGlvbnM6IEh0dHBSZXNwb25zZUJhc2UpID0+IG5ldyBIdHRwUmVzcG9uc2U8YW55PihvcHRpb25zKSksXG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVQYXNzVGhydUJhY2tlbmQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBuZXcgSHR0cFhockJhY2tlbmQodGhpcy5mYWN0b3J5KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXJyb3IubWVzc2FnZSB8fCAnJyk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cbn1cbiJdfQ==