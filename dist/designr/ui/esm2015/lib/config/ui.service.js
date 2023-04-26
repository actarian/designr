/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBS2xELE1BQU0sT0FBTyxTQUFTOzs7O0lBSXJCLFlBQ29CLE9BQWlCO1FBRXBDLHFDQUFxQztRQUNyQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQWJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUpRLFFBQVEsdUJBVWQsTUFBTSxTQUFDLFNBQVM7Ozs7O0lBSGxCLDRCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vdWkuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBVSUNvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFVJX0NPTkZJRykgb3B0aW9uczogVUlDb25maWdcclxuXHQpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdVSVNlcnZpY2UnLCBvcHRpb25zKTtcclxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFVJQ29uZmlnKG9wdGlvbnMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19