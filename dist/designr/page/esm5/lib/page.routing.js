import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageResolverService } from './page/page-resolver.service';
import { PageGuard } from './page/page.guard';
import { StaticGuard } from './page/static.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
var PageRouting = /** @class */ (function () {
    function PageRouting() {
    }
    PageRouting.ɵmod = i0.ɵɵdefineNgModule({ type: PageRouting });
    PageRouting.ɵinj = i0.ɵɵdefineInjector({ factory: function PageRouting_Factory(t) { return new (t || PageRouting)(); }, imports: [[
                RouterModule.forChild(routes),
            ],
            RouterModule] });
    return PageRouting;
}());
export { PageRouting };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRWxELElBQU0sTUFBTSxHQUFXO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEVBQUU7SUFDcEcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUN4SCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0NBQzVFLENBQUM7QUFFRjtJQUFBO0tBUzRCO21EQUFmLFdBQVc7eUdBQVgsV0FBVyxrQkFSZDtnQkFDUixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUM3QjtZQUVBLFlBQVk7c0JBbkJkO0NBdUI0QixBQVQ1QixJQVM0QjtTQUFmLFdBQVc7d0ZBQVgsV0FBVywwQ0FKdEIsWUFBWTtrREFJRCxXQUFXO2NBVHZCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlL3BhZ2UtcmVzb2x2ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2UvcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vcGFnZS9zdGF0aWMuZ3VhcmQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiAncGFnZS86aWQnLCBjb21wb25lbnQ6IFBhZ2VPdXRsZXRDb21wb25lbnQsIHJlc29sdmU6IHsgcGFnZVJlc29sdmVyOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gfSxcblx0eyBwYXRoOiAnKionLCBjb21wb25lbnQ6IFBhZ2VPdXRsZXRDb21wb25lbnQsIHJlc29sdmU6IHsgcGFnZVJlc29sdmVyOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0sIGNhbkFjdGl2YXRlOiBbUGFnZUd1YXJkXSB9LFxuXHR7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW1N0YXRpY0d1YXJkXSB9LFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Um91dGVyTW9kdWxlLFxuXHRdLFxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VSb3V0aW5nIHsgfVxuIl19