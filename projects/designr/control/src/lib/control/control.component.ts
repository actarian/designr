import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';

@Component({
	selector: 'core-control',
	templateUrl: './control.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlComponent),
		multi: true,
	}],
})
export class ControlComponent implements ControlValueAccessor {

	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;

	private element: any;
	private blurred: boolean;
	private innervalue: any;

	reveal: { checked: boolean } = { checked: false };

	constructor(
		private renderer: Renderer2
	) { }

	get controlRef(): AbstractControl {
		// console.log('controlRef', this.control.key, this.form.controls);
		return this.form.controls[this.control.key];
	}

	get isValid() { return this.controlRef.valid; }

	private onChange = (value: any) => { };

	private onTouched = () => { };

	private formatValue(value: any): void {
		// console.log('ControlComponent.formatValue', value);
		this.renderer.setProperty(this.element, 'value', value);
		// console.log('ControlEditableComponent.writeValue', value);
	}

	private parseValue(value: any) {
		// console.log('ControlComponent.parseValue', value);
		const parsed = this.innervalue;
		this.onChange(parsed);
	}

	onInput(event: Event): void {
		this.element = event.target;
		this.onChange(this.element.value);
	}

	onFocus(event: Event): void {
		this.blurred = false;
		this.element = event.target;
		// this.element.value = this.controlRef.value;
		this.renderer.setProperty(this.element, 'value', this.controlRef.value);
		// console.log('ControlComponent.onFocus', this.controlRef);
	}

	onBlur(event: Event): void {
		this.blurred = true;
		this.element = event.target;
		// this.element.value = this.controlRef.value;
		this.renderer.setProperty(this.element, 'value', this.controlRef.value);
		// console.log('ControlComponent.onBlur', this.controlRef);
		/*
		if (this.innervalue) {
			this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
		}
		*/
	}

	getFormattedValue(): any {
		// console.log('ControlComponent.getFormattedValue', this.controlRef.value);
		return this.controlRef.value;
	}

	// ControlValueAccessor

	writeValue(value: any): void {
		this.formatValue(value);
	}

	registerOnChange(method: any): void {
		this.onChange = method;
		// console.log('ControlEditableComponent.registerOnChange');
	}

	registerOnTouched(method: any): void {
		this.onTouched = method;
		// console.log('ControlEditableComponent.registerOnTouched');
	}

	setDisabledState(isDisabled: boolean): void {
		// const node = this.textarea.nativeElement;
		/*
		if (isDisabled) {
			this.renderer.addClass(this.element, 'disabled');
		} else {
			this.renderer.removeClass(this.element, 'disabled');
		}
		// console.log('ControlEditableComponent.setDisabledState', isDisabled);
		*/
	}

}
