import { ControlOption } from '../control-option';
export declare class ControlText extends ControlOption<string> {
    schema: string;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
}
