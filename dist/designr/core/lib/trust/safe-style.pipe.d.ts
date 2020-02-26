import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeStylePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(style: string): import("@angular/platform-browser").SafeStyle;
    static ɵfac: i0.ɵɵFactoryDef<SafeStylePipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeStylePipe, "safeStyle">;
    static ɵprov: i0.ɵɵInjectableDef<SafeStylePipe>;
}
