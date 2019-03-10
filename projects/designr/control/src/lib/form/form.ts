import { ControlOption } from '../control/control-option';

export class Form {

	options: ControlOption<any>[];

	constructor(options?: Form) {
		if (options) {
			Object.assign(this, options);
		}
	}

}
