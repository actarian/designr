import { ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
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
}
