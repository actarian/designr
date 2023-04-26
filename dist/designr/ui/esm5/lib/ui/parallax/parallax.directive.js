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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLElBQUksTUFBTSxjQUFjLENBQUM7QUFFaEM7SUFHdUMsNkNBQW1CO0lBR3pELHVEQUF1RDtJQUV2RCwyQkFDOEIsVUFBa0IsRUFDdkMsSUFBWSxFQUNaLFVBQW1DLEVBQ25DLFVBQXNCO1FBSi9CLFlBTUMsaUJBQU8sU0FDUDtRQU42QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLGdCQUFVLEdBQVYsVUFBVSxDQUFZOztJQUcvQixDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBa0JDO1FBakJBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDOztnQkFDckIsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDaEUsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUk7WUFDcEI7Ozs7Y0FJRTtZQUNGLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsUUFBUTtnQkFDbkIseUJBQXlCO2dCQUN6QixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFXLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyx1RUFBa0UsUUFBUSxDQUFDLENBQUMsUUFBSyxDQUFDLENBQUM7WUFDM0ksQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFBQSxpQkFpQ0M7UUFoQ0EsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDakMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRzs7Z0JBQ0EsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDO2dCQUMzQixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7Z0JBQ3hCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVzthQUMxQixDQUFDOzs7Z0JBRUksSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTs7Z0JBQ3BDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ25DLFNBQVMsR0FBRyxDQUFDOzs7Z0JBQ2YsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQzs7Z0JBQ0csWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ2xELDZCQUE2QjtZQUM3QixJQUFJLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztvQkFDakIsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3BELENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRzs7b0JBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNOLE9BQU8sSUFBSSxDQUFDO2FBQ1o7UUFDRixDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsRUFBQyxDQUN2QixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxXQUFXLEVBQWxCLENBQWtCLEVBQUMsRUFDNUIsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUMsQ0FFeEIsQ0FBQztJQUNILENBQUM7O2dCQS9FRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCOzs7OzZDQU9FLE1BQU0sU0FBQyxXQUFXO2dCQWhCeUMsTUFBTTtnQkFBakMsVUFBVTtnQkFJcEMsVUFBVTs7OzJCQVFqQixLQUFLOztJQTRFUCx3QkFBQztDQUFBLEFBakZELENBR3VDLG1CQUFtQixHQThFekQ7U0E5RVksaUJBQWlCOzs7SUFFN0IscUNBQTBCOzs7OztJQUl6Qix1Q0FBK0M7Ozs7O0lBQy9DLGlDQUFvQjs7Ozs7SUFDcEIsdUNBQTJDOzs7OztJQUMzQyx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmFmU2VydmljZSB9IGZyb20gJy4uL3JhZi9yYWYuc2VydmljZSc7XHJcbmltcG9ydCBSZWN0IGZyb20gJy4uL3JlY3QvcmVjdCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1twYXJhbGxheF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJhbGxheERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QElucHV0KCkgcGFyYWxsYXg6IG51bWJlcjtcclxuXHQvLyBAVmlld0NoaWxkKCdpbWcnLCB7IHJlYWQ6IEhUTUxJbWFnZUVsZW1lbnQgfSkgaW1hZ2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcblx0XHRwcml2YXRlIHJhZlNlcnZpY2U6IFJhZlNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblx0XHRcdHRoaXMucGFyYWxsYXgkKCkucGlwZShcclxuXHRcdFx0XHQvKlxyXG5cdFx0XHRcdGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYS5wICE9PSBiLnA7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ki9cclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXHJcblx0XHRcdCkuc3Vic2NyaWJlKHBhcmFsbGF4ID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwYXJhbGxheCk7XHJcblx0XHRcdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6ICR7cGFyYWxsYXgucyAqIDEwMH0lOyB0b3A6IDUwJTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgke3BhcmFsbGF4LnB9JSk7YCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwYXJhbGxheCQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yYWZTZXJ2aWNlLnJhZiQoKS5waXBlKFxyXG5cdFx0XHRtYXAodG9wID0+IHtcclxuXHRcdFx0XHRjb25zdCB3aW5kb3dSZWN0ID0gbmV3IFJlY3Qoe1xyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIHRoaXMud2luZG93UmVjdDtcclxuXHRcdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRcdFx0Y29uc3QgcGFyYWxsYXggPSAodGhpcy5wYXJhbGxheCB8fCA1KSAqIDI7XHJcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gMTsgLy8gaSAlIDIgPT09IDAgPyAxIDogLTE7XHJcblx0XHRcdFx0bGV0IHJlY3QgPSBSZWN0LmZyb21Ob2RlKG5vZGUpO1xyXG5cdFx0XHRcdHJlY3QgPSBuZXcgUmVjdCh7XHJcblx0XHRcdFx0XHR0b3A6IHJlY3QudG9wLFxyXG5cdFx0XHRcdFx0bGVmdDogcmVjdC5sZWZ0LFxyXG5cdFx0XHRcdFx0d2lkdGg6IHJlY3Qud2lkdGgsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnN0IGludGVyc2VjdGlvbiA9IHJlY3QuaW50ZXJzZWN0aW9uKHdpbmRvd1JlY3QpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGludGVyc2VjdGlvbik7XHJcblx0XHRcdFx0aWYgKGludGVyc2VjdGlvbi55ID4gMCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgeSA9IE1hdGgubWluKDEsIE1hdGgubWF4KC0xLCBpbnRlcnNlY3Rpb24uY2VudGVyLnkpKTtcclxuXHRcdFx0XHRcdGNvbnN0IHMgPSAoMTAwICsgcGFyYWxsYXggKiAyKSAvIDEwMDtcclxuXHRcdFx0XHRcdGNvbnN0IHAgPSAoLTUwICsgKHkgKiBwYXJhbGxheCAqIGRpcmVjdGlvbikpOyAvLyAudG9GaXhlZCgzKTtcclxuXHRcdFx0XHRcdHJldHVybiB7IHM6IHMsIHA6IHAgfTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2Nyb2xsVG9wJCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucmFmU2VydmljZS5yYWYkKCkucGlwZShcclxuXHRcdFx0bWFwKHggPT4gd2luZG93LnBhZ2VZT2Zmc2V0KSxcclxuXHRcdFx0ZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuXHRcdFx0dGFwKHggPT4gY29uc29sZS5sb2coeCkpLFxyXG5cdFx0XHQvLyBzaGFyZVJlcGxheSgpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==