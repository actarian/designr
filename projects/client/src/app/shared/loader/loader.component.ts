import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'loader-component',
	templateUrl: 'loader.component.html',
	styleUrls: ['loader.component.scss']
})
export class LoaderComponent extends DisposableComponent implements AfterViewInit {

	// @ViewChild('element', { read: ElementRef }) element: ElementRef;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private zone: NgZone,
		private renderer: Renderer2,
		private elementRef: ElementRef,
		private router: Router,
	) {
		super();
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.router.events.pipe(
				takeUntil(this.unsubscribe),
			).subscribe((e: RouterEvent) => {
				this.zone.runOutsideAngular(() => {
					if (e instanceof NavigationStart) {
						this.renderer.removeClass(this.elementRef.nativeElement, 'finish');
						this.renderer.addClass(this.elementRef.nativeElement, 'active');
					}
					if (e instanceof NavigationEnd) {
						this.renderer.removeClass(this.elementRef.nativeElement, 'active');
						this.renderer.addClass(this.elementRef.nativeElement, 'finish');
						setTimeout(() => {
							this.renderer.removeClass(this.elementRef.nativeElement, 'finish');
						}, 600);
					}
				});
			});
		}
	}

}
