/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ScrollDirective = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollDirective, _super);
    function ScrollDirective(platformId, zone, elementRef) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.zone = zone;
        _this.elementRef = elementRef;
        _this.scroll = new EventEmitter();
        _this.scrollEvent = new Observable(function (observer) {
            return _this.zone.runOutsideAngular(function () {
                return fromEvent(_this.elementRef.nativeElement, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            });
        });
        _this.scrollDocumentEvent = new Observable(function (observer) {
            return _this.zone.runOutsideAngular(function () {
                return fromEvent(window.document, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            });
            /*
            this.zone.runOutsideAngular(() => {
                this.renderer.listenGlobal('window', 'scroll', () => {
                    console.log('scrolling');
                });
            });
            */
        });
        return _this;
    }
    /**
     * @return {?}
     */
    ScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.scrollDocumentEvent.subscribe(function (event) {
            /** @type {?} */
            var e = {
                scrollHeight: document.scrollingElement.scrollHeight,
                scrollLeft: document.scrollingElement.scrollLeft,
                scrollTop: document.scrollingElement.scrollTop,
                scrollWidth: document.scrollingElement.scrollWidth,
                originalEvent: event,
            };
            _this.scroll.emit(e);
        });
    };
    ScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scroll]'
                },] }
    ];
    /** @nocollapse */
    ScrollDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone },
        { type: ElementRef }
    ]; };
    ScrollDirective.propDecorators = {
        scroll: [{ type: Output }]
    };
    return ScrollDirective;
}(DisposableComponent));
export { ScrollDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollDirective.prototype.eventOptions;
    /** @type {?} */
    ScrollDirective.prototype.scroll;
    /**
     * @type {?}
     * @private
     */
    ScrollDirective.prototype.scrollEvent;
    /**
     * @type {?}
     * @private
     */
    ScrollDirective.prototype.scrollDocumentEvent;
    /**
     * @type {?}
     * @private
     */
    ScrollDirective.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    ScrollDirective.prototype.zone;
    /**
     * @type {?}
     * @protected
     */
    ScrollDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUdxQywyQ0FBbUI7SUFJdkQseUJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDVixVQUFtQztRQUg5QyxZQUtDLGlCQUFPLFNBQ1A7UUFMNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNWLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUs3QixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFzQixJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQXlCO1lBQ2pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbEMsT0FBTyxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO3FCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSyx5QkFBbUIsR0FBc0IsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUF5QjtZQUN6RixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2xDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0g7Ozs7OztjQU1FO1FBQ0gsQ0FBQyxDQUFDLENBQUM7O0lBekJILENBQUM7Ozs7SUEyQkQsa0NBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3hDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLOztnQkFDakMsQ0FBQyxHQUFHO2dCQUNULFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtnQkFDcEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO2dCQUNoRCxTQUFTLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Z0JBQzlDLFdBQVcsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDbEQsYUFBYSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O2dCQXRERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFVBQVU7aUJBQ3BCOzs7OzZDQU1FLE1BQU0sU0FBQyxXQUFXO2dCQWJpQyxNQUFNO2dCQUF4QyxVQUFVOzs7eUJBb0I1QixNQUFNOztJQWdHUixzQkFBQztDQUFBLEFBL0dELENBR3FDLG1CQUFtQixHQTRHdkQ7U0E1R1ksZUFBZTs7Ozs7O0lBRTNCLHVDQUF5RTs7SUFVekUsaUNBQTZDOzs7OztJQUU3QyxzQ0FNRzs7Ozs7SUFFSCw4Q0FhRzs7Ozs7SUE5QkYscUNBQStDOzs7OztJQUMvQywrQkFBb0I7Ozs7O0lBQ3BCLHFDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3Njcm9sbF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cblx0cHJpdmF0ZSBldmVudE9wdGlvbnM6IGJvb2xlYW4gfCB7IGNhcHR1cmU/OiBib29sZWFuLCBwYXNzaXZlPzogYm9vbGVhbiB9O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHRcdHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdEBPdXRwdXQoKSBwdWJsaWMgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByaXZhdGUgc2Nyb2xsRXZlbnQ6IE9ic2VydmFibGU8RXZlbnQ+ID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFdmVudD4pID0+IHtcblx0XHRyZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHJldHVybiBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXG5cdFx0XHRcdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHRwcml2YXRlIHNjcm9sbERvY3VtZW50RXZlbnQ6IE9ic2VydmFibGU8RXZlbnQ+ID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFdmVudD4pID0+IHtcblx0XHRyZXR1cm4gdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHJldHVybiBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKG9ic2VydmVyKTtcblx0XHR9KTtcblx0XHQvKlxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnd2luZG93JywgJ3Njcm9sbCcsICgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Njcm9sbGluZycpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ki9cblx0fSk7XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0aWYgKCFpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc2Nyb2xsRG9jdW1lbnRFdmVudC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuXHRcdFx0Y29uc3QgZSA9IHtcblx0XHRcdFx0c2Nyb2xsSGVpZ2h0OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbEhlaWdodCxcblx0XHRcdFx0c2Nyb2xsTGVmdDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0LFxuXHRcdFx0XHRzY3JvbGxUb3A6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wLFxuXHRcdFx0XHRzY3JvbGxXaWR0aDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxXaWR0aCxcblx0XHRcdFx0b3JpZ2luYWxFdmVudDogZXZlbnQsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zY3JvbGwuZW1pdChlKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qXG5cdHJlZ2lzdGVyKCkge1xuXHRcdHRoaXMuc3VwcG9ydFBhc3NpdmVFdmVudHMoKS5zdWJzY3JpYmUoc3VwcG9ydGVkID0+IHtcblx0XHRcdGlmIChzdXBwb3J0ZWQpIHsgLy8gdXNlIHRoZSBpbXBsZW1lbnRhdGlvbiBvbiBtb3ppbGxhXG5cdFx0XHRcdHRoaXMuZXZlbnRPcHRpb25zID0ge1xuXHRcdFx0XHRcdGNhcHR1cmU6IHRydWUsXG5cdFx0XHRcdFx0cGFzc2l2ZTogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5ldmVudE9wdGlvbnMgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIDxhbnk+dGhpcy5ldmVudE9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHQvLyB1bmZvcnR1bmF0ZWx5IHRoZSBjb21waWxlciBkb2Vzbid0IGtub3cgeWV0IGFib3V0IHRoaXMgb2JqZWN0LCBzbyBjYXN0IHRvIGFueVxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCA8YW55PnRoaXMuZXZlbnRPcHRpb25zKTtcblx0fVxuXG5cdHN1cHBvcnRQYXNzaXZlRXZlbnRzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBvcHRpb25zID0ge1xuXHRcdFx0XHRcdGdldCBwYXNzaXZlKCkge1xuXHRcdFx0XHRcdFx0Ly8gUXVlc3RhIGZ1bnppb25lIHZlcnLDoCBjaGlhbWF0YSBxdWFuZG8gaWwgYnJvd3NlclxuXHRcdFx0XHRcdFx0Ly8gdGVudGEgZGkgYWNjZWRlcmUgYWxsYSBwcm9wcmlldMOgIHBhc3NpdmEuXG5cdFx0XHRcdFx0XHRwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG5cdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHR9KSk7XG5cdH1cblxuXHRvblNjcm9sbCA9IChlOiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdHRoaXMuc2Nyb2xsLmVtaXQoZSk7XG5cdFx0Y29uc3Qgc29tZXRoaW5nTWFqb3JIYXNIYXBwZW5lZFRpbWVUb1RlbGxBbmd1bGFyID0gZmFsc2U7XG5cdFx0aWYgKHNvbWV0aGluZ01ham9ySGFzSGFwcGVuZWRUaW1lVG9UZWxsQW5ndWxhcikge1xuXHRcdFx0dGhpcy56b25lLnJ1bigoKSA9PiB7XG5cdFx0XHRcdC8vIHRoaXMudGVsbEFuZ3VsYXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Ki9cblxufVxuIl19