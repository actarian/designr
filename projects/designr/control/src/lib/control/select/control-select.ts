import { Observable } from 'rxjs';
import { ControlOption } from '../control-option';

export interface ControlSelectOption {
	value: any;
	label: string;
}

export class ControlSelect extends ControlOption<string> {
	schema: string = 'select';
	options?: ControlSelectOption[] | Observable<ControlSelectOption[]>;
}
