/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders, HttpParams, HttpResponse, HttpXhrBackend, XhrFactory } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendService } from './backend.service';
import { STATUS_CODE } from './http-status-codes';
import { MemoryBackendConfig, MemoryDataService } from './memory';
export class HttpClientBackendService extends BackendService {
    /**
     * @param {?} dataService
     * @param {?} config
     * @param {?} factory
     */
    constructor(dataService, config, factory) {
        super(dataService, config);
        this.factory = factory;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    handle(request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            /** @type {?} */
            const resOptions = this.createErrorResponseOptions(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, `${error.message || error}`);
            return this.createResponse$(() => resOptions);
        }
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    getJsonBody(request) {
        return request.body;
    }
    /**
     * @protected
     * @param {?} request
     * @return {?}
     */
    getRequestMethod(request) {
        return (request.method || 'get').toLowerCase();
    }
    /**
     * @protected
     * @param {?} headers
     * @return {?}
     */
    createHeaders(headers) {
        return new HttpHeaders(headers);
    }
    /**
     * @protected
     * @param {?} search
     * @return {?}
     */
    createQueryMap(search) {
        /** @type {?} */
        const map = new Map();
        if (search) {
            /** @type {?} */
            const params = new HttpParams({ fromString: search });
            params.keys().forEach(p => map.set(p, params.getAll(p)));
        }
        return map;
    }
    /**
     * @protected
     * @param {?} resOptions$
     * @return {?}
     */
    createResponse$fromResponseOptions$(resOptions$) {
        return resOptions$.pipe(map((options) => new HttpResponse(options)));
    }
    /**
     * @protected
     * @return {?}
     */
    createPassThruBackend() {
        try {
            return new HttpXhrBackend(this.factory);
        }
        catch (error) {
            error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
            throw error;
        }
    }
}
HttpClientBackendService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HttpClientBackendService.ctorParameters = () => [
    { type: MemoryDataService },
    { type: MemoryBackendConfig, decorators: [{ type: Inject, args: [MemoryBackendConfig,] }, { type: Optional }] },
    { type: XhrFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HttpClientBackendService.prototype.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvaHR0cC1jbGllbnQtYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBCLFdBQVcsRUFBRSxVQUFVLEVBQWUsWUFBWSxFQUFvQixjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEssT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxVQUFVLENBQUM7QUFHbkYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGNBQWM7Ozs7OztJQUUzRCxZQUNDLFdBQThCLEVBQ1csTUFBMkIsRUFDNUQsT0FBbUI7UUFFM0IsS0FBSyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBRzVCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQXlCO1FBQy9CLElBQUk7WUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkM7UUFBQyxPQUFPLEtBQUssRUFBRTs7a0JBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFLENBQUM7WUFDL0gsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0YsQ0FBQzs7Ozs7O0lBRVMsV0FBVyxDQUFDLE9BQXlCO1FBQzlDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxPQUF5QjtRQUNuRCxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFUyxhQUFhLENBQUMsT0FBcUM7UUFDNUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFFUyxjQUFjLENBQUMsTUFBYzs7Y0FDaEMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFvQjtRQUN2QyxJQUFJLE1BQU0sRUFBRTs7a0JBQ0wsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRVMsbUNBQW1DLENBQUMsV0FBd0M7UUFDckYsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBTSxPQUFPLENBQUMsQ0FBQyxDQUNsRSxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxxQkFBcUI7UUFDOUIsSUFBSTtZQUNILE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLHFDQUFxQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RSxNQUFNLEtBQUssQ0FBQztTQUNaO0lBQ0YsQ0FBQzs7O1lBdERELFVBQVU7Ozs7WUFGbUIsaUJBQWlCO1lBQXRDLG1CQUFtQix1QkFPekIsTUFBTSxTQUFDLG1CQUFtQixjQUFHLFFBQVE7WUFiK0UsVUFBVTs7Ozs7OztJQWMvSCwyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cEV2ZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSwgSHR0cFJlc3BvbnNlQmFzZSwgSHR0cFhockJhY2tlbmQsIFhockZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNUQVRVU19DT0RFIH0gZnJvbSAnLi9odHRwLXN0YXR1cy1jb2Rlcyc7XG5pbXBvcnQgeyBNZW1vcnlCYWNrZW5kQ29uZmlnLCBNZW1vcnlEYXRhU2VydmljZSwgUmVzcG9uc2VPcHRpb25zIH0gZnJvbSAnLi9tZW1vcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEJhY2tlbmRTZXJ2aWNlIGV4dGVuZHMgQmFja2VuZFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwQmFja2VuZCB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZGF0YVNlcnZpY2U6IE1lbW9yeURhdGFTZXJ2aWNlLFxuXHRcdEBJbmplY3QoTWVtb3J5QmFja2VuZENvbmZpZykgQE9wdGlvbmFsKCkgY29uZmlnOiBNZW1vcnlCYWNrZW5kQ29uZmlnLFxuXHRcdHByaXZhdGUgZmFjdG9yeTogWGhyRmFjdG9yeSxcblx0KSB7XG5cdFx0c3VwZXIoZGF0YVNlcnZpY2UsIGNvbmZpZyk7XG5cdH1cblxuXHRoYW5kbGUocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc3QgcmVzT3B0aW9ucyA9IHRoaXMuY3JlYXRlRXJyb3JSZXNwb25zZU9wdGlvbnMocmVxdWVzdC51cmwsIFNUQVRVU19DT0RFLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgYCR7ZXJyb3IubWVzc2FnZSB8fCBlcnJvcn1gKTtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiByZXNPcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0SnNvbkJvZHkocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55Pik6IGFueSB7XG5cdFx0cmV0dXJuIHJlcXVlc3QuYm9keTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRSZXF1ZXN0TWV0aG9kKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4pOiBzdHJpbmcge1xuXHRcdHJldHVybiAocmVxdWVzdC5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlSGVhZGVycyhoZWFkZXJzOiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nOyB9KTogSHR0cEhlYWRlcnMge1xuXHRcdHJldHVybiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlUXVlcnlNYXAoc2VhcmNoOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmdbXT4oKTtcblx0XHRpZiAoc2VhcmNoKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGZyb21TdHJpbmc6IHNlYXJjaCB9KTtcblx0XHRcdHBhcmFtcy5rZXlzKCkuZm9yRWFjaChwID0+IG1hcC5zZXQocCwgcGFyYW1zLmdldEFsbChwKSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVJlc3BvbnNlJGZyb21SZXNwb25zZU9wdGlvbnMkKHJlc09wdGlvbnMkOiBPYnNlcnZhYmxlPFJlc3BvbnNlT3B0aW9ucz4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XG5cdFx0cmV0dXJuIHJlc09wdGlvbnMkLnBpcGUoXG5cdFx0XHRtYXAoKG9wdGlvbnM6IEh0dHBSZXNwb25zZUJhc2UpID0+IG5ldyBIdHRwUmVzcG9uc2U8YW55PihvcHRpb25zKSksXG5cdFx0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVQYXNzVGhydUJhY2tlbmQoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBuZXcgSHR0cFhockJhY2tlbmQodGhpcy5mYWN0b3J5KTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdDYW5ub3QgY3JlYXRlIHBhc3NUaHJ1NDA0IGJhY2tlbmQ7ICcgKyAoZXJyb3IubWVzc2FnZSB8fCAnJyk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH1cbn1cbiJdfQ==