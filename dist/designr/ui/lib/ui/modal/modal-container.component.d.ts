import { OnInit } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { ModalService } from './modal.service';
export declare class ModalContainerComponent extends DisposableComponent implements OnInit {
    modalService: ModalService;
    modalCount: number;
    className?: string;
    constructor(modalService: ModalService);
    ngOnInit(): void;
    doClose(): void;
    doPrev(): void;
}
