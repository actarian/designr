/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';
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
        // console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    CoreTransitionConfig.prototype.appId;
}
export class CoreConfig {
    // ExtraOptions
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.assets = '';
        this.authStrategy = AuthStrategy.Cookie;
        this.defaultLanguage = 'it';
        this.defaultMarket = 'it';
        this.httpErrorLogStrategy = LoggerErrorStrategy.Server;
        this.languages = [{ id: 1, name: 'Italiano', lang: 'it' }];
        this.origin = '';
        this.production = false;
        this.public = '';
        this.urlStrategy = '';
        this.useLang = false;
        this.useMarket = false;
        // console.log('CoreConfig', options);
        if (options) {
            Object.assign(this, options);
            this.transition = new CoreTransitionConfig(options.transition);
        }
        else {
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
    CoreConfig.prototype.httpErrorLogStrategy;
    /** @type {?} */
    CoreConfig.prototype.languages;
    /** @type {?} */
    CoreConfig.prototype.origin;
    /** @type {?} */
    CoreConfig.prototype.production;
    /** @type {?} */
    CoreConfig.prototype.public;
    /** @type {?} */
    CoreConfig.prototype.transition;
    /** @type {?} */
    CoreConfig.prototype.urlStrategy;
    /** @type {?} */
    CoreConfig.prototype.useLang;
    /** @type {?} */
    CoreConfig.prototype.useMarket;
    /** @type {?} */
    CoreConfig.prototype.useServiceWorker;
    /** @type {?} */
    CoreConfig.prototype.routing;
}
/** @type {?} */
export const CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXZELE1BQU0sT0FBTyxRQUFRO0NBSXBCOzs7SUFIQSxzQkFBWTs7SUFDWix3QkFBYzs7SUFDZCx3QkFBYzs7QUFHZixNQUFNLE9BQU8sb0JBQW9COzs7O0lBR2hDLFlBQVksT0FBOEI7UUFDekMsZ0RBQWdEO1FBQ2hELElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7OztJQVJBLHFDQUFjOztBQVVmLE1BQU0sT0FBTyxVQUFVOzs7OztJQWlCdEIsWUFBWSxPQUFvQjtRQWhCaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFrQixZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHlCQUFvQixHQUF5QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7UUFDeEUsY0FBUyxHQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUszQixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUM3QztJQUNGLENBQUM7Q0FDRDs7O0lBekJBLDRCQUFxQjs7SUFDckIsa0NBQWtEOztJQUNsRCxxQ0FBZ0M7O0lBQ2hDLG1DQUE4Qjs7SUFDOUIsMENBQXdFOztJQUN4RSwrQkFBbUU7O0lBQ25FLDRCQUFxQjs7SUFDckIsZ0NBQTZCOztJQUM3Qiw0QkFBcUI7O0lBQ3JCLGdDQUFrQzs7SUFDbEMsaUNBQTBCOztJQUMxQiw2QkFBMEI7O0lBQzFCLCtCQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUMzQiw2QkFBYzs7O0FBYWYsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFN0cmF0ZWd5IH0gZnJvbSAnLi4vYXV0aC9hdXRoJztcbmltcG9ydCB7IExvZ2dlckVycm9yU3RyYXRlZ3kgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcblx0aWQ/OiBudW1iZXI7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGxhbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlVHJhbnNpdGlvbkNvbmZpZyB7XG5cdGFwcElkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVUcmFuc2l0aW9uQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVUcmFuc2l0aW9uQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlnIHtcblx0YXNzZXRzPzogc3RyaW5nID0gJyc7XG5cdGF1dGhTdHJhdGVneT86IEF1dGhTdHJhdGVneSA9IEF1dGhTdHJhdGVneS5Db29raWU7XG5cdGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZyA9ICdpdCc7XG5cdGRlZmF1bHRNYXJrZXQ/OiBzdHJpbmcgPSAnaXQnO1xuXHRodHRwRXJyb3JMb2dTdHJhdGVneT86IExvZ2dlckVycm9yU3RyYXRlZ3kgPSBMb2dnZXJFcnJvclN0cmF0ZWd5LlNlcnZlcjtcblx0bGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXSA9IFt7IGlkOiAxLCBuYW1lOiAnSXRhbGlhbm8nLCBsYW5nOiAnaXQnIH1dO1xuXHRvcmlnaW4/OiBzdHJpbmcgPSAnJztcblx0cHJvZHVjdGlvbj86IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljPzogc3RyaW5nID0gJyc7XG5cdHRyYW5zaXRpb24/OiBDb3JlVHJhbnNpdGlvbkNvbmZpZztcblx0dXJsU3RyYXRlZ3k/OiBzdHJpbmcgPSAnJztcblx0dXNlTGFuZz86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlTWFya2V0PzogYm9vbGVhbiA9IGZhbHNlO1xuXHR1c2VTZXJ2aWNlV29ya2VyPzogYm9vbGVhbjtcblx0cm91dGluZz86IGFueTsgLy8gRXh0cmFPcHRpb25zXG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVDb25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29yZUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IENvcmVUcmFuc2l0aW9uQ29uZmlnKG9wdGlvbnMudHJhbnNpdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZygpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgQ09SRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29yZUNvbmZpZz4oJ2NvcmUuY29uZmlnJyk7XG4iXX0=