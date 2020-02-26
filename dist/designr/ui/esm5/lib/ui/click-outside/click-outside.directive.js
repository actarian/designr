import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(eventManager, element) {
        this.eventManager = eventManager;
        this.element = element;
        this.initialFocus = false;
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.eventManager.getZone().runOutsideAngular(function () {
            _this.removeClick = _this.eventManager.addGlobalEventListener('document', 'click', function (e) {
                _this.onClick(e);
            });
        });
    };
    ClickOutsideDirective.prototype.ngOnDestroy = function () {
        this.removeClick();
    };
    // @HostListener('document:click', ['$event'])
    ClickOutsideDirective.prototype.onClick = function (e) {
        var _this = this;
        var targetElement = e.target;
        // console.log('ClickOutsideDirective.onClick', this.element.nativeElement, targetElement, this.element.nativeElement.contains(targetElement));
        // const documentContained: boolean = Boolean(document.compareDocumentPosition(targetElement) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        // console.log(targetElement, documentContained);
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
    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(i0.ɵɵdirectiveInject(i1.EventManager), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ClickOutsideDirective.ɵdir = i0.ɵɵdefineDirective({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], inputs: { initialFocus: "initialFocus" }, outputs: { clickOutside: "clickOutside" } });
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci91aS8iLCJzb3VyY2VzIjpbImxpYi91aS9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUV6RDtJQVNDLCtCQUNTLFlBQTBCLEVBQzFCLE9BQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFObkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDN0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXhDLENBQUM7SUFFTCx3Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzdDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQUMsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDhDQUE4QztJQUN2Qyx1Q0FBTyxHQUFkLFVBQWUsQ0FBUTtRQUF2QixpQkFnQkM7UUFmQSxJQUFNLGFBQWEsR0FBWSxDQUFDLENBQUMsTUFBaUIsQ0FBQztRQUNuRCwrSUFBK0k7UUFDL0kscUlBQXFJO1FBQ3JJLGlEQUFpRDtRQUNqRCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQzthQUNIO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs4RkF4Q1cscUJBQXFCOzhEQUFyQixxQkFBcUI7Z0NBTmxDO0NBK0NDLEFBNUNELElBNENDO1NBekNZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsZ0JBQWdCO2FBQzFCOztrQkFHQyxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENsaWNrT3V0c2lkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QElucHV0KCkgaW5pdGlhbEZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRwcml2YXRlIHJlbW92ZUNsaWNrOiBGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmXHJcblx0KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmV2ZW50TWFuYWdlci5nZXRab25lKCkucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlbW92ZUNsaWNrID0gdGhpcy5ldmVudE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcignZG9jdW1lbnQnLCAnY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMub25DbGljayhlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5yZW1vdmVDbGljaygpO1xyXG5cdH1cclxuXHJcblx0Ly8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG5cdHB1YmxpYyBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcblx0XHRjb25zdCB0YXJnZXRFbGVtZW50OiBFbGVtZW50ID0gZS50YXJnZXQgYXMgRWxlbWVudDtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdDbGlja091dHNpZGVEaXJlY3RpdmUub25DbGljaycsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0YXJnZXRFbGVtZW50LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSk7XHJcblx0XHQvLyBjb25zdCBkb2N1bWVudENvbnRhaW5lZDogYm9vbGVhbiA9IEJvb2xlYW4oZG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0RWxlbWVudCkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0YXJnZXRFbGVtZW50LCBkb2N1bWVudENvbnRhaW5lZCk7XHJcblx0XHRjb25zdCBjbGlja2VkSW5zaWRlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkgfHwgIWRvY3VtZW50LmNvbnRhaW5zKHRhcmdldEVsZW1lbnQpO1xyXG5cdFx0aWYgKCFjbGlja2VkSW5zaWRlKSB7XHJcblx0XHRcdGlmICh0aGlzLmluaXRpYWxGb2N1cykge1xyXG5cdFx0XHRcdHRoaXMuaW5pdGlhbEZvY3VzID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5ldmVudE1hbmFnZXIuZ2V0Wm9uZSgpLnJ1bigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KG51bGwpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxGb2N1cyA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==