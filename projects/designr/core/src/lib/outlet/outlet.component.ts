import { Component, ComponentFactory, ComponentFactoryResolver, Inject, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Outlet } from './outlet';
import { OutletDefaultComponent } from './outlet-default.component';
import { OutletResolverService } from './outlet-resolver.service';

@Component({
	selector: 'outlet-component',
	template: '',
})
export class OutletComponent extends DisposableComponent implements OnInit {

	@Input() outlet: Outlet;

	constructor(
		@Inject(ViewContainerRef) private viewContainerRef: ViewContainerRef,
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
	}

}
