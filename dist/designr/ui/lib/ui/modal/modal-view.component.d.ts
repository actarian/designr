import { ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Modal } from './modal';
import * as i0 from "@angular/core";
export declare class ModalViewComponent extends DisposableComponent implements OnInit, OnDestroy {
    private resolver;
    modalContainer: ViewContainerRef;
    modal: Modal;
    component: ComponentRef<any>;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setModal(modal: Modal): void;
    static ɵfac: i0.ɵɵFactoryDef<ModalViewComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModalViewComponent, "core-modal-view-component", never, { "modal": "modal"; }, {}, never>;
}
