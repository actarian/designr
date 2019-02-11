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
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    DisposableComponent,
                    ExistsValidator,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LoggerComponent,
                    MatchValidator,
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
                    ControlComponent,
                    CoreModuleComponent,
                    CustomAsyncPipe,
                    DefaultContentDirective,
                    ExistsValidator,
                    HighlightPipe,
                    ImagePipe,
                    JsonFormatterComponent,
                    LabelAsyncPipe,
                    LabelDirective,
                    LabelPipe,
                    LoggerComponent,
                    MatchValidator,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUs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b0JBQ2IscUJBQXFCO29CQUNyQixTQUFTO29CQUNULFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLE1BQU07b0JBQ04sY0FBYztvQkFDZCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsU0FBUyxFQUFFLFdBQVc7b0JBQ3RCLFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixTQUFTO29CQUNULFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxxQkFBcUI7b0JBQ3JCLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsU0FBUztpQkFDVDthQUNEOzs7O1lBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29yZVJvdXRpbmcgfSBmcm9tICcuL2NvcmUucm91dGluZyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtcy9jb250cm9scy9jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuL2Zvcm1zL2V4aXN0cy52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vZm9ybXMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuL2Zvcm1zL21hdGNoLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFVwcGVyY2FzZURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvdXBwZXJjYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwL2h0dHAtcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAvaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnNvbkZvcm1hdHRlckNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxBc3luY1BpcGUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYWJlbFBpcGUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlcic7XHJcbmltcG9ydCB7IExvZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vb25jZS9vbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUd1YXJkIH0gZnJvbSAnLi9wYWdlcy9wYWdlLmd1YXJkJztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2VzL3BhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlcy9zdGF0aWMuZ3VhcmQnO1xyXG5pbXBvcnQgeyBBc3NldFBpcGUgfSBmcm9tICcuL3BpcGVzL2Fzc2V0LnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgUHVibGljUGlwZSB9IGZyb20gJy4vcGlwZXMvcHVibGljLnBpcGUnO1xyXG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vcGlwZXMvc2VnbWVudC5waXBlJztcclxuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9yb3V0ZXMvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWctYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdQaXBlIH0gZnJvbSAnLi9zbHVncy9zbHVnLnBpcGUnO1xyXG5pbXBvcnQgeyBDb29raWVTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGVQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXN0eWxlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlVXJsUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IFRydXN0UGlwZSB9IGZyb20gJy4vdHJ1c3QvdHJ1c3QucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRDb3JlUm91dGluZyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdENvcmVNb2R1bGVDb21wb25lbnQsXHJcblx0XHRDdXN0b21Bc3luY1BpcGUsXHJcblx0XHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRcdERpc3Bvc2FibGVDb21wb25lbnQsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRcdExhYmVsQXN5bmNQaXBlLFxyXG5cdFx0TGFiZWxEaXJlY3RpdmUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdFBhZ2VDb21wb25lbnQsXHJcblx0XHRQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcblx0XHRQYWdlT3V0bGV0Q29tcG9uZW50LFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVTdHlsZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRcdExhYmVsQXN5bmNQaXBlLFxyXG5cdFx0TGFiZWxEaXJlY3RpdmUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdFBhZ2VDb21wb25lbnQsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVN0eWxlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdFx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRBdXRoU2VydmljZSxcclxuXHRcdENvbmZpZ1NlcnZpY2UsXHJcblx0XHRDb250cm9sU2VydmljZSxcclxuXHRcdENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RXZlbnREaXNwYXRjaGVyU2VydmljZSxcclxuXHRcdEV4aXN0c1ZhbGlkYXRvcixcclxuXHRcdEZvcm1TZXJ2aWNlLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEh0dHBTdGF0dXNDb2RlU2VydmljZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhYmVsU2VydmljZSxcclxuXHRcdExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRMb2dnZXIsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1lbnVTZXJ2aWNlLFxyXG5cdFx0T25jZVNlcnZpY2UsXHJcblx0XHRQYWdlR3VhcmQsIFN0YXRpY0d1YXJkLFxyXG5cdFx0UGFnZVNlcnZpY2UsXHJcblx0XHRQdWJsaWNQaXBlLFxyXG5cdFx0Um91dGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IENvcmVDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPUkVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH1dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19