import { AfterContentChecked, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DefaultContentDirective implements AfterContentChecked {
    private container;
    private renderer;
    default: TemplateRef<any>;
    private element;
    private hasContent;
    constructor(element: ElementRef, container: ViewContainerRef, renderer: Renderer2);
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDef<DefaultContentDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DefaultContentDirective, "[default]", never, { "default": "default"; }, {}, never>;
}
