import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Page } from '../page/page';
import { ILayoutComponent } from './layout';
import { LayoutComponent } from './layout.component';

@Directive({
	selector: '[useLayout]'
})
export class UseLayoutDirective implements OnInit, OnDestroy {

	private container: ComponentRef<ILayoutComponent>;
	@Input('useLayout') layoutKey?: string;
	@Input() page?: Page;

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef,
		private componentFactoryResolver: ComponentFactoryResolver,
		private configService: ConfigService,
	) { }

	ngOnInit() {
		const options = this.configService.options;
		const component: Type<ILayoutComponent> = options.layouts[this.layoutKey] || options.defaultLayout || LayoutComponent;
		const containerFactory = this.componentFactoryResolver.resolveComponentFactory(component);
		this.container = this.viewContainerRef.createComponent(containerFactory);
		this.container.instance.template = this.templateRef;
		this.container.instance.page = this.page;
	}

	ngOnDestroy() {
		if (this.container) {
			this.container.destroy();
			this.container = null;
		}
	}

}
