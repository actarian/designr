import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { map, takeUntil } from 'rxjs/operators';
import { Modal } from './modal';
import { ModalService } from './modal.service';

@Component({
	selector: 'core-modal-container-component',
	templateUrl: './modal-container.component.html',
	encapsulation: ViewEncapsulation.Emulated,
})

export class ModalContainerComponent extends DisposableComponent implements OnInit {

	modalCount: number = 0;
	className?: string;

	constructor(
		public modalService: ModalService
	) {
		super();
	}

	ngOnInit() {
		this.modalService.modals$.pipe(
			takeUntil(this.unsubscribe),
			map((modals: Modal[]) => {
				this.modalCount = modals.length;
				const modal = modals.length ? modals[modals.length - 1] : null;
				return modal;
			})
		).subscribe((modal: Modal) => {
			this.className = modal ? modal.className : null;
		});
	}

	doClose() {
		this.modalService.close();
	}

	doPrev() {
		this.modalService.prev();
	}

}
