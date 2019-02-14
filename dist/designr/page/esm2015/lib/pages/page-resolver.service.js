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
export class PageResolverService {
    /**
     * @param {?} pageService
     * @param {?} routeService
     */
    constructor(pageService, routeService) {
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    pageToPageResolver(page) {
        /** @type {?} */
        const pageResolver = new PageResolver(this.pageService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolve(route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            /** @type {?} */
            const paths = route.url.filter(x => {
                return x.path;
            }).map(x => {
                return x.path;
            });
            /** @type {?} */
            const slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPageById(id) {
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(page => this.pageToPageResolver(page)));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getPageBySlug(slug) {
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(page => this.pageToPageResolver(page)));
    }
}
PageResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageResolverService.ctorParameters = () => [
    { type: PageService },
    { type: RouteService }
];
/** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(i1.PageService), i0.inject(i2.RouteService)); }, token: PageResolverService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLXJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzdDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSS9CLFlBQ1MsV0FBd0IsRUFDeEIsWUFBMEI7UUFEMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKNUIsWUFBTyxHQUFrQyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQztJQUtwRixDQUFDOzs7OztJQUVMLGtCQUFrQixDQUFDLElBQVU7O2NBQ3RCLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUNoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7YUFBTTs7a0JBQ0EsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxDQUFDOztrQkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN0RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFtQjtRQUM5QixzREFBc0Q7UUFDdEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBWTtRQUN6QiwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOzs7WUE1Q0QsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBSlEsV0FBVztZQUxYLFlBQVk7Ozs7O0lBWXBCLHNDQUF3Rjs7Ozs7SUFHdkYsMENBQWdDOzs7OztJQUNoQywyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLXJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIGltcGxlbWVudHMgUmVzb2x2ZTxQYWdlUmVzb2x2ZXI+IHtcblxuXHRwdWJsaWMgZXZlbnRzJDogQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4obnVsbCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0KSB7IH1cblxuXHRwYWdlVG9QYWdlUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VSZXNvbHZlciB7XG5cdFx0Y29uc3QgcGFnZVJlc29sdmVyID0gbmV3IFBhZ2VSZXNvbHZlcih0aGlzLnBhZ2VTZXJ2aWNlLCBwYWdlKTtcblx0XHR0aGlzLmV2ZW50cyQubmV4dChwYWdlUmVzb2x2ZXIpO1xuXHRcdHJldHVybiBwYWdlUmVzb2x2ZXI7XG5cdH1cblxuXHRyZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0aWYgKHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXMuaWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeUlkKHJvdXRlLnBhcmFtcy5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhdGhzID0gcm91dGUudXJsLmZpbHRlcih4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pLm1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3Qgc2x1ZyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvU2x1ZyhwYXRocykuam9pbignLycpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5U2x1ZyhzbHVnKTtcblx0XHR9XG5cdH1cblxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVJlc29sdmVyU2VydmljZS5nZXRQYWdlQnlJZCcsIGlkKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRQYWdlQnlJZChpZCkucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxuXHRnZXRQYWdlQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnKS5waXBlKFxuXHRcdFx0bWFwKHBhZ2UgPT4gdGhpcy5wYWdlVG9QYWdlUmVzb2x2ZXIocGFnZSkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=