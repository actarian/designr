/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { CORE_CONFIG } from './config/core.config';
import { CoreService } from './config/core.service';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { DisposableComponent } from './disposable/disposable.component';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { HttpStatusCodeService } from './http/http-status-code.service';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelDirective } from './label/label.directive';
import { LabelPipe } from './label/label.pipe';
import { LabelService } from './label/label.service';
import { Logger } from './logger/logger';
import { LoggerComponent } from './logger/logger.component';
import { EventDispatcherService } from './models/event-dispatcher.service';
import { MenuService } from './models/menu.service';
import { CORE_MODULES } from './modules/core.modules';
import { LazyModuleDirective } from './modules/lazy-module.directive';
import { OnceService } from './once/once.service';
import { AssetPipe } from './pipes/asset.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { PublicPipe } from './pipes/public.pipe';
import { SegmentPipe } from './pipes/segment.pipe';
import { RoutePipe } from './route/route.pipe';
import { SlugAsyncPipe } from './slug/slug-async.pipe';
import { SlugPipe } from './slug/slug.pipe';
import { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './storage/storage.service';
import { TranslateDirective } from './translate/translate.directive';
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';
/** @type {?} */
const services = [
    AuthService,
    CoreService,
    CookieStorageService,
    EventDispatcherService,
    HttpStatusCodeService,
    LabelService,
    LocalStorageService,
    Logger,
    MenuService,
    OnceService,
    SessionStorageService,
    StorageService,
    TranslateService,
];
/** @type {?} */
const components = [
    CoreModuleComponent,
    DisposableComponent,
    JsonFormatterComponent,
    LoggerComponent,
];
/** @type {?} */
const directives = [
    DefaultContentDirective,
    LabelDirective,
    LazyModuleDirective,
    TranslateDirective,
];
/** @type {?} */
const pipes = [
    AssetPipe,
    CustomAsyncPipe,
    HighlightPipe,
    ImagePipe,
    ImageUrlPipe,
    LabelPipe,
    PublicPipe,
    RoutePipe,
    SafeStylePipe,
    SafeUrlPipe,
    SegmentPipe,
    SlugAsyncPipe,
    SlugPipe,
    TranslatePipe,
    TrustPipe,
];
/** @type {?} */
const validators = [];
/** @type {?} */
const guards = [];
export class CoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    /**
     * @param {?=} config
     * @param {?=} modules
     * @return {?}
     */
    static forRoot(config, modules) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: CORE_MODULES, useValue: modules || {}
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
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
                    ...services,
                    ...pipes,
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
            },] }
];
/** @nocollapse */
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7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LEVBQUUsTUFBTTtpQkFDdEMsRUFBRTtvQkFDRixPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksRUFBRTtpQkFDOUMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDOzs7WUFwREQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ25CO2dCQUNELFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDOUUsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO29CQUNwRSxHQUFHLFFBQVE7b0JBQ1gsR0FBRyxLQUFLO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsVUFBVTtvQkFDYixHQUFHLEtBQUs7b0JBQ1IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7YUFDRDs7OztZQUt1QyxVQUFVLHVCQUEvQyxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAvaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbW9kZWxzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVzLCBDT1JFX01PRFVMRVMgfSBmcm9tICcuL21vZHVsZXMvY29yZS5tb2R1bGVzJztcclxuaW1wb3J0IHsgTGF6eU1vZHVsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kdWxlcy9sYXp5LW1vZHVsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vb25jZS9vbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBc3NldFBpcGUgfSBmcm9tICcuL3BpcGVzL2Fzc2V0LnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VVcmxQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4vcm91dGUvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL3NsdWcvc2x1Zy1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWcvc2x1Zy5waXBlJztcclxuaW1wb3J0IHsgQ29va2llU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEF1dGhTZXJ2aWNlLFxyXG5cdENvcmVTZXJ2aWNlLFxyXG5cdENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UsXHJcblx0SHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxyXG5cdExhYmVsU2VydmljZSxcclxuXHRMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdExvZ2dlcixcclxuXHRNZW51U2VydmljZSxcclxuXHRPbmNlU2VydmljZSxcclxuXHRTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXHJcblx0U3RvcmFnZVNlcnZpY2UsXHJcblx0VHJhbnNsYXRlU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0TG9nZ2VyQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRMYWJlbERpcmVjdGl2ZSxcclxuXHRMYXp5TW9kdWxlRGlyZWN0aXZlLFxyXG5cdFRyYW5zbGF0ZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5cdEFzc2V0UGlwZSxcclxuXHRDdXN0b21Bc3luY1BpcGUsXHJcblx0SGlnaGxpZ2h0UGlwZSxcclxuXHRJbWFnZVBpcGUsXHJcblx0SW1hZ2VVcmxQaXBlLFxyXG5cdExhYmVsUGlwZSxcclxuXHRQdWJsaWNQaXBlLFxyXG5cdFJvdXRlUGlwZSxcclxuXHRTYWZlU3R5bGVQaXBlLFxyXG5cdFNhZmVVcmxQaXBlLFxyXG5cdFNlZ21lbnRQaXBlLFxyXG5cdFNsdWdBc3luY1BpcGUsXHJcblx0U2x1Z1BpcGUsXHJcblx0VHJhbnNsYXRlUGlwZSxcclxuXHRUcnVzdFBpcGUsXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHR7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSxcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdFx0bW9kdWxlcz86IENvcmVNb2R1bGVzLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09SRV9NT0RVTEVTLCB1c2VWYWx1ZTogbW9kdWxlcyB8fCB7fVxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==