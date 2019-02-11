import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class TrustPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(text: string): import("@angular/platform-browser/src/security/dom_sanitization_service").SafeHtml;
}
