import { PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';
export declare class LabelPipe implements PipeTransform {
    private labelService;
    constructor(labelService: LabelService<Label>);
    transform(key: string, defaultValue?: string, params?: any): string | undefined;
}
