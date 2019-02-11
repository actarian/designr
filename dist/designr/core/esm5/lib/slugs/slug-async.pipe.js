/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { CustomAsyncPipe } from '../pipes/custom-async.pipe';
import { RoutePipe } from '../routes/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../routes/route.pipe";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy1hc3luYy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVncy9zbHVnLWFzeW5jLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU3QztJQVlDLHVCQUNTLGNBQWlDLEVBQ2pDLFdBQXdCLEVBQ3hCLFNBQW9CO1FBRnBCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELGlDQUFTOzs7OztJQUFULFVBQVUsR0FBVyxFQUFFLFFBQW1COztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixzREFBc0Q7UUFDdEQsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvQkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxXQUFXO29CQUNqQixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVpRLGlCQUFpQjtnQkFHakIsV0FBVztnQkFEWCxTQUFTOzs7d0JBRmxCO0NBc0NDLEFBakNELElBaUNDO1NBekJZLGFBQWE7Ozs7OztJQUV6QixrQ0FBbUM7Ozs7O0lBR2xDLHVDQUF5Qzs7Ozs7SUFDekMsb0NBQWdDOzs7OztJQUNoQyxrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuLi9yb3V0ZXMvcm91dGUucGlwZSc7XG5pbXBvcnQgeyBTbHVnU2VydmljZSB9IGZyb20gJy4vc2x1Zy5zZXJ2aWNlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnc2x1Z0FzeW5jJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdBc3luY1BpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHByaXZhdGUgYXN5bmNQaXBlOiBDdXN0b21Bc3luY1BpcGU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJpdmF0ZSBzbHVnU2VydmljZTogU2x1Z1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZVBpcGU6IFJvdXRlUGlwZSxcblx0KSB7XG5cdFx0dGhpcy5hc3luY1BpcGUgPSBuZXcgQ3VzdG9tQXN5bmNQaXBlKHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xuXHR9XG5cblx0dHJhbnNmb3JtKGtleTogc3RyaW5nLCBzZWdtZW50cz86IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuXHRcdGxldCBzbHVncyA9IHRoaXMucm91dGVQaXBlLnRyYW5zZm9ybSh0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5zbHVnU2VydmljZS5nZXRLZXkoa2V5KSkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdTbHVnQXN5bmNQaXBlLnRyYW5zZm9ybScsIGtleSwgc2x1Z3MpO1xuXHRcdGlmIChzbHVncyAmJiBzZWdtZW50cykge1xuXHRcdFx0c2x1Z3MgPSBzbHVncy5jb25jYXQoc2VnbWVudHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2x1Z3M7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcblx0XHR0aGlzLmFzeW5jUGlwZS5kaXNwb3NlKCk7XG5cdH1cblxufVxuIl19