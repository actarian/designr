import { Inject, Injectable } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/page.config";
export class ConfigService {
    constructor(options) {
        this.options = new PageConfig(options || {});
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(PAGE_CONFIG)); };
ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PageConfig, decorators: [{
                type: Inject,
                args: [PAGE_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLaEUsTUFBTSxPQUFPLGFBQWE7SUFJekIsWUFDc0IsT0FBbUI7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7MEVBUlcsYUFBYSxjQUtoQixXQUFXO3FEQUxSLGFBQWEsV0FBYixhQUFhLG1CQUZiLE1BQU07a0RBRU4sYUFBYTtjQUh6QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQU1FLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbmZpZywgUEFHRV9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvcGFnZS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGFnZUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBBR0VfQ09ORklHKSBvcHRpb25zOiBQYWdlQ29uZmlnXG5cdCkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBQYWdlQ29uZmlnKG9wdGlvbnMgfHwge30pO1xuXHR9XG5cbn1cbiJdfQ==