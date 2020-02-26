import { isPlatformBrowser } from '@angular/common';
import { Component, Injector, Input, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { Observable } from 'rxjs';
import { Page } from './page';
import * as i0 from "@angular/core";
export class PageComponent extends DisposableComponent {
    constructor(injector) {
        super();
        this.injector = injector;
        this.scrollToTop();
    }
    get platformId() {
        return this.injector.get(PLATFORM_ID);
    }
    get routeService() {
        return this.injector.get(RouteService);
    }
    get router() {
        return this.injector.get(Router);
    }
    // !!! Scroll to top on page change
    scrollToTop() {
        // !!! PLATFORM_ID dependancy manually activated
        // const platformId: string = RouteService.injector.get(PLATFORM_ID) as string;
        if (isPlatformBrowser(this.platformId)) {
            // !!! Router dependancy manually activated
            // const router = RouteService.injector.get(Router);
            this.router.events.subscribe((e) => {
                if (!(e instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
        }
    }
    getId() {
        return this.routeService.getId() || (this.page ? this.page.id : 0);
    }
    getSlug() {
        return this.routeService.getSlug() || (this.page ? this.page.slug : '');
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(i0.ɵɵdirectiveInject(i0.Injector)); };
PageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageComponent, selectors: [["core-page"]], inputs: { page: "page", params: "params", queryParams: "queryParams" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "page"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, "Page not found!");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageComponent, [{
        type: Component,
        args: [{
                selector: 'core-page',
                template: `<div class="page">Page not found!</div>`,
            }]
    }], function () { return [{ type: i0.Injector }]; }, { page: [{
            type: Input
        }], params: [{
            type: Input
        }], queryParams: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wYWdlLyIsInNvdXJjZXMiOlsibGliL3BhZ2UvcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOztBQVU5QixNQUFNLE9BQU8sYUFBYyxTQUFRLG1CQUFtQjtJQWtCckQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLEVBQUUsQ0FBQztRQUZFLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHNUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFqQkQsSUFBSSxVQUFVO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQVcsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBU0QsbUNBQW1DO0lBQzNCLFdBQVc7UUFDbEIsZ0RBQWdEO1FBQ2hELCtFQUErRTtRQUMvRSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywyQ0FBMkM7WUFDM0Msb0RBQW9EO1lBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksYUFBYSxDQUFDLEVBQUU7b0JBQ2xDLE9BQU87aUJBQ1A7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7OzBFQS9DVyxhQUFhO2tEQUFiLGFBQWE7UUFGZCw4QkFBa0I7UUFBQSwrQkFBZTtRQUFBLGlCQUFNOztrREFFdEMsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSx5Q0FBeUM7YUFDbkQ7O2tCQUdDLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIElucHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlSW5pdCB7XG5cdFBhZ2VJbml0KCk6IHZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtcGFnZScsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBhZ2VcIj5QYWdlIG5vdCBmb3VuZCE8L2Rpdj5gLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cblx0QElucHV0KCkgcGFnZTogUGFnZTtcblx0QElucHV0KCkgcGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cdEBJbnB1dCgpIHF1ZXJ5UGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz47XG5cblx0Z2V0IHBsYXRmb3JtSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpIGFzIHN0cmluZztcblx0fVxuXG5cdGdldCByb3V0ZVNlcnZpY2UoKTogUm91dGVTZXJ2aWNlIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVTZXJ2aWNlKTtcblx0fVxuXG5cdGdldCByb3V0ZXIoKTogUm91dGVyIHtcblx0XHRyZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zY3JvbGxUb1RvcCgpO1xuXHR9XG5cblx0Ly8gISEhIFNjcm9sbCB0byB0b3Agb24gcGFnZSBjaGFuZ2Vcblx0cHJpdmF0ZSBzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHQvLyAhISEgUExBVEZPUk1fSUQgZGVwZW5kYW5jeSBtYW51YWxseSBhY3RpdmF0ZWRcblx0XHQvLyBjb25zdCBwbGF0Zm9ybUlkOiBzdHJpbmcgPSBSb3V0ZVNlcnZpY2UuaW5qZWN0b3IuZ2V0KFBMQVRGT1JNX0lEKSBhcyBzdHJpbmc7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdC8vICEhISBSb3V0ZXIgZGVwZW5kYW5jeSBtYW51YWxseSBhY3RpdmF0ZWRcblx0XHRcdC8vIGNvbnN0IHJvdXRlciA9IFJvdXRlU2VydmljZS5pbmplY3Rvci5nZXQoUm91dGVyKTtcblx0XHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0aWYgKCEoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldElkKCk6IG51bWJlciB8IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucm91dGVTZXJ2aWNlLmdldElkKCkgfHwgKHRoaXMucGFnZSA/IHRoaXMucGFnZS5pZCA6IDApO1xuXHR9XG5cblx0Z2V0U2x1ZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnJvdXRlU2VydmljZS5nZXRTbHVnKCkgfHwgKHRoaXMucGFnZSA/IHRoaXMucGFnZS5zbHVnIDogJycpO1xuXHR9XG5cbn1cbiJdfQ==