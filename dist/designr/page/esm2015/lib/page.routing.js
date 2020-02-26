import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageResolverService } from './page/page-resolver.service';
import { PageGuard } from './page/page.guard';
import { StaticGuard } from './page/static.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
export class PageRouting {
}
PageRouting.ɵmod = i0.ɵɵdefineNgModule({ type: PageRouting });
PageRouting.ɵinj = i0.ɵɵdefineInjector({ factory: function PageRouting_Factory(t) { return new (t || PageRouting)(); }, imports: [[
            RouterModule.forChild(routes),
        ],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PageRouting, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PageRouting, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild(routes),
                ],
                exports: [
                    RouterModule,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRWxELE1BQU0sTUFBTSxHQUFXO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEVBQUU7SUFDcEcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUN4SCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0NBQzVFLENBQUM7QUFXRixNQUFNLE9BQU8sV0FBVzs7K0NBQVgsV0FBVztxR0FBWCxXQUFXLGtCQVJkO1lBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDN0I7UUFFQSxZQUFZO3dGQUlELFdBQVcsMENBSnRCLFlBQVk7a0RBSUQsV0FBVztjQVR2QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUM3QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtpQkFDWjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZU91dGxldENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS9wYWdlLW91dGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vcGFnZS9wYWdlLXJlc29sdmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUd1YXJkIH0gZnJvbSAnLi9wYWdlL3BhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgU3RhdGljR3VhcmQgfSBmcm9tICcuL3BhZ2Uvc3RhdGljLmd1YXJkJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cdHsgcGF0aDogJ3BhZ2UvOmlkJywgY29tcG9uZW50OiBQYWdlT3V0bGV0Q29tcG9uZW50LCByZXNvbHZlOiB7IHBhZ2VSZXNvbHZlcjogUGFnZVJlc29sdmVyU2VydmljZSB9IH0sXG5cdHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlT3V0bGV0Q29tcG9uZW50LCByZXNvbHZlOiB7IHBhZ2VSZXNvbHZlcjogUGFnZVJlc29sdmVyU2VydmljZSB9LCBjYW5BY3RpdmF0ZTogW1BhZ2VHdWFyZF0gfSxcblx0eyBwYXRoOiAnKionLCBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtTdGF0aWNHdWFyZF0gfSxcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFJvdXRlck1vZHVsZSxcblx0XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlUm91dGluZyB7IH1cbiJdfQ==