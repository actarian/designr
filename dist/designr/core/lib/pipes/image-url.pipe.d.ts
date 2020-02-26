import { PipeTransform } from '@angular/core';
import { Image } from '../models/image';
import * as i0 from "@angular/core";
export declare class ImageUrlPipe implements PipeTransform {
    transform(images: Image[], type?: string, queryString?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<ImageUrlPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ImageUrlPipe, "imageUrl">;
    static ɵprov: i0.ɵɵInjectableDef<ImageUrlPipe>;
}
