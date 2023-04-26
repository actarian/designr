/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../route/route.pipe";
export class SlugPipe {
    /**
     * @param {?} slugService
     * @param {?} routePipe
     */
    constructor(slugService, routePipe) {
        this.slugService = slugService;
        this.routePipe = routePipe;
    }
    /**
     * @param {?} key
     * @param {?=} segments
     * @return {?}
     */
    transform(key, segments) {
        /** @type {?} */
        const slug = this.slugService.transform(key);
        if (slug) {
            /** @type {?} */
            let slugs = this.routePipe.transform(slug);
            if (slugs && segments) {
                slugs = slugs.concat(segments);
            }
            return slugs;
        }
        else {
            return [];
        }
    }
}
SlugPipe.decorators = [
    { type: Pipe, args: [{
                name: 'slug',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlugPipe.ctorParameters = () => [
    { type: SlugService },
    { type: RoutePipe }
];
/** @nocollapse */ SlugPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(i0.inject(i1.SlugService), i0.inject(i2.RoutePipe)); }, token: SlugPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugPipe.prototype.slugService;
    /**
     * @type {?}
     * @private
     */
    SlugPipe.prototype.routePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVN0MsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBRXBCLFlBQ1MsV0FBd0IsRUFDeEIsU0FBb0I7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUN6QixDQUFDOzs7Ozs7SUFFTCxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQW1COztjQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFOztnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBQ0YsQ0FBQzs7O1lBMUJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsV0FBVztZQURYLFNBQVM7Ozs7Ozs7O0lBY2hCLCtCQUFnQzs7Ozs7SUFDaEMsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuLi9yb3V0ZS9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1NlcnZpY2UgfSBmcm9tICcuL3NsdWcuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3NsdWcnLFxyXG5cdHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbHVnUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2x1Z1NlcnZpY2U6IFNsdWdTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVBpcGU6IFJvdXRlUGlwZSxcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHNlZ21lbnRzPzogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCBzbHVnID0gdGhpcy5zbHVnU2VydmljZS50cmFuc2Zvcm0oa2V5KTtcclxuXHRcdGlmIChzbHVnKSB7XHJcblx0XHRcdGxldCBzbHVncyA9IHRoaXMucm91dGVQaXBlLnRyYW5zZm9ybShzbHVnKTtcclxuXHRcdFx0aWYgKHNsdWdzICYmIHNlZ21lbnRzKSB7XHJcblx0XHRcdFx0c2x1Z3MgPSBzbHVncy5jb25jYXQoc2VnbWVudHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzbHVncztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==