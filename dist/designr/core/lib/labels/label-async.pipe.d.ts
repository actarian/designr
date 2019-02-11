import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';
export declare class LabelAsyncPipe implements OnDestroy, PipeTransform {
    private changeDetector;
    private labelService;
    private asyncPipe;
    constructor(changeDetector: ChangeDetectorRef, labelService: LabelService<Label>);
    transform(key: string, text?: string, params?: any): string;
    ngOnDestroy(): void;
}
