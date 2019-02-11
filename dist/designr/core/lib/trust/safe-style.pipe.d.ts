import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class SafeStylePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(style: string): import("@angular/platform-browser/src/security/dom_sanitization_service").SafeStyle;
}
