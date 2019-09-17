import { Component, Input } from '@angular/core';
import { ControlComponent } from '../control.component';
import { ControlGroup } from './control-group';

@Component({
	selector: 'control-group-component',
	templateUrl: 'control-group.component.html',
})
export class ControlGroupComponent extends ControlComponent {
	@Input() option: ControlGroup;
}
