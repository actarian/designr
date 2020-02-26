import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeUrlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(url: string): import("@angular/platform-browser").SafeResourceUrl;
    static ɵfac: i0.ɵɵFactoryDef<SafeUrlPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<SafeUrlPipe, "safeUrl">;
    static ɵprov: i0.ɵɵInjectableDef<SafeUrlPipe>;
}
