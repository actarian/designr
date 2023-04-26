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
export class AssetPipe {
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
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            /** @type {?} */
            const segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    }
}
AssetPipe.decorators = [
    { type: Pipe, args: [{
                name: 'asset',
            },] },
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AssetPipe.ctorParameters = () => [
    { type: CoreService },
    { type: SegmentPipe }
];
/** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(i1.CoreService), i0.inject(i2.SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.coreService;
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFVN0MsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBRXJCLFlBQ1MsV0FBd0IsRUFDeEIsT0FBb0I7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUN6QixDQUFDOzs7OztJQUVMLFNBQVMsQ0FBQyxJQUFvQjtRQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUYsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNOztrQkFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQzs7O1lBdkJELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTzthQUViO1lBRUEsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBVlEsV0FBVztZQUNYLFdBQVc7Ozs7Ozs7O0lBYWxCLGdDQUFnQzs7Ozs7SUFDaEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vc2VnbWVudC5waXBlJztcclxuXHJcbkBQaXBlKHtcclxuXHRuYW1lOiAnYXNzZXQnLFxyXG5cdC8vIHB1cmU6IGZhbHNlXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc3NldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvcmVTZXJ2aWNlOiBDb3JlU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2VnbWVudDogU2VnbWVudFBpcGVcclxuXHQpIHsgfVxyXG5cclxuXHR0cmFuc2Zvcm0oZGF0YTogYW55W10gfCBzdHJpbmcpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiAoZGF0YS5pbmRleE9mKCdodHRwJykgPT09IDAgfHwgZGF0YS5pbmRleE9mKCcvbWVkaWEvJykgPT09IDApKSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xyXG5cdFx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29yZVNlcnZpY2Uub3B0aW9ucy5hc3NldHMpO1xyXG5cdFx0XHRyZXR1cm4gc2VnbWVudHMuam9pbignLycpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19