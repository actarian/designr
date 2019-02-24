import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
// import * as $fancybox from '@fancyapps/fancybox';
// import * as $ from 'jquery'; // this reload jquery breaking fancybox

// const $: any = window ? (window['$'] || {}) : {}; // !!! rimuovere
declare var $: any; // use $ for jquery // !!! rimuovere

@Directive({
	selector: '[fancybox]',
})

export class FancyboxDirective implements AfterViewInit {

	@Input() fancybox: any;
	@Input() target: string;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
		private element: ElementRef
	) { }

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.zone.runOutsideAngular(() => {
				$(() => {
					// $(this.element.nativeElement).fancybox(this.fancybox);
					const group: any[] = Array.from($(this.element.nativeElement).find(this.target));
					group.forEach((item: HTMLElement, i: number) => item.addEventListener('click', (e) => {
						$.fancybox.open(group, this.fancybox, i);
						e.preventDefault();
						e.stopImmediatePropagation();
					}));
					// console.log(group);
				});
			});
		}
	}

}
