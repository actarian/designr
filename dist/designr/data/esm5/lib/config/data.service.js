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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEO0lBT0MscUJBQ3NCLE1BQWtCO0lBQ3ZDLHlFQUF5RTtJQUN6RSxvQ0FBb0M7O1FBRXBDLHNDQUFzQztRQUN0QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDQywwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQscUNBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLE9BQU87Ozs7Ozs7Ozs7WUFTN0IsTUFBTSxHQUFxQixPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVELHdDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBc0IsRUFBRSxPQUF1Qjs7O1lBRTdELElBQVM7UUFDYixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzlCLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsS0FBSyxNQUFNOzt3QkFDSixTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUk7b0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsRUFBQyxJQUFJLElBQUksRUFBdEQsQ0FBc0QsRUFBQyxDQUFDLE1BQU07Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7b0JBQ3BHLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07Z0JBQ1AsS0FBSyxPQUFPOzt3QkFDTCxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLEVBQUM7b0JBQ3ZDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQWIsQ0FBYSxFQUFDLElBQUksQ0FBQyxFQUFoRCxDQUFnRCxFQUFDLENBQUM7b0JBQy9FLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07YUFDUDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOztnQkF2REQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFQUSxVQUFVLHVCQWFoQixNQUFNLFNBQUMsV0FBVzs7O3NCQWRyQjtDQXNFQyxBQWhFRCxJQWdFQztTQTdEWSxXQUFXOzs7SUFFdkIsNkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFDb25maWcsIERBVEFfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2RhdGEuY29uZmlnJztcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVtb3J5RGF0YVNlcnZpY2UsIE1lbW9yeVJlcXVlc3QsIE1lbW9yeVJlc3BvbnNlLCBQYXJzZWRSZXF1ZXN0VXJsIH0gZnJvbSAnLi4vbWVtb3J5L21lbW9yeSc7XHJcbmltcG9ydCB7IFNUQVRVU19DT0RFIH0gZnJvbSAnLi4vbWVtb3J5L3N0YXR1cy1jb2Rlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBNZW1vcnlEYXRhU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBjb25maWc6IERhdGFDb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgY29uZmlnOiBEYXRhQ29uZmlnXHJcblx0XHQvLyBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVNlcnZpY2UpKSBwdWJsaWMgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXHJcblx0XHQvLyBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuXHQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZScsIGNvbmZpZyk7XHJcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XHJcblx0XHR0aGlzLmNvbmZpZyA9IG5ldyBEYXRhQ29uZmlnKGNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVEYigpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdEYXRhU2VydmljZS5jcmVhdGVEYicsIHRoaXMuY29uZmlnLmRhdGFzKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYXRhcyB8fCB7fTtcclxuXHR9XHJcblxyXG5cdHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZywgc2VydmljZSk6IFBhcnNlZFJlcXVlc3RVcmwge1xyXG5cdFx0Ly8gISEhIFJFTUFQUElOR1xyXG5cdFx0LypcclxuXHRcdGlmICh0aGlzLmRhdGFTZXJ2aWNlLmNvbmZpZy5tZW1vcnkgJiYgdGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoaywgdGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5LnJlbWFwW2tdKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdFx0Y29uc3QgcGFyc2VkOiBQYXJzZWRSZXF1ZXN0VXJsID0gc2VydmljZS5wYXJzZVJlcXVlc3RVcmwodXJsKTtcclxuXHRcdHJldHVybiBwYXJzZWQ7XHJcblx0fVxyXG5cclxuXHRyZXF1ZXN0SW50ZXJjZXB0b3IocmVxdWVzdDogTWVtb3J5UmVxdWVzdCwgc2VydmljZTogQmFja2VuZFNlcnZpY2UpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygncmVxdWVzdEludGVyY2VwdG9yJywgcmVxdWVzdCk7XHJcblx0XHRsZXQgYm9keTogYW55O1xyXG5cdFx0aWYgKHJlcXVlc3QubWV0aG9kID09PSAncG9zdCcpIHtcclxuXHRcdFx0c3dpdGNoIChyZXF1ZXN0LmNvbGxlY3Rpb25OYW1lKSB7XHJcblx0XHRcdFx0Y2FzZSAnc2x1Zyc6XHJcblx0XHRcdFx0XHRjb25zdCBtbmVtb25pY3MgPSByZXF1ZXN0LmJvZHk7XHJcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5tbmVtb25pYyA9PT0geCkgfHwgbnVsbCkuZmlsdGVyKHggPT4geCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHRcdFx0XHRcdHJldHVybiB7IGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycywgYm9keTogc2VydmljZS5ib2RpZnkoYm9keSksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ2xhYmVsJzpcclxuXHRcdFx0XHRcdGNvbnN0IGlkcyA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiB4LmlkKTtcclxuXHRcdFx0XHRcdGJvZHkgPSByZXF1ZXN0LmJvZHkubWFwKHggPT4gcmVxdWVzdC5jb2xsZWN0aW9uLmZpbmQoYyA9PiBjLmlkID09PSB4LmlkKSB8fCB4KTtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLCBib2R5OiBzZXJ2aWNlLmJvZGlmeShib2R5KSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0LypcclxuXHRyZXNwb25zZUludGVyY2VwdG9yKHJlc3BvbnNlOiBNZW1vcnlSZXNwb25zZSwgcmVxdWVzdDogTWVtb3J5UmVxdWVzdCk6IE1lbW9yeVJlc3BvbnNlIHtcclxuXHRcdGNvbnNvbGUubG9nKCdyZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UsIHJlcXVlc3QpO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdH1cclxuXHQqL1xyXG5cclxufVxyXG4iXX0=