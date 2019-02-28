import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlCheckbox } from './control-checkbox';
export declare class ControlCheckboxComponent extends ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlCheckbox;
    constructor(renderer: Renderer2);
}
