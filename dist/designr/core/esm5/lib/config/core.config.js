import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
export { Language };
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
export var CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7SUFHQyw4QkFBWSxPQUE4QjtRQUN6QyxnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7SUFDRiwyQkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVEO0lBaUJDLG9CQUFZLE9BQW9CO1FBaEJoQyxXQUFNLEdBQVksRUFBRSxDQUFDO1FBQ3JCLGlCQUFZLEdBQWtCLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDbEQsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsd0JBQW1CLEdBQXlCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztRQUN2RSxjQUFTLEdBQWdCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkUsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFckIsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFhLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBSzNCLHNDQUFzQztRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQzdDO0lBQ0YsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7QUFFRCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQWEsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFN0cmF0ZWd5IH0gZnJvbSAnLi4vYXV0aC9hdXRoJztcbmltcG9ydCB7IExvZ2dlckVycm9yU3RyYXRlZ3kgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIExhbmd1YWdlIHtcblx0aWQ/OiBudW1iZXI7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdGxhbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlVHJhbnNpdGlvbkNvbmZpZyB7XG5cdGFwcElkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IENvcmVUcmFuc2l0aW9uQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVUcmFuc2l0aW9uQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDb3JlQ29uZmlnIHtcblx0YXNzZXRzPzogc3RyaW5nID0gJyc7XG5cdGF1dGhTdHJhdGVneT86IEF1dGhTdHJhdGVneSA9IEF1dGhTdHJhdGVneS5Db29raWU7XG5cdGRlZmF1bHRMYW5ndWFnZT86IHN0cmluZyA9ICdpdCc7XG5cdGRlZmF1bHRNYXJrZXQ/OiBzdHJpbmcgPSAnaXQnO1xuXHRsb2dnZXJFcnJvclN0cmF0ZWd5PzogTG9nZ2VyRXJyb3JTdHJhdGVneSA9IExvZ2dlckVycm9yU3RyYXRlZ3kuU2VydmVyO1xuXHRsYW5ndWFnZXM/OiBMYW5ndWFnZVtdID0gW3sgaWQ6IDEsIG5hbWU6ICdJdGFsaWFubycsIGxhbmc6ICdpdCcgfV07XG5cdG9yaWdpbj86IHN0cmluZyA9ICcnO1xuXHRwcm9kdWN0aW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWM/OiBzdHJpbmcgPSAnJztcblx0dHJhbnNpdGlvbj86IENvcmVUcmFuc2l0aW9uQ29uZmlnO1xuXHR1cmxTdHJhdGVneT86IHN0cmluZyA9ICcnO1xuXHR1c2VMYW5nPzogYm9vbGVhbiA9IGZhbHNlO1xuXHR1c2VNYXJrZXQ/OiBib29sZWFuID0gZmFsc2U7XG5cdHVzZVNlcnZpY2VXb3JrZXI/OiBib29sZWFuO1xuXHRyb3V0aW5nPzogYW55OyAvLyBFeHRyYU9wdGlvbnNcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZUNvbmZpZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb3JlQ29uZmlnJywgb3B0aW9ucyk7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcob3B0aW9ucy50cmFuc2l0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IENvcmVUcmFuc2l0aW9uQ29uZmlnKCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBDT1JFX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb3JlQ29uZmlnPignY29yZS5jb25maWcnKTtcbiJdfQ==