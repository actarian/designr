
export class ControlOption<T> {

	// export class ControlOption<T> implements ControlValueAccessor {

	static uid: number = 0;

	protected _originalValue?: T;

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

	constructor(options: ControlOption<T> = {}) {
		if (options) {
			Object.assign(this, options);
		}
		this._originalValue = this.value;
		const name = `${options.key || 'Control'} ${++ControlOption.uid}`;
		this.label = this.label || name;
		this.placeholder = this.placeholder || name;
		this.order = this.order === undefined ? 1 : this.order;
		this.schema = this.schema || 'text';
		this.type = this.type || this.schema;
		/*
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
		*/
	}

}
