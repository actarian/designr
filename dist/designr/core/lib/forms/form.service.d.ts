import { FormGroup } from '@angular/forms';
import { ControlBase, ControlBaseOptions } from './controls/control-base';
import { ControlService } from './controls/control.service';
export declare class FormService {
    private controlService;
    constructor(controlService: ControlService);
    getControlsFromOptions(options: ControlBaseOptions<any>[]): ControlBase<any>[];
    getGroupFromOptions(options: ControlBaseOptions<any>[]): FormGroup;
    getGroupFromControls(controls: ControlBase<any>[]): FormGroup;
}
