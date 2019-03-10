import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlOption } from './control-option';
export declare class ControlsComponent extends DisposableComponent {
    options: ControlOption<any>[];
    form: FormGroup;
}
