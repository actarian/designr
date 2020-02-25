import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionComponent } from './section.component';
import { SectionService } from './section.service';

@Component({
	selector: 'section-outlet',
	template: '<ng-template #outlet></ng-template>',
})
export class SectionOutletComponent extends DisposableComponent implements OnInit, OnDestroy {

	@Input() section: Section;

	@ViewChild('outlet', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;
	private componentRef: ComponentRef<SectionComponent>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private sectionService: SectionService,
	) {
		super();
	}

	ngOnInit() {
		const component: Type<SectionComponent> = this.sectionService.resolve(this.section);
		const factory: ComponentFactory<SectionComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
		this.viewContainerRef.clear();
		const componentRef = this.viewContainerRef.createComponent(factory);
		const instance = componentRef.instance;
		instance.section = this.section;
		if (typeof instance['SectionInit'] === 'function') {
			instance['SectionInit']();
		}
		this.componentRef = componentRef;
	}

	ngOnDestroy() {
		this.componentRef.destroy();
	}

}
