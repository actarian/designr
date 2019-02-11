/*
 * Public API Surface of core
 */

export { CommonModule } from '@angular/common';
export { HTTP_INTERCEPTORS } from '@angular/common/http';
export { ModuleWithProviders, NgModule, Optional, SkipSelf, Type } from '@angular/core';
export { PluginsConfig, PLUGINS_CONFIG } from './lib/config/plugins.config';
export { PluginsService } from './lib/config/plugins.service';
export { PluginsModuleComponent } from './lib/plugins-module.component';
export { PluginsModule } from './lib/plugins.module';
export { FacebookService } from './lib/plugins/facebook/facebook.service';
export { GoogleTagManagerComponent } from './lib/plugins/google/google-tag-manager.component';
export { GoogleTagManagerPageViewEvent, GoogleTagManagerService } from './lib/plugins/google/google-tag-manager.service';
export { GoogleService } from './lib/plugins/google/google.service';
export { MapboxService } from './lib/plugins/mapbox/mapbox.service';
export { PayPalWidgetComponent } from './lib/plugins/paypal/paypal-widget.component';
export { PayPalService } from './lib/plugins/paypal/paypal.service';
export { TrustPilotWidgetComponent } from './lib/plugins/trustpilot/trustpilot-widget.component';
export { TrustPilotService } from './lib/plugins/trustpilot/trustpilot.service';

