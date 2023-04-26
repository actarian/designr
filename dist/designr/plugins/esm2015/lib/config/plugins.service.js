/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins.config";
export class PluginsService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
}
PluginsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PluginsService.ctorParameters = () => [
    { type: PluginsConfig, decorators: [{ type: Inject, args: [PLUGINS_CONFIG,] }] }
];
/** @nocollapse */ PluginsService.ngInjectableDef = i0.defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(i0.inject(i1.PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PluginsService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFJMUIsWUFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLCtGQUErRjtRQUMvRixpR0FBaUc7UUFDakcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFmRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFKUSxhQUFhLHVCQVVuQixNQUFNLFNBQUMsY0FBYzs7Ozs7SUFIdkIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW5zQ29uZmlnLCBQTFVHSU5TX0NPTkZJRyB9IGZyb20gJy4vcGx1Z2lucy5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGx1Z2luc1NlcnZpY2Uge1xyXG5cclxuXHRwdWJsaWMgb3B0aW9uczogUGx1Z2luc0NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMVUdJTlNfQ09ORklHKSBvcHRpb25zOiBQbHVnaW5zQ29uZmlnXHJcblx0KSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnUGx1Z2luc1NlcnZpY2UnLCBvcHRpb25zKTtcclxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0Ly8gb3B0aW9ucy5kZWZhdWx0UGFnZSA9IChvcHRpb25zLmRlZmF1bHRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50PjtcclxuXHRcdC8vIG9wdGlvbnMubm90Rm91bmRQYWdlID0gKG9wdGlvbnMubm90Rm91bmRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50PjtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBQbHVnaW5zQ29uZmlnKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19