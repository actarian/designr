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
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }]
        };
    };
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
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUs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d0JBQ25CLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCx1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixVQUFVO3dCQUNWLFNBQVM7d0JBQ1QsYUFBYTt3QkFDYixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixRQUFRO3dCQUNSLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxrQkFBa0I7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFDOUUsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysc0JBQXNCO3dCQUN0QixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsTUFBTTt3QkFDTixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFNBQVMsRUFBRSxXQUFXO3dCQUN0QixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLFFBQVE7d0JBQ1IsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFNBQVM7cUJBQ1Q7aUJBQ0Q7Ozs7Z0JBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQWtCdkIsaUJBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQXJCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29yZVJvdXRpbmcgfSBmcm9tICcuL2NvcmUucm91dGluZyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9mb3Jtcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtcy9jb250cm9scy9jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGlzdHNWYWxpZGF0b3IgfSBmcm9tICcuL2Zvcm1zL2V4aXN0cy52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vZm9ybXMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tICcuL2Zvcm1zL21hdGNoLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFVwcGVyY2FzZURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvdXBwZXJjYXNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwL2h0dHAtcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAvaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnNvbkZvcm1hdHRlckNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxBc3luY1BpcGUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYWJlbFBpcGUgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlcic7XHJcbmltcG9ydCB7IExvZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vb25jZS9vbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2Utb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUd1YXJkIH0gZnJvbSAnLi9wYWdlcy9wYWdlLmd1YXJkJztcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tICcuL3BhZ2VzL3BhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFN0YXRpY0d1YXJkIH0gZnJvbSAnLi9wYWdlcy9zdGF0aWMuZ3VhcmQnO1xyXG5pbXBvcnQgeyBBc3NldFBpcGUgfSBmcm9tICcuL3BpcGVzL2Fzc2V0LnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgUHVibGljUGlwZSB9IGZyb20gJy4vcGlwZXMvcHVibGljLnBpcGUnO1xyXG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vcGlwZXMvc2VnbWVudC5waXBlJztcclxuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9yb3V0ZXMvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWctYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdQaXBlIH0gZnJvbSAnLi9zbHVncy9zbHVnLnBpcGUnO1xyXG5pbXBvcnQgeyBDb29raWVTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGVQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXN0eWxlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlVXJsUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IFRydXN0UGlwZSB9IGZyb20gJy4vdHJ1c3QvdHJ1c3QucGlwZSc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vdWkvY2xpY2stb3V0c2lkZS9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZhbmN5Ym94RGlyZWN0aXZlIH0gZnJvbSAnLi91aS9mYW5jeWJveC9mYW5jeWJveC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYXp5SW1hZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi91aS9sYXp5LWltYWdlcy9sYXp5LWltYWdlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdWkvbW9kYWwvbW9kYWwtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3VpL21vZGFsL21vZGFsLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Q29yZVJvdXRpbmcsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0RmFuY3lib3hEaXJlY3RpdmUsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRcdExhYmVsQXN5bmNQaXBlLFxyXG5cdFx0TGFiZWxEaXJlY3RpdmUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYXp5SW1hZ2VzRGlyZWN0aXZlLFxyXG5cdFx0TG9nZ2VyQ29tcG9uZW50LFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNb2RhbENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdE1vZGFsVmlld0NvbXBvbmVudCxcclxuXHRcdFBhZ2VDb21wb25lbnQsXHJcblx0XHRQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcblx0XHRQYWdlT3V0bGV0Q29tcG9uZW50LFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVTdHlsZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENsaWNrT3V0c2lkZURpcmVjdGl2ZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGYW5jeWJveERpcmVjdGl2ZSxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdFx0TGFiZWxBc3luY1BpcGUsXHJcblx0XHRMYWJlbERpcmVjdGl2ZSxcclxuXHRcdExhYmVsUGlwZSxcclxuXHRcdExhenlJbWFnZXNEaXJlY3RpdmUsXHJcblx0XHRMb2dnZXJDb21wb25lbnQsXHJcblx0XHRNYXRjaFZhbGlkYXRvcixcclxuXHRcdE1vZGFsQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TW9kYWxWaWV3Q29tcG9uZW50LFxyXG5cdFx0UGFnZUNvbXBvbmVudCxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlU3R5bGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XHRVcHBlcmNhc2VEaXJlY3RpdmUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdEF1dGhTZXJ2aWNlLFxyXG5cdFx0Q29uZmlnU2VydmljZSxcclxuXHRcdENvbnRyb2xTZXJ2aWNlLFxyXG5cdFx0Q29va2llU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRDdXN0b21Bc3luY1BpcGUsXHJcblx0XHRFdmVudERpc3BhdGNoZXJTZXJ2aWNlLFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0Rm9ybVNlcnZpY2UsXHJcblx0XHRIaWdobGlnaHRQaXBlLFxyXG5cdFx0SHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxyXG5cdFx0SW1hZ2VQaXBlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TGFiZWxTZXJ2aWNlLFxyXG5cdFx0TG9jYWxTdG9yYWdlU2VydmljZSxcclxuXHRcdExvZ2dlcixcclxuXHRcdE1hdGNoVmFsaWRhdG9yLFxyXG5cdFx0TWVudVNlcnZpY2UsXHJcblx0XHRNb2RhbFNlcnZpY2UsXHJcblx0XHRPbmNlU2VydmljZSxcclxuXHRcdFBhZ2VHdWFyZCwgU3RhdGljR3VhcmQsXHJcblx0XHRQYWdlU2VydmljZSxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0U3RvcmFnZVNlcnZpY2UsXHJcblx0XHRUcmFuc2xhdGVQaXBlLFxyXG5cdFx0VHJ1c3RQaXBlLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogQ29yZUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09SRV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=