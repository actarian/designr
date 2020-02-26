import { NgForOfContext } from '@angular/common';
import { TemplateRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { IControlOption } from './control-option';
import * as i0 from "@angular/core";
export declare class ControlComponent extends DisposableComponent {
    inputRef: TemplateRef<NgForOfContext<ControlComponent>>;
    errorRef: TemplateRef<NgForOfContext<ControlComponent>>;
    option: IControlOption<any>;
    form: FormGroup;
    get context(): ControlComponent;
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
    static ɵfac: i0.ɵɵFactoryDef<ControlComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlComponent, "control-component", never, { "option": "option"; "form": "form"; }, {}, ["inputRef", "errorRef"]>;
}
