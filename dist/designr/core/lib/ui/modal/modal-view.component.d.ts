import { ComponentFactoryResolver, ComponentRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../../disposable/disposable.component';
import { Modal } from './modal';
export declare class ModalViewComponent extends DisposableComponent implements OnDestroy {
    private resolver;
    component: ComponentRef<any>;
    modalContainer: ViewContainerRef;
    modal: Modal;
    constructor(resolver: ComponentFactoryResolver);
    ngOnDestroy(): void;
}
