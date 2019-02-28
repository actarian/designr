import { ControlBase, ControlBaseOptions } from '../base/control-base';
export declare class ControlNumber extends ControlBase<string> {
    readonly component: string;
    readonly schema: string;
    constructor(options?: ControlBaseOptions<string>);
}
