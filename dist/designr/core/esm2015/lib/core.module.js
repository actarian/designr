import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BUNDLES } from './bundle/bundle';
import { BundleDirective } from './bundle/bundle.directive';
import { CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { DisposableComponent } from './disposable/disposable.component';
import { DisposableDirective } from './disposable/disposable.directive';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelDirective } from './label/label.directive';
import { LabelPipe } from './label/label.pipe';
import { LoggerComponent } from './logger/logger.component';
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
import { TranslateDirective } from './translate/translate.directive';
import { TranslatePipe } from './translate/translate.pipe';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';
import * as i0 from "@angular/core";
const components = [
    CoreModuleComponent,
    DisposableComponent,
    DisposableDirective,
    JsonFormatterComponent,
    LoggerComponent,
    OutletComponent,
    OutletDefaultComponent,
    OutletRepeaterComponent,
];
const directives = [
    BundleDirective,
    DefaultContentDirective,
    LabelDirective,
    TranslateDirective,
];
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
    SlugPipe,
    TranslatePipe,
    TrustPipe,
];
const validators = [];
const guards = [];
export class CoreModule {
    constructor(parentModule) {
        /*
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    static forRoot(bundles, config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: BUNDLES, useValue: bundles || {}
                }]
        };
    }
}
CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12)); }, providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        ...validators,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [CoreModuleComponent,
        DisposableComponent,
        DisposableDirective,
        JsonFormatterComponent,
        LoggerComponent,
        OutletComponent,
        OutletDefaultComponent,
        OutletRepeaterComponent,
        BundleDirective,
        DefaultContentDirective,
        LabelDirective,
        TranslateDirective,
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
        TrustPipe], imports: [CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule], exports: [CoreModuleComponent,
        DisposableComponent,
        DisposableDirective,
        JsonFormatterComponent,
        LoggerComponent,
        OutletComponent,
        OutletDefaultComponent,
        OutletRepeaterComponent,
        BundleDirective,
        DefaultContentDirective,
        LabelDirective,
        TranslateDirective,
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
        TrustPipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
                    ...validators,
                ],
                declarations: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
                entryComponents: [
                    ...components
                ],
                exports: [
                    ...components,
                    ...directives,
                    ...pipes,
                    ...validators,
                ],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQVcsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMv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QUNiO2dCQUNELGVBQWUsRUFBRTtvQkFDaEIsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixHQUFHLFVBQVU7b0JBQ2IsR0FBRyxVQUFVO29CQUNiLEdBQUcsS0FBSztvQkFDUixHQUFHLFVBQVU7aUJBQ2I7YUFDRDtzQ0FLdUMsVUFBVTtzQkFBL0MsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYsIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJ1bmRsZXMsIEJVTkRMRVMgfSBmcm9tICcuL2J1bmRsZS9idW5kbGUnO1xyXG5pbXBvcnQgeyBCdW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL2J1bmRsZS9idW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZUNvbmZpZywgQ09SRV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9jb3JlLmNvbmZpZyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2RlZmF1bHQtY29udGVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodFBpcGUgfSBmcm9tICcuL2hpZ2hsaWdodC9oaWdobGlnaHQucGlwZSc7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZUludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwL2h0dHAtcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBKc29uRm9ybWF0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWZvcm1hdHRlci9qc29uLWZvcm1hdHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGFiZWxQaXBlIH0gZnJvbSAnLi9sYWJlbC9sYWJlbC5waXBlJztcclxuaW1wb3J0IHsgTG9nZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE91dGxldERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC9vdXRsZXQtZGVmYXVsdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdXRsZXRSZXBlYXRlckNvbXBvbmVudCB9IGZyb20gJy4vb3V0bGV0L291dGxldC1yZXBlYXRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL291dGxldC9vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRQaXBlIH0gZnJvbSAnLi9waXBlcy9hc3NldC5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tQXN5bmNQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXN0b20tYXN5bmMucGlwZSc7XHJcbmltcG9ydCB7IEltYWdlVXJsUGlwZSB9IGZyb20gJy4vcGlwZXMvaW1hZ2UtdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLnBpcGUnO1xyXG5pbXBvcnQgeyBQdWJsaWNQaXBlIH0gZnJvbSAnLi9waXBlcy9wdWJsaWMucGlwZSc7XHJcbmltcG9ydCB7IFNlZ21lbnRQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWdtZW50LnBpcGUnO1xyXG5pbXBvcnQgeyBSb3V0ZVBpcGUgfSBmcm9tICcuL3JvdXRlL3JvdXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBTbHVnUGlwZSB9IGZyb20gJy4vc2x1Zy9zbHVnLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlL3RyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlUGlwZSB9IGZyb20gJy4vdHJ1c3Qvc2FmZS1zdHlsZS5waXBlJztcclxuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtdXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBUcnVzdFBpcGUgfSBmcm9tICcuL3RydXN0L3RydXN0LnBpcGUnO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRDb3JlTW9kdWxlQ29tcG9uZW50LFxyXG5cdERpc3Bvc2FibGVDb21wb25lbnQsXHJcblx0RGlzcG9zYWJsZURpcmVjdGl2ZSxcclxuXHRKc29uRm9ybWF0dGVyQ29tcG9uZW50LFxyXG5cdExvZ2dlckNvbXBvbmVudCxcclxuXHRPdXRsZXRDb21wb25lbnQsXHJcblx0T3V0bGV0RGVmYXVsdENvbXBvbmVudCxcclxuXHRPdXRsZXRSZXBlYXRlckNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0QnVuZGxlRGlyZWN0aXZlLFxyXG5cdERlZmF1bHRDb250ZW50RGlyZWN0aXZlLFxyXG5cdExhYmVsRGlyZWN0aXZlLFxyXG5cdFRyYW5zbGF0ZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5cdEFzc2V0UGlwZSxcclxuXHRDdXN0b21Bc3luY1BpcGUsXHJcblx0SGlnaGxpZ2h0UGlwZSxcclxuXHRJbWFnZVBpcGUsXHJcblx0SW1hZ2VVcmxQaXBlLFxyXG5cdExhYmVsUGlwZSxcclxuXHRQdWJsaWNQaXBlLFxyXG5cdFJvdXRlUGlwZSxcclxuXHRTYWZlU3R5bGVQaXBlLFxyXG5cdFNhZmVVcmxQaXBlLFxyXG5cdFNlZ21lbnRQaXBlLFxyXG5cdFNsdWdQaXBlLFxyXG5cdFRyYW5zbGF0ZVBpcGUsXHJcblx0VHJ1c3RQaXBlLFxyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtdO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW107XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcclxuXHRcdHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogU3lzdGVtSnNOZ01vZHVsZUxvYWRlciB9LFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XHQuLi5waXBlcyxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHNcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlXHJcblx0KSB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHRcdCovXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRidW5kbGVzPzogQnVuZGxlcyxcclxuXHRcdGNvbmZpZz86IENvcmVDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogQ29yZU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0XHRcdHByb3ZpZGU6IENPUkVfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRwcm92aWRlOiBCVU5ETEVTLCB1c2VWYWx1ZTogYnVuZGxlcyB8fCB7fVxyXG5cdFx0XHR9XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==