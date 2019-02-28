import { ApplicationRef, Component, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DomService {

	private componentRef: ComponentRef<Component>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private applicationRef: ApplicationRef,
		private injector: Injector
	) { }

	public appendComponentTo(parentId: string, child: any, config?: ChildConfiguration) {
		// Create a component reference from the component
		const componentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector);
		// Attach the config to the child (inputs and outputs)
		this.attachConfig(config, componentRef);
		this.componentRef = componentRef;
		// Attach component to the applicationRef so that it's inside the ng component tree
		this.applicationRef.attachView(componentRef.hostView);
		// Get DOM element from component
		const node = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
		// Append DOM element to the body
		document.getElementById(parentId).appendChild(node);
	}

	public removeComponent() {
		this.applicationRef.detachView(this.componentRef.hostView);
		this.componentRef.destroy();
	}

	private attachConfig(config, componentRef) {
		Object.assign(componentRef.instance, config.inputs);
		Object.assign(componentRef.instance, config.outputs);
	}
}

interface ChildConfiguration {
	inputs: object;
	outputs: object;
}
