import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlComponent } from '../control.component';
import { ControlSelect, ControlSelectOption } from './control-select';
export declare class ControlSelectComponent extends ControlComponent implements OnInit {
    option: ControlSelect;
    options: ControlSelectOption[];
    getValue: Function;
    compareWith: Function;
    ngOnInit(): void;
    options$(): Observable<ControlSelectOption[]>;
    getValue_(item: ControlSelectOption): any;
    compareWith_(a: ControlSelectOption | string | number, b: ControlSelectOption | string | number): boolean;
}
