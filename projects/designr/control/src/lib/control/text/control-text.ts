import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlText extends ControlBase<string> {

	readonly schema: string = 'text';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
