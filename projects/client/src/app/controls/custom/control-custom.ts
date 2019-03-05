import { ControlBase, ControlBaseOptions } from '@designr/control';

export class ControlCustom extends ControlBase<string> {

	readonly schema: string = 'custom';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}

}
