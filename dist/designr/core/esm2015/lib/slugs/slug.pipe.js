/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Pipe } from '@angular/core';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
import * as i1 from "./slug.service";
export class SlugPipe {
    /**
     * @param {?} slugService
     */
    constructor(slugService) {
        this.slugService = slugService;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        return this.slugService.getKey(key);
        // return this.async.transform<any>(this.slugService.getKey(key));
        // return this.routeService.toSlug(key);
    }
}
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
SlugPipe.ctorParameters = () => [
    { type: SlugService }
];
/** @nocollapse */ SlugPipe.ngInjectableDef = i0.defineInjectable({ factory: function SlugPipe_Factory() { return new SlugPipe(i0.inject(i1.SlugService)); }, token: SlugPipe, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugPipe.prototype.slugService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVncy9zbHVnLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVU3QyxNQUFNLE9BQU8sUUFBUTs7OztJQUVwQixZQUVTLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzdCLENBQUM7Ozs7O0lBRUwsU0FBUyxDQUFDLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxrRUFBa0U7UUFDbEUsd0NBQXdDO0lBQ3pDLENBQUM7OztZQW5CRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUVBLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVRRLFdBQVc7Ozs7Ozs7O0lBY2xCLCtCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNsdWdTZXJ2aWNlIH0gZnJvbSAnLi9zbHVnLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICdzbHVnJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNsdWdQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Ly8gcHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0XHRwcml2YXRlIHNsdWdTZXJ2aWNlOiBTbHVnU2VydmljZVxuXHQpIHsgfVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcblx0XHRyZXR1cm4gdGhpcy5zbHVnU2VydmljZS5nZXRLZXkoa2V5KTtcblx0XHQvLyByZXR1cm4gdGhpcy5hc3luYy50cmFuc2Zvcm08YW55Pih0aGlzLnNsdWdTZXJ2aWNlLmdldEtleShrZXkpKTtcblx0XHQvLyByZXR1cm4gdGhpcy5yb3V0ZVNlcnZpY2UudG9TbHVnKGtleSk7XG5cdH1cblxufVxuIl19