import { ChangeDetectorRef, NgZone, OnDestroy, PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';
export declare class LabelPipe implements OnDestroy, PipeTransform {
    private zone;
    private changeDetector;
    private labelService;
    private asyncPipe;
    private value;
    constructor(zone: NgZone, changeDetector: ChangeDetectorRef, labelService: LabelService<Label>);
    private key$;
    getKey(key: string, text: string, params: any): void;
    transform(key: string, text?: string, params?: any): string | undefined;
    ngOnDestroy(): void;
}
