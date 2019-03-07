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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUdxQywyQ0FBbUI7SUFJdkQseUJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDVixVQUFtQztRQUg5QyxZQUtDLGlCQUFPLFNBQ1A7UUFMNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNWLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUs3QixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFzQixJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXlCO1lBQ2pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUNsQyxPQUFPLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7cUJBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FCQUNqQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVLLHlCQUFtQixHQUFzQixJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXlCO1lBQ3pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztZQUFDO2dCQUNsQyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztxQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUMsQ0FBQztZQUNIOzs7Ozs7Y0FNRTtRQUNILENBQUMsRUFBQyxDQUFDOztJQXpCSCxDQUFDOzs7O0lBMkJELGtDQUFROzs7SUFBUjtRQUFBLGlCQWNDO1FBYkEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSzs7Z0JBQ2pDLENBQUMsR0FBRztnQkFDVCxZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7Z0JBQ3BELFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtnQkFDaEQsU0FBUyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUM5QyxXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVc7Z0JBQ2xELGFBQWEsRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkF0REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO2lCQUNwQjs7Ozs2Q0FNRSxNQUFNLFNBQUMsV0FBVztnQkFiaUMsTUFBTTtnQkFBeEMsVUFBVTs7O3lCQW9CNUIsTUFBTTs7SUFnR1Isc0JBQUM7Q0FBQSxBQS9HRCxDQUdxQyxtQkFBbUIsR0E0R3ZEO1NBNUdZLGVBQWU7Ozs7OztJQUUzQix1Q0FBeUU7O0lBVXpFLGlDQUE2Qzs7Ozs7SUFFN0Msc0NBTUc7Ozs7O0lBRUgsOENBYUc7Ozs7O0lBOUJGLHFDQUErQzs7Ozs7SUFDL0MsK0JBQW9COzs7OztJQUNwQixxQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tzY3JvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgZXZlbnRPcHRpb25zOiBib29sZWFuIHwgeyBjYXB0dXJlPzogYm9vbGVhbiwgcGFzc2l2ZT86IGJvb2xlYW4gfTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcblx0XHRwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRAT3V0cHV0KCkgcHVibGljIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcml2YXRlIHNjcm9sbEV2ZW50OiBPYnNlcnZhYmxlPEV2ZW50PiA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXZlbnQ+KSA9PiB7XG5cdFx0cmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKG9ic2VydmVyKTtcblx0XHR9KTtcblx0fSk7XG5cblx0cHJpdmF0ZSBzY3JvbGxEb2N1bWVudEV2ZW50OiBPYnNlcnZhYmxlPEV2ZW50PiA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXZlbnQ+KSA9PiB7XG5cdFx0cmV0dXJuIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcblx0XHRcdFx0LnN1YnNjcmliZShvYnNlcnZlcik7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdzY3JvbGxpbmcnKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdCovXG5cdH0pO1xuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNjcm9sbERvY3VtZW50RXZlbnQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcblx0XHRcdGNvbnN0IGUgPSB7XG5cdFx0XHRcdHNjcm9sbEhlaWdodDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxIZWlnaHQsXG5cdFx0XHRcdHNjcm9sbExlZnQ6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdCxcblx0XHRcdFx0c2Nyb2xsVG9wOiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCxcblx0XHRcdFx0c2Nyb2xsV2lkdGg6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsV2lkdGgsXG5cdFx0XHRcdG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2Nyb2xsLmVtaXQoZSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKlxuXHRyZWdpc3RlcigpIHtcblx0XHR0aGlzLnN1cHBvcnRQYXNzaXZlRXZlbnRzKCkuc3Vic2NyaWJlKHN1cHBvcnRlZCA9PiB7XG5cdFx0XHRpZiAoc3VwcG9ydGVkKSB7IC8vIHVzZSB0aGUgaW1wbGVtZW50YXRpb24gb24gbW96aWxsYVxuXHRcdFx0XHR0aGlzLmV2ZW50T3B0aW9ucyA9IHtcblx0XHRcdFx0XHRjYXB0dXJlOiB0cnVlLFxuXHRcdFx0XHRcdHBhc3NpdmU6IHRydWVcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXZlbnRPcHRpb25zID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCA8YW55PnRoaXMuZXZlbnRPcHRpb25zKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0Ly8gdW5mb3J0dW5hdGVseSB0aGUgY29tcGlsZXIgZG9lc24ndCBrbm93IHlldCBhYm91dCB0aGlzIG9iamVjdCwgc28gY2FzdCB0byBhbnlcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgPGFueT50aGlzLmV2ZW50T3B0aW9ucyk7XG5cdH1cblxuXHRzdXBwb3J0UGFzc2l2ZUV2ZW50cygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gZnJvbShuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRnZXQgcGFzc2l2ZSgpIHtcblx0XHRcdFx0XHRcdC8vIFF1ZXN0YSBmdW56aW9uZSB2ZXJyw6AgY2hpYW1hdGEgcXVhbmRvIGlsIGJyb3dzZXJcblx0XHRcdFx0XHRcdC8vIHRlbnRhIGRpIGFjY2VkZXJlIGFsbGEgcHJvcHJpZXTDoCBwYXNzaXZhLlxuXHRcdFx0XHRcdFx0cGFzc2l2ZVN1cHBvcnRlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwYXNzaXZlU3VwcG9ydGVkO1xuXHRcdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0fSkpO1xuXHR9XG5cblx0b25TY3JvbGwgPSAoZTogRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHR0aGlzLnNjcm9sbC5lbWl0KGUpO1xuXHRcdGNvbnN0IHNvbWV0aGluZ01ham9ySGFzSGFwcGVuZWRUaW1lVG9UZWxsQW5ndWxhciA9IGZhbHNlO1xuXHRcdGlmIChzb21ldGhpbmdNYWpvckhhc0hhcHBlbmVkVGltZVRvVGVsbEFuZ3VsYXIpIHtcblx0XHRcdHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuXHRcdFx0XHQvLyB0aGlzLnRlbGxBbmd1bGFyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdCovXG5cbn1cbiJdfQ==