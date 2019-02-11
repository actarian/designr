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
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUs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LFNBQVM7d0JBQ1QsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsTUFBTTt3QkFDTixjQUFjO3dCQUNkLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxTQUFTLEVBQUUsV0FBVzt3QkFDdEIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsYUFBYTt3QkFDYixRQUFRO3dCQUNSLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixTQUFTO3FCQUNUO2lCQUNEOzs7O2dCQUt1QyxVQUFVLHVCQUEvQyxRQUFRLFlBQUksUUFBUTs7SUFrQnZCLGlCQUFDO0NBQUEsQUExSEQsSUEwSEM7U0FyQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnLCBDT1JFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQvZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvcmVSb3V0aW5nIH0gZnJvbSAnLi9jb3JlLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sU2VydmljZSB9IGZyb20gJy4vZm9ybXMvY29udHJvbHMvY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXhpc3RzVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9leGlzdHMudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSAnLi9mb3Jtcy9tYXRjaC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBVcHBlcmNhc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm1zL3VwcGVyY2FzZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybWF0dGVyL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsQXN5bmNQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwtYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbHMvbGFiZWwucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vbW9kZWxzL2V2ZW50LWRpc3BhdGNoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuL29uY2Uvb25jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFnZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLW91dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VHdWFyZCB9IGZyb20gJy4vcGFnZXMvcGFnZS5ndWFyZCc7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlcy9wYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0aWNHdWFyZCB9IGZyb20gJy4vcGFnZXMvc3RhdGljLmd1YXJkJztcclxuaW1wb3J0IHsgQXNzZXRQaXBlIH0gZnJvbSAnLi9waXBlcy9hc3NldC5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4vcm91dGVzL3JvdXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnQXN5bmNQaXBlIH0gZnJvbSAnLi9zbHVncy9zbHVnLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnUGlwZSB9IGZyb20gJy4vc2x1Z3Mvc2x1Zy5waXBlJztcclxuaW1wb3J0IHsgQ29va2llU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsIFNlc3Npb25TdG9yYWdlU2VydmljZSwgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS1zdHlsZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVzdFBpcGUgfSBmcm9tICcuL3RydXN0L3RydXN0LnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Q29yZVJvdXRpbmcsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFzc2V0UGlwZSxcclxuXHRcdENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdFx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0XHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0XHRMYWJlbEFzeW5jUGlwZSxcclxuXHRcdExhYmVsRGlyZWN0aXZlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TG9nZ2VyQ29tcG9uZW50LFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRQYWdlQ29tcG9uZW50LFxyXG5cdFx0UGFnZU5vdEZvdW5kQ29tcG9uZW50LFxyXG5cdFx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXHRcdFB1YmxpY1BpcGUsXHJcblx0XHRSb3V0ZVBpcGUsXHJcblx0XHRTYWZlU3R5bGVQaXBlLFxyXG5cdFx0U2FmZVVybFBpcGUsXHJcblx0XHRTZWdtZW50UGlwZSxcclxuXHRcdFNsdWdBc3luY1BpcGUsXHJcblx0XHRTbHVnUGlwZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XHRVcHBlcmNhc2VEaXJlY3RpdmUsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRBc3NldFBpcGUsXHJcblx0XHRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdFx0RXhpc3RzVmFsaWRhdG9yLFxyXG5cdFx0SGlnaGxpZ2h0UGlwZSxcclxuXHRcdEltYWdlUGlwZSxcclxuXHRcdEpzb25Gb3JtYXR0ZXJDb21wb25lbnQsXHJcblx0XHRMYWJlbEFzeW5jUGlwZSxcclxuXHRcdExhYmVsRGlyZWN0aXZlLFxyXG5cdFx0TGFiZWxQaXBlLFxyXG5cdFx0TG9nZ2VyQ29tcG9uZW50LFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRQYWdlQ29tcG9uZW50LFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVTdHlsZVBpcGUsXHJcblx0XHRTYWZlVXJsUGlwZSxcclxuXHRcdFNlZ21lbnRQaXBlLFxyXG5cdFx0U2x1Z0FzeW5jUGlwZSxcclxuXHRcdFNsdWdQaXBlLFxyXG5cdFx0VHJhbnNsYXRlUGlwZSxcclxuXHRcdFRydXN0UGlwZSxcclxuXHRcdFVwcGVyY2FzZURpcmVjdGl2ZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdFx0QXNzZXRQaXBlLFxyXG5cdFx0QXV0aFNlcnZpY2UsXHJcblx0XHRDb25maWdTZXJ2aWNlLFxyXG5cdFx0Q29udHJvbFNlcnZpY2UsXHJcblx0XHRDb29raWVTdG9yYWdlU2VydmljZSxcclxuXHRcdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRcdEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UsXHJcblx0XHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0XHRGb3JtU2VydmljZSxcclxuXHRcdEhpZ2hsaWdodFBpcGUsXHJcblx0XHRIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXHJcblx0XHRJbWFnZVBpcGUsXHJcblx0XHRMYWJlbFBpcGUsXHJcblx0XHRMYWJlbFNlcnZpY2UsXHJcblx0XHRMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFx0TG9nZ2VyLFxyXG5cdFx0TWF0Y2hWYWxpZGF0b3IsXHJcblx0XHRNZW51U2VydmljZSxcclxuXHRcdE9uY2VTZXJ2aWNlLFxyXG5cdFx0UGFnZUd1YXJkLCBTdGF0aWNHdWFyZCxcclxuXHRcdFBhZ2VTZXJ2aWNlLFxyXG5cdFx0UHVibGljUGlwZSxcclxuXHRcdFJvdXRlUGlwZSxcclxuXHRcdFNhZmVVcmxQaXBlLFxyXG5cdFx0U2VnbWVudFBpcGUsXHJcblx0XHRTZXNzaW9uU3RvcmFnZVNlcnZpY2UsXHJcblx0XHRTbHVnQXN5bmNQaXBlLFxyXG5cdFx0U2x1Z1BpcGUsXHJcblx0XHRTdG9yYWdlU2VydmljZSxcclxuXHRcdFRyYW5zbGF0ZVBpcGUsXHJcblx0XHRUcnVzdFBpcGUsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==