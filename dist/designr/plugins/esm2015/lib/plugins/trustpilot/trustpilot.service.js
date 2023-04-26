/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.Trustpilot$ = this.onceService.script(src).pipe(map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    this.Trustpilot = window['Trustpilot'];
                    return this.Trustpilot;
                })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RwaWxvdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNDLG1CQUFjLEdBQVcsMEJBQTBCLENBQUM7UUFDcEQscUJBQWdCLEdBQVcsd0JBQXdCLENBQUM7SUFDckQsQ0FBQztDQUFBOzs7SUFGQSwwQ0FBb0Q7O0lBQ3BELDRDQUFvRDs7QUFNckQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBTTdCLFlBQzhCLFVBQWtCLEVBQ3ZDLGNBQThCLEVBQzlCLFdBQXdCO1FBRkgsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFaEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztTQUNuRztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7OztJQU1ELElBQUk7UUFDSCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtpQkFBTTs7c0JBQ0EsR0FBRyxHQUFHLHVFQUF1RTtnQkFDbkYsNkNBQTZDO2dCQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDbkQsR0FBRzs7OztnQkFBQyxDQUFDLENBQUMsRUFBRTtvQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN4QixDQUFDLEVBQUMsQ0FDRixDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7OztZQWhERCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBUUUsTUFBTSxTQUFDLFdBQVc7WUFqQlosY0FBYztZQUhkLFdBQVc7Ozs7O0lBZW5CLG9DQUFpQzs7Ozs7SUFDakMsdUNBQXdCOzs7OztJQUN4Qix3Q0FBcUM7Ozs7O0lBR3BDLHVDQUErQzs7Ozs7SUFDL0MsMkNBQXNDOzs7OztJQUN0Qyx3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90Q29uZmlnIHtcclxuXHRidXNpbmVzc3VuaXRJZDogc3RyaW5nID0gJzU4ZTI1M2FiMDAwMGZmMDAwNTlmYzBmZSc7XHJcblx0YnVzaW5lc3N1bml0TmFtZTogc3RyaW5nID0gJ3d3dy5ldXJvc3Bpbi12aWFnZ2kuaXQnO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcnVzdFBpbG90U2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBvcHRpb25zOiBUcnVzdFBpbG90Q29uZmlnO1xyXG5cdHByaXZhdGUgVHJ1c3RwaWxvdDogYW55O1xyXG5cdHByaXZhdGUgVHJ1c3RwaWxvdCQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgcGx1Z2luc1NlcnZpY2U6IFBsdWdpbnNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBvbmNlU2VydmljZTogT25jZVNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zICYmICF0aGlzLnBsdWdpbnNTZXJ2aWNlLm9wdGlvbnMudHJ1c3RQaWxvdCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RydXN0UGlsb3RTZXJ2aWNlLmVycm9yIG1pc3NpbmcgY29uZmlnIG9iamVjdCBpbiBlbnZpcm9ubWVudC5wbHVnaW5zLnRydXN0UGlsb3QnKTtcclxuXHRcdH1cclxuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24obmV3IFRydXN0UGlsb3RDb25maWcoKSwgdGhpcy5wbHVnaW5zU2VydmljZS5vcHRpb25zLnRydXN0UGlsb3QpO1xyXG5cdH1cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCogIGNhbGwgVHJ1c3RQaWxvdENvbmZpZy5vbmNlKCkgb24gYXBwIGNvbXBvbmVudCBPbkluaXQgKlxyXG5cdCogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cclxuXHJcblx0b25jZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0aWYgKHRoaXMuVHJ1c3RwaWxvdCkge1xyXG5cdFx0XHRcdHJldHVybiBvZih0aGlzLlRydXN0cGlsb3QpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuVHJ1c3RwaWxvdCQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBzcmMgPSBgaHR0cHM6Ly93aWRnZXQudHJ1c3RwaWxvdC5jb20vYm9vdHN0cmFwL3Y1L3RwLndpZGdldC5ib290c3RyYXAubWluLmpzYDtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnVHJ1c3RQaWxvdENvbmZpZy5vbmNlJywgc3JjKTtcclxuXHRcdFx0XHR0aGlzLlRydXN0cGlsb3QkID0gdGhpcy5vbmNlU2VydmljZS5zY3JpcHQoc3JjKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHggPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLlRydXN0cGlsb3QgPSB3aW5kb3dbJ1RydXN0cGlsb3QnXTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuVHJ1c3RwaWxvdDtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5UcnVzdHBpbG90JDtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19