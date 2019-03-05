/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.eventManager.getZone().runOutsideAngular(function () {
            _this.removeClick = _this.eventManager.addGlobalEventListener('document', 'click', function (e) {
                _this.onClick(e);
            });
        });
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
                this.eventManager.getZone().run(function () {
                    _this.clickOutside.emit(null);
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBU0MsK0JBQ1MsWUFBMEIsRUFDMUIsT0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5uQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQzs7OztJQUVMLHdDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztZQUM3QyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQ2xGLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDhDQUE4Qzs7Ozs7O0lBQ3ZDLHVDQUFPOzs7Ozs7SUFBZCxVQUFlLENBQVE7UUFBdkIsaUJBZ0JDOztZQWZNLGFBQWEsR0FBWSxtQkFBQSxDQUFDLENBQUMsTUFBTSxFQUFXOzs7OztZQUk1QyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDN0csSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQztvQkFDL0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2FBQ0g7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDRixDQUFDOztnQkEzQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzFCOzs7O2dCQUpRLFlBQVk7Z0JBREQsVUFBVTs7OytCQVE1QixLQUFLOytCQUNMLE1BQU07O0lBc0NSLDRCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F6Q1kscUJBQXFCOzs7SUFFakMsNkNBQXVDOztJQUN2Qyw2Q0FBNEM7Ozs7O0lBQzVDLDRDQUE4Qjs7Ozs7SUFHN0IsNkNBQWtDOzs7OztJQUNsQyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBpbml0aWFsRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAT3V0cHV0KCkgY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdHByaXZhdGUgcmVtb3ZlQ2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZXZlbnRNYW5hZ2VyLmdldFpvbmUoKS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdHRoaXMucmVtb3ZlQ2xpY2sgPSB0aGlzLmV2ZW50TWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5vbkNsaWNrKGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnJlbW92ZUNsaWNrKCk7XHJcblx0fVxyXG5cclxuXHQvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcblx0cHVibGljIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEVsZW1lbnQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0NsaWNrT3V0c2lkZURpcmVjdGl2ZS5vbkNsaWNrJywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRhcmdldEVsZW1lbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKTtcclxuXHRcdC8vIGNvbnN0IGRvY3VtZW50Q29udGFpbmVkOiBib29sZWFuID0gQm9vbGVhbihkb2N1bWVudC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0YXJnZXRFbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRhcmdldEVsZW1lbnQsIGRvY3VtZW50Q29udGFpbmVkKTtcclxuXHRcdGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSB8fCAhZG9jdW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcblx0XHRpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbEZvY3VzKSB7XHJcblx0XHRcdFx0dGhpcy5pbml0aWFsRm9jdXMgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmV2ZW50TWFuYWdlci5nZXRab25lKCkucnVuKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQobnVsbCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbEZvY3VzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19