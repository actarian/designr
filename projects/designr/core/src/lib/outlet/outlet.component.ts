import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '../disposable/disposable.component';
import { Outlet } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import { OutletResolverService } from './outlet-resolver.service';

@Component({
	selector: 'outlet-component',
	template: '',
})
export class OutletComponent extends DisposableComponent implements OnInit, OnDestroy {

	@Input() outlet: Outlet;

	@ViewChild('outlet', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
	private componentRef: ComponentRef<DisposableComponent>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private outletResolverService: OutletResolverService,
	) {
		super();
	}

	ngOnInit() {
		const component: Type<OutletDefaultComponent> = this.outletResolverService.resolve(this.outlet);
		const factory: ComponentFactory<OutletDefaultComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
		this.viewContainerRef.clear();
		const componentRef = this.viewContainerRef.createComponent(factory);
		const instance = componentRef.instance;
		instance.outlet = this.outlet;
		if (typeof instance['OutletInit'] === 'function') {
			instance['OutletInit']();
		}
		this.componentRef = componentRef;
	}

	ngOnDestroy() {
		this.componentRef.destroy();
	}

}
