import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { PluginsConfig, PLUGINS_CONFIG } from './config/plugins.config';
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

const modules = [
	CoreModule,
];

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
];

const directives = [
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
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
})

export class PluginsModule {

	constructor(
		@Optional() @SkipSelf() parentModule: PluginsModule
	) {
		if (parentModule) {
			throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: PluginsConfig,
	): ModuleWithProviders {
		return {
			ngModule: PluginsModule,
			providers: [
				{ provide: PLUGINS_CONFIG, useValue: config },
			]
		};
	}
}
