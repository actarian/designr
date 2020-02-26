import { __read, __spread } from "tslib";
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
var components = [
    CoreModuleComponent,
    DisposableComponent,
    DisposableDirective,
    JsonFormatterComponent,
    LoggerComponent,
    OutletComponent,
    OutletDefaultComponent,
    OutletRepeaterComponent,
];
var directives = [
    BundleDirective,
    DefaultContentDirective,
    LabelDirective,
    TranslateDirective,
];
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
var validators = [];
var guards = [];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        /*
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
        */
    }
    CoreModule.forRoot = function (bundles, config) {
        return {
            ngModule: CoreModule,
            providers: [{
                    provide: CORE_CONFIG, useValue: config
                }, {
                    provide: BUNDLES, useValue: bundles || {}
                }]
        };
    };
    CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
    CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12)); }, providers: __spread([
            { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
            { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
        ], validators), imports: [[
                CommonModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return CoreModule;
}());
export { CoreModule };
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
                providers: __spread([
                    { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
                    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
                ], validators),
                declarations: __spread(components, directives, pipes, validators),
                entryComponents: __spread(components),
                exports: __spread(components, directives, pipes, validators),
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUF1QixRQUFRLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFXLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFD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QUFPLFdBQ0gsVUFBVSxFQUNWLFVBQVUsRUFDVixLQUFLLEVBQ0wsVUFBVSxDQUNiO2FBQ0Q7c0NBS3VDLFVBQVU7c0JBQS9DLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgT3B0aW9uYWwsIFNraXBTZWxmLCBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCdW5kbGVzLCBCVU5ETEVTIH0gZnJvbSAnLi9idW5kbGUvYnVuZGxlJztcclxuaW1wb3J0IHsgQnVuZGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9idW5kbGUvYnVuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvY29yZS5jb25maWcnO1xyXG5pbXBvcnQgeyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVEaXJlY3RpdmUgfSBmcm9tICcuL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBpcGUnO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC9odHRwLXJlc3BvbnNlLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgSnNvbkZvcm1hdHRlckNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1mb3JtYXR0ZXIvanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2xhYmVsL2xhYmVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhYmVsUGlwZSB9IGZyb20gJy4vbGFiZWwvbGFiZWwucGlwZSc7XHJcbmltcG9ydCB7IExvZ2dlckNvbXBvbmVudCB9IGZyb20gJy4vbG9nZ2VyL2xvZ2dlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPdXRsZXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQvb3V0bGV0LWRlZmF1bHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3V0bGV0UmVwZWF0ZXJDb21wb25lbnQgfSBmcm9tICcuL291dGxldC9vdXRsZXQtcmVwZWF0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9vdXRsZXQvb3V0bGV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFzc2V0UGlwZSB9IGZyb20gJy4vcGlwZXMvYXNzZXQucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbUFzeW5jUGlwZSB9IGZyb20gJy4vcGlwZXMvY3VzdG9tLWFzeW5jLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZVVybFBpcGUgfSBmcm9tICcuL3BpcGVzL2ltYWdlLXVybC5waXBlJztcclxuaW1wb3J0IHsgSW1hZ2VQaXBlIH0gZnJvbSAnLi9waXBlcy9pbWFnZS5waXBlJztcclxuaW1wb3J0IHsgUHVibGljUGlwZSB9IGZyb20gJy4vcGlwZXMvcHVibGljLnBpcGUnO1xyXG5pbXBvcnQgeyBTZWdtZW50UGlwZSB9IGZyb20gJy4vcGlwZXMvc2VnbWVudC5waXBlJztcclxuaW1wb3J0IHsgUm91dGVQaXBlIH0gZnJvbSAnLi9yb3V0ZS9yb3V0ZS5waXBlJztcclxuaW1wb3J0IHsgU2x1Z1BpcGUgfSBmcm9tICcuL3NsdWcvc2x1Zy5waXBlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90cmFuc2xhdGUvdHJhbnNsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZVBpcGUgfSBmcm9tICcuL3RydXN0L3NhZmUtc3R5bGUucGlwZSc7XHJcbmltcG9ydCB7IFNhZmVVcmxQaXBlIH0gZnJvbSAnLi90cnVzdC9zYWZlLXVybC5waXBlJztcclxuaW1wb3J0IHsgVHJ1c3RQaXBlIH0gZnJvbSAnLi90cnVzdC90cnVzdC5waXBlJztcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0Q29yZU1vZHVsZUNvbXBvbmVudCxcclxuXHREaXNwb3NhYmxlQ29tcG9uZW50LFxyXG5cdERpc3Bvc2FibGVEaXJlY3RpdmUsXHJcblx0SnNvbkZvcm1hdHRlckNvbXBvbmVudCxcclxuXHRMb2dnZXJDb21wb25lbnQsXHJcblx0T3V0bGV0Q29tcG9uZW50LFxyXG5cdE91dGxldERlZmF1bHRDb21wb25lbnQsXHJcblx0T3V0bGV0UmVwZWF0ZXJDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5cdEJ1bmRsZURpcmVjdGl2ZSxcclxuXHREZWZhdWx0Q29udGVudERpcmVjdGl2ZSxcclxuXHRMYWJlbERpcmVjdGl2ZSxcclxuXHRUcmFuc2xhdGVEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXHRBc3NldFBpcGUsXHJcblx0Q3VzdG9tQXN5bmNQaXBlLFxyXG5cdEhpZ2hsaWdodFBpcGUsXHJcblx0SW1hZ2VQaXBlLFxyXG5cdEltYWdlVXJsUGlwZSxcclxuXHRMYWJlbFBpcGUsXHJcblx0UHVibGljUGlwZSxcclxuXHRSb3V0ZVBpcGUsXHJcblx0U2FmZVN0eWxlUGlwZSxcclxuXHRTYWZlVXJsUGlwZSxcclxuXHRTZWdtZW50UGlwZSxcclxuXHRTbHVnUGlwZSxcclxuXHRUcmFuc2xhdGVQaXBlLFxyXG5cdFRydXN0UGlwZSxcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cFJlc3BvbnNlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXHJcblx0XHR7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIgfSxcclxuXHRcdC4uLnZhbGlkYXRvcnMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XHQuLi5kaXJlY3RpdmVzLFxyXG5cdFx0Li4ucGlwZXMsXHJcblx0XHQuLi52YWxpZGF0b3JzLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdFx0Li4uZGlyZWN0aXZlcyxcclxuXHRcdC4uLnBpcGVzLFxyXG5cdFx0Li4udmFsaWRhdG9ycyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0LypcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0YnVuZGxlcz86IEJ1bmRsZXMsXHJcblx0XHRjb25maWc/OiBDb3JlQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IENvcmVNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW3tcclxuXHRcdFx0XHRwcm92aWRlOiBDT1JFX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ1xyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0cHJvdmlkZTogQlVORExFUywgdXNlVmFsdWU6IGJ1bmRsZXMgfHwge31cclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=