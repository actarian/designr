/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
import * as i2 from "./segment.pipe";
export class PublicPipe {
    /**
     * @param {?} configService
     * @param {?} segment
     */
    constructor(configService, segment) {
        this.configService = configService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const segments = this.segment.transform(data);
        segments.unshift(this.configService.options.public);
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
    { type: ConfigService },
    { type: SegmentPipe }
];
/** @nocollapse */ PublicPipe.ngInjectableDef = i0.defineInjectable({ factory: function PublicPipe_Factory() { return new PublicPipe(i0.inject(i1.ConfigService), i0.inject(i2.SegmentPipe)); }, token: PublicPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    PublicPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3B1YmxpYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVU3QyxNQUFNLE9BQU8sVUFBVTs7Ozs7SUFFdEIsWUFDUyxhQUE0QixFQUM1QixPQUFvQjtRQURwQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3pCLENBQUM7Ozs7O0lBRUwsU0FBUyxDQUFDLElBQW9COztjQUN2QixRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQW5CRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7YUFFZDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVZRLGFBQWE7WUFDYixXQUFXOzs7Ozs7OztJQWFsQixtQ0FBb0M7Ozs7O0lBQ3BDLDZCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3NlZ21lbnQucGlwZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ3B1YmxpYycsXG5cdC8vIHB1cmU6IGZhbHNlXG59KVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQdWJsaWNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcblx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnB1YmxpYyk7XG5cdFx0cmV0dXJuIHNlZ21lbnRzLmpvaW4oJy8nKTtcblx0fVxuXG59XG4iXX0=