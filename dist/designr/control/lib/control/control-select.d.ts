import { ControlBase, ControlBaseOptions } from './control-base';
export declare class ControlSelect extends ControlBase<string> {
    schema: string;
    options: {
        key: string;
        value: string;
    }[];
    constructor(options?: ControlBaseOptions<string>);
}
