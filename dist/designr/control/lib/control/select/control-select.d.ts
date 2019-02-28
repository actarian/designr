import { ControlBase, ControlBaseOptions } from '../base/control-base';
export declare class ControlSelect extends ControlBase<string> {
    readonly component: string;
    readonly schema: string;
    options: {
        key: string;
        value: string;
    }[];
    constructor(options?: ControlBaseOptions<string>);
}
