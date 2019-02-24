import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlEmail extends ControlBase<string> {

	schema = 'email';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
		this.email = true;
		this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
	}
}
