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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQztBQUtoQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1COzs7Ozs7OztJQUt6RCxZQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osVUFBbUMsRUFDbkMsVUFBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFMcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUcvQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRTs7a0JBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FB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VTs7O3VCQVFqQixLQUFLOzs7O0lBQU4scUNBQTBCOzs7OztJQUl6Qix1Q0FBK0M7Ozs7O0lBQy9DLGlDQUFvQjs7Ozs7SUFDcEIsdUNBQTJDOzs7OztJQUMzQyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4uL3JhZi9yYWYuc2VydmljZSc7XHJcbmltcG9ydCBSZWN0IGZyb20gJy4uL3JlY3QvcmVjdCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1twYXJhbGxheF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QElucHV0KCkgcGFyYWxsYXg6IG51bWJlcjtcclxuXHQvLyBAVmlld0NoaWxkKCdpbWcnLCB7IHJlYWQ6IEhUTUxJbWFnZUVsZW1lbnQgfSkgaW1hZ2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcblx0XHRwcml2YXRlIHJhZlNlcnZpY2U6IFJhZlNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblx0XHRcdHRoaXMucGFyYWxsYXgkKCkucGlwZShcclxuXHRcdFx0XHQvKlxyXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYS5wICE9PSBiLnA7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ki9cclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdCkuc3Vic2NyaWJlKHBhcmFsbGF4ID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbGxheCk7XHJcblx0XHRcdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6ICR7cGFyYWxsYXgucyAqIDEwMH0lOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgke3BhcmFsbGF4LnB9JSk7YCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwYXJhbGxheCQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxyXG5cdFx0XHRtYXAodG9wID0+IHtcclxuXHRcdFx0XHRjb25zdCB3aW5kb3dSZWN0ID0gbmV3IFJlY3Qoe1xyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHRoaXMud2luZG93UmVjdDtcclxuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgcGFyYWxsYXggPSAodGhpcy5wYXJhbGxheCB8fCA1KSAqIDI7XHJcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gMTsgLy8gaSAlIDIgPT09IDAgPyAxIDogLTE7XHJcblx0XHRcdFx0bGV0IHJlY3QgPSBSZWN0LmZyb21Ob2RlKG5vZGUpO1xyXG5cdFx0XHRcdHJlY3QgPSBuZXcgUmVjdCh7XHJcblx0XHRcdFx0XHR0b3A6IHJlY3QudG9wLFxyXG5cdFx0XHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxyXG5cdFx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHJlY3QuaW50ZXJzZWN0aW9uKHdpbmRvd1JlY3QpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGludGVyc2VjdGlvbik7XHJcblx0XHRcdFx0aWYgKGludGVyc2VjdGlvbi55ID4gMCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgeSA9IE1hdGgubWluKDEsIE1hdGgubWF4KC0xLCBpbnRlcnNlY3Rpb24uY2VudGVyLnkpKTtcclxuXHRcdFx0XHRcdGNvbnN0IHMgPSAoMTAwICsgcGFyYWxsYXggKiAyKSAvIDEwMDtcclxuXHRcdFx0XHRcdGNvbnN0IHAgPSAoLTUwICsgKHkgKiBwYXJhbGxheCAqIGRpcmVjdGlvbikpOyAvLyAudG9GaXhlZCgzKTtcclxuXHRcdFx0XHRcdHJldHVybiB7IHM6IHMsIHA6IHAgfTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2Nyb2xsVG9wJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcclxuXHRcdFx0bWFwKHggPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcclxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuXHRcdFx0dGFwKHggPT4gY29uc29sZS5sb2coeCkpLFxyXG5cdFx0XHQvLyBzaGFyZVJlcGxheSgpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==