import { InjectionToken } from '@angular/core';
import { ControlCheckboxComponent } from '../control/checkbox/control-checkbox.component';
import { Controls } from '../control/controls';
import { ControlEmailComponent } from '../control/email/control-email.component';
import { ControlMarkdownComponent } from '../control/markdown/control-markdown.component';
import { ControlNumberComponent } from '../control/number/control-number.component';
import { ControlPasswordComponent } from '../control/password/control-password.component';
import { ControlRadioComponent } from '../control/radio/control-radio.component';
import { ControlSelectComponent } from '../control/select/control-select.component';
import { ControlTextComponent } from '../control/text/control-text.component';
import { ControlTextareaComponent } from '../control/textarea/control-textarea.component';
export declare const entryComponents: (typeof ControlCheckboxComponent | typeof ControlEmailComponent | typeof ControlMarkdownComponent | typeof ControlNumberComponent | typeof ControlPasswordComponent | typeof ControlRadioComponent | typeof ControlSelectComponent | typeof ControlTextComponent | typeof ControlTextareaComponent)[];
export declare const BaseControls: Controls;
export declare class ControlConfig {
    controls?: Controls;
    constructor(options?: ControlConfig);
}
export declare const CONTROL_CONFIG: InjectionToken<ControlConfig>;
