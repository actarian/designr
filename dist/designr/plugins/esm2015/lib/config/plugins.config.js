/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export class PluginsConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.origin = '';
        // console.log('PluginsConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    PluginsConfig.prototype.origin;
    /** @type {?} */
    PluginsConfig.prototype.facebook;
    /** @type {?} */
    PluginsConfig.prototype.google;
    /** @type {?} */
    PluginsConfig.prototype.googleTagManager;
    /** @type {?} */
    PluginsConfig.prototype.mapbox;
    /** @type {?} */
    PluginsConfig.prototype.paypal;
    /** @type {?} */
    PluginsConfig.prototype.trustPilot;
}
/** @type {?} */
export const PLUGINS_CONFIG = new InjectionToken('plugin.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wbHVnaW5zLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvQyxNQUFNLE9BQU8sYUFBYTs7OztJQVN6QixZQUFZLE9BQXVCO1FBUm5DLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFTcEIseUNBQXlDO1FBQ3pDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7OztJQWRBLCtCQUFxQjs7SUFDckIsaUNBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLHlDQUEwQzs7SUFDMUMsK0JBQXNCOztJQUN0QiwrQkFBc0I7O0lBQ3RCLG1DQUE4Qjs7O0FBVS9CLE1BQU0sT0FBTyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQWdCLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhY2Vib29rQ29uZmlnIH0gZnJvbSAnLi4vcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlQ29uZmlnIH0gZnJvbSAnLi4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBib3hDb25maWcgfSBmcm9tICcuLi9wbHVnaW5zL21hcGJveC9tYXBib3guc2VydmljZSc7XHJcbmltcG9ydCB7IFBheVBhbENvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdENvbmZpZyB9IGZyb20gJy4uL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsdWdpbnNDb25maWcge1xyXG5cdG9yaWdpbj86IHN0cmluZyA9ICcnO1xyXG5cdGZhY2Vib29rPzogRmFjZWJvb2tDb25maWc7XHJcblx0Z29vZ2xlPzogR29vZ2xlQ29uZmlnO1xyXG5cdGdvb2dsZVRhZ01hbmFnZXI/OiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnO1xyXG5cdG1hcGJveD86IE1hcGJveENvbmZpZztcclxuXHRwYXlwYWw/OiBQYXlQYWxDb25maWc7XHJcblx0dHJ1c3RQaWxvdD86IFRydXN0UGlsb3RDb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQbHVnaW5zQ29uZmlnKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnUGx1Z2luc0NvbmZpZycsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQTFVHSU5TX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQbHVnaW5zQ29uZmlnPigncGx1Z2luLmNvbmZpZycpO1xyXG4iXX0=