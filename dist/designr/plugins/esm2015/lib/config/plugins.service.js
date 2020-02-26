import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins.config";
export class PluginsService {
    constructor(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
}
PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(i0.ɵɵinject(PLUGINS_CONFIG)); };
PluginsService.ɵprov = i0.ɵɵdefineInjectable({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PluginsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PluginsConfig, decorators: [{
                type: Inject,
                args: [PLUGINS_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtqRSxNQUFNLE9BQU8sY0FBYztJQUkxQixZQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsK0ZBQStGO1FBQy9GLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7OzRFQVpXLGNBQWMsY0FLakIsY0FBYztzREFMWCxjQUFjLFdBQWQsY0FBYyxtQkFGZCxNQUFNO2tEQUVOLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFNRSxNQUFNO3VCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luc0NvbmZpZywgUExVR0lOU19DT05GSUcgfSBmcm9tICcuL3BsdWdpbnMuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGx1Z2luc1NlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBQbHVnaW5zQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExVR0lOU19DT05GSUcpIG9wdGlvbnM6IFBsdWdpbnNDb25maWdcblx0KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BsdWdpbnNTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0Ly8gb3B0aW9ucy5kZWZhdWx0UGFnZSA9IChvcHRpb25zLmRlZmF1bHRQYWdlIHx8IFBhZ2VOb3RGb3VuZENvbXBvbmVudCkgYXMgVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFBsdWdpbnNDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19