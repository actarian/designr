import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';
export declare class ControlsComponent extends DisposableComponent {
    options: IControlOption<any>[];
    form: FormGroup;
}
