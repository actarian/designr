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
        console.log('UIService', options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxTQUFTOzs7O0lBSXJCLFlBQ29CLE9BQWlCO1FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBYkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsUUFBUSx1QkFVZCxNQUFNLFNBQUMsU0FBUzs7Ozs7SUFIbEIsNEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJQ29uZmlnLCBVSV9DT05GSUcgfSBmcm9tICcuL3VpLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFVJQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoVUlfQ09ORklHKSBvcHRpb25zOiBVSUNvbmZpZ1xuXHQpIHtcblx0XHRjb25zb2xlLmxvZygnVUlTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFVJQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==