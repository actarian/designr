/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export { ConfigService } from './lib/config/config.service';
export { PageConfig, PAGE_CONFIG } from './lib/config/page.config';
export { ILayoutComponent } from './lib/layout/layout';
export { LayoutComponent } from './lib/layout/layout.component';
export { UseLayoutDirective } from './lib/layout/use-layout.directive';
export { PageModuleComponent } from './lib/page-module.component';
export { PageModule } from './lib/page.module';
export { PageRouting } from './lib/page.routing';
export { Page, PageIndex, PageMeta, PageRelation } from './lib/page/page';
export { PageNotFoundComponent } from './lib/page/page-not-found.component';
export { PageOutletComponent } from './lib/page/page-outlet.component';
export { PageResolver } from './lib/page/page-resolver';
export { PageResolverService } from './lib/page/page-resolver.service';
export { PageComponent } from './lib/page/page.component';
export { PageGuard } from './lib/page/page.guard';
export { PageService } from './lib/page/page.service';
export { StaticGuard } from './lib/page/static.guard';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQVcsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2xpYi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5leHBvcnQgeyBQYWdlQ29uZmlnLCBQQUdFX0NPTkZJRyB9IGZyb20gJy4vbGliL2NvbmZpZy9wYWdlLmNvbmZpZyc7XHJcbmV4cG9ydCB7IElMYXlvdXRDb21wb25lbnQsIExheW91dHMgfSBmcm9tICcuL2xpYi9sYXlvdXQvbGF5b3V0JztcclxuZXhwb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9saWIvbGF5b3V0L2xheW91dC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyBVc2VMYXlvdXREaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9sYXlvdXQvdXNlLWxheW91dC5kaXJlY3RpdmUnO1xyXG5leHBvcnQgeyBQYWdlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvcGFnZS1tb2R1bGUuY29tcG9uZW50JztcclxuZXhwb3J0IHsgUGFnZU1vZHVsZSB9IGZyb20gJy4vbGliL3BhZ2UubW9kdWxlJztcclxuZXhwb3J0IHsgUGFnZVJvdXRpbmcgfSBmcm9tICcuL2xpYi9wYWdlLnJvdXRpbmcnO1xyXG5leHBvcnQgeyBQYWdlLCBQYWdlSW5kZXgsIFBhZ2VNZXRhLCBQYWdlUmVsYXRpb24sIFBhZ2VzIH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlJztcclxuZXhwb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlLW91dGxldC5jb21wb25lbnQnO1xyXG5leHBvcnQgeyBQYWdlUmVzb2x2ZXIgfSBmcm9tICcuL2xpYi9wYWdlL3BhZ2UtcmVzb2x2ZXInO1xyXG5leHBvcnQgeyBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlLXJlc29sdmVyLnNlcnZpY2UnO1xyXG5leHBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlLmNvbXBvbmVudCc7XHJcbmV4cG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vbGliL3BhZ2UvcGFnZS5ndWFyZCc7XHJcbmV4cG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9saWIvcGFnZS9wYWdlLnNlcnZpY2UnO1xyXG5leHBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vbGliL3BhZ2Uvc3RhdGljLmd1YXJkJztcclxuXHJcbiJdfQ==