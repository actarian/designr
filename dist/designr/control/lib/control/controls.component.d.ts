import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlBase } from './base/control-base';
export declare class ControlsComponent extends DisposableComponent {
    controls: ControlBase<any>[];
    form: FormGroup;
}
