import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisposableComponent, RouteService } from '@designr/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageService } from './page.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@designr/core";
import * as i3 from "./page.service";
const _c0 = ["outlet"];
function PageOutletComponent_ng_template_0_Template(rf, ctx) { }
export class PageOutletComponent extends DisposableComponent {
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
    ngOnInit() {
        this.setSnapshot(this.route.snapshot);
    }
    setSnapshot(snapshot) {
        this.routeService.params = this.routeService.toData(snapshot.params);
        this.routeService.queryParams = this.routeService.toData(snapshot.queryParams);
        const data = snapshot.data;
        const params = this.routeService.params;
        const queryParams = this.routeService.queryParams;
        let component = PageNotFoundComponent;
        if (data.pageResolver) {
            component = data.pageResolver.component;
            const page = data.pageResolver.page;
            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.clear();
            const componentRef = this.viewContainerRef.createComponent(factory);
            const instance = componentRef.instance;
            instance.page = page;
            instance.params = params;
            instance.queryParams = queryParams;
            if (typeof instance['PageInit'] === 'function') {
                instance['PageInit']();
            }
            this.componentRef = componentRef;
            if (page) {
                const config = this.router.config.slice();
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
    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
PageOutletComponent.ɵfac = function PageOutletComponent_Factory(t) { return new (t || PageOutletComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i2.RouteService), i0.ɵɵdirectiveInject(i3.PageService)); };
PageOutletComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PageOutletComponent, selectors: [["page-outlet"]], viewQuery: function PageOutletComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.viewContainerRef = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["outlet", ""]], template: function PageOutletComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PageOutletComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1vdXRsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQix3QkFBd0IsRUFBbUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxjQUFjLEVBQTBCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBTzdDLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxtQkFBbUI7SUFLM0QsWUFDUyxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLFdBQXdCO1FBRWhDLEtBQUssRUFBRSxDQUFDO1FBTkEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHaEMsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3RELE9BQU8sS0FBSyxDQUFDO1FBQ2QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFnQztRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDeEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxTQUFTLEdBQVEscUJBQXFCLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNwQyxNQUFNLE9BQU8sR0FBb0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDdkMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDckIsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDekIsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDbkMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQy9DLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxFQUFFO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVM7cUJBQzNFLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztTQUNELENBQUE7O1dBRUU7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7c0ZBOURXLG1CQUFtQjt3REFBbkIsbUJBQW1CO3dDQUVGLGdCQUFnQjs7Ozs7UUFMbEMscUhBQXFCOztrREFHcEIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHFDQUFxQzthQUMvQzs7a0JBSUMsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCwgUm91dGVTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFnZS1vdXRsZXQnLFxuXHR0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjb3V0bGV0PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlT3V0bGV0Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRAVmlld0NoaWxkKCdvdXRsZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXHRwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFBhZ2VDb21wb25lbnQ+O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG5cdFx0cHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIHJvdXRlU2VydmljZTogUm91dGVTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdC8vICEhISBrZWVwIC0+IEF2b2lkIFBhZ2VPdXRsZXQgUm91dGUgQ2FjaGluZyBmb3IgZGlmZmVyZW50IHJvdXRlc1xuXHRcdHRoaXMucm91dGVyLnJvdXRlUmV1c2VTdHJhdGVneS5zaG91bGRSZXVzZVJvdXRlID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldFNuYXBzaG90KHRoaXMucm91dGUuc25hcHNob3QpO1xuXHR9XG5cblx0c2V0U25hcHNob3Qoc25hcHNob3Q6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiB2b2lkIHtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5wYXJhbXMgPSB0aGlzLnJvdXRlU2VydmljZS50b0RhdGEoc25hcHNob3QucGFyYW1zKTtcblx0XHR0aGlzLnJvdXRlU2VydmljZS5xdWVyeVBhcmFtcyA9IHRoaXMucm91dGVTZXJ2aWNlLnRvRGF0YShzbmFwc2hvdC5xdWVyeVBhcmFtcyk7XG5cdFx0Y29uc3QgZGF0YSA9IHNuYXBzaG90LmRhdGE7XG5cdFx0Y29uc3QgcGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucGFyYW1zO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gdGhpcy5yb3V0ZVNlcnZpY2UucXVlcnlQYXJhbXM7XG5cdFx0bGV0IGNvbXBvbmVudDogYW55ID0gUGFnZU5vdEZvdW5kQ29tcG9uZW50O1xuXHRcdGlmIChkYXRhLnBhZ2VSZXNvbHZlcikge1xuXHRcdFx0Y29tcG9uZW50ID0gZGF0YS5wYWdlUmVzb2x2ZXIuY29tcG9uZW50O1xuXHRcdFx0Y29uc3QgcGFnZSA9IGRhdGEucGFnZVJlc29sdmVyLnBhZ2U7XG5cdFx0XHRjb25zdCBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFBhZ2VDb21wb25lbnQ+ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcblx0XHRcdHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuXHRcdFx0aW5zdGFuY2UucGFnZSA9IHBhZ2U7XG5cdFx0XHRpbnN0YW5jZS5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0XHRpbnN0YW5jZS5xdWVyeVBhcmFtcyA9IHF1ZXJ5UGFyYW1zO1xuXHRcdFx0aWYgKHR5cGVvZiBpbnN0YW5jZVsnUGFnZUluaXQnXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRpbnN0YW5jZVsnUGFnZUluaXQnXSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSBjb21wb25lbnRSZWY7XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRjb25zdCBjb25maWcgPSB0aGlzLnJvdXRlci5jb25maWcuc2xpY2UoKTtcblx0XHRcdFx0Y29uc3Qgc2x1ZyA9IHBhZ2Uuc2x1Zztcblx0XHRcdFx0aWYgKHNsdWcpIHtcblx0XHRcdFx0XHRjb25maWcucHVzaCh7XG5cdFx0XHRcdFx0XHRwYXRoOiBzbHVnLmluZGV4T2YoJy8nKSA9PT0gMCA/IHNsdWcuc3Vic3RyKDEpIDogc2x1ZywgY29tcG9uZW50OiBjb21wb25lbnQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXIucmVzZXRDb25maWcoY29uZmlnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnBhZ2VTZXJ2aWNlLmFkZE9yVXBkYXRlTWV0YURhdGEocGFnZSk7XG5cdFx0XHR9XG5cdFx0fS8qIGVsc2Uge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1BhZ2VPdXRsZXRDb21wb25lbnQuc2V0U25hcHNob3QgNDA0JywgZGF0YSk7XG5cdFx0fSovXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG5cdH1cblxufVxuIl19