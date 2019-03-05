import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
	selector: '[clickOutside]'
})
export class ClickOutsideDirective implements OnInit, OnDestroy {

	@Input() initialFocus: boolean = false;
	@Output() clickOutside = new EventEmitter();
	private removeClick: Function;

	constructor(
		private eventManager: EventManager,
		private element: ElementRef
	) { }

	ngOnInit() {
		this.eventManager.getZone().runOutsideAngular(() => {
			this.removeClick = this.eventManager.addGlobalEventListener('document', 'click', (e) => {
				this.onClick(e);
			});
		});
	}

	ngOnDestroy() {
		this.removeClick();
	}

	// @HostListener('document:click', ['$event'])
	public onClick(e: Event) {
		const targetElement: Element = e.target as Element;
		// console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
		// const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
		// console.log(targetElement, documentContained);
		const clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
		if (!clickedInside) {
			if (this.initialFocus) {
				this.initialFocus = false;
				this.eventManager.getZone().run(() => {
					this.clickOutside.emit(null);
				});
			}
		} else {
			this.initialFocus = true;
		}
	}
}
