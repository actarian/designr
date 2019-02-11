/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
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
export class PluginsModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
}
PluginsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    CoreModule,
                ],
                declarations: [
                    PluginsModuleComponent,
                    GoogleTagManagerComponent,
                    PayPalWidgetComponent,
                    TrustPilotWidgetComponent,
                ],
                exports: [
                    PluginsModuleComponent,
                    GoogleTagManagerComponent,
                    PayPalWidgetComponent,
                    TrustPilotWidgetComponent,
                ],
                providers: [
                    PluginsService,
                    FacebookService,
                    GoogleService,
                    GoogleTagManagerService,
                    MapboxService,
                    PayPalService,
                    TrustPilotService,
                ],
            },] }
];
/** @nocollapse */
PluginsModule.ctorParameters = () => [
    { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQStCNUUsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFDeUIsWUFBMkI7UUFFbkQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1NBQ3BGO0lBQ0YsQ0FBQzs7O1lBckNELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFVBQVU7aUJBQ1Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLHNCQUFzQjtvQkFDdEIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGlCQUFpQjtpQkFDakI7YUFDRDs7OztZQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW5zU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3BsdWdpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsdWdpbnNNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2Vib29rU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9mYWNlYm9vay9mYWNlYm9vay5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWFwYm94U2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9tYXBib3gvbWFwYm94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXlQYWxXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGF5UGFsU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9wYXlwYWwvcGF5cGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvdHJ1c3RwaWxvdC90cnVzdHBpbG90LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0UGx1Z2luc01vZHVsZUNvbXBvbmVudCxcclxuXHRcdEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQsXHJcblx0XHRQYXlQYWxXaWRnZXRDb21wb25lbnQsXHJcblx0XHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0UGx1Z2luc01vZHVsZUNvbXBvbmVudCxcclxuXHRcdEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQsXHJcblx0XHRQYXlQYWxXaWRnZXRDb21wb25lbnQsXHJcblx0XHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRQbHVnaW5zU2VydmljZSxcclxuXHRcdEZhY2Vib29rU2VydmljZSxcclxuXHRcdEdvb2dsZVNlcnZpY2UsXHJcblx0XHRHb29nbGVUYWdNYW5hZ2VyU2VydmljZSxcclxuXHRcdE1hcGJveFNlcnZpY2UsXHJcblx0XHRQYXlQYWxTZXJ2aWNlLFxyXG5cdFx0VHJ1c3RQaWxvdFNlcnZpY2UsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQbHVnaW5zTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBsdWdpbnNNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQbHVnaW5zTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=