import { EventEmitter, Provider } from '@angular/core';
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
}
export declare class ModalData extends Object {
}
