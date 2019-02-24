import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, DoCheck, ElementRef, EventEmitter, Inject, Input, KeyValueDiffer, KeyValueDiffers, NgZone, OnChanges, OnDestroy, Optional, Output, PLATFORM_ID, SimpleChanges } from '@angular/core';
import * as Swiper from 'swiper/dist/js/swiper.js';
import { SwiperConfig, SwiperConfigInterface, SwiperEvent, SwiperEvents, SWIPER_CONFIG } from './swiper.interfaces';

@Directive({
	selector: '[swiper]',
	exportAs: 'ngxSwiper'
})
export class SwiperDirective implements AfterViewInit, OnDestroy, DoCheck, OnChanges {

	private swiper_: any;
	private index_: number | null = null;
	private config_: KeyValueDiffer<string, any> | null = null;

	@Input() set index(index: number) {
		if (index != null) {
			this.setIndex(index);
		}
	}

	@Input() disabled: boolean = false;
	@Input() performance: boolean = false;
	@Input('swiper') config?: SwiperConfigInterface;

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

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone,
		private elementRef: ElementRef, private differs: KeyValueDiffers,
		@Optional() @Inject(SWIPER_CONFIG) private defaults: SwiperConfigInterface
	) { }

	ngAfterViewInit(): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}
		const params = new SwiperConfig(this.defaults);
		params.assign(this.config); // Custom configuration
		if (params.scrollbar === true) {
			params.scrollbar = {
				el: '.swiper-scrollbar'
			};
		}
		if (params.pagination === true) {
			params.pagination = {
				el: '.swiper-pagination'
			};
		}
		if (params.navigation === true) {
			params.navigation = {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			};
		}
		if (this.disabled) {
			params.allowSlidePrev = false;
			params.allowSlideNext = false;
		}
		if (this.index_ != null) {
			params.initialSlide = this.index_;
			this.index_ = null;
		}
		params.on = {
			slideChange: () => {
				if (this.swiper_ && this.indexChange.observers.length) {
					this.emit(this.indexChange, this.swiper_.realIndex);
				}
			}
		};
		this.zone.runOutsideAngular(() => {
			this.swiper_ = new Swiper(this.elementRef.nativeElement, params);
		});
		if (params.init !== false && this.init.observers.length) {
			this.emit(this.init, this.swiper_);
		}
		// Add native Swiper event handling
		SwiperEvents.forEach((eventName: SwiperEvent) => {
			let swiperEvent = eventName.replace('swiper', '');
			swiperEvent = swiperEvent.charAt(0).toLowerCase() + swiperEvent.slice(1);
			this.swiper_.on(swiperEvent, (...args: any[]) => {
				if (args.length === 1) {
					args = args[0];
				}
				const emitter = this[swiperEvent as keyof SwiperDirective] as EventEmitter<any>;
				if (emitter.observers.length) {
					this.emit(emitter, args);
				}
			});
		});
		if (!this.config_) {
			this.config_ = this.differs.find(this.config || {}).create();
			this.config_.diff(this.config || {});
		}
	}

	ngOnDestroy(): void {
		if (this.swiper_) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.destroy(true, this.swiper_.initialized || false);
			});
			this.swiper_ = null;
		}
	}

	ngDoCheck(): void {
		if (this.config_) {
			const changes = this.config_.diff(this.config || {});
			if (changes) {
				this.index_ = this.getIndex(true);
				this.ngOnDestroy();
				this.ngAfterViewInit();
				this.update();
			}
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.swiper_ && changes['disabled']) {
			if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
				if (changes['disabled'].currentValue === true) {
					this.zone.runOutsideAngular(() => {
						this.ngOnDestroy();
						this.ngAfterViewInit();
					});
				} else if (changes['disabled'].currentValue === false) {
					this.zone.runOutsideAngular(() => {
						this.ngOnDestroy();
						this.ngAfterViewInit();
					});
				}
			}
		}
	}

	private emit(emitter: EventEmitter<any>, value: any): void {
		if (this.performance) {
			emitter.emit(value);
		} else {
			this.zone.run(() => emitter.emit(value));
		}
	}

	public swiper(): any {
		return this.swiper_;
	}

	public initialize(): void {
		if (this.swiper_) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.init();
			});
		}
	}

	public update(): void {
		setTimeout(() => {
			if (this.swiper_) {
				this.zone.runOutsideAngular(() => {
					this.swiper_.update();
				});
			}
		}, 0);
	}

	public getIndex(real?: boolean): number {
		if (!this.swiper_) {
			return this.index_ || 0;
		} else {
			return real ? this.swiper_.realIndex : this.swiper_.activeIndex;
		}
	}

	public setIndex(index: number, speed?: number, silent?: boolean): void {
		if (!this.swiper_) {
			this.index_ = index;
		} else {
			let realIndex = index * this.swiper_.params.slidesPerGroup;
			if (this.swiper_.params.loop) {
				realIndex += this.swiper_.loopedSlides;
			}
			this.zone.runOutsideAngular(() => {
				this.swiper_.slideTo(realIndex, speed, !silent);
			});
		}
	}

	public prevSlide(speed?: number, silent?: boolean): void {
		if (this.swiper_) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.slidePrev(speed, !silent);
			});
		}
	}

	public nextSlide(speed?: number, silent?: boolean): void {
		if (this.swiper_) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.slideNext(speed, !silent);
			});
		}
	}

	public stopAutoplay(reset?: boolean): void {
		if (reset) {
			this.setIndex(0);
		}
		if (this.swiper_ && this.swiper_.autoplay) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.autoplay.stop();
			});
		}
	}

	public startAutoplay(reset?: boolean): void {
		if (reset) {
			this.setIndex(0);
		}
		if (this.swiper_ && this.swiper_.autoplay) {
			this.zone.runOutsideAngular(() => {
				this.swiper_.autoplay.start();
			});
		}
	}

}
