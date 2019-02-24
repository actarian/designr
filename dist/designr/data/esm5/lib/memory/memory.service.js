/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DataConfig, DATA_CONFIG } from '../config/data.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/data.config";
var MemoryService = /** @class */ (function () {
    function MemoryService(config) {
        this.config = config;
        // console.log('DatasService', config);
    }
    /**
     * @return {?}
     */
    MemoryService.prototype.createDb = /**
     * @return {?}
     */
    function () {
        // console.log('MemoryService.createDb', this.config.datas);
        return this.config.datas || {};
    };
    /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    MemoryService.prototype.parseRequestUrl = /**
     * @param {?} url
     * @param {?} service
     * @return {?}
     */
    function (url, service) {
        // !!! REMAPPING
        /*
                if (this.dataService.options.memory && this.dataService.options.memory.remap) {
                    Object.keys(this.dataService.options.memory.remap).forEach((k: string) => {
                        url = url.replace(k, this.dataService.options.memory.remap[k]);
                    });
                }
                */
        /** @type {?} */
        var parsed = service.parseRequestUrl(url);
        return parsed;
    };
    MemoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MemoryService.ctorParameters = function () { return [
        { type: DataConfig, decorators: [{ type: Inject, args: [DATA_CONFIG,] }] }
    ]; };
    /** @nocollapse */ MemoryService.ngInjectableDef = i0.defineInjectable({ factory: function MemoryService_Factory() { return new MemoryService(i0.inject(i1.DATA_CONFIG)); }, token: MemoryService, providedIn: "root" });
    return MemoryService;
}());
export { MemoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MemoryService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9tZW1vcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRWhFO0lBS0MsdUJBQzhCLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFJL0MsdUNBQXVDO0lBQ3hDLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDQyw0REFBNEQ7UUFDNUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsdUNBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLE9BQU87Ozs7Ozs7Ozs7WUFTN0IsTUFBTSxHQUFxQixPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7O2dCQTdCRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUpRLFVBQVUsdUJBUWhCLE1BQU0sU0FBQyxXQUFXOzs7d0JBVnJCO0NBbUNDLEFBL0JELElBK0JDO1NBNUJZLGFBQWE7Ozs7OztJQUd4QiwrQkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluTWVtb3J5RGJTZXJ2aWNlLCBQYXJzZWRSZXF1ZXN0VXJsIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5pbXBvcnQgeyBEYXRhQ29uZmlnLCBEQVRBX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9kYXRhLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZW1vcnlTZXJ2aWNlIGltcGxlbWVudHMgSW5NZW1vcnlEYlNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoREFUQV9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBEYXRhQ29uZmlnLFxuXHRcdC8vIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBEYXRhU2VydmljZSkpIHB1YmxpYyBkYXRhU2VydmljZTogRGF0YVNlcnZpY2Vcblx0XHQvLyBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0RhdGFzU2VydmljZScsIGNvbmZpZyk7XG5cdH1cblxuXHRjcmVhdGVEYigpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnTWVtb3J5U2VydmljZS5jcmVhdGVEYicsIHRoaXMuY29uZmlnLmRhdGFzKTtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGF0YXMgfHwge307XG5cdH1cblxuXHRwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHNlcnZpY2UpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcblx0XHQvLyAhISEgUkVNQVBQSU5HXG5cdFx0Lypcblx0XHRpZiAodGhpcy5kYXRhU2VydmljZS5vcHRpb25zLm1lbW9yeSAmJiB0aGlzLmRhdGFTZXJ2aWNlLm9wdGlvbnMubWVtb3J5LnJlbWFwKSB7XG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLmRhdGFTZXJ2aWNlLm9wdGlvbnMubWVtb3J5LnJlbWFwKS5mb3JFYWNoKChrOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dXJsID0gdXJsLnJlcGxhY2UoaywgdGhpcy5kYXRhU2VydmljZS5vcHRpb25zLm1lbW9yeS5yZW1hcFtrXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRjb25zdCBwYXJzZWQ6IFBhcnNlZFJlcXVlc3RVcmwgPSBzZXJ2aWNlLnBhcnNlUmVxdWVzdFVybCh1cmwpO1xuXHRcdHJldHVybiBwYXJzZWQ7XG5cdH1cblxufVxuXG4vKlxuZXhwb3J0IGNsYXNzIE1lbW9yeUFwaUNvbmZpZyBleHRlbmRzIEluTWVtb3J5QmFja2VuZENvbmZpZyBpbXBsZW1lbnRzIEluTWVtb3J5QmFja2VuZENvbmZpZ0FyZ3Mge1xuXG5cdGFwaUJhc2U/OiBzdHJpbmc7XG5cdGNhc2VTZW5zaXRpdmVTZWFyY2g/OiBib29sZWFuO1xuXHRkYXRhRW5jYXBzdWxhdGlvbj86IGJvb2xlYW47XG5cdGRlbGF5PzogbnVtYmVyO1xuXHRkZWxldGU0MDQ/OiBib29sZWFuO1xuXHRob3N0Pzogc3RyaW5nO1xuXHRwYXNzVGhydVVua25vd25Vcmw/OiBib29sZWFuO1xuXHRwb3N0MjA0PzogYm9vbGVhbjtcblx0cG9zdDQwOT86IGJvb2xlYW47XG5cdHB1dDIwND86IGJvb2xlYW47XG5cdHB1dDQwND86IGJvb2xlYW47XG5cdHJvb3RQYXRoPzogc3RyaW5nO1xuXG5cdHJlbWFwPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcblx0ZGF0YUJhc2U/OiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH07XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IE1lbW9yeUFwaUNvbmZpZykge1xuXHRcdHN1cGVyKG9wdGlvbnMpO1xuXHRcdGNvbnNvbGUubG9nKCdNZW1vcnlBcGlDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cbiovXG4iXX0=