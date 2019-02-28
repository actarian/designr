import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlRadio extends ControlBase<boolean> {

	readonly component: string = 'ControlRadioComponent';
	readonly schema: string = 'radio';

	constructor(options: ControlBaseOptions<boolean> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
