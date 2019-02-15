import { PipeTransform } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
export declare class AssetPipe implements PipeTransform {
    private coreService;
    private segment;
    constructor(coreService: CoreService, segment: SegmentPipe);
    transform(data: any[] | string): string;
}
