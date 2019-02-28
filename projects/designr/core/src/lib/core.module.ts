import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Bundles, BUNDLES } from './bundle/bundle';
import { BundleDirective } from './bundle/bundle.directive';
import { CoreConfig, CORE_CONFIG } from './config/core.config';
import { CoreService } from './config/core.service';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { DisposableComponent } from './disposable/disposable.component';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { HttpStatusCodeService } from './http/http-status-code.service';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelDirective } from './label/label.directive';
import { LabelPipe } from './label/label.pipe';
import { LabelService } from './label/label.service';
import { Logger } from './logger/logger';
import { LoggerComponent } from './logger/logger.component';
import { EventDispatcherService } from './models/event-dispatcher.service';
import { MenuService } from './models/menu.service';
import { OnceService } from './once/once.service';
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
import { SlugAsyncPipe } from './slug/slug-async.pipe';
import { SlugPipe } from './slug/slug.pipe';
import { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './storage/storage.service';
import { TranslateDirective } from './translate/translate.directive';
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';

const services = [
	AuthService,
	CoreService,
	CookieStorageService,
	EventDispatcherService,
	HttpStatusCodeService,
	LabelService,
	LocalStorageService,
	Logger,
	MenuService,
	OnceService,
	SessionStorageService,
	StorageService,
	TranslateService,
];

const components = [
	CoreModuleComponent,
	DisposableComponent,
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
	SlugAsyncPipe,
	SlugPipe,
	TranslatePipe,
	TrustPipe,
];

const validators = [
];

const guards = [
];

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
		...services,
		...pipes,
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
