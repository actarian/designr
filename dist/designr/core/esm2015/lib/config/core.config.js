/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth.service';
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
    // ExtraOptions
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
        this.production = false;
        this.public = '';
        this.urlStrategy = '';
        this.useLang = false;
        this.useMarket = false;
        console.log('CoreConfig', options);
        if (options) {
            this.preboot = new CorePrebootConfig(options.preboot);
            this.transition = new CoreTransitionConfig(options.transition);
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
    CoreConfig.prototype.languages;
    /** @type {?} */
    CoreConfig.prototype.origin;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsTUFBTSxPQUFPLFFBQVE7Q0FJcEI7OztJQUhBLHNCQUFZOztJQUNaLHdCQUFjOztJQUNkLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHaEMsWUFBWSxPQUE4QjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7OztJQVJBLHFDQUFlOztBQVVoQixNQUFNLE9BQU8saUJBQWlCOzs7O0lBRzdCLFlBQVksT0FBMkI7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEOzs7SUFSQSxvQ0FBaUI7O0FBVWxCLE1BQU0sT0FBTyxVQUFVOzs7OztJQWlCdEIsWUFBWSxPQUFvQjtRQWhCaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFrQixZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGNBQVMsR0FBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFLM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQzdDO0lBQ0YsQ0FBQztDQUNEOzs7SUExQkEsNEJBQXFCOztJQUNyQixrQ0FBa0Q7O0lBQ2xELHFDQUFnQzs7SUFDaEMsbUNBQThCOztJQUM5QiwrQkFBbUU7O0lBQ25FLDRCQUFxQjs7SUFDckIsNkJBQTRCOztJQUM1QixnQ0FBNkI7O0lBQzdCLDRCQUFxQjs7SUFDckIsZ0NBQWtDOztJQUNsQyxpQ0FBMEI7O0lBQzFCLDZCQUEwQjs7SUFDMUIsK0JBQTRCOztJQUM1QixzQ0FBMkI7O0lBQzNCLDZCQUFjOzs7QUFjZixNQUFNLE9BQU8sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFhLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU3RyYXRlZ3kgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XG5cdGlkPzogbnVtYmVyO1xuXHRuYW1lPzogc3RyaW5nO1xuXHRsYW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29yZVRyYW5zaXRpb25Db25maWcge1xuXHRhcHBJZD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVRyYW5zaXRpb25Db25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZVRyYW5zaXRpb25Db25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVQcmVib290Q29uZmlnIHtcblx0YXBwUm9vdD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVByZWJvb3RDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZVByZWJvb3RDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVDb25maWcge1xuXHRhc3NldHM/OiBzdHJpbmcgPSAnJztcblx0YXV0aFN0cmF0ZWd5PzogQXV0aFN0cmF0ZWd5ID0gQXV0aFN0cmF0ZWd5LkNvb2tpZTtcblx0ZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nID0gJ2l0Jztcblx0ZGVmYXVsdE1hcmtldD86IHN0cmluZyA9ICdpdCc7XG5cdGxhbmd1YWdlcz86IExhbmd1YWdlW10gPSBbeyBpZDogMSwgbmFtZTogJ0l0YWxpYW5vJywgbGFuZzogJ2l0JyB9XTtcblx0b3JpZ2luPzogc3RyaW5nID0gJyc7XG5cdHByZWJvb3Q/OiBDb3JlUHJlYm9vdENvbmZpZztcblx0cHJvZHVjdGlvbj86IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljPzogc3RyaW5nID0gJyc7XG5cdHRyYW5zaXRpb24/OiBDb3JlVHJhbnNpdGlvbkNvbmZpZztcblx0dXJsU3RyYXRlZ3k/OiBzdHJpbmcgPSAnJztcblx0dXNlTGFuZz86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlTWFya2V0PzogYm9vbGVhbiA9IGZhbHNlO1xuXHR1c2VTZXJ2aWNlV29ya2VyPzogYm9vbGVhbjtcblx0cm91dGluZz86IGFueTsgLy8gRXh0cmFPcHRpb25zXG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVDb25maWcpIHtcblx0XHRjb25zb2xlLmxvZygnQ29yZUNvbmZpZycsIG9wdGlvbnMpO1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHR0aGlzLnByZWJvb3QgPSBuZXcgQ29yZVByZWJvb3RDb25maWcob3B0aW9ucy5wcmVib290KTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZyhvcHRpb25zLnRyYW5zaXRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByZWJvb3QgPSBuZXcgQ29yZVByZWJvb3RDb25maWcoKTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZygpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY29uc3QgQ09SRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29yZUNvbmZpZz4oJ2NvcmUuY29uZmlnJyk7XG4iXX0=