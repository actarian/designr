/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui.config";
var UIService = /** @class */ (function () {
    function UIService(options) {
        // console.log('UIService', options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBRWxEO0lBT0MsbUJBQ29CLE9BQWlCO1FBRXBDLHFDQUFxQztRQUNyQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBSlEsUUFBUSx1QkFVZCxNQUFNLFNBQUMsU0FBUzs7O29CQVpuQjtDQW1CQyxBQWZELElBZUM7U0FaWSxTQUFTOzs7SUFFckIsNEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVSUNvbmZpZywgVUlfQ09ORklHIH0gZnJvbSAnLi91aS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG9wdGlvbnM6IFVJQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoVUlfQ09ORklHKSBvcHRpb25zOiBVSUNvbmZpZ1xyXG5cdCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1VJU2VydmljZScsIG9wdGlvbnMpO1xyXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVUlDb25maWcob3B0aW9ucyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=