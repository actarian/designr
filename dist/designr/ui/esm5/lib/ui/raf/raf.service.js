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
var RafService = /** @class */ (function () {
    function RafService(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
    }
    /**
     * @return {?}
     */
    RafService.prototype.raf$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            if (isPlatformBrowser(_this.platformId)) {
                return range(0, Number.POSITIVE_INFINITY, animationFrame).pipe(shareReplay());
            }
            else {
                return of(null);
            }
        }));
    };
    RafService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    RafService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ RafService.ngInjectableDef = i0.defineInjectable({ factory: function RafService_Factory() { return new RafService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: RafService, providedIn: "root" });
    return RafService;
}());
export { RafService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9yYWYvcmFmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFN0M7SUFLQyxvQkFDOEIsVUFBa0IsRUFDdkMsSUFBWTtRQURTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNqQixDQUFDOzs7O0lBRUwseUJBQUk7OztJQUFKO1FBQUEsaUJBVUM7UUFUQSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7UUFBQztZQUNsQyxJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQzdELFdBQVcsRUFBRSxDQUNiLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjtRQUNGLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBSUUsTUFBTSxTQUFDLFdBQVc7Z0JBWFEsTUFBTTs7O3FCQURuQztDQTRCQyxBQXRCRCxJQXNCQztTQW5CWSxVQUFVOzs7Ozs7SUFHckIsZ0NBQStDOzs7OztJQUMvQywwQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgcmFuZ2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWUgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZSc7XHJcbmltcG9ydCB7IHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFmU2VydmljZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHQpIHsgfVxyXG5cclxuXHRyYWYkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcblx0XHRyZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmFuZ2UoMCwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBhbmltYXRpb25GcmFtZSkucGlwZShcclxuXHRcdFx0XHRcdHNoYXJlUmVwbGF5KCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19