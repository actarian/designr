/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { CoreRouting } from './core.routing';
import { DisposableComponent } from './disposable/disposable.component';
import { ControlComponent } from './forms/controls/control.component';
import { ControlService } from './forms/controls/control.service';
import { ExistsValidator } from './forms/exists.validator';
import { FormService } from './forms/form.service';
import { MatchValidator } from './forms/match.validator';
import { UppercaseDirective } from './forms/uppercase.directive';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { HttpStatusCodeService } from './http/http-status-code.service';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelAsyncPipe } from './labels/label-async.pipe';
import { LabelDirective } from './labels/label.directive';
import { LabelPipe } from './labels/label.pipe';
import { LabelService } from './labels/label.service';
import { Logger } from './logger/logger';
import { LoggerComponent } from './logger/logger.component';
import { EventDispatcherService } from './models/event-dispatcher.service';
import { MenuService } from './models/menu.service';
import { OnceService } from './once/once.service';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageComponent } from './pages/page.component';
import { PageGuard } from './pages/page.guard';
import { PageService } from './pages/page.service';
import { StaticGuard } from './pages/static.guard';
import { AssetPipe } from './pipes/asset.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { PublicPipe } from './pipes/public.pipe';
import { SegmentPipe } from './pipes/segment.pipe';
import { RoutePipe } from './routes/route.pipe';
import { SlugAsyncPipe } from './slugs/slug-async.pipe';
import { SlugPipe } from './slugs/slug.pipe';
import { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './storage/storage.service';
import { TranslatePipe } from './translate/translate.pipe';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { FancyboxDirective } from './ui/fancybox/fancybox.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';
export class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CoreRouting,
                ],
                declarations: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    DisposableComponent,
                    ExistsValidator,
                    FancyboxDirective,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LazyImagesDirective,
                    LoggerComponent,
                    MatchValidator,
                    ModalContainerComponent,
                    ModalViewComponent,
                    PageComponent,
                    PageNotFoundComponent,
                    PageOutletComponent,
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
                    TrustPipe,
                    UppercaseDirective,
                ],
                exports: [
                    AssetPipe,
                    ClickOutsideDirective,
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    ExistsValidator,
                    FancyboxDirective,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LazyImagesDirective,
                    LoggerComponent,
                    MatchValidator,
                    ModalContainerComponent,
                    ModalViewComponent,
                    PageComponent,
                    PublicPipe,
                    RoutePipe,
                    SafeStylePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SlugAsyncPipe,
                    SlugPipe,
                    TranslatePipe,
                    TrustPipe,
                    UppercaseDirective,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    AssetPipe,
                    AuthService,
                    ConfigService,
                    ControlService,
                    CookieStorageService,
                    CustomAsyncPipe,
                    EventDispatcherService,
                    ExistsValidator,
                    FormService,
                    HighlightPipe,
                    HttpStatusCodeService,
                    ImagePipe,
                    LabelPipe,
                    LabelService,
                    LocalStorageService,
                    Logger,
                    MatchValidator,
                    MenuService,
                    ModalService,
                    OnceService,
                    PageGuard, StaticGuard,
                    PageService,
                    PublicPipe,
                    RoutePipe,
                    SafeUrlPipe,
                    SegmentPipe,
                    SessionStorageService,
                    SlugAsyncPipe,
                    SlugPipe,
                    StorageService,
                    TranslatePipe,
                    TrustPipe,
                ],
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUs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LFNBQVM7b0JBQ1QsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixTQUFTO29CQUNULGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxXQUFXO29CQUNYLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixhQUFhO29CQUNiLFNBQVM7b0JBQ1Qsa0JBQWtCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7b0JBQzlFLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxhQUFhO29CQUNiLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixlQUFlO29CQUNmLHNCQUFzQjtvQkFDdEIsZUFBZTtvQkFDZixXQUFXO29CQUNYLGFBQWE7b0JBQ2IscUJBQXFCO29CQUNyQixTQUFTO29CQUNULFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLE1BQU07b0JBQ04sY0FBYztvQkFDZCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxTQUFTLEVBQUUsV0FBVztvQkFDdEIsV0FBVztvQkFDWCxVQUFVO29CQUNWLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxXQUFXO29CQUNYLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixRQUFRO29CQUNSLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixTQUFTO2lCQUNUO2FBQ0Q7Ozs7WUFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb3JlLmNvbmZpZyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3JlUm91dGluZyB9IGZyb20gJy4vY29yZS5yb3V0aW5nJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvZXhpc3RzLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtcy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvbWF0Y2gudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVXBwZXJjYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAvaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbEFzeW5jUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhYmVsUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbW9kZWxzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi9vbmNlL29uY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU91dGxldENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuZ3VhcmQnO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZXMvcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdGljR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3N0YXRpYy5ndWFyZCc7XHJcbmltcG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vcGlwZXMvYXNzZXQucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLnBpcGUnO1xyXG5pbXBvcnQgeyBQdWJsaWNQaXBlIH0gZnJvbSAnLi9waXBlcy9wdWJsaWMucGlwZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWdtZW50LnBpcGUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuL3JvdXRlcy9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z0FzeW5jUGlwZSB9IGZyb20gJy4vc2x1Z3Mvc2x1Zy1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWcucGlwZSc7XHJcbmltcG9ydCB7IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmFuY3lib3hEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2ZhbmN5Ym94L2ZhbmN5Ym94LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlJbWFnZXNEaXJlY3RpdmUgfSBmcm9tICcuL3VpL2xhenktaW1hZ2VzL2xhenktaW1hZ2VzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi91aS9tb2RhbC9tb2RhbC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlUm91dGluZyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0Q2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG5cdFx0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdENvcmVNb2R1bGVDb21wb25lbnQsXHJcblx0XHRDdXN0b21Bc3luY1BpcGUsXHJcblx0XHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRcdERpc3Bvc2FibGVDb21wb25lbnQsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGYW5jeWJveERpcmVjdGl2ZSxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdFx0TGFiZWxBc3luY1BpcGUsXHJcblx0XHRMYWJlbERpcmVjdGl2ZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhenlJbWFnZXNEaXJlY3RpdmUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5cdFx0UGFnZUNvbXBvbmVudCxcclxuXHRcdFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcclxuXHRcdFBhZ2VPdXRsZXRDb21wb25lbnQsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVN0eWxlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdFx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0Q2xpY2tPdXRzaWRlRGlyZWN0aXZlLFxyXG5cdFx0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdENvcmVNb2R1bGVDb21wb25lbnQsXHJcblx0XHRDdXN0b21Bc3luY1BpcGUsXHJcblx0XHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZhbmN5Ym94RGlyZWN0aXZlLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0XHRMYWJlbEFzeW5jUGlwZSxcclxuXHRcdExhYmVsRGlyZWN0aXZlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TGF6eUltYWdlc0RpcmVjdGl2ZSxcclxuXHRcdExvZ2dlckNvbXBvbmVudCxcclxuXHRcdE1hdGNoVmFsaWRhdG9yLFxyXG5cdFx0TW9kYWxDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRNb2RhbFZpZXdDb21wb25lbnQsXHJcblx0XHRQYWdlQ29tcG9uZW50LFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVTdHlsZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0QXV0aFNlcnZpY2UsXHJcblx0XHRDb25maWdTZXJ2aWNlLFxyXG5cdFx0Q29udHJvbFNlcnZpY2UsXHJcblx0XHRDb29raWVTdG9yYWdlU2VydmljZSxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGb3JtU2VydmljZSxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYWJlbFNlcnZpY2UsXHJcblx0XHRMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0TG9nZ2VyLFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNZW51U2VydmljZSxcclxuXHRcdE1vZGFsU2VydmljZSxcclxuXHRcdE9uY2VTZXJ2aWNlLFxyXG5cdFx0UGFnZUd1YXJkLCBTdGF0aWNHdWFyZCxcclxuXHRcdFBhZ2VTZXJ2aWNlLFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRTdG9yYWdlU2VydmljZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==