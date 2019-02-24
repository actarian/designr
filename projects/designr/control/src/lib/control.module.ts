import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { ControlConfig, CONTROL_CONFIG } from './config/control.config';
import { ControlModuleComponent } from './control-module.component';
import { ControlComponent } from './control/control.component';
import { ControlService } from './control/control.service';
import { ExistsValidator } from './directives/exists.directive';
import { MatchValidator } from './directives/match.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { FormService } from './form/form.service';

const services = [
	ControlService,
	FormService,
];

const components = [
	ControlComponent,
	ControlModuleComponent,
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
		if (parentModule) {
			throw new Error('ControlModule is already loaded. Import it in the AppModule only');
		}
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
