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
            this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(this.unsubscribe)).subscribe(parallax => {
                // console.log(parallax);
                this.elementRef.nativeElement.setAttribute('style', `height: ${parallax.s * 100}%; top: 50%; left: 50%; transform: translateX(-50%) translateY(${parallax.p}%);`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQztBQUtoQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7Ozs7O0lBSXpELFlBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDWixVQUFtQyxFQUNuQyxVQUFzQjtRQUU5QixLQUFLLEVBQUUsQ0FBQztRQUxxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRy9CLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSTtZQUNwQjs7OztjQUlF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OztJQUNwQix1Q0FBMkM7Ozs7O0lBQzNDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJhZlNlcnZpY2UgfSBmcm9tICcuLi9yYWYvcmFmLnNlcnZpY2UnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vcmVjdC9yZWN0JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFyYWxsYXhEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcGFyYWxsYXg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHRcdHByaXZhdGUgcmFmU2VydmljZTogUmFmU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHRoaXMucGFyYWxsYXgkKCkucGlwZShcblx0XHRcdFx0Lypcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYS5wICE9PSBiLnA7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQqL1xuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHQpLnN1YnNjcmliZShwYXJhbGxheCA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmFsbGF4KTtcblx0XHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6ICR7cGFyYWxsYXgucyAqIDEwMH0lOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgke3BhcmFsbGF4LnB9JSk7YCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHBhcmFsbGF4JCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxuXHRcdFx0bWFwKHRvcCA9PiB7XG5cdFx0XHRcdGNvbnN0IHdpbmRvd1JlY3QgPSBuZXcgUmVjdCh7XG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gdGhpcy53aW5kb3dSZWN0O1xuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IHBhcmFsbGF4ID0gKHRoaXMucGFyYWxsYXggfHwgNSkgKiAyO1xuXHRcdFx0XHRjb25zdCBkaXJlY3Rpb24gPSAxOyAvLyBpICUgMiA9PT0gMCA/IDEgOiAtMTtcblx0XHRcdFx0bGV0IHJlY3QgPSBSZWN0LmZyb21Ob2RlKG5vZGUpO1xuXHRcdFx0XHRyZWN0ID0gbmV3IFJlY3Qoe1xuXHRcdFx0XHRcdHRvcDogcmVjdC50b3AsXG5cdFx0XHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxuXHRcdFx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogcmVjdC5oZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCBpbnRlcnNlY3Rpb24gPSByZWN0LmludGVyc2VjdGlvbih3aW5kb3dSZWN0KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW50ZXJzZWN0aW9uKTtcblx0XHRcdFx0aWYgKGludGVyc2VjdGlvbi55ID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IHkgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgtMSwgaW50ZXJzZWN0aW9uLmNlbnRlci55KSk7XG5cdFx0XHRcdFx0Y29uc3QgcyA9ICgxMDAgKyBwYXJhbGxheCAqIDIpIC8gMTAwO1xuXHRcdFx0XHRcdGNvbnN0IHAgPSAoLTUwICsgKHkgKiBwYXJhbGxheCAqIGRpcmVjdGlvbikpOyAvLyAudG9GaXhlZCgzKTtcblx0XHRcdFx0XHRyZXR1cm4geyBzOiBzLCBwOiBwIH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXG5cdFx0KTtcblx0fVxuXG5cdHNjcm9sbFRvcCQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxuXHRcdFx0bWFwKHggPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHR0YXAoeCA9PiBjb25zb2xlLmxvZyh4KSksXG5cdFx0XHQvLyBzaGFyZVJlcGxheSgpLFxuXHRcdCk7XG5cdH1cblxufVxuIl19