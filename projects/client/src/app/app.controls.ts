import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule, Controls } from '@designr/control';
import { CoreModule } from '@designr/core';
import { ControlCustom } from './controls/custom/control-custom';
import { ControlCustomComponent } from './controls/custom/control-custom.component';
import { CustomAccessorDirective } from './controls/custom/custom.accessor';

export const directives = [
	CustomAccessorDirective,
];

export const controls = [
	ControlCustomComponent,
];

export const CONTROLS: Controls = {
	'custom': { component: ControlCustomComponent, model: ControlCustom },
};

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CoreModule,
		ControlModule.forRoot({
			controls: CONTROLS,
		}),
	],
	declarations: [
		...directives,
		...controls,
	],
	exports: [
		ControlModule,
		...directives,
		...controls,
	],
	entryComponents: [
		...controls,
	],
})

export class AppControls { }
