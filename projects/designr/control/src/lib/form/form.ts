import { ControlBase } from '../control/base/control-base';

export class Form {

	controls: ControlBase<any>[];

	constructor(options?: Form) {
		if (options) {
			Object.assign(this, options);
		}
	}

}
