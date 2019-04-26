import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlComponent } from '../control.component';
import { ControlSelect, ControlSelectOption } from './control-select';
export declare class ControlSelectComponent extends ControlComponent implements OnInit {
    option: ControlSelect;
    options: ControlSelectOption[];
    constructor();
    ngOnInit(): void;
    options$(): Observable<ControlSelectOption[]>;
}
