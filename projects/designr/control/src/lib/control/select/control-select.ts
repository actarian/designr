import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlSelect extends ControlBase<string> {

	readonly component: string = 'ControlSelectComponent';
	readonly schema: string = 'select';

	options: { key: string, value: string }[] = [];

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.options = options.options || [];
	}
}
