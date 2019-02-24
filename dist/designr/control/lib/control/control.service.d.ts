import { FormGroup, ValidatorFn } from '@angular/forms';
import { ControlConfig } from '../config/control.config';
import { ControlBase } from './control-base';
export declare class ControlService {
    options: ControlConfig;
    constructor(options: ControlConfig);
    getValidators(control: ControlBase<any>, group: FormGroup): ValidatorFn[];
    toFormGroup(controls: ControlBase<any>[]): FormGroup;
}
