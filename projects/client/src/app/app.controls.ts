import { NgModule } from '@angular/core';
import { ControlCheckboxComponent, ControlModule, Controls } from '@designr/control';

export const controls = [
	ControlCheckboxComponent,
];

export const CONTROLS: Controls = {
	// 'checkbox': ControlCheckboxComponent,
};

@NgModule({
	imports: [
		ControlModule.forRoot({
			controls: CONTROLS,
		}),
	],
	exports: [ControlModule]
})

export class AppControls { }
