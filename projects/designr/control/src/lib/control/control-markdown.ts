import { ControlBase, ControlBaseOptions } from './control-base';

export class ControlMarkdown extends ControlBase<string> {

	schema = 'markdown';

	constructor(options: ControlBaseOptions<string> = {}) {
		super(options);
		this.type = options.type || this.type;
	}
}
