
import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlAccessor } from '@designr/control';

export const NUMBER_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	// tslint:disable-next-line:no-use-before-declare
	useExisting: forwardRef(() => CustomAccessorDirective),
	multi: true
};

@Directive({
	selector:
		'input[custom][formControlName],input[custom][formControl],input[custom][ngModel]',
	// tslint:disable-next-line:use-host-property-decorator
	host: {
		'(change)': 'onChange($event.target.value)',
		'(input)': 'onChange($event.target.value)',
		'(blur)': 'onTouched()'
	},
	providers: [NUMBER_VALUE_ACCESSOR]
})
export class CustomAccessorDirective extends ControlAccessor<string> {

	protected formatValue(value: string): string {
		return value ? value.replace(/[a|A]/g, '').toUpperCase() : '';
	}

	/*
	protected parseValue(value: any): string {
		return value && value !== '' ? value : null;
	}
	*/

}
