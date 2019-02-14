import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { UIConfig, UI_CONFIG } from './config/ui.config';
import { UIService } from './config/ui.service';
import { UIModuleComponent } from './ui-module.component';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { FancyboxDirective } from './ui/fancybox/fancybox.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';

const modules = [
	CoreModule,
];

const services = [
	UIService,
	ModalService,
];

const components = [
	UIModuleComponent,
	ModalContainerComponent,
	ModalViewComponent,
];

const directives = [
	ClickOutsideDirective,
	FancyboxDirective,
	LazyImagesDirective,
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
	imports: [
		...modules,
	],
	providers: [
		...services
	],
	declarations: [
		...components,
		...directives,
	],
	exports: [
		...modules,
		...components,
		...directives,
	],
})

export class UIModule {

	constructor(
		@Optional() @SkipSelf() parentModule: UIModule
	) {
		if (parentModule) {
			throw new Error('UIModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(
		config?: UIConfig,
	): ModuleWithProviders {
		return {
			ngModule: UIModule,
			providers: [
				{ provide: UI_CONFIG, useValue: config },
			]
		};
	}

}
