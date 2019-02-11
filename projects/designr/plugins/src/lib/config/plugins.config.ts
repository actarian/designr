import { InjectionToken } from '@angular/core';
import { FacebookConfig } from '../plugins/facebook/facebook.service';
import { GoogleTagManagerConfig } from '../plugins/google/google-tag-manager.service';
import { GoogleConfig } from '../plugins/google/google.service';
import { MapboxConfig } from '../plugins/mapbox/mapbox.service';
import { PayPalConfig } from '../plugins/paypal/paypal.service';
import { TrustPilotConfig } from '../plugins/trustpilot/trustpilot.service';

export class PluginsConfig {
	origin?: string = '';
	facebook?: FacebookConfig;
	google?: GoogleConfig;
	googleTagManager?: GoogleTagManagerConfig;
	mapbox?: MapboxConfig;
	paypal?: PayPalConfig;
	trustPilot?: TrustPilotConfig;

	constructor(options?: PluginsConfig) {
		console.log('PluginsConfig', options);
		if (options) {
			Object.assign(this, options);
		}
	}
}

export const PLUGINS_CONFIG = new InjectionToken<PluginsConfig>('plugin.config');
