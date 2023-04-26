/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';
import * as i0 from "@angular/core";
import * as i1 from "./core.config";
export class CoreService {
    /**
     * @param {?} options
     */
    constructor(options) {
        // console.log('CoreService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
}
CoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CoreService.ctorParameters = () => [
    { type: CoreConfig, decorators: [{ type: Inject, args: [CORE_CONFIG,] }] }
];
/** @nocollapse */ CoreService.ngInjectableDef = i0.defineInjectable({ factory: function CoreService_Factory() { return new CoreService(i0.inject(i1.CORE_CONFIG)); }, token: CoreService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CoreService.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvY29yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBS3hELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXZCLFlBQ3NCLE9BQW1CO1FBRXhDLHVDQUF1QztRQUN2QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QiwrRkFBK0Y7UUFDL0YsaUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBZkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsVUFBVSx1QkFVaEIsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBSHBCLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvcmUuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIG9wdGlvbnM6IENvcmVDb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChDT1JFX0NPTkZJRykgb3B0aW9uczogQ29yZUNvbmZpZ1xyXG5cdCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVTZXJ2aWNlJywgb3B0aW9ucyk7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdC8vIG9wdGlvbnMuZGVmYXVsdFBhZ2UgPSAob3B0aW9ucy5kZWZhdWx0UGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XHJcblx0XHQvLyBvcHRpb25zLm5vdEZvdW5kUGFnZSA9IChvcHRpb25zLm5vdEZvdW5kUGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgQ29yZUNvbmZpZyhvcHRpb25zKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==