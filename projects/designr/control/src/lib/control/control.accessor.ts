
import { Directive, ElementRef, forwardRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CONTROL_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	// tslint:disable-next-line:no-use-before-declare
	useExisting: forwardRef(() => ControlAccessor),
	multi: true
};

@Directive({
	selector:
		'input[designr-accessor][formControlName],input[designr-accessor][formControl],input[designr-accessor][ngModel]',
	// tslint:disable-next-line:use-host-property-decorator
	host: {
		'(change)': 'onChange($event.target.value)',
		'(input)': 'onChange($event.target.value)',
		'(blur)': 'onTouched()'
	},
	providers: [CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:directive-class-suffix
export class ControlAccessor<T> implements ControlValueAccessor {

	constructor(
		protected renderer: Renderer2,
		protected element: ElementRef
	) { }

	protected formatValue(value: T): string {
		return value.toString();
	}

	protected parseValue(value: any): T {
		return value && value !== '' ? value : null;
	}

	onChange = (value: any) => { };
	onTouched = () => { };

	writeValue(value: T): void {
		const formattedValue = this.formatValue(value);
		this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
	}

	registerOnChange(callback: (x: T | null) => void): void {
		this.onChange = (value: any) => {
			const parsedValue = this.parseValue(value);
			const formattedValue = this.formatValue(parsedValue);
			this.renderer.setProperty(this.element.nativeElement, 'value', formattedValue);
			callback(parsedValue);
		};
	}

	registerOnTouched(callback: () => void): void {
		this.onTouched = callback;
	}

	setDisabledState(isDisabled: boolean): void {
		this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
	}

}
