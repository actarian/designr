import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlService } from './control.service';
export declare class ControlOutletComponent implements OnInit, OnDestroy {
    private componentFactoryResolver;
    private controlService;
    option: IControlOption<any>;
    form: FormGroup;
    viewContainerRef: ViewContainerRef;
    private componentRef;
    readonly classes: {
        [key: string]: boolean;
    };
    readonly control: AbstractControl;
    constructor(componentFactoryResolver: ComponentFactoryResolver, controlService: ControlService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
