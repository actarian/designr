import { ControlOption } from '../control-option';
export declare class ControlGroup extends ControlOption<any[]> {
    schema: string;
    title?: string;
    abstract?: string;
    options?: ControlOption<any>[];
}
