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

@NgModule({
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
})

export class PluginsModule {

	constructor(
		@Optional() @SkipSelf() parentModule: PluginsModule
	) {
		if (parentModule) {
			throw new Error('PluginsModule is already loaded. Import it in the AppModule only');
		}
	}

}
