/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { TrustPilotWidgetComponent } from './plugins/trustpilot/trustpilot-widget.component';
import { TrustPilotService } from './plugins/trustpilot/trustpilot.service';
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
            },] }
];
/** @nocollapse */
PluginsModule.ctorParameters = () => [
    { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7TUFFdEUsUUFBUSxHQUFHO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGlCQUFpQjtDQUNqQjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIseUJBQXlCO0NBQ3pCOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxLQUFLLEdBQUcsRUFDYjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssTUFBTSxHQUFHLEVBQ2Q7QUFtQkQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFDeUIsWUFBMkI7UUFFbkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNwQixNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQXBDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxRQUFRO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsYUFBYSx1QkFBbEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luc0NvbmZpZywgUExVR0lOU19DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9wbHVnaW5zLmNvbmZpZyc7XHJcbmltcG9ydCB7IFBsdWdpbnNTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGx1Z2luc01vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZWJvb2tTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2ZhY2Vib29rL2ZhY2Vib29rLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUtdGFnLW1hbmFnZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXBib3hTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL21hcGJveC9tYXBib3guc2VydmljZSc7XHJcbmltcG9ydCB7IFBheVBhbFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy9wYXlwYWwvcGF5cGFsLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXlQYWxTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL3BheXBhbC9wYXlwYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcnVzdFBpbG90U2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy90cnVzdHBpbG90L3RydXN0cGlsb3Quc2VydmljZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRQbHVnaW5zU2VydmljZSxcclxuXHRGYWNlYm9va1NlcnZpY2UsXHJcblx0R29vZ2xlU2VydmljZSxcclxuXHRHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcclxuXHRNYXBib3hTZXJ2aWNlLFxyXG5cdFBheVBhbFNlcnZpY2UsXHJcblx0VHJ1c3RQaWxvdFNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdFBsdWdpbnNNb2R1bGVDb21wb25lbnQsXHJcblx0R29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCxcclxuXHRQYXlQYWxXaWRnZXRDb21wb25lbnQsXHJcblx0VHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHNcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGx1Z2luc01vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQbHVnaW5zTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignUGx1Z2luc01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogUGx1Z2luc0NvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBQbHVnaW5zTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IFBMVUdJTlNfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdfQ==