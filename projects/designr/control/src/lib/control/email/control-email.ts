import { ControlOption } from '../control-option';

export class ControlEmail extends ControlOption<string> {
	schema?: string = 'email';
	pattern?: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
}
