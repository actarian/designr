/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
var PageOutletComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageOutletComponent, _super);
    function PageOutletComponent(router, route, componentFactoryResolver, routeService, pageService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.routeService = routeService;
        _this.pageService = pageService;
        // !!! keep -> Avoid PageOutlet Route Caching for different routes
        _this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        return _this;
    }
    /**
     * @return {?}
     */
    PageOutletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setSnapshot(this.route.snapshot);
    };
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
            /** @type {?} */
            var page = data.pageResolver.page;
            /** @type {?} */
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            /** @type {?} */
            var componentRef = this.viewContainerRef.createComponent(factory);
            /** @type {?} */
            var instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                /** @type {?} */
                var config = this.router.config.slice();
                /** @type {?} */
                var slug = page.slug;
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
    };
    /**
     * @return {?}
     */
    PageOutletComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.componentRef.destroy();
    };
    PageOutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-outlet',
                    template: '<ng-template #outlet></ng-template>'
                }] }
    ];
    /** @nocollapse */
    PageOutletComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: ComponentFactoryResolver },
        { type: RouteService },
        { type: PageService }
    ]; };
    PageOutletComponent.propDecorators = {
        viewContainerRef: [{ type: ViewChild, args: ['outlet', { read: ViewContainerRef },] }]
    };
    return PageOutletComponent;
}(DisposableComponent));
export { PageOutletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFtQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEosT0FBTyxFQUFFLGNBQWMsRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFLeUMsK0NBQW1CO0lBSzNELDZCQUNTLE1BQWMsRUFDZCxLQUFxQixFQUNyQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsV0FBd0I7UUFMakMsWUFPQyxpQkFBTyxTQUtQO1FBWFEsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFHaEMsa0VBQWtFO1FBQ2xFLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBQUc7WUFDakQsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUM7O0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFB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OlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50LCBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLW91dGxldCcsXG5cdHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNvdXRsZXQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFBhZ2VDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdC8vICEhISBrZWVwIC0+IEF2b2lkIFBhZ2VPdXRsZXQgUm91dGUgQ2FjaGluZyBmb3IgZGlmZmVyZW50IHJvdXRlc1xuXHRcdHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldFNuYXBzaG90KHRoaXMucm91dGUuc25hcHNob3QpO1xuXHR9XG5cblx0c2V0U25hcHNob3Qoc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5wYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucGFyYW1zKTtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5xdWVyeVBhcmFtcyk7XG5cdFx0Y29uc3QgZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0Y29uc3QgcGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXM7XG5cdFx0bGV0IGNvbXBvbmVudDogYW55ID0gUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xuXHRcdGlmIChkYXRhLnBhZ2VSZXNvbHZlcikge1xuXHRcdFx0Y29tcG9uZW50ID0gZGF0YS5wYWdlUmVzb2x2ZXIuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgcGFnZSA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2U7XG5cdFx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdFx0aW5zdGFuY2UucGFnZSA9IHBhZ2U7XG5cdFx0XHRpbnN0YW5jZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0XHRpbnN0YW5jZS5xdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zO1xuXHRcdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnUGFnZUluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZVsnUGFnZUluaXQnXSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRjb25zdCBjb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuc2xpY2UoKTtcblx0XHRcdFx0Y29uc3Qgc2x1ZyA9IHBhZ2Uuc2x1Zztcblx0XHRcdFx0aWYgKHNsdWcpIHtcblx0XHRcdFx0XHRjb25maWcucHVzaCh7XG5cdFx0XHRcdFx0XHRwYXRoOiBzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCA/IHNsdWcuc3Vic3RyKDEpIDogc2x1ZywgY29tcG9uZW50OiBjb21wb25lbnQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIucmVzZXRDb25maWcoY29uZmlnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEocGFnZSk7XG5cdFx0XHR9XG5cdFx0fS8qIGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VPdXRsZXRDb21wb25lbnQuc2V0U25hcHNob3QgNDA0JywgZGF0YSk7XG5cdFx0fSovXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIl19