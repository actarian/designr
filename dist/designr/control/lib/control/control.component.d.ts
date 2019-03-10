import { AbstractControl, FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlOption } from './control-option';
export declare class ControlComponent extends DisposableComponent {
    option: ControlOption<any>;
    form: FormGroup;
    readonly control: AbstractControl;
    readonly isValid: boolean;
}
