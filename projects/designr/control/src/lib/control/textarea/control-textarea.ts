import { ControlOption } from '../control-option';

export class ControlTextarea extends ControlOption<string> {
	schema: string = 'textarea';
	minlength?: number;
	maxlength?: number;
	pattern?: string | RegExp;
}
