import { ControlOption } from '../control-option';

export class ControlEmail extends ControlOption<string> {
	schema: string = 'email';
	minlength?: number;
	maxlength?: number;
	pattern?: string | RegExp = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
}
