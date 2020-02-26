import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionService } from './section.service';
import * as i0 from "@angular/core";
export declare class SectionOutletComponent extends DisposableComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private sectionService;
    section: Section;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, sectionService: SectionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SectionOutletComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SectionOutletComponent, "section-outlet", never, { "section": "section"; }, {}, never>;
}
