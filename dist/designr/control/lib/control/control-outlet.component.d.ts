import { NgForOfContext } from '@angular/common';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import { ControlService } from './control.service';
import * as i0 from "@angular/core";
export declare class ControlOutletComponent implements OnInit, OnDestroy, AfterViewInit {
    private componentFactoryResolver;
    private controlService;
    inputRef: TemplateRef<NgForOfContext<ControlComponent>>;
    errorRef: TemplateRef<NgForOfContext<ControlComponent>>;
    labelRef: TemplateRef<NgForOfContext<ControlComponent>>;
    descriptionRef: TemplateRef<NgForOfContext<ControlComponent>>;
    descriptionDef: TemplateRef<NgForOfContext<ControlComponent>>;
    labelDef: TemplateRef<NgForOfContext<ControlComponent>>;
    viewContainerRef: ViewContainerRef;
    option: IControlOption<any>;
    form: FormGroup;
    private componentRef;
    get context(): ControlOutletComponent;
    get classes(): {
        [key: string]: boolean;
    };
    get control(): AbstractControl;
    constructor(componentFactoryResolver: ComponentFactoryResolver, controlService: ControlService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlOutletComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlOutletComponent, "control-outlet", never, { "option": "option"; "form": "form"; }, {}, ["inputRef", "errorRef", "labelRef", "descriptionRef"]>;
}
