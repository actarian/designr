import { Location } from '@angular/common';
import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SegmentPipe implements PipeTransform {
    private location;
    constructor(location: Location);
    transform(segments: any[] | string): any[];
    static ɵfac: i0.ɵɵFactoryDef<SegmentPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SegmentPipe, "segment">;
    static ɵprov: i0.ɵɵInjectableDef<SegmentPipe>;
}
