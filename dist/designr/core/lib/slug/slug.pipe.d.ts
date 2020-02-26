import { PipeTransform } from '@angular/core';
import { RoutePipe } from '../route/route.pipe';
import { SlugService } from './slug.service';
import * as i0 from "@angular/core";
export declare class SlugPipe implements PipeTransform {
    private slugService;
    private routePipe;
    constructor(slugService: SlugService, routePipe: RoutePipe);
    transform(key: string, segments?: string[]): string[];
    static ɵfac: i0.ɵɵFactoryDef<SlugPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SlugPipe, "slug">;
    static ɵprov: i0.ɵɵInjectableDef<SlugPipe>;
}
