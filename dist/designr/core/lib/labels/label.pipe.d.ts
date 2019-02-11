import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';
export declare class LabelPipe implements PipeTransform {
    private ref;
    protected labelService: LabelService<Label>;
    constructor(ref: ChangeDetectorRef, labelService: LabelService<Label>);
    transform(key: string, text?: string, params?: any): string;
}
