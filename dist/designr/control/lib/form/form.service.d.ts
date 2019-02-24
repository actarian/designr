import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions } from '../control/control-base';
import { ControlService } from '../control/control.service';
export declare class FormService {
    private controlService;
    constructor(controlService: ControlService);
    getControlsFromOptions(options: ControlBaseOptions<any>[]): ControlBase<any>[];
    getGroupFromOptions(options: ControlBaseOptions<any>[]): FormGroup;
    getGroupFromControls(controls: ControlBase<any>[]): FormGroup;
}
