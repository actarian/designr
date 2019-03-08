/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFD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RUFDakIsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3RDLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFJLEVBQUU7aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQzs7Z0JBdkRELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNuQjtvQkFDRCxTQUFTO3dCQUNSLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUM5RSxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7dUJBQ2pFLFFBQVEsRUFDUixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELFlBQVksbUJBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO29CQUNELGVBQWUsbUJBQ1gsVUFBVSxDQUNiO29CQUNELE9BQU8sbUJBQ0gsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxVQUFVLHVCQUEvQyxRQUFRLFlBQUksUUFBUTs7SUF1QnZCLGlCQUFDO0NBQUEsQUF6REQsSUF5REM7U0ExQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1bmRsZXMsIEJVTkRMRVMgfSBmcm9tICcuL2J1bmRsZS9idW5kbGUnO1xyXG5pbXBvcnQgeyBCdW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL2J1bmRsZS9idW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb3JlLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvcmVTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQvZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgSHR0cFN0YXR1c0NvZGVTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtc3RhdHVzLWNvZGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEpzb25Gb3JtYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZm9ybWF0dGVyL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMYWJlbFBpcGUgfSBmcm9tICcuL2xhYmVsL2xhYmVsLnBpcGUnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsL2xhYmVsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJDb21wb25lbnQgfSBmcm9tICcuL2xvZ2dlci9sb2dnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXZlbnREaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4vbW9kZWxzL2V2ZW50LWRpc3BhdGNoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbHMvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25jZVNlcnZpY2UgfSBmcm9tICcuL29uY2Uvb25jZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3V0bGV0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0L291dGxldC1kZWZhdWx0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGxldFJlcGVhdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQvb3V0bGV0LXJlcGVhdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGxldENvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0L291dGxldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBc3NldFBpcGUgfSBmcm9tICcuL3BpcGVzL2Fzc2V0LnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21Bc3luY1BpcGUgfSBmcm9tICcuL3BpcGVzL2N1c3RvbS1hc3luYy5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VVcmxQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UucGlwZSc7XHJcbmltcG9ydCB7IFB1YmxpY1BpcGUgfSBmcm9tICcuL3BpcGVzL3B1YmxpYy5waXBlJztcclxuaW1wb3J0IHsgU2VnbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL3NlZ21lbnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlUGlwZSB9IGZyb20gJy4vcm91dGUvcm91dGUucGlwZSc7XHJcbmltcG9ydCB7IFNsdWdQaXBlIH0gZnJvbSAnLi9zbHVnL3NsdWcucGlwZSc7XHJcbmltcG9ydCB7IENvb2tpZVN0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UsIFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGVQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXN0eWxlLnBpcGUnO1xyXG5pbXBvcnQgeyBTYWZlVXJsUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS11cmwucGlwZSc7XHJcbmltcG9ydCB7IFRydXN0UGlwZSB9IGZyb20gJy4vdHJ1c3QvdHJ1c3QucGlwZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRBdXRoU2VydmljZSxcclxuXHRDb3JlU2VydmljZSxcclxuXHRDb29raWVTdG9yYWdlU2VydmljZSxcclxuXHRFdmVudERpc3BhdGNoZXJTZXJ2aWNlLFxyXG5cdEh0dHBTdGF0dXNDb2RlU2VydmljZSxcclxuXHRMYWJlbFNlcnZpY2UsXHJcblx0TG9jYWxTdG9yYWdlU2VydmljZSxcclxuXHRMb2dnZXIsXHJcblx0TWVudVNlcnZpY2UsXHJcblx0T25jZVNlcnZpY2UsXHJcblx0U2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFN0b3JhZ2VTZXJ2aWNlLFxyXG5cdFRyYW5zbGF0ZVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdENvcmVNb2R1bGVDb21wb25lbnQsXHJcblx0RGlzcG9zYWJsZUNvbXBvbmVudCxcclxuXHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdExvZ2dlckNvbXBvbmVudCxcclxuXHRPdXRsZXRDb21wb25lbnQsXHJcblx0T3V0bGV0RGVmYXVsdENvbXBvbmVudCxcclxuXHRPdXRsZXRSZXBlYXRlckNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0QnVuZGxlRGlyZWN0aXZlLFxyXG5cdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdExhYmVsRGlyZWN0aXZlLFxyXG5cdFRyYW5zbGF0ZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5cdEFzc2V0UGlwZSxcclxuXHRDdXN0b21Bc3luY1BpcGUsXHJcblx0SGlnaGxpZ2h0UGlwZSxcclxuXHRJbWFnZVBpcGUsXHJcblx0SW1hZ2VVcmxQaXBlLFxyXG5cdExhYmVsUGlwZSxcclxuXHRQdWJsaWNQaXBlLFxyXG5cdFJvdXRlUGlwZSxcclxuXHRTYWZlU3R5bGVQaXBlLFxyXG5cdFNhZmVVcmxQaXBlLFxyXG5cdFNlZ21lbnRQaXBlLFxyXG5cdFNsdWdQaXBlLFxyXG5cdFRyYW5zbGF0ZVBpcGUsXHJcblx0VHJ1c3RQaXBlLFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBSZXNwb25zZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdFx0eyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHNcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRidW5kbGVzPzogQnVuZGxlcyxcclxuXHRcdGNvbmZpZz86IENvcmVDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPUkVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRwcm92aWRlOiBCVU5ETEVTLCB1c2VWYWx1ZTogYnVuZGxlcyB8fCB7fVxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==