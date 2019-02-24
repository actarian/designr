import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, NgZone, OnDestroy, Optional, Output, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfig, SwiperConfigInterface, SwiperEvent, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';

@Component({
	selector: 'swiper',
	exportAs: 'ngxSwiper',
	templateUrl: 'swiper.component.html',
	// styleUrls: ['~swiper/dist/css/swiper.min.css', 'swiper.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements AfterViewInit, OnDestroy {

	@ViewChild('swiperSlides') swiperSlides?: ElementRef;
	@ViewChild(SwiperDirective) directiveRef?: SwiperDirective;

	@Input() index: number | null = null;
	@Input() disabled: boolean = false;
	@Input() performance: boolean = false;
	@Input() config?: SwiperConfigInterface;
	@Input() useSwiperClass: boolean = true;

	@Output() autoplay = new EventEmitter<any>();
	@Output() autoplayStart = new EventEmitter<any>();
	@Output() autoplayStop = new EventEmitter<any>();
	@Output() beforeDestroy = new EventEmitter<any>();
	@Output() beforeResize = new EventEmitter<any>();
	@Output() breakpoint = new EventEmitter<any>();
	@Output() click = new EventEmitter<any>();
	@Output() doubleTap = new EventEmitter<any>();
	@Output() fromEdge = new EventEmitter<any>();
	@Output() imagesReady = new EventEmitter<any>();
	@Output() indexChange = new EventEmitter<number>();
	@Output() init = new EventEmitter<any>();
	@Output() keyPress = new EventEmitter<any>();
	@Output() lazyImageLoad = new EventEmitter<any>();
	@Output() lazyImageReady = new EventEmitter<any>();
	@Output() progress = new EventEmitter<any>();
	@Output() reachBeginning = new EventEmitter<any>();
	@Output() reachEnd = new EventEmitter<any>();
	@Output() resize = new EventEmitter<any>();
	@Output() scroll = new EventEmitter<any>();
	@Output() scrollDragEnd = new EventEmitter<any>();
	@Output() scrollDragMove = new EventEmitter<any>();
	@Output() scrollDragStart = new EventEmitter<any>();
	@Output() setTransition = new EventEmitter<any>();
	@Output() setTranslate = new EventEmitter<any>();
	@Output() slideChange = new EventEmitter<any>();
	@Output() slideChangeTransitionEnd = new EventEmitter<any>();
	@Output() slideChangeTransitionStart = new EventEmitter<any>();
	@Output() slideNextTransitionEnd = new EventEmitter<any>();
	@Output() slideNextTransitionStart = new EventEmitter<any>();
	@Output() slidePrevTransitionEnd = new EventEmitter<any>();
	@Output() slidePrevTransitionStart = new EventEmitter<any>();
	@Output() sliderMove = new EventEmitter<any>();
	@Output() tap = new EventEmitter<any>();
	@Output() touchEnd = new EventEmitter<any>();
	@Output() touchMove = new EventEmitter<any>();
	@Output() touchMoveOpposite = new EventEmitter<any>();
	@Output() touchStart = new EventEmitter<any>();
	@Output() transitionEnd = new EventEmitter<any>();
	@Output() transitionStart = new EventEmitter<any>();

	get isAtLast(): boolean {
		return (!this.directiveRef || !this.directiveRef.swiper()) ?
			false : this.directiveRef.swiper()['isEnd'];
	}

	get isAtFirst(): boolean {
		return (!this.directiveRef || !this.directiveRef.swiper()) ?
			false : this.directiveRef.swiper()['isBeginning'];
	}

	private mo: MutationObserver | null = null;
	public swiperConfig: any = null;
	public paginationBackup: any = null;
	public paginationConfig: any = null;

	constructor(
		private zone: NgZone, private cdRef: ChangeDetectorRef,
		@Inject(PLATFORM_ID) private platformId: Object,
		@Optional() @Inject(SWIPER_CONFIG) private defaults: SwiperConfigInterface
	) { }

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}
		this.zone.runOutsideAngular(() => {
			this.updateClasses();
			if (this.swiperSlides && typeof MutationObserver !== 'undefined') {
				this.mo = new MutationObserver(() => {
					this.updateClasses();
				});
				this.mo.observe(this.swiperSlides.nativeElement, { childList: true });
			}
		});
		window.setTimeout(() => {
			if (this.directiveRef) {
				this.init.emit();
				this.directiveRef.indexChange = this.indexChange;
				SwiperEvents.forEach((eventName: SwiperEvent) => {
					if (this.directiveRef) {
						const directiveOutput = eventName as keyof SwiperDirective;
						const componentOutput = eventName as keyof SwiperComponent;
						this.directiveRef[directiveOutput] = this[componentOutput] as EventEmitter<any>;
					}
				});
			}
		}, 0);
	}

	ngOnDestroy(): void {
		if (this.mo) {
			this.mo.disconnect();
		}
		if (this.config && this.paginationBackup) {
			this.config.pagination = this.paginationBackup;
		}
	}

	public getConfig(): SwiperConfigInterface {
		this.swiperConfig = new SwiperConfig(this.defaults);
		this.swiperConfig.assign(this.config); // Custom configuration
		if (this.swiperConfig.pagination === true ||
			(this.swiperConfig.pagination && typeof this.swiperConfig.pagination === 'object' &&
				(!this.swiperConfig.pagination.type || this.swiperConfig.pagination.type === 'bullets') &&
				!this.swiperConfig.pagination.renderBullet && this.swiperConfig.pagination.el === '.swiper-pagination')) {
			this.config = this.config || {};
			if (!this.paginationConfig) {
				this.paginationBackup = this.config.pagination;
				this.paginationConfig = {
					el: '.swiper-pagination',
					renderBullet: (index: number, className: string) => {
						const children = this.swiperSlides ? this.swiperSlides.nativeElement.children : [];
						let bullet = `<span class="${className} ${className}-middle" index="${index}"></span>`;
						if (index === 0) {
							bullet = `<span class="${className} ${className}-first" index="${index}"></span>`;
						} else if (index === (children.length - 1)) {
							bullet = `<span class="${className} ${className}-last" index="${index}"></span>`;
						}
						return `<span class="swiper-pagination-handle" index="${index}">${bullet}</span>`;
					}
				};
			}
			if (this.swiperConfig.pagination === true) {
				this.config.pagination = this.paginationConfig;
			} else {
				this.config.pagination = Object.assign({}, this.config.pagination, this.paginationConfig);
			}
		}
		return this.config as SwiperConfigInterface;
	}

	private updateClasses(): void {
		if (this.swiperSlides) {
			let updateNeeded = false;
			const children = this.swiperSlides.nativeElement.children;
			for (let i = 0; i < children.length; i++) {
				if (!children[i].classList.contains('swiper-slide')) {
					updateNeeded = true;
					children[i].classList.add('swiper-slide');
				}
			}
			if (updateNeeded && this.directiveRef) {
				this.directiveRef.update();
			}
		}
		this.cdRef.detectChanges();
	}

	public onPaginationClick(index: number): void {
		if (this.config && this.directiveRef && (this.config.pagination === true ||
			(this.config.pagination && typeof this.config.pagination === 'object' &&
				(!this.config.pagination.type || this.config.pagination.type === 'bullets') &&
				(this.config.pagination.clickable && this.config.pagination.el === '.swiper-pagination')))) {
			this.directiveRef.setIndex(index);
		}
	}

}
