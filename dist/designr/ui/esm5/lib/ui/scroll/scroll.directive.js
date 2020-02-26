import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, NgZone, Output, PLATFORM_ID } from '@angular/core';
import { DisposableDirective } from '@designr/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
var ScrollDirective = /** @class */ (function (_super) {
    __extends(ScrollDirective, _super);
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
    ScrollDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.scrollDocumentEvent.subscribe(function (event) {
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
    ScrollDirective.ɵfac = function ScrollDirective_Factory(t) { return new (t || ScrollDirective)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ScrollDirective.ɵdir = i0.ɵɵdefineDirective({ type: ScrollDirective, selectors: [["", "scroll", ""]], outputs: { scroll: "scroll" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return ScrollDirective;
}(DisposableDirective));
export { ScrollDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ScrollDirective, [{
        type: Directive,
        args: [{
                selector: '[scroll]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }, { type: i0.ElementRef }]; }, { scroll: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3Njcm9sbC9zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBcUIsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUzQztJQUdxQyxtQ0FBbUI7SUFJdkQseUJBQzhCLFVBQWtCLEVBQ3ZDLElBQVksRUFDVixVQUFtQztRQUg5QyxZQUtDLGlCQUFPLFNBQ1A7UUFMNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNWLGdCQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUs3QixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyQyxpQkFBVyxHQUFzQixJQUFJLFVBQVUsQ0FBQyxVQUFDLFFBQXlCO1lBQ2pGLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbEMsT0FBTyxTQUFTLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO3FCQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSyx5QkFBbUIsR0FBc0IsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUF5QjtZQUN6RixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2xDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3FCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0g7Ozs7OztjQU1FO1FBQ0gsQ0FBQyxDQUFDLENBQUM7O0lBekJILENBQUM7SUEyQkQsa0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QyxPQUFPO1NBQ1A7UUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUN2QyxJQUFNLENBQUMsR0FBRztnQkFDVCxZQUFZLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7Z0JBQ3BELFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtnQkFDaEQsU0FBUyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2dCQUM5QyxXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVc7Z0JBQ2xELGFBQWEsRUFBRSxLQUFLO2FBQ3BCLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7a0ZBbkRXLGVBQWUsdUJBS2xCLFdBQVc7d0RBTFIsZUFBZTswQkFUNUI7Q0FxSEMsQUEvR0QsQ0FHcUMsbUJBQW1CLEdBNEd2RDtTQTVHWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2FBQ3BCOztzQkFNRSxNQUFNO3VCQUFDLFdBQVc7O2tCQU9uQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZURpcmVjdGl2ZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbc2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGV2ZW50T3B0aW9uczogYm9vbGVhbiB8IHsgY2FwdHVyZT86IGJvb2xlYW4sIHBhc3NpdmU/OiBib29sZWFuIH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG5cdFx0cHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJpdmF0ZSBzY3JvbGxFdmVudDogT2JzZXJ2YWJsZTxFdmVudD4gPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV2ZW50PikgPT4ge1xuXHRcdHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG5cdFx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcblx0XHRcdFx0LnN1YnNjcmliZShvYnNlcnZlcik7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHByaXZhdGUgc2Nyb2xsRG9jdW1lbnRFdmVudDogT2JzZXJ2YWJsZTxFdmVudD4gPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV2ZW50PikgPT4ge1xuXHRcdHJldHVybiB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGZyb21FdmVudCh3aW5kb3cuZG9jdW1lbnQsICdzY3JvbGwnKVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXG5cdFx0XHRcdC5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnc2Nyb2xsaW5nJyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQqL1xuXHR9KTtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zY3JvbGxEb2N1bWVudEV2ZW50LnN1YnNjcmliZShldmVudCA9PiB7XG5cdFx0XHRjb25zdCBlID0ge1xuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuXHRcdFx0XHRzY3JvbGxMZWZ0OiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQsXG5cdFx0XHRcdHNjcm9sbFRvcDogZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AsXG5cdFx0XHRcdHNjcm9sbFdpZHRoOiBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFdpZHRoLFxuXHRcdFx0XHRvcmlnaW5hbEV2ZW50OiBldmVudCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNjcm9sbC5lbWl0KGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Lypcblx0cmVnaXN0ZXIoKSB7XG5cdFx0dGhpcy5zdXBwb3J0UGFzc2l2ZUV2ZW50cygpLnN1YnNjcmliZShzdXBwb3J0ZWQgPT4ge1xuXHRcdFx0aWYgKHN1cHBvcnRlZCkgeyAvLyB1c2UgdGhlIGltcGxlbWVudGF0aW9uIG9uIG1vemlsbGFcblx0XHRcdFx0dGhpcy5ldmVudE9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0Y2FwdHVyZTogdHJ1ZSxcblx0XHRcdFx0XHRwYXNzaXZlOiB0cnVlXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmV2ZW50T3B0aW9ucyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgPGFueT50aGlzLmV2ZW50T3B0aW9ucyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdC8vIHVuZm9ydHVuYXRlbHkgdGhlIGNvbXBpbGVyIGRvZXNuJ3Qga25vdyB5ZXQgYWJvdXQgdGhpcyBvYmplY3QsIHNvIGNhc3QgdG8gYW55XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIDxhbnk+dGhpcy5ldmVudE9wdGlvbnMpO1xuXHR9XG5cblx0c3VwcG9ydFBhc3NpdmVFdmVudHMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIGZyb20obmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0Z2V0IHBhc3NpdmUoKSB7XG5cdFx0XHRcdFx0XHQvLyBRdWVzdGEgZnVuemlvbmUgdmVycsOgIGNoaWFtYXRhIHF1YW5kbyBpbCBicm93c2VyXG5cdFx0XHRcdFx0XHQvLyB0ZW50YSBkaSBhY2NlZGVyZSBhbGxhIHByb3ByaWV0w6AgcGFzc2l2YS5cblx0XHRcdFx0XHRcdHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcblx0XHRcdHJlc29sdmUoZmFsc2UpO1xuXHRcdH0pKTtcblx0fVxuXG5cdG9uU2Nyb2xsID0gKGU6IEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0dGhpcy5zY3JvbGwuZW1pdChlKTtcblx0XHRjb25zdCBzb21ldGhpbmdNYWpvckhhc0hhcHBlbmVkVGltZVRvVGVsbEFuZ3VsYXIgPSBmYWxzZTtcblx0XHRpZiAoc29tZXRoaW5nTWFqb3JIYXNIYXBwZW5lZFRpbWVUb1RlbGxBbmd1bGFyKSB7XG5cdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IHtcblx0XHRcdFx0Ly8gdGhpcy50ZWxsQW5ndWxhcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHQqL1xuXG59XG4iXX0=