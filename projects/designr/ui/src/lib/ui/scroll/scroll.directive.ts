import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, NgZone, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { fromEvent, Observable, Observer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
	selector: '[scroll]'
})
export class ScrollDirective extends DisposableComponent implements OnInit, OnDestroy {

	private eventOptions: boolean | { capture?: boolean, passive?: boolean };

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
		protected elementRef: ElementRef<HTMLElement>,
	) {
		super();
	}

	@Output() public scroll = new EventEmitter();

	private scrollEvent: Observable<Event> = new Observable((observer: Observer<Event>) => {
		return this.zone.runOutsideAngular(() => {
			return fromEvent(this.elementRef.nativeElement, 'scroll')
				.pipe(takeUntil(this.unsubscribe))
				.subscribe(observer);
		});
	});

	private scrollDocumentEvent: Observable<Event> = new Observable((observer: Observer<Event>) => {
		return this.zone.runOutsideAngular(() => {
			return fromEvent(window.document, 'scroll')
				.pipe(takeUntil(this.unsubscribe))
				.subscribe(observer);
		});
		/*
		this.zone.runOutsideAngular(() => {
			this.renderer.listenGlobal('window', 'scroll', () => {
				console.log('scrolling');
			});
		});
		*/
	});

	ngOnInit() {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}
		this.scrollDocumentEvent.subscribe(event => {
			const e = {
				scrollHeight: document.scrollingElement.scrollHeight,
				scrollLeft: document.scrollingElement.scrollLeft,
				scrollTop: document.scrollingElement.scrollTop,
				scrollWidth: document.scrollingElement.scrollWidth,
				originalEvent: event,
			};
			this.scroll.emit(e);
		});
	}

	/*
	register() {
		this.supportPassiveEvents().subscribe(supported => {
			if (supported) { // use the implementation on mozilla
				this.eventOptions = {
					capture: true,
					passive: true
				};
			} else {
				this.eventOptions = true;
			}
			this.zone.runOutsideAngular(() => {
				window.addEventListener('scroll', this.onScroll, <any>this.eventOptions);
			});
		});
	}

	ngOnDestroy() {
		// unfortunately the compiler doesn't know yet about this object, so cast to any
		window.removeEventListener('scroll', this.onScroll, <any>this.eventOptions);
	}

	supportPassiveEvents(): Observable<boolean> {
		return from(new Promise<boolean>((resolve, reject) => {
			let passiveSupported = false;
			try {
				const options = {
					get passive() {
						// Questa funzione verrà chiamata quando il browser
						// tenta di accedere alla proprietà passiva.
						passiveSupported = true;
					}
				};
				window.addEventListener('test', options, options);
				window.removeEventListener('test', options, options);
			} catch (err) {
				passiveSupported = false;
			}
			return passiveSupported;
			resolve(false);
		}));
	}

	onScroll = (e: Event): void => {
		console.log(e);
		this.scroll.emit(e);
		const somethingMajorHasHappenedTimeToTellAngular = false;
		if (somethingMajorHasHappenedTimeToTellAngular) {
			this.zone.run(() => {
				// this.tellAngular();
			});
		}
	};
	*/

}
