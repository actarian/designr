/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { RafService } from '../raf/raf.service';
import Rect from '../rect/rect';
export class ParallaxDirective extends DisposableComponent {
    // @ViewChild('img', { read: HTMLImageElement }) image;
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} elementRef
     * @param {?} rafService
     */
    constructor(platformId, zone, elementRef, rafService) {
        super();
        this.platformId = platformId;
        this.zone = zone;
        this.elementRef = elementRef;
        this.rafService = rafService;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(() => {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    parallax$() {
        return this.rafService.raf$().pipe(map(top => {
            /** @type {?} */
            const windowRect = new Rect({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            // this.windowRect;
            /** @type {?} */
            const node = this.elementRef.nativeElement;
            /** @type {?} */
            const parallax = (this.parallax || 5) * 2;
            /** @type {?} */
            const direction = 1;
            // i % 2 === 0 ? 1 : -1;
            /** @type {?} */
            let rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            /** @type {?} */
            const intersection = rect.intersection(windowRect);
            // console.log(intersection);
            if (intersection.y > 0) {
                /** @type {?} */
                const y = Math.min(1, Math.max(-1, intersection.center.y));
                /** @type {?} */
                const s = (100 + parallax * 2) / 100;
                /** @type {?} */
                const p = (-50 + (y * parallax * direction));
                return { s: s, p: p };
            }
            else {
                return null;
            }
        }), filter(x => x !== null));
    }
    /**
     * @return {?}
     */
    scrollTop$() {
        return this.rafService.raf$().pipe(map(x => window.pageYOffset), distinctUntilChanged(), tap(x => console.log(x)));
    }
}
ParallaxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[parallax]'
            },] }
];
/** @nocollapse */
ParallaxDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef },
    { type: RafService }
];
ParallaxDirective.propDecorators = {
    parallax: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ParallaxDirective.prototype.parallax;
    /**
     * @type {?}
     * @private
     */
    ParallaxDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ParallaxDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ParallaxDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    ParallaxDirective.prototype.rafService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQztBQUtoQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7Ozs7OztJQUt6RCxZQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osVUFBbUMsRUFDbkMsVUFBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUcvQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7O2tCQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTtZQUNwQjs7OztjQUlFO1lBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RCLHlCQUF5QjtnQkFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsV0FBVyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsa0VBQWtFLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNJLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTs7a0JBQ0gsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUMzQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVzthQUMxQixDQUFDOzs7a0JBRUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTs7a0JBQ3BDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7a0JBQ25DLFNBQVMsR0FBRyxDQUFDOzs7Z0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQzs7a0JBQ0csWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ2xELDZCQUE2QjtZQUM3QixJQUFJLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztzQkFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7c0JBQ3BELENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRzs7c0JBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNOLE9BQU8sSUFBSSxDQUFDO2FBQ1o7UUFDRixDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQ3ZCLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDNUIsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUV4QixDQUFDO0lBQ0gsQ0FBQzs7O1lBL0VELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsWUFBWTthQUN0Qjs7Ozt5Q0FPRSxNQUFNLFNBQUMsV0FBVztZQWhCeUMsTUFBTTtZQUFqQyxVQUFVO1lBSXBDLFVBQVU7Ozt1QkFRakIsS0FBSzs7OztJQUFOLHFDQUEwQjs7Ozs7SUFJekIsdUNBQStDOzs7OztJQUMvQyxpQ0FBb0I7Ozs7O0lBQ3BCLHVDQUEyQzs7Ozs7SUFDM0MsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4uL3JhZi9yYWYuc2VydmljZSc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9yZWN0L3JlY3QnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXJhbGxheDogbnVtYmVyO1xuXHQvLyBAVmlld0NoaWxkKCdpbWcnLCB7IHJlYWQ6IEhUTUxJbWFnZUVsZW1lbnQgfSkgaW1hZ2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pixcblx0XHRwcml2YXRlIHJhZlNlcnZpY2U6IFJhZlNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXHRcdFx0dGhpcy5wYXJhbGxheCQoKS5waXBlKFxuXHRcdFx0XHQvKlxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBhLnAgIT09IGIucDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdCovXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdCkuc3Vic2NyaWJlKHBhcmFsbGF4ID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGFyYWxsYXgpO1xuXHRcdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDogJHtwYXJhbGxheC5zICogMTAwfSU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKCR7cGFyYWxsYXgucH0lKTtgKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cGFyYWxsYXgkKCkge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAodG9wID0+IHtcblx0XHRcdFx0Y29uc3Qgd2luZG93UmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyB0aGlzLndpbmRvd1JlY3Q7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0XHRcdFx0Y29uc3QgcGFyYWxsYXggPSAodGhpcy5wYXJhbGxheCB8fCA1KSAqIDI7XG5cdFx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IDE7IC8vIGkgJSAyID09PSAwID8gMSA6IC0xO1xuXHRcdFx0XHRsZXQgcmVjdCA9IFJlY3QuZnJvbU5vZGUobm9kZSk7XG5cdFx0XHRcdHJlY3QgPSBuZXcgUmVjdCh7XG5cdFx0XHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQsXG5cdFx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHJlY3QuaW50ZXJzZWN0aW9uKHdpbmRvd1JlY3QpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbnRlcnNlY3Rpb24pO1xuXHRcdFx0XHRpZiAoaW50ZXJzZWN0aW9uLnkgPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgeSA9IE1hdGgubWluKDEsIE1hdGgubWF4KC0xLCBpbnRlcnNlY3Rpb24uY2VudGVyLnkpKTtcblx0XHRcdFx0XHRjb25zdCBzID0gKDEwMCArIHBhcmFsbGF4ICogMikgLyAxMDA7XG5cdFx0XHRcdFx0Y29uc3QgcCA9ICgtNTAgKyAoeSAqIHBhcmFsbGF4ICogZGlyZWN0aW9uKSk7IC8vIC50b0ZpeGVkKDMpO1xuXHRcdFx0XHRcdHJldHVybiB7IHM6IHMsIHA6IHAgfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0c2Nyb2xsVG9wJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHRhcCh4ID0+IGNvbnNvbGUubG9nKHgpKSxcblx0XHRcdC8vIHNoYXJlUmVwbGF5KCksXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=