import { Type } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { ControlConfig } from '../config/control.config';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
export declare class ControlService {
    options: ControlConfig;
    constructor(options: ControlConfig);
    resolve(options: IControlOption<any>): Type<ControlComponent>;
    getValidators(options: IControlOption<any>, group: FormGroup): ValidatorFn[];
    toFormGroup(options: IControlOption<any>[]): FormGroup;
}
