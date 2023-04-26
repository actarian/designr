/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { of, range } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class RafService {
    /**
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
    }
    /**
     * @return {?}
     */
    raf$() {
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (isPlatformBrowser(this.platformId)) {
                return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(shareReplay());
            }
            else {
                return of(null);
            }
        }));
    }
}
RafService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RafService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ RafService.ngInjectableDef = i0.defineInjectable({ factory: function RafService_Factory() { return new RafService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: RafService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RafService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    RafService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9yYWYvcmFmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBRXRCLFlBQzhCLFVBQWtCLEVBQ3ZDLElBQVk7UUFEUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7SUFDakIsQ0FBQzs7OztJQUVMLElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUM3RCxXQUFXLEVBQUUsQ0FDYixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7OztZQXBCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBSUUsTUFBTSxTQUFDLFdBQVc7WUFYUSxNQUFNOzs7Ozs7OztJQVdqQyxnQ0FBK0M7Ozs7O0lBQy9DLDBCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCByYW5nZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvc2NoZWR1bGVyL2FuaW1hdGlvbkZyYW1lJztcclxuaW1wb3J0IHsgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWZTZXJ2aWNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxyXG5cdCkgeyB9XHJcblxyXG5cdHJhZiQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuXHRcdHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHRcdHJldHVybiByYW5nZSgwLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIGFuaW1hdGlvbkZyYW1lKS5waXBlKFxyXG5cdFx0XHRcdFx0c2hhcmVSZXBsYXkoKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=