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
    PageResolverService.prototype.pageToPageResolver = function (page) {
        var pageResolver = new PageResolver(this.configService, page);
        this.events$.next(pageResolver);
        return pageResolver;
    };
    PageResolverService.prototype.resolve = function (route, state) {
        if (route.params && route.params.id) {
            return this.getPageById(route.params.id);
        }
        else {
            var paths = route.url.filter(function (x) {
                return x.path;
            }).map(function (x) {
                return x.path;
            });
            var slug = this.routeService.toSlug(paths).join('/');
            return this.getPageBySlug(slug);
        }
    };
    PageResolverService.prototype.getPageById = function (id) {
        var _this = this;
        // console.log('PageResolverService.getPageById', id);
        return this.pageService.getPageById(id).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.prototype.getPageBySlug = function (slug) {
        var _this = this;
        // console.log('PageResolverService.getPageBySlug', slug);
        return this.pageService.getStatePageBySlug(slug).pipe(map(function (page) { return _this.pageToPageResolver(page); }));
    };
    PageResolverService.ɵfac = function PageResolverService_Factory(t) { return new (t || PageResolverService)(i0.ɵɵinject(i1.ConfigService), i0.ɵɵinject(i2.PageService), i0.ɵɵinject(i3.RouteService)); };
    PageResolverService.ɵprov = i0.ɵɵdefineInjectable({ token: PageResolverService, factory: PageResolverService.ɵfac, providedIn: 'root' });
    return PageResolverService;
}());
export { PageResolverService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageResolverService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConfigService }, { type: i2.PageService }, { type: i3.RouteService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTdDO0lBT0MsNkJBQ1MsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsWUFBMEI7UUFGMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMNUIsWUFBTyxHQUFrQyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQztJQU1wRixDQUFDO0lBRUwsZ0RBQWtCLEdBQWxCLFVBQW1CLElBQVU7UUFDNUIsSUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRUQscUNBQU8sR0FBUCxVQUFRLEtBQTZCLEVBQUUsS0FBMEI7UUFDaEUsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxFQUFtQjtRQUEvQixpQkFLQztRQUpBLHNEQUFzRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLElBQVk7UUFBMUIsaUJBS0M7UUFKQSwwREFBMEQ7UUFDMUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDcEQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDOzBGQTFDVyxtQkFBbUI7K0RBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRm5CLE1BQU07OEJBWm5CO0NBMERDLEFBL0NELElBK0NDO1NBNUNZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IFBhZ2VSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVJlc29sdmVyU2VydmljZSBpbXBsZW1lbnRzIFJlc29sdmU8UGFnZVJlc29sdmVyPiB7XG5cblx0cHVibGljIGV2ZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQYWdlUmVzb2x2ZXI+KG51bGwpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHQpIHsgfVxuXG5cdHBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZVJlc29sdmVyIHtcblx0XHRjb25zdCBwYWdlUmVzb2x2ZXIgPSBuZXcgUGFnZVJlc29sdmVyKHRoaXMuY29uZmlnU2VydmljZSwgcGFnZSk7XG5cdFx0dGhpcy5ldmVudHMkLm5leHQocGFnZVJlc29sdmVyKTtcblx0XHRyZXR1cm4gcGFnZVJlc29sdmVyO1xuXHR9XG5cblx0cmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdGlmIChyb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zLmlkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRQYWdlQnlJZChyb3V0ZS5wYXJhbXMuaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXRocyA9IHJvdXRlLnVybC5maWx0ZXIoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KS5tYXAoeCA9PiB7XG5cdFx0XHRcdHJldHVybiB4LnBhdGg7XG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IHNsdWcgPSB0aGlzLnJvdXRlU2VydmljZS50b1NsdWcocGF0aHMpLmpvaW4oJy8nKTtcblx0XHRcdHJldHVybiB0aGlzLmdldFBhZ2VCeVNsdWcoc2x1Zyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0UGFnZUJ5SWQoaWQ6IG51bWJlciB8IHN0cmluZyk6IE9ic2VydmFibGU8UGFnZVJlc29sdmVyPiB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VSZXNvbHZlclNlcnZpY2UuZ2V0UGFnZUJ5SWQnLCBpZCk7XG5cdFx0cmV0dXJuIHRoaXMucGFnZVNlcnZpY2UuZ2V0UGFnZUJ5SWQoaWQpLnBpcGUoXG5cdFx0XHRtYXAocGFnZSA9PiB0aGlzLnBhZ2VUb1BhZ2VSZXNvbHZlcihwYWdlKSlcblx0XHQpO1xuXHR9XG5cblx0Z2V0UGFnZUJ5U2x1ZyhzbHVnOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBhZ2VSZXNvbHZlcj4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlUmVzb2x2ZXJTZXJ2aWNlLmdldFBhZ2VCeVNsdWcnLCBzbHVnKTtcblx0XHRyZXR1cm4gdGhpcy5wYWdlU2VydmljZS5nZXRTdGF0ZVBhZ2VCeVNsdWcoc2x1ZykucGlwZShcblx0XHRcdG1hcChwYWdlID0+IHRoaXMucGFnZVRvUGFnZVJlc29sdmVyKHBhZ2UpKVxuXHRcdCk7XG5cdH1cblxufVxuIl19