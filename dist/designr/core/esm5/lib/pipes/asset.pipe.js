/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../config/core.service";
import * as i2 from "./segment.pipe";
var AssetPipe = /** @class */ (function () {
    function AssetPipe(coreService, segment) {
        this.coreService = coreService;
        this.segment = segment;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AssetPipe.prototype.transform = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (typeof data === 'string' && (data.indexOf('http') === 0 || data.indexOf('/media/') === 0)) {
            return data;
        }
        else {
            /** @type {?} */
            var segments = this.segment.transform(data);
            segments.unshift(this.coreService.options.assets);
            return segments.join('/');
        }
    };
    AssetPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'asset',
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AssetPipe.ctorParameters = function () { return [
        { type: CoreService },
        { type: SegmentPipe }
    ]; };
    /** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(i1.CoreService), i0.inject(i2.SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
    return AssetPipe;
}());
export { AssetPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0M7SUFVQyxtQkFDUyxXQUF3QixFQUN4QixPQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3pCLENBQUM7Ozs7O0lBRUwsNkJBQVM7Ozs7SUFBVCxVQUFVLElBQW9CO1FBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5RixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07O2dCQUNBLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkF2QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO2lCQUViO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVlEsV0FBVztnQkFDWCxXQUFXOzs7b0JBRnBCO0NBNkJDLEFBekJELElBeUJDO1NBakJZLFNBQVM7Ozs7OztJQUdwQixnQ0FBZ0M7Ozs7O0lBQ2hDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vc2VnbWVudC5waXBlJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnYXNzZXQnLFxuXHQvLyBwdXJlOiBmYWxzZVxufSlcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXNzZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBzZWdtZW50OiBTZWdtZW50UGlwZVxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShkYXRhOiBhbnlbXSB8IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiAoZGF0YS5pbmRleE9mKCdodHRwJykgPT09IDAgfHwgZGF0YS5pbmRleE9mKCcvbWVkaWEvJykgPT09IDApKSB7XG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgc2VnbWVudHMgPSB0aGlzLnNlZ21lbnQudHJhbnNmb3JtKGRhdGEpO1xuXHRcdFx0c2VnbWVudHMudW5zaGlmdCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuYXNzZXRzKTtcblx0XHRcdHJldHVybiBzZWdtZW50cy5qb2luKCcvJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==