import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlTextarea extends ControlBase<string> {

	readonly schema: string = 'textarea';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
