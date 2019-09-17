import { AbstractControl } from '@angular/forms';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';
export declare class ControlInfoComponent extends ControlComponent {
    option: ControlInfo;
    readonly control: AbstractControl;
    readonly isValid: boolean;
    readonly classes: {
        valid?: boolean;
        invalid?: boolean;
        dirty?: boolean;
        empty?: boolean;
        required?: boolean;
        disabled?: boolean;
    };
}
