/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFNaEUsTUFBTSxPQUFPLFdBQVc7Ozs7SUFJdkIsWUFDc0IsTUFBa0I7SUFDdkMseUVBQXlFO0lBQ3pFLG9DQUFvQzs7UUFFcEMsc0NBQXNDO1FBQ3RDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVcsRUFBRSxPQUFPOzs7Ozs7Ozs7O2NBUzdCLE1BQU0sR0FBcUIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDN0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7WUFqQ0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBTFEsVUFBVSx1QkFXaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLDZCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvZGF0YS5jb25maWcnO1xuaW1wb3J0IHsgTWVtb3J5RGF0YVNlcnZpY2UsIFBhcnNlZFJlcXVlc3RVcmwgfSBmcm9tICcuLi9tZW1vcnkvbWVtb3J5JztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIGltcGxlbWVudHMgTWVtb3J5RGF0YVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBjb25maWc6IERhdGFDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgY29uZmlnOiBEYXRhQ29uZmlnXG5cdFx0Ly8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFTZXJ2aWNlKSkgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuXHRcdC8vIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UnLCBjb25maWcpO1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHR0aGlzLmNvbmZpZyA9IG5ldyBEYXRhQ29uZmlnKGNvbmZpZyk7XG5cdH1cblxuXHRjcmVhdGVEYigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRGF0YVNlcnZpY2UuY3JlYXRlRGInLCB0aGlzLmNvbmZpZy5kYXRhcyk7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRhdGFzIHx8IHt9O1xuXHR9XG5cblx0cGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCBzZXJ2aWNlKTogUGFyc2VkUmVxdWVzdFVybCB7XG5cdFx0Ly8gISEhIFJFTUFQUElOR1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeSAmJiB0aGlzLmRhdGFTZXJ2aWNlLmNvbmZpZy5tZW1vcnkucmVtYXApIHtcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcCkuZm9yRWFjaCgoazogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHVybCA9IHVybC5yZXBsYWNlKGssIHRoaXMuZGF0YVNlcnZpY2UuY29uZmlnLm1lbW9yeS5yZW1hcFtrXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSBzZXJ2aWNlLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxufVxuIl19