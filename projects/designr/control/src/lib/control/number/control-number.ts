import { ControlOption } from '../control-option';

export class ControlNumber extends ControlOption<string> {
	schema: string = 'number';
	min?: number;
	max?: number;
	step?: number;
}
