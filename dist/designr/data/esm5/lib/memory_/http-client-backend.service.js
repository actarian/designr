/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpHeaders, HttpParams, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from './backend.service';
import { STATUS } from './http-status-codes';
import { MemoryBackendConfig, MemoryDataService } from './interfaces';
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
            var resOptions_1 = this.createErrorResponseOptions(request.url, STATUS.INTERNAL_SERVER_ERROR, "" + (error.message || error));
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
        return resOptions$
            .pipe(map(function (options) { return new HttpResponse(options); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnlfL2h0dHAtY2xpZW50LWJhY2tlbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBMEIsV0FBVyxFQUFFLFVBQVUsRUFBZSxZQUFZLEVBQW9CLGNBQWMsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoSyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFtQixNQUFNLGNBQWMsQ0FBQztBQUV2RjtJQUM4QyxvREFBYztJQUUzRCxrQ0FDQyxXQUE4QixFQUNXLE1BQTJCLEVBQzVELE9BQW1CO1FBSDVCLFlBS0Msa0JBQU0sV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUMxQjtRQUhRLGFBQU8sR0FBUCxPQUFPLENBQVk7O0lBRzVCLENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLE9BQXlCO1FBQy9CLElBQUk7WUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTs7Z0JBQ1QsWUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxNQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFFLENBQUM7WUFDMUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQU0sT0FBQSxZQUFVLEVBQVYsQ0FBVSxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDOzs7Ozs7SUFFUyw4Q0FBVzs7Ozs7SUFBckIsVUFBc0IsT0FBeUI7UUFDOUMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVTLG1EQUFnQjs7Ozs7SUFBMUIsVUFBMkIsT0FBeUI7UUFDbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRVMsZ0RBQWE7Ozs7O0lBQXZCLFVBQXdCLE9BQXFDO1FBQzVELE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRVMsaURBQWM7Ozs7O0lBQXhCLFVBQXlCLE1BQWM7O1lBQ2hDLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBb0I7UUFDdkMsSUFBSSxNQUFNLEVBQUU7O2dCQUNMLFFBQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNyRCxRQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7Ozs7OztJQUVTLHNFQUFtQzs7Ozs7SUFBN0MsVUFBOEMsV0FBd0M7UUFDckYsT0FBTyxXQUFXO2FBQ2hCLElBQUksQ0FDSixHQUFHLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsSUFBSSxZQUFZLENBQU0sT0FBTyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FDbEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRVMsd0RBQXFCOzs7O0lBQS9CO1FBQ0MsSUFBSTtZQUNILE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RSxNQUFNLEtBQUssQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7Z0JBdkRELFVBQVU7Ozs7Z0JBRm1CLGlCQUFpQjtnQkFBdEMsbUJBQW1CLHVCQU96QixNQUFNLFNBQUMsbUJBQW1CLGNBQUcsUUFBUTtnQkFiK0UsVUFBVTs7SUFnRWpJLCtCQUFDO0NBQUEsQUF4REQsQ0FDOEMsY0FBYyxHQXVEM0Q7U0F2RFksd0JBQXdCOzs7Ozs7SUFLbkMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEJhY2tlbmQsIEh0dHBFdmVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UsIEh0dHBYaHJCYWNrZW5kLCBYaHJGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTVEFUVVMgfSBmcm9tICcuL2h0dHAtc3RhdHVzLWNvZGVzJztcbmltcG9ydCB7IE1lbW9yeUJhY2tlbmRDb25maWcsIE1lbW9yeURhdGFTZXJ2aWNlLCBSZXNwb25zZU9wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIGV4dGVuZHMgQmFja2VuZFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdEBJbmplY3QoTWVtb3J5QmFja2VuZENvbmZpZykgQE9wdGlvbmFsKCkgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRcdHByaXZhdGUgZmFjdG9yeTogWGhyRmFjdG9yeSxcblx0KSB7XG5cdFx0c3VwZXIoZGF0YVNlcnZpY2UsIGNvbmZpZyk7XG5cdH1cblxuXHRoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxdWVzdC51cmwsIFNUQVRVUy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIGAke2Vycm9yLm1lc3NhZ2UgfHwgZXJyb3J9YCk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gcmVzT3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGdldEpzb25Cb2R5KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBhbnkge1xuXHRcdHJldHVybiByZXF1ZXN0LmJvZHk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0UmVxdWVzdE1ldGhvZChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogc3RyaW5nIHtcblx0XHRyZXR1cm4gKHJlcXVlc3QubWV0aG9kIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZUhlYWRlcnMoaGVhZGVyczogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZzsgfSk6IEh0dHBIZWFkZXJzIHtcblx0XHRyZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVF1ZXJ5TWFwKHNlYXJjaDogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nW10+IHtcblx0XHRjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nW10+KCk7XG5cdFx0aWYgKHNlYXJjaCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoeyBmcm9tU3RyaW5nOiBzZWFyY2ggfSk7XG5cdFx0XHRwYXJhbXMua2V5cygpLmZvckVhY2gocCA9PiBtYXAuc2V0KHAsIHBhcmFtcy5nZXRBbGwocCkpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVSZXNwb25zZSRmcm9tUmVzcG9uc2VPcHRpb25zJChyZXNPcHRpb25zJDogT2JzZXJ2YWJsZTxSZXNwb25zZU9wdGlvbnM+KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4ge1xuXHRcdHJldHVybiByZXNPcHRpb25zJFxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdG1hcCgob3B0aW9uczogSHR0cFJlc3BvbnNlQmFzZSkgPT4gbmV3IEh0dHBSZXNwb25zZTxhbnk+KG9wdGlvbnMpKSxcblx0XHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUGFzc1RocnVCYWNrZW5kKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gbmV3IEh0dHBYaHJCYWNrZW5kKHRoaXMuZmFjdG9yeSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnQ2Fubm90IGNyZWF0ZSBwYXNzVGhydTQwNCBiYWNrZW5kOyAnICsgKGVycm9yLm1lc3NhZ2UgfHwgJycpO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHR9XG59XG4iXX0=