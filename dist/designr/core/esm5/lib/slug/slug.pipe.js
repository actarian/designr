/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
import * as i2 from "../route/route.pipe";
var SlugPipe = /** @class */ (function () {
    function SlugPipe(slugService, routePipe) {
        this.slugService = slugService;
        this.routePipe = routePipe;
    }
    /**
     * @param {?} key
     * @param {?=} segments
     * @return {?}
     */
    SlugPipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} segments
     * @return {?}
     */
    function (key, segments) {
        /** @type {?} */
        var slug = this.slugService.transform(key);
        if (slug) {
            /** @type {?} */
            var slugs = this.routePipe.transform(slug);
            if (slugs && segments) {
                slugs = slugs.concat(segments);
            }
            return slugs;
        }
        else {
            return [];
        }
    };
    SlugPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'slug',
                    pure: false
                },] },
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SlugPipe.ctorParameters = function () { return [
        { type: SlugService },
        { type: RoutePipe }
    ]; };
    /** @nocollapse */ SlugPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(i0.inject(i1.SlugService), i0.inject(i2.RoutePipe)); }, token: SlugPipe, providedIn: "root" });
    return SlugPipe;
}());
export { SlugPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugPipe.prototype.slugService;
    /**
     * @type {?}
     * @private
     */
    SlugPipe.prototype.routePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0M7SUFVQyxrQkFDUyxXQUF3QixFQUN4QixTQUFvQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQ3pCLENBQUM7Ozs7OztJQUVMLDRCQUFTOzs7OztJQUFULFVBQVUsR0FBVyxFQUFFLFFBQW1COztZQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFOztnQkFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDdEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQztTQUNWO0lBQ0YsQ0FBQzs7Z0JBMUJELElBQUksU0FBQztvQkFDTCxJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFFQSxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVRRLFdBQVc7Z0JBRFgsU0FBUzs7O21CQURsQjtDQWdDQyxBQTVCRCxJQTRCQztTQXBCWSxRQUFROzs7Ozs7SUFHbkIsK0JBQWdDOzs7OztJQUNoQyw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuLi9yb3V0ZS9yb3V0ZS5waXBlJztcbmltcG9ydCB7IFNsdWdTZXJ2aWNlIH0gZnJvbSAnLi9zbHVnLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdzbHVnJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBzbHVnU2VydmljZTogU2x1Z1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZVBpcGU6IFJvdXRlUGlwZSxcblx0KSB7IH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIHNlZ21lbnRzPzogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG5cdFx0Y29uc3Qgc2x1ZyA9IHRoaXMuc2x1Z1NlcnZpY2UudHJhbnNmb3JtKGtleSk7XG5cdFx0aWYgKHNsdWcpIHtcblx0XHRcdGxldCBzbHVncyA9IHRoaXMucm91dGVQaXBlLnRyYW5zZm9ybShzbHVnKTtcblx0XHRcdGlmIChzbHVncyAmJiBzZWdtZW50cykge1xuXHRcdFx0XHRzbHVncyA9IHNsdWdzLmNvbmNhdChzZWdtZW50cyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2x1Z3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH1cblxufVxuIl19