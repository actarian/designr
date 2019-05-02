let UNIQUE_ID: number = 0;

export interface IControlOption<T> {
	schema: string;
	value?: T;
	order?: number;
	key?: string;
	label?: string;
	placeholder?: string;
	description?: string;
	disabled?: boolean;
	required?: boolean;
	match?: string;
	reverse?: boolean;
	[x: string]: any;
}

export class ControlOption<T> {
	schema: string = 'text';
	value?: T;
	order?: number;
	key?: string;
	label?: string;
	placeholder?: string;
	description?: string;
	disabled?: boolean;
	required?: boolean;
	match?: string;
	reverse?: boolean;
	minlength?: number;
	maxlength?: number;
	pattern?: string | RegExp;

	constructor(options?: IControlOption<T>) {
		if (options) {
			Object.assign(this, options);
		}
		/*
		const name = `${options.key || 'Control'} ${++UNIQUE_ID}`;
		this.label = this.label || name;
		this.placeholder = this.placeholder || name;
		this.order = this.order === undefined ? 1 : this.order;
		this.schema = this.schema || 'text';
		this.type = this.type || this.schema;
		*/
	}

}
