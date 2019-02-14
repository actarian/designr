/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { TrustPilotWidgetComponent } from './plugins/trustpilot/trustpilot-widget.component';
import { TrustPilotService } from './plugins/trustpilot/trustpilot.service';
/** @type {?} */
const modules = [
    CoreModule,
];
/** @type {?} */
const services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
/** @type {?} */
const components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
];
/** @type {?} */
const directives = [];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [];
/** @type {?} */
const guards = [];
export class PluginsModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    }
}
PluginsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules
                ],
                providers: [
                    ...services
                ],
                declarations: [
                    ...components
                ],
                exports: [
                    ...modules,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
PluginsModule.ctorParameters = () => [
    { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztNQUV0RSxPQUFPLEdBQUc7SUFDZixVQUFVO0NBQ1Y7O01BRUssUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtDQUNqQjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0NBQ3pCOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxLQUFLLEdBQUcsRUFDYjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssTUFBTSxHQUFHLEVBQ2Q7QUFrQkQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFDeUIsWUFBMkI7UUFFbkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNwQixNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQW5DRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLEdBQUcsT0FBTztpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxRQUFRO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsT0FBTztvQkFDVixHQUFHLFVBQVU7aUJBQ2I7YUFDRDs7OztZQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW5zQ29uZmlnLCBQTFVHSU5TX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3BsdWdpbnMuY29uZmlnJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5zTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZmFjZWJvb2svZmFjZWJvb2suc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcGJveFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3BheXBhbC9wYXlwYWwtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy90cnVzdHBpbG90L3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcblx0Q29yZU1vZHVsZSxcclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdFBsdWdpbnNTZXJ2aWNlLFxyXG5cdEZhY2Vib29rU2VydmljZSxcclxuXHRHb29nbGVTZXJ2aWNlLFxyXG5cdEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxyXG5cdE1hcGJveFNlcnZpY2UsXHJcblx0UGF5UGFsU2VydmljZSxcclxuXHRUcnVzdFBpbG90U2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0UGx1Z2luc01vZHVsZUNvbXBvbmVudCxcclxuXHRHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50LFxyXG5cdFBheVBhbFdpZGdldENvbXBvbmVudCxcclxuXHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Li4ubW9kdWxlc1xyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlc1xyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsdWdpbnNNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUGx1Z2luc01vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbnNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFBsdWdpbnNDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUGx1Z2luc01vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBQTFVHSU5TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=