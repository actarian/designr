import { Observable } from 'rxjs';
import { ControlOption } from '../control-option';
export interface ControlSelectOption {
    value: any;
    label: string;
}
export declare class ControlSelect extends ControlOption<string> {
    schema: string;
    options?: ControlSelectOption[] | Observable<ControlSelectOption[]>;
}
