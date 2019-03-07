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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFPckMsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBS3ZCLFlBQzhCLFVBQWtCLEVBQ3ZDLElBQVk7UUFEUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFNBQUksR0FBSixJQUFJLENBQVE7UUFMYixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBYSxFQUFFLENBQUM7SUFLekIsQ0FBQzs7Ozs7O0lBRUwsTUFBTSxDQUFDLEdBQVcsRUFBRSxRQUEyQjtRQUM5QyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QywwQ0FBMEM7WUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUNqQixZQUFvQjtnQkFDeEIsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO29CQUN0QixZQUFZLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkQ7cUJBQU07b0JBQ04sWUFBWSxHQUFHLG1CQUFBLFFBQVEsRUFBVSxDQUFDO2lCQUNsQzs7b0JBQ0csU0FBMEI7O3NCQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxFQUFFO29CQUNiLFNBQVMsR0FBRyxJQUFJLENBQ2YsSUFBSSxPQUFPOzs7OztvQkFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTt3QkFDL0IsTUFBTSxDQUFDLFlBQVksQ0FBQzs7Ozt3QkFBRyxVQUFVLElBQUk7NEJBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDZixDQUFDLENBQUEsQ0FBQztvQkFDSCxDQUFDLEVBQUMsQ0FDRixDQUFDO2lCQUNGO3FCQUFNO29CQUNOLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNyQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7b0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBQSxDQUFDLEVBQVMsRUFBQyxDQUNwQixDQUFDO2lCQUNGOztzQkFDSyxPQUFPLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOzswQkFDYixNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsT0FBTyxTQUFTLENBQUM7YUFDakI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE1BQU07U0FDTjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7WUF4REQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O3lDQU9FLE1BQU0sU0FBQyxXQUFXO1lBZlEsTUFBTTs7Ozs7Ozs7SUFXbEMsMEJBQXdCOzs7OztJQUN4Qiw0QkFBNkI7Ozs7O0lBRzVCLGlDQUErQzs7Ozs7SUFDL0MsMkJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8vIGV4cG9ydCBjbGFzcyBPbmNlRXZlbnQgZXh0ZW5kcyBFdmVudCB7IH1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25jZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgdWlkOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHQpIHsgfVxuXG5cdHNjcmlwdCh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBzdHJpbmcgfCBib29sZWFuKTogT2JzZXJ2YWJsZTxFdmVudD4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBhdGhzLmluZGV4T2YodXJsKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5wYXRocy5wdXNoKHVybCk7XG5cdFx0XHRcdGxldCBjYWxsYmFja05hbWU6IHN0cmluZztcblx0XHRcdFx0aWYgKGNhbGxiYWNrID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gJ09uY2VDYWxsYmFjaycgKyAoKyt0aGlzLnVpZCk7XG5cdFx0XHRcdFx0dXJsID0gdXJsLnNwbGl0KCd7e2NhbGxiYWNrfX0nKS5qb2luKGNhbGxiYWNrTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gY2FsbGJhY2sgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYWxsYmFjayQ6IE9ic2VydmFibGU8YW55Pjtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRlbGVtZW50LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbShcblx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0d2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbUV2ZW50KGVsZW1lbnQsICdsb2FkJykucGlwZShcblx0XHRcdFx0XHRcdG1hcCh4ID0+IHggYXMgRXZlbnQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRpZiAoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCBzY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHNjcmlwdC5uZXh0U2libGluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5zcmMgPSB1cmw7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YobmV3IEV2ZW50KCdsb2FkZWQhJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==