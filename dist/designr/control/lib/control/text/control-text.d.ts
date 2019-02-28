import { ControlBase, ControlBaseOptions } from '../base/control-base';
export declare class ControlText extends ControlBase<string> {
    readonly component: string;
    readonly schema: string;
    constructor(options?: ControlBaseOptions<string>);
}
