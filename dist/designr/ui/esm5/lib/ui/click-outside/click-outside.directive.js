/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ClickOutsideDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.eventManager.getZone().runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this.removeClick = _this.eventManager.addGlobalEventListener('document', 'click', (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.onClick(e);
            }));
        }));
    };
    /**
     * @return {?}
     */
    ClickOutsideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeClick();
    };
    // @HostListener('document:click', ['$event'])
    // @HostListener('document:click', ['$event'])
    /**
     * @param {?} e
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = 
    // @HostListener('document:click', ['$event'])
    /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        /** @type {?} */
        var targetElement = (/** @type {?} */ (e.target));
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
        /** @type {?} */
        var clickedInside = this.element.nativeElement.contains(targetElement) || !document.contains(targetElement);
        if (!clickedInside) {
            if (this.initialFocus) {
                this.initialFocus = false;
                this.eventManager.getZone().run((/**
                 * @return {?}
                 */
                function () {
                    _this.clickOutside.emit(null);
                }));
            }
        }
        else {
            this.initialFocus = true;
        }
    };
    ClickOutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[clickOutside]'
                },] }
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: EventManager },
        { type: ElementRef }
    ]; };
    ClickOutsideDirective.propDecorators = {
        initialFocus: [{ type: Input }],
        clickOutside: [{ type: Output }]
    };
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBU0MsK0JBQ1MsWUFBMEIsRUFDMUIsT0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5uQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQzs7OztJQUVMLHdDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUI7OztRQUFDO1lBQzdDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsT0FBTzs7OztZQUFFLFVBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOENBQThDOzs7Ozs7SUFDdkMsdUNBQU87Ozs7OztJQUFkLFVBQWUsQ0FBUTtRQUF2QixpQkFnQkM7O1lBZk0sYUFBYSxHQUFZLG1CQUFBLENBQUMsQ0FBQyxNQUFNLEVBQVc7Ozs7O1lBSTVDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM3RyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRzs7O2dCQUFDO29CQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxFQUFDLENBQUM7YUFDSDtTQUNEO2FBQU07WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNGLENBQUM7O2dCQTNDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtpQkFDMUI7Ozs7Z0JBSlEsWUFBWTtnQkFERCxVQUFVOzs7K0JBUTVCLEtBQUs7K0JBQ0wsTUFBTTs7SUFzQ1IsNEJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXpDWSxxQkFBcUI7OztJQUVqQyw2Q0FBdUM7O0lBQ3ZDLDZDQUE0Qzs7Ozs7SUFDNUMsNENBQThCOzs7OztJQUc3Qiw2Q0FBa0M7Ozs7O0lBQ2xDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2NsaWNrT3V0c2lkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGlja091dHNpZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdEBJbnB1dCgpIGluaXRpYWxGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBPdXRwdXQoKSBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0cHJpdmF0ZSByZW1vdmVDbGljazogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcixcclxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZlxyXG5cdCkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5ldmVudE1hbmFnZXIuZ2V0Wm9uZSgpLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yZW1vdmVDbGljayA9IHRoaXMuZXZlbnRNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoJ2RvY3VtZW50JywgJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHR0aGlzLm9uQ2xpY2soZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMucmVtb3ZlQ2xpY2soKTtcclxuXHR9XHJcblxyXG5cdC8vIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuXHRwdWJsaWMgb25DbGljayhlOiBFdmVudCkge1xyXG5cdFx0Y29uc3QgdGFyZ2V0RWxlbWVudDogRWxlbWVudCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLm9uQ2xpY2snLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpO1xyXG5cdFx0Ly8gY29uc3QgZG9jdW1lbnRDb250YWluZWQ6IGJvb2xlYW4gPSBCb29sZWFuKGRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHRhcmdldEVsZW1lbnQpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGFyZ2V0RWxlbWVudCwgZG9jdW1lbnRDb250YWluZWQpO1xyXG5cdFx0Y29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpIHx8ICFkb2N1bWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuXHRcdGlmICghY2xpY2tlZEluc2lkZSkge1xyXG5cdFx0XHRpZiAodGhpcy5pbml0aWFsRm9jdXMpIHtcclxuXHRcdFx0XHR0aGlzLmluaXRpYWxGb2N1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRNYW5hZ2VyLmdldFpvbmUoKS5ydW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGlja091dHNpZGUuZW1pdChudWxsKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsRm9jdXMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=