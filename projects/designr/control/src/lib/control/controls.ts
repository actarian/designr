import { Type } from '@angular/core';
import { ControlComponent } from './control.component';

export interface Controls { [key: string]: Type<ControlComponent>; }
