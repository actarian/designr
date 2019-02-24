import { NgModule } from '@angular/core';
import { ControlModule, Controls } from '@designr/control';

export const controls = [
];

export const CONTROLS: Controls = {
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
