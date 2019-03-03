import { Type } from '@angular/core';
import { ControlBase } from './base/control-base';
import { ControlBaseComponent } from './base/control-base.component';
export interface ControlInterface {
    component: Type<ControlBaseComponent>;
    model: Type<ControlBase<any>>;
}
export interface Controls {
    [key: string]: ControlInterface;
}
