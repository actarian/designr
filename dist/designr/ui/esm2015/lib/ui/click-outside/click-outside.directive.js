import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class ClickOutsideDirective {
    constructor(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    ngOnInit() {
        this.eventManager.getZone().runOutsideAngular(() => {
            this.removeClick = this.eventManager.addGlobalEventListener('document', 'click', (e) => {
                this.onClick(e);
            });
        });
    }
    ngOnDestroy() {
        this.removeClick();
    }
    // @HostListener('document:click', ['$event'])
    onClick(e) {
        const targetElement = e.target;
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
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
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i1.EventManager), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ClickOutsideDirective.ɵdir = i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], inputs: { initialFocus: "initialFocus" }, outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ClickOutsideDirective, [{
        type: Directive,
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: i1.EventManager }, { type: i0.ElementRef }]; }, { initialFocus: [{
            type: Input
        }], clickOutside: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUt6RCxNQUFNLE9BQU8scUJBQXFCO0lBTWpDLFlBQ1MsWUFBMEIsRUFDMUIsT0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU5uQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNeEMsQ0FBQztJQUVMLFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOENBQThDO0lBQ3ZDLE9BQU8sQ0FBQyxDQUFRO1FBQ3RCLE1BQU0sYUFBYSxHQUFZLENBQUMsQ0FBQyxNQUFpQixDQUFDO1FBQ25ELCtJQUErSTtRQUMvSSxxSUFBcUk7UUFDckksaURBQWlEO1FBQ2pELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQzthQUNIO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7MEZBeENXLHFCQUFxQjswREFBckIscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FIakMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7YUFDMUI7O2tCQUdDLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBpbml0aWFsRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAT3V0cHV0KCkgY2xpY2tPdXRzaWRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdHByaXZhdGUgcmVtb3ZlQ2xpY2s6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIsXHJcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZXZlbnRNYW5hZ2VyLmdldFpvbmUoKS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdHRoaXMucmVtb3ZlQ2xpY2sgPSB0aGlzLmV2ZW50TWFuYWdlci5hZGRHbG9iYWxFdmVudExpc3RlbmVyKCdkb2N1bWVudCcsICdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5vbkNsaWNrKGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnJlbW92ZUNsaWNrKCk7XHJcblx0fVxyXG5cclxuXHQvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcblx0cHVibGljIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuXHRcdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEVsZW1lbnQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ0NsaWNrT3V0c2lkZURpcmVjdGl2ZS5vbkNsaWNrJywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRhcmdldEVsZW1lbnQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpKTtcclxuXHRcdC8vIGNvbnN0IGRvY3VtZW50Q29udGFpbmVkOiBib29sZWFuID0gQm9vbGVhbihkb2N1bWVudC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0YXJnZXRFbGVtZW50KSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fQ09OVEFJTkVEX0JZKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRhcmdldEVsZW1lbnQsIGRvY3VtZW50Q29udGFpbmVkKTtcclxuXHRcdGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSB8fCAhZG9jdW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcblx0XHRpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuaW5pdGlhbEZvY3VzKSB7XHJcblx0XHRcdFx0dGhpcy5pbml0aWFsRm9jdXMgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmV2ZW50TWFuYWdlci5nZXRab25lKCkucnVuKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQobnVsbCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbEZvY3VzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19