import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlCheckbox extends ControlBase<boolean> {

	schema = 'checkbox';

	constructor(options: ControlBaseOptions<boolean> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
