import { ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
export declare class SectionOutletComponent extends DisposableComponent implements OnInit {
    private viewContainerRef;
    private componentFactoryResolver;
    private sectionService;
    section: Section;
    constructor(viewContainerRef: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, sectionService: SectionService);
    ngOnInit(): void;
}
