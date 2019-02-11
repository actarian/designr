/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    callback$ = from(new Promise(function (resolve, reject) {
                        window[callbackName_1] = function (data) {
                            resolve(data);
                        };
                    }));
                }
                else {
                    element.async = true;
                    callback$ = fromEvent(element, 'load').pipe(map(function (x) { return (/** @type {?} */ (x)); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJckM7SUFRQyxxQkFDOEIsVUFBa0IsRUFDdkMsSUFBWTtRQURTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUxiLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQUt6QixDQUFDOzs7Ozs7SUFFTCw0QkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxRQUEyQjtRQUM5QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNqQixjQUFvQjtnQkFDeEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUN0QixjQUFZLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFZLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ04sY0FBWSxHQUFHLG1CQUFBLFFBQVEsRUFBVSxDQUFDO2lCQUNsQzs7b0JBQ0csU0FBUyxTQUFpQjs7b0JBQ3hCLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztnQkFDakMsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsU0FBUyxHQUFHLElBQUksQ0FDZixJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMzQixNQUFNLENBQUMsY0FBWSxDQUFDLEdBQUcsVUFBVSxJQUFJOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUNGLENBQUM7aUJBQ0Y7cUJBQU07b0JBQ04sT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3JCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxXQUFJLG1CQUFBLENBQUMsRUFBUyxHQUFBLENBQUMsQ0FDcEIsQ0FBQztpQkFDRjs7b0JBQ0ssT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs7d0JBQ2IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLE9BQU8sU0FBUyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7WUFDRCxNQUFNO1NBQ047YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Z0JBeERELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBT0UsTUFBTSxTQUFDLFdBQVc7Z0JBZlEsTUFBTTs7O3NCQURuQztDQWdFQyxBQXpERCxJQXlEQztTQXREWSxXQUFXOzs7Ozs7SUFFdkIsMEJBQXdCOzs7OztJQUN4Qiw0QkFBNkI7Ozs7O0lBRzVCLGlDQUErQzs7Ozs7SUFDL0MsMkJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8vIGV4cG9ydCBjbGFzcyBPbmNlRXZlbnQgZXh0ZW5kcyBFdmVudCB7IH1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25jZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgdWlkOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHQpIHsgfVxuXG5cdHNjcmlwdCh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBzdHJpbmcgfCBib29sZWFuKTogT2JzZXJ2YWJsZTxFdmVudD4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBhdGhzLmluZGV4T2YodXJsKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5wYXRocy5wdXNoKHVybCk7XG5cdFx0XHRcdGxldCBjYWxsYmFja05hbWU6IHN0cmluZztcblx0XHRcdFx0aWYgKGNhbGxiYWNrID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gJ09uY2VDYWxsYmFjaycgKyAoKyt0aGlzLnVpZCk7XG5cdFx0XHRcdFx0dXJsID0gdXJsLnNwbGl0KCd7e2NhbGxiYWNrfX0nKS5qb2luKGNhbGxiYWNrTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gY2FsbGJhY2sgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYWxsYmFjayQ6IE9ic2VydmFibGU8YW55Pjtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRlbGVtZW50LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbShcblx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0d2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbUV2ZW50KGVsZW1lbnQsICdsb2FkJykucGlwZShcblx0XHRcdFx0XHRcdG1hcCh4ID0+IHggYXMgRXZlbnQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRpZiAoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCBzY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHNjcmlwdC5uZXh0U2libGluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5zcmMgPSB1cmw7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YobmV3IEV2ZW50KCdsb2FkZWQhJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==