import { ControlOption } from '../control-option';
export declare class ControlTextarea extends ControlOption<string> {
    schema: string;
    minlength?: number;
    maxlength?: number;
    pattern?: string | RegExp;
}
