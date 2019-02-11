/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/** @enum {number} */
const AuthStrategy = {
    Bearer: 0,
    Cookie: 1,
};
export { AuthStrategy };
AuthStrategy[AuthStrategy.Bearer] = 'Bearer';
AuthStrategy[AuthStrategy.Cookie] = 'Cookie';
export class Language {
}
if (false) {
    /** @type {?} */
    Language.prototype.id;
    /** @type {?} */
    Language.prototype.name;
    /** @type {?} */
    Language.prototype.lang;
}
export class CoreTransitionConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    CoreTransitionConfig.prototype.appId;
}
export class CorePrebootConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
        console.log('CorePrebootConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    CorePrebootConfig.prototype.appRoot;
}
export class CoreConfig {
    /**
     * @param {?=} options
     */
    constructor(options) {
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
}
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
export const CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBUSxNQUFNLGVBQWUsQ0FBQzs7O0lBS3BELFNBQVU7SUFDVixTQUFVOzs7OztBQUdYLE1BQU0sT0FBTyxRQUFRO0NBSXBCOzs7SUFIQSxzQkFBWTs7SUFDWix3QkFBYzs7SUFDZCx3QkFBYzs7QUFHZixNQUFNLE9BQU8sb0JBQW9COzs7O0lBR2hDLFlBQVksT0FBOEI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEOzs7SUFSQSxxQ0FBZTs7QUFVaEIsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUc3QixZQUFZLE9BQTJCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBUkEsb0NBQWlCOztBQVVsQixNQUFNLE9BQU8sVUFBVTs7OztJQXNCdEIsWUFBWSxPQUFvQjtRQXJCaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFrQixZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSTlCLGNBQVMsR0FBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVuRSxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxJQUFJLENBQUM7UUFDekIsWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBSTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUN6QzthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDN0M7SUFDRixDQUFDO0NBQ0Q7OztJQWxDQSw0QkFBcUI7O0lBQ3JCLGtDQUFrRDs7SUFDbEQscUNBQWdDOztJQUNoQyxtQ0FBOEI7O0lBQzlCLGlDQUFrQzs7SUFDbEMsNEJBQWlCOztJQUNqQixtQ0FBd0I7O0lBQ3hCLCtCQUFtRTs7SUFDbkUsa0NBQW1DOztJQUNuQyw0QkFBcUI7O0lBQ3JCLDJCQUFtQjs7SUFDbkIsNkJBQTRCOztJQUM1QixnQ0FBNkI7O0lBQzdCLDRCQUFxQjs7SUFDckIsZ0NBQWtDOztJQUNsQyxpQ0FBMEI7O0lBQzFCLDZCQUF5Qjs7SUFDekIsNkJBQTBCOztJQUMxQiwrQkFBNEI7O0lBQzVCLHNDQUEyQjs7O0FBaUI1QixNQUFNLE9BQU8sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFhLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXMgfSBmcm9tICcuLi9wYWdlcy9wYWdlcyc7XG5cbmV4cG9ydCBlbnVtIEF1dGhTdHJhdGVneSB7XG5cdEJlYXJlciA9IDAsXG5cdENvb2tpZSA9IDEsXG59XG5cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XG5cdGlkPzogbnVtYmVyO1xuXHRuYW1lPzogc3RyaW5nO1xuXHRsYW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29yZVRyYW5zaXRpb25Db25maWcge1xuXHRhcHBJZD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVRyYW5zaXRpb25Db25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZVRyYW5zaXRpb25Db25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVQcmVib290Q29uZmlnIHtcblx0YXBwUm9vdD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVByZWJvb3RDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZVByZWJvb3RDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVDb25maWcge1xuXHRhc3NldHM/OiBzdHJpbmcgPSAnJztcblx0YXV0aFN0cmF0ZWd5PzogQXV0aFN0cmF0ZWd5ID0gQXV0aFN0cmF0ZWd5LkNvb2tpZTtcblx0ZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nID0gJ2l0Jztcblx0ZGVmYXVsdE1hcmtldD86IHN0cmluZyA9ICdpdCc7XG5cdGRlZmF1bHRQYWdlPzogVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0ZWRpdG9yPzogYm9vbGVhbjtcblx0ZW5hYmxlVHJhY2luZz86IGJvb2xlYW47XG5cdGxhbmd1YWdlcz86IExhbmd1YWdlW10gPSBbeyBpZDogMSwgbmFtZTogJ0l0YWxpYW5vJywgbGFuZzogJ2l0JyB9XTtcblx0bm90Rm91bmRQYWdlPzogVHlwZTxQYWdlQ29tcG9uZW50Pjtcblx0b3JpZ2luPzogc3RyaW5nID0gJyc7XG5cdHBhZ2VzPzogUGFnZXMgPSB7fTtcblx0cHJlYm9vdD86IENvcmVQcmVib290Q29uZmlnO1xuXHRwcm9kdWN0aW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM/OiBzdHJpbmcgPSAnJztcblx0dHJhbnNpdGlvbj86IENvcmVUcmFuc2l0aW9uQ29uZmlnO1xuXHR1cmxTdHJhdGVneT86IHN0cmluZyA9ICcnO1xuXHR1c2VIYXNoPzogYm9vbGVhbiA9IHRydWU7XG5cdHVzZUxhbmc/OiBib29sZWFuID0gZmFsc2U7XG5cdHVzZU1hcmtldD86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlU2VydmljZVdvcmtlcj86IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHR0aGlzLnBhZ2VzID0gb3B0aW9ucy5wYWdlcyB8fCB7fTtcblx0XHRcdHRoaXMucHJlYm9vdCA9IG5ldyBDb3JlUHJlYm9vdENvbmZpZyhvcHRpb25zLnByZWJvb3QpO1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IENvcmVUcmFuc2l0aW9uQ29uZmlnKG9wdGlvbnMudHJhbnNpdGlvbik7XG5cdFx0XHR0aGlzLmRlZmF1bHRQYWdlID0gb3B0aW9ucy5kZWZhdWx0UGFnZTtcblx0XHRcdHRoaXMubm90Rm91bmRQYWdlID0gb3B0aW9ucy5ub3RGb3VuZFBhZ2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJlYm9vdCA9IG5ldyBDb3JlUHJlYm9vdENvbmZpZygpO1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IENvcmVUcmFuc2l0aW9uQ29uZmlnKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBDT1JFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb3JlQ29uZmlnPignY29yZS5jb25maWcnKTtcbiJdfQ==