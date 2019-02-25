import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { UIConfig, UI_CONFIG } from './config/ui.config';
import { UIService } from './config/ui.service';
import { UIModuleComponent } from './ui-module.component';
import { ClickOutsideDirective } from './ui/click-outside/click-outside.directive';
import { LazyImagesDirective } from './ui/lazy-images/lazy-images.directive';
import { ModalContainerComponent } from './ui/modal/modal-container.component';
import { ModalViewComponent } from './ui/modal/modal-view.component';
import { ModalService } from './ui/modal/modal.service';
import { ScrollDirective } from './ui/scroll/scroll.directive';
import { SpriteComponent } from './ui/sprite/sprite.component';

const services = [
	UIService,
	ModalService,
];

const components = [
	UIModuleComponent,
	ModalContainerComponent,
	ModalViewComponent,
	SpriteComponent,
];

const directives = [
	ClickOutsideDirective,
	LazyImagesDirective,
	ScrollDirective,
];

const pipes = [
];

const validators = [
];

const guards = [
];

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
	],
	providers: [
		...services
	],
	declarations: [
		...components,
		...directives,
	],
	exports: [
		CoreModule,
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
