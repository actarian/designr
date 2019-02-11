import { FormGroup, ValidatorFn } from '@angular/forms';
import { ControlBase } from './control-base';
export declare class ControlService {
    getValidators(control: ControlBase<any>, group: FormGroup): ValidatorFn[];
    toFormGroup(controls: ControlBase<any>[]): FormGroup;
}
