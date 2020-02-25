import { NgForOfContext } from '@angular/common';
import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ContentChild, Input, OnDestroy, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IControlOption } from './control-option';
import { ControlComponent } from './control.component';
import { ControlService } from './control.service';

@Component({
	selector: 'control-outlet',
	templateUrl: 'control-outlet.component.html',
})
export class ControlOutletComponent implements OnInit, OnDestroy, AfterViewInit {

	@ContentChild('inputRef', { static: true }) inputRef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ContentChild('errorRef', { static: true }) errorRef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ContentChild('labelRef', { static: true }) labelRef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ContentChild('descriptionRef', { static: true }) descriptionRef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ViewChild('descriptionDef', { static: true }) descriptionDef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ViewChild('labelDef', { static: true }) labelDef: TemplateRef<NgForOfContext<ControlComponent>>;
	@ViewChild('outlet', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

	@Input() option: IControlOption<any>;
	@Input() form: FormGroup;

	private componentRef: ComponentRef<ControlComponent>;

	get context(): ControlOutletComponent {
		return this;
	}

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

	ngAfterViewInit() {
	}

	ngOnInit() {
		const component: Type<ControlComponent> = this.controlService.resolve(this.option);
		const factory: ComponentFactory<ControlComponent> = this.componentFactoryResolver.resolveComponentFactory(component);
		this.viewContainerRef.clear();
		const componentRef = this.viewContainerRef.createComponent(factory);
		const instance = componentRef.instance;
		instance.option = this.option;
		instance.form = this.form;
		instance.inputRef = this.inputRef;
		instance.errorRef = this.errorRef;
		// instance.labelRef = this.labelRef || this.labelDef;
		if (typeof instance['ControlInit'] === 'function') {
			instance['ControlInit']();
		}
		this.componentRef = componentRef;
	}

	ngOnDestroy() {
		this.componentRef.destroy();
	}

}
