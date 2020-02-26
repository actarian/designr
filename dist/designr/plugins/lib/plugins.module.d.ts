import { ModuleWithProviders } from '@angular/core';
import { PluginsConfig } from './config/plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins-module.component";
import * as i2 from "./plugins/google/google-tag-manager.component";
import * as i3 from "./plugins/paypal/paypal-widget.component";
import * as i4 from "./plugins/trustpilot/trustpilot-widget.component";
import * as i5 from "./plugins/swiper/swiper.component";
import * as i6 from "./plugins/swiper/swiper.directive";
import * as i7 from "@angular/common";
import * as i8 from "@designr/core";
export declare class PluginsModule {
    constructor(parentModule: PluginsModule);
    static forRoot(config?: PluginsConfig): i0.ModuleWithProviders<PluginsModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<PluginsModule, [typeof i1.PluginsModuleComponent, typeof i2.GoogleTagManagerComponent, typeof i3.PayPalWidgetComponent, typeof i4.TrustPilotWidgetComponent, typeof i5.SwiperComponent, typeof i6.SwiperDirective], [typeof i7.CommonModule, typeof i8.CoreModule], [typeof i8.CoreModule, typeof i1.PluginsModuleComponent, typeof i2.GoogleTagManagerComponent, typeof i3.PayPalWidgetComponent, typeof i4.TrustPilotWidgetComponent, typeof i5.SwiperComponent, typeof i6.SwiperDirective]>;
    static ɵinj: i0.ɵɵInjectorDef<PluginsModule>;
}
