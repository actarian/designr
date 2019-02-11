/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitId;
    /** @type {?} */
    TrustPilotConfig.prototype.businessunitName;
}
export class TrustPilotService {
    /**
     * @param {?} platformId
     * @param {?} pluginsService
     * @param {?} onceService
     */
    constructor(platformId, pluginsService, onceService) {
        this.platformId = platformId;
        this.pluginsService = pluginsService;
        this.onceService = onceService;
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.pluginsService.options && !this.pluginsService.options.trustPilot) {
            throw new Error('TrustPilotService.error missing config object in environment.plugins.trustPilot');
        }
        this.options = Object.assign(new TrustPilotConfig(), this.pluginsService.options.trustPilot);
    }
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
        *  call TrustPilotConfig.once() on app component OnInit *
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /**
     * @return {?}
     */
    once() {
        if (isPlatformBrowser(this.platformId)) {
            if (this.Trustpilot) {
                return of(this.Trustpilot);
            }
            else if (this.Trustpilot$) {
                return this.Trustpilot$;
            }
            else {
                /** @type {?} */
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
TrustPilotService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TrustPilotService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PluginsService },
    { type: OnceService }
];
/** @nocollapse */ TrustPilotService.ngInjectableDef = i0.defineInjectable({ factory: function TrustPilotService_Factory() { return new TrustPilotService(i0.inject(i0.PLATFORM_ID), i0.inject(i1.PluginsService), i0.inject(i2.OnceService)); }, token: TrustPilotService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TrustPilotService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.Trustpilot$;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.pluginsService;
    /**
     * @type {?}
     * @private
     */
    TrustPilotService.prototype.onceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNDLG1CQUFjLEdBQVcsMEJBQTBCLENBQUM7UUFDcEQscUJBQWdCLEdBQVcsd0JBQXdCLENBQUM7SUFDckQsQ0FBQztDQUFBOzs7SUFGQSwwQ0FBb0Q7O0lBQ3BELDRDQUFvRDs7QUFNckQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBTTdCLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLFdBQXdCO1FBRkgsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7OztJQU1ELElBQUk7UUFDSCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtpQkFBTTs7c0JBQ0EsR0FBRyxHQUFHLHVFQUF1RTtnQkFDbkYsNkNBQTZDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbkQsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUNGLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3hCO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7O1lBaERELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozt5Q0FRRSxNQUFNLFNBQUMsV0FBVztZQWpCWixjQUFjO1lBSGQsV0FBVzs7Ozs7SUFlbkIsb0NBQWlDOzs7OztJQUNqQyx1Q0FBd0I7Ozs7O0lBQ3hCLHdDQUFxQzs7Ozs7SUFHcEMsdUNBQStDOzs7OztJQUMvQywyQ0FBc0M7Ozs7O0lBQ3RDLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJ1c3RQaWxvdENvbmZpZyB7XG5cdGJ1c2luZXNzdW5pdElkOiBzdHJpbmcgPSAnNThlMjUzYWIwMDAwZmYwMDA1OWZjMGZlJztcblx0YnVzaW5lc3N1bml0TmFtZTogc3RyaW5nID0gJ3d3dy5ldXJvc3Bpbi12aWFnZ2kuaXQnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90U2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFRydXN0UGlsb3RDb25maWc7XG5cdHByaXZhdGUgVHJ1c3RwaWxvdDogYW55O1xuXHRwcml2YXRlIFRydXN0cGlsb3QkOiBPYnNlcnZhYmxlPGFueT47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwbHVnaW5zU2VydmljZTogUGx1Z2luc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXG5cdCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnVzdFBpbG90U2VydmljZS5lcnJvciBtaXNzaW5nIGNvbmZpZyBvYmplY3QgaW4gZW52aXJvbm1lbnQucGx1Z2lucy50cnVzdFBpbG90Jyk7XG5cdFx0fVxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFRydXN0UGlsb3RDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpO1xuXHR9XG5cblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuXHQqICBjYWxsIFRydXN0UGlsb3RDb25maWcub25jZSgpIG9uIGFwcCBjb21wb25lbnQgT25Jbml0ICpcblx0KiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cdG9uY2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0aWYgKHRoaXMuVHJ1c3RwaWxvdCkge1xuXHRcdFx0XHRyZXR1cm4gb2YodGhpcy5UcnVzdHBpbG90KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5UcnVzdHBpbG90JCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHNyYyA9IGBodHRwczovL3dpZGdldC50cnVzdHBpbG90LmNvbS9ib290c3RyYXAvdjUvdHAud2lkZ2V0LmJvb3RzdHJhcC5taW4uanNgO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdENvbmZpZy5vbmNlJywgc3JjKTtcblx0XHRcdFx0dGhpcy5UcnVzdHBpbG90JCA9IHRoaXMub25jZVNlcnZpY2Uuc2NyaXB0KHNyYykucGlwZShcblx0XHRcdFx0XHRtYXAoeCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLlRydXN0cGlsb3QgPSB3aW5kb3dbJ1RydXN0cGlsb3QnXTtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLlRydXN0cGlsb3Q7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdCQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxufVxuIl19