import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import { ControlService } from './control.service';

@Component({
	selector: 'control-outlet',
	template: `
	<!--
	<div class="control" [ngClass]="classes">
		<label class="form-label" [attr.for]="option.key">{{ option.label | label }}</label>
		<input class="form-control" placeholder="{{ option.placeholder | label }}" [id]="option.key" type="text">
	</div>
	-->
	<!-- [formControlName]="option.key" -->
	<ng-template #outlet></ng-template>
	`,
})
export class ControlOutletComponent implements OnInit, OnDestroy {

	@Input() option: IControlOption<any>;
	@Input() form: FormGroup;

	@ViewChild('outlet', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;
	private componentRef: ComponentRef<ControlComponent>;

	get classes(): { [key: string]: boolean } {
		// console.log('control', this.option.key, this.form.controls);
		return this.componentRef ? this.componentRef.instance.classes : null;
	}

	get control(): AbstractControl {
		// console.log('control', this.option.key, this.form.controls);
		return this.componentRef ? this.componentRef.instance.control : null;
	}

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private controlService: ControlService,
	) { }

	ngOnInit() {
		const component: Type<ControlComponent> = this.controlService.resolve(this.option);
		const factory: ComponentFactory<ControlComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
		this.viewContainerRef.clear();
		const componentRef = this.viewContainerRef.createComponent(factory);
		const instance = componentRef.instance;
		instance.option = this.option;
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
