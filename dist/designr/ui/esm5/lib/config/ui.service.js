/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui.config";
var UIService = /** @class */ (function () {
    function UIService(options) {
        console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
    UIService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UIService.ctorParameters = function () { return [
        { type: UIConfig, decorators: [{ type: Inject, args: [UI_CONFIG,] }] }
    ]; };
    /** @nocollapse */ UIService.ngInjectableDef = i0.defineInjectable({ factory: function UIService_Factory() { return new UIService(i0.inject(i1.UI_CONFIG)); }, token: UIService, providedIn: "root" });
    return UIService;
}());
export { UIService };
if (false) {
    /** @type {?} */
    UIService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRWxEO0lBT0MsbUJBQ29CLE9BQWlCO1FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBYkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxRQUFRLHVCQVVkLE1BQU0sU0FBQyxTQUFTOzs7b0JBWm5CO0NBbUJDLEFBZkQsSUFlQztTQVpZLFNBQVM7OztJQUVyQiw0QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vdWkuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogVUlDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChVSV9DT05GSUcpIG9wdGlvbnM6IFVJQ29uZmlnXG5cdCkge1xuXHRcdGNvbnNvbGUubG9nKCdVSVNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVUlDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19