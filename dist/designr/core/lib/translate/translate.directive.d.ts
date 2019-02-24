import { ElementRef, OnInit } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Translate } from './translate';
import { TranslateService } from './translate.service';
export declare class TranslateDirective extends DisposableComponent implements OnInit {
    private element;
    private translateService;
    key: string;
    innerHTML: string;
    translate: string;
    translateParams: any;
    constructor(element: ElementRef, translateService: TranslateService<Translate>);
    ngOnInit(): void;
}
