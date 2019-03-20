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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wYWdlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQU1yRDtJQU9DLG9CQUFZLE9BQW9CO1FBSGhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd0QixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7O0lBaEJBLGlDQUFrQzs7SUFDbEMsa0NBQW1DOztJQUNuQyxtQ0FBc0M7O0lBQ3RDLDJCQUFtQjs7SUFDbkIsNkJBQXVCOzs7QUFjeEIsTUFBTSxLQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0cyB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQnO1xuaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuLi9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFnZUNvbmZpZyB7XG5cdGRlZmF1bHRQYWdlPzogVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0bm90Rm91bmRQYWdlPzogVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0ZGVmYXVsdExheW91dD86IFR5cGU8TGF5b3V0Q29tcG9uZW50Pjtcblx0cGFnZXM/OiBQYWdlcyA9IHt9O1xuXHRsYXlvdXRzPzogTGF5b3V0cyA9IHt9O1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0dGhpcy5sYXlvdXRzID0gb3B0aW9ucy5sYXlvdXRzIHx8IHt9O1xuXHRcdFx0dGhpcy5kZWZhdWx0TGF5b3V0ID0gb3B0aW9ucy5kZWZhdWx0TGF5b3V0O1xuXHRcdFx0dGhpcy5wYWdlcyA9IG9wdGlvbnMucGFnZXMgfHwge307XG5cdFx0XHR0aGlzLmRlZmF1bHRQYWdlID0gb3B0aW9ucy5kZWZhdWx0UGFnZTtcblx0XHRcdHRoaXMubm90Rm91bmRQYWdlID0gb3B0aW9ucy5ub3RGb3VuZFBhZ2U7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBQQUdFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWdlQ29uZmlnPigncGFnZS5jb25maWcnKTtcbiJdfQ==