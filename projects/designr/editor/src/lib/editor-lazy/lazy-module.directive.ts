import { Directive, Inject, Injector, Input, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { EDITOR_MODULES_FACTORY, Modules } from './editor-lazy';

export type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
	selector: '[lazyModule]'
})
export class LazyModuleDirective implements OnInit, OnDestroy {

	@Input() lazyModule: keyof Modules;
	private moduleRef: NgModuleRef<any>;

	constructor(
		@Inject(EDITOR_MODULES_FACTORY) private modulesMap,
		private injector: Injector,
		private loader: NgModuleFactoryLoader,
		private container: ViewContainerRef,
	) {
	}

	ngOnInit() {
		this.loader.load(this.modulesMap[this.lazyModule]).then((moduleFactory: NgModuleFactory<any>) => {
			this.moduleRef = moduleFactory.create(this.injector);
			const rootComponentType = this.moduleRef.injector.get('LAZY_ENTRY_COMPONENT');
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
