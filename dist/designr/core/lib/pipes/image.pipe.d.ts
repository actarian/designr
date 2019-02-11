import { PipeTransform } from '@angular/core';
import { Image } from '../models/image';
export declare class ImagePipe implements PipeTransform {
    transform(images: Image[], type?: string, queryString?: string): string;
}
