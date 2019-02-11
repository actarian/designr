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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3lib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvdWkvIiwic291cmNlcyI6WyJsaWIvdWkvZmFuY3lib3gvZmFuY3lib3guZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RztJQVNDLDJCQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osT0FBbUI7UUFGRSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3hCLENBQUM7Ozs7SUFFTCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFlQztRQWRBLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQzNCLENBQUMsQ0FBQzs7O3dCQUVLLEtBQUssR0FBVSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFpQixFQUFFLENBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO3dCQUNoRixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUNuQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLEVBSjhDLENBSTlDLENBQUMsQ0FBQztvQkFDSixzQkFBc0I7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7O2dCQTlCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7aUJBQ3RCOzs7OzZDQVFFLE1BQU0sU0FBQyxXQUFXO2dCQWpCeUMsTUFBTTtnQkFBakMsVUFBVTs7OzJCQWEzQyxLQUFLO3lCQUNMLEtBQUs7O0lBeUJQLHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E1QlksaUJBQWlCOzs7SUFFN0IscUNBQXVCOztJQUN2QixtQ0FBd0I7Ozs7O0lBR3ZCLHVDQUErQzs7Ozs7SUFDL0MsaUNBQW9COzs7OztJQUNwQixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyAkZmFuY3lib3ggZnJvbSAnQGZhbmN5YXBwcy9mYW5jeWJveCc7XHJcbi8vIGltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JzsgLy8gdGhpcyByZWxvYWQganF1ZXJ5IGJyZWFraW5nIGZhbmN5Ym94XHJcblxyXG4vLyBjb25zdCAkOiBhbnkgPSB3aW5kb3cgPyAod2luZG93WyckJ10gfHwge30pIDoge307IC8vICEhISByaW11b3ZlcmVcclxuZGVjbGFyZSB2YXIgJDogYW55OyAvLyB1c2UgJCBmb3IganF1ZXJ5IC8vICEhISByaW11b3ZlcmVcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2ZhbmN5Ym94XScsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmFuY3lib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QElucHV0KCkgZmFuY3lib3g6IGFueTtcclxuXHRASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHQkKCgpID0+IHtcclxuXHRcdFx0XHRcdC8vICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmZhbmN5Ym94KHRoaXMuZmFuY3lib3gpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXA6IGFueVtdID0gQXJyYXkuZnJvbSgkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5maW5kKHRoaXMudGFyZ2V0KSk7XHJcblx0XHRcdFx0XHRncm91cC5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCwgaTogbnVtYmVyKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0JC5mYW5jeWJveC5vcGVuKGdyb3VwLCB0aGlzLmZhbmN5Ym94LCBpKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==