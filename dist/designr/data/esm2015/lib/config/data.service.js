/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import { STATUS_CODE } from '../memory/status-codes';
import * as i0 from "@angular/core";
import * as i1 from "./data.config";
export class DataService {
    /**
     * @param {?} config
     */
    constructor(config
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
    createDb() {
        // console.log('DataService.createDb', this.config.datas);
        return this.config.datas || {};
    }
    /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    parseRequestUrl(url, service) {
        // !!! REMAPPING
        /*
                if (this.dataService.config.memory && this.dataService.config.memory.remap) {
                    Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
                        url = url.replace(k, this.dataService.config.memory.remap[k]);
                    });
                }
                */
        /** @type {?} */
        const parsed = service.parseRequestUrl(url);
        return parsed;
    }
    /**
     * @param {?} request
     * @param {?} service
     * @return {?}
     */
    requestInterceptor(request, service) {
        // console.log('requestInterceptor', request);
        /** @type {?} */
        let body;
        if (request.method === 'post') {
            switch (request.collectionName) {
                case 'slug':
                    /** @type {?} */
                    const mnemonics = request.body;
                    body = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => request.collection.find((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => c.mnemonic === x)) || null)).filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x));
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
                case 'label':
                    /** @type {?} */
                    const ids = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x.id));
                    body = request.body.map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => request.collection.find((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => c.id === x.id)) || x));
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
            }
        }
        return null;
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.defineInjectable({ factory: function DataService_Factory() { return new DataService(i0.inject(i1.DATA_CONFIG)); }, token: DataService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DataService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS3JELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXZCLFlBQ3NCLE1BQWtCO0lBQ3ZDLHlFQUF5RTtJQUN6RSxvQ0FBb0M7O1FBRXBDLHNDQUFzQztRQUN0QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsMERBQTBEO1FBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBTzs7Ozs7Ozs7OztjQVM3QixNQUFNLEdBQXFCLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBc0IsRUFBRSxPQUF1Qjs7O1lBRTdELElBQVM7UUFDYixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzlCLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsS0FBSyxNQUFNOzswQkFDSixTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUk7b0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBQyxJQUFJLElBQUksRUFBQyxDQUFDLE1BQU07Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztvQkFDcEcscUJBQXFCO29CQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEYsTUFBTTtnQkFDUCxLQUFLLE9BQU87OzBCQUNMLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDO29CQUN2QyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7b0JBQy9FLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07YUFDUDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7WUF2REQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsVUFBVSx1QkFhaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLDZCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9kYXRhLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vbWVtb3J5L2JhY2tlbmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlSZXF1ZXN0LCBNZW1vcnlSZXNwb25zZSwgUGFyc2VkUmVxdWVzdFVybCB9IGZyb20gJy4uL21lbW9yeS9tZW1vcnknO1xyXG5pbXBvcnQgeyBTVEFUVVNfQ09ERSB9IGZyb20gJy4uL21lbW9yeS9zdGF0dXMtY29kZXMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgTWVtb3J5RGF0YVNlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgY29uZmlnOiBEYXRhQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoREFUQV9DT05GSUcpIGNvbmZpZzogRGF0YUNvbmZpZ1xyXG5cdFx0Ly8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFTZXJ2aWNlKSkgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxyXG5cdFx0Ly8gcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UnLCBjb25maWcpO1xyXG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG5cdFx0dGhpcy5jb25maWcgPSBuZXcgRGF0YUNvbmZpZyhjb25maWcpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGIoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UuY3JlYXRlRGInLCB0aGlzLmNvbmZpZy5kYXRhcyk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YXMgfHwge307XHJcblx0fVxyXG5cclxuXHRwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHNlcnZpY2UpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcclxuXHRcdC8vICEhISBSRU1BUFBJTkdcclxuXHRcdC8qXHJcblx0XHRpZiAodGhpcy5kYXRhU2VydmljZS5jb25maWcubWVtb3J5ICYmIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLmRhdGFTZXJ2aWNlLmNvbmZpZy5tZW1vcnkucmVtYXApLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKGssIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcFtrXSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IHNlcnZpY2UucGFyc2VSZXF1ZXN0VXJsKHVybCk7XHJcblx0XHRyZXR1cm4gcGFyc2VkO1xyXG5cdH1cclxuXHJcblx0cmVxdWVzdEludGVyY2VwdG9yKHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QsIHNlcnZpY2U6IEJhY2tlbmRTZXJ2aWNlKTogTWVtb3J5UmVzcG9uc2Uge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3JlcXVlc3RJbnRlcmNlcHRvcicsIHJlcXVlc3QpO1xyXG5cdFx0bGV0IGJvZHk6IGFueTtcclxuXHRcdGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gJ3Bvc3QnKSB7XHJcblx0XHRcdHN3aXRjaCAocmVxdWVzdC5jb2xsZWN0aW9uTmFtZSkge1xyXG5cdFx0XHRcdGNhc2UgJ3NsdWcnOlxyXG5cdFx0XHRcdFx0Y29uc3QgbW5lbW9uaWNzID0gcmVxdWVzdC5ib2R5O1xyXG5cdFx0XHRcdFx0Ym9keSA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiByZXF1ZXN0LmNvbGxlY3Rpb24uZmluZChjID0+IGMubW5lbW9uaWMgPT09IHgpIHx8IG51bGwpLmZpbHRlcih4ID0+IHgpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSk7XHJcblx0XHRcdFx0XHRyZXR1cm4geyBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsIGJvZHk6IHNlcnZpY2UuYm9kaWZ5KGJvZHkpLCBzdGF0dXM6IFNUQVRVU19DT0RFLk9LIH07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdsYWJlbCc6XHJcblx0XHRcdFx0XHRjb25zdCBpZHMgPSByZXF1ZXN0LmJvZHkubWFwKHggPT4geC5pZCk7XHJcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5pZCA9PT0geC5pZCkgfHwgeCk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHRcdFx0XHRcdHJldHVybiB7IGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycywgYm9keTogc2VydmljZS5ib2RpZnkoYm9keSksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qXHJcblx0cmVzcG9uc2VJbnRlcmNlcHRvcihyZXNwb25zZTogTWVtb3J5UmVzcG9uc2UsIHJlcXVlc3Q6IE1lbW9yeVJlcXVlc3QpOiBNZW1vcnlSZXNwb25zZSB7XHJcblx0XHRjb25zb2xlLmxvZygncmVzcG9uc2VJbnRlcmNlcHRvcicsIHJlc3BvbnNlLCByZXF1ZXN0KTtcclxuXHRcdHJldHVybiByZXNwb25zZTtcclxuXHR9XHJcblx0Ki9cclxuXHJcbn1cclxuIl19