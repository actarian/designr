/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, NgZone, PLATFORM_ID } from '@angular/core';
// use $ for jquery // !!! rimuovere
export class FancyboxDirective {
    /**
     * @param {?} platformId
     * @param {?} zone
     * @param {?} element
     */
    constructor(platformId, zone, element) {
        this.platformId = platformId;
        this.zone = zone;
        this.element = element;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                $(() => {
                    // $(this.element.nativeElement).fancybox(this.fancybox);
                    /** @type {?} */
                    const group = Array.from($(this.element.nativeElement).find(this.target));
                    group.forEach((item, i) => item.addEventListener('click', (e) => {
                        $.fancybox.open(group, this.fancybox, i);
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }));
                    // console.log(group);
                });
            });
        }
    }
}
FancyboxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fancybox]',
            },] }
];
/** @nocollapse */
FancyboxDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone },
    { type: ElementRef }
];
FancyboxDirective.propDecorators = {
    fancybox: [{ type: Input }],
    target: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3lib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi91aS9mYW5jeWJveC9mYW5jeWJveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBV3pHLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUs3QixZQUM4QixVQUFrQixFQUN2QyxJQUFZLEVBQ1osT0FBbUI7UUFGRSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3hCLENBQUM7Ozs7SUFFTCxlQUFlO1FBQ2QsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLENBQUMsQ0FBQyxHQUFHLEVBQUU7OzswQkFFQSxLQUFLLEdBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoRixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBaUIsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTt3QkFDcEYsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ0osc0JBQXNCO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2FBQ3RCOzs7O3lDQVFFLE1BQU0sU0FBQyxXQUFXO1lBakJ5QyxNQUFNO1lBQWpDLFVBQVU7Ozt1QkFhM0MsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4scUNBQXVCOztJQUN2QixtQ0FBd0I7Ozs7O0lBR3ZCLHVDQUErQzs7Ozs7SUFDL0MsaUNBQW9COzs7OztJQUNwQixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyAkZmFuY3lib3ggZnJvbSAnQGZhbmN5YXBwcy9mYW5jeWJveCc7XHJcbi8vIGltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JzsgLy8gdGhpcyByZWxvYWQganF1ZXJ5IGJyZWFraW5nIGZhbmN5Ym94XHJcblxyXG4vLyBjb25zdCAkOiBhbnkgPSB3aW5kb3cgPyAod2luZG93WyckJ10gfHwge30pIDoge307IC8vICEhISByaW11b3ZlcmVcclxuZGVjbGFyZSB2YXIgJDogYW55OyAvLyB1c2UgJCBmb3IganF1ZXJ5IC8vICEhISByaW11b3ZlcmVcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2ZhbmN5Ym94XScsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmFuY3lib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcblx0QElucHV0KCkgZmFuY3lib3g6IGFueTtcclxuXHRASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHQkKCgpID0+IHtcclxuXHRcdFx0XHRcdC8vICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmZhbmN5Ym94KHRoaXMuZmFuY3lib3gpO1xyXG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXA6IGFueVtdID0gQXJyYXkuZnJvbSgkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5maW5kKHRoaXMudGFyZ2V0KSk7XHJcblx0XHRcdFx0XHRncm91cC5mb3JFYWNoKChpdGVtOiBIVE1MRWxlbWVudCwgaTogbnVtYmVyKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0JC5mYW5jeWJveC5vcGVuKGdyb3VwLCB0aGlzLmZhbmN5Ym94LCBpKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ3JvdXApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==