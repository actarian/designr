import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { ConfigService } from './config/config.service';
import { CoreConfig, CORE_CONFIG } from './config/core.config';
import { DefaultContentDirective } from './content/default-content.directive';
import { CoreModuleComponent } from './core-module.component';
import { CoreRouting } from './core.routing';
import { DisposableComponent } from './disposable/disposable.component';
import { ControlComponent } from './forms/controls/control.component';
import { ControlService } from './forms/controls/control.service';
import { ExistsValidator } from './forms/exists.validator';
import { FormService } from './forms/form.service';
import { MatchValidator } from './forms/match.validator';
import { UppercaseDirective } from './forms/uppercase.directive';
import { HighlightPipe } from './highlight/highlight.pipe';
import { HttpResponseInterceptor } from './http/http-response.interceptor';
import { HttpStatusCodeService } from './http/http-status-code.service';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { LabelAsyncPipe } from './labels/label-async.pipe';
import { LabelDirective } from './labels/label.directive';
import { LabelPipe } from './labels/label.pipe';
import { LabelService } from './labels/label.service';
import { Logger } from './logger/logger';
import { LoggerComponent } from './logger/logger.component';
import { EventDispatcherService } from './models/event-dispatcher.service';
import { MenuService } from './models/menu.service';
import { OnceService } from './once/once.service';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { PageOutletComponent } from './pages/page-outlet.component';
import { PageComponent } from './pages/page.component';
import { PageGuard } from './pages/page.guard';
import { PageService } from './pages/page.service';
import { StaticGuard } from './pages/static.guard';
import { AssetPipe } from './pipes/asset.pipe';
import { CustomAsyncPipe } from './pipes/custom-async.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { PublicPipe } from './pipes/public.pipe';
import { SegmentPipe } from './pipes/segment.pipe';
import { RoutePipe } from './routes/route.pipe';
import { SlugAsyncPipe } from './slugs/slug-async.pipe';
import { SlugPipe } from './slugs/slug.pipe';
import { CookieStorageService, LocalStorageService, SessionStorageService, StorageService } from './storage/storage.service';
import { TranslatePipe } from './translate/translate.pipe';
import { SafeStylePipe } from './trust/safe-style.pipe';
import { SafeUrlPipe } from './trust/safe-url.pipe';
import { TrustPipe } from './trust/trust.pipe';

const modules = [
	CommonModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	CoreRouting,
];

const services = [
	AuthService,
	ConfigService,
	ControlService,
	CookieStorageService,
	EventDispatcherService,
	FormService,
	HttpStatusCodeService,
	LabelService,
	LocalStorageService,
	Logger,
	MenuService,
	OnceService,
	PageService,
	SessionStorageService,
	StorageService,
];

const components = [
	ControlComponent,
	CoreModuleComponent,
	DisposableComponent,
	JsonFormatterComponent,
	LoggerComponent,
	PageComponent,
	PageNotFoundComponent,
	PageOutletComponent,
];

const directives = [
	DefaultContentDirective,
	LabelDirective,
	UppercaseDirective,
];

const pipes = [
	AssetPipe,
	CustomAsyncPipe,
	HighlightPipe,
	ImagePipe,
	LabelAsyncPipe,
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
	ExistsValidator,
	MatchValidator,
];

const guards = [
	PageGuard,
	StaticGuard,
];

@NgModule({
	imports: [
		...modules,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
		...services,
		...pipes,
		...validators,
		...guards,
	],
	declarations: [
		...components,
		...directives,
		...pipes,
		...validators,
	],
	exports: [
		...modules,
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
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: CoreConfig,
	): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [{
				provide: CORE_CONFIG, useValue: config
			}]
		};
	}

}
