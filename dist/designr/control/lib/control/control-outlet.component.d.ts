import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlService } from './control.service';
export declare class ControlOutletComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private controlService;
    option: IControlOption<any>;
    form: FormGroup;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, controlService: ControlService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}