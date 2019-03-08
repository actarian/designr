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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVN0MsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBRXBCLFlBQ1MsV0FBd0IsRUFDeEIsU0FBb0I7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUN6QixDQUFDOzs7Ozs7SUFFTCxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQW1COztjQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFOztnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBQ0YsQ0FBQzs7O1lBMUJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsS0FBSzthQUNYO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVFEsV0FBVztZQURYLFNBQVM7Ozs7Ozs7O0lBY2hCLCtCQUFnQzs7Ozs7SUFDaEMsNkJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUucGlwZSc7XG5pbXBvcnQgeyBTbHVnU2VydmljZSB9IGZyb20gJy4vc2x1Zy5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2x1ZycsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2x1Z1NlcnZpY2U6IFNsdWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVQaXBlOiBSb3V0ZVBpcGUsXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBzZWdtZW50cz86IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuXHRcdGNvbnN0IHNsdWcgPSB0aGlzLnNsdWdTZXJ2aWNlLnRyYW5zZm9ybShrZXkpO1xuXHRcdGlmIChzbHVnKSB7XG5cdFx0XHRsZXQgc2x1Z3MgPSB0aGlzLnJvdXRlUGlwZS50cmFuc2Zvcm0oc2x1Zyk7XG5cdFx0XHRpZiAoc2x1Z3MgJiYgc2VnbWVudHMpIHtcblx0XHRcdFx0c2x1Z3MgPSBzbHVncy5jb25jYXQoc2VnbWVudHMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNsdWdzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==