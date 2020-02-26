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
const services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
const components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
    SwiperComponent,
    SwiperDirective,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
export class PluginsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    }
}
PluginsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PluginsModule });
PluginsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PluginsModule_Factory(t) { return new (t || PluginsModule)(i0.ɵɵinject(PluginsModule, 12)); }, providers: [
        ...services
    ], imports: [[
            CommonModule,
            CoreModule,
        ],
        CoreModule] });
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
                providers: [
                    ...services
                ],
                declarations: [
                    ...components
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            }]
    }], function () { return [{ type: PluginsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRTVFLE1BQU0sUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtDQUNqQixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0NBQ2YsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxFQUNiLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsRUFDZCxDQUFDO0FBbUJGLE1BQU0sT0FBTyxhQUFhO0lBRXpCLFlBQ3lCLFlBQTJCO1FBRW5ELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUNwRjtJQUNGLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNwQixNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0QsQ0FBQztJQUNILENBQUM7O2lEQW5CVyxhQUFhO3lHQUFiLGFBQWEsY0FHYyxhQUFhLHNCQWZ6QztRQUNWLEdBQUcsUUFBUTtLQUNYLFlBTlE7WUFDUixZQUFZO1lBQ1osVUFBVTtTQUNWO1FBUUEsVUFBVTt3RkFLQyxhQUFhLG1CQXJDekIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixlQUFlLGFBaUJkLFlBQVk7UUFDWixVQUFVLGFBU1YsVUFBVTtRQWhDWCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGVBQWU7a0RBZ0NILGFBQWE7Y0FqQnpCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixVQUFVO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtvQkFDVixHQUFHLFVBQVU7aUJBQ2I7YUFDRDtzQ0FLdUMsYUFBYTtzQkFBbEQsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW5zQ29uZmlnLCBQTFVHSU5TX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3BsdWdpbnMuY29uZmlnJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5zTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZmFjZWJvb2svZmFjZWJvb2suc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcGJveFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3BheXBhbC9wYXlwYWwtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3dpcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3N3aXBlci9zd2lwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3dpcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9wbHVnaW5zL3N3aXBlci9zd2lwZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy90cnVzdHBpbG90L3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdFBsdWdpbnNTZXJ2aWNlLFxyXG5cdEZhY2Vib29rU2VydmljZSxcclxuXHRHb29nbGVTZXJ2aWNlLFxyXG5cdEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxyXG5cdE1hcGJveFNlcnZpY2UsXHJcblx0UGF5UGFsU2VydmljZSxcclxuXHRUcnVzdFBpbG90U2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0UGx1Z2luc01vZHVsZUNvbXBvbmVudCxcclxuXHRHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50LFxyXG5cdFBheVBhbFdpZGdldENvbXBvbmVudCxcclxuXHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5cdFN3aXBlckNvbXBvbmVudCxcclxuXHRTd2lwZXJEaXJlY3RpdmUsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlc1xyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsdWdpbnNNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUGx1Z2luc01vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbnNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFBsdWdpbnNDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUGx1Z2luc01vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBQTFVHSU5TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=