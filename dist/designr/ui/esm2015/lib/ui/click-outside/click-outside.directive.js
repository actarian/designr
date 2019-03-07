/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
export class ClickOutsideDirective {
    /**
     * @param {?} eventManager
     * @param {?} element
     */
    constructor(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.eventManager.getZone().runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.removeClick = this.eventManager.addGlobalEventListener('document', 'click', (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                this.onClick(e);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeClick();
    }
    // @HostListener('document:click', ['$event'])
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
            if (this.initialFocus) {
                this.initialFocus = false;
                this.eventManager.getZone().run((/**
                 * @return {?}
                 */
                () => {
                    this.clickOutside.emit(null);
                }));
            }
        }
        else {
            this.initialFocus = true;
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
    { type: EventManager },
    { type: ElementRef }
];
ClickOutsideDirective.propDecorators = {
    initialFocus: [{ type: Input }],
    clickOutside: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ClickOutsideDirective.prototype.initialFocus;
    /** @type {?} */
    ClickOutsideDirective.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    ClickOutsideDirective.prototype.removeClick;
    /**
     * @type {?}
     * @private
     */
    ClickOutsideDirective.prototype.eventManager;
    /**
     * @type {?}
     * @private
     */
    ClickOutsideDirective.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS3pELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBTWpDLFlBQ1MsWUFBMEIsRUFDMUIsT0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5uQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsT0FBTzs7OztZQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RGLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUdNLE9BQU8sQ0FBQyxDQUFROztjQUNoQixhQUFhLEdBQVksbUJBQUEsQ0FBQyxDQUFDLE1BQU0sRUFBVzs7Ozs7Y0FJNUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQzdHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7OztZQTNDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjthQUMxQjs7OztZQUpRLFlBQVk7WUFERCxVQUFVOzs7MkJBUTVCLEtBQUs7MkJBQ0wsTUFBTTs7OztJQURQLDZDQUF1Qzs7SUFDdkMsNkNBQTRDOzs7OztJQUM1Qyw0Q0FBOEI7Ozs7O0lBRzdCLDZDQUFrQzs7Ozs7SUFDbEMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QElucHV0KCkgaW5pdGlhbEZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRwcml2YXRlIHJlbW92ZUNsaWNrOiBGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmV2ZW50TWFuYWdlci5nZXRab25lKCkucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlbW92ZUNsaWNrID0gdGhpcy5ldmVudE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZG9jdW1lbnQnLCAnY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub25DbGljayhlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVDbGljaygpO1xyXG5cdH1cclxuXHJcblx0Ly8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcblx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBFbGVtZW50ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDbGlja091dHNpZGVEaXJlY3RpdmUub25DbGljaycsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0YXJnZXRFbGVtZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSk7XHJcblx0XHQvLyBjb25zdCBkb2N1bWVudENvbnRhaW5lZDogYm9vbGVhbiA9IEJvb2xlYW4oZG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0RWxlbWVudCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50LCBkb2N1bWVudENvbnRhaW5lZCk7XHJcblx0XHRjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkgfHwgIWRvY3VtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG5cdFx0aWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcblx0XHRcdGlmICh0aGlzLmluaXRpYWxGb2N1cykge1xyXG5cdFx0XHRcdHRoaXMuaW5pdGlhbEZvY3VzID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5ldmVudE1hbmFnZXIuZ2V0Wm9uZSgpLnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KG51bGwpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxGb2N1cyA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==