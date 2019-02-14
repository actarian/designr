/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var modules = [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRouting,
];
/** @type {?} */
var services = [
    AuthService,
    ConfigService,
    ControlService,
    CookieStorageService,
    EventDispatcherService,
    FormService,
    HttpStatusCodeService,
    LabelService,
    LocalStorageService,
    Logger,
    MenuService,
    OnceService,
    PageService,
    SessionStorageService,
    StorageService,
];
/** @type {?} */
var components = [
    ControlComponent,
    CoreModuleComponent,
    DisposableComponent,
    JsonFormatterComponent,
    LoggerComponent,
    PageComponent,
    PageNotFoundComponent,
    PageOutletComponent,
];
/** @type {?} */
var directives = [
    DefaultContentDirective,
    LabelDirective,
    UppercaseDirective,
];
/** @type {?} */
var pipes = [
    AssetPipe,
    CustomAsyncPipe,
    HighlightPipe,
    ImagePipe,
    LabelAsyncPipe,
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
var validators = [
    ExistsValidator,
    MatchValidator,
];
/** @type {?} */
var guards = [
    PageGuard,
    StaticGuard,
];
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
                    imports: tslib_1.__spread(modules),
                    providers: tslib_1.__spread([
                        { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true }
                    ], services, pipes, validators, guards),
                    declarations: tslib_1.__spread(components, directives, pipes, validators),
                    exports: tslib_1.__spread(modules, components, directives, pipes, validators),
                },] }
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFF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Q0FDYjtpQkFDRDs7OztnQkFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVE7O0lBa0J2QixpQkFBQztDQUFBLEFBL0NELElBK0NDO1NBckJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb3JlLmNvbmZpZyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3JlUm91dGluZyB9IGZyb20gJy4vY29yZS5yb3V0aW5nJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1zL2NvbnRyb2xzL2NvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEV4aXN0c1ZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvZXhpc3RzLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9mb3Jtcy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gJy4vZm9ybXMvbWF0Y2gudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgVXBwZXJjYXNlRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy91cHBlcmNhc2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAvaHR0cC1yZXNwb25zZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEh0dHBTdGF0dXNDb2RlU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXN0YXR1cy1jb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbEFzeW5jUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhYmVsUGlwZSB9IGZyb20gJy4vbGFiZWxzL2xhYmVsLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVscy9sYWJlbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9ldmVudC1kaXNwYXRjaGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbW9kZWxzL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9uY2VTZXJ2aWNlIH0gZnJvbSAnLi9vbmNlL29uY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZU91dGxldENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3BhZ2UuZ3VhcmQnO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gJy4vcGFnZXMvcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3RhdGljR3VhcmQgfSBmcm9tICcuL3BhZ2VzL3N0YXRpYy5ndWFyZCc7XHJcbmltcG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vcGlwZXMvYXNzZXQucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLnBpcGUnO1xyXG5pbXBvcnQgeyBQdWJsaWNQaXBlIH0gZnJvbSAnLi9waXBlcy9wdWJsaWMucGlwZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWdtZW50LnBpcGUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuL3JvdXRlcy9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z0FzeW5jUGlwZSB9IGZyb20gJy4vc2x1Z3Mvc2x1Zy1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWdzL3NsdWcucGlwZSc7XHJcbmltcG9ydCB7IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcblx0Q29tbW9uTW9kdWxlLFxyXG5cdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0Rm9ybXNNb2R1bGUsXHJcblx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRDb3JlUm91dGluZyxcclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEF1dGhTZXJ2aWNlLFxyXG5cdENvbmZpZ1NlcnZpY2UsXHJcblx0Q29udHJvbFNlcnZpY2UsXHJcblx0Q29va2llU3RvcmFnZVNlcnZpY2UsXHJcblx0RXZlbnREaXNwYXRjaGVyU2VydmljZSxcclxuXHRGb3JtU2VydmljZSxcclxuXHRIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXHJcblx0TGFiZWxTZXJ2aWNlLFxyXG5cdExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcblx0TG9nZ2VyLFxyXG5cdE1lbnVTZXJ2aWNlLFxyXG5cdE9uY2VTZXJ2aWNlLFxyXG5cdFBhZ2VTZXJ2aWNlLFxyXG5cdFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuXHRTdG9yYWdlU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29udHJvbENvbXBvbmVudCxcclxuXHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdERpc3Bvc2FibGVDb21wb25lbnQsXHJcblx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRMb2dnZXJDb21wb25lbnQsXHJcblx0UGFnZUNvbXBvbmVudCxcclxuXHRQYWdlTm90Rm91bmRDb21wb25lbnQsXHJcblx0UGFnZU91dGxldENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0RGVmYXVsdENvbnRlbnREaXJlY3RpdmUsXHJcblx0TGFiZWxEaXJlY3RpdmUsXHJcblx0VXBwZXJjYXNlRGlyZWN0aXZlLFxyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcblx0QXNzZXRQaXBlLFxyXG5cdEN1c3RvbUFzeW5jUGlwZSxcclxuXHRIaWdobGlnaHRQaXBlLFxyXG5cdEltYWdlUGlwZSxcclxuXHRMYWJlbEFzeW5jUGlwZSxcclxuXHRMYWJlbFBpcGUsXHJcblx0UHVibGljUGlwZSxcclxuXHRSb3V0ZVBpcGUsXHJcblx0U2FmZVN0eWxlUGlwZSxcclxuXHRTYWZlVXJsUGlwZSxcclxuXHRTZWdtZW50UGlwZSxcclxuXHRTbHVnQXN5bmNQaXBlLFxyXG5cdFNsdWdQaXBlLFxyXG5cdFRyYW5zbGF0ZVBpcGUsXHJcblx0VHJ1c3RQaXBlLFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXHRFeGlzdHNWYWxpZGF0b3IsXHJcblx0TWF0Y2hWYWxpZGF0b3IsXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcblx0UGFnZUd1YXJkLFxyXG5cdFN0YXRpY0d1YXJkLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRcdC4uLmd1YXJkcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==