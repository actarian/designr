import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class TrustPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(text: string): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDef<TrustPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<TrustPipe, "safeHtml">;
}
