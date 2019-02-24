import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Page } from '@designr/page';
import * as Swiper from 'swiper/dist/js/swiper.js';

@Component({
	selector: 'hero-component',
	templateUrl: 'hero.component.html',
	styleUrls: ['hero.component.scss'],
})
export class HeroComponent extends DisposableComponent implements AfterViewInit {

	@Input() page: Page;

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
	) {
		super();
	}

	ngAfterViewInit() {
		/*
		Here you are 100% sure, html is present on DOM, Swiper is initialize and is able to find your DOM element.
		Swiper constructor accept DOMElement as parameter, i recommand this approch to optimize DOM parsing.
		Because you store Swiper instance as attribute, you will be able to control Swiper by javascript.
		*/
		this.swiper = new Swiper(
			this.elementRef.nativeElement.querySelector('.swiper-container'),
			this.config
		);
	}
}
