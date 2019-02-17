import { Component, ComponentFactory, ComponentFactoryResolver, Inject, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import { SectionComponent } from './section.component';
import { SectionService } from './section.service';

@Component({
	selector: 'section-outlet',
	template: '',
})
export class SectionOutletComponent extends DisposableComponent implements OnInit {

	@Input() section: Section;

	constructor(
		@Inject(ViewContainerRef) private viewContainerRef: ViewContainerRef,
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
	}

}
