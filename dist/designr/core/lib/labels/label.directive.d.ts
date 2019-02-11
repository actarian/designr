import { ElementRef, OnInit } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Label } from './label';
import { LabelService } from './label.service';
export declare class LabelDirective extends DisposableComponent implements OnInit {
    private element;
    private labelService;
    key: string;
    innerHTML: string;
    label: string;
    labelParams: any;
    constructor(element: ElementRef, labelService: LabelService<Label>);
    ngOnInit(): void;
}
