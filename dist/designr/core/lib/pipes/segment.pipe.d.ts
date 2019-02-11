import { Location } from '@angular/common';
import { PipeTransform } from '@angular/core';
export declare class SegmentPipe implements PipeTransform {
    private location;
    constructor(location: Location);
    transform(segments: any[] | string): any[];
}
