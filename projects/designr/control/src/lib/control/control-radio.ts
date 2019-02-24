import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlRadio extends ControlBase<boolean> {

	schema = 'radio';

	constructor(options: ControlBaseOptions<boolean> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
