import { ControlOption } from '../control-option';
export declare class ControlPassword extends ControlOption<string> {
    schema: string;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
}
