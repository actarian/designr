/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export class PageConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.pages = {};
        console.log('PageConfig', options);
        if (options) {
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
    PageConfig.prototype.pages;
}
/** @type {?} */
export const PAGE_CONFIG = new InjectionToken('page.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9wYWdlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUlyRCxNQUFNLE9BQU8sVUFBVTs7OztJQUt0QixZQUFZLE9BQW9CO1FBRmhDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFHbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDekM7SUFDRixDQUFDO0NBQ0Q7OztJQVpBLGlDQUFrQzs7SUFDbEMsa0NBQW1DOztJQUNuQywyQkFBbUI7OztBQVlwQixNQUFNLE9BQU8sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFhLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuLi9wYWdlcy9wYWdlcyc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlQ29uZmlnIHtcblx0ZGVmYXVsdFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRub3RGb3VuZFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRwYWdlcz86IFBhZ2VzID0ge307XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnUGFnZUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHR0aGlzLnBhZ2VzID0gb3B0aW9ucy5wYWdlcyB8fCB7fTtcblx0XHRcdHRoaXMuZGVmYXVsdFBhZ2UgPSBvcHRpb25zLmRlZmF1bHRQYWdlO1xuXHRcdFx0dGhpcy5ub3RGb3VuZFBhZ2UgPSBvcHRpb25zLm5vdEZvdW5kUGFnZTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IFBBR0VfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFBhZ2VDb25maWc+KCdwYWdlLmNvbmZpZycpO1xuIl19