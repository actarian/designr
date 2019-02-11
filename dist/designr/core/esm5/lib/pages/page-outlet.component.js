/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, Inject, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent } from '../disposable/disposable.component';
import { RouteService } from '../routes/route.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLGNBQWMsRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUt5QywrQ0FBbUI7SUFJM0QsNkJBQ21DLGdCQUFrQyxFQUM1RCxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLFdBQXdCO1FBTmpDLFlBUUMsaUJBQU8sU0FNUDtRQWJrQyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzVELFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBR2hDLGtFQUFrRTtRQUNsRSxLQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixHQUFHO1lBQ2pELE9BQU8sS0FBSyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFB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Q3BFLHFDQUFzQjs7Ozs7SUFDdEIsb0NBQTZCOzs7OztJQUM3Qix1REFBMEQ7Ozs7O0lBQzFELDJDQUFrQzs7Ozs7SUFDbEMsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZVNlcnZpY2UgfSBmcm9tICcuLi9yb3V0ZXMvcm91dGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJycsXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZU91dGxldENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdHByaXZhdGUgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50PjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VTZXJ2aWNlOiBQYWdlU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyAhISEga2VlcCAtPiBBdm9pZCBQYWdlT3V0bGV0IFJvdXRlIENhY2hpbmcgZm9yIGRpZmZlcmVudCByb3V0ZXNcblx0XHR0aGlzLnJvdXRlci5yb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0U25hcHNob3QodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG5cdH1cblxuXHRzZXRTbmFwc2hvdChzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5wYXJhbXMpO1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnF1ZXJ5UGFyYW1zKTtcblx0XHRjb25zdCBkYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5wYXJhbXM7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcztcblx0XHRsZXQgY29tcG9uZW50OiBhbnkgPSBQYWdlTm90Rm91bmRDb21wb25lbnQ7XG5cdFx0aWYgKGRhdGEucGFnZVJlc29sdmVyKSB7XG5cdFx0XHRjb21wb25lbnQgPSBkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQ7XG5cdFx0XHR0aGlzLnJvdXRlU2VydmljZS5wYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcblx0XHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdFx0dGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcblx0XHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0XHRpbnN0YW5jZS5wYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcblx0XHRcdGluc3RhbmNlLnBhcmFtcyA9IHBhcmFtcztcblx0XHRcdGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXM7XG5cdFx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydQYWdlSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlWydQYWdlSW5pdCddKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIucGFnZSkge1xuXHRcdFx0XHRjb25zdCBjb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuc2xpY2UoKTtcblx0XHRcdFx0Y29uc3Qgc2x1ZyA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2Uuc2x1Zztcblx0XHRcdFx0aWYgKHNsdWcpIHtcblx0XHRcdFx0XHRjb25maWcucHVzaCh7XG5cdFx0XHRcdFx0XHRwYXRoOiBzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCA/IHNsdWcuc3Vic3RyKDEpIDogc2x1ZywgY29tcG9uZW50OiBkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIucmVzZXRDb25maWcoY29uZmlnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEodGhpcy5yb3V0ZVNlcnZpY2UucGFnZSk7XG5cdFx0XHR9XG5cdFx0fS8qIGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VPdXRsZXRDb21wb25lbnQuc2V0U25hcHNob3QgNDA0JywgZGF0YSk7XG5cdFx0fSovXG5cdH1cblxufVxuIl19