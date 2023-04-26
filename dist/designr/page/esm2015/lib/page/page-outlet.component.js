/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.router.routeReuseStrategy.shouldReuseRoute = (/**
         * @return {?}
         */
        () => {
            return false;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQW1DLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsY0FBYyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsbUJBQW1COzs7Ozs7OztJQUszRCxZQUNTLE1BQWMsRUFDZCxLQUFxQixFQUNyQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsV0FBd0I7UUFFaEMsS0FBSyxFQUFFLENBQUM7UUFOQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdoQyxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0I7OztRQUFHLEdBQUcsRUFBRTtZQUN0RCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQSxDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0M7UUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Y0FDekUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJOztjQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNOztjQUNqQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXOztZQUM3QyxTQUFTLEdBQVEscUJBQXFCO1FBQzFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7O2tCQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJOztrQkFDN0IsT0FBTyxHQUFvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO1lBQ2pILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7a0JBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQzs7a0JBQzdELFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtZQUN0QyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN6QixRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUNuQyxJQUFJLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDL0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLElBQUksRUFBRTs7c0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTs7c0JBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFDdEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUztxQkFDM0UsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1NBQ0QsQ0FBQTs7V0FFRTtJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFuRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUscUNBQXFDO2FBQy9DOzs7O1lBVGdELE1BQU07WUFBOUMsY0FBYztZQURlLHdCQUF3QjtZQUVoQyxZQUFZO1lBR2pDLFdBQVc7OzsrQkFTbEIsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7OztJQUEvQywrQ0FBb0Y7Ozs7O0lBQ3BGLDJDQUFrRDs7Ozs7SUFHakQscUNBQXNCOzs7OztJQUN0QixvQ0FBNkI7Ozs7O0lBQzdCLHVEQUEwRDs7Ozs7SUFDMUQsMkNBQWtDOzs7OztJQUNsQywwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50LCBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwYWdlLW91dGxldCcsXHJcblx0dGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI291dGxldD48L25nLXRlbXBsYXRlPicsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZU91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8UGFnZUNvbXBvbmVudD47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHQvLyAhISEga2VlcCAtPiBBdm9pZCBQYWdlT3V0bGV0IFJvdXRlIENhY2hpbmcgZm9yIGRpZmZlcmVudCByb3V0ZXNcclxuXHRcdHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnNldFNuYXBzaG90KHRoaXMucm91dGUuc25hcHNob3QpO1xyXG5cdH1cclxuXHJcblx0c2V0U25hcHNob3Qoc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB2b2lkIHtcclxuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5wYXJhbXMpO1xyXG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucXVlcnlQYXJhbXMpO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHNuYXBzaG90LmRhdGE7XHJcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5wYXJhbXM7XHJcblx0XHRjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zO1xyXG5cdFx0bGV0IGNvbXBvbmVudDogYW55ID0gUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xyXG5cdFx0aWYgKGRhdGEucGFnZVJlc29sdmVyKSB7XHJcblx0XHRcdGNvbXBvbmVudCA9IGRhdGEucGFnZVJlc29sdmVyLmNvbXBvbmVudDtcclxuXHRcdFx0Y29uc3QgcGFnZSA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2U7XHJcblx0XHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG5cdFx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcclxuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcblx0XHRcdGluc3RhbmNlLnBhZ2UgPSBwYWdlO1xyXG5cdFx0XHRpbnN0YW5jZS5wYXJhbXMgPSBwYXJhbXM7XHJcblx0XHRcdGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXM7XHJcblx0XHRcdGlmICh0eXBlb2YgaW5zdGFuY2VbJ1BhZ2VJbml0J10gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRpbnN0YW5jZVsnUGFnZUluaXQnXSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuY29tcG9uZW50UmVmID0gY29tcG9uZW50UmVmO1xyXG5cdFx0XHRpZiAocGFnZSkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMucm91dGVyLmNvbmZpZy5zbGljZSgpO1xyXG5cdFx0XHRcdGNvbnN0IHNsdWcgPSBwYWdlLnNsdWc7XHJcblx0XHRcdFx0aWYgKHNsdWcpIHtcclxuXHRcdFx0XHRcdGNvbmZpZy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0cGF0aDogc2x1Zy5pbmRleE9mKCcvJykgPT09IDAgPyBzbHVnLnN1YnN0cigxKSA6IHNsdWcsIGNvbXBvbmVudDogY29tcG9uZW50LFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5yZXNldENvbmZpZyhjb25maWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEocGFnZSk7XHJcblx0XHRcdH1cclxuXHRcdH0vKiBlbHNlIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VPdXRsZXRDb21wb25lbnQuc2V0U25hcHNob3QgNDA0JywgZGF0YSk7XHJcblx0XHR9Ki9cclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19