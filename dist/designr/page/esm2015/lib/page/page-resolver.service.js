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
    constructor(configService, pageService, routeService) {
        this.configService = configService;
        this.pageService = pageService;
        this.routeService = routeService;
        this.events$ = new BehaviorSubject(null);
    }
    pageToPageResolver(page) {
        const pageResolver = new PageResolver(this.configService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    }
    resolve(route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            const paths = route.url.filter(x => {
                return x.path;
            }).map(x => {
                return x.path;
            });
            const slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    }
    getPageById(id) {
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(page => this.pageToPageResolver(page)));
    }
    getPageBySlug(slug) {
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(page => this.pageToPageResolver(page)));
    }
}
PageResolverService.ɵfac = function PageResolverService_Factory(t) { return new (t || PageResolverService)(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.PageService), i0.ɵɵinject(i3.RouteService)); };
PageResolverService.ɵprov = i0.ɵɵdefineInjectable({ token: PageResolverService, factory: PageResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i2.PageService }, { type: i3.RouteService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSzdDLE1BQU0sT0FBTyxtQkFBbUI7SUFJL0IsWUFDUyxhQUE0QixFQUM1QixXQUF3QixFQUN4QixZQUEwQjtRQUYxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUw1QixZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQyxDQUFDO0lBTXBGLENBQUM7SUFFTCxrQkFBa0IsQ0FBQyxJQUFVO1FBQzVCLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQ2hFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ04sTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRUQsV0FBVyxDQUFDLEVBQW1CO1FBQzlCLHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVk7UUFDekIsMERBQTBEO1FBQzFELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQ0gsQ0FBQzs7c0ZBMUNXLG1CQUFtQjsyREFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbkIsTUFBTTtrREFFTixtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLXJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIGltcGxlbWVudHMgUmVzb2x2ZTxQYWdlUmVzb2x2ZXI+IHtcblxuXHRwdWJsaWMgZXZlbnRzJDogQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VSZXNvbHZlcj4obnVsbCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdCkgeyB9XG5cblx0cGFnZVRvUGFnZVJlc29sdmVyKHBhZ2U6IFBhZ2UpOiBQYWdlUmVzb2x2ZXIge1xuXHRcdGNvbnN0IHBhZ2VSZXNvbHZlciA9IG5ldyBQYWdlUmVzb2x2ZXIodGhpcy5jb25maWdTZXJ2aWNlLCBwYWdlKTtcblx0XHR0aGlzLmV2ZW50cyQubmV4dChwYWdlUmVzb2x2ZXIpO1xuXHRcdHJldHVybiBwYWdlUmVzb2x2ZXI7XG5cdH1cblxuXHRyZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0aWYgKHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXMuaWQpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeUlkKHJvdXRlLnBhcmFtcy5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBhdGhzID0gcm91dGUudXJsLmZpbHRlcih4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pLm1hcCh4ID0+IHtcblx0XHRcdFx0cmV0dXJuIHgucGF0aDtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3Qgc2x1ZyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvU2x1ZyhwYXRocykuam9pbignLycpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UGFnZUJ5U2x1ZyhzbHVnKTtcblx0XHR9XG5cdH1cblxuXHRnZXRQYWdlQnlJZChpZDogbnVtYmVyIHwgc3RyaW5nKTogT2JzZXJ2YWJsZTxQYWdlUmVzb2x2ZXI+IHtcblx0XHQvLyBjb25zb2xlLmxvZygnUGFnZVJlc29sdmVyU2VydmljZS5nZXRQYWdlQnlJZCcsIGlkKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRQYWdlQnlJZChpZCkucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxuXHRnZXRQYWdlQnlTbHVnKHNsdWc6IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5U2x1ZycsIHNsdWcpO1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTZXJ2aWNlLmdldFN0YXRlUGFnZUJ5U2x1ZyhzbHVnKS5waXBlKFxuXHRcdFx0bWFwKHBhZ2UgPT4gdGhpcy5wYWdlVG9QYWdlUmVzb2x2ZXIocGFnZSkpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=