import { Component, forwardRef, Input, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlBase } from './control-base';

@Component({
	selector: 'control-base-component',
	templateUrl: './control-base.component.html',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => ControlBaseComponent),
		multi: true,
	}],
})
export class ControlBaseComponent implements ControlValueAccessor {

	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;

	protected element: any;
	protected blurred: boolean;
	protected innervalue: any;

	reveal: { checked: boolean } = { checked: false };

	constructor(
		protected renderer: Renderer2
	) { }

	get controlRef(): AbstractControl {
		// console.log('controlRef', this.control.key, this.form.controls);
		return this.form.controls[this.control.key];
	}

	get isValid() { return this.controlRef.valid; }

	protected onChange = (value: any) => { };

	protected onTouched = () => { };

	protected formatValue(value: any): void {
		console.log('ControlBaseComponent.formatValue', value);
		this.renderer.setProperty(this.element, 'value', value);
		// console.log('ControlEditableComponent.writeValue', value);
	}

	protected parseValue(value: any) {
		console.log('ControlBaseComponent.parseValue', value);
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
		// console.log('ControlBaseComponent.onFocus', this.controlRef);
	}

	onBlur(event: Event): void {
		this.blurred = true;
		this.element = event.target;
		// this.element.value = this.controlRef.value;
		this.renderer.setProperty(this.element, 'value', this.controlRef.value);
		// console.log('ControlBaseComponent.onBlur', this.controlRef);
		/*
		if (this.innervalue) {
			this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
		}
		*/
	}

	getFormattedValue(): any {
		// console.log('ControlBaseComponent.getFormattedValue', this.controlRef.value);
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
