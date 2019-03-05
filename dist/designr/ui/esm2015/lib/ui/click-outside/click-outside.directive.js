/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.eventManager.getZone().runOutsideAngular(() => {
            this.removeClick = this.eventManager.addGlobalEventListener('document', 'click', (e) => {
                this.onClick(e);
            });
        });
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
                this.eventManager.getZone().run(() => {
                    this.clickOutside.emit(null);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS3pELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBTWpDLFlBQ1MsWUFBMEIsRUFDMUIsT0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5uQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFHTSxPQUFPLENBQUMsQ0FBUTs7Y0FDaEIsYUFBYSxHQUFZLG1CQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVc7Ozs7O2NBSTVDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM3RyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2FBQ0g7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7YUFDMUI7Ozs7WUFKUSxZQUFZO1lBREQsVUFBVTs7OzJCQVE1QixLQUFLOzJCQUNMLE1BQU07Ozs7SUFEUCw2Q0FBdUM7O0lBQ3ZDLDZDQUE0Qzs7Ozs7SUFDNUMsNENBQThCOzs7OztJQUc3Qiw2Q0FBa0M7Ozs7O0lBQ2xDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2NsaWNrT3V0c2lkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBJbnB1dCgpIGluaXRpYWxGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBPdXRwdXQoKSBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0cHJpdmF0ZSByZW1vdmVDbGljazogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcclxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5ldmVudE1hbmFnZXIuZ2V0Wm9uZSgpLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yZW1vdmVDbGljayA9IHRoaXMuZXZlbnRNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RvY3VtZW50JywgJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9uQ2xpY2soZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMucmVtb3ZlQ2xpY2soKTtcclxuXHR9XHJcblxyXG5cdC8vIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25DbGljayhlOiBFdmVudCkge1xyXG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogRWxlbWVudCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLm9uQ2xpY2snLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpO1xyXG5cdFx0Ly8gY29uc3QgZG9jdW1lbnRDb250YWluZWQ6IGJvb2xlYW4gPSBCb29sZWFuKGRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRhcmdldEVsZW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCwgZG9jdW1lbnRDb250YWluZWQpO1xyXG5cdFx0Y29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpIHx8ICFkb2N1bWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuXHRcdGlmICghY2xpY2tlZEluc2lkZSkge1xyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsRm9jdXMpIHtcclxuXHRcdFx0XHR0aGlzLmluaXRpYWxGb2N1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRNYW5hZ2VyLmdldFpvbmUoKS5ydW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGlja091dHNpZGUuZW1pdChudWxsKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsRm9jdXMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=