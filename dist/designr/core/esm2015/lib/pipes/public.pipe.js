/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
export class PublicPipe {
    /**
     * @param {?} coreService
     * @param {?} segment
     */
    constructor(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        segments.unshift(this.coreService.options.public);
        return segments.join('/');
    }
}
PublicPipe.decorators = [
    { type: Pipe, args: [{
                name: 'public',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PublicPipe.ctorParameters = () => [
    { type: CoreService },
    { type: SegmentPipe }
];
/** @nocollapse */ PublicPipe.ngInjectableDef = i0.defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(i0.inject(i1.CoreService), i0.inject(i2.SegmentPipe)); }, token: PublicPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.coreService;
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3B1YmxpYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU3QyxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFFdEIsWUFDUyxXQUF3QixFQUN4QixPQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3pCLENBQUM7Ozs7O0lBRUwsU0FBUyxDQUFDLElBQW9COztjQUN2QixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQW5CRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7YUFFZDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVZRLFdBQVc7WUFDWCxXQUFXOzs7Ozs7OztJQWFsQixpQ0FBZ0M7Ozs7O0lBQ2hDLDZCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3NlZ21lbnQucGlwZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ3B1YmxpYycsXHJcblx0Ly8gcHVyZTogZmFsc2VcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFB1YmxpY1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xyXG5cdFx0c2VnbWVudHMudW5zaGlmdCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMucHVibGljKTtcclxuXHRcdHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=