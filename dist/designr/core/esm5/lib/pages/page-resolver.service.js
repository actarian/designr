/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { RouteService } from '../routes/route.service';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/config.service";
import * as i2 from "./page.service";
import * as i3 from "../routes/route.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLXJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU3QztJQU9DLDZCQUNTLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLFlBQTBCO1FBRjFCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTDVCLFlBQU8sR0FBa0MsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUM7SUFNcEYsQ0FBQzs7Ozs7SUFFTCxnREFBa0I7Ozs7SUFBbEIsVUFBbUIsSUFBVTs7WUFDdEIsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsS0FBNkIsRUFBRSxLQUEwQjtRQUNoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7YUFBTTs7Z0JBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDUCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUM7O2dCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLEVBQW1CO1FBQS9CLGlCQUtDO1FBSkEsc0RBQXNEO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLElBQVk7UUFBMUIsaUJBS0M7UUFKQSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOztnQkE3Q0QsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFSUSxhQUFhO2dCQUliLFdBQVc7Z0JBSFgsWUFBWTs7OzhCQU5yQjtDQTBEQyxBQS9DRCxJQStDQztTQTVDWSxtQkFBbUI7OztJQUUvQixzQ0FBd0Y7Ozs7O0lBR3ZGLDRDQUFvQzs7Ozs7SUFDcEMsMENBQWdDOzs7OztJQUNoQywyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJy4uL3JvdXRlcy9yb3V0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLXJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIGltcGxlbWVudHMgUmVzb2x2ZTxQYWdlUmVzb2x2ZXI+IHtcblxuXHRwdWJsaWMgZXZlbnRzJDogQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4obnVsbCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cGFnZVRvUGFnZVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlUmVzb2x2ZXIge1xuXHRcdGNvbnN0IHBhZ2VSZXNvbHZlciA9IG5ldyBQYWdlUmVzb2x2ZXIodGhpcy5jb25maWdTZXJ2aWNlLCBwYWdlKTtcblx0XHR0aGlzLmV2ZW50cyQubmV4dChwYWdlUmVzb2x2ZXIpO1xuXHRcdHJldHVybiBwYWdlUmVzb2x2ZXI7XG5cdH1cblxuXHRyZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0aWYgKHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXMuaWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeUlkKHJvdXRlLnBhcmFtcy5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhdGhzID0gcm91dGUudXJsLmZpbHRlcih4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pLm1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3Qgc2x1ZyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvU2x1ZyhwYXRocykuam9pbignLycpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5U2x1ZyhzbHVnKTtcblx0XHR9XG5cdH1cblxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVJlc29sdmVyU2VydmljZS5nZXRQYWdlQnlJZCcsIGlkKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRQYWdlQnlJZChpZCkucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxuXHRnZXRQYWdlQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnKS5waXBlKFxuXHRcdFx0bWFwKHBhZ2UgPT4gdGhpcy5wYWdlVG9QYWdlUmVzb2x2ZXIocGFnZSkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=