import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { RafService } from '../raf/raf.service';
import Rect from '../rect/rect';
import * as i0 from "@angular/core";
import * as i1 from "../raf/raf.service";
var ParallaxDirective = /** @class */ (function (_super) {
    __extends(ParallaxDirective, _super);
    // @ViewChild('img', { read: HTMLImageElement }) image;
    function ParallaxDirective(platformId, zone, elementRef, rafService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.elementRef = elementRef;
        _this.rafService = rafService;
        return _this;
    }
    ParallaxDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.zone.runOutsideAngular(function () {
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
    ParallaxDirective.prototype.parallax$ = function () {
        var _this = this;
        return this.rafService.raf$().pipe(map(function (top) {
            var windowRect = new Rect({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            });
            // this.windowRect;
            var node = _this.elementRef.nativeElement;
            var parallax = (_this.parallax || 5) * 2;
            var direction = 1; // i % 2 === 0 ? 1 : -1;
            var rect = Rect.fromNode(node);
            rect = new Rect({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
            });
            var intersection = rect.intersection(windowRect);
            // console.log(intersection);
            if (intersection.y > 0) {
                var y = Math.min(1, Math.max(-1, intersection.center.y));
                var s = (100 + parallax * 2) / 100;
                var p = (-50 + (y * parallax * direction)); // .toFixed(3);
                return { s: s, p: p };
            }
            else {
                return null;
            }
        }), filter(function (x) { return x !== null; }));
    };
    ParallaxDirective.prototype.scrollTop$ = function () {
        return this.rafService.raf$().pipe(map(function (x) { return window.pageYOffset; }), distinctUntilChanged(), tap(function (x) { return console.log(x); }));
    };
    ParallaxDirective.ɵfac = function ParallaxDirective_Factory(t) { return new (t || ParallaxDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.RafService)); };
    ParallaxDirective.ɵdir = i0.ɵɵdefineDirective({ type: ParallaxDirective, selectors: [["", "parallax", ""]], inputs: { parallax: "parallax" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return ParallaxDirective;
}(DisposableDirective));
export { ParallaxDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLGNBQWMsQ0FBQzs7O0FBRWhDO0lBR3VDLHFDQUFtQjtJQUd6RCx1REFBdUQ7SUFFdkQsMkJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDWixVQUFtQyxFQUNuQyxVQUFzQjtRQUovQixZQU1DLGlCQUFPLFNBQ1A7UUFONkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTs7SUFHL0IsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFBQSxpQkFrQkM7UUFqQkEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzNCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxD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Q0FBQyxFQUFkLENBQWMsQ0FBQyxDQUV4QixDQUFDO0lBQ0gsQ0FBQztzRkE1RVcsaUJBQWlCLHVCQU1wQixXQUFXOzBEQU5SLGlCQUFpQjs0QkFYOUI7Q0F5RkMsQUFqRkQsQ0FHdUMsbUJBQW1CLEdBOEV6RDtTQTlFWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUg3QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7YUFDdEI7O3NCQU9FLE1BQU07dUJBQUMsV0FBVzs7a0JBSm5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVEaXJlY3RpdmUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSYWZTZXJ2aWNlIH0gZnJvbSAnLi4vcmFmL3JhZi5zZXJ2aWNlJztcbmltcG9ydCBSZWN0IGZyb20gJy4uL3JlY3QvcmVjdCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1twYXJhbGxheF0nXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFsbGF4RGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdEBJbnB1dCgpIHBhcmFsbGF4OiBudW1iZXI7XG5cdC8vIEBWaWV3Q2hpbGQoJ2ltZycsIHsgcmVhZDogSFRNTEltYWdlRWxlbWVudCB9KSBpbWFnZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHRcdHByaXZhdGUgcmFmU2VydmljZTogUmFmU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5cdFx0XHR0aGlzLnBhcmFsbGF4JCgpLnBpcGUoXG5cdFx0XHRcdC8qXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGEucCAhPT0gYi5wO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Ki9cblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpLFxuXHRcdFx0KS5zdWJzY3JpYmUocGFyYWxsYXggPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbGxheCk7XG5cdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiAke3BhcmFsbGF4LnMgKiAxMDB9JTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoJHtwYXJhbGxheC5wfSUpO2ApO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwYXJhbGxheCQoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh0b3AgPT4ge1xuXHRcdFx0XHRjb25zdCB3aW5kb3dSZWN0ID0gbmV3IFJlY3Qoe1xuXHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIHRoaXMud2luZG93UmVjdDtcblx0XHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdFx0XHRjb25zdCBwYXJhbGxheCA9ICh0aGlzLnBhcmFsbGF4IHx8IDUpICogMjtcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gMTsgLy8gaSAlIDIgPT09IDAgPyAxIDogLTE7XG5cdFx0XHRcdGxldCByZWN0ID0gUmVjdC5mcm9tTm9kZShub2RlKTtcblx0XHRcdFx0cmVjdCA9IG5ldyBSZWN0KHtcblx0XHRcdFx0XHR0b3A6IHJlY3QudG9wLFxuXHRcdFx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgaW50ZXJzZWN0aW9uID0gcmVjdC5pbnRlcnNlY3Rpb24od2luZG93UmVjdCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGludGVyc2VjdGlvbik7XG5cdFx0XHRcdGlmIChpbnRlcnNlY3Rpb24ueSA+IDApIHtcblx0XHRcdFx0XHRjb25zdCB5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoLTEsIGludGVyc2VjdGlvbi5jZW50ZXIueSkpO1xuXHRcdFx0XHRcdGNvbnN0IHMgPSAoMTAwICsgcGFyYWxsYXggKiAyKSAvIDEwMDtcblx0XHRcdFx0XHRjb25zdCBwID0gKC01MCArICh5ICogcGFyYWxsYXggKiBkaXJlY3Rpb24pKTsgLy8gLnRvRml4ZWQoMyk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgczogcywgcDogcCB9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IG51bGwpLFxuXHRcdCk7XG5cdH1cblxuXHRzY3JvbGxUb3AkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcblx0XHRcdG1hcCh4ID0+IHdpbmRvdy5wYWdlWU9mZnNldCksXG5cdFx0XHRkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuXHRcdFx0dGFwKHggPT4gY29uc29sZS5sb2coeCkpLFxuXHRcdFx0Ly8gc2hhcmVSZXBsYXkoKSxcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==