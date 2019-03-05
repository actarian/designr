/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { RafService } from '../raf/raf.service';
import Rect from '../rect/rect';
var ParallaxDirective = /** @class */ (function (_super) {
    tslib_1.__extends(ParallaxDirective, _super);
    function ParallaxDirective(platformId, zone, elementRef, rafService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.elementRef = elementRef;
        _this.rafService = rafService;
        return _this;
    }
    /**
     * @return {?}
     */
    ParallaxDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
            _this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(_this.unsubscribe)).subscribe(function (parallax) {
                // console.log(parallax);
                _this.elementRef.nativeElement.setAttribute('style', "height: " + parallax.s * 100 + "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(" + parallax.p + "%);");
            });
        });
    };
    /**
     * @return {?}
     */
    ParallaxDirective.prototype.parallax$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.rafService.raf$().pipe(map(function (top) {
            /** @type {?} */
            var windowRect = new Rect({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            // this.windowRect;
            /** @type {?} */
            var node = _this.elementRef.nativeElement;
            /** @type {?} */
            var parallax = (_this.parallax || 5) * 2;
            /** @type {?} */
            var direction = 1;
            // i % 2 === 0 ? 1 : -1;
            /** @type {?} */
            var rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            /** @type {?} */
            var intersection = rect.intersection(windowRect);
            // console.log(intersection);
            if (intersection.y > 0) {
                /** @type {?} */
                var y = Math.min(1, Math.max(-1, intersection.center.y));
                /** @type {?} */
                var s = (100 + parallax * 2) / 100;
                /** @type {?} */
                var p = (-50 + (y * parallax * direction));
                return { s: s, p: p };
            }
            else {
                return null;
            }
        }), filter(function (x) { return x !== null; }));
    };
    /**
     * @return {?}
     */
    ParallaxDirective.prototype.scrollTop$ = /**
     * @return {?}
     */
    function () {
        return this.rafService.raf$().pipe(map(function (x) { return window.pageYOffset; }), distinctUntilChanged(), tap(function (x) { return console.log(x); }));
    };
    ParallaxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[parallax]'
                },] }
    ];
    /** @nocollapse */
    ParallaxDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef },
        { type: RafService }
    ]; };
    ParallaxDirective.propDecorators = {
        parallax: [{ type: Input }]
    };
    return ParallaxDirective;
}(DisposableComponent));
export { ParallaxDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLElBQUksTUFBTSxjQUFjLENBQUM7QUFFaEM7SUFHdUMsNkNBQW1CO0lBSXpELDJCQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osVUFBbUMsRUFDbkMsVUFBc0I7UUFKL0IsWUFNQyxpQkFBTyxTQUNQO1FBTjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixnQkFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsZ0JBQVUsR0FBVixVQUFVLENBQVk7O0lBRy9CLENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFpQkM7UUFoQkEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJO1lBQ3BCOzs7O2NBSUU7WUFD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O0lBMEVQLHdCQUFDO0NBQUEsQUEvRUQsQ0FHdUMsbUJBQW1CLEdBNEV6RDtTQTVFWSxpQkFBaUI7OztJQUU3QixxQ0FBMEI7Ozs7O0lBR3pCLHVDQUErQzs7Ozs7SUFDL0MsaUNBQW9COzs7OztJQUNwQix1Q0FBMkM7Ozs7O0lBQzNDLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJhZlNlcnZpY2UgfSBmcm9tICcuLi9yYWYvcmFmLnNlcnZpY2UnO1xuaW1wb3J0IFJlY3QgZnJvbSAnLi4vcmVjdC9yZWN0JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcbn0pXG5leHBvcnQgY2xhc3MgUGFyYWxsYXhEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QElucHV0KCkgcGFyYWxsYXg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHRcdHByaXZhdGUgcmFmU2VydmljZTogUmFmU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHRoaXMucGFyYWxsYXgkKCkucGlwZShcblx0XHRcdFx0Lypcblx0XHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gYS5wICE9PSBiLnA7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQqL1xuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHQpLnN1YnNjcmliZShwYXJhbGxheCA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHBhcmFsbGF4KTtcblx0XHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6ICR7cGFyYWxsYXgucyAqIDEwMH0lOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgke3BhcmFsbGF4LnB9JSk7YCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHBhcmFsbGF4JCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxuXHRcdFx0bWFwKHRvcCA9PiB7XG5cdFx0XHRcdGNvbnN0IHdpbmRvd1JlY3QgPSBuZXcgUmVjdCh7XG5cdFx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gdGhpcy53aW5kb3dSZWN0O1xuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XHRcdGNvbnN0IHBhcmFsbGF4ID0gKHRoaXMucGFyYWxsYXggfHwgNSkgKiAyO1xuXHRcdFx0XHRjb25zdCBkaXJlY3Rpb24gPSAxOyAvLyBpICUgMiA9PT0gMCA/IDEgOiAtMTtcblx0XHRcdFx0bGV0IHJlY3QgPSBSZWN0LmZyb21Ob2RlKG5vZGUpO1xuXHRcdFx0XHRyZWN0ID0gbmV3IFJlY3Qoe1xuXHRcdFx0XHRcdHRvcDogcmVjdC50b3AsXG5cdFx0XHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxuXHRcdFx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxuXHRcdFx0XHRcdGhlaWdodDogcmVjdC5oZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zdCBpbnRlcnNlY3Rpb24gPSByZWN0LmludGVyc2VjdGlvbih3aW5kb3dSZWN0KTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coaW50ZXJzZWN0aW9uKTtcblx0XHRcdFx0aWYgKGludGVyc2VjdGlvbi55ID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IHkgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgtMSwgaW50ZXJzZWN0aW9uLmNlbnRlci55KSk7XG5cdFx0XHRcdFx0Y29uc3QgcyA9ICgxMDAgKyBwYXJhbGxheCAqIDIpIC8gMTAwO1xuXHRcdFx0XHRcdGNvbnN0IHAgPSAoLTUwICsgKHkgKiBwYXJhbGxheCAqIGRpcmVjdGlvbikpOyAvLyAudG9GaXhlZCgzKTtcblx0XHRcdFx0XHRyZXR1cm4geyBzOiBzLCBwOiBwIH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXG5cdFx0KTtcblx0fVxuXG5cdHNjcm9sbFRvcCQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxuXHRcdFx0bWFwKHggPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcblx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG5cdFx0XHR0YXAoeCA9PiBjb25zb2xlLmxvZyh4KSksXG5cdFx0XHQvLyBzaGFyZVJlcGxheSgpLFxuXHRcdCk7XG5cdH1cblxufVxuIl19