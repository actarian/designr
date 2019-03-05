import { ControlBase, ControlBaseOptions } from '../base/control-base';

export class ControlMarkdown extends ControlBase<string> {

	readonly schema: string = 'markdown';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
