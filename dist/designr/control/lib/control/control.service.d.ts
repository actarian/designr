import { Type } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { ControlConfig } from '../config/control.config';
import { ControlOption } from './control-option';
import { ControlComponent } from './control.component';
export declare class ControlService {
    options: ControlConfig;
    constructor(options: ControlConfig);
    resolve(options: ControlOption<any>): Type<ControlComponent>;
    getValidators(options: ControlOption<any>, group: FormGroup): ValidatorFn[];
    toFormGroup(options: ControlOption<any>[]): FormGroup;
}
