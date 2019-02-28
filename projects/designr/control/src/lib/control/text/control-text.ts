import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlText extends ControlBase<string> {

	readonly component: string = 'ControlTextComponent';
	readonly schema: string = 'text';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
