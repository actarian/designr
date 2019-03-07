import { ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Modal } from './modal';
export declare class ModalViewComponent extends DisposableComponent implements OnInit, OnDestroy {
    private resolver;
    modalContainer: ViewContainerRef;
    modal: Modal;
    component: ComponentRef<any>;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setModal(modal: Modal): void;
}
