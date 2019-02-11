import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlText extends ControlBase<string> {

	schema = 'text';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
