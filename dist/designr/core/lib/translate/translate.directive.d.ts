import { ElementRef, OnInit } from '@angular/core';
import { DisposableDirective } from '../disposable/disposable.directive';
import { Translate } from './translate';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
export declare class TranslateDirective extends DisposableDirective implements OnInit {
    private element;
    private translateService;
    key: string;
    innerHTML: string;
    translate: string;
    translateParams: any;
    constructor(element: ElementRef, translateService: TranslateService<Translate>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TranslateDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<TranslateDirective, "[translate]", never, { "translate": "translate"; "translateParams": "translateParams"; }, {}, never>;
}
