/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';
import * as i0 from "@angular/core";
import * as i1 from "./core.config";
export class ConfigService {
    /**
     * @param {?} options
     */
    constructor(options) {
        console.log('ConfigService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.CORE_CONFIG)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUt4RCxNQUFNLE9BQU8sYUFBYTs7OztJQUl6QixZQUNzQixPQUFtQjtRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QiwrRkFBK0Y7UUFDL0YsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBZkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsVUFBVSx1QkFVaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnLCBDT1JFX0NPTkZJRyB9IGZyb20gJy4vY29yZS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogQ29yZUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPUkVfQ09ORklHKSBvcHRpb25zOiBDb3JlQ29uZmlnXG5cdCkge1xuXHRcdGNvbnNvbGUubG9nKCdDb25maWdTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0Ly8gb3B0aW9ucy5kZWZhdWx0UGFnZSA9IChvcHRpb25zLmRlZmF1bHRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IENvcmVDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19