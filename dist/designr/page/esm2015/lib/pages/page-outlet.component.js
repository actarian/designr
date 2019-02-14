/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsY0FBYyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsbUJBQW1COzs7Ozs7Ozs7SUFJM0QsWUFDbUMsZ0JBQWtDLEVBQzVELE1BQWMsRUFDZCxLQUFxQixFQUNyQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsV0FBd0I7UUFFaEMsS0FBSyxFQUFFLENBQUM7UUFQMEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1RCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdoQyxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxD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QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3QsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJycsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdHByaXZhdGUgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyAhISEga2VlcCAtPiBBdm9pZCBQYWdlT3V0bGV0IFJvdXRlIENhY2hpbmcgZm9yIGRpZmZlcmVudCByb3V0ZXNcblx0XHR0aGlzLnJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0U25hcHNob3QodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG5cdH1cblxuXHRzZXRTbmFwc2hvdChzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5wYXJhbXMpO1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnF1ZXJ5UGFyYW1zKTtcblx0XHRjb25zdCBkYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5wYXJhbXM7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcztcblx0XHRsZXQgY29tcG9uZW50OiBhbnkgPSBQYWdlTm90Rm91bmRDb21wb25lbnQ7XG5cdFx0aWYgKGRhdGEucGFnZVJlc29sdmVyKSB7XG5cdFx0XHRjb21wb25lbnQgPSBkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQ7XG5cdFx0XHR0aGlzLnJvdXRlU2VydmljZS5wYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcblx0XHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdFx0dGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcblx0XHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0XHRpbnN0YW5jZS5wYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcblx0XHRcdGluc3RhbmNlLnBhcmFtcyA9IHBhcmFtcztcblx0XHRcdGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXM7XG5cdFx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydQYWdlSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlWydQYWdlSW5pdCddKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIucGFnZSkge1xuXHRcdFx0XHRjb25zdCBjb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuc2xpY2UoKTtcblx0XHRcdFx0Y29uc3Qgc2x1ZyA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2Uuc2x1Zztcblx0XHRcdFx0aWYgKHNsdWcpIHtcblx0XHRcdFx0XHRjb25maWcucHVzaCh7XG5cdFx0XHRcdFx0XHRwYXRoOiBzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCA/IHNsdWcuc3Vic3RyKDEpIDogc2x1ZywgY29tcG9uZW50OiBkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIucmVzZXRDb25maWcoY29uZmlnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEodGhpcy5yb3V0ZVNlcnZpY2UucGFnZSk7XG5cdFx0XHR9XG5cdFx0fS8qIGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VPdXRsZXRDb21wb25lbnQuc2V0U25hcHNob3QgNDA0JywgZGF0YSk7XG5cdFx0fSovXG5cdH1cblxufVxuIl19