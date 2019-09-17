import { ControlOption } from '../control-option';

export class ControlGroup extends ControlOption<any[]> {
	schema: string = 'group';
	title?: string;
	abstract?: string;
	options?: ControlOption<any>[];
}
