/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsTUFBTSxPQUFPLFFBQVE7Q0FJcEI7OztJQUhBLHNCQUFZOztJQUNaLHdCQUFjOztJQUNkLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHaEMsWUFBWSxPQUE4QjtRQUN6QyxnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBUkEscUNBQWM7O0FBVWYsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBZ0J0QixZQUFZLE9BQW9CO1FBZmhDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBa0IsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixjQUFTLEdBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFckIsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBSzNCLHNDQUFzQztRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQzdDO0lBQ0YsQ0FBQztDQUNEOzs7SUF4QkEsNEJBQXFCOztJQUNyQixrQ0FBa0Q7O0lBQ2xELHFDQUFnQzs7SUFDaEMsbUNBQThCOztJQUM5QiwrQkFBbUU7O0lBQ25FLDRCQUFxQjs7SUFDckIsZ0NBQTZCOztJQUM3Qiw0QkFBcUI7O0lBQ3JCLGdDQUFrQzs7SUFDbEMsaUNBQTBCOztJQUMxQiw2QkFBMEI7O0lBQzFCLCtCQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUMzQiw2QkFBYzs7O0FBYWYsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFN0cmF0ZWd5IH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xuXHRpZD86IG51bWJlcjtcblx0bmFtZT86IHN0cmluZztcblx0bGFuZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvcmVUcmFuc2l0aW9uQ29uZmlnIHtcblx0YXBwSWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVRyYW5zaXRpb25Db25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29yZVRyYW5zaXRpb25Db25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVDb25maWcge1xuXHRhc3NldHM/OiBzdHJpbmcgPSAnJztcblx0YXV0aFN0cmF0ZWd5PzogQXV0aFN0cmF0ZWd5ID0gQXV0aFN0cmF0ZWd5LkNvb2tpZTtcblx0ZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nID0gJ2l0Jztcblx0ZGVmYXVsdE1hcmtldD86IHN0cmluZyA9ICdpdCc7XG5cdGxhbmd1YWdlcz86IExhbmd1YWdlW10gPSBbeyBpZDogMSwgbmFtZTogJ0l0YWxpYW5vJywgbGFuZzogJ2l0JyB9XTtcblx0b3JpZ2luPzogc3RyaW5nID0gJyc7XG5cdHByb2R1Y3Rpb24/OiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYz86IHN0cmluZyA9ICcnO1xuXHR0cmFuc2l0aW9uPzogQ29yZVRyYW5zaXRpb25Db25maWc7XG5cdHVybFN0cmF0ZWd5Pzogc3RyaW5nID0gJyc7XG5cdHVzZUxhbmc/OiBib29sZWFuID0gZmFsc2U7XG5cdHVzZU1hcmtldD86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlU2VydmljZVdvcmtlcj86IGJvb2xlYW47XG5cdHJvdXRpbmc/OiBhbnk7IC8vIEV4dHJhT3B0aW9uc1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb3JlQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZyhvcHRpb25zLnRyYW5zaXRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvcmVDb25maWc+KCdjb3JlLmNvbmZpZycpO1xuIl19