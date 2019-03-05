import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlNumber extends ControlBase<string> {

	readonly schema: string = 'number';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
