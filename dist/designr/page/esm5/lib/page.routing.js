/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found.component';
import { PageOutletComponent } from './page/page-outlet.component';
import { PageResolverService } from './page/page-resolver.service';
import { PageGuard } from './page/page.guard';
import { StaticGuard } from './page/static.guard';
/** @type {?} */
var routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
var PageRouting = /** @class */ (function () {
    function PageRouting() {
    }
    PageRouting.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule.forChild(routes),
                    ],
                    exports: [
                        RouterModule,
                    ],
                },] }
    ];
    return PageRouting;
}());
export { PageRouting };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTVDLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxFQUFFO0lBQ3BHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDeEgsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtDQUM1RTtBQUVEO0lBQUE7SUFTMkIsQ0FBQzs7Z0JBVDNCLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO2lCQUNEOztJQUUwQixrQkFBQztDQUFBLEFBVDVCLElBUzRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VSZXNvbHZlclNlcnZpY2UgfSBmcm9tICcuL3BhZ2UvcGFnZS1yZXNvbHZlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZS9wYWdlLmd1YXJkJztcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlL3N0YXRpYy5ndWFyZCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuXHR7IHBhdGg6ICdwYWdlLzppZCcsIGNvbXBvbmVudDogUGFnZU91dGxldENvbXBvbmVudCwgcmVzb2x2ZTogeyBwYWdlUmVzb2x2ZXI6IFBhZ2VSZXNvbHZlclNlcnZpY2UgfSB9LFxuXHR7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU91dGxldENvbXBvbmVudCwgcmVzb2x2ZTogeyBwYWdlUmVzb2x2ZXI6IFBhZ2VSZXNvbHZlclNlcnZpY2UgfSwgY2FuQWN0aXZhdGU6IFtQYWdlR3VhcmRdIH0sXG5cdHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlTm90Rm91bmRDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbU3RhdGljR3VhcmRdIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG59KVxuXG5leHBvcnQgY2xhc3MgUGFnZVJvdXRpbmcgeyB9XG4iXX0=