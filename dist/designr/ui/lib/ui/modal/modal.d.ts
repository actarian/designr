import { EventEmitter, Provider } from '@angular/core';
import * as i0 from "@angular/core";
export declare enum ModalEventType {
    Complete = 0,
    Close = 1
}
export declare class ModalCompleteEvent {
    modal: Modal;
    data?: any;
    type?: ModalEventType.Complete;
    constructor(options?: ModalCompleteEvent);
}
export declare class ModalCloseEvent {
    modal: Modal;
    data?: any;
    type?: ModalEventType.Close;
    constructor(options?: ModalCloseEvent);
}
export declare type ModalEvent<T> = ModalCompleteEvent | ModalCloseEvent;
export declare class Modal {
    component: any;
    providers?: Provider;
    data?: any;
    emitter?: EventEmitter<ModalCompleteEvent | ModalCloseEvent>;
    className?: string;
    constructor(options?: Modal);
    static ɵfac: i0.ɵɵFactoryDef<Modal>;
    static ɵprov: i0.ɵɵInjectableDef<Modal>;
}
export declare class ModalData extends Object {
    static ɵfac: i0.ɵɵFactoryDef<ModalData>;
    static ɵprov: i0.ɵɵInjectableDef<ModalData>;
}
