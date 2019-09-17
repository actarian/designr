import { ControlOption } from '../control-option';

export class ControlInfo extends ControlOption<any[]> {
	schema: string = 'info';
	title?: string;
	abstract?: string;
}
