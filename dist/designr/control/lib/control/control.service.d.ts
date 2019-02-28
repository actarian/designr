import { Type } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { ControlConfig } from '../config/control.config';
import { ControlBase } from './base/control-base';
import { ControlBaseComponent } from './base/control-base.component';
export declare class ControlService {
    options: ControlConfig;
    constructor(options: ControlConfig);
    resolve(control: ControlBase<any>): Type<ControlBaseComponent>;
    getValidators(control: ControlBase<any>, group: FormGroup): ValidatorFn[];
    toFormGroup(controls: ControlBase<any>[]): FormGroup;
}
