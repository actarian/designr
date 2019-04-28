import { Observable } from 'rxjs';
import { ControlOption } from '../control-option';

export interface ControlSelectOption {
	id: any;
	name: string;
}

export class ControlSelect extends ControlOption<string> {
	schema: string = 'select';
	options?: ControlSelectOption[] | Observable<ControlSelectOption[]>;
	asObject: boolean;
}
