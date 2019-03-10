import { ControlOption } from '../control-option';
export declare class ControlSelect extends ControlOption<string> {
    schema?: string;
    options?: {
        key: string;
        value: string;
    }[];
}
