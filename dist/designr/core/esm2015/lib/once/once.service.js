import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
// export class OnceEvent extends Event { }
export class OnceService {
    constructor(platformId, zone) {
        this.platformId = platformId;
        this.zone = zone;
        this.uid = 0;
        this.paths = [];
    }
    script(url, callback) {
        if (isPlatformBrowser(this.platformId)) {
            // !!! this.zone.runOutsideAngular(() => {
            if (this.paths.indexOf(url) === -1) {
                this.paths.push(url);
                let callbackName;
                if (callback === true) {
                    callbackName = 'OnceCallback' + (++this.uid);
                    url = url.split('{{callback}}').join(callbackName);
                }
                else {
                    callbackName = callback;
                }
                let callback$;
                const element = document.createElement('script');
                element.type = 'text/javascript';
                if (callback) {
                    callback$ = from(new Promise((resolve, reject) => {
                        window[callbackName] = function (data) {
                            resolve(data);
                        };
                    }));
                }
                else {
                    element.async = true;
                    callback$ = fromEvent(element, 'load').pipe(map(x => x));
                }
                const scripts = document.getElementsByTagName('script');
                if (scripts.length) {
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
OnceService.ɵfac = function OnceService_Factory(t) { return new (t || OnceService)(i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); };
OnceService.ɵprov = i0.ɵɵdefineInjectable({ token: OnceService, factory: OnceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OnceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9vbmNlL29uY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXJDLDJDQUEyQztBQUszQyxNQUFNLE9BQU8sV0FBVztJQUt2QixZQUM4QixVQUFrQixFQUN2QyxJQUFZO1FBRFMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTGIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQWEsRUFBRSxDQUFDO0lBS3pCLENBQUM7SUFFTCxNQUFNLENBQUMsR0FBVyxFQUFFLFFBQTJCO1FBQzlDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLDBDQUEwQztZQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxZQUFvQixDQUFDO2dCQUN6QixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ3RCLFlBQVksR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuRDtxQkFBTTtvQkFDTixZQUFZLEdBQUcsUUFBa0IsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxTQUEwQixDQUFDO2dCQUMvQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUNqQyxJQUFJLFFBQVEsRUFBRTtvQkFDYixTQUFTLEdBQUcsSUFBSSxDQUNmLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO3dCQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxJQUFJOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2YsQ0FBQyxDQUFDO29CQUNILENBQUMsQ0FBQyxDQUNGLENBQUM7aUJBQ0Y7cUJBQU07b0JBQ04sT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3JCLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBVSxDQUFDLENBQ3BCLENBQUM7aUJBQ0Y7Z0JBQ0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ25CLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUM1RDtnQkFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsT0FBTyxTQUFTLENBQUM7YUFDakI7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUNoQztZQUNELE1BQU07U0FDTjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOztzRUFyRFcsV0FBVyxjQU1kLFdBQVc7bURBTlIsV0FBVyxXQUFYLFdBQVcsbUJBRlgsTUFBTTtrREFFTixXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBT0UsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tLCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8vIGV4cG9ydCBjbGFzcyBPbmNlRXZlbnQgZXh0ZW5kcyBFdmVudCB7IH1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25jZVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgdWlkOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHBhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lLFxuXHQpIHsgfVxuXG5cdHNjcmlwdCh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBzdHJpbmcgfCBib29sZWFuKTogT2JzZXJ2YWJsZTxFdmVudD4ge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHQvLyAhISEgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBhdGhzLmluZGV4T2YodXJsKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5wYXRocy5wdXNoKHVybCk7XG5cdFx0XHRcdGxldCBjYWxsYmFja05hbWU6IHN0cmluZztcblx0XHRcdFx0aWYgKGNhbGxiYWNrID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gJ09uY2VDYWxsYmFjaycgKyAoKyt0aGlzLnVpZCk7XG5cdFx0XHRcdFx0dXJsID0gdXJsLnNwbGl0KCd7e2NhbGxiYWNrfX0nKS5qb2luKGNhbGxiYWNrTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tOYW1lID0gY2FsbGJhY2sgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYWxsYmFjayQ6IE9ic2VydmFibGU8YW55Pjtcblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0XHRlbGVtZW50LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbShcblx0XHRcdFx0XHRcdG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0d2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YSk7XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5hc3luYyA9IHRydWU7XG5cdFx0XHRcdFx0Y2FsbGJhY2skID0gZnJvbUV2ZW50KGVsZW1lbnQsICdsb2FkJykucGlwZShcblx0XHRcdFx0XHRcdG1hcCh4ID0+IHggYXMgRXZlbnQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRpZiAoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjb25zdCBzY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHNjcmlwdC5uZXh0U2libGluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbWVudC5zcmMgPSB1cmw7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YobmV3IEV2ZW50KCdsb2FkZWQhJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==