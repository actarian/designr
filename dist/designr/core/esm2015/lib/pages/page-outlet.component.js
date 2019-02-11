/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
export class PageOutletComponent extends DisposableComponent {
    /**
     * @param {?} viewContainerRef
     * @param {?} router
     * @param {?} route
     * @param {?} componentFactoryResolver
     * @param {?} routeService
     * @param {?} pageService
     */
    constructor(viewContainerRef, router, route, componentFactoryResolver, routeService, pageService) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.routeService = routeService;
        this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
        this.setSnapshot(this.route.snapshot);
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    setSnapshot(snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        /** @type {?} */
        const data = snapshot.data;
        /** @type {?} */
        const params = this.routeService.params;
        /** @type {?} */
        const queryParams = this.routeService.queryParams;
        /** @type {?} */
        let component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            this.routeService.page = data.pageResolver.page;
            /** @type {?} */
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.factory = factory;
            this.viewContainerRef.clear();
            /** @type {?} */
            const componentRef = this.viewContainerRef.createComponent(this.factory);
            /** @type {?} */
            const instance = componentRef.instance;
            instance.page = data.pageResolver.page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            if (data.pageResolver.page) {
                /** @type {?} */
                const config = this.router.config.slice();
                /** @type {?} */
                const slug = data.pageResolver.page.slug;
                if (slug) {
                    config.push({
                        path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: data.pageResolver.component,
                    });
                    this.router.resetConfig(config);
                }
                this.pageService.addOrUpdateMetaData(this.routeService.page);
            }
        } /* else {
            // console.log('PageOutletComponent.setSnapshot 404', data);
        }*/
    }
}
PageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-outlet',
                template: ''
            }] }
];
/** @nocollapse */
PageOutletComponent.ctorParameters = () => [
    { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: Router },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: RouteService },
    { type: PageService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.factory;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.routeService;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.pageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsY0FBYyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxtQkFBbUI7Ozs7Ozs7OztJQUkzRCxZQUNtQyxnQkFBa0MsRUFDNUQsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixXQUF3QjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQVAwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVELFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBR2hDLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUN0RCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxX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RDs7Ozs7SUFDMUQsMkNBQWtDOzs7OztJQUNsQywwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlU2VydmljZSB9IGZyb20gJy4uL3JvdXRlcy9yb3V0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLW91dGxldCcsXG5cdHRlbXBsYXRlOiAnJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoVmlld0NvbnRhaW5lclJlZikgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdC8vICEhISBrZWVwIC0+IEF2b2lkIFBhZ2VPdXRsZXQgUm91dGUgQ2FjaGluZyBmb3IgZGlmZmVyZW50IHJvdXRlc1xuXHRcdHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0dGhpcy5zZXRTbmFwc2hvdCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcblx0fVxuXG5cdHNldFNuYXBzaG90KHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnBhcmFtcyk7XG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucXVlcnlQYXJhbXMpO1xuXHRcdGNvbnN0IGRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcztcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zO1xuXHRcdGxldCBjb21wb25lbnQ6IGFueSA9IFBhZ2VOb3RGb3VuZENvbXBvbmVudDtcblx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIpIHtcblx0XHRcdGNvbXBvbmVudCA9IGRhdGEucGFnZVJlc29sdmVyLmNvbXBvbmVudDtcblx0XHRcdHRoaXMucm91dGVTZXJ2aWNlLnBhZ2UgPSBkYXRhLnBhZ2VSZXNvbHZlci5wYWdlO1xuXHRcdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0XHR0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuXHRcdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRcdGluc3RhbmNlLnBhZ2UgPSBkYXRhLnBhZ2VSZXNvbHZlci5wYWdlO1xuXHRcdFx0aW5zdGFuY2UucGFyYW1zID0gcGFyYW1zO1xuXHRcdFx0aW5zdGFuY2UucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcztcblx0XHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1BhZ2VJbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2VbJ1BhZ2VJbml0J10oKTtcblx0XHRcdH1cblx0XHRcdGlmIChkYXRhLnBhZ2VSZXNvbHZlci5wYWdlKSB7XG5cdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMucm91dGVyLmNvbmZpZy5zbGljZSgpO1xuXHRcdFx0XHRjb25zdCBzbHVnID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZS5zbHVnO1xuXHRcdFx0XHRpZiAoc2x1Zykge1xuXHRcdFx0XHRcdGNvbmZpZy5wdXNoKHtcblx0XHRcdFx0XHRcdHBhdGg6IHNsdWcuaW5kZXhPZignLycpID09PSAwID8gc2x1Zy5zdWJzdHIoMSkgOiBzbHVnLCBjb21wb25lbnQ6IGRhdGEucGFnZVJlc29sdmVyLmNvbXBvbmVudCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5yZXNldENvbmZpZyhjb25maWcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhRGF0YSh0aGlzLnJvdXRlU2VydmljZS5wYWdlKTtcblx0XHRcdH1cblx0XHR9LyogZWxzZSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZU91dGxldENvbXBvbmVudC5zZXRTbmFwc2hvdCA0MDQnLCBkYXRhKTtcblx0XHR9Ki9cblx0fVxuXG59XG4iXX0=