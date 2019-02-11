/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @enum {number} */
var AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
export { Language };
if (false) {
    /** @type {?} */
    Language.prototype.id;
    /** @type {?} */
    Language.prototype.name;
    /** @type {?} */
    Language.prototype.lang;
}
var CoreTransitionConfig = /** @class */ (function () {
    function CoreTransitionConfig(options) {
        console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return CoreTransitionConfig;
}());
export { CoreTransitionConfig };
if (false) {
    /** @type {?} */
    CoreTransitionConfig.prototype.appId;
}
var CorePrebootConfig = /** @class */ (function () {
    function CorePrebootConfig(options) {
        console.log('CorePrebootConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
    return CorePrebootConfig;
}());
export { CorePrebootConfig };
if (false) {
    /** @type {?} */
    CorePrebootConfig.prototype.appRoot;
}
var CoreConfig = /** @class */ (function () {
    function CoreConfig(options) {
        this.assets = '';
        this.authStrategy = AuthStrategy.Cookie;
        this.defaultLanguage = 'it';
        this.defaultMarket = 'it';
        this.languages = [{ id: 1, name: 'Italiano', lang: 'it' }];
        this.origin = '';
        this.pages = {};
        this.production = false;
        this.public = '';
        this.urlStrategy = '';
        this.useHash = true;
        this.useLang = false;
        this.useMarket = false;
        console.log('CoreConfig', options);
        if (options) {
            this.pages = options.pages || {};
            this.preboot = new CorePrebootConfig(options.preboot);
            this.transition = new CoreTransitionConfig(options.transition);
            this.defaultPage = options.defaultPage;
            this.notFoundPage = options.notFoundPage;
        }
        else {
            this.preboot = new CorePrebootConfig();
            this.transition = new CoreTransitionConfig();
        }
    }
    return CoreConfig;
}());
export { CoreConfig };
if (false) {
    /** @type {?} */
    CoreConfig.prototype.assets;
    /** @type {?} */
    CoreConfig.prototype.authStrategy;
    /** @type {?} */
    CoreConfig.prototype.defaultLanguage;
    /** @type {?} */
    CoreConfig.prototype.defaultMarket;
    /** @type {?} */
    CoreConfig.prototype.defaultPage;
    /** @type {?} */
    CoreConfig.prototype.editor;
    /** @type {?} */
    CoreConfig.prototype.enableTracing;
    /** @type {?} */
    CoreConfig.prototype.languages;
    /** @type {?} */
    CoreConfig.prototype.notFoundPage;
    /** @type {?} */
    CoreConfig.prototype.origin;
    /** @type {?} */
    CoreConfig.prototype.pages;
    /** @type {?} */
    CoreConfig.prototype.preboot;
    /** @type {?} */
    CoreConfig.prototype.production;
    /** @type {?} */
    CoreConfig.prototype.public;
    /** @type {?} */
    CoreConfig.prototype.transition;
    /** @type {?} */
    CoreConfig.prototype.urlStrategy;
    /** @type {?} */
    CoreConfig.prototype.useHash;
    /** @type {?} */
    CoreConfig.prototype.useLang;
    /** @type {?} */
    CoreConfig.prototype.useMarket;
    /** @type {?} */
    CoreConfig.prototype.useServiceWorker;
}
/** @type {?} */
export var CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7O0lBS3BELFNBQVU7SUFDVixTQUFVOzs7OztBQUdYO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1osd0JBQWM7O0lBQ2Qsd0JBQWM7O0FBR2Y7SUFHQyw4QkFBWSxPQUE4QjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJBLHFDQUFlOztBQVVoQjtJQUdDLDJCQUFZLE9BQTJCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFDRix3QkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkEsb0NBQWlCOztBQVVsQjtJQXNCQyxvQkFBWSxPQUFvQjtRQXJCaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFrQixZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLGNBQVMsR0FBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVuRSxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxJQUFJLENBQUM7UUFDekIsWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBSTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN6QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDN0M7SUFDRixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7O0lBbENBLDRCQUFxQjs7SUFDckIsa0NBQWtEOztJQUNsRCxxQ0FBZ0M7O0lBQ2hDLG1DQUE4Qjs7SUFDOUIsaUNBQWtDOztJQUNsQyw0QkFBaUI7O0lBQ2pCLG1DQUF3Qjs7SUFDeEIsK0JBQW1FOztJQUNuRSxrQ0FBbUM7O0lBQ25DLDRCQUFxQjs7SUFDckIsMkJBQW1COztJQUNuQiw2QkFBNEI7O0lBQzVCLGdDQUE2Qjs7SUFDN0IsNEJBQXFCOztJQUNyQixnQ0FBa0M7O0lBQ2xDLGlDQUEwQjs7SUFDMUIsNkJBQXlCOztJQUN6Qiw2QkFBMEI7O0lBQzFCLCtCQUE0Qjs7SUFDNUIsc0NBQTJCOzs7QUFpQjVCLE1BQU0sS0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQWEsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9wYWdlcy9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gJy4uL3BhZ2VzL3BhZ2VzJztcblxuZXhwb3J0IGVudW0gQXV0aFN0cmF0ZWd5IHtcblx0QmVhcmVyID0gMCxcblx0Q29va2llID0gMSxcbn1cblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcblx0aWQ/OiBudW1iZXI7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGxhbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlVHJhbnNpdGlvbkNvbmZpZyB7XG5cdGFwcElkPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb3JlVHJhbnNpdGlvbkNvbmZpZykge1xuXHRcdGNvbnNvbGUubG9nKCdDb3JlVHJhbnNpdGlvbkNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ29yZVByZWJvb3RDb25maWcge1xuXHRhcHBSb290Pzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb3JlUHJlYm9vdENvbmZpZykge1xuXHRcdGNvbnNvbGUubG9nKCdDb3JlUHJlYm9vdENvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgQ29yZUNvbmZpZyB7XG5cdGFzc2V0cz86IHN0cmluZyA9ICcnO1xuXHRhdXRoU3RyYXRlZ3k/OiBBdXRoU3RyYXRlZ3kgPSBBdXRoU3RyYXRlZ3kuQ29va2llO1xuXHRkZWZhdWx0TGFuZ3VhZ2U/OiBzdHJpbmcgPSAnaXQnO1xuXHRkZWZhdWx0TWFya2V0Pzogc3RyaW5nID0gJ2l0Jztcblx0ZGVmYXVsdFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRlZGl0b3I/OiBib29sZWFuO1xuXHRlbmFibGVUcmFjaW5nPzogYm9vbGVhbjtcblx0bGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXSA9IFt7IGlkOiAxLCBuYW1lOiAnSXRhbGlhbm8nLCBsYW5nOiAnaXQnIH1dO1xuXHRub3RGb3VuZFBhZ2U/OiBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRvcmlnaW4/OiBzdHJpbmcgPSAnJztcblx0cGFnZXM/OiBQYWdlcyA9IHt9O1xuXHRwcmVib290PzogQ29yZVByZWJvb3RDb25maWc7XG5cdHByb2R1Y3Rpb24/OiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYz86IHN0cmluZyA9ICcnO1xuXHR0cmFuc2l0aW9uPzogQ29yZVRyYW5zaXRpb25Db25maWc7XG5cdHVybFN0cmF0ZWd5Pzogc3RyaW5nID0gJyc7XG5cdHVzZUhhc2g/OiBib29sZWFuID0gdHJ1ZTtcblx0dXNlTGFuZz86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlTWFya2V0PzogYm9vbGVhbiA9IGZhbHNlO1xuXHR1c2VTZXJ2aWNlV29ya2VyPzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZUNvbmZpZykge1xuXHRcdGNvbnNvbGUubG9nKCdDb3JlQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdHRoaXMucGFnZXMgPSBvcHRpb25zLnBhZ2VzIHx8IHt9O1xuXHRcdFx0dGhpcy5wcmVib290ID0gbmV3IENvcmVQcmVib290Q29uZmlnKG9wdGlvbnMucHJlYm9vdCk7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcob3B0aW9ucy50cmFuc2l0aW9uKTtcblx0XHRcdHRoaXMuZGVmYXVsdFBhZ2UgPSBvcHRpb25zLmRlZmF1bHRQYWdlO1xuXHRcdFx0dGhpcy5ub3RGb3VuZFBhZ2UgPSBvcHRpb25zLm5vdEZvdW5kUGFnZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcmVib290ID0gbmV3IENvcmVQcmVib290Q29uZmlnKCk7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvcmVDb25maWc+KCdjb3JlLmNvbmZpZycpO1xuIl19