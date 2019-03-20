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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFJL0IsWUFDUyxhQUE0QixFQUM1QixXQUF3QixFQUN4QixZQUEwQjtRQUYxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1QixZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxDQUFDO0lBTXBGLENBQUM7Ozs7O0lBRUwsa0JBQWtCLENBQUMsSUFBVTs7Y0FDdEIsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNOztrQkFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsRUFBQyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLEVBQUM7O2tCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQW1CO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3pCLDBEQUEwRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFQUSxhQUFhO1lBR2IsV0FBVztZQU5YLFlBQVk7Ozs7O0lBYXBCLHNDQUF3Rjs7Ozs7SUFHdkYsNENBQW9DOzs7OztJQUNwQywwQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFBhZ2VSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJlc29sdmVyU2VydmljZSBpbXBsZW1lbnRzIFJlc29sdmU8UGFnZVJlc29sdmVyPiB7XG5cblx0cHVibGljIGV2ZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+KG51bGwpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZVJlc29sdmVyIHtcblx0XHRjb25zdCBwYWdlUmVzb2x2ZXIgPSBuZXcgUGFnZVJlc29sdmVyKHRoaXMuY29uZmlnU2VydmljZSwgcGFnZSk7XG5cdFx0dGhpcy5ldmVudHMkLm5leHQocGFnZVJlc29sdmVyKTtcblx0XHRyZXR1cm4gcGFnZVJlc29sdmVyO1xuXHR9XG5cblx0cmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdGlmIChyb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYWdlQnlJZChyb3V0ZS5wYXJhbXMuaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXRocyA9IHJvdXRlLnVybC5maWx0ZXIoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KS5tYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHNsdWcgPSB0aGlzLnJvdXRlU2VydmljZS50b1NsdWcocGF0aHMpLmpvaW4oJy8nKTtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeVNsdWcoc2x1Zyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0UGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCk7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQoaWQpLnBpcGUoXG5cdFx0XHRtYXAocGFnZSA9PiB0aGlzLnBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlKSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCBzbHVnKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRTdGF0ZVBhZ2VCeVNsdWcoc2x1ZykucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxufVxuIl19