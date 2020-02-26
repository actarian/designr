import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OnceService } from '@designr/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
import * as i1 from "../../config/plugins.service";
import * as i2 from "@designr/core";
export class TrustPilotConfig {
    constructor() {
        this.businessunitId = '58e253ab0000ff00059fc0fe';
        this.businessunitName = 'www.eurospin-viaggi.it';
    }
}
export class TrustPilotService {
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    *  call TrustPilotConfig.once() on app component OnInit *
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                const src = `https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`;
                // console.log('TrustPilotConfig.once', src);
                this.Trustpilot$ = this.onceService.script(src).pipe(map(x => {
                    this.Trustpilot = window['Trustpilot'];
                    return this.Trustpilot;
                }));
                return this.Trustpilot$;
            }
        }
        else {
            return of(null);
        }
    }
}
TrustPilotService.ɵfac = function TrustPilotService_Factory(t) { return new (t || TrustPilotService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i1.PluginsService), i0.ɵɵinject(i2.OnceService)); };
TrustPilotService.ɵprov = i0.ɵɵdefineInjectable({ token: TrustPilotService, factory: TrustPilotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TrustPilotService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PluginsService }, { type: i2.OnceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBQ0MsbUJBQWMsR0FBVywwQkFBMEIsQ0FBQztRQUNwRCxxQkFBZ0IsR0FBVyx3QkFBd0IsQ0FBQztJQUNyRCxDQUFDO0NBQUE7QUFLRCxNQUFNLE9BQU8saUJBQWlCO0lBTTdCLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLFdBQXdCO1FBRkgsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVPLElBQUk7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO1NBQ25HO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQ7O29FQUVnRTtJQUVoRSxJQUFJO1FBQ0gsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDM0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7aUJBQU07Z0JBQ04sTUFBTSxHQUFHLEdBQUcsdUVBQXVFLENBQUM7Z0JBQ3BGLDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FDRixDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7O2tGQTdDVyxpQkFBaUIsY0FPcEIsV0FBVzt5REFQUixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZqQixNQUFNO2tEQUVOLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7O3NCQVFFLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdENvbmZpZyB7XG5cdGJ1c2luZXNzdW5pdElkOiBzdHJpbmcgPSAnNThlMjUzYWIwMDAwZmYwMDA1OWZjMGZlJztcblx0YnVzaW5lc3N1bml0TmFtZTogc3RyaW5nID0gJ3d3dy5ldXJvc3Bpbi12aWFnZ2kuaXQnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90U2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdHByaXZhdGUgVHJ1c3RwaWxvdDogYW55O1xuXHRwcml2YXRlIFRydXN0cGlsb3QkOiBPYnNlcnZhYmxlPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFRydXN0UGlsb3RDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIFRydXN0UGlsb3RDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuVHJ1c3RwaWxvdCkge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5UcnVzdHBpbG90KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5UcnVzdHBpbG90JCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3dpZGdldC50cnVzdHBpbG90LmNvbS9ib290c3RyYXAvdjUvdHAud2lkZ2V0LmJvb3RzdHJhcC5taW4uanNgO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdENvbmZpZy5vbmNlJywgc3JjKTtcblx0XHRcdFx0dGhpcy5UcnVzdHBpbG90JCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcblx0XHRcdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLlRydXN0cGlsb3QgPSB3aW5kb3dbJ1RydXN0cGlsb3QnXTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3Q7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxufVxuIl19