import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { ControlConfig, CONTROL_CONFIG } from './config/control.config';
import { ControlModuleComponent } from './control-module.component';
import { ControlBaseComponent } from './control/base/control-base.component';
import { ControlCheckboxComponent } from './control/checkbox/control-checkbox.component';
import { ControlOutletComponent } from './control/control-outlet.component';
import { ControlService } from './control/control.service';
import { ControlsComponent } from './control/controls.component';
import { ControlEmailComponent } from './control/email/control-email.component';
import { ControlMarkdownComponent } from './control/markdown/control-markdown.component';
import { ControlNumberComponent } from './control/number/control-number.component';
import { ControlPasswordComponent } from './control/password/control-password.component';
import { ControlRadioComponent } from './control/radio/control-radio.component';
import { ControlSelectComponent } from './control/select/control-select.component';
import { ControlTextComponent } from './control/text/control-text.component';
import { ControlTextareaComponent } from './control/textarea/control-textarea.component';
import { ExistsValidator } from './directives/exists.directive';
import { MatchValidator } from './directives/match.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { FormService } from './form/form.service';

const services = [
	ControlService,
	FormService,
];

const components = [
	ControlsComponent,
	ControlModuleComponent,
	ControlOutletComponent,
	ControlBaseComponent,
	ControlCheckboxComponent,
	ControlEmailComponent,
	ControlMarkdownComponent,
	ControlNumberComponent,
	ControlPasswordComponent,
	ControlRadioComponent,
	ControlSelectComponent,
	ControlTextComponent,
	ControlTextareaComponent,
];

const directives = [
	UppercaseDirective,
];

const pipes = [
];

const validators = [
	ExistsValidator,
	MatchValidator,
];

const guards = [
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule,
	],
	providers: [
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
		...components,
	],
	exports: [
		...components,
		...directives,
		...pipes,
		...validators,
	],
})

export class ControlModule {

	constructor(
		@Optional() @SkipSelf() parentModule: ControlModule
	) {
		/*
		if (parentModule) {
			throw new Error('ControlModule is already loaded. Import it in the AppModule only');
		}
		*/
	}

	public static forRoot(
		config?: ControlConfig,
	): ModuleWithProviders {
		return {
			ngModule: ControlModule,
			providers: [{
				provide: CONTROL_CONFIG, useValue: config
			}]
		};
	}

}
