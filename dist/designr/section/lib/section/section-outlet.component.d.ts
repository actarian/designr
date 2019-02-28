import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
export declare class SectionOutletComponent extends DisposableComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private sectionService;
    section: Section;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, sectionService: SectionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
