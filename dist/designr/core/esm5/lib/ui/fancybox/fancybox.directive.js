/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
// use $ for jquery // !!! rimuovere
var FancyboxDirective = /** @class */ (function () {
    function FancyboxDirective(platformId, zone, element) {
        this.platformId = platformId;
        this.zone = zone;
        this.element = element;
    }
    /**
     * @return {?}
     */
    FancyboxDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                $(function () {
                    // $(this.element.nativeElement).fancybox(this.fancybox);
                    /** @type {?} */
                    var group = Array.from($(_this.element.nativeElement).find(_this.target));
                    group.forEach(function (item, i) { return item.addEventListener('click', function (e) {
                        $.fancybox.open(group, _this.fancybox, i);
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }); });
                    // console.log(group);
                });
            });
        }
    };
    FancyboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fancybox]',
                },] }
    ];
    /** @nocollapse */
    FancyboxDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    FancyboxDirective.propDecorators = {
        fancybox: [{ type: Input }],
        target: [{ type: Input }]
    };
    return FancyboxDirective;
}());
export { FancyboxDirective };
if (false) {
    /** @type {?} */
    FancyboxDirective.prototype.fancybox;
    /** @type {?} */
    FancyboxDirective.prototype.target;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    FancyboxDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3lib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi91aS9mYW5jeWJveC9mYW5jeWJveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3pHO0lBU0MsMkJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDWixPQUFtQjtRQUZFLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFDeEIsQ0FBQzs7OztJQUVMLDJDQUFlOzs7SUFBZjtRQUFBLGlCQWVDO1FBZEEsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDOzs7d0JBRUssS0FBSyxHQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDaEYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWlCLEVBQUUsQ0FBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7d0JBQ2hGLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25CLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QixDQUFDLENBQUMsRUFKOEMsQ0FJOUMsQ0FBQyxDQUFDO29CQUNKLHNCQUFzQjtnQkFDdkIsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQzs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtpQkFDdEI7Ozs7NkNBUUUsTUFBTSxTQUFDLFdBQVc7Z0JBakJ5QyxNQUFNO2dCQUFqQyxVQUFVOzs7MkJBYTNDLEtBQUs7eUJBQ0wsS0FBSzs7SUF5QlAsd0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTVCWSxpQkFBaUI7OztJQUU3QixxQ0FBdUI7O0lBQ3ZCLG1DQUF3Qjs7Ozs7SUFHdkIsdUNBQStDOzs7OztJQUMvQyxpQ0FBb0I7Ozs7O0lBQ3BCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCAqIGFzICRmYW5jeWJveCBmcm9tICdAZmFuY3lhcHBzL2ZhbmN5Ym94JztcclxuLy8gaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknOyAvLyB0aGlzIHJlbG9hZCBqcXVlcnkgYnJlYWtpbmcgZmFuY3lib3hcclxuXHJcbi8vIGNvbnN0ICQ6IGFueSA9IHdpbmRvdyA/ICh3aW5kb3dbJyQnXSB8fCB7fSkgOiB7fTsgLy8gISEhIHJpbXVvdmVyZVxyXG5kZWNsYXJlIHZhciAkOiBhbnk7IC8vIHVzZSAkIGZvciBqcXVlcnkgLy8gISEhIHJpbXVvdmVyZVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbZmFuY3lib3hdJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGYW5jeWJveERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuXHRASW5wdXQoKSBmYW5jeWJveDogYW55O1xyXG5cdEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRcdCQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gJCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkuZmFuY3lib3godGhpcy5mYW5jeWJveCk7XHJcblx0XHRcdFx0XHRjb25zdCBncm91cDogYW55W10gPSBBcnJheS5mcm9tKCQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmZpbmQodGhpcy50YXJnZXQpKTtcclxuXHRcdFx0XHRcdGdyb3VwLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50LCBpOiBudW1iZXIpID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQkLmZhbmN5Ym94Lm9wZW4oZ3JvdXAsIHRoaXMuZmFuY3lib3gsIGkpO1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHR9KSk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhncm91cCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19