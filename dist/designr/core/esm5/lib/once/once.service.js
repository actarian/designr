/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
// export class OnceEvent extends Event { }
var OnceService = /** @class */ (function () {
    function OnceService(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.uid = 0;
        this.paths = [];
    }
    /**
     * @param {?} url
     * @param {?=} callback
     * @return {?}
     */
    OnceService.prototype.script = /**
     * @param {?} url
     * @param {?=} callback
     * @return {?}
     */
    function (url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                /** @type {?} */
                var callbackName_1;
                if (callback === true) {
                    callbackName_1 = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName_1);
                }
                else {
                    callbackName_1 = (/** @type {?} */ (callback));
                }
                /** @type {?} */
                var callback$ = void 0;
                /** @type {?} */
                var element = document.createElement('script');
                element.type = 'text/javascript';
                if (callback) {
                    callback$ = from(new Promise((/**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */
                    function (resolve, reject) {
                        window[callbackName_1] = (/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) {
                            resolve(data);
                        });
                    })));
                }
                else {
                    element.async = true;
                    callback$ = fromEvent(element, 'load').pipe(map((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return (/** @type {?} */ (x)); })));
                }
                /** @type {?} */
                var scripts = document.getElementsByTagName('script');
                if (scripts.length) {
                    /** @type {?} */
                    var script = scripts[scripts.length - 1];
                    script.parentNode.insertBefore(element, script.nextSibling);
                }
                element.src = url;
                return callback$;
            }
            else {
                return of(new Event('loaded!'));
            }
            // });
        }
        else {
            return of(null);
        }
    };
    OnceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OnceService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ OnceService.ngInjectableDef = i0.defineInjectable({ factory: function OnceService_Factory() { return new OnceService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: OnceService, providedIn: "root" });
    return OnceService;
}());
export { OnceService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnceService.prototype.uid;
    /**
     * @type {?}
     * @private
     */
    OnceService.prototype.paths;
    /**
     * @type {?}
     * @private
     */
    OnceService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    OnceService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJckM7SUFRQyxxQkFDOEIsVUFBa0IsRUFDdkMsSUFBWTtRQURTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUxiLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQUt6QixDQUFDOzs7Ozs7SUFFTCw0QkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxRQUEyQjtRQUM5QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNqQixjQUFvQjtnQkFDeEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUN0QixjQUFZLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFZLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ04sY0FBWSxHQUFHLG1CQUFBLFFBQVEsRUFBVSxDQUFDO2lCQUNsQzs7b0JBQ0csU0FBUyxTQUFpQjs7b0JBQ3hCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDakMsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsU0FBUyxHQUFHLElBQUksQ0FDZixJQUFJLE9BQU87Ozs7O29CQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzNCLE1BQU0sQ0FBQyxjQUFZLENBQUM7Ozs7d0JBQUcsVUFBVSxJQUFJOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxDQUFBLENBQUM7b0JBQ0gsQ0FBQyxFQUFDLENBQ0YsQ0FBQztpQkFDRjtxQkFBTTtvQkFDTixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDckIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMxQyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxXQUFJLG1CQUFBLENBQUMsRUFBUyxHQUFBLEVBQUMsQ0FDcEIsQ0FBQztpQkFDRjs7b0JBQ0ssT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs7d0JBQ2IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLE9BQU8sU0FBUyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7WUFDRCxNQUFNO1NBQ047YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBeERELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBT0UsTUFBTSxTQUFDLFdBQVc7Z0JBZlEsTUFBTTs7O3NCQURuQztDQWdFQyxBQXpERCxJQXlEQztTQXREWSxXQUFXOzs7Ozs7SUFFdkIsMEJBQXdCOzs7OztJQUN4Qiw0QkFBNkI7Ozs7O0lBRzVCLGlDQUErQzs7Ozs7SUFDL0MsMkJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgT25jZUV2ZW50IGV4dGVuZHMgRXZlbnQgeyB9XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmNlU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgdWlkOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgcGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHQpIHsgfVxyXG5cclxuXHRzY3JpcHQodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogc3RyaW5nIHwgYm9vbGVhbik6IE9ic2VydmFibGU8RXZlbnQ+IHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdC8vICEhISB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5wYXRocy5pbmRleE9mKHVybCkgPT09IC0xKSB7XHJcblx0XHRcdFx0dGhpcy5wYXRocy5wdXNoKHVybCk7XHJcblx0XHRcdFx0bGV0IGNhbGxiYWNrTmFtZTogc3RyaW5nO1xyXG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gJ09uY2VDYWxsYmFjaycgKyAoKyt0aGlzLnVpZCk7XHJcblx0XHRcdFx0XHR1cmwgPSB1cmwuc3BsaXQoJ3t7Y2FsbGJhY2t9fScpLmpvaW4oY2FsbGJhY2tOYW1lKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gY2FsbGJhY2sgYXMgc3RyaW5nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgY2FsbGJhY2skOiBPYnNlcnZhYmxlPGFueT47XHJcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0XHRcdGVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbShcclxuXHRcdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbUV2ZW50KGVsZW1lbnQsICdsb2FkJykucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHggPT4geCBhcyBFdmVudClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcblx0XHRcdFx0aWYgKHNjcmlwdHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgc2NyaXB0Lm5leHRTaWJsaW5nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSB1cmw7XHJcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrJDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YobmV3IEV2ZW50KCdsb2FkZWQhJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=