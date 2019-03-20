import { ControlOption } from '../control-option';

export class ControlPassword extends ControlOption<string> {
	schema: string = 'password';
	minlength?: number;
	maxlength?: number;
	pattern?: string | RegExp;
}
