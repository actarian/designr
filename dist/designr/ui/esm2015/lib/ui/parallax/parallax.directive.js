/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const image = this.elementRef.nativeElement.querySelector('img');
            this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} parallax
             * @return {?}
             */
            parallax => {
                // console.log(parallax);
                image.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
            }));
        }));
    }
    /**
     * @return {?}
     */
    parallax$() {
        return this.rafService.raf$().pipe(map((/**
         * @param {?} top
         * @return {?}
         */
        top => {
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
        })), filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== null)));
    }
    /**
     * @return {?}
     */
    scrollTop$() {
        return this.rafService.raf$().pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => window.pageYOffset)), distinctUntilChanged(), tap((/**
         * @param {?} x
         * @return {?}
         */
        x => console.log(x))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQztBQUtoQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7Ozs7OztJQUt6RCxZQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osVUFBbUMsRUFDbkMsVUFBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUcvQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTs7a0JBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FB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VTs7O3VCQVFqQixLQUFLOzs7O0lBQU4scUNBQTBCOzs7OztJQUl6Qix1Q0FBK0M7Ozs7O0lBQy9DLGlDQUFvQjs7Ozs7SUFDcEIsdUNBQTJDOzs7OztJQUMzQyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSYWZTZXJ2aWNlIH0gZnJvbSAnLi4vcmFmL3JhZi5zZXJ2aWNlJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL3JlY3QvcmVjdCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1twYXJhbGxheF0nXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4RGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIHBhcmFsbGF4OiBudW1iZXI7XG5cdC8vIEBWaWV3Q2hpbGQoJ2ltZycsIHsgcmVhZDogSFRNTEltYWdlRWxlbWVudCB9KSBpbWFnZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHRcdHByaXZhdGUgcmFmU2VydmljZTogUmFmU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cdFx0XHR0aGlzLnBhcmFsbGF4JCgpLnBpcGUoXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEucCAhPT0gYi5wO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Ki9cblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0KS5zdWJzY3JpYmUocGFyYWxsYXggPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbGxheCk7XG5cdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiAke3BhcmFsbGF4LnMgKiAxMDB9JTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoJHtwYXJhbGxheC5wfSUpO2ApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwYXJhbGxheCQoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh0b3AgPT4ge1xuXHRcdFx0XHRjb25zdCB3aW5kb3dSZWN0ID0gbmV3IFJlY3Qoe1xuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIHRoaXMud2luZG93UmVjdDtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdFx0XHRjb25zdCBwYXJhbGxheCA9ICh0aGlzLnBhcmFsbGF4IHx8IDUpICogMjtcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gMTsgLy8gaSAlIDIgPT09IDAgPyAxIDogLTE7XG5cdFx0XHRcdGxldCByZWN0ID0gUmVjdC5mcm9tTm9kZShub2RlKTtcblx0XHRcdFx0cmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IHJlY3QudG9wLFxuXHRcdFx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgaW50ZXJzZWN0aW9uID0gcmVjdC5pbnRlcnNlY3Rpb24od2luZG93UmVjdCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGludGVyc2VjdGlvbik7XG5cdFx0XHRcdGlmIChpbnRlcnNlY3Rpb24ueSA+IDApIHtcblx0XHRcdFx0XHRjb25zdCB5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoLTEsIGludGVyc2VjdGlvbi5jZW50ZXIueSkpO1xuXHRcdFx0XHRcdGNvbnN0IHMgPSAoMTAwICsgcGFyYWxsYXggKiAyKSAvIDEwMDtcblx0XHRcdFx0XHRjb25zdCBwID0gKC01MCArICh5ICogcGFyYWxsYXggKiBkaXJlY3Rpb24pKTsgLy8gLnRvRml4ZWQoMyk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgczogcywgcDogcCB9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IG51bGwpLFxuXHRcdCk7XG5cdH1cblxuXHRzY3JvbGxUb3AkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh4ID0+IHdpbmRvdy5wYWdlWU9mZnNldCksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0dGFwKHggPT4gY29uc29sZS5sb2coeCkpLFxuXHRcdFx0Ly8gc2hhcmVSZXBsYXkoKSxcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==