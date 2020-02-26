import { Type } from '@angular/core';
import { AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';
import { ControlConfig } from '../config/control.config';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import * as i0 from "@angular/core";
export declare function noopValidator(): ValidatorFn;
export declare class ControlService {
    options: ControlConfig;
    constructor(options: ControlConfig);
    toFormGroup(options: IControlOption<any>[]): FormGroup;
    getValidators(option: IControlOption<any>): ValidatorFn[];
    getAsyncValidators(option: IControlOption<any>): AsyncValidatorFn[];
    getGroupValidators(option: IControlOption<any>, group: FormGroup): ValidatorFn[];
    resolve(option: IControlOption<any>): Type<ControlComponent>;
    static ɵfac: i0.ɵɵFactoryDef<ControlService>;
    static ɵprov: i0.ɵɵInjectableDef<ControlService>;
}
