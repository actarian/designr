/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';
import * as i0 from "@angular/core";
import * as i1 from "./page.config";
export class ConfigService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = new PageConfig(options || {});
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: PageConfig, decorators: [{ type: Inject, args: [PAGE_CONFIG,] }] }
];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.PAGE_CONFIG)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxhQUFhOzs7O0lBSXpCLFlBQ3NCLE9BQW1CO1FBRXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQVhELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUpRLFVBQVUsdUJBVWhCLE1BQU0sU0FBQyxXQUFXOzs7OztJQUhwQixnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb25maWcsIFBBR0VfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL3BhZ2UuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFBhZ2VDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQQUdFX0NPTkZJRykgb3B0aW9uczogUGFnZUNvbmZpZ1xuXHQpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgUGFnZUNvbmZpZyhvcHRpb25zIHx8IHt9KTtcblx0fVxuXG59XG4iXX0=