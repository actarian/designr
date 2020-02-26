import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { RafService } from '../raf/raf.service';
import Rect from '../rect/rect';

@Directive({
	selector: '[parallax]'
})
export class ParallaxDirective extends DisposableDirective implements AfterViewInit {

	@Input() parallax: number;
	// @ViewChild('img', { read: HTMLImageElement }) image;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
		private elementRef: ElementRef<HTMLElement>,
		private rafService: RafService,
	) {
		super();
	}

	ngAfterViewInit() {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}
		this.zone.runOutsideAngular(() => {
			const image = this.elementRef.nativeElement.querySelector('img');
			this.parallax$().pipe(
				/*
				distinctUntilChanged((a, b) => {
					return a.p !== b.p;
				}),
				*/
				takeUntil(this.unsubscribe),
			).subscribe(parallax => {
				// console.log(parallax);
				image.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
			});
		});
	}

	parallax$() {
		return this.rafService.raf$().pipe(
			map(top => {
				const windowRect = new Rect({
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				});
				// this.windowRect;
				const node = this.elementRef.nativeElement;
				const parallax = (this.parallax || 5) * 2;
				const direction = 1; // i % 2 === 0 ? 1 : -1;
				let rect = Rect.fromNode(node);
				rect = new Rect({
					top: rect.top,
					left: rect.left,
					width: rect.width,
					height: rect.height,
				});
				const intersection = rect.intersection(windowRect);
				// console.log(intersection);
				if (intersection.y > 0) {
					const y = Math.min(1, Math.max(-1, intersection.center.y));
					const s = (100 + parallax * 2) / 100;
					const p = (-50 + (y * parallax * direction)); // .toFixed(3);
					return { s: s, p: p };
				} else {
					return null;
				}
			}),
			filter(x => x !== null),
		);
	}

	scrollTop$(): Observable<number> {
		return this.rafService.raf$().pipe(
			map(x => window.pageYOffset),
			distinctUntilChanged(),
			tap(x => console.log(x)),
			// shareReplay(),
		);
	}

}
