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
var AssetPipe = /** @class */ (function () {
    function AssetPipe(configService, segment) {
        this.configService = configService;
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
            segments.unshift(this.configService.options.assets);
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
        { type: ConfigService },
        { type: SegmentPipe }
    ]; };
    /** @nocollapse */ AssetPipe.ngInjectableDef = i0.defineInjectable({ factory: function AssetPipe_Factory() { return new AssetPipe(i0.inject(i1.ConfigService), i0.inject(i2.SegmentPipe)); }, token: AssetPipe, providedIn: "root" });
    return AssetPipe;
}());
export { AssetPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    AssetPipe.prototype.segment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvYXNzZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0M7SUFVQyxtQkFDUyxhQUE0QixFQUM1QixPQUFvQjtRQURwQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQ3pCLENBQUM7Ozs7O0lBRUwsNkJBQVM7Ozs7SUFBVCxVQUFVLElBQW9CO1FBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5RixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07O2dCQUNBLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDRixDQUFDOztnQkF2QkQsSUFBSSxTQUFDO29CQUNMLElBQUksRUFBRSxPQUFPO2lCQUViO2dCQUVBLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBVlEsYUFBYTtnQkFDYixXQUFXOzs7b0JBRnBCO0NBNkJDLEFBekJELElBeUJDO1NBakJZLFNBQVM7Ozs7OztJQUdwQixrQ0FBb0M7Ozs7O0lBQ3BDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3NlZ21lbnQucGlwZSc7XG5cbkBQaXBlKHtcblx0bmFtZTogJ2Fzc2V0Jyxcblx0Ly8gcHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFzc2V0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHNlZ21lbnQ6IFNlZ21lbnRQaXBlXG5cdCkgeyB9XG5cblx0dHJhbnNmb3JtKGRhdGE6IGFueVtdIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIChkYXRhLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCB8fCBkYXRhLmluZGV4T2YoJy9tZWRpYS8nKSA9PT0gMCkpIHtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBzZWdtZW50cyA9IHRoaXMuc2VnbWVudC50cmFuc2Zvcm0oZGF0YSk7XG5cdFx0XHRzZWdtZW50cy51bnNoaWZ0KHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLmFzc2V0cyk7XG5cdFx0XHRyZXR1cm4gc2VnbWVudHMuam9pbignLycpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=