import { FormGroup } from '@angular/forms';
import { ControlOption } from '../control/control-option';
import { ControlService } from '../control/control.service';
export declare class FormService {
    private controlService;
    constructor(controlService: ControlService);
    getFormGroup(options: ControlOption<any>[]): FormGroup;
    getOptions(data: ControlOption<any>[]): ControlOption<any>[];
    getFormGroupFromOptions(options: ControlOption<any>[]): FormGroup;
}
