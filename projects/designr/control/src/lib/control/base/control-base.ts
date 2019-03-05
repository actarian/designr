
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
	minlength?: number;
	maxlength?: number;
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

	readonly schema: string = 'base';

	private _originalValue: T;
	value: T;
	key: string;
	//
	label: string;
	placeholder: string;
	// order
	order: number;
	type: string;
	// validators
	min: number;
	max: number;
	required: boolean;
	requiredTrue: boolean;
	email: boolean;
	minlength: number;
	maxlength: number;
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
		this.minlength = options.minlength || null;
		this.maxlength = options.maxlength || null;
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

}
