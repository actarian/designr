import { __extends } from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@designr/core";
import * as i3 from "./page.service";
var _c0 = ["outlet"];
function PageOutletComponent_ng_template_0_Template(rf, ctx) { }
var PageOutletComponent = /** @class */ (function (_super) {
    __extends(PageOutletComponent, _super);
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
    PageOutletComponent.prototype.ngOnInit = function () {
        this.setSnapshot(this.route.snapshot);
    };
    PageOutletComponent.prototype.setSnapshot = function (snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        var data = snapshot.data;
        var params = this.routeService.params;
        var queryParams = this.routeService.queryParams;
        var component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            var page = data.pageResolver.page;
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            var componentRef = this.viewContainerRef.createComponent(factory);
            var instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                var config = this.router.config.slice();
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
    PageOutletComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    PageOutletComponent.ɵfac = function PageOutletComponent_Factory(t) { return new (t || PageOutletComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i2.RouteService), i0.ɵɵdirectiveInject(i3.PageService)); };
    PageOutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageOutletComponent, selectors: [["page-outlet"]], viewQuery: function PageOutletComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function PageOutletComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PageOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return PageOutletComponent;
}(DisposableComponent));
export { PageOutletComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageOutletComponent, [{
        type: Component,
        args: [{
                selector: 'page-outlet',
                template: '<ng-template #outlet></ng-template>',
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i0.ComponentFactoryResolver }, { type: i2.RouteService }, { type: i3.PageService }]; }, { viewContainerRef: [{
            type: ViewChild,
            args: ['outlet', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0Isd0JBQXdCLEVBQW1DLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwSixPQUFPLEVBQUUsY0FBYyxFQUEwQixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUU3QztJQUt5Qyx1Q0FBbUI7SUFLM0QsNkJBQ1MsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLHdCQUFrRCxFQUNsRCxZQUEwQixFQUMxQixXQUF3QjtRQUxqQyxZQU9DLGlCQUFPLFNBS1A7UUFYUSxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxrQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUdoQyxrRUFBa0U7UUFDbEUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsR0FBRztZQUNqRCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQzs7SUFDSCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLFFBQWdDO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0UsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLFNBQVMsR0FBUSxxQkFBcUIsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BDLElBQU0sT0FBTyxHQUFvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNyQixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN6QixRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUNuQyxJQUFJLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDL0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLElBQUksRUFBRTtnQkFDVCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsSUFBSSxJQUFJLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUztxQkFDM0UsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO1NBQ0QsQ0FBQTs7V0FFRTtJQUNKLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDOzBGQTlEVyxtQkFBbUI7NERBQW5CLG1CQUFtQjs0Q0FFRixnQkFBZ0I7Ozs7O1lBTGxDLHFIQUFxQjs7OEJBVGpDO0NBNEVDLEFBckVELENBS3lDLG1CQUFtQixHQWdFM0Q7U0FoRVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUscUNBQXFDO2FBQy9DOztrQkFJQyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50LCBSb3V0ZVNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYWdlLW91dGxldCcsXG5cdHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNvdXRsZXQ+PC9uZy10ZW1wbGF0ZT4nLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VPdXRsZXRDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ291dGxldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cdHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8UGFnZUNvbXBvbmVudD47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgcm91dGVTZXJ2aWNlOiBSb3V0ZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Ly8gISEhIGtlZXAgLT4gQXZvaWQgUGFnZU91dGxldCBSb3V0ZSBDYWNoaW5nIGZvciBkaWZmZXJlbnQgcm91dGVzXG5cdFx0dGhpcy5yb3V0ZXIucm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2V0U25hcHNob3QodGhpcy5yb3V0ZS5zbmFwc2hvdCk7XG5cdH1cblxuXHRzZXRTbmFwc2hvdChzbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHZvaWQge1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5wYXJhbXMpO1xuXHRcdHRoaXMucm91dGVTZXJ2aWNlLnF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UudG9EYXRhKHNuYXBzaG90LnF1ZXJ5UGFyYW1zKTtcblx0XHRjb25zdCBkYXRhID0gc25hcHNob3QuZGF0YTtcblx0XHRjb25zdCBwYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5wYXJhbXM7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcztcblx0XHRsZXQgY29tcG9uZW50OiBhbnkgPSBQYWdlTm90Rm91bmRDb21wb25lbnQ7XG5cdFx0aWYgKGRhdGEucGFnZVJlc29sdmVyKSB7XG5cdFx0XHRjb21wb25lbnQgPSBkYXRhLnBhZ2VSZXNvbHZlci5jb21wb25lbnQ7XG5cdFx0XHRjb25zdCBwYWdlID0gZGF0YS5wYWdlUmVzb2x2ZXIucGFnZTtcblx0XHRcdGNvbnN0IGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8UGFnZUNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuXHRcdFx0dGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0XHRpbnN0YW5jZS5wYWdlID0gcGFnZTtcblx0XHRcdGluc3RhbmNlLnBhcmFtcyA9IHBhcmFtcztcblx0XHRcdGluc3RhbmNlLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXM7XG5cdFx0XHRpZiAodHlwZW9mIGluc3RhbmNlWydQYWdlSW5pdCddID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGluc3RhbmNlWydQYWdlSW5pdCddKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMucm91dGVyLmNvbmZpZy5zbGljZSgpO1xuXHRcdFx0XHRjb25zdCBzbHVnID0gcGFnZS5zbHVnO1xuXHRcdFx0XHRpZiAoc2x1Zykge1xuXHRcdFx0XHRcdGNvbmZpZy5wdXNoKHtcblx0XHRcdFx0XHRcdHBhdGg6IHNsdWcuaW5kZXhPZignLycpID09PSAwID8gc2x1Zy5zdWJzdHIoMSkgOiBzbHVnLCBjb21wb25lbnQ6IGNvbXBvbmVudCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLnJvdXRlci5yZXNldENvbmZpZyhjb25maWcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGFnZVNlcnZpY2UuYWRkT3JVcGRhdGVNZXRhRGF0YShwYWdlKTtcblx0XHRcdH1cblx0XHR9LyogZWxzZSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUGFnZU91dGxldENvbXBvbmVudC5zZXRTbmFwc2hvdCA0MDQnLCBkYXRhKTtcblx0XHR9Ki9cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iXX0=