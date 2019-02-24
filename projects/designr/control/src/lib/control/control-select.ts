import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlSelect extends ControlBase<string> {

	schema = 'select';
	options: { key: string, value: string }[] = [];

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.options = options.options || [];
	}
}
