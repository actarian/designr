/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RouteService } from '@designr/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
import * as i1 from "./page.service";
import * as i2 from "@designr/core";
var PageResolverService = /** @class */ (function () {
    function PageResolverService(pageService, routeService) {
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PageResolverService.prototype.pageToPageResolver = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var pageResolver = new PageResolver(this.pageService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    PageResolverService.prototype.resolve = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            /** @type {?} */
            var paths = route.url.filter(function (x) {
                return x.path;
            }).map(function (x) {
                return x.path;
            });
            /** @type {?} */
            var slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    PageResolverService.prototype.getPageById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    /**
     * @param {?} slug
     * @return {?}
     */
    PageResolverService.prototype.getPageBySlug = /**
     * @param {?} slug
     * @return {?}
     */
    function (slug) {
        var _this = this;
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageResolverService.ctorParameters = function () { return [
        { type: PageService },
        { type: RouteService }
    ]; };
    /** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(i1.PageService), i0.inject(i2.RouteService)); }, token: PageResolverService, providedIn: "root" });
    return PageResolverService;
}());
export { PageResolverService };
if (false) {
    /** @type {?} */
    PageResolverService.prototype.events$;
    /**
     * @type {?}
     * @private
     */
    PageResolverService.prototype.pageService;
    /**
     * @type {?}
     * @private
     */
    PageResolverService.prototype.routeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLXJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdDO0lBT0MsNkJBQ1MsV0FBd0IsRUFDeEIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKNUIsWUFBTyxHQUFrQyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQztJQUtwRixDQUFDOzs7OztJQUVMLGdEQUFrQjs7OztJQUFsQixVQUFtQixJQUFVOztZQUN0QixZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRUQscUNBQU87Ozs7O0lBQVAsVUFBUSxLQUE2QixFQUFFLEtBQTBCO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNOztnQkFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUMvQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQzs7Z0JBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksRUFBbUI7UUFBL0IsaUJBS0M7UUFKQSxzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUMxQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUExQixpQkFLQztRQUpBLDBEQUEwRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7O2dCQTVDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUpRLFdBQVc7Z0JBTFgsWUFBWTs7OzhCQUhyQjtDQXdEQyxBQTlDRCxJQThDQztTQTNDWSxtQkFBbUI7OztJQUUvQixzQ0FBd0Y7Ozs7O0lBR3ZGLDBDQUFnQzs7Ozs7SUFDaEMsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFBhZ2VSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJlc29sdmVyU2VydmljZSBpbXBsZW1lbnRzIFJlc29sdmU8UGFnZVJlc29sdmVyPiB7XG5cblx0cHVibGljIGV2ZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+KG51bGwpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cGFnZVRvUGFnZVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlUmVzb2x2ZXIge1xuXHRcdGNvbnN0IHBhZ2VSZXNvbHZlciA9IG5ldyBQYWdlUmVzb2x2ZXIodGhpcy5wYWdlU2VydmljZSwgcGFnZSk7XG5cdFx0dGhpcy5ldmVudHMkLm5leHQocGFnZVJlc29sdmVyKTtcblx0XHRyZXR1cm4gcGFnZVJlc29sdmVyO1xuXHR9XG5cblx0cmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdGlmIChyb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYWdlQnlJZChyb3V0ZS5wYXJhbXMuaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXRocyA9IHJvdXRlLnVybC5maWx0ZXIoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KS5tYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHNsdWcgPSB0aGlzLnJvdXRlU2VydmljZS50b1NsdWcocGF0aHMpLmpvaW4oJy8nKTtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeVNsdWcoc2x1Zyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0UGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCk7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQoaWQpLnBpcGUoXG5cdFx0XHRtYXAocGFnZSA9PiB0aGlzLnBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlKSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCBzbHVnKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRTdGF0ZVBhZ2VCeVNsdWcoc2x1ZykucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxufVxuIl19