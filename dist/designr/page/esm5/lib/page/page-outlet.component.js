/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        _this.router.routeReuseStrategy.shouldReuseRoute = (/**
         * @return {?}
         */
        function () {
            return false;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLHdCQUF3QixFQUFtQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEosT0FBTyxFQUFFLGNBQWMsRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFLeUMsK0NBQW1CO0lBSzNELDZCQUNTLE1BQWMsRUFDZCxLQUFxQixFQUNyQix3QkFBa0QsRUFDbEQsWUFBMEIsRUFDMUIsV0FBd0I7UUFMakMsWUFPQyxpQkFBTyxTQUtQO1FBWFEsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsa0JBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFHaEMsa0VBQWtFO1FBQ2xFLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCOzs7UUFBRztZQUNqRCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQSxDQUFDOztJQUNILENBQUM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJ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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQsIFJvdXRlU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BhZ2Utb3V0bGV0JyxcclxuXHR0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+JyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QFZpZXdDaGlsZCgnb3V0bGV0JywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblx0cHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxQYWdlQ29tcG9uZW50PjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZVNlcnZpY2U6IFJvdXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdC8vICEhISBrZWVwIC0+IEF2b2lkIFBhZ2VPdXRsZXQgUm91dGUgQ2FjaGluZyBmb3IgZGlmZmVyZW50IHJvdXRlc1xyXG5cdFx0dGhpcy5yb3V0ZXIucm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUgPSAoKSA9PiB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc2V0U25hcHNob3QodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XHJcblx0fVxyXG5cclxuXHRzZXRTbmFwc2hvdChzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnBhcmFtcyk7XHJcblx0XHR0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5xdWVyeVBhcmFtcyk7XHJcblx0XHRjb25zdCBkYXRhID0gc25hcHNob3QuZGF0YTtcclxuXHRcdGNvbnN0IHBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcztcclxuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXM7XHJcblx0XHRsZXQgY29tcG9uZW50OiBhbnkgPSBQYWdlTm90Rm91bmRDb21wb25lbnQ7XHJcblx0XHRpZiAoZGF0YS5wYWdlUmVzb2x2ZXIpIHtcclxuXHRcdFx0Y29tcG9uZW50ID0gZGF0YS5wYWdlUmVzb2x2ZXIuY29tcG9uZW50O1xyXG5cdFx0XHRjb25zdCBwYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcclxuXHRcdFx0Y29uc3QgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxQYWdlQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcblx0XHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuXHRcdFx0aW5zdGFuY2UucGFnZSA9IHBhZ2U7XHJcblx0XHRcdGluc3RhbmNlLnBhcmFtcyA9IHBhcmFtcztcclxuXHRcdFx0aW5zdGFuY2UucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcztcclxuXHRcdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnUGFnZUluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGluc3RhbmNlWydQYWdlSW5pdCddKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XHJcblx0XHRcdGlmIChwYWdlKSB7XHJcblx0XHRcdFx0Y29uc3QgY29uZmlnID0gdGhpcy5yb3V0ZXIuY29uZmlnLnNsaWNlKCk7XHJcblx0XHRcdFx0Y29uc3Qgc2x1ZyA9IHBhZ2Uuc2x1ZztcclxuXHRcdFx0XHRpZiAoc2x1Zykge1xyXG5cdFx0XHRcdFx0Y29uZmlnLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCA/IHNsdWcuc3Vic3RyKDEpIDogc2x1ZywgY29tcG9uZW50OiBjb21wb25lbnQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKGNvbmZpZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhRGF0YShwYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fS8qIGVsc2Uge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZU91dGxldENvbXBvbmVudC5zZXRTbmFwc2hvdCA0MDQnLCBkYXRhKTtcclxuXHRcdH0qL1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=