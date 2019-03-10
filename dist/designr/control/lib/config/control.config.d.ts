import { InjectionToken, Type } from '@angular/core';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { ControlOption } from '../control/control-option';
import { ControlComponent } from '../control/control.component';
import { ControlMarkdownComponent } from '../control/markdown/control-markdown.component';
export interface ControlInterface {
    component: Type<ControlComponent>;
    model: Type<ControlOption<any>>;
}
export interface Controls {
    [key: string]: ControlInterface;
}
export declare const entryComponents: (typeof ControlCheckboxComponent | typeof ControlMarkdownComponent)[];
export declare const controls: Controls;
export declare class ControlConfig {
    controls?: Controls;
    constructor(options?: ControlConfig);
}
export declare const CONTROL_CONFIG: InjectionToken<ControlConfig>;
