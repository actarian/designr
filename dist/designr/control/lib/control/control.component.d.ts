import { AbstractControl, FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';
export declare class ControlComponent extends DisposableComponent {
    option: IControlOption<any>;
    form: FormGroup;
    readonly control: AbstractControl;
    readonly isValid: boolean;
    readonly classes: {
        valid: boolean;
        invalid: boolean;
        dirty: boolean;
        empty: boolean;
        required: any;
    };
}
