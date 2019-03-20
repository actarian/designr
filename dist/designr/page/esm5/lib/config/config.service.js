/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';
import * as i0 from "@angular/core";
import * as i1 from "./page.config";
var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
        this.options = new PageConfig(options || {});
    }
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: PageConfig, decorators: [{ type: Inject, args: [PAGE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.PAGE_CONFIG)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRWhFO0lBT0MsdUJBQ3NCLE9BQW1CO1FBRXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQVhELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBSlEsVUFBVSx1QkFVaEIsTUFBTSxTQUFDLFdBQVc7Ozt3QkFYckI7Q0FnQkMsQUFiRCxJQWFDO1NBVlksYUFBYTs7O0lBRXpCLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbmZpZywgUEFHRV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvcGFnZS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGFnZUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBBR0VfQ09ORklHKSBvcHRpb25zOiBQYWdlQ29uZmlnXG5cdCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBQYWdlQ29uZmlnKG9wdGlvbnMgfHwge30pO1xuXHR9XG5cbn1cbiJdfQ==