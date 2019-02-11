/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(element) {
        this.element = element;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var targetElement = (/** @type {?} */ (e.target));
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        /** @type {?} */
        var clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clickOutside]'
                },] }
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ClickOutsideDirective.propDecorators = {
        clickOutside: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
if (false) {
    /** @type {?} */
    ClickOutsideDirective.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    ClickOutsideDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3VpL2NsaWNrLW91dHNpZGUvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGO0lBS0MsK0JBQ1MsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUdYLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUYvQyxDQUFDOzs7OztJQUtFLHVDQUFPOzs7O0lBRGQsVUFDZSxDQUFROztZQUNoQixhQUFhLEdBQVksbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBVzs7Ozs7WUFJNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzdHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDOztnQkFyQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzFCOzs7O2dCQUptQixVQUFVOzs7K0JBVzVCLE1BQU07MEJBRU4sWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQVczQyw0QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLHFCQUFxQjs7O0lBTWpDLDZDQUFtRDs7Ozs7SUFIbEQsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcblx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBFbGVtZW50ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDbGlja091dHNpZGVEaXJlY3RpdmUub25DbGljaycsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0YXJnZXRFbGVtZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSk7XHJcblx0XHQvLyBjb25zdCBkb2N1bWVudENvbnRhaW5lZDogYm9vbGVhbiA9IEJvb2xlYW4oZG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0RWxlbWVudCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50LCBkb2N1bWVudENvbnRhaW5lZCk7XHJcblx0XHRjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkgfHwgIWRvY3VtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG5cdFx0aWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcblx0XHRcdHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==