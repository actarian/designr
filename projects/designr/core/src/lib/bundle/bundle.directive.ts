import { Directive, Inject, Injector, Input, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { Bundles, BUNDLES } from './bundle';

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
	selector: '[bundle]'
})
export class BundleDirective implements OnInit, OnDestroy {

	@Input() bundle: keyof Bundles;
	private moduleRef: NgModuleRef<any>;

	constructor(
		@Inject(BUNDLES) private bundles,
		private injector: Injector,
		private loader: NgModuleFactoryLoader,
		private container: ViewContainerRef,
	) {
	}

	ngOnInit() {
		this.loader.load(this.bundles[this.bundle]).then((moduleFactory: NgModuleFactory<any>) => {
			this.moduleRef = moduleFactory.create(this.injector);
			const rootComponentType = this.moduleRef.injector.get('LAZY_ROOT_COMPONENT');
			console.log(rootComponentType);
			const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponentType);
			this.container.createComponent(factory);
		});
	}

	ngOnDestroy() {
		if (this.moduleRef) {
			this.moduleRef.destroy();
		}
	}

}
