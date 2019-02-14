/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageResolverService } from './pages/page-resolver.service';
import { PageGuard } from './pages/page.guard';
import { StaticGuard } from './pages/static.guard';
/** @type {?} */
const routes = [
    { path: 'page/:id', component: PageOutletComponent, resolve: { pageResolver: PageResolverService } },
    { path: '**', component: PageOutletComponent, resolve: { pageResolver: PageResolverService }, canActivate: [PageGuard] },
    { path: '**', component: PageNotFoundComponent, canActivate: [StaticGuard] },
];
export class PageRouting {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O01BRTdDLE1BQU0sR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxFQUFFO0lBQ3BHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDeEgsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRTtDQUM1RTtBQVdELE1BQU0sT0FBTyxXQUFXOzs7WUFUdkIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJy4vcGFnZXMvcGFnZS1yZXNvbHZlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZXMvcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vcGFnZXMvc3RhdGljLmd1YXJkJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cdHsgcGF0aDogJ3BhZ2UvOmlkJywgY29tcG9uZW50OiBQYWdlT3V0bGV0Q29tcG9uZW50LCByZXNvbHZlOiB7IHBhZ2VSZXNvbHZlcjogUGFnZVJlc29sdmVyU2VydmljZSB9IH0sXG5cdHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBQYWdlT3V0bGV0Q29tcG9uZW50LCByZXNvbHZlOiB7IHBhZ2VSZXNvbHZlcjogUGFnZVJlc29sdmVyU2VydmljZSB9LCBjYW5BY3RpdmF0ZTogW1BhZ2VHdWFyZF0gfSxcblx0eyBwYXRoOiAnKionLCBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtTdGF0aWNHdWFyZF0gfSxcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFJvdXRlck1vZHVsZSxcblx0XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQYWdlUm91dGluZyB7IH1cbiJdfQ==