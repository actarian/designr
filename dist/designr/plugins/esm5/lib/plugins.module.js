/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var modules = [
    CoreModule,
];
/** @type {?} */
var services = [
    PluginsService,
    FacebookService,
    GoogleService,
    GoogleTagManagerService,
    MapboxService,
    PayPalService,
    TrustPilotService,
];
/** @type {?} */
var components = [
    PluginsModuleComponent,
    GoogleTagManagerComponent,
    PayPalWidgetComponent,
    TrustPilotWidgetComponent,
];
/** @type {?} */
var directives = [];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var PluginsModule = /** @class */ (function () {
    function PluginsModule(parentModule) {
        if (parentModule) {
            throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    PluginsModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: PluginsModule,
            providers: [
                { provide: PLUGINS_CONFIG, useValue: config },
            ]
        };
    };
    PluginsModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(modules),
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components),
                    exports: tslib_1.__spread(modules, components),
                },] }
    ];
    /** @nocollapse */
    PluginsModule.ctorParameters = function () { return [
        { type: PluginsModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return PluginsModule;
}());
export { PluginsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9wbHVnaW5zLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUFFdEUsT0FBTyxHQUFHO0lBQ2YsVUFBVTtDQUNWOztJQUVLLFFBQVEsR0FBRztJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7Q0FDakI7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtDQUN6Qjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRyxFQUNkO0FBRUQ7SUFrQkMsdUJBQ3lCLFlBQTJCO1FBRW5ELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUNwRjtJQUNGLENBQUM7Ozs7O0lBRWEscUJBQU87Ozs7SUFBckIsVUFDQyxNQUFzQjtRQUV0QixPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQW5DRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxtQkFDSCxPQUFPLENBQ1Y7b0JBQ0QsU0FBUyxtQkFDTCxRQUFRLENBQ1g7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLENBQ2I7b0JBQ0QsT0FBTyxtQkFDSCxPQUFPLEVBQ1AsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxhQUFhLHVCQUFsRCxRQUFRLFlBQUksUUFBUTs7SUFpQnZCLG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FwQlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW5zQ29uZmlnLCBQTFVHSU5TX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnL3BsdWdpbnMuY29uZmlnJztcclxuaW1wb3J0IHsgUGx1Z2luc1NlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9wbHVnaW5zLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbHVnaW5zTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNlYm9va1NlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvZmFjZWJvb2svZmFjZWJvb2suc2VydmljZSc7XHJcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BsdWdpbnMvZ29vZ2xlL2dvb2dsZS10YWctbWFuYWdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vcGx1Z2lucy9nb29nbGUvZ29vZ2xlLXRhZy1tYW5hZ2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHb29nbGVTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL2dvb2dsZS9nb29nbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hcGJveFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvbWFwYm94L21hcGJveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5UGFsV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi9wbHVnaW5zL3BheXBhbC9wYXlwYWwtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBheVBhbFNlcnZpY2UgfSBmcm9tICcuL3BsdWdpbnMvcGF5cGFsL3BheXBhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJ1c3RQaWxvdFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vcGx1Z2lucy90cnVzdHBpbG90L3RydXN0cGlsb3Qtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRydXN0UGlsb3RTZXJ2aWNlIH0gZnJvbSAnLi9wbHVnaW5zL3RydXN0cGlsb3QvdHJ1c3RwaWxvdC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcblx0Q29yZU1vZHVsZSxcclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdFBsdWdpbnNTZXJ2aWNlLFxyXG5cdEZhY2Vib29rU2VydmljZSxcclxuXHRHb29nbGVTZXJ2aWNlLFxyXG5cdEdvb2dsZVRhZ01hbmFnZXJTZXJ2aWNlLFxyXG5cdE1hcGJveFNlcnZpY2UsXHJcblx0UGF5UGFsU2VydmljZSxcclxuXHRUcnVzdFBpbG90U2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0UGx1Z2luc01vZHVsZUNvbXBvbmVudCxcclxuXHRHb29nbGVUYWdNYW5hZ2VyQ29tcG9uZW50LFxyXG5cdFBheVBhbFdpZGdldENvbXBvbmVudCxcclxuXHRUcnVzdFBpbG90V2lkZ2V0Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Li4ubW9kdWxlc1xyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlc1xyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsdWdpbnNNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUGx1Z2luc01vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbnNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IFBsdWdpbnNDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUGx1Z2luc01vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBQTFVHSU5TX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=