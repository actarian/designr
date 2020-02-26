import { InjectionToken } from '@angular/core';
import { AuthStrategy } from '../auth/auth';
import { LoggerErrorStrategy } from '../logger/logger';
export class Language {
}
export class CoreTransitionConfig {
    constructor(options) {
        // console.log('CoreTransitionConfig', options);
        if (options) {
            Object.assign(this, options);
        }
    }
}
export class CoreConfig {
    constructor(options) {
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
}
export const CORE_CONFIG = new InjectionToken('core.config');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdkQsTUFBTSxPQUFPLFFBQVE7Q0FJcEI7QUFFRCxNQUFNLE9BQU8sb0JBQW9CO0lBR2hDLFlBQVksT0FBOEI7UUFDekMsZ0RBQWdEO1FBQ2hELElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0NBQ0Q7QUFFRCxNQUFNLE9BQU8sVUFBVTtJQWlCdEIsWUFBWSxPQUFvQjtRQWhCaEMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFrQixZQUFZLENBQUMsTUFBTSxDQUFDO1FBQ2xELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLHdCQUFtQixHQUF5QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7UUFDdkUsY0FBUyxHQUFnQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQVksRUFBRSxDQUFDO1FBQzFCLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUszQixzQ0FBc0M7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztTQUM3QztJQUNGLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBYSxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU3RyYXRlZ3kgfSBmcm9tICcuLi9hdXRoL2F1dGgnO1xuaW1wb3J0IHsgTG9nZ2VyRXJyb3JTdHJhdGVneSB9IGZyb20gJy4uL2xvZ2dlci9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xuXHRpZD86IG51bWJlcjtcblx0bmFtZT86IHN0cmluZztcblx0bGFuZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvcmVUcmFuc2l0aW9uQ29uZmlnIHtcblx0YXBwSWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogQ29yZVRyYW5zaXRpb25Db25maWcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnQ29yZVRyYW5zaXRpb25Db25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENvcmVDb25maWcge1xuXHRhc3NldHM/OiBzdHJpbmcgPSAnJztcblx0YXV0aFN0cmF0ZWd5PzogQXV0aFN0cmF0ZWd5ID0gQXV0aFN0cmF0ZWd5LkNvb2tpZTtcblx0ZGVmYXVsdExhbmd1YWdlPzogc3RyaW5nID0gJ2l0Jztcblx0ZGVmYXVsdE1hcmtldD86IHN0cmluZyA9ICdpdCc7XG5cdGxvZ2dlckVycm9yU3RyYXRlZ3k/OiBMb2dnZXJFcnJvclN0cmF0ZWd5ID0gTG9nZ2VyRXJyb3JTdHJhdGVneS5TZXJ2ZXI7XG5cdGxhbmd1YWdlcz86IExhbmd1YWdlW10gPSBbeyBpZDogMSwgbmFtZTogJ0l0YWxpYW5vJywgbGFuZzogJ2l0JyB9XTtcblx0b3JpZ2luPzogc3RyaW5nID0gJyc7XG5cdHByb2R1Y3Rpb24/OiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYz86IHN0cmluZyA9ICcnO1xuXHR0cmFuc2l0aW9uPzogQ29yZVRyYW5zaXRpb25Db25maWc7XG5cdHVybFN0cmF0ZWd5Pzogc3RyaW5nID0gJyc7XG5cdHVzZUxhbmc/OiBib29sZWFuID0gZmFsc2U7XG5cdHVzZU1hcmtldD86IGJvb2xlYW4gPSBmYWxzZTtcblx0dXNlU2VydmljZVdvcmtlcj86IGJvb2xlYW47XG5cdHJvdXRpbmc/OiBhbnk7IC8vIEV4dHJhT3B0aW9uc1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDb3JlQ29uZmlnKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0NvcmVDb25maWcnLCBvcHRpb25zKTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBDb3JlVHJhbnNpdGlvbkNvbmZpZyhvcHRpb25zLnRyYW5zaXRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgQ29yZVRyYW5zaXRpb25Db25maWcoKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IENPUkVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPENvcmVDb25maWc+KCdjb3JlLmNvbmZpZycpO1xuIl19