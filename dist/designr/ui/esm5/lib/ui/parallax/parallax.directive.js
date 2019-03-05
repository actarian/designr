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
    // @ViewChild('img', { read: HTMLImageElement }) image;
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
            /** @type {?} */
            var image = _this.elementRef.nativeElement.querySelector('img');
            _this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(_this.unsubscribe)).subscribe(function (parallax) {
                // console.log(parallax);
                image.setAttribute('style', "height: " + parallax.s * 100 + "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(" + parallax.p + "%);");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLElBQUksTUFBTSxjQUFjLENBQUM7QUFFaEM7SUFHdUMsNkNBQW1CO0lBR3pELHVEQUF1RDtJQUV2RCwyQkFDOEIsVUFBa0IsRUFDdkMsSUFBWSxFQUNaLFVBQW1DLEVBQ25DLFVBQXNCO1FBSi9CLFlBTUMsaUJBQU8sU0FDUDtRQU42QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUcvQixDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBa0JDO1FBakJBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBQ3JCLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFB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LFNBQUMsV0FBVztnQkFoQnlDLE1BQU07Z0JBQWpDLFVBQVU7Z0JBSXBDLFVBQVU7OzsyQkFRakIsS0FBSzs7SUE0RVAsd0JBQUM7Q0FBQSxBQWpGRCxDQUd1QyxtQkFBbUIsR0E4RXpEO1NBOUVZLGlCQUFpQjs7O0lBRTdCLHFDQUEwQjs7Ozs7SUFJekIsdUNBQStDOzs7OztJQUMvQyxpQ0FBb0I7Ozs7O0lBQ3BCLHVDQUEyQzs7Ozs7SUFDM0MsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4uL3JhZi9yYWYuc2VydmljZSc7XG5pbXBvcnQgUmVjdCBmcm9tICcuLi9yZWN0L3JlY3QnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRASW5wdXQoKSBwYXJhbGxheDogbnVtYmVyO1xuXHQvLyBAVmlld0NoaWxkKCdpbWcnLCB7IHJlYWQ6IEhUTUxJbWFnZUVsZW1lbnQgfSkgaW1hZ2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pixcblx0XHRwcml2YXRlIHJhZlNlcnZpY2U6IFJhZlNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXHRcdFx0dGhpcy5wYXJhbGxheCQoKS5waXBlKFxuXHRcdFx0XHQvKlxuXHRcdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBhLnAgIT09IGIucDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdCovXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdCkuc3Vic2NyaWJlKHBhcmFsbGF4ID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGFyYWxsYXgpO1xuXHRcdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDogJHtwYXJhbGxheC5zICogMTAwfSU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKCR7cGFyYWxsYXgucH0lKTtgKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cGFyYWxsYXgkKCkge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAodG9wID0+IHtcblx0XHRcdFx0Y29uc3Qgd2luZG93UmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyB0aGlzLndpbmRvd1JlY3Q7XG5cdFx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblx0XHRcdFx0Y29uc3QgcGFyYWxsYXggPSAodGhpcy5wYXJhbGxheCB8fCA1KSAqIDI7XG5cdFx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IDE7IC8vIGkgJSAyID09PSAwID8gMSA6IC0xO1xuXHRcdFx0XHRsZXQgcmVjdCA9IFJlY3QuZnJvbU5vZGUobm9kZSk7XG5cdFx0XHRcdHJlY3QgPSBuZXcgUmVjdCh7XG5cdFx0XHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQsXG5cdFx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXG5cdFx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHJlY3QuaW50ZXJzZWN0aW9uKHdpbmRvd1JlY3QpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpbnRlcnNlY3Rpb24pO1xuXHRcdFx0XHRpZiAoaW50ZXJzZWN0aW9uLnkgPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgeSA9IE1hdGgubWluKDEsIE1hdGgubWF4KC0xLCBpbnRlcnNlY3Rpb24uY2VudGVyLnkpKTtcblx0XHRcdFx0XHRjb25zdCBzID0gKDEwMCArIHBhcmFsbGF4ICogMikgLyAxMDA7XG5cdFx0XHRcdFx0Y29uc3QgcCA9ICgtNTAgKyAoeSAqIHBhcmFsbGF4ICogZGlyZWN0aW9uKSk7IC8vIC50b0ZpeGVkKDMpO1xuXHRcdFx0XHRcdHJldHVybiB7IHM6IHMsIHA6IHAgfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcblx0XHQpO1xuXHR9XG5cblx0c2Nyb2xsVG9wJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnJhZlNlcnZpY2UucmFmJCgpLnBpcGUoXG5cdFx0XHRtYXAoeCA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcblx0XHRcdHRhcCh4ID0+IGNvbnNvbGUubG9nKHgpKSxcblx0XHRcdC8vIHNoYXJlUmVwbGF5KCksXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=