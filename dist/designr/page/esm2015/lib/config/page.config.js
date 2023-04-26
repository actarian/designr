/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export class PageConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
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
}
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
export const PAGE_CONFIG = new InjectionToken('page.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wYWdlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQU1yRCxNQUFNLE9BQU8sVUFBVTs7OztJQU90QixZQUFZLE9BQW9CO1FBSGhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd0QixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDO0NBQ0Q7OztJQWhCQSxpQ0FBa0M7O0lBQ2xDLGtDQUFtQzs7SUFDbkMsbUNBQXNDOztJQUN0QywyQkFBbUI7O0lBQ25CLDZCQUF1Qjs7O0FBY3hCLE1BQU0sT0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQWEsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5b3V0cyB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi4vcGFnZS9wYWdlJztcclxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VDb25maWcge1xyXG5cdGRlZmF1bHRQYWdlPzogVHlwZTxQYWdlQ29tcG9uZW50PjtcclxuXHRub3RGb3VuZFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xyXG5cdGRlZmF1bHRMYXlvdXQ/OiBUeXBlPExheW91dENvbXBvbmVudD47XHJcblx0cGFnZXM/OiBQYWdlcyA9IHt9O1xyXG5cdGxheW91dHM/OiBMYXlvdXRzID0ge307XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlQ29uZmlnKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZUNvbmZpZycsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0dGhpcy5sYXlvdXRzID0gb3B0aW9ucy5sYXlvdXRzIHx8IHt9O1xyXG5cdFx0XHR0aGlzLmRlZmF1bHRMYXlvdXQgPSBvcHRpb25zLmRlZmF1bHRMYXlvdXQ7XHJcblx0XHRcdHRoaXMucGFnZXMgPSBvcHRpb25zLnBhZ2VzIHx8IHt9O1xyXG5cdFx0XHR0aGlzLmRlZmF1bHRQYWdlID0gb3B0aW9ucy5kZWZhdWx0UGFnZTtcclxuXHRcdFx0dGhpcy5ub3RGb3VuZFBhZ2UgPSBvcHRpb25zLm5vdEZvdW5kUGFnZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQQUdFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWdlQ29uZmlnPigncGFnZS5jb25maWcnKTtcclxuIl19