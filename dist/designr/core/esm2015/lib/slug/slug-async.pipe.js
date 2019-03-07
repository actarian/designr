/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../route/route.pipe";
export class SlugAsyncPipe {
    /**
     * @param {?} changeDetector
     * @param {?} slugService
     * @param {?} routePipe
     */
    constructor(changeDetector, slugService, routePipe) {
        this.changeDetector = changeDetector;
        this.slugService = slugService;
        this.routePipe = routePipe;
        this.asyncPipe = new CustomAsyncPipe(this.changeDetector);
    }
    /**
     * @param {?} key
     * @param {?=} segments
     * @return {?}
     */
    transform(key, segments) {
        /** @type {?} */
        let slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
        // console.log('SlugAsyncPipe.transform', key, slugs);
        if (slugs && segments) {
            slugs = slugs.concat(segments);
        }
        return slugs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.asyncPipe.dispose();
    }
}
SlugAsyncPipe.decorators = [
    { type: Pipe, args: [{
                name: 'slugAsync',
                pure: false
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlugAsyncPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: SlugService },
    { type: RoutePipe }
];
/** @nocollapse */ SlugAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugAsyncPipe_Factory() { return new SlugAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.SlugService), i0.inject(i2.RoutePipe)); }, token: SlugAsyncPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugAsyncPipe.prototype.asyncPipe;
    /**
     * @type {?}
     * @private
     */
    SlugAsyncPipe.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    SlugAsyncPipe.prototype.slugService;
    /**
     * @type {?}
     * @private
     */
    SlugAsyncPipe.prototype.routePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy1hc3luYy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWctYXN5bmMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBVTdDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFJekIsWUFDUyxjQUFpQyxFQUNqQyxXQUF3QixFQUN4QixTQUFvQjtRQUZwQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUU1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQW1COztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixzREFBc0Q7UUFDdEQsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBL0JELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVpRLGlCQUFpQjtZQUdqQixXQUFXO1lBRFgsU0FBUzs7Ozs7Ozs7SUFhakIsa0NBQW1DOzs7OztJQUdsQyx1Q0FBeUM7Ozs7O0lBQ3pDLG9DQUFnQzs7Ozs7SUFDaEMsa0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi4vcm91dGUvcm91dGUucGlwZSc7XG5pbXBvcnQgeyBTbHVnU2VydmljZSB9IGZyb20gJy4vc2x1Zy5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2x1Z0FzeW5jJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdBc3luY1BpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgYXN5bmNQaXBlOiBDdXN0b21Bc3luY1BpcGU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBzbHVnU2VydmljZTogU2x1Z1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZVBpcGU6IFJvdXRlUGlwZSxcblx0KSB7XG5cdFx0dGhpcy5hc3luY1BpcGUgPSBuZXcgQ3VzdG9tQXN5bmNQaXBlKHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBzZWdtZW50cz86IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuXHRcdGxldCBzbHVncyA9IHRoaXMucm91dGVQaXBlLnRyYW5zZm9ybSh0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5zbHVnU2VydmljZS5nZXRLZXkoa2V5KSkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnQXN5bmNQaXBlLnRyYW5zZm9ybScsIGtleSwgc2x1Z3MpO1xuXHRcdGlmIChzbHVncyAmJiBzZWdtZW50cykge1xuXHRcdFx0c2x1Z3MgPSBzbHVncy5jb25jYXQoc2VnbWVudHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2x1Z3M7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzeW5jUGlwZS5kaXNwb3NlKCk7XG5cdH1cblxufVxuIl19