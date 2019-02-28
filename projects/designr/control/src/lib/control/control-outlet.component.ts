import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisposableComponent } from '@designr/core';
import { ControlBase } from './base/control-base';
import { ControlBaseComponent } from './base/control-base.component';
import { ControlService } from './control.service';

@Component({
	selector: 'control-outlet',
	template: '<ng-template #outlet></ng-template>',
})
export class ControlOutletComponent extends DisposableComponent implements OnInit, OnDestroy {

	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;

	@ViewChild('outlet', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
	private componentRef: ComponentRef<ControlBaseComponent>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private controlService: ControlService,
	) {
		super();
	}

	ngOnInit() {
		const component: Type<ControlBaseComponent> = this.controlService.resolve(this.control);
		const factory: ComponentFactory<ControlBaseComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
		this.viewContainerRef.clear();
		const componentRef = this.viewContainerRef.createComponent(factory);
		const instance = componentRef.instance;
		instance.control = this.control;
		instance.form = this.form;
		if (typeof instance['ControlInit'] === 'function') {
			instance['ControlInit']();
		}
		this.componentRef = componentRef;
	}

	ngOnDestroy() {
		this.componentRef.destroy();
	}

}
