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
import { BUNDLES } from './bundle/bundle';
import { BundleDirective } from './bundle/bundle.directive';
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
import { OnceService } from './once/once.service';
import { OutletDefaultComponent } from './outlet/outlet-default.component';
import { OutletRepeaterComponent } from './outlet/outlet-repeater.component';
import { OutletComponent } from './outlet/outlet.component';
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
    OutletComponent,
    OutletDefaultComponent,
    OutletRepeaterComponent,
];
/** @type {?} */
var directives = [
    BundleDirective,
    DefaultContentDirective,
    LabelDirective,
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
     * @param {?=} bundles
     * @param {?=} config
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @param {?=} bundles
     * @param {?=} config
     * @return {?}
     */
    function (bundles, config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: BUNDLES, useValue: bundles || {}
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
                    entryComponents: tslib_1.__spread(components),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFD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O1VBSUU7SUFDSCxDQUFDOzs7Ozs7SUFFYSxrQkFBTzs7Ozs7SUFBckIsVUFDQyxPQUFpQixFQUNqQixNQUFtQjtRQUVuQixPQUFPO1lBQ04sUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTTtpQkFDdEMsRUFBRTtvQkFDRixPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksRUFBRTtpQkFDekMsQ0FBQztTQUNGLENBQUM7SUFDSCxDQUFDOztnQkF2REQsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ25CO29CQUNELFNBQVM7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQzlFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTt1QkFDakUsUUFBUSxFQUNSLEtBQUssRUFDTCxVQUFVLENBQ2I7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLENBQ2I7b0JBQ0QsZUFBZSxtQkFDWCxVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFVBQVUsdUJBQS9DLFFBQVEsWUFBSSxRQUFROztJQXVCdkIsaUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQTFCWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiwgU3lzdGVtSnNOZ01vZHVsZUxvYWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVuZGxlcywgQlVORExFUyB9IGZyb20gJy4vYnVuZGxlL2J1bmRsZSc7XHJcbmltcG9ydCB7IEJ1bmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vYnVuZGxlL2J1bmRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlQ29uZmlnLCBDT1JFX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL2NvcmUuY29uZmlnJztcclxuaW1wb3J0IHsgQ29yZVNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwL2h0dHAtcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBIdHRwU3RhdHVzQ29kZVNlcnZpY2UgfSBmcm9tICcuL2h0dHAvaHR0cC1zdGF0dXMtY29kZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSnNvbkZvcm1hdHRlckNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2xhYmVsL2xhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhYmVsUGlwZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwucGlwZSc7XHJcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwuc2VydmljZSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlcic7XHJcbmltcG9ydCB7IExvZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFdmVudERpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvZXZlbnQtZGlzcGF0Y2hlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21vZGVscy9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPbmNlU2VydmljZSB9IGZyb20gJy4vb25jZS9vbmNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPdXRsZXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQvb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3V0bGV0UmVwZWF0ZXJDb21wb25lbnQgfSBmcm9tICcuL291dGxldC9vdXRsZXQtcmVwZWF0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQvb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vcGlwZXMvYXNzZXQucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVVybFBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLXVybC5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgUHVibGljUGlwZSB9IGZyb20gJy4vcGlwZXMvcHVibGljLnBpcGUnO1xyXG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vcGlwZXMvc2VnbWVudC5waXBlJztcclxuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9yb3V0ZS9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z0FzeW5jUGlwZSB9IGZyb20gJy4vc2x1Zy9zbHVnLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnUGlwZSB9IGZyb20gJy4vc2x1Zy9zbHVnLnBpcGUnO1xyXG5pbXBvcnQgeyBDb29raWVTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLCBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS1zdHlsZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVzdFBpcGUgfSBmcm9tICcuL3RydXN0L3RydXN0LnBpcGUnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0QXV0aFNlcnZpY2UsXHJcblx0Q29yZVNlcnZpY2UsXHJcblx0Q29va2llU3RvcmFnZVNlcnZpY2UsXHJcblx0RXZlbnREaXNwYXRjaGVyU2VydmljZSxcclxuXHRIdHRwU3RhdHVzQ29kZVNlcnZpY2UsXHJcblx0TGFiZWxTZXJ2aWNlLFxyXG5cdExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcblx0TG9nZ2VyLFxyXG5cdE1lbnVTZXJ2aWNlLFxyXG5cdE9uY2VTZXJ2aWNlLFxyXG5cdFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuXHRTdG9yYWdlU2VydmljZSxcclxuXHRUcmFuc2xhdGVTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdERpc3Bvc2FibGVDb21wb25lbnQsXHJcblx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRMb2dnZXJDb21wb25lbnQsXHJcblx0T3V0bGV0Q29tcG9uZW50LFxyXG5cdE91dGxldERlZmF1bHRDb21wb25lbnQsXHJcblx0T3V0bGV0UmVwZWF0ZXJDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdEJ1bmRsZURpcmVjdGl2ZSxcclxuXHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRMYWJlbERpcmVjdGl2ZSxcclxuXHRUcmFuc2xhdGVEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXHRBc3NldFBpcGUsXHJcblx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdEhpZ2hsaWdodFBpcGUsXHJcblx0SW1hZ2VQaXBlLFxyXG5cdEltYWdlVXJsUGlwZSxcclxuXHRMYWJlbFBpcGUsXHJcblx0UHVibGljUGlwZSxcclxuXHRSb3V0ZVBpcGUsXHJcblx0U2FmZVN0eWxlUGlwZSxcclxuXHRTYWZlVXJsUGlwZSxcclxuXHRTZWdtZW50UGlwZSxcclxuXHRTbHVnQXN5bmNQaXBlLFxyXG5cdFNsdWdQaXBlLFxyXG5cdFRyYW5zbGF0ZVBpcGUsXHJcblx0VHJ1c3RQaXBlLFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdFx0eyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHNcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRidW5kbGVzPzogQnVuZGxlcyxcclxuXHRcdGNvbmZpZz86IENvcmVDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPUkVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRwcm92aWRlOiBCVU5ETEVTLCB1c2VWYWx1ZTogYnVuZGxlcyB8fCB7fVxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==