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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS3JELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXZCLFlBQ3NCLE1BQWtCO0lBQ3ZDLHlFQUF5RTtJQUN6RSxvQ0FBb0M7O1FBRXBDLHNDQUFzQztRQUN0QyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsMERBQTBEO1FBQzFELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsT0FBTzs7Ozs7Ozs7OztjQVM3QixNQUFNLEdBQXFCLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO1FBQzdELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBc0IsRUFBRSxPQUF1Qjs7O1lBRTdELElBQVM7UUFDYixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzlCLFFBQVEsT0FBTyxDQUFDLGNBQWMsRUFBRTtnQkFDL0IsS0FBSyxNQUFNOzswQkFDSixTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUk7b0JBQzlCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBQyxJQUFJLElBQUksRUFBQyxDQUFDLE1BQU07Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztvQkFDcEcscUJBQXFCO29CQUNyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDeEYsTUFBTTtnQkFDUCxLQUFLLE9BQU87OzBCQUNMLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDO29CQUN2QyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7b0JBQy9FLHFCQUFxQjtvQkFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hGLE1BQU07YUFDUDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzs7WUF2REQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBUFEsVUFBVSx1QkFhaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLDZCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvZGF0YS5jb25maWcnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi9tZW1vcnkvYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7IE1lbW9yeURhdGFTZXJ2aWNlLCBNZW1vcnlSZXF1ZXN0LCBNZW1vcnlSZXNwb25zZSwgUGFyc2VkUmVxdWVzdFVybCB9IGZyb20gJy4uL21lbW9yeS9tZW1vcnknO1xuaW1wb3J0IHsgU1RBVFVTX0NPREUgfSBmcm9tICcuLi9tZW1vcnkvc3RhdHVzLWNvZGVzJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgTWVtb3J5RGF0YVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBjb25maWc6IERhdGFDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgY29uZmlnOiBEYXRhQ29uZmlnXG5cdFx0Ly8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFTZXJ2aWNlKSkgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuXHRcdC8vIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UnLCBjb25maWcpO1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmNvbmZpZyA9IG5ldyBEYXRhQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRjcmVhdGVEYigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UuY3JlYXRlRGInLCB0aGlzLmNvbmZpZy5kYXRhcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFzIHx8IHt9O1xuXHR9XG5cblx0cGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCBzZXJ2aWNlKTogUGFyc2VkUmVxdWVzdFVybCB7XG5cdFx0Ly8gISEhIFJFTUFQUElOR1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeSAmJiB0aGlzLmRhdGFTZXJ2aWNlLmNvbmZpZy5tZW1vcnkucmVtYXApIHtcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKGssIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcFtrXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSBzZXJ2aWNlLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxuXHRyZXF1ZXN0SW50ZXJjZXB0b3IocmVxdWVzdDogTWVtb3J5UmVxdWVzdCwgc2VydmljZTogQmFja2VuZFNlcnZpY2UpOiBNZW1vcnlSZXNwb25zZSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3JlcXVlc3RJbnRlcmNlcHRvcicsIHJlcXVlc3QpO1xuXHRcdGxldCBib2R5OiBhbnk7XG5cdFx0aWYgKHJlcXVlc3QubWV0aG9kID09PSAncG9zdCcpIHtcblx0XHRcdHN3aXRjaCAocmVxdWVzdC5jb2xsZWN0aW9uTmFtZSkge1xuXHRcdFx0XHRjYXNlICdzbHVnJzpcblx0XHRcdFx0XHRjb25zdCBtbmVtb25pY3MgPSByZXF1ZXN0LmJvZHk7XG5cdFx0XHRcdFx0Ym9keSA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiByZXF1ZXN0LmNvbGxlY3Rpb24uZmluZChjID0+IGMubW5lbW9uaWMgPT09IHgpIHx8IG51bGwpLmZpbHRlcih4ID0+IHgpO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdFx0XHRcdHJldHVybiB7IGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycywgYm9keTogc2VydmljZS5ib2RpZnkoYm9keSksIHN0YXR1czogU1RBVFVTX0NPREUuT0sgfTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbGFiZWwnOlxuXHRcdFx0XHRcdGNvbnN0IGlkcyA9IHJlcXVlc3QuYm9keS5tYXAoeCA9PiB4LmlkKTtcblx0XHRcdFx0XHRib2R5ID0gcmVxdWVzdC5ib2R5Lm1hcCh4ID0+IHJlcXVlc3QuY29sbGVjdGlvbi5maW5kKGMgPT4gYy5pZCA9PT0geC5pZCkgfHwgeCk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLCBib2R5OiBzZXJ2aWNlLmJvZGlmeShib2R5KSwgc3RhdHVzOiBTVEFUVVNfQ09ERS5PSyB9O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qXG5cdHJlc3BvbnNlSW50ZXJjZXB0b3IocmVzcG9uc2U6IE1lbW9yeVJlc3BvbnNlLCByZXF1ZXN0OiBNZW1vcnlSZXF1ZXN0KTogTWVtb3J5UmVzcG9uc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdyZXNwb25zZUludGVyY2VwdG9yJywgcmVzcG9uc2UsIHJlcXVlc3QpO1xuXHRcdHJldHVybiByZXNwb25zZTtcblx0fVxuXHQqL1xuXG59XG4iXX0=