import { InjectionToken, Type } from '@angular/core';
import { IControlOption } from '../control/control-option';
import { ControlComponent } from '../control/control.component';
import { ControlEmailComponent } from '../control/email/control-email.component';
import { ControlRadioComponent } from '../control/radio/control-radio.component';
export interface ControlInterface {
    component: Type<ControlComponent>;
    model: Type<IControlOption<any>>;
}
export interface Controls {
    [key: string]: ControlInterface;
}
export declare const entryComponents: (typeof ControlEmailComponent | typeof ControlRadioComponent)[];
export declare const controls: Controls;
export declare class ControlConfig {
    controls?: Controls;
    constructor(options?: ControlConfig);
}
export declare const CONTROL_CONFIG: InjectionToken<ControlConfig>;
