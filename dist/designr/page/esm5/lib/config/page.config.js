/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
var PageConfig = /** @class */ (function () {
    function PageConfig(options) {
        this.pages = {};
        this.layouts = {};
        // console.log('PageConfig', options);
        if (options) {
            this.layouts = options.layouts || {};
            this.defaultLayout = options.defaultLayout;
            this.pages = options.pages || {};
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
    }
    return PageConfig;
}());
export { PageConfig };
if (false) {
    /** @type {?} */
    PageConfig.prototype.defaultPage;
    /** @type {?} */
    PageConfig.prototype.notFoundPage;
    /** @type {?} */
    PageConfig.prototype.defaultLayout;
    /** @type {?} */
    PageConfig.prototype.pages;
    /** @type {?} */
    PageConfig.prototype.layouts;
}
/** @type {?} */
export var PAGE_CONFIG = new InjectionToken('page.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wYWdlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQU1yRDtJQU9DLG9CQUFZLE9BQW9CO1FBSGhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd0QixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7O0lBaEJBLGlDQUFrQzs7SUFDbEMsa0NBQW1DOztJQUNuQyxtQ0FBc0M7O0lBQ3RDLDJCQUFtQjs7SUFDbkIsNkJBQXVCOzs7QUFjeEIsTUFBTSxLQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRzIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dCc7XHJcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuLi9wYWdlL3BhZ2UnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZUNvbmZpZyB7XHJcblx0ZGVmYXVsdFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xyXG5cdG5vdEZvdW5kUGFnZT86IFR5cGU8UGFnZUNvbXBvbmVudD47XHJcblx0ZGVmYXVsdExheW91dD86IFR5cGU8TGF5b3V0Q29tcG9uZW50PjtcclxuXHRwYWdlcz86IFBhZ2VzID0ge307XHJcblx0bGF5b3V0cz86IExheW91dHMgPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VDb25maWcpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlQ29uZmlnJywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHR0aGlzLmxheW91dHMgPSBvcHRpb25zLmxheW91dHMgfHwge307XHJcblx0XHRcdHRoaXMuZGVmYXVsdExheW91dCA9IG9wdGlvbnMuZGVmYXVsdExheW91dDtcclxuXHRcdFx0dGhpcy5wYWdlcyA9IG9wdGlvbnMucGFnZXMgfHwge307XHJcblx0XHRcdHRoaXMuZGVmYXVsdFBhZ2UgPSBvcHRpb25zLmRlZmF1bHRQYWdlO1xyXG5cdFx0XHR0aGlzLm5vdEZvdW5kUGFnZSA9IG9wdGlvbnMubm90Rm91bmRQYWdlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0VfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFBhZ2VDb25maWc+KCdwYWdlLmNvbmZpZycpO1xyXG4iXX0=