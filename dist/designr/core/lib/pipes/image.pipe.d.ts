import { PipeTransform } from '@angular/core';
import { Image } from '../models/image';
import * as i0 from "@angular/core";
export declare class ImagePipe implements PipeTransform {
    transform(images: Image[], type?: string, queryString?: string): Image;
    transform__(images: Image[], type?: string, queryString?: string): string;
    static ɵfac: i0.ɵɵFactoryDef<ImagePipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<ImagePipe, "image">;
    static ɵprov: i0.ɵɵInjectableDef<ImagePipe>;
}
