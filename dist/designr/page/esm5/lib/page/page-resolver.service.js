/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RouteService } from '@designr/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
import * as i2 from "./page.service";
import * as i3 from "@designr/core";
var PageResolverService = /** @class */ (function () {
    function PageResolverService(configService, pageService, routeService) {
        this.configService = configService;
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
        var pageResolver = new PageResolver(this.configService, page);
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
            var paths = route.url.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                return x.path;
            })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                return x.path;
            }));
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
        return this.pageService.getPageById(id).pipe(map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return _this.pageToPageResolver(page); })));
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
        return this.pageService.getStatePageBySlug(slug).pipe(map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) { return _this.pageToPageResolver(page); })));
    };
    PageResolverService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PageResolverService.ctorParameters = function () { return [
        { type: ConfigService },
        { type: PageService },
        { type: RouteService }
    ]; };
    /** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(i1.ConfigService), i0.inject(i2.PageService), i0.inject(i3.RouteService)); }, token: PageResolverService, providedIn: "root" });
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
    PageResolverService.prototype.configService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU3QztJQU9DLDZCQUNTLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLFlBQTBCO1FBRjFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTDVCLFlBQU8sR0FBa0MsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUM7SUFNcEYsQ0FBQzs7Ozs7SUFFTCxnREFBa0I7Ozs7SUFBbEIsVUFBbUIsSUFBVTs7WUFDdEIsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsS0FBNkIsRUFBRSxLQUEwQjtRQUNoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7YUFBTTs7Z0JBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxFQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQztnQkFDUCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLEVBQUM7O2dCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEVBQW1CO1FBQS9CLGlCQUtDO1FBSkEsc0RBQXNEO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLElBQVk7UUFBMUIsaUJBS0M7UUFKQSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOztnQkE3Q0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFQUSxhQUFhO2dCQUdiLFdBQVc7Z0JBTlgsWUFBWTs7OzhCQUhyQjtDQTBEQyxBQS9DRCxJQStDQztTQTVDWSxtQkFBbUI7OztJQUUvQixzQ0FBd0Y7Ozs7O0lBR3ZGLDRDQUFvQzs7Ozs7SUFDcEMsMENBQWdDOzs7OztJQUNoQywyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcclxuaW1wb3J0IHsgUGFnZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLXJlc29sdmVyJztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIGltcGxlbWVudHMgUmVzb2x2ZTxQYWdlUmVzb2x2ZXI+IHtcclxuXHJcblx0cHVibGljIGV2ZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+KG51bGwpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcclxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHRwYWdlVG9QYWdlUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VSZXNvbHZlciB7XHJcblx0XHRjb25zdCBwYWdlUmVzb2x2ZXIgPSBuZXcgUGFnZVJlc29sdmVyKHRoaXMuY29uZmlnU2VydmljZSwgcGFnZSk7XHJcblx0XHR0aGlzLmV2ZW50cyQubmV4dChwYWdlUmVzb2x2ZXIpO1xyXG5cdFx0cmV0dXJuIHBhZ2VSZXNvbHZlcjtcclxuXHR9XHJcblxyXG5cdHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcclxuXHRcdGlmIChyb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zLmlkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeUlkKHJvdXRlLnBhcmFtcy5pZCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBwYXRocyA9IHJvdXRlLnVybC5maWx0ZXIoeCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcclxuXHRcdFx0fSkubWFwKHggPT4ge1xyXG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjb25zdCBzbHVnID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9TbHVnKHBhdGhzKS5qb2luKCcvJyk7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeVNsdWcoc2x1Zyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQoaWQpLnBpcGUoXHJcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCBzbHVnKTtcclxuXHRcdHJldHVybiB0aGlzLnBhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnKS5waXBlKFxyXG5cdFx0XHRtYXAocGFnZSA9PiB0aGlzLnBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=