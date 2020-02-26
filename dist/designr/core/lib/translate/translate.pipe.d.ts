import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { Translate } from './translate';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
export declare class TranslatePipe implements PipeTransform {
    private ref;
    protected translateService: TranslateService<Translate>;
    constructor(ref: ChangeDetectorRef, translateService: TranslateService<Translate>);
    transform(key: string, text?: string, params?: any): string;
    static ɵfac: i0.ɵɵFactoryDef<TranslatePipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<TranslatePipe, "translate">;
    static ɵprov: i0.ɵɵInjectableDef<TranslatePipe>;
}
