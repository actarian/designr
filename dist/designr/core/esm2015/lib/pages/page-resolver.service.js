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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLXJlc29sdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUs3QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFJL0IsWUFDUyxhQUE0QixFQUM1QixXQUF3QixFQUN4QixZQUEwQjtRQUYxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1QixZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxDQUFDO0lBTXBGLENBQUM7Ozs7O0lBRUwsa0JBQWtCLENBQUMsSUFBVTs7Y0FDdEIsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNOztrQkFDQSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUM7O2tCQUNJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEVBQW1CO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBQ3pCLDBEQUEwRDtRQUMxRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDMUMsQ0FBQztJQUNILENBQUM7OztZQTdDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFSUSxhQUFhO1lBSWIsV0FBVztZQUhYLFlBQVk7Ozs7O0lBVXBCLHNDQUF3Rjs7Ozs7SUFHdkYsNENBQW9DOzs7OztJQUNwQywwQ0FBZ0M7Ozs7O0lBQ2hDLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi4vcm91dGVzL3JvdXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgeyBQYWdlUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtcmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VSZXNvbHZlclNlcnZpY2UgaW1wbGVtZW50cyBSZXNvbHZlPFBhZ2VSZXNvbHZlcj4ge1xuXG5cdHB1YmxpYyBldmVudHMkOiBCZWhhdmlvclN1YmplY3Q8UGFnZVJlc29sdmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZVJlc29sdmVyPihudWxsKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0KSB7IH1cblxuXHRwYWdlVG9QYWdlUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VSZXNvbHZlciB7XG5cdFx0Y29uc3QgcGFnZVJlc29sdmVyID0gbmV3IFBhZ2VSZXNvbHZlcih0aGlzLmNvbmZpZ1NlcnZpY2UsIHBhZ2UpO1xuXHRcdHRoaXMuZXZlbnRzJC5uZXh0KHBhZ2VSZXNvbHZlcik7XG5cdFx0cmV0dXJuIHBhZ2VSZXNvbHZlcjtcblx0fVxuXG5cdHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcblx0XHRpZiAocm91dGUucGFyYW1zICYmIHJvdXRlLnBhcmFtcy5pZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5SWQocm91dGUucGFyYW1zLmlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGF0aHMgPSByb3V0ZS51cmwuZmlsdGVyKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4geC5wYXRoO1xuXHRcdFx0fSkubWFwKHggPT4ge1xuXHRcdFx0XHRyZXR1cm4geC5wYXRoO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBzbHVnID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9TbHVnKHBhdGhzKS5qb2luKCcvJyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYWdlQnlTbHVnKHNsdWcpO1xuXHRcdH1cblx0fVxuXG5cdGdldFBhZ2VCeUlkKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeUlkJywgaWQpO1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkKGlkKS5waXBlKFxuXHRcdFx0bWFwKHBhZ2UgPT4gdGhpcy5wYWdlVG9QYWdlUmVzb2x2ZXIocGFnZSkpXG5cdFx0KTtcblx0fVxuXG5cdGdldFBhZ2VCeVNsdWcoc2x1Zzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVJlc29sdmVyU2VydmljZS5nZXRQYWdlQnlTbHVnJywgc2x1Zyk7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0U3RhdGVQYWdlQnlTbHVnKHNsdWcpLnBpcGUoXG5cdFx0XHRtYXAocGFnZSA9PiB0aGlzLnBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlKSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==