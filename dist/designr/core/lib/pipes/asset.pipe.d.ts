import { PipeTransform } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { SegmentPipe } from './segment.pipe';
export declare class AssetPipe implements PipeTransform {
    private configService;
    private segment;
    constructor(configService: ConfigService, segment: SegmentPipe);
    transform(data: any[] | string): string;
}
