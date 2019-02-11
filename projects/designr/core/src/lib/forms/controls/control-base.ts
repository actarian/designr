export class ControlBaseOptions<T> {
	value?: T;
	key?: string;
	label?: string;
	placeholder?: string;
	// order
	order?: number;
	schema?: string;
	type?: string;
	// validators
	min?: number;
	max?: number;
	required?: boolean;
	requiredTrue?: boolean;
	email?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: string | RegExp;
	match?: string;
	// options
	reverse?: boolean;
	options?: { key: string, value: string }[];
	// state
	disabled?: boolean;
	// formatters
	step?: number;
	format?: string;
}

export class ControlBase<T> {
	// export class ControlBase<T> implements ControlValueAccessor {

	static uid: number = 0;

	private _originalValue: T;
	value: T;
	key: string;
	//
	label: string;
	placeholder: string;
	// order
	order: number;
	schema: string;
	type: string;
	// validators
	min: number;
	max: number;
	required: boolean;
	requiredTrue: boolean;
	email: boolean;
	minLength: number;
	maxLength: number;
	pattern: string | RegExp;
	match: string;
	// options
	reverse: boolean;
	options: { key: string, value: string }[];
	// state
	disabled: boolean;
	// formatters
	step: number;
	format: string;

	constructor(options: ControlBaseOptions<T> = {}) {
		this._originalValue = options.value;
		this.value = options.value;
		this.key = options.key;
		//
		const name = `${options.key || 'Control'} ${++ControlBase.uid}`;
		this.label = options.label || name;
		this.placeholder = options.placeholder || name;
		// order
		this.order = options.order === undefined ? 1 : options.order;
		this.schema = options.schema || 'text';
		this.type = options.type || this.schema;
		// validators
		this.min = options.min || null;
		this.max = options.max || null;
		this.required = !!options.required;
		this.requiredTrue = !!options.requiredTrue;
		this.email = !!options.email;
		this.minLength = options.minLength || null;
		this.maxLength = options.maxLength || null;
		this.pattern = options.pattern || null;
		this.match = options.match || null;
		// options
		this.reverse = !!options.reverse;
		this.options = options.options || [];
		// state
		this.disabled = !!options.disabled;
		// formatters
		this.step = options.step || null;
		this.format = options.format || null;
	}

	/*
	//
	control?: FormControl;
	innervalue: any;
	blurred: boolean = false;

	focus(): void {
		// console.log('ControlBase.focus', this.control.value);
		this.blurred = false;
		if (this.innervalue) {
			this.control.patchValue(this.innervalue, { emitEvent: false });
		}
	}

	blur(): void {
		// console.log('ControlBase.blur', this.control.value);
		this.blurred = true;
		if (this.innervalue) {
			this.control.patchValue(this.innervalue + ' H', { emitEvent: false });
		}
	}

	setControl(control: FormControl): void {
		this.control = control;
		this.innervalue = control.value;
		control.valueChanges.subscribe(value => {
			// console.log('ControlBase.control.valueChanges', value);
			if (this.blurred) {
				control.patchValue(value + ' H', { emitEvent: false });
			} else {
				this.innervalue = value;
			}
		});
		// this.blur();
	}

	formatValue(): string {
		// console.log('ControlBase.formatValue', this, this.control);
		return 'aaa';
	}

	parseValue(e: Event) {
		// console.log('ControlBase.parseValue', e);
	}

	private onChange = (value: any) => { };

	private onTouched = () => { };

	writeValue(value: any): void {
		// console.log('ControlBase.writeValue', value);
		// this.formattedValue = value;
		this.onChange(this.value);
	}

	registerOnChange(fn: (value: any) => void): void {
		// console.log('ControlBase.registerOnChange', fn);
		this.onChange = fn;
		// this.onChange('my new value');
	}

	registerOnTouched(fn: () => void): void {
		// console.log('ControlBase.registerOnTouched', fn);
		this.onTouched = fn;
	}

	setDisabledState?(isDisabled: boolean): void {
		// console.log('ControlBase.setDisabledState', isDisabled);
		this.disabled = isDisabled;
	}
	*/

}
