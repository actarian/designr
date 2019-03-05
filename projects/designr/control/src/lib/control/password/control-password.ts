import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlPassword extends ControlBase<string> {

	readonly schema: string = 'password';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
