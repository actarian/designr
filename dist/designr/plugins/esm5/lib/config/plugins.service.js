/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins.config";
var PluginsService = /** @class */ (function () {
    function PluginsService(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
    PluginsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PluginsService.ctorParameters = function () { return [
        { type: PluginsConfig, decorators: [{ type: Inject, args: [PLUGINS_CONFIG,] }] }
    ]; };
    /** @nocollapse */ PluginsService.ngInjectableDef = i0.defineInjectable({ factory: function PluginsService_Factory() { return new PluginsService(i0.inject(i1.PLUGINS_CONFIG)); }, token: PluginsService, providedIn: "root" });
    return PluginsService;
}());
export { PluginsService };
if (false) {
    /** @type {?} */
    PluginsService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFakU7SUFPQyx3QkFDeUIsT0FBc0I7UUFFOUMsMENBQTBDO1FBQzFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLCtGQUErRjtRQUMvRixpR0FBaUc7UUFDakcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFmRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUpRLGFBQWEsdUJBVW5CLE1BQU0sU0FBQyxjQUFjOzs7eUJBWnhCO0NBcUJDLEFBakJELElBaUJDO1NBZFksY0FBYzs7O0lBRTFCLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luc0NvbmZpZywgUExVR0lOU19DT05GSUcgfSBmcm9tICcuL3BsdWdpbnMuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBsdWdpbnNTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG9wdGlvbnM6IFBsdWdpbnNDb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTFVHSU5TX0NPTkZJRykgb3B0aW9uczogUGx1Z2luc0NvbmZpZ1xyXG5cdCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1BsdWdpbnNTZXJ2aWNlJywgb3B0aW9ucyk7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdC8vIG9wdGlvbnMuZGVmYXVsdFBhZ2UgPSAob3B0aW9ucy5kZWZhdWx0UGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XHJcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgUGx1Z2luc0NvbmZpZyhvcHRpb25zKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==