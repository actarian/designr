import { PipeTransform } from '@angular/core';
import { Label } from './label';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
export declare class LabelPipe implements PipeTransform {
    private labelService;
    constructor(labelService: LabelService<Label>);
    transform(key: string, defaultValue?: string, params?: any): string | undefined;
    static ɵfac: i0.ɵɵFactoryDef<LabelPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<LabelPipe, "label">;
    static ɵprov: i0.ɵɵInjectableDef<LabelPipe>;
}
