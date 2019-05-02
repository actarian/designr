import { NgForOfContext } from '@angular/common';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import { ControlService } from './control.service';
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
    readonly context: ControlOutletComponent;
    readonly classes: {
        [key: string]: boolean;
    };
    readonly control: AbstractControl;
    constructor(componentFactoryResolver: ComponentFactoryResolver, controlService: ControlService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
