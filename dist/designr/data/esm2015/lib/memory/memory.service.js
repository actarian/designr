/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/data.config";
export class MemoryService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        console.log('DatasService', config);
    }
    /**
     * @return {?}
     */
    createDb() {
        console.log('MemoryService.createDb', this.config.datas);
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
                if (this.dataService.options.memory && this.dataService.options.memory.remap) {
                    Object.keys(this.dataService.options.memory.remap).forEach((k: string) => {
                        url = url.replace(k, this.dataService.options.memory.remap[k]);
                    });
                }
                */
        /** @type {?} */
        const parsed = service.parseRequestUrl(url);
        return parsed;
    }
}
MemoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MemoryService.ctorParameters = () => [
    { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
];
/** @nocollapse */ MemoryService.ngInjectableDef = i0.defineInjectable({ factory: function MemoryService_Factory() { return new MemoryService(i0.inject(i1.DATA_CONFIG)); }, token: MemoryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemoryService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQzhCLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFJL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVcsRUFBRSxPQUFPOzs7Ozs7Ozs7O2NBUzdCLE1BQU0sR0FBcUIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7UUFDN0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7WUE3QkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsVUFBVSx1QkFRaEIsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7O0lBQW5CLCtCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UsIFBhcnNlZFJlcXVlc3RVcmwgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbmltcG9ydCB7IERhdGFDb25maWcsIERBVEFfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2RhdGEuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lbW9yeVNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChEQVRBX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IERhdGFDb25maWcsXG5cdFx0Ly8gQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFTZXJ2aWNlKSkgcHVibGljIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxuXHRcdC8vIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuXHQpIHtcblx0XHRjb25zb2xlLmxvZygnRGF0YXNTZXJ2aWNlJywgY29uZmlnKTtcblx0fVxuXG5cdGNyZWF0ZURiKCkge1xuXHRcdGNvbnNvbGUubG9nKCdNZW1vcnlTZXJ2aWNlLmNyZWF0ZURiJywgdGhpcy5jb25maWcuZGF0YXMpO1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kYXRhcyB8fCB7fTtcblx0fVxuXG5cdHBhcnNlUmVxdWVzdFVybCh1cmw6IHN0cmluZywgc2VydmljZSk6IFBhcnNlZFJlcXVlc3RVcmwge1xuXHRcdC8vICEhISBSRU1BUFBJTkdcblx0XHQvKlxuXHRcdGlmICh0aGlzLmRhdGFTZXJ2aWNlLm9wdGlvbnMubWVtb3J5ICYmIHRoaXMuZGF0YVNlcnZpY2Uub3B0aW9ucy5tZW1vcnkucmVtYXApIHtcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuZGF0YVNlcnZpY2Uub3B0aW9ucy5tZW1vcnkucmVtYXApLmZvckVhY2goKGs6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZShrLCB0aGlzLmRhdGFTZXJ2aWNlLm9wdGlvbnMubWVtb3J5LnJlbWFwW2tdKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdGNvbnN0IHBhcnNlZDogUGFyc2VkUmVxdWVzdFVybCA9IHNlcnZpY2UucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG5cdFx0cmV0dXJuIHBhcnNlZDtcblx0fVxuXG59XG5cbi8qXG5leHBvcnQgY2xhc3MgTWVtb3J5QXBpQ29uZmlnIGV4dGVuZHMgSW5NZW1vcnlCYWNrZW5kQ29uZmlnIGltcGxlbWVudHMgSW5NZW1vcnlCYWNrZW5kQ29uZmlnQXJncyB7XG5cblx0YXBpQmFzZT86IHN0cmluZztcblx0Y2FzZVNlbnNpdGl2ZVNlYXJjaD86IGJvb2xlYW47XG5cdGRhdGFFbmNhcHN1bGF0aW9uPzogYm9vbGVhbjtcblx0ZGVsYXk/OiBudW1iZXI7XG5cdGRlbGV0ZTQwND86IGJvb2xlYW47XG5cdGhvc3Q/OiBzdHJpbmc7XG5cdHBhc3NUaHJ1VW5rbm93blVybD86IGJvb2xlYW47XG5cdHBvc3QyMDQ/OiBib29sZWFuO1xuXHRwb3N0NDA5PzogYm9vbGVhbjtcblx0cHV0MjA0PzogYm9vbGVhbjtcblx0cHV0NDA0PzogYm9vbGVhbjtcblx0cm9vdFBhdGg/OiBzdHJpbmc7XG5cblx0cmVtYXA/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXHRkYXRhQmFzZT86IHsgW2tleTogc3RyaW5nXTogYW55W10gfTtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogTWVtb3J5QXBpQ29uZmlnKSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0Y29uc29sZS5sb2coJ01lbW9yeUFwaUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuKi9cbiJdfQ==