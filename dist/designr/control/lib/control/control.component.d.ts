import { NgForOfContext } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';
export declare class ControlComponent extends DisposableComponent {
    inputRef: TemplateRef<NgForOfContext<ControlComponent>>;
    errorRef: TemplateRef<NgForOfContext<ControlComponent>>;
    option: IControlOption<any>;
    form: FormGroup;
    readonly context: ControlComponent;
    readonly control: AbstractControl;
    readonly isValid: boolean;
    readonly classes: {
        valid: boolean;
        invalid: boolean;
        dirty: boolean;
        empty: boolean;
        required: boolean;
        disabled: boolean;
    };
}
