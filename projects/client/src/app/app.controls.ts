import { NgModule } from '@angular/core';
import { ControlModule, Controls } from '@designr/control';
import { ControlCustom } from './controls/custom/control-custom';
import { ControlCustomComponent } from './controls/custom/control-custom.component';

export const controls = [
	ControlCustomComponent,
];

export const CONTROLS: Controls = {
	'custom': { component: ControlCustomComponent, model: ControlCustom },
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
