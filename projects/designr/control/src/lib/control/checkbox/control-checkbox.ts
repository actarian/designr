import { ControlOption } from '../control-option';

export class ControlCheckbox extends ControlOption<boolean> {
	schema: string = 'checkbox';
	requiredTrue?: boolean;
}
