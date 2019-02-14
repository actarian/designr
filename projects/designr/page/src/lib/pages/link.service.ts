import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export class LinkDefinition {
	href?: string;
	id?: string;
	rel?: string;
}

@Injectable({
	providedIn: 'root',
})
export class LinkService {

	constructor(
		@Inject(DOCUMENT) private doc: any,
	) { }

	addTag(definition: LinkDefinition) {
		const element = this.doc.createElement(`link`);
		this.updateElementDefinition(element, definition);
		this.doc.head.appendChild(element);
	}

	getTag(selector: string) {
		const element = this.doc.querySelector(`link${selector}`);
		return element;
	}

	updateTag(selector: string, definition: LinkDefinition) {
		const element = this.doc.querySelector(`link${selector}`);
		this.updateElementDefinition(element, definition);
	}

	removeTag(selector: string) {
		const element = this.doc.querySelector(`link${selector}`);
		element.remove();
	}

	updateElementDefinition(element: HTMLLinkElement, definition: LinkDefinition) {
		this.updateElementAttribute(element, 'href', definition.href);
		this.updateElementAttribute(element, 'id', definition.id);
		this.updateElementAttribute(element, 'rel', definition.rel);
	}

	updateElementAttribute(element: HTMLLinkElement, attribute: string, value: any) {
		if (value) {
			element.setAttribute(attribute, value);
		} else {
			element.removeAttribute(attribute);
		}
	}

}
