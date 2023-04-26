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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRTVDLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxFQUFFO0lBQ3BHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDeEgsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtDQUM1RTtBQUVEO0lBQUE7SUFTMkIsQ0FBQzs7Z0JBVDNCLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO2lCQUNEOztJQUUwQixrQkFBQztDQUFBLEFBVDVCLElBUzRCO1NBQWYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vcGFnZS9wYWdlLXJlc29sdmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2UvcGFnZS5ndWFyZCc7XHJcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlL3N0YXRpYy5ndWFyZCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7IHBhdGg6ICdwYWdlLzppZCcsIGNvbXBvbmVudDogUGFnZU91dGxldENvbXBvbmVudCwgcmVzb2x2ZTogeyBwYWdlUmVzb2x2ZXI6IFBhZ2VSZXNvbHZlclNlcnZpY2UgfSB9LFxyXG5cdHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlT3V0bGV0Q29tcG9uZW50LCByZXNvbHZlOiB7IHBhZ2VSZXNvbHZlcjogUGFnZVJlc29sdmVyU2VydmljZSB9LCBjYW5BY3RpdmF0ZTogW1BhZ2VHdWFyZF0gfSxcclxuXHR7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW1N0YXRpY0d1YXJkXSB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VSb3V0aW5nIHsgfVxyXG4iXX0=