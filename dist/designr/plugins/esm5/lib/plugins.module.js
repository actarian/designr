import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { PLUGINS_CONFIG } from './config/plugins.config';
import { PluginsService } from './config/plugins.service';
import { PluginsModuleComponent } from './plugins-module.component';
import { FacebookService } from './plugins/facebook/facebook.service';
import { GoogleTagManagerComponent } from './plugins/google/google-tag-manager.component';
import { GoogleTagManagerService } from './plugins/google/google-tag-manager.service';
import { GoogleService } from './plugins/google/google.service';
import { MapboxService } from './plugins/mapbox/mapbox.service';
import { PayPalWidgetComponent } from './plugins/paypal/paypal-widget.component';
import { PayPalService } from './plugins/paypal/paypal.service';
import { SwiperComponent } from './plugins/swiper/swiper.component';
import { SwiperDirective } from './plugins/swiper/swiper.directive';
import { TrustPilotWidgetComponent } from './plugins/trustpilot/trustpilot-widget.component';
import { TrustPilotService } from './plugins/trustpilot/trustpilot.service';
import * as i0 from "@angular/core";
var services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
var components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var PluginsModule = /** @class */ (function () {
    function PluginsModule(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    PluginsModule.forRoot = function (config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    };
    PluginsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PluginsModule });
    PluginsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PluginsModule_Factory(t) { return new (t || PluginsModule)(i0.ɵɵinject(PluginsModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                CoreModule,
            ],
            CoreModule] });
    return PluginsModule;
}());
export { PluginsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PluginsModule, { declarations: [PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        PluginsModuleComponent,
        GoogleTagManagerComponent,
        PayPalWidgetComponent,
        TrustPilotWidgetComponent,
        SwiperComponent,
        SwiperDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PluginsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components),
                exports: __spread([
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: PluginsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQUU1RSxJQUFNLFFBQVEsR0FBRztJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7Q0FDakIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtDQUNmLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQUVGO0lBbUJDLHVCQUN5QixZQUEyQjtRQUVuRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDcEY7SUFDRixDQUFDO0lBRWEscUJBQU8sR0FBckIsVUFDQyxNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0QsQ0FBQztJQUNILENBQUM7cURBbkJXLGFBQWE7NkdBQWIsYUFBYSxjQUdjLGFBQWEsK0JBZGhELFFBQVEsYUFMSDtnQkFDUixZQUFZO2dCQUNaLFVBQVU7YUFDVjtZQVFBLFVBQVU7d0JBN0RaO0NBc0ZDLEFBckNELElBcUNDO1NBcEJZLGFBQWE7d0ZBQWIsYUFBYSxtQkFyQ3pCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsZUFBZSxhQWlCZCxZQUFZO1FBQ1osVUFBVSxhQVNWLFVBQVU7UUFoQ1gsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlO2tEQWdDSCxhQUFhO2NBakJ6QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtpQkFDVjtnQkFDRCxTQUFTLFdBQ0wsUUFBUSxDQUNYO2dCQUNELFlBQVksV0FDUixVQUFVLENBQ2I7Z0JBQ0QsT0FBTztvQkFDTixVQUFVO21CQUNQLFVBQVUsQ0FDYjthQUNEO3NDQUt1QyxhQUFhO3NCQUFsRCxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbnNDb25maWcsIFBMVUdJTlNfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvcGx1Z2lucy5jb25maWcnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsdWdpbnNNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2Vib29rU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwYm94U2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9tYXBib3gvbWFwYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXlQYWxXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9wYXlwYWwvcGF5cGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTd2lwZXJDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvc3dpcGVyL3N3aXBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTd2lwZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BsdWdpbnMvc3dpcGVyL3N3aXBlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LnNlcnZpY2UnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0UGx1Z2luc1NlcnZpY2UsXHJcblx0RmFjZWJvb2tTZXJ2aWNlLFxyXG5cdEdvb2dsZVNlcnZpY2UsXHJcblx0R29vZ2xlVGFnTWFuYWdlclNlcnZpY2UsXHJcblx0TWFwYm94U2VydmljZSxcclxuXHRQYXlQYWxTZXJ2aWNlLFxyXG5cdFRydXN0UGlsb3RTZXJ2aWNlLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRQbHVnaW5zTW9kdWxlQ29tcG9uZW50LFxyXG5cdEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQsXHJcblx0UGF5UGFsV2lkZ2V0Q29tcG9uZW50LFxyXG5cdFRydXN0UGlsb3RXaWRnZXRDb21wb25lbnQsXHJcblx0U3dpcGVyQ29tcG9uZW50LFxyXG5cdFN3aXBlckRpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHNcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGx1Z2luc01vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQbHVnaW5zTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2luc01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogUGx1Z2luc0NvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBQbHVnaW5zTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IFBMVUdJTlNfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdfQ==