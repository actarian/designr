import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlPassword extends ControlBase<string> {

	schema = 'password';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
