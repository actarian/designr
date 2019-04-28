import { Observable } from 'rxjs';
import { ControlOption } from '../control-option';
export interface ControlSelectOption {
    id: any;
    name: string;
}
export declare class ControlSelect extends ControlOption<string> {
    schema: string;
    options?: ControlSelectOption[] | Observable<ControlSelectOption[]>;
    asObject: boolean;
}
