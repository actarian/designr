import { OnInit } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { ModalService } from './modal.service';
import * as i0 from "@angular/core";
export declare class ModalContainerComponent extends DisposableComponent implements OnInit {
    modalService: ModalService;
    modalCount: number;
    className?: string;
    constructor(modalService: ModalService);
    ngOnInit(): void;
    doClose(): void;
    doPrev(): void;
    static ɵfac: i0.ɵɵFactoryDef<ModalContainerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ModalContainerComponent, "core-modal-container-component", never, {}, {}, never>;
}
