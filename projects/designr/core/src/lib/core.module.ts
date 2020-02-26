import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Bundles, BUNDLES } from './bundle/bundle';
import { BundleDirective } from './bundle/bundle.directive';
import { CoreConfig, CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { DisposableComponent } from './disposable/disposable.component';
import { DisposableDirective } from './disposable/disposable.directive';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelDirective } from './label/label.directive';
import { LabelPipe } from './label/label.pipe';
import { LoggerComponent } from './logger/logger.component';
import { OutletDefaultComponent } from './outlet/outlet-default.component';
import { OutletRepeaterComponent } from './outlet/outlet-repeater.component';
import { OutletComponent } from './outlet/outlet.component';
import { AssetPipe } from './pipes/asset.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { PublicPipe } from './pipes/public.pipe';
import { SegmentPipe } from './pipes/segment.pipe';
import { RoutePipe } from './route/route.pipe';
import { SlugPipe } from './slug/slug.pipe';
import { TranslateDirective } from './translate/translate.directive';
import { TranslatePipe } from './translate/translate.pipe';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';

const components = [
	CoreModuleComponent,
	DisposableComponent,
	DisposableDirective,
	JsonFormatterComponent,
	LoggerComponent,
	OutletComponent,
	OutletDefaultComponent,
	OutletRepeaterComponent,
];

const directives = [
	BundleDirective,
	DefaultContentDirective,
	LabelDirective,
	TranslateDirective,
];

const pipes = [
	AssetPipe,
	CustomAsyncPipe,
	HighlightPipe,
	ImagePipe,
	ImageUrlPipe,
	LabelPipe,
	PublicPipe,
	RoutePipe,
	SafeStylePipe,
	SafeUrlPipe,
	SegmentPipe,
	SlugPipe,
	TranslatePipe,
	TrustPipe,
];

const validators = [];

const guards = [];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
		{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
		...validators,
	],
	declarations: [
		...components,
		...directives,
		...pipes,
		...validators,
	],
	entryComponents: [
		...components
	],
	exports: [
		...components,
		...directives,
		...pipes,
		...validators,
	],
})

export class CoreModule {

	constructor(
		@Optional() @SkipSelf() parentModule: CoreModule
	) {
		/*
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
		*/
	}

	public static forRoot(
		bundles?: Bundles,
		config?: CoreConfig,
	): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [{
				provide: CORE_CONFIG, useValue: config
			}, {
				provide: BUNDLES, useValue: bundles || {}
			}]
		};
	}

}
