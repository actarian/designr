import { ControlOption } from '../control-option';
export declare class ControlNumber extends ControlOption<string> {
    schema: string;
    min?: number;
    max?: number;
    step?: number;
}
