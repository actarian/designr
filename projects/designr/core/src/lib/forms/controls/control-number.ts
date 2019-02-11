import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlNumber extends ControlBase<string> {

	schema = 'number';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
