import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';
import * as i0 from "@angular/core";
export declare class ControlsComponent extends DisposableComponent {
    options: IControlOption<any>[];
    form: FormGroup;
    static ɵfac: i0.ɵɵFactoryDef<ControlsComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlsComponent, "controls-component", never, { "options": "options"; "form": "form"; }, {}, never>;
}
