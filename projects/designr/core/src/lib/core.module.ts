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
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { FancyboxDirective } from './ui/fancybox/fancybox.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CoreRouting,
	],
	declarations: [
		AssetPipe,
		ClickOutsideDirective,
		ControlComponent,
		CoreModuleComponent,
		CustomAsyncPipe,
		DefaultContentDirective,
		DisposableComponent,
		ExistsValidator,
		FancyboxDirective,
		HighlightPipe,
		ImagePipe,
		JsonFormatterComponent,
		LabelAsyncPipe,
		LabelDirective,
		LabelPipe,
		LazyImagesDirective,
		LoggerComponent,
		MatchValidator,
		ModalContainerComponent,
		ModalViewComponent,
		PageComponent,
		PageNotFoundComponent,
		PageOutletComponent,
		PublicPipe,
		RoutePipe,
		SafeStylePipe,
		SafeUrlPipe,
		SegmentPipe,
		SlugAsyncPipe,
		SlugPipe,
		TranslatePipe,
		TrustPipe,
		UppercaseDirective,
	],
	exports: [
		AssetPipe,
		ClickOutsideDirective,
		ControlComponent,
		CoreModuleComponent,
		CustomAsyncPipe,
		DefaultContentDirective,
		ExistsValidator,
		FancyboxDirective,
		HighlightPipe,
		ImagePipe,
		JsonFormatterComponent,
		LabelAsyncPipe,
		LabelDirective,
		LabelPipe,
		LazyImagesDirective,
		LoggerComponent,
		MatchValidator,
		ModalContainerComponent,
		ModalViewComponent,
		PageComponent,
		PublicPipe,
		RoutePipe,
		SafeStylePipe,
		SafeUrlPipe,
		SegmentPipe,
		SlugAsyncPipe,
		SlugPipe,
		TranslatePipe,
		TrustPipe,
		UppercaseDirective,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
		AssetPipe,
		AuthService,
		ConfigService,
		ControlService,
		CookieStorageService,
		CustomAsyncPipe,
		EventDispatcherService,
		ExistsValidator,
		FormService,
		HighlightPipe,
		HttpStatusCodeService,
		ImagePipe,
		LabelPipe,
		LabelService,
		LocalStorageService,
		Logger,
		MatchValidator,
		MenuService,
		ModalService,
		OnceService,
		PageGuard, StaticGuard,
		PageService,
		PublicPipe,
		RoutePipe,
		SafeUrlPipe,
		SegmentPipe,
		SessionStorageService,
		SlugAsyncPipe,
		SlugPipe,
		StorageService,
		TranslatePipe,
		TrustPipe,
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
