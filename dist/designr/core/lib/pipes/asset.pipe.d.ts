import { PipeTransform } from '@angular/core';
import { CoreService } from '../config/core.service';
import { SegmentPipe } from './segment.pipe';
import * as i0 from "@angular/core";
export declare class AssetPipe implements PipeTransform {
    private coreService;
    private segment;
    constructor(coreService: CoreService, segment: SegmentPipe);
    transform(data: any[] | string): string;
    static ɵfac: i0.ɵɵFactoryDef<AssetPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<AssetPipe, "asset">;
    static ɵprov: i0.ɵɵInjectableDef<AssetPipe>;
}
