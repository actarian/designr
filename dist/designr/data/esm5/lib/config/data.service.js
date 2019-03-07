/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { STATUS_CODE } from '../memory/status-codes';
import * as i0 from "@angular/core";
import * as i1 from "./data.config";
var DataService = /** @class */ (function () {
    function DataService(config
    // @Inject(forwardRef(() => DataService)) public dataService: DataService
    // private dataService: DataService,
    ) {
        // console.log('DataService', config);
        config = config || {};
        this.config = new DataConfig(config);
    }
    /**
     * @return {?}
     */
    DataService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        // console.log('DataService.createDb', this.config.datas);
        return this.config.datas || {};
    };
    /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    DataService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    function (url, service) {
        // !!! REMAPPING
        /*
                if (this.dataService.config.memory && this.dataService.config.memory.remap) {
                    Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
                        url = url.replace(k, this.dataService.config.memory.remap[k]);
                    });
                }
                */
        /** @type {?} */
        var parsed = service.parseRequestUrl(url);
        return parsed;
    };
    /**
     * @param {?} request
     * @param {?} service
     * @return {?}
     */
    DataService.prototype.requestInterceptor = /**
     * @param {?} request
     * @param {?} service
     * @return {?}
     */
    function (request, service) {
        // console.log('requestInterceptor', request);
        /** @type {?} */
        var body;
        if (request.method === 'post') {
            switch (request.collectionName) {
                case 'slug':
                    /** @type {?} */
                    var mnemonics = request.body;
                    body = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return request.collection.find((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c.mnemonic === x; })) || null; })).filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x; }));
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
                case 'label':
                    /** @type {?} */
                    var ids = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.id; }));
                    body = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return request.collection.find((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c.id === x.id; })) || x; }));
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
            }
        }
        return null;
    };
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.DATA_CONFIG)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /** @type {?} */
    DataService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEO0lBT0MscUJBQ3NCLE1BQWtCO0lBQ3ZDLHlFQUF5RTtJQUN6RSxvQ0FBb0M7O1FBRXBDLHNDQUFzQztRQUN0QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQywwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQscUNBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLE9BQU87Ozs7Ozs7Ozs7WUFTN0IsTUFBTSxHQUFxQixPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELHdDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBc0IsRUFBRSxPQUF1Qjs7O1lBRTdELElBQVM7UUFDYixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzlCLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsS0FBSyxNQUFNOzt3QkFDSixTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUk7b0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsRUFBQyxJQUFJLElBQUksRUFBdEQsQ0FBc0QsRUFBQyxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7b0JBQ3BHLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07Z0JBQ1AsS0FBSyxPQUFPOzt3QkFDTCxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUM7b0JBQ3ZDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQWIsQ0FBYSxFQUFDLElBQUksQ0FBQyxFQUFoRCxDQUFnRCxFQUFDLENBQUM7b0JBQy9FLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07YUFDUDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkF2REQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFQUSxVQUFVLHVCQWFoQixNQUFNLFNBQUMsV0FBVzs7O3NCQWRyQjtDQXNFQyxBQWhFRCxJQWdFQztTQTdEWSxXQUFXOzs7SUFFdkIsNkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9kYXRhLmNvbmZpZyc7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uL21lbW9yeS9iYWNrZW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWVtb3J5RGF0YVNlcnZpY2UsIE1lbW9yeVJlcXVlc3QsIE1lbW9yeVJlc3BvbnNlLCBQYXJzZWRSZXF1ZXN0VXJsIH0gZnJvbSAnLi4vbWVtb3J5L21lbW9yeSc7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERSB9IGZyb20gJy4uL21lbW9yeS9zdGF0dXMtY29kZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBNZW1vcnlEYXRhU2VydmljZSB7XG5cblx0cHVibGljIGNvbmZpZzogRGF0YUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KERBVEFfQ09ORklHKSBjb25maWc6IERhdGFDb25maWdcblx0XHQvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVNlcnZpY2UpKSBwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXG5cdFx0Ly8gcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZScsIGNvbmZpZyk7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdHRoaXMuY29uZmlnID0gbmV3IERhdGFDb25maWcoY29uZmlnKTtcblx0fVxuXG5cdGNyZWF0ZURiKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZS5jcmVhdGVEYicsIHRoaXMuY29uZmlnLmRhdGFzKTtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YXMgfHwge307XG5cdH1cblxuXHRwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHNlcnZpY2UpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHQvLyAhISEgUkVNQVBQSU5HXG5cdFx0Lypcblx0XHRpZiAodGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5ICYmIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkge1xuXHRcdFx0T2JqZWN0LmtleXModGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoaywgdGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwW2tdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IHNlcnZpY2UucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fVxuXG5cdHJlcXVlc3RJbnRlcmNlcHRvcihyZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0LCBzZXJ2aWNlOiBCYWNrZW5kU2VydmljZSk6IE1lbW9yeVJlc3BvbnNlIHtcblx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdEludGVyY2VwdG9yJywgcmVxdWVzdCk7XG5cdFx0bGV0IGJvZHk6IGFueTtcblx0XHRpZiAocmVxdWVzdC5tZXRob2QgPT09ICdwb3N0Jykge1xuXHRcdFx0c3dpdGNoIChyZXF1ZXN0LmNvbGxlY3Rpb25OYW1lKSB7XG5cdFx0XHRcdGNhc2UgJ3NsdWcnOlxuXHRcdFx0XHRcdGNvbnN0IG1uZW1vbmljcyA9IHJlcXVlc3QuYm9keTtcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5tbmVtb25pYyA9PT0geCkgfHwgbnVsbCkuZmlsdGVyKHggPT4geCk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLCBib2R5OiBzZXJ2aWNlLmJvZGlmeShib2R5KSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYWJlbCc6XG5cdFx0XHRcdFx0Y29uc3QgaWRzID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHguaWQpO1xuXHRcdFx0XHRcdGJvZHkgPSByZXF1ZXN0LmJvZHkubWFwKHggPT4gcmVxdWVzdC5jb2xsZWN0aW9uLmZpbmQoYyA9PiBjLmlkID09PSB4LmlkKSB8fCB4KTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4geyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsIGJvZHk6IHNlcnZpY2UuYm9kaWZ5KGJvZHkpLCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Lypcblx0cmVzcG9uc2VJbnRlcmNlcHRvcihyZXNwb25zZTogTWVtb3J5UmVzcG9uc2UsIHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Y29uc29sZS5sb2coJ3Jlc3BvbnNlSW50ZXJjZXB0b3InLCByZXNwb25zZSwgcmVxdWVzdCk7XG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHR9XG5cdCovXG5cbn1cbiJdfQ==