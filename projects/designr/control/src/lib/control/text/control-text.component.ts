import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlText } from './control-text';

@Component({
	selector: 'control-text-component',
	templateUrl: 'control-text.component.html',
})
export class ControlTextComponent extends ControlComponent {

	@Input() option: ControlText;

}
