import { ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import * as i0 from "@angular/core";
export declare class UseLayoutDirective implements OnInit, OnDestroy {
    private templateRef;
    private viewContainerRef;
    private componentFactoryResolver;
    private configService;
    private container;
    layoutKey?: string;
    page?: Page;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, configService: ConfigService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<UseLayoutDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<UseLayoutDirective, "[useLayout]", never, { "layoutKey": "useLayout"; "page": "page"; }, {}, never>;
}
