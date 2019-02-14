/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
var PageOutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageOutletComponent, _super);
    function PageOutletComponent(viewContainerRef, router, route, componentFactoryResolver, routeService, pageService) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.router = router;
        _this.route = route;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.routeService = routeService;
        _this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        _this.setSnapshot(_this.route.snapshot);
        return _this;
    }
    /**
     * @param {?} snapshot
     * @return {?}
     */
    PageOutletComponent.prototype.setSnapshot = /**
     * @param {?} snapshot
     * @return {?}
     */
    function (snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        /** @type {?} */
        var data = snapshot.data;
        /** @type {?} */
        var params = this.routeService.params;
        /** @type {?} */
        var queryParams = this.routeService.queryParams;
        /** @type {?} */
        var component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            this.routeService.page = data.pageResolver.page;
            /** @type {?} */
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.factory = factory;
            this.viewContainerRef.clear();
            /** @type {?} */
            var componentRef = this.viewContainerRef.createComponent(this.factory);
            /** @type {?} */
            var instance = componentRef.instance;
            instance.page = data.pageResolver.page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            if (data.pageResolver.page) {
                /** @type {?} */
                var config = this.router.config.slice();
                /** @type {?} */
                var slug = data.pageResolver.page.slug;
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
    };
    PageOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-outlet',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    PageOutletComponent.ctorParameters = function () { return [
        { type: ViewContainerRef, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
        { type: Router },
        { type: ActivatedRoute },
        { type: ComponentFactoryResolver },
        { type: RouteService },
        { type: PageService }
    ]; };
    return PageOutletComponent;
}(DisposableComponent));
export { PageOutletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLGNBQWMsRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFLeUMsK0NBQW1CO0lBSTNELDZCQUNtQyxnQkFBa0MsRUFDNUQsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixXQUF3QjtRQU5qQyxZQVFDLGlCQUFPLFNBTVA7UUFia0Msc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUM1RCxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdoQyxrRUFBa0U7UUFDbEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FBRztZQUNqRCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Ozs7SUFFRCx5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QzdCLHVEQUEwRDs7Ozs7SUFDMUQsMkNBQWtDOzs7OztJQUNsQywwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQsIFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhZ2Utb3V0bGV0Jyxcblx0dGVtcGxhdGU6ICcnLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChWaWV3Q29udGFpbmVyUmVmKSBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Ly8gISEhIGtlZXAgLT4gQXZvaWQgUGFnZU91dGxldCBSb3V0ZSBDYWNoaW5nIGZvciBkaWZmZXJlbnQgcm91dGVzXG5cdFx0dGhpcy5yb3V0ZXIucm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHR0aGlzLnNldFNuYXBzaG90KHRoaXMucm91dGUuc25hcHNob3QpO1xuXHR9XG5cblx0c2V0U25hcHNob3Qoc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5wYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucGFyYW1zKTtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5xdWVyeVBhcmFtcyk7XG5cdFx0Y29uc3QgZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0Y29uc3QgcGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXM7XG5cdFx0bGV0IGNvbXBvbmVudDogYW55ID0gUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xuXHRcdGlmIChkYXRhLnBhZ2VSZXNvbHZlcikge1xuXHRcdFx0Y29tcG9uZW50ID0gZGF0YS5wYWdlUmVzb2x2ZXIuY29tcG9uZW50O1xuXHRcdFx0dGhpcy5yb3V0ZVNlcnZpY2UucGFnZSA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2U7XG5cdFx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHRcdHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdFx0XHR0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodGhpcy5mYWN0b3J5KTtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdFx0aW5zdGFuY2UucGFnZSA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2U7XG5cdFx0XHRpbnN0YW5jZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0XHRpbnN0YW5jZS5xdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zO1xuXHRcdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnUGFnZUluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZVsnUGFnZUluaXQnXSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRhdGEucGFnZVJlc29sdmVyLnBhZ2UpIHtcblx0XHRcdFx0Y29uc3QgY29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLnNsaWNlKCk7XG5cdFx0XHRcdGNvbnN0IHNsdWcgPSBkYXRhLnBhZ2VSZXNvbHZlci5wYWdlLnNsdWc7XG5cdFx0XHRcdGlmIChzbHVnKSB7XG5cdFx0XHRcdFx0Y29uZmlnLnB1c2goe1xuXHRcdFx0XHRcdFx0cGF0aDogc2x1Zy5pbmRleE9mKCcvJykgPT09IDAgPyBzbHVnLnN1YnN0cigxKSA6IHNsdWcsIGNvbXBvbmVudDogZGF0YS5wYWdlUmVzb2x2ZXIuY29tcG9uZW50LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGNvbmZpZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5wYWdlU2VydmljZS5hZGRPclVwZGF0ZU1ldGFEYXRhKHRoaXMucm91dGVTZXJ2aWNlLnBhZ2UpO1xuXHRcdFx0fVxuXHRcdH0vKiBlbHNlIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdQYWdlT3V0bGV0Q29tcG9uZW50LnNldFNuYXBzaG90IDQwNCcsIGRhdGEpO1xuXHRcdH0qL1xuXHR9XG5cbn1cbiJdfQ==