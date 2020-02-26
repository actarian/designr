import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HighlightPipe implements PipeTransform {
    transform(text: string, query: string): string;
    escapeRegexChars(text: string): string;
    safeToString(text: string): string;
    encodeHTML(text: string): string;
    static ɵfac: i0.ɵɵFactoryDef<HighlightPipe>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<HighlightPipe, "highlight">;
    static ɵprov: i0.ɵɵInjectableDef<HighlightPipe>;
}
