import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlNumber } from './control-number';
export declare class ControlNumberComponent extends ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlNumber;
    constructor(renderer: Renderer2);
}
