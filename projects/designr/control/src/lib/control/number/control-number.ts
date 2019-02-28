import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlNumber extends ControlBase<string> {

	readonly component: string = 'ControlNumberComponent';
	readonly schema: string = 'number';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
