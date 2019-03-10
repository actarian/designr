import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlTextarea } from './control-textarea';

@Component({
	selector: 'control-textarea-component',
	templateUrl: 'control-textarea.component.html',
})
export class ControlTextareaComponent extends ControlComponent {

	@Input() option: ControlTextarea;

}
