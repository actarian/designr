import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[clickOutside]'
})
export class ClickOutsideDirective {

	constructor(
		private element: ElementRef
	) { }

	@Output() public clickOutside = new EventEmitter();

	@HostListener('document:click', ['$event'])
	public onClick(e: Event) {
		const targetElement: Element = e.target as Element;
		// console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
		// const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
		// console.log(targetElement, documentContained);
		const clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
		if (!clickedInside) {
			this.clickOutside.emit(null);
		}
	}
}
