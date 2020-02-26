import { AbstractControl } from '@angular/forms';
import { ControlComponent } from '../control.component';
import { ControlInfo } from './control-info';
import * as i0 from "@angular/core";
export declare class ControlInfoComponent extends ControlComponent {
    option: ControlInfo;
    get control(): AbstractControl;
    get isValid(): boolean;
    get classes(): {
        valid?: boolean;
        invalid?: boolean;
        dirty?: boolean;
        empty?: boolean;
        required?: boolean;
        disabled?: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDef<ControlInfoComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlInfoComponent, "control-info-component", never, { "option": "option"; }, {}, never>;
}
