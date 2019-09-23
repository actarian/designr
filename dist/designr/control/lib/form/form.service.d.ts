import { FormGroup } from '@angular/forms';
import { ControlOption, IControlOption } from '../control/control-option';
import { ControlService } from '../control/control.service';
export declare class FormService {
    protected controlService: ControlService;
    constructor(controlService: ControlService);
    getOptions(data: IControlOption<any>[]): ControlOption<any>[];
    getFormGroup(options: ControlOption<any>[]): FormGroup;
    getFormGroupFromOptions(options: IControlOption<any>[]): FormGroup;
}
