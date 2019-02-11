import { InjectionToken } from '@angular/core';
import { FacebookConfig } from '../plugins/facebook/facebook.service';
import { GoogleTagManagerConfig } from '../plugins/google/google-tag-manager.service';
import { GoogleConfig } from '../plugins/google/google.service';
import { MapboxConfig } from '../plugins/mapbox/mapbox.service';
import { PayPalConfig } from '../plugins/paypal/paypal.service';
import { TrustPilotConfig } from '../plugins/trustpilot/trustpilot.service';
export declare class PluginsConfig {
    origin?: string;
    facebook?: FacebookConfig;
    google?: GoogleConfig;
    googleTagManager?: GoogleTagManagerConfig;
    mapbox?: MapboxConfig;
    paypal?: PayPalConfig;
    trustPilot?: TrustPilotConfig;
    constructor(options?: PluginsConfig);
}
export declare const PLUGINS_CONFIG: InjectionToken<PluginsConfig>;
