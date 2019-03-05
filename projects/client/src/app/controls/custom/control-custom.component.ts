import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBaseComponent } from '@designr/control';
import { ControlCustom } from './control-custom';

@Component({
	selector: 'control-custom-component',
	templateUrl: 'control-custom.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlCustomComponent),
		multi: true,
	}],
})
export class ControlCustomComponent extends ControlBaseComponent {

	@Input() control: ControlCustom;

	constructor(
		protected renderer: Renderer2
	) {
		super(renderer);
	}

	protected formatValue(value: any): void {
		console.log('ControlCustomComponent.formatValue', value);
		this.renderer.setProperty(this.element, 'value', value.replace(/a/g, ''));
	}

	protected onChange = (value: any) => {
		console.log('ControlCustomComponent.onChange', value);
	};

}
