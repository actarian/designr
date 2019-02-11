import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DomService {

	private childComponentRef: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector
	) { }

	public appendComponentTo(parentId: string, child: any, config?: ChildConfiguration) {
		// Create a component reference from the component
		const childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector);
		// Attach the config to the child (inputs and outputs)
		this.attachConfig(config, childComponentRef);
		this.childComponentRef = childComponentRef;
		// Attach component to the appRef so that it's inside the ng component tree
		this.appRef.attachView(childComponentRef.hostView);
		// Get DOM element from component
		const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
		// Append DOM element to the body
		document.getElementById(parentId).appendChild(childDomElem);
	}

	public removeComponent() {
		this.appRef.detachView(this.childComponentRef.hostView);
		this.childComponentRef.destroy();
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
