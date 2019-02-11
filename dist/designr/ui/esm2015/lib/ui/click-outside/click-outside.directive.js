/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
export class ClickOutsideDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        /** @type {?} */
        const targetElement = (/** @type {?} */ (e.target));
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        /** @type {?} */
        const clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    }
}
ClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clickOutside]'
            },] }
];
/** @nocollapse */
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef }
];
ClickOutsideDirective.propDecorators = {
    clickOutside: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ClickOutsideDirective.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    ClickOutsideDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsxRixNQUFNLE9BQU8scUJBQXFCOzs7O0lBRWpDLFlBQ1MsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUdYLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUYvQyxDQUFDOzs7OztJQUtFLE9BQU8sQ0FBQyxDQUFROztjQUNoQixhQUFhLEdBQVksbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBVzs7Ozs7Y0FJNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzdHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDOzs7WUFyQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7YUFDMUI7Ozs7WUFKbUIsVUFBVTs7OzJCQVc1QixNQUFNO3NCQUVOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQUYxQyw2Q0FBbUQ7Ozs7O0lBSGxELHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0QE91dHB1dCgpIHB1YmxpYyBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25DbGljayhlOiBFdmVudCkge1xyXG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogRWxlbWVudCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLm9uQ2xpY2snLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpO1xyXG5cdFx0Ly8gY29uc3QgZG9jdW1lbnRDb250YWluZWQ6IGJvb2xlYW4gPSBCb29sZWFuKGRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRhcmdldEVsZW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCwgZG9jdW1lbnRDb250YWluZWQpO1xyXG5cdFx0Y29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpIHx8ICFkb2N1bWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuXHRcdGlmICghY2xpY2tlZEluc2lkZSkge1xyXG5cdFx0XHR0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=