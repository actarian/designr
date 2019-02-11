import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
export declare class TranslatePipe implements PipeTransform {
    private ref;
    protected translateService: TranslateService;
    constructor(ref: ChangeDetectorRef, translateService: TranslateService);
    transform(key: string, params?: {
        value: any;
    }): string;
}
