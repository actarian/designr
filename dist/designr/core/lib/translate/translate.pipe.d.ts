import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { Translate } from './translate';
import { TranslateService } from './translate.service';
export declare class TranslatePipe implements PipeTransform {
    private ref;
    protected translateService: TranslateService<Translate>;
    constructor(ref: ChangeDetectorRef, translateService: TranslateService<Translate>);
    transform(key: string, text?: string, params?: any): string;
}
