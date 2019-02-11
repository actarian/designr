import { PipeTransform } from '@angular/core';
export declare class HighlightPipe implements PipeTransform {
    transform(text: string, query: string): string;
    escapeRegexChars(text: string): string;
    safeToString(text: string): string;
    encodeHTML(text: string): string;
}
