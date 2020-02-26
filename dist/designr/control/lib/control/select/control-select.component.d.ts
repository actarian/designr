import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlComponent } from '../control.component';
import { ControlSelect, ControlSelectOption } from './control-select';
import * as i0 from "@angular/core";
export declare class ControlSelectComponent extends ControlComponent implements OnInit {
    option: ControlSelect;
    options: ControlSelectOption[];
    getValue: Function;
    compareWith: Function;
    ngOnInit(): void;
    options$(): Observable<ControlSelectOption[]>;
    getValue_(item: ControlSelectOption): any;
    compareWith_(a: ControlSelectOption | string | number, b: ControlSelectOption | string | number): boolean;
    static ɵfac: i0.ɵɵFactoryDef<ControlSelectComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlSelectComponent, "control-select-component", never, { "option": "option"; }, {}, never>;
}
