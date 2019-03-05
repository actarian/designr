import { AfterViewInit, Component, ElementRef, NgZone } from '@angular/core';
import { SectionComponent } from '@designr/section';
import { RafService } from '@designr/ui';
import * as Swiper from 'swiper/dist/js/swiper.js';

@Component({
	selector: 'hero-component',
	templateUrl: 'hero.component.html',
	styleUrls: ['hero.component.scss'],
})
export class HeroComponent extends SectionComponent implements AfterViewInit {

	config = {
		direction: 'horizontal',
		slidesPerView: 'auto',
		spaceBetween: 8,
		grabCursor: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		}
	};

	index = 0;

	swiper: Swiper;

	constructor(
		private elementRef: ElementRef,
		private zone: NgZone,
		private rafService: RafService,
	) {
		super();
	}

	ngAfterViewInit() {
		/*
		Here you are 100% sure, html is present on DOM, Swiper is initialize and is able to find your DOM element.
		Swiper constructor accept DOMElement as parameter, i recommand this approch to optimize DOM parsing.
		Because you store Swiper instance as attribute, you will be able to control Swiper by javascript.
		*/
		this.zone.runOutsideAngular(() => {
			this.swiper = new Swiper(
				this.elementRef.nativeElement.querySelector('.swiper-container'),
				this.config
			);
		});
	}
}
