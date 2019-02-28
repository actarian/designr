import { ControlBase, ControlBaseOptions } from '../base/control-base';
export declare class ControlCheckbox extends ControlBase<boolean> {
    readonly component: string;
    readonly schema: string;
    constructor(options?: ControlBaseOptions<boolean>);
}
