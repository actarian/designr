import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
var TrustPilotConfig = /** @class */ (function () {
    function TrustPilotConfig() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
    return TrustPilotConfig;
}());
export { TrustPilotConfig };
var TrustPilotService = /** @class */ (function () {
    function TrustPilotService(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    TrustPilotService.prototype.init = function () {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    TrustPilotService.prototype.once = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                var src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(function (x) {
                    _this.Trustpilot = window['Trustpilot'];
                    return _this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    };
    TrustPilotService.ɵfac = function TrustPilotService_Factory(t) { return new (t || TrustPilotService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.OnceService)); };
    TrustPilotService.ɵprov = i0.ɵɵdefineInjectable({ token: TrustPilotService, factory: TrustPilotService.ɵfac, providedIn: 'root' });
    return TrustPilotService;
}());
export { TrustPilotService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrustPilotService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.OnceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RDtJQUFBO1FBQ0MsbUJBQWMsR0FBVywwQkFBMEIsQ0FBQztRQUNwRCxxQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztJQUNyRCxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQVNDLDJCQUM4QixVQUFrQixFQUN2QyxjQUE4QixFQUM5QixXQUF3QjtRQUZILGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWhDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFTyxnQ0FBSSxHQUFaO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOztvRUFFZ0U7SUFFaEUsZ0NBQUksR0FBSjtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTixJQUFNLEdBQUcsR0FBRyx1RUFBdUUsQ0FBQztnQkFDcEYsNkNBQTZDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbkQsR0FBRyxDQUFDLFVBQUEsQ0FBQztvQkFDSixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FDRixDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7c0ZBN0NXLGlCQUFpQixjQU9wQixXQUFXOzZEQVBSLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmpCLE1BQU07NEJBZG5CO0NBK0RDLEFBbERELElBa0RDO1NBL0NZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBUUUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90Q29uZmlnIHtcblx0YnVzaW5lc3N1bml0SWQ6IHN0cmluZyA9ICc1OGUyNTNhYjAwMDBmZjAwMDU5ZmMwZmUnO1xuXHRidXNpbmVzc3VuaXROYW1lOiBzdHJpbmcgPSAnd3d3LmV1cm9zcGluLXZpYWdnaS5pdCc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRydXN0UGlsb3RTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogVHJ1c3RQaWxvdENvbmZpZztcblx0cHJpdmF0ZSBUcnVzdHBpbG90OiBhbnk7XG5cdHByaXZhdGUgVHJ1c3RwaWxvdCQ6IE9ic2VydmFibGU8YW55PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHBsdWdpbnNTZXJ2aWNlOiBQbHVnaW5zU2VydmljZSxcblx0XHRwcml2YXRlIG9uY2VTZXJ2aWNlOiBPbmNlU2VydmljZSxcblx0KSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMgJiYgIXRoaXMucGx1Z2luc1NlcnZpY2Uub3B0aW9ucy50cnVzdFBpbG90KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RydXN0UGlsb3RTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnRydXN0UGlsb3QnKTtcblx0XHR9XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihuZXcgVHJ1c3RQaWxvdENvbmZpZygpLCB0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCk7XG5cdH1cblxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG5cdCogIGNhbGwgVHJ1c3RQaWxvdENvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxuXHQqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRpZiAodGhpcy5UcnVzdHBpbG90KSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLlRydXN0cGlsb3QpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLlRydXN0cGlsb3QkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3QkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qgc3JjID0gYGh0dHBzOi8vd2lkZ2V0LnRydXN0cGlsb3QuY29tL2Jvb3RzdHJhcC92NS90cC53aWRnZXQuYm9vdHN0cmFwLm1pbi5qc2A7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdUcnVzdFBpbG90Q29uZmlnLm9uY2UnLCBzcmMpO1xuXHRcdFx0XHR0aGlzLlRydXN0cGlsb3QkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxuXHRcdFx0XHRcdG1hcCh4ID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuVHJ1c3RwaWxvdCA9IHdpbmRvd1snVHJ1c3RwaWxvdCddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=