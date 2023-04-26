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
export class OnceService {
    /**
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(platformId, zone) {
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
    script(url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                /** @type {?} */
                let callbackName;
                if (callback === true) {
                    callbackName = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName);
                }
                else {
                    callbackName = (/** @type {?} */ (callback));
                }
                /** @type {?} */
                let callback$;
                /** @type {?} */
                const element = document.createElement('script');
                element.type = 'text/javascript';
                if (callback) {
                    callback$ = from(new Promise((/**
                     * @param {?} resolve
                     * @param {?} reject
                     * @return {?}
                     */
                    (resolve, reject) => {
                        window[callbackName] = (/**
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
                    x => (/** @type {?} */ (x)))));
                }
                /** @type {?} */
                const scripts = document.getElementsByTagName('script');
                if (scripts.length) {
                    /** @type {?} */
                    const script = scripts[scripts.length - 1];
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
    }
}
OnceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OnceService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ OnceService.ngInjectableDef = i0.defineInjectable({ factory: function OnceService_Factory() { return new OnceService(i0.inject(i0.PLATFORM_ID), i0.inject(i0.NgZone)); }, token: OnceService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPckMsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBS3ZCLFlBQzhCLFVBQWtCLEVBQ3ZDLElBQVk7UUFEUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFMYixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFLekIsQ0FBQzs7Ozs7O0lBRUwsTUFBTSxDQUFDLEdBQVcsRUFBRSxRQUEyQjtRQUM5QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNqQixZQUFvQjtnQkFDeEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUN0QixZQUFZLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ04sWUFBWSxHQUFHLG1CQUFBLFFBQVEsRUFBVSxDQUFDO2lCQUNsQzs7b0JBQ0csU0FBMEI7O3NCQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxFQUFFO29CQUNiLFNBQVMsR0FBRyxJQUFJLENBQ2YsSUFBSSxPQUFPOzs7OztvQkFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTt3QkFDL0IsTUFBTSxDQUFDLFlBQVksQ0FBQzs7Ozt3QkFBRyxVQUFVLElBQUk7NEJBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZixDQUFDLENBQUEsQ0FBQztvQkFDSCxDQUFDLEVBQUMsQ0FDRixDQUFDO2lCQUNGO3FCQUFNO29CQUNOLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBQSxDQUFDLEVBQVMsRUFBQyxDQUNwQixDQUFDO2lCQUNGOztzQkFDSyxPQUFPLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOzswQkFDYixNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsT0FBTyxTQUFTLENBQUM7YUFDakI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE1BQU07U0FDTjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7WUF4REQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQU9FLE1BQU0sU0FBQyxXQUFXO1lBZlEsTUFBTTs7Ozs7Ozs7SUFXbEMsMEJBQXdCOzs7OztJQUN4Qiw0QkFBNkI7Ozs7O0lBRzVCLGlDQUErQzs7Ozs7SUFDL0MsMkJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbSwgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgT25jZUV2ZW50IGV4dGVuZHMgRXZlbnQgeyB9XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmNlU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgdWlkOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgcGF0aHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuXHQpIHsgfVxyXG5cclxuXHRzY3JpcHQodXJsOiBzdHJpbmcsIGNhbGxiYWNrPzogc3RyaW5nIHwgYm9vbGVhbik6IE9ic2VydmFibGU8RXZlbnQ+IHtcclxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcblx0XHRcdC8vICEhISB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG5cdFx0XHRpZiAodGhpcy5wYXRocy5pbmRleE9mKHVybCkgPT09IC0xKSB7XHJcblx0XHRcdFx0dGhpcy5wYXRocy5wdXNoKHVybCk7XHJcblx0XHRcdFx0bGV0IGNhbGxiYWNrTmFtZTogc3RyaW5nO1xyXG5cdFx0XHRcdGlmIChjYWxsYmFjayA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gJ09uY2VDYWxsYmFjaycgKyAoKyt0aGlzLnVpZCk7XHJcblx0XHRcdFx0XHR1cmwgPSB1cmwuc3BsaXQoJ3t7Y2FsbGJhY2t9fScpLmpvaW4oY2FsbGJhY2tOYW1lKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gY2FsbGJhY2sgYXMgc3RyaW5nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgY2FsbGJhY2skOiBPYnNlcnZhYmxlPGFueT47XHJcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cdFx0XHRcdGVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRcdGlmIChjYWxsYmFjaykge1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbShcclxuXHRcdFx0XHRcdFx0bmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuYXN5bmMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbUV2ZW50KGVsZW1lbnQsICdsb2FkJykucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHggPT4geCBhcyBFdmVudClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnN0IHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcblx0XHRcdFx0aWYgKHNjcmlwdHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XHJcblx0XHRcdFx0XHRzY3JpcHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgc2NyaXB0Lm5leHRTaWJsaW5nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxlbWVudC5zcmMgPSB1cmw7XHJcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrJDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gb2YobmV3IEV2ZW50KCdsb2FkZWQhJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=