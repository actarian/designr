import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlBase } from './base/control-base';
import { ControlService } from './control.service';
export declare class ControlOutletComponent extends DisposableComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private controlService;
    control: ControlBase<any>;
    form: FormGroup;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, controlService: ControlService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
