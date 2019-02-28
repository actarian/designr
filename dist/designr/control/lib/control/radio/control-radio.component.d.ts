import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlRadio } from './control-radio';
export declare class ControlRadioComponent extends ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlRadio;
    constructor(renderer: Renderer2);
}
