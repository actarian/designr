/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';
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
        // console.log('CoreTransitionConfig', options);
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
var CoreConfig = /** @class */ (function () {
    function CoreConfig(options) {
        this.assets = '';
        this.authStrategy = AuthStrategy.Cookie;
        this.defaultLanguage = 'it';
        this.defaultMarket = 'it';
        this.loggerErrorStrategy = LoggerErrorStrategy.Server;
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
    CoreConfig.prototype.loggerErrorStrategy;
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
export var CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFJQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsc0JBQVk7O0lBQ1osd0JBQWM7O0lBQ2Qsd0JBQWM7O0FBR2Y7SUFHQyw4QkFBWSxPQUE4QjtRQUN6QyxnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFDRiwyQkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUkEscUNBQWM7O0FBVWY7SUFpQkMsb0JBQVksT0FBb0I7UUFoQmhDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBa0IsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5Qix3QkFBbUIsR0FBeUIsbUJBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ3ZFLGNBQVMsR0FBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUMxQixZQUFPLEdBQWEsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFLM0Isc0NBQXNDO1FBQ3RDLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDN0M7SUFDRixDQUFDO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7O0lBekJBLDRCQUFxQjs7SUFDckIsa0NBQWtEOztJQUNsRCxxQ0FBZ0M7O0lBQ2hDLG1DQUE4Qjs7SUFDOUIseUNBQXVFOztJQUN2RSwrQkFBbUU7O0lBQ25FLDRCQUFxQjs7SUFDckIsZ0NBQTZCOztJQUM3Qiw0QkFBcUI7O0lBQ3JCLGdDQUFrQzs7SUFDbEMsaUNBQTBCOztJQUMxQiw2QkFBMEI7O0lBQzFCLCtCQUE0Qjs7SUFDNUIsc0NBQTJCOztJQUMzQiw2QkFBYzs7O0FBYWYsTUFBTSxLQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdXRoU3RyYXRlZ3kgfSBmcm9tICcuLi9hdXRoL2F1dGgnO1xyXG5pbXBvcnQgeyBMb2dnZXJFcnJvclN0cmF0ZWd5IH0gZnJvbSAnLi4vbG9nZ2VyL2xvZ2dlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG5cdGlkPzogbnVtYmVyO1xyXG5cdG5hbWU/OiBzdHJpbmc7XHJcblx0bGFuZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcmVUcmFuc2l0aW9uQ29uZmlnIHtcclxuXHRhcHBJZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVRyYW5zaXRpb25Db25maWcpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb3JlVHJhbnNpdGlvbkNvbmZpZycsIG9wdGlvbnMpO1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlnIHtcclxuXHRhc3NldHM/OiBzdHJpbmcgPSAnJztcclxuXHRhdXRoU3RyYXRlZ3k/OiBBdXRoU3RyYXRlZ3kgPSBBdXRoU3RyYXRlZ3kuQ29va2llO1xyXG5cdGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZyA9ICdpdCc7XHJcblx0ZGVmYXVsdE1hcmtldD86IHN0cmluZyA9ICdpdCc7XHJcblx0bG9nZ2VyRXJyb3JTdHJhdGVneT86IExvZ2dlckVycm9yU3RyYXRlZ3kgPSBMb2dnZXJFcnJvclN0cmF0ZWd5LlNlcnZlcjtcclxuXHRsYW5ndWFnZXM/OiBMYW5ndWFnZVtdID0gW3sgaWQ6IDEsIG5hbWU6ICdJdGFsaWFubycsIGxhbmc6ICdpdCcgfV07XHJcblx0b3JpZ2luPzogc3RyaW5nID0gJyc7XHJcblx0cHJvZHVjdGlvbj86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWM/OiBzdHJpbmcgPSAnJztcclxuXHR0cmFuc2l0aW9uPzogQ29yZVRyYW5zaXRpb25Db25maWc7XHJcblx0dXJsU3RyYXRlZ3k/OiBzdHJpbmcgPSAnJztcclxuXHR1c2VMYW5nPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHVzZU1hcmtldD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHR1c2VTZXJ2aWNlV29ya2VyPzogYm9vbGVhbjtcclxuXHRyb3V0aW5nPzogYW55OyAvLyBFeHRyYU9wdGlvbnNcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVDb25maWcpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDb3JlQ29uZmlnJywgb3B0aW9ucyk7XHJcblx0XHRpZiAob3B0aW9ucykge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xyXG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcob3B0aW9ucy50cmFuc2l0aW9uKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZygpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvcmVDb25maWc+KCdjb3JlLmNvbmZpZycpO1xyXG4iXX0=