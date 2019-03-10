import { ControlOption } from '../control-option';

export class ControlSelect extends ControlOption<string> {
	schema?: string = 'select';
	options?: { key: string, value: string }[] = [];
}
