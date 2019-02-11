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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy1hc3luYy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVncy9zbHVnLWFzeW5jLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQWEsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU3QyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBSXpCLFlBQ1MsY0FBaUMsRUFDakMsV0FBd0IsRUFDeEIsU0FBb0I7UUFGcEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxRQUFtQjs7WUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUYsc0RBQXNEO1FBQ3RELElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtZQUN0QixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQS9CRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2FBQ1g7WUFFQSxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFaUSxpQkFBaUI7WUFHakIsV0FBVztZQURYLFNBQVM7Ozs7Ozs7O0lBYWpCLGtDQUFtQzs7Ozs7SUFHbEMsdUNBQXlDOzs7OztJQUN6QyxvQ0FBZ0M7Ozs7O0lBQ2hDLGtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4uL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4uL3JvdXRlcy9yb3V0ZS5waXBlJztcbmltcG9ydCB7IFNsdWdTZXJ2aWNlIH0gZnJvbSAnLi9zbHVnLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdzbHVnQXN5bmMnLFxuXHRwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2x1Z0FzeW5jUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XG5cblx0cHJpdmF0ZSBhc3luY1BpcGU6IEN1c3RvbUFzeW5jUGlwZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRwcml2YXRlIHNsdWdTZXJ2aWNlOiBTbHVnU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlUGlwZTogUm91dGVQaXBlLFxuXHQpIHtcblx0XHR0aGlzLmFzeW5jUGlwZSA9IG5ldyBDdXN0b21Bc3luY1BpcGUodGhpcy5jaGFuZ2VEZXRlY3Rvcik7XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHNlZ21lbnRzPzogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG5cdFx0bGV0IHNsdWdzID0gdGhpcy5yb3V0ZVBpcGUudHJhbnNmb3JtKHRoaXMuYXN5bmNQaXBlLnRyYW5zZm9ybSh0aGlzLnNsdWdTZXJ2aWNlLmdldEtleShrZXkpKSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1NsdWdBc3luY1BpcGUudHJhbnNmb3JtJywga2V5LCBzbHVncyk7XG5cdFx0aWYgKHNsdWdzICYmIHNlZ21lbnRzKSB7XG5cdFx0XHRzbHVncyA9IHNsdWdzLmNvbmNhdChzZWdtZW50cyk7XG5cdFx0fVxuXHRcdHJldHVybiBzbHVncztcblx0fVxuXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xuXHRcdHRoaXMuYXN5bmNQaXBlLmRpc3Bvc2UoKTtcblx0fVxuXG59XG4iXX0=