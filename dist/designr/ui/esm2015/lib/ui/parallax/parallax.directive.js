import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { RafService } from '../raf/raf.service';
import Rect from '../rect/rect';
import * as i0 from "@angular/core";
import * as i1 from "../raf/raf.service";
export class ParallaxDirective extends DisposableDirective {
    // @ViewChild('img', { read: HTMLImageElement }) image;
    constructor(platformId, zone, elementRef, rafService) {
        super();
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.rafService = rafService;
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
            takeUntil(this.unsubscribe)).subscribe(parallax => {
                // console.log(parallax);
                image.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
            });
        });
    }
    parallax$() {
        return this.rafService.raf$().pipe(map(top => {
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
            }
            else {
                return null;
            }
        }), filter(x => x !== null));
    }
    scrollTop$() {
        return this.rafService.raf$().pipe(map(x => window.pageYOffset), distinctUntilChanged(), tap(x => console.log(x)));
    }
}
ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.RafService)); };
ParallaxDirective.ɵdir = i0.ɵɵdefineDirective({ type: ParallaxDirective, selectors: [["", "parallax", ""]], inputs: { parallax: "parallax" }, features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ParallaxDirective, [{
        type: Directive,
        args: [{
                selector: '[parallax]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.RafService }]; }, { parallax: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxJQUFJLE1BQU0sY0FBYyxDQUFDOzs7QUFLaEMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQjtJQUd6RCx1REFBdUQ7SUFFdkQsWUFDOEIsVUFBa0IsRUFDdkMsSUFBWSxFQUNaLFVBQW1DLEVBQ25DLFVBQXNCO1FBRTlCLEtBQUssRUFBRSxDQUFDO1FBTHFCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGVBQVUsR0FBVixVQUFVLENBQVk7SUFHL0IsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxD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VyxpQkFBaUIsdUJBTXBCLFdBQVc7c0RBTlIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FIN0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2FBQ3RCOztzQkFPRSxNQUFNO3VCQUFDLFdBQVc7O2tCQUpuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlRGlyZWN0aXZlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4uL3JhZi9yYWYuc2VydmljZSc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9yZWN0L3JlY3QnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXJhbGxheDogbnVtYmVyO1xuXHQvLyBAVmlld0NoaWxkKCdpbWcnLCB7IHJlYWQ6IEhUTUxJbWFnZUVsZW1lbnQgfSkgaW1hZ2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pixcblx0XHRwcml2YXRlIHJhZlNlcnZpY2U6IFJhZlNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXHRcdFx0dGhpcy5wYXJhbGxheCQoKS5waXBlKFxuXHRcdFx0XHQvKlxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBhLnAgIT09IGIucDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdCovXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdCkuc3Vic2NyaWJlKHBhcmFsbGF4ID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGFyYWxsYXgpO1xuXHRcdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDogJHtwYXJhbGxheC5zICogMTAwfSU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKCR7cGFyYWxsYXgucH0lKTtgKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cGFyYWxsYXgkKCkge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAodG9wID0+IHtcblx0XHRcdFx0Y29uc3Qgd2luZG93UmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyB0aGlzLndpbmRvd1JlY3Q7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0XHRcdFx0Y29uc3QgcGFyYWxsYXggPSAodGhpcy5wYXJhbGxheCB8fCA1KSAqIDI7XG5cdFx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IDE7IC8vIGkgJSAyID09PSAwID8gMSA6IC0xO1xuXHRcdFx0XHRsZXQgcmVjdCA9IFJlY3QuZnJvbU5vZGUobm9kZSk7XG5cdFx0XHRcdHJlY3QgPSBuZXcgUmVjdCh7XG5cdFx0XHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQsXG5cdFx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHJlY3QuaW50ZXJzZWN0aW9uKHdpbmRvd1JlY3QpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbnRlcnNlY3Rpb24pO1xuXHRcdFx0XHRpZiAoaW50ZXJzZWN0aW9uLnkgPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgeSA9IE1hdGgubWluKDEsIE1hdGgubWF4KC0xLCBpbnRlcnNlY3Rpb24uY2VudGVyLnkpKTtcblx0XHRcdFx0XHRjb25zdCBzID0gKDEwMCArIHBhcmFsbGF4ICogMikgLyAxMDA7XG5cdFx0XHRcdFx0Y29uc3QgcCA9ICgtNTAgKyAoeSAqIHBhcmFsbGF4ICogZGlyZWN0aW9uKSk7IC8vIC50b0ZpeGVkKDMpO1xuXHRcdFx0XHRcdHJldHVybiB7IHM6IHMsIHA6IHAgfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0c2Nyb2xsVG9wJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHRhcCh4ID0+IGNvbnNvbGUubG9nKHgpKSxcblx0XHRcdC8vIHNoYXJlUmVwbGF5KCksXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=