import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlEmail extends ControlBase<string> {

	readonly component: string = 'ControlEmailComponent';
	readonly schema: string = 'email';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
		this.email = true;
		this.pattern = options.pattern || '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
	}
}
