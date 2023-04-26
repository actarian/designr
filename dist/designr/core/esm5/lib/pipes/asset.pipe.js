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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0M7SUFVQyxtQkFDUyxXQUF3QixFQUN4QixPQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3pCLENBQUM7Ozs7O0lBRUwsNkJBQVM7Ozs7SUFBVCxVQUFVLElBQW9CO1FBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5RixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07O2dCQUNBLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkF2QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO2lCQUViO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVlEsV0FBVztnQkFDWCxXQUFXOzs7b0JBRnBCO0NBNkJDLEFBekJELElBeUJDO1NBakJZLFNBQVM7Ozs7OztJQUdwQixnQ0FBZ0M7Ozs7O0lBQ2hDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3NlZ21lbnQucGlwZSc7XHJcblxyXG5AUGlwZSh7XHJcblx0bmFtZTogJ2Fzc2V0JyxcclxuXHQvLyBwdXJlOiBmYWxzZVxyXG59KVxyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb3JlU2VydmljZTogQ29yZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlXHJcblx0KSB7IH1cclxuXHJcblx0dHJhbnNmb3JtKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgJiYgKGRhdGEuaW5kZXhPZignaHR0cCcpID09PSAwIHx8IGRhdGEuaW5kZXhPZignL21lZGlhLycpID09PSAwKSkge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gdGhpcy5zZWdtZW50LnRyYW5zZm9ybShkYXRhKTtcclxuXHRcdFx0c2VnbWVudHMudW5zaGlmdCh0aGlzLmNvcmVTZXJ2aWNlLm9wdGlvbnMuYXNzZXRzKTtcclxuXHRcdFx0cmV0dXJuIHNlZ21lbnRzLmpvaW4oJy8nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==