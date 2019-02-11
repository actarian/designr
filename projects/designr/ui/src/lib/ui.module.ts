import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UIModuleComponent } from './ui-module.component';
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
	],
	declarations: [
		ClickOutsideDirective,
		UIModuleComponent,
		FancyboxDirective,
		LazyImagesDirective,
		ModalContainerComponent,
		ModalViewComponent,
	],
	exports: [
		ClickOutsideDirective,
		UIModuleComponent,
		FancyboxDirective,
		LazyImagesDirective,
		ModalContainerComponent,
		ModalViewComponent,
	],
	providers: [
		ModalService,
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

}
