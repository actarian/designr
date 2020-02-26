import { ElementRef, OnInit } from '@angular/core';
import { DisposableDirective } from '../disposable/disposable.directive';
import { Label } from './label';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
export declare class LabelDirective extends DisposableDirective implements OnInit {
    private element;
    private labelService;
    label: string;
    labelParams: any;
    constructor(element: ElementRef, labelService: LabelService<Label>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LabelDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LabelDirective, "[label]", never, { "label": "label"; "labelParams": "labelParams"; }, {}, never>;
}
