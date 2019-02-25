import { Directive, Inject, Injector, Input, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { CoreModules, CORE_MODULES } from './core.modules';

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
	selector: '[lazyModule]'
})
export class LazyModuleDirective implements OnInit, OnDestroy {

	@Input() lazyModule: keyof CoreModules;
	private moduleRef: NgModuleRef<any>;

	constructor(
		@Inject(CORE_MODULES) private modules,
		private injector: Injector,
		private loader: NgModuleFactoryLoader,
		private container: ViewContainerRef,
	) {
	}

	ngOnInit() {
		this.loader.load(this.modules[this.lazyModule]).then((moduleFactory: NgModuleFactory<any>) => {
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
