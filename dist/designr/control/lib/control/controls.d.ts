import { Type } from '@angular/core';
import { ControlBaseComponent } from './base/control-base.component';
export interface Controls {
    [key: string]: Type<ControlBaseComponent>;
}
