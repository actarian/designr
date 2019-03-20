import { ControlOption } from '../control-option';

export class ControlText extends ControlOption<string> {
	schema: string = 'text';
	minlength?: number;
	maxlength?: number;
	pattern?: string | RegExp;
}
