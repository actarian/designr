/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        _this.scrollEvent = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return fromEvent(_this.elementRef.nativeElement, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            }));
        }));
        _this.scrollDocumentEvent = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return fromEvent(window.document, 'scroll')
                    .pipe(takeUntil(_this.unsubscribe))
                    .subscribe(observer);
            }));
            /*
            this.zone.runOutsideAngular(() => {
                this.renderer.listenGlobal('window', 'scroll', () => {
                    console.log('scrolling');
                });
            });
            */
        }));
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
        this.scrollDocumentEvent.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var e = {
                scrollHeight: document.scrollingElement.scrollHeight,
                scrollLeft: document.scrollingElement.scrollLeft,
                scrollTop: document.scrollingElement.scrollTop,
                scrollWidth: document.scrollingElement.scrollWidth,
                originalEvent: event,
            };
            _this.scroll.emit(e);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUdxQywyQ0FBbUI7SUFJdkQseUJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDVixVQUFtQztRQUg5QyxZQUtDLGlCQUFPLFNBQ1A7UUFMNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNWLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUs3QixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFzQixJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXlCO1lBQ2pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUNsQyxPQUFPLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7cUJBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNqQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVLLHlCQUFtQixHQUFzQixJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXlCO1lBQ3pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUNsQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztxQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztZQUNIOzs7Ozs7Y0FNRTtRQUNILENBQUMsRUFBQyxDQUFDOztJQXpCSCxDQUFDOzs7O0lBMkJELGtDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSzs7Z0JBQ2pDLENBQUMsR0FBRztnQkFDVCxZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7Z0JBQ3BELFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtnQkFDaEQsU0FBUyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUM5QyxXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVc7Z0JBQ2xELGFBQWEsRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkF0REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO2lCQUNwQjs7Ozs2Q0FNRSxNQUFNLFNBQUMsV0FBVztnQkFiaUMsTUFBTTtnQkFBeEMsVUFBVTs7O3lCQW9CNUIsTUFBTTs7SUFnR1Isc0JBQUM7Q0FBQSxBQS9HRCxDQUdxQyxtQkFBbUIsR0E0R3ZEO1NBNUdZLGVBQWU7Ozs7OztJQUUzQix1Q0FBeUU7O0lBVXpFLGlDQUE2Qzs7Ozs7SUFFN0Msc0NBTUc7Ozs7O0lBRUgsOENBYUc7Ozs7O0lBOUJGLHFDQUErQzs7Ozs7SUFDL0MsK0JBQW9COzs7OztJQUNwQixxQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW3Njcm9sbF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRwcml2YXRlIGV2ZW50T3B0aW9uczogYm9vbGVhbiB8IHsgY2FwdHVyZT86IGJvb2xlYW4sIHBhc3NpdmU/OiBib29sZWFuIH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHRcdHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHJpdmF0ZSBzY3JvbGxFdmVudDogT2JzZXJ2YWJsZTxFdmVudD4gPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV2ZW50PikgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdHJldHVybiBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxyXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRwcml2YXRlIHNjcm9sbERvY3VtZW50RXZlbnQ6IE9ic2VydmFibGU8RXZlbnQ+ID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxFdmVudD4pID0+IHtcclxuXHRcdHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ3Njcm9sbCcpXHJcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG5cdFx0fSk7XHJcblx0XHQvKlxyXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3Njcm9sbGluZycpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHR9KTtcclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zY3JvbGxEb2N1bWVudEV2ZW50LnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0IGUgPSB7XHJcblx0XHRcdFx0c2Nyb2xsSGVpZ2h0OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbEhlaWdodCxcclxuXHRcdFx0XHRzY3JvbGxMZWZ0OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQsXHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCxcclxuXHRcdFx0XHRzY3JvbGxXaWR0aDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxXaWR0aCxcclxuXHRcdFx0XHRvcmlnaW5hbEV2ZW50OiBldmVudCxcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5zY3JvbGwuZW1pdChlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LypcclxuXHRyZWdpc3RlcigpIHtcclxuXHRcdHRoaXMuc3VwcG9ydFBhc3NpdmVFdmVudHMoKS5zdWJzY3JpYmUoc3VwcG9ydGVkID0+IHtcclxuXHRcdFx0aWYgKHN1cHBvcnRlZCkgeyAvLyB1c2UgdGhlIGltcGxlbWVudGF0aW9uIG9uIG1vemlsbGFcclxuXHRcdFx0XHR0aGlzLmV2ZW50T3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdGNhcHR1cmU6IHRydWUsXHJcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmV2ZW50T3B0aW9ucyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgPGFueT50aGlzLmV2ZW50T3B0aW9ucyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHVuZm9ydHVuYXRlbHkgdGhlIGNvbXBpbGVyIGRvZXNuJ3Qga25vdyB5ZXQgYWJvdXQgdGhpcyBvYmplY3QsIHNvIGNhc3QgdG8gYW55XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgPGFueT50aGlzLmV2ZW50T3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRzdXBwb3J0UGFzc2l2ZUV2ZW50cygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiBmcm9tKG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0Z2V0IHBhc3NpdmUoKSB7XHJcblx0XHRcdFx0XHRcdC8vIFF1ZXN0YSBmdW56aW9uZSB2ZXJyw6AgY2hpYW1hdGEgcXVhbmRvIGlsIGJyb3dzZXJcclxuXHRcdFx0XHRcdFx0Ly8gdGVudGEgZGkgYWNjZWRlcmUgYWxsYSBwcm9wcmlldMOgIHBhc3NpdmEuXHJcblx0XHRcdFx0XHRcdHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XHJcblx0XHRcdHJlc29sdmUoZmFsc2UpO1xyXG5cdFx0fSkpO1xyXG5cdH1cclxuXHJcblx0b25TY3JvbGwgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0dGhpcy5zY3JvbGwuZW1pdChlKTtcclxuXHRcdGNvbnN0IHNvbWV0aGluZ01ham9ySGFzSGFwcGVuZWRUaW1lVG9UZWxsQW5ndWxhciA9IGZhbHNlO1xyXG5cdFx0aWYgKHNvbWV0aGluZ01ham9ySGFzSGFwcGVuZWRUaW1lVG9UZWxsQW5ndWxhcikge1xyXG5cdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuXHRcdFx0XHQvLyB0aGlzLnRlbGxBbmd1bGFyKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0Ki9cclxuXHJcbn1cclxuIl19