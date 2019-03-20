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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wYWdlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQU1yRCxNQUFNLE9BQU8sVUFBVTs7OztJQU90QixZQUFZLE9BQW9CO1FBSGhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUd0QixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDO0NBQ0Q7OztJQWhCQSxpQ0FBa0M7O0lBQ2xDLGtDQUFtQzs7SUFDbkMsbUNBQXNDOztJQUN0QywyQkFBbUI7O0lBQ25CLDZCQUF1Qjs7O0FBY3hCLE1BQU0sT0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQWEsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dHMgfSBmcm9tICcuLi9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCB7IExheW91dENvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VzIH0gZnJvbSAnLi4vcGFnZS9wYWdlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlL3BhZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFBhZ2VDb25maWcge1xuXHRkZWZhdWx0UGFnZT86IFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdG5vdEZvdW5kUGFnZT86IFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdGRlZmF1bHRMYXlvdXQ/OiBUeXBlPExheW91dENvbXBvbmVudD47XG5cdHBhZ2VzPzogUGFnZXMgPSB7fTtcblx0bGF5b3V0cz86IExheW91dHMgPSB7fTtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZUNvbmZpZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdHRoaXMubGF5b3V0cyA9IG9wdGlvbnMubGF5b3V0cyB8fCB7fTtcblx0XHRcdHRoaXMuZGVmYXVsdExheW91dCA9IG9wdGlvbnMuZGVmYXVsdExheW91dDtcblx0XHRcdHRoaXMucGFnZXMgPSBvcHRpb25zLnBhZ2VzIHx8IHt9O1xuXHRcdFx0dGhpcy5kZWZhdWx0UGFnZSA9IG9wdGlvbnMuZGVmYXVsdFBhZ2U7XG5cdFx0XHR0aGlzLm5vdEZvdW5kUGFnZSA9IG9wdGlvbnMubm90Rm91bmRQYWdlO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgUEFHRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFnZUNvbmZpZz4oJ3BhZ2UuY29uZmlnJyk7XG4iXX0=