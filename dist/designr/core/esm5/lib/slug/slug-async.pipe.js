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
var SlugAsyncPipe = /** @class */ (function () {
    function SlugAsyncPipe(changeDetector, slugService, routePipe) {
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
    SlugAsyncPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} segments
     * @return {?}
     */
    function (key, segments) {
        /** @type {?} */
        var slugs = this.routePipe.transform(this.asyncPipe.transform(this.slugService.getKey(key)));
        // console.log('SlugAsyncPipe.transform', key, slugs);
        if (slugs && segments) {
            slugs = slugs.concat(segments);
        }
        return slugs;
    };
    /**
     * @return {?}
     */
    SlugAsyncPipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.asyncPipe.dispose();
    };
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
    SlugAsyncPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: SlugService },
        { type: RoutePipe }
    ]; };
    /** @nocollapse */ SlugAsyncPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugAsyncPipe_Factory() { return new SlugAsyncPipe(i0.inject(i0.ChangeDetectorRef), i0.inject(i1.SlugService), i0.inject(i2.RoutePipe)); }, token: SlugAsyncPipe, providedIn: "root" });
    return SlugAsyncPipe;
}());
export { SlugAsyncPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy1hc3luYy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWctYXN5bmMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdDO0lBWUMsdUJBQ1MsY0FBaUMsRUFDakMsV0FBd0IsRUFDeEIsU0FBb0I7UUFGcEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsaUNBQVM7Ozs7O0lBQVQsVUFBVSxHQUFXLEVBQUUsUUFBbUI7O1lBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVGLHNEQUFzRDtRQUN0RCxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQS9CRCxJQUFJLFNBQUM7b0JBQ0wsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLElBQUksRUFBRSxLQUFLO2lCQUNYO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBWlEsaUJBQWlCO2dCQUdqQixXQUFXO2dCQURYLFNBQVM7Ozt3QkFGbEI7Q0FzQ0MsQUFqQ0QsSUFpQ0M7U0F6QlksYUFBYTs7Ozs7O0lBRXpCLGtDQUFtQzs7Ozs7SUFHbEMsdUNBQXlDOzs7OztJQUN6QyxvQ0FBZ0M7Ozs7O0lBQ2hDLGtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4uL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4uL3JvdXRlL3JvdXRlLnBpcGUnO1xuaW1wb3J0IHsgU2x1Z1NlcnZpY2UgfSBmcm9tICcuL3NsdWcuc2VydmljZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3NsdWdBc3luYycsXG5cdHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnQXN5bmNQaXBlIGltcGxlbWVudHMgT25EZXN0cm95LCBQaXBlVHJhbnNmb3JtIHtcblxuXHRwcml2YXRlIGFzeW5jUGlwZTogQ3VzdG9tQXN5bmNQaXBlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdHByaXZhdGUgc2x1Z1NlcnZpY2U6IFNsdWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVQaXBlOiBSb3V0ZVBpcGUsXG5cdCkge1xuXHRcdHRoaXMuYXN5bmNQaXBlID0gbmV3IEN1c3RvbUFzeW5jUGlwZSh0aGlzLmNoYW5nZURldGVjdG9yKTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZywgc2VnbWVudHM/OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcblx0XHRsZXQgc2x1Z3MgPSB0aGlzLnJvdXRlUGlwZS50cmFuc2Zvcm0odGhpcy5hc3luY1BpcGUudHJhbnNmb3JtKHRoaXMuc2x1Z1NlcnZpY2UuZ2V0S2V5KGtleSkpKTtcblx0XHQvLyBjb25zb2xlLmxvZygnU2x1Z0FzeW5jUGlwZS50cmFuc2Zvcm0nLCBrZXksIHNsdWdzKTtcblx0XHRpZiAoc2x1Z3MgJiYgc2VnbWVudHMpIHtcblx0XHRcdHNsdWdzID0gc2x1Z3MuY29uY2F0KHNlZ21lbnRzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHNsdWdzO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cdFx0dGhpcy5hc3luY1BpcGUuZGlzcG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==