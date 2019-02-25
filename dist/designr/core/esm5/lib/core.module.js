/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var services = [
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
var components = [
    CoreModuleComponent,
    DisposableComponent,
    JsonFormatterComponent,
    LoggerComponent,
];
/** @type {?} */
var directives = [
    DefaultContentDirective,
    LabelDirective,
    LazyModuleDirective,
    TranslateDirective,
];
/** @type {?} */
var pipes = [
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
var validators = [];
/** @type {?} */
var guards = [];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
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
    CoreModule.forRoot = /**
     * @param {?=} config
     * @param {?=} modules
     * @return {?}
     */
    function (config, modules) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: CORE_MODULES, useValue: modules || {}
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
                    ],
                    providers: tslib_1.__spread([
                        { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
                    ], services, pipes, validators),
                    declarations: tslib_1.__spread(components, directives, pipes, validators),
                    exports: tslib_1.__spread(components, directives, pipes, validators),
                },] }
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFD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LEVBQUU7b0JBQ0YsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFJLEVBQUU7aUJBQzlDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQzs7Z0JBcERELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNuQjtvQkFDRCxTQUFTO3dCQUNSLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUM5RSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7dUJBQ2pFLFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELFlBQVksbUJBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxVQUFVLHVCQUEvQyxRQUFRLFlBQUksUUFBUTs7SUF1QnZCLGlCQUFDO0NBQUEsQUF0REQsSUFzREM7U0ExQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBDb3JlU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAvaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5waXBlJztcclxuaW1wb3J0IHsgTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbW9kZWxzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVzLCBDT1JFX01PRFVMRVMgfSBmcm9tICcuL21vZHVsZXMvY29yZS5tb2R1bGVzJztcclxuaW1wb3J0IHsgTGF6eU1vZHVsZURpcmVjdGl2ZSB9IGZyb20gJy4vbW9kdWxlcy9sYXp5LW1vZHVsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vb25jZS9vbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBc3NldFBpcGUgfSBmcm9tICcuL3BpcGVzL2Fzc2V0LnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VVcmxQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4vcm91dGUvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdBc3luY1BpcGUgfSBmcm9tICcuL3NsdWcvc2x1Zy1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWcvc2x1Zy5waXBlJztcclxuaW1wb3J0IHsgQ29va2llU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEF1dGhTZXJ2aWNlLFxyXG5cdENvcmVTZXJ2aWNlLFxyXG5cdENvb2tpZVN0b3JhZ2VTZXJ2aWNlLFxyXG5cdEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UsXHJcblx0SHR0cFN0YXR1c0NvZGVTZXJ2aWNlLFxyXG5cdExhYmVsU2VydmljZSxcclxuXHRMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdExvZ2dlcixcclxuXHRNZW51U2VydmljZSxcclxuXHRPbmNlU2VydmljZSxcclxuXHRTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXHJcblx0U3RvcmFnZVNlcnZpY2UsXHJcblx0VHJhbnNsYXRlU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0TG9nZ2VyQ29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRMYWJlbERpcmVjdGl2ZSxcclxuXHRMYXp5TW9kdWxlRGlyZWN0aXZlLFxyXG5cdFRyYW5zbGF0ZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5cdEFzc2V0UGlwZSxcclxuXHRDdXN0b21Bc3luY1BpcGUsXHJcblx0SGlnaGxpZ2h0UGlwZSxcclxuXHRJbWFnZVBpcGUsXHJcblx0SW1hZ2VVcmxQaXBlLFxyXG5cdExhYmVsUGlwZSxcclxuXHRQdWJsaWNQaXBlLFxyXG5cdFJvdXRlUGlwZSxcclxuXHRTYWZlU3R5bGVQaXBlLFxyXG5cdFNhZmVVcmxQaXBlLFxyXG5cdFNlZ21lbnRQaXBlLFxyXG5cdFNsdWdBc3luY1BpcGUsXHJcblx0U2x1Z1BpcGUsXHJcblx0VHJhbnNsYXRlUGlwZSxcclxuXHRUcnVzdFBpcGUsXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHR7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSxcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdFx0bW9kdWxlcz86IENvcmVNb2R1bGVzLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0cHJvdmlkZTogQ09SRV9NT0RVTEVTLCB1c2VWYWx1ZTogbW9kdWxlcyB8fCB7fVxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==