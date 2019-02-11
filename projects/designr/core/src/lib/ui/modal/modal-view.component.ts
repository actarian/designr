import { Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, Provider, ReflectiveInjector, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '../../disposable/disposable.component';
import { Modal, ModalData } from './modal';

@Component({
	selector: 'core-modal-view-component',
	templateUrl: './modal-view.component.html',
	styleUrls: ['./modal-view.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class ModalViewComponent extends DisposableComponent implements OnDestroy {

	component: ComponentRef<any>;

	@ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer: ViewContainerRef;

	@Input() set modal(modal: Modal) {
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
		const resolvedInputs = ReflectiveInjector.resolve(providers);
		const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.modalContainer.parentInjector);
		const factory = this.resolver.resolveComponentFactory(modal.component);
		const component = factory.create(injector);
		this.modalContainer.insert(component.hostView);
		this.component = component;
	}

	constructor(
		private resolver: ComponentFactoryResolver
	) {
		super();
	}

	ngOnDestroy() {
		if (this.component) {
			this.component.destroy();
			this.component = null;
		}
	}

}
