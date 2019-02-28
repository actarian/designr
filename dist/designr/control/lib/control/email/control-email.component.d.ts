import { Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ControlBaseComponent } from '../base/control-base.component';
import { ControlEmail } from './control-email';
export declare class ControlEmailComponent extends ControlBaseComponent implements ControlValueAccessor {
    protected renderer: Renderer2;
    control: ControlEmail;
    constructor(renderer: Renderer2);
}
