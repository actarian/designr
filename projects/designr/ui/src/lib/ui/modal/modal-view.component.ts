import { Component, ComponentFactoryResolver, ComponentRef, Injector, Input, OnDestroy, OnInit, Provider, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Modal, ModalData } from './modal';

@Component({
	selector: 'core-modal-view-component',
	templateUrl: './modal-view.component.html',
	// styleUrls: ['./modal-view.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalViewComponent extends DisposableComponent implements OnInit, OnDestroy {

	@ViewChild('modalContainer', { read: ViewContainerRef, static: true }) modalContainer: ViewContainerRef;
	/*
	@Input() set modal(modal: Modal) {
		this.setModal(modal);
	}
	*/
	@Input() modal: Modal;
	component: ComponentRef<any>;

	constructor(
		private resolver: ComponentFactoryResolver,
		// private changeDetector: ChangeDetectorRef,
	) {
		super();
	}

	ngOnInit() {
		this.setModal(this.modal);
	}

	ngOnDestroy() {
		if (this.component) {
			this.component.destroy();
			this.component = null;
		}
	}

	setModal(modal: Modal) {
		if (this.component) {
			this.component.destroy();
		}
		if (!modal) {
			this.component = null;
			return;
		}
		const providers: Provider = Object.keys(modal.providers).map(key => {
			return { provide: key, useValue: modal.providers[key] };
		});
		providers.push(
			{ provide: ModalData, useValue: modal.data },
			{ provide: Modal, useValue: modal },
		);
		const injector = Injector.create({ providers });
		// const resolvedInputs = ReflectiveInjector.resolve(providers);
		// const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
		const factory = this.resolver.resolveComponentFactory(modal.component);
		const component = factory.create(injector);
		this.modalContainer.insert(component.hostView);
		this.component = component;
		// this.changeDetector.markForCheck();
	}

}
