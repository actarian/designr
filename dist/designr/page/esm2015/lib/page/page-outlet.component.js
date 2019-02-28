/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
export class PageOutletComponent extends DisposableComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} componentFactoryResolver
     * @param {?} routeService
     * @param {?} pageService
     */
    constructor(router, route, componentFactoryResolver, routeService, pageService) {
        super();
        this.router = router;
        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.routeService = routeService;
        this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            /** @type {?} */
            const page = data.pageResolver.page;
            /** @type {?} */
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            /** @type {?} */
            const componentRef = this.viewContainerRef.createComponent(factory);
            /** @type {?} */
            const instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                /** @type {?} */
                const config = this.router.config.slice();
                /** @type {?} */
                const slug = page.slug;
                if (slug) {
                    config.push({
                        path: slug.indexOf('/') === 0 ? slug.substr(1) : slug, component: component,
                    });
                    this.router.resetConfig(config);
                }
                this.pageService.addOrUpdateMetaData(page);
            }
        } /* else {
            // console.log('PageOutletComponent.setSnapshot 404', data);
        }*/
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
PageOutletComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-outlet',
                template: '<ng-template #outlet></ng-template>'
            }] }
];
/** @nocollapse */
PageOutletComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: RouteService },
    { type: PageService }
];
PageOutletComponent.propDecorators = {
    viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    PageOutletComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    PageOutletComponent.prototype.componentRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQW1DLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsY0FBYyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsbUJBQW1COzs7Ozs7OztJQUszRCxZQUNTLE1BQWMsRUFDZCxLQUFxQixFQUNyQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsV0FBd0I7UUFFaEMsS0FBSyxFQUFFLENBQUM7UUFOQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdoQyxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFnQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztjQUN6RSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUk7O2NBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07O2NBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7O1lBQzdDLFNBQVMsR0FBUSxxQkFBcUI7UUFDMUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7a0JBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7O2tCQUM3QixPQUFPLEdBQW9DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7WUFDakgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztrQkFDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDOztrQkFDN0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRO1lBQ3RDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ25DLElBQUksT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLElBQUksSUFBSSxFQUFFOztzQkFDSCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFOztzQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUN0QixJQUFJLElBQUksRUFBRTtvQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTO3FCQUMzRSxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2hDO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0M7U0FDRCxDQUFBOztXQUVFO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQW5FRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxxQ0FBcUM7YUFDL0M7Ozs7WUFUZ0QsTUFBTTtZQUE5QyxjQUFjO1lBRGUsd0JBQXdCO1lBRWhDLFlBQVk7WUFHakMsV0FBVzs7OytCQVNsQixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBQS9DLCtDQUFvRjs7Ozs7SUFDcEYsMkNBQWtEOzs7OztJQUdqRCxxQ0FBc0I7Ozs7O0lBQ3RCLG9DQUE2Qjs7Ozs7SUFDN0IsdURBQTBEOzs7OztJQUMxRCwyQ0FBa0M7Ozs7O0lBQ2xDLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxQYWdlQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyAhISEga2VlcCAtPiBBdm9pZCBQYWdlT3V0bGV0IFJvdXRlIENhY2hpbmcgZm9yIGRpZmZlcmVudCByb3V0ZXNcblx0XHR0aGlzLnJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZXRTbmFwc2hvdCh0aGlzLnJvdXRlLnNuYXBzaG90KTtcblx0fVxuXG5cdHNldFNuYXBzaG90KHNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogdm9pZCB7XG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnBhcmFtcyk7XG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucXVlcnlQYXJhbXMpO1xuXHRcdGNvbnN0IGRhdGEgPSBzbmFwc2hvdC5kYXRhO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcztcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zO1xuXHRcdGxldCBjb21wb25lbnQ6IGFueSA9IFBhZ2VOb3RGb3VuZENvbXBvbmVudDtcblx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIpIHtcblx0XHRcdGNvbXBvbmVudCA9IGRhdGEucGFnZVJlc29sdmVyLmNvbXBvbmVudDtcblx0XHRcdGNvbnN0IHBhZ2UgPSBkYXRhLnBhZ2VSZXNvbHZlci5wYWdlO1xuXHRcdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRcdGluc3RhbmNlLnBhZ2UgPSBwYWdlO1xuXHRcdFx0aW5zdGFuY2UucGFyYW1zID0gcGFyYW1zO1xuXHRcdFx0aW5zdGFuY2UucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcztcblx0XHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1BhZ2VJbml0J10gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aW5zdGFuY2VbJ1BhZ2VJbml0J10oKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0Y29uc3QgY29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLnNsaWNlKCk7XG5cdFx0XHRcdGNvbnN0IHNsdWcgPSBwYWdlLnNsdWc7XG5cdFx0XHRcdGlmIChzbHVnKSB7XG5cdFx0XHRcdFx0Y29uZmlnLnB1c2goe1xuXHRcdFx0XHRcdFx0cGF0aDogc2x1Zy5pbmRleE9mKCcvJykgPT09IDAgPyBzbHVnLnN1YnN0cigxKSA6IHNsdWcsIGNvbXBvbmVudDogY29tcG9uZW50LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGNvbmZpZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGFEYXRhKHBhZ2UpO1xuXHRcdFx0fVxuXHRcdH0vKiBlbHNlIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LnNldFNuYXBzaG90IDQwNCcsIGRhdGEpO1xuXHRcdH0qL1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuXHR9XG5cbn1cbiJdfQ==