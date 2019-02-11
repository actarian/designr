/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';
import * as i0 from "@angular/core";
import * as i1 from "./core.config";
var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
        console.log('ConfigService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.CORE_CONFIG)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());
export { ConfigService };
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUV4RDtJQU9DLHVCQUNzQixPQUFtQjtRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QiwrRkFBK0Y7UUFDL0YsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBZkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFKUSxVQUFVLHVCQVVoQixNQUFNLFNBQUMsV0FBVzs7O3dCQVpyQjtDQXFCQyxBQWpCRCxJQWlCQztTQWRZLGFBQWE7OztJQUV6QixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvcmUuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IENvcmVDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChDT1JFX0NPTkZJRykgb3B0aW9uczogQ29yZUNvbmZpZ1xuXHQpIHtcblx0XHRjb25zb2xlLmxvZygnQ29uZmlnU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdC8vIG9wdGlvbnMuZGVmYXVsdFBhZ2UgPSAob3B0aW9ucy5kZWZhdWx0UGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0Ly8gb3B0aW9ucy5ub3RGb3VuZFBhZ2UgPSAob3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50KSBhcyBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBDb3JlQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==