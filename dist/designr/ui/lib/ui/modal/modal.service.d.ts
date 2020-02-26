import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Modal, ModalCloseEvent, ModalCompleteEvent } from './modal';
import * as i0 from "@angular/core";
export declare class ModalService {
    private platformId;
    modals$: BehaviorSubject<Modal[]>;
    constructor(platformId: string);
    getInfos(): Observable<Modal>;
    addClass(name: string): void;
    removeClass(name: string): void;
    open(modal: Modal): EventEmitter<ModalCompleteEvent | ModalCloseEvent>;
    complete(modal?: Modal, data?: any): void;
    close(modal?: Modal, data?: any): void;
    prev(modal?: Modal, data?: any): void;
    private pop;
    private remove;
    private removeAll;
    static ɵfac: i0.ɵɵFactoryDef<ModalService>;
    static ɵprov: i0.ɵɵInjectableDef<ModalService>;
}
