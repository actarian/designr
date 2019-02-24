import { InjectionToken } from '@angular/core';
import { Controls } from '../control/controls';
export declare class ControlConfig {
    controls?: Controls;
    constructor(options?: ControlConfig);
}
export declare const CONTROL_CONFIG: InjectionToken<ControlConfig>;
