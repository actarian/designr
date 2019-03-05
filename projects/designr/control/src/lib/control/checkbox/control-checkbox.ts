import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlCheckbox extends ControlBase<boolean> {

	readonly schema: string = 'checkbox';

	constructor(options: ControlBaseOptions<boolean> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
