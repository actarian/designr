import { ComponentRef, Directive, Inject, Injector, Input, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Bundles, BUNDLES } from './bundle';

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
	selector: '[bundle]'
})
export class BundleDirective implements OnInit, OnDestroy {

	@Input() bundle: keyof Bundles;
	@Input() data?: any;
	private moduleRef_: NgModuleRef<any>;
	private componentRef_: ComponentRef<any>;

	constructor(
		@Inject(BUNDLES) private bundles,
		private injector: Injector,
		private loader: NgModuleFactoryLoader,
		private container: ViewContainerRef,
	) {
	}

	ngOnInit() {
		this.loader.load(this.bundles[this.bundle]).then((moduleFactory: NgModuleFactory<any>) => {
			const moduleRef = moduleFactory.create(this.injector);
			this.moduleRef_ = moduleRef;
			const rootComponentType = moduleRef.injector.get('LAZY_ROOT_COMPONENT');
			// console.log(rootComponentType);
			const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
			const componentRef = this.container.createComponent(factory);
			const instance = componentRef.instance;
			// instance.data = this.data; // !!!
			this.componentRef_ = componentRef;
		});
	}

	ngOnDestroy() {
		if (this.componentRef_) {
			this.componentRef_.destroy();
		}
		if (this.moduleRef_) {
			this.moduleRef_.destroy();
		}
	}

}
