/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui.config";
export class UIService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
}
UIService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UIService.ctorParameters = () => [
    { type: UIConfig, decorators: [{ type: Inject, args: [UI_CONFIG,] }] }
];
/** @nocollapse */ UIService.ngInjectableDef = i0.defineInjectable({ factory: function UIService_Factory() { return new UIService(i0.inject(i1.UI_CONFIG)); }, token: UIService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UIService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxTQUFTOzs7O0lBSXJCLFlBQ29CLE9BQWlCO1FBRXBDLHFDQUFxQztRQUNyQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQWJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUpRLFFBQVEsdUJBVWQsTUFBTSxTQUFDLFNBQVM7Ozs7O0lBSGxCLDRCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSUNvbmZpZywgVUlfQ09ORklHIH0gZnJvbSAnLi91aS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBVSUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFVJX0NPTkZJRykgb3B0aW9uczogVUlDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1VJU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBVSUNvbmZpZyhvcHRpb25zKTtcblx0fVxuXG59XG4iXX0=