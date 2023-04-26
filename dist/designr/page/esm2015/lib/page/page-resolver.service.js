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
export class PageResolverService {
    /**
     * @param {?} configService
     * @param {?} pageService
     * @param {?} routeService
     */
    constructor(configService, pageService, routeService) {
        this.configService = configService;
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
        const pageResolver = new PageResolver(this.configService, page);
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
            const paths = route.url.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                return x.path;
            })).map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                return x.path;
            }));
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
        return this.pageService.getPageById(id).pipe(map((/**
         * @param {?} page
         * @return {?}
         */
        page => this.pageToPageResolver(page))));
    }
    /**
     * @param {?} slug
     * @return {?}
     */
    getPageBySlug(slug) {
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map((/**
         * @param {?} page
         * @return {?}
         */
        page => this.pageToPageResolver(page))));
    }
}
PageResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PageResolverService.ctorParameters = () => [
    { type: ConfigService },
    { type: PageService },
    { type: RouteService }
];
/** @nocollapse */ PageResolverService.ngInjectableDef = i0.defineInjectable({ factory: function PageResolverService_Factory() { return new PageResolverService(i0.inject(i1.ConfigService), i0.inject(i2.PageService), i0.inject(i3.RouteService)); }, token: PageResolverService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFJL0IsWUFDUyxhQUE0QixFQUM1QixXQUF3QixFQUN4QixZQUEwQjtRQUYxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1QixZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxDQUFDO0lBTXBGLENBQUM7Ozs7O0lBRUwsa0JBQWtCLENBQUMsSUFBVTs7Y0FDdEIsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNOztrQkFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsRUFBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLEVBQUM7O2tCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQW1CO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3pCLDBEQUEwRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFQUSxhQUFhO1lBR2IsV0FBVztZQU5YLFlBQVk7Ozs7O0lBYXBCLHNDQUF3Rjs7Ozs7SUFHdkYsNENBQW9DOzs7OztJQUNwQywwQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xyXG5pbXBvcnQgeyBQYWdlUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtcmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VSZXNvbHZlclNlcnZpY2UgaW1wbGVtZW50cyBSZXNvbHZlPFBhZ2VSZXNvbHZlcj4ge1xyXG5cclxuXHRwdWJsaWMgZXZlbnRzJDogQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4obnVsbCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxyXG5cdCkgeyB9XHJcblxyXG5cdHBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZVJlc29sdmVyIHtcclxuXHRcdGNvbnN0IHBhZ2VSZXNvbHZlciA9IG5ldyBQYWdlUmVzb2x2ZXIodGhpcy5jb25maWdTZXJ2aWNlLCBwYWdlKTtcclxuXHRcdHRoaXMuZXZlbnRzJC5uZXh0KHBhZ2VSZXNvbHZlcik7XHJcblx0XHRyZXR1cm4gcGFnZVJlc29sdmVyO1xyXG5cdH1cclxuXHJcblx0cmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xyXG5cdFx0aWYgKHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXMuaWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5SWQocm91dGUucGFyYW1zLmlkKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHBhdGhzID0gcm91dGUudXJsLmZpbHRlcih4ID0+IHtcclxuXHRcdFx0XHRyZXR1cm4geC5wYXRoO1xyXG5cdFx0XHR9KS5tYXAoeCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHNsdWcgPSB0aGlzLnJvdXRlU2VydmljZS50b1NsdWcocGF0aHMpLmpvaW4oJy8nKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5U2x1ZyhzbHVnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCk7XHJcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRQYWdlQnlJZChpZCkucGlwZShcclxuXHRcdFx0bWFwKHBhZ2UgPT4gdGhpcy5wYWdlVG9QYWdlUmVzb2x2ZXIocGFnZSkpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xyXG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0U3RhdGVQYWdlQnlTbHVnKHNsdWcpLnBpcGUoXHJcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==