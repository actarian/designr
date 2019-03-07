/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var image = _this.elementRef.nativeElement.querySelector('img');
            _this.parallax$().pipe(
            /*
            distinctUntilChanged((a, b) => {
                return a.p !== b.p;
            }),
            */
            takeUntil(_this.unsubscribe)).subscribe((/**
             * @param {?} parallax
             * @return {?}
             */
            function (parallax) {
                // console.log(parallax);
                image.setAttribute('style', "height: " + parallax.s * 100 + "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(" + parallax.p + "%);");
            }));
        }));
    };
    /**
     * @return {?}
     */
    ParallaxDirective.prototype.parallax$ = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.rafService.raf$().pipe(map((/**
         * @param {?} top
         * @return {?}
         */
        function (top) {
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
        })), filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== null; })));
    };
    /**
     * @return {?}
     */
    ParallaxDirective.prototype.scrollTop$ = /**
     * @return {?}
     */
    function () {
        return this.rafService.raf$().pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return window.pageYOffset; })), distinctUntilChanged(), tap((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return console.log(x); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLElBQUksTUFBTSxjQUFjLENBQUM7QUFFaEM7SUFHdUMsNkNBQW1CO0lBR3pELHVEQUF1RDtJQUV2RCwyQkFDOEIsVUFBa0IsRUFDdkMsSUFBWSxFQUNaLFVBQW1DLEVBQ25DLFVBQXNCO1FBSi9CLFlBTUMsaUJBQU8sU0FDUDtRQU42QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUcvQixDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBa0JDO1FBakJBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDOztnQkFDckIsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMs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Q3RCOzs7OzZDQU9FLE1BQU0sU0FBQyxXQUFXO2dCQWhCeUMsTUFBTTtnQkFBakMsVUFBVTtnQkFJcEMsVUFBVTs7OzJCQVFqQixLQUFLOztJQTRFUCx3QkFBQztDQUFBLEFBakZELENBR3VDLG1CQUFtQixHQThFekQ7U0E5RVksaUJBQWlCOzs7SUFFN0IscUNBQTBCOzs7OztJQUl6Qix1Q0FBK0M7Ozs7O0lBQy9DLGlDQUFvQjs7Ozs7SUFDcEIsdUNBQTJDOzs7OztJQUMzQyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSYWZTZXJ2aWNlIH0gZnJvbSAnLi4vcmFmL3JhZi5zZXJ2aWNlJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL3JlY3QvcmVjdCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1twYXJhbGxheF0nXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4RGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIHBhcmFsbGF4OiBudW1iZXI7XG5cdC8vIEBWaWV3Q2hpbGQoJ2ltZycsIHsgcmVhZDogSFRNTEltYWdlRWxlbWVudCB9KSBpbWFnZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHRcdHByaXZhdGUgcmFmU2VydmljZTogUmFmU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cdFx0XHR0aGlzLnBhcmFsbGF4JCgpLnBpcGUoXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEucCAhPT0gYi5wO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Ki9cblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0KS5zdWJzY3JpYmUocGFyYWxsYXggPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbGxheCk7XG5cdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiAke3BhcmFsbGF4LnMgKiAxMDB9JTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoJHtwYXJhbGxheC5wfSUpO2ApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwYXJhbGxheCQoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh0b3AgPT4ge1xuXHRcdFx0XHRjb25zdCB3aW5kb3dSZWN0ID0gbmV3IFJlY3Qoe1xuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIHRoaXMud2luZG93UmVjdDtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdFx0XHRjb25zdCBwYXJhbGxheCA9ICh0aGlzLnBhcmFsbGF4IHx8IDUpICogMjtcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gMTsgLy8gaSAlIDIgPT09IDAgPyAxIDogLTE7XG5cdFx0XHRcdGxldCByZWN0ID0gUmVjdC5mcm9tTm9kZShub2RlKTtcblx0XHRcdFx0cmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IHJlY3QudG9wLFxuXHRcdFx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgaW50ZXJzZWN0aW9uID0gcmVjdC5pbnRlcnNlY3Rpb24od2luZG93UmVjdCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGludGVyc2VjdGlvbik7XG5cdFx0XHRcdGlmIChpbnRlcnNlY3Rpb24ueSA+IDApIHtcblx0XHRcdFx0XHRjb25zdCB5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoLTEsIGludGVyc2VjdGlvbi5jZW50ZXIueSkpO1xuXHRcdFx0XHRcdGNvbnN0IHMgPSAoMTAwICsgcGFyYWxsYXggKiAyKSAvIDEwMDtcblx0XHRcdFx0XHRjb25zdCBwID0gKC01MCArICh5ICogcGFyYWxsYXggKiBkaXJlY3Rpb24pKTsgLy8gLnRvRml4ZWQoMyk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgczogcywgcDogcCB9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IG51bGwpLFxuXHRcdCk7XG5cdH1cblxuXHRzY3JvbGxUb3AkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh4ID0+IHdpbmRvdy5wYWdlWU9mZnNldCksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0dGFwKHggPT4gY29uc29sZS5sb2coeCkpLFxuXHRcdFx0Ly8gc2hhcmVSZXBsYXkoKSxcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==