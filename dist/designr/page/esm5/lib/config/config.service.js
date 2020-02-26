import { Inject, Injectable } from '@angular/core';
import { PageConfig, PAGE_CONFIG } from '../config/page.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/page.config";
var ConfigService = /** @class */ (function () {
    function ConfigService(options) {
        this.options = new PageConfig(options || {});
    }
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(i0.ɵɵinject(PAGE_CONFIG)); };
    ConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    return ConfigService;
}());
export { ConfigService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PageConfig, decorators: [{
                type: Inject,
                args: [PAGE_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFaEU7SUFPQyx1QkFDc0IsT0FBbUI7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs4RUFSVyxhQUFhLGNBS2hCLFdBQVc7eURBTFIsYUFBYSxXQUFiLGFBQWEsbUJBRmIsTUFBTTt3QkFKbkI7Q0FnQkMsQUFiRCxJQWFDO1NBVlksYUFBYTtrREFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29uZmlnLCBQQUdFX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9wYWdlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xuXG5cdHB1YmxpYyBvcHRpb25zOiBQYWdlQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUEFHRV9DT05GSUcpIG9wdGlvbnM6IFBhZ2VDb25maWdcblx0KSB7XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFBhZ2VDb25maWcob3B0aW9ucyB8fCB7fSk7XG5cdH1cblxufVxuIl19